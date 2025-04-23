import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs/promises';
import fetch from 'node-fetch';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Busca uma imagem aleatória de café de um endpoint público.
 * @returns {Promise<string>} URL da imagem.
 */
export const fetchRandomCoffeeImage = async () => {
    const res = await fetch('https://coffee.alexflipnote.dev/random.json');
    if (!res.ok) {
        throw new Error('Erro ao obter imagem de café');
    }
    const data = await res.json();
    return data.file; // Retorna a URL da imagem.
};

/**
 * Lê um arquivo JSON local contendo fatos sobre café.
 * @returns {Promise<Array>} Array de fatos sobre café.
 */
export const fetchCoffeeFacts = async () => {
    const filePath = path.join(__dirname, '../models/coffeeFacts.json');
    const jsondata = await fs.readFile(filePath, 'utf-8');
    return JSON.parse(jsondata); // Retorna os fatos como um array.
};
