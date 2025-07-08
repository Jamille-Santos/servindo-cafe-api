import {
    fetchRandomCoffeeImage,
    fetchCoffeeFacts
} from '../services/coffeeService.js';
import { generateCode } from '../utils/codeGenerator.js';

export const getRandomCoffeeImage = async (req, res) => {
    try {
        const imageUrl = await fetchRandomCoffeeImage();
        res.json({ url: imageUrl }); // <-- Retorna só JSON!
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Erro ao obter imagem de café' });
    }
};

export const getCoffeeFacts = async (req, res) => {
    try {
        const facts = await fetchCoffeeFacts();
        res.json(facts);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Erro ao ler fatos sobre café' });
    }
};

export const getDiscountCode = (req, res) => {
    const code = generateCode();
    res.json({ code });
};