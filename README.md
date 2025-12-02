
# EcoTroca

O EcoTroca é uma plataforma web com impacto social, desenvolvida para conectar pessoas que desejam trocar objetos que não utilizam mais. Inspirado no conceito de "feira de trocas" online, o projeto busca criar uma solução intuitiva e segura onde o que é obsoleto para uma pessoa pode ter grande valor para outra. A plataforma visa fomentar uma comunidade engajada na economia circular, promovendo o consumo consciente e a redução de resíduos de forma prática e acessível.

## Problema abordado e justificativa

Vivemos em uma sociedade marcada pela cultura do consumo e do descarte. A economia linear ("comprar, usar, jogar fora") resulta em um acúmulo crescente de resíduos, esgotamento de recursos naturais e um significativo impacto ambiental. Muitas vezes, objetos em perfeito estado de uso são descartados por não terem mais utilidade para seus donos, enquanto outras pessoas poderiam se beneficiar enormemente desses itens, mas não têm acesso a eles. A falta de um canal seguro, centralizado e eficiente para facilitar trocas diretas entre pessoas de uma mesma comunidade é uma barreira para a prática da reutilização.

O projeto EcoTroca se justifica pela urgência de migrar para modelos de consumo mais sustentáveis. Ao oferecer uma ferramenta digital que viabiliza a economia circular no nível comunitário, a plataforma ataca diretamente o problema do desperdício. Além de seu valor ambiental, o projeto possui um forte componente social, permitindo que pessoas adquiram itens necessários sem custo monetário, promovendo a inclusão e a economia colaborativa. A iniciativa está alinhada com os Objetivos de Desenvolvimento Sustentável (ODS) da ONU, especialmente o ODS 11 (Cidades e Comunidades Sustentáveis).

## Objetivos do Sistema

Desenvolver uma plataforma web funcional, intuitiva e segura que facilite a troca de objetos entre usuários, promovendo a sustentabilidade e a interação comunitária.

## Escopo do projeto

- Cadastro de Usuário: Criação de perfil, login/logout e gerenciamento de dados pessoais.

- Cadastro e Gerenciamento de Itens: Publicação, edição e exclusão de anúncios de objetos para troca.

- Sistema de Busca e Navegação: Pesquisa por palavras-chave e filtros por categoria, localização, etc.

- Sistema de Troca: Funcionalidade para enviar, aceitar, recusar ou contrapropor ofertas de troca.

- Comunicação: Chat entre usuários que estão negociando.

## Visão Geral da Arquitetura
A arquitetura proposta seguirá um modelo de três camadas (Three-Tier Architecture), que separa a apresentação, a lógica de negócio e o armazenamento de dados. Isso garante um sistema modular, escalável e de fácil manutenção. Baseada no padrao de Arquitetura MVC.

## Tecnologias Propostas
- Frontend
    
    React: Biblioteca principal para a construção da interface do usuário.

    React Router DOM: Gerenciamento de rotas e navegação.

    CSS / Bootstrap: Estilização e design responsivo.

    JSON Server: Simulação da API durante a fase de desenvolvimento do frontend.

    Axios: Biblioteca para fazer requisições HTTP e consumir a API do backend.

    SweetAlert: Utilizado para criar alertas e mensagens de feedback personalizadas para o usuário.

- Backend

    Node.js: Ambiente de execução para o servidor.

    Express: Framework para a construção da API RESTful.

    Prisma ORM: ORM (Object-Relational Mapper) para modelagem e interação com o banco de dados.

    PostgreSQL: Banco de dados relacional para persistência de dados.

    Bcrypt: Biblioteca utilizada para a criptografia segura das senhas dos usuários.

    JWT (JSON Web Tokens): Implementação de autenticação segura.

    CORS: Middleware para permitir requisições seguras entre o frontend (React) e o backend (Node.js).

- Ferramentas

    VSCode: Editor de código.

    Insomnia / Postman: Ferramentas para testes de requisições da API.

    GitHub: Controle de versão e colaboração.

    Figma: Utilizado para criar o protótipo visual e o planejamento do fluxo de navegação do frontend.

- Hospedagem (Cloud/Deploy):

    Plataformas: Render, Heroku ou provedores de nuvem como AWS (EC2/RDS), Google Cloud ou Azure para um ambiente de produção escalável.


## Integrantes
- Domingos Sávio de Paiva Barbosa Júnior

-Filipe Victor Braga Da Costa

-Nicolas de Oliveira Duarte

-Rodolfo Pacheco Paula Bittencourt

-Sávio Almeida Melo

-Yan Levi Leal Chagas


### Pré-requisitos

Primeiro, certifique-se de que você tem os seguintes softwares instalados na sua máquina:

- **Node.js**: Essencial para rodar o backend e os scripts do frontend. Você pode baixá-lo do site oficial.

- **Git**: Para clonar o projeto do GitHub.

- **PostgreSQL**: O banco de dados do projeto. Você pode instalar o PostgreSQL diretamente ou usar ferramentas como o Docker.

- **Gerenciador de pacotes**: `npm` (geralmente já vem com o Node.js) ou `yarn`.

- **Editor de código**: Um como o VSCode.

---

Para rodar este projeto na sua máquina local, você precisará configurar tanto o ambiente frontend (React) quanto o backend (Node.js) e o banco de dados (PostgreSQL) separadamente.

### Passo a Passo

#### 1. Clonar o Repositório

Abra o terminal ou prompt de comando e clone o projeto do GitHub:

```

git clone <URL_DO_REPOSITÓRIO_GITHUB>

cd <NOME_DO_REPOSITÓRIO>

```

---

#### 2. Configurar o Backend (Node.js e PostgreSQL)

Navegue até a pasta do backend e instale as dependências:

```

cd backend

npm install

```

**Configurar o Banco de Dados:**

1. Certifique-se de que o seu servidor PostgreSQL está rodando.

2. Crie um novo banco de dados para o projeto.

3. No projeto, provavelmente haverá um arquivo de configuração de variáveis de ambiente (`.env` ou similar). Crie um arquivo `.env` e configure a string de conexão com o banco de dados. Exemplo:

```

DATABASE_URL="postgresql://USUARIO:SENHA@HOST:PORTA/NOME_DO_BANCO?schema=public"

```

**Rodar as Migrações do Prisma:**

O projeto utiliza o Prisma ORM, então você precisa aplicar a `schema` do banco de dados.

```

# Aplica o esquema do banco de dados e gera o cliente Prisma

npx prisma migrate dev --name init

```

**Iniciar o Servidor:**

Com o banco de dados configurado, você pode iniciar o servidor da API:

```

npm run dev

```

O servidor do backend estará rodando, geralmente, em `http://localhost:3001`. Você pode testar os endpoints usando ferramentas como o Insomnia ou Postman.

---

#### 3. Configurar o Frontend (React)

Abra um novo terminal, navegue para a pasta do frontend e instale as dependências:

```

cd ../frontend

npm install

```

**Configurar as Variáveis de Ambiente:**

O frontend precisa saber onde o backend está rodando. Crie um arquivo `.env` na raiz do frontend e aponte para a URL do backend.

```

VITE_API_URL=http://localhost:3001

```

**Iniciar a Aplicação React:**

Com as dependências instaladas, inicie o frontend:

Bash

```

npm run dev

```

A aplicação React estará rodando, provavelmente, em `http://localhost:5173`. Agora você pode acessar a aplicação no seu navegador, e ela fará requisições para a API do backend.
