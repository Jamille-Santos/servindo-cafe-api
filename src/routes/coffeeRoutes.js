//este arquivo define as rotas da API e faz a ligação com o controlador

import { Router } from 'express';
import { getRandomCoffeeImage, getCoffeeFacts, getDiscountCode } from '../controllers/coffeeController.js';
// Importa o express para criar as rotas
const router = Router();

router.get('/coffees/random-image', getRandomCoffeeImage);
// Rota para obter uma imagem aleatória de café
router.get('/coffees/facts', getCoffeeFacts);
// Rota para obter fatos sobre café
router.get('/reservations/discount-code', getDiscountCode);
// Rota para obter um código de desconto para reserva de café

export default router;