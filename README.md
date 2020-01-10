#BossaBOx API
Este repositório contém uma simples API.
Requisitos:
* NodeJS v5.2.0+

## Como executar
Faça o clone/download deste repositório, execute `npm install ou yarn` e `npm start ou yarn start`. A API fica localizada em `http://localhost:3000`.

## Rotas
Todas as requisições de POST para esta API devem conter o header `Content-Type: application/json`.
Esta API contém as seguintes rotas:
	
* `POST /users` : cria um novo usuario
* `POST /session` : Gera um token para o usuario
* `GET /tools` : lista as ferramentas cadastradas
* `POST /tools` : cria uma nova ferramenta
* `GET /tools/:id` : exibe a ferramenta com ID :id
* `DELETE /tools/:id` : apaga a ferramenta com ID :id

Para filtrar as ferramentas em `GET /tools`, é possível:
* fazer uma busca global utilizando a query string `?tag=:busca`;

Para acessa as rotas `/tools` será necessario do token gerado na rota `/session`
