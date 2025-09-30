
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
Domingos Sávio de Paiva Barbosa Júnior

Nicolas de Oliveira Duarte

Rodolfo Pacheco Paula Bittencourt

Sávio Almeida Melo
