## Endpoints Previstos:
GET /itens: Lista todos os itens disponíveis.

GET /itens/:id: Detalhes de um item específico.

POST /itens: Cria um novo item (requer token JWT).

PUT /itens/:id: Atualiza um item existente.

DELETE /itens/:id: Remove um item.

POST /auth/login: Autenticação do usuário.

POST /auth/register: Cadastro de novo usuário.

GET /perfil/:id: Retorna os itens cadastrados por um usuário.

GET /propostas: Listar propostas (exclusivo para EcoTroca).

POST /propostas: Criar nova proposta (exclusivo para EcoTroca).

