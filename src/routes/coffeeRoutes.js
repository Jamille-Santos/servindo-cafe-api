// Este arquivo define as rotas da API e faz a ligação com o controlador

import { Router } from 'express';
import { getRandomCoffeeImage, getCoffeeFacts, getDiscountCode } from '../controllers/coffeeController.js';

const router = Router();

// Rota para obter uma imagem aleatória de café
router.get('/coffees/random-image', getRandomCoffeeImage);

// Rota para obter fatos sobre café
router.get('/coffees/facts', getCoffeeFacts);

// Rota para obter um código de desconto para reserva de café
router.get('/reservations/discount-code', getDiscountCode);

export default router;