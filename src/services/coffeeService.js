import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs/promises';
import fetch from 'node-fetch';

// Obtém o caminho absoluto do arquivo atual e do diretório
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Busca uma imagem aleatória de café de um endpoint público.
 * @returns {Promise<string>} URL da imagem.
 */
export const fetchRandomCoffeeImage = async () => {
    // Faz uma requisição para o endpoint que retorna um JSON com a URL da imagem
    const res = await fetch('https://coffee.alexflipnote.dev/random.json');
    if (!res.ok) {
        // Lança erro caso a requisição falhe
        throw new Error('Erro ao obter imagem de café');
    }
    const data = await res.json();
    // Retorna a URL da imagem de café
    return data.file;
};

/**
 * Lê um arquivo JSON local contendo fatos sobre café.
 * @returns {Promise<Array>} Array de fatos sobre café.
 */
export const fetchCoffeeFacts = async () => {
    // Monta o caminho absoluto para o arquivo de fatos
    const filePath = path.join(__dirname, '../models/coffeeFacts.json');
    // Lê o conteúdo do arquivo como string
    const jsondata = await fs.readFile(filePath, 'utf-8');
    // Converte a string JSON em array e retorna
    return JSON.parse(jsondata);
};
