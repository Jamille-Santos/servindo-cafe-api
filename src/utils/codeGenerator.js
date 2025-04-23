/**
 * Gera um código numérico aleatório de 6 dígitos.
 * @returns {number} Código de desconto.
 */
export const generateCode = () => {
    const min = 100000;
    const max = 999999;
    return Math.floor(Math.random() * (max - min + 1)) + min;
};