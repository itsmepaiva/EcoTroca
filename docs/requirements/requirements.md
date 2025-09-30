## Requisitos Funcionais (RF)

- Gerenciamento de Conta:

RF001: O sistema deve permitir que um novo usuário se cadastre fornecendo nome, e-mail e senha.

RF002: O sistema deve permitir que um usuário autenticado faça login usando e-mail e senha.

RF003: O sistema deve permitir que um usuário edite as informações do seu perfil (nome, foto).

RF004: O sistema deve permitir que um usuário redefina sua senha caso a tenha esquecido.

RF005: O sistema deve permitir que o usuário visualize seu histórico de trocas (concluídas, pendentes, recusadas).

- Gerenciamento de Itens:

RF006: O sistema deve permitir que um usuário cadastrado publique um novo item para troca, informando título, descrição, categoria e fotos.

RF007: O sistema deve permitir que o usuário especifique quais tipos de itens ele tem interesse em receber em troca do seu objeto.

RF008: O sistema deve permitir que um usuário edite as informações de um item que ele publicou.

RF009: O sistema deve permitir que um usuário remova um anúncio de item.

RF010: O sistema deve permitir que o usuário marque um item como "trocado" ou "indisponível".

- Busca e Visualização:

RF011: O sistema deve exibir uma lista de itens disponíveis para troca na página principal.

RF012: O sistema deve permitir a busca de itens por palavra-chave no título ou descrição.

RF013: O sistema deve permitir a filtragem de itens por categoria.

- Sistema de Troca:

RF014: O sistema deve permitir que um usuário interessado em um item inicie uma negociação enviando uma proposta de troca.

RF015: O usuário que recebe uma proposta deve poder aceitá-la, recusá-la ou enviar uma contraproposta.

RF016: O sistema deve notificar os usuários sobre novas propostas, mensagens e status de negociação.

RF017: O sistema deve fornecer um chat interno para que os usuários possam conversar durante a negociação.

- Avaliação e Reputação:

RF018: Após uma troca ser marcada como concluída por ambas as partes, o sistema deve permitir que os usuários se avaliem mutuamente.

RF019: O sistema deve exibir a avaliação média de um usuário em seu perfil público.


## Requisitos Não-Funcionais (RNF)

RNF001 (Desempenho): O sistema deve carregar as páginas principais em no máximo 3 segundos.

RNF002 (Usabilidade): A interface deve ser intuitiva e responsiva, adaptando-se a diferentes tamanhos de tela (desktop, tablet, celular).

RNF003 (Segurança): As senhas dos usuários devem ser armazenadas de forma criptografada (hashed) no banco de dados.

RNF004 (Segurança): A comunicação entre o frontend e o backend deve ser feita via HTTPS para garantir a confidencialidade dos dados.

RNF005 (Disponibilidade): O sistema deve estar disponível para os usuários 99% do tempo.

RNF006 (Compatibilidade): O sistema deve ser compatível com as versões mais recentes dos navegadores Chrome, Firefox, Safari e Edge.

RNF007 (Escalabilidade): A arquitetura deve suportar um aumento de 50% no número de usuários e itens cadastrados nos primeiros seis meses sem degradação de performance.


## Regras de Negocio 

RN01: Um usuário deve ter uma conta ativa para publicar um item ou iniciar uma negociação.

RN02: Cada item deve pertencer a uma e somente uma categoria.

RN03: Um usuário não pode fazer uma proposta para um item que ele mesmo publicou.

RN04: Uma negociação de troca envolve exatamente dois usuários.

RN05: Um item que está em uma negociação aceita não pode ser negociado com outros usuários até que a troca seja concluída ou cancelada.

RN06: Um usuário só pode avaliar outro usuário após a conclusão de uma troca entre eles.

RN07: O cadastro de um novo usuário requer um e-mail válido e único na plataforma.

RN08: Todo item publicado deve conter pelo menos uma foto.


## Perfis de Usuários

- Visitante:

Descrição: Qualquer pessoa que acessa a plataforma sem estar logada.

Permissões:

    Visualizar os itens disponíveis para troca.

    Buscar e filtrar itens.

    Acessar a página de cadastro e login.

Objetivos: Explorar a plataforma, ver se encontra algo de interesse antes de decidir se cadastrar.

- Usuário Trocador (Usuário Cadastrado):

Descrição: Um usuário que completou o cadastro e está logado no sistema. Este é o perfil principal da plataforma.

Permissões:

    Todas as permissões do Visitante.

    Gerenciar seu próprio perfil (editar dados, foto).

    Publicar, editar e remover seus próprios anúncios de itens.

    Iniciar negociações, fazer propostas, aceitar ou recusar ofertas.

    Comunicar-se com outros usuários via chat.

    Visualizar seu histórico de trocas.

Objetivos: Encontrar novos donos para seus objetos que não usa mais, adquirir novos itens sem custo e participar de uma comunidade sustentável.
