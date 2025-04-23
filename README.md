# Servindo Café API

## Problema

O café é uma das bebidas mais consumidas no mundo, e muitas pessoas adoram aprender curiosidades sobre ele ou visualizar imagens relacionadas. No entanto, não há uma API simples que combine esses dois aspectos.

## Solução

A **Servindo Café API** resolve esse problema fornecendo:
- Um endpoint para obter imagens aleatórias de café.
- Um endpoint para acessar fatos interessantes sobre café.
- Um gerador de códigos de desconto para reservas.

## Tecnologias Utilizadas

- **Node.js**: Plataforma para execução do JavaScript no servidor.
- **Express**: Framework para criação de APIs.
- **Node-fetch**: Biblioteca para realizar requisições HTTP.
- **Nodemon**: Ferramenta para desenvolvimento com reinício automático do servidor.
- **CORS**: Middleware para habilitar o compartilhamento de recursos entre origens.

## Como Rodar

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/Jamille-Santos/servindo-cafe-api.git
   cd servindo-cafe-api
   ```

2. **Instale as dependências**:
   ```bash
   npm install
   ```

3. **Inicie o servidor**:
   - Modo de produção:
     ```bash
     npm start
     ```
   - Modo de desenvolvimento:
     ```bash
     npm run dev
     ```

4. **Acesse a API**:
   - Teste a API no navegador ou em ferramentas como Postman.
   - URL base: `http://localhost:3000/api`

## Endpoints

### 1. Obter Imagem Aleatória de Café
- **Rota**: `/api/coffees/random-image`
- **Método**: `GET`
- **Descrição**: Retorna uma imagem aleatória de café.

### 2. Obter Fatos Sobre Café
- **Rota**: `/api/coffees/facts`
- **Método**: `GET`
- **Descrição**: Retorna um array de fatos sobre café.

### 3. Gerar Código de Desconto
- **Rota**: `/api/reservations/discount-code`
- **Método**: `GET`
- **Descrição**: Retorna um código de desconto aleatório.

## Estrutura do Projeto

```
servindo-cafe-api/
├── src/
│   ├── controllers/       # Controladores das rotas
│   ├── models/            # Dados estáticos (ex.: coffeeFacts.json)
│   ├── routes/            # Definição das rotas
│   ├── services/          # Serviços para lógica de negócios
│   ├── utils/             # Utilitários (ex.: gerador de código)
│   └── index.js           # Arquivo principal do servidor
├── package.json           # Configurações do projeto e dependências
├── README.md              # Documentação do projeto
└── .gitignore             # Arquivos ignorados pelo Git
```

## Contribuição

Sinta-se à vontade para abrir issues ou enviar pull requests para melhorias.

