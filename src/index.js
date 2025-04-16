// arquivo principal do servidor
import express from 'express';
import coffeRoutes from './routes/coffeeRoutes.js';

const app = express();
// Define a porta do servidor
const PORT = process.env.PORT || 3000;
// Middleware para analisar o corpo das requisições

app.use(express.json());
// Todas as rotas de café começam com /api
app.use('/api', coffeRoutes);
//Rota para teste e apresentação

app.get('/', (req, res) => {
    res.send('API de Café está funcionando!');
}
);
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
}
);