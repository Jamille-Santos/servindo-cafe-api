// Arquivo principal do servidor

import express from 'express';
import coffeeRoutes from './routes/coffeeRoutes.js';

const app = express();
// Define a porta do servidor
const PORT = process.env.PORT || 3000;

// Middleware para analisar o corpo das requisições em JSON
app.use(express.json());

// Todas as rotas de café começam com /api
app.use('/api', coffeeRoutes);

// Rota raiz para teste e apresentação
app.get('/', (req, res) => {
    res.send('API de Café está funcionando!');
});

// Inicializa o servidor na porta definida
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});