Nesse projeto pude aprender sobre API na memória, que é uma biblioteca que intercepta o Angular Http e HttpClient solicitações que, de outra forma, iriam para o servidor remoto e as redireciona para um armazenamento de dados na memória que você controla no frontend. Com esta biblioteca, você pode imitar perfeitamente as respostas atrasadas e fazer basicamente tudo o que precisa de um desenvolvedor  back-end. No entanto, ele possui recursos limitados e não se destina ao uso em produção.

Tem como casos de uso:
Aplicativos de demonstração que precisam simular operações de persistência de dados CRUD sem um servidor real. Você não terá que construir e iniciar um servidor de teste.
Criar protótipos e provas de conceito.
Compartilhar exemplos com a comunidade em um ambiente de codificação da Web, como Plunker ou CodePen. Criar problemas Angular e respostas StackOverflow suportadas por código ativo.
Simular operações em coleções de dados que ainda não foram implementadas em seu servidor de desenvolvimento/teste. Você pode passar solicitações para o servidor de desenvolvimento/teste para coleções com suporte.
Escreva aplicativos de teste de unidade que leem e gravam dados. Evite o incômodo de interceptar várias chamadas http e fabricar sequências de respostas. O armazenamento de dados na memória é redefinido para cada teste, portanto, não há poluição de dados entre testes.
Testes de ponta a ponta. Se você puder alternar o aplicativo para o modo de teste usando a API da Web na memória, não perturbará o banco de dados real. Isso pode ser especialmente útil para compilações de CI (integração contínua).
