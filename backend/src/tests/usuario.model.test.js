// 1. Simulações (Mocks)
// Simula a biblioteca bcryptjs
const bcrypt = require("bcryptjs");
jest.mock("bcryptjs", () => ({
  hash: jest.fn(),
  compare: jest.fn(),
}));

// Simula a instância do Prisma
const mockPrisma = {
  usuario: {
    findMany: jest.fn(),
    findUnique: jest.fn(),
    create: jest.fn(),
    update: jest.fn(),
    delete: jest.fn(),
  },
};
// Simula o arquivo onde a instância do Prisma é exportada
jest.mock("../prisma", () => mockPrisma);

// Importa o Model a ser testado
const usuarioModel = require("src/models/usuarioModel.js"); 

// Dados de teste
const mockUsuario = {
  id_usuario: 1,
  nome: "Teste",
  email: "teste@example.com",
  senha: "hashedPassword",
};

describe("Usuario Model Tests", () => {
  // Limpa os mocks antes de cada teste para garantir isolamento
  beforeEach(() => {
    jest.clearAllMocks();
  });

  // =========================================================
  // Teste 1: getAllUsuarios
  // =========================================================
  test("getAllUsuarios deve retornar todos os usuários ordenados", async () => {
    // 1. Configurar o mock para simular o resultado do Prisma
    mockPrisma.usuario.findMany.mockResolvedValue([mockUsuario, { ...mockUsuario, id_usuario: 2 }]);

    // 2. Executar a função do model
    const usuarios = await usuarioModel.getAllUsuarios();

    // 3. Afirmações (Assertions)
    // Verifica se a função findMany do Prisma foi chamada
    expect(mockPrisma.usuario.findMany).toHaveBeenCalledTimes(1);
    // Verifica se foi chamada com a ordenação correta
    expect(mockPrisma.usuario.findMany).toHaveBeenCalledWith({
      orderBy: {
        nome: "desc",
      },
    });
    // Verifica se retornou o resultado esperado
    expect(usuarios).toHaveLength(2);
    expect(usuarios[0].nome).toBe("Teste");
  });

  // =========================================================
  // Teste 2: getUsuarioById
  // =========================================================
  test("getUsuarioById deve retornar um usuário pelo ID", async () => {
    // 1. Configurar o mock
    mockPrisma.usuario.findUnique.mockResolvedValue(mockUsuario);

    // 2. Executar a função
    const usuario = await usuarioModel.getUsuarioById(1);

    // 3. Afirmações
    expect(mockPrisma.usuario.findUnique).toHaveBeenCalledWith({
      where: { id_usuario: 1 },
    });
    expect(usuario.email).toBe("teste@example.com");
  });

  // =========================================================
  // Teste 3: addUsuario
  // =========================================================
  test("addUsuario deve criar um novo usuário com senha criptografada", async () => {
    const nome = "Novo User";
    const email = "novo@ex.com";
    const senha = "plainPassword";
    const hashedPassword = "HASH_SECRET";

    // 1. Configurar os mocks
    bcrypt.hash.mockResolvedValue(hashedPassword); // Simula o bcrypt
    mockPrisma.usuario.create.mockResolvedValue({ // Simula o Prisma
      ...mockUsuario,
      nome,
      email,
      senha: hashedPassword,
    });

    // 2. Executar a função
    const novoUsuario = await usuarioModel.addUsuario(nome, email, senha);

    // 3. Afirmações
    // Verifica se a senha foi criptografada
    expect(bcrypt.hash).toHaveBeenCalledWith(senha, 10);
    // Verifica se o Prisma foi chamado para criar o usuário com a senha HASHED
    expect(mockPrisma.usuario.create).toHaveBeenCalledWith({
      data: {
        nome: nome,
        email: email,
        senha: hashedPassword,
      },
    });
    // Verifica o retorno
    expect(novoUsuario.senha).toBe(hashedPassword);
  });

  // =========================================================
  // Teste 4: deleteUsuario
  // =========================================================
  test("deleteUsuario deve deletar um usuário existente", async () => {
    // 1. Configurar os mocks
    // Simula a chamada interna: getUsuarioById (para que passe na verificação)
    mockPrisma.usuario.findUnique.mockResolvedValue(mockUsuario); 
    // Simula a deleção
    mockPrisma.usuario.delete.mockResolvedValue(mockUsuario);

    // 2. Executar a função
    const resultado = await usuarioModel.deleteUsuario(1);

    // 3. Afirmações
    // Verifica se a função interna getUsuarioById foi chamada
    expect(mockPrisma.usuario.findUnique).toHaveBeenCalledTimes(1);
    // Verifica se a função delete foi chamada
    expect(mockPrisma.usuario.delete).toHaveBeenCalledWith({
      where: { id_usuario: 1 },
    });
    // Verifica o retorno
    expect(resultado.id_usuario).toBe(1);
  });
  
  test("deleteUsuario deve lançar erro se o usuário não for encontrado", async () => {
    // 1. Configurar o mock para não encontrar o usuário
    mockPrisma.usuario.findUnique.mockResolvedValue(null); 

    // 2. Executar a função e esperar que lance um erro
    // O Jest usa expect(...).rejects.toThrow() para testar erros em funções async
    await expect(usuarioModel.deleteUsuario(999)).rejects.toThrow(
      "Usuário não encontrado"
    );

    // 3. Afirmações
    // O delete do Prisma NUNCA deve ser chamado neste cenário
    expect(mockPrisma.usuario.delete).not.toHaveBeenCalled();
  });
});