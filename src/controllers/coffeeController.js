import {
    fetchRandomCoffeeImage,
    fetchCoffeeFacts
} from '../services/coffeeService.js';
import { generateCode } from '../utils/codeGenerator.js';

export const getRandomCoffeeImage = async (req, res) => {
    try {
        const imageUrl = await fetchRandomCoffeeImage();
        res.send(`
            <html> 
                <head><title>${JSON.stringify({ url: imageUrl })}</title></head>
                <body>
                    <img src="${imageUrl}" alt="Café" style="max-width: 100%; height: auto;" />
                    <pre>${JSON.stringify({ url: imageUrl }, null, 2)}</pre>
                </body>
            </html>`);
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