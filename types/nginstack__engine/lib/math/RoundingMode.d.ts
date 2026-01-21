/**
 * Classe utilizada para enumerar os valores possíveis do parâmetro mode do
 * método Math.decimalRound.
 * @enum {number}
 */

/**
 * Arredonda para o decimal mais próximo ou mantém o mesmo dígito.
 */
export const HALF_EVEN = 1;

/**
 * Arredonda para o decimal mais próximo ou para o dígito ímpar.
 */
export const HALF_ODD = 2;

/**
 * Arredonda para o decimal mais próximo ou para o maior valor mais próximo.
 */
export const HALF_POSITIVE = 3;

/**
 * Arredonda para o decimal mais próximo ou para o menor valor mais próximo
 */
export const HALF_NEGATIVE = 4;

/**
 * Arredonda para o decimal mais próximo ou em direção a zero (truncamento).
 */
export const HALF_DOWN = 5;

/**
 * Arredonda para o decimal mais próximo ou para longe do zero.
 */
export const HALF_UP = 6;

/**
 * Arredonda para o menor valor decimal mais próximo.
 */
export const FLOOR = 7;

/**
 * Arredonda para o maior valor decimal mais próximo.
 */
export const CEILING = 8;

/**
 * Arredonda em direção a zero (truncamento).
 */
export const DOWN = 9;

/**
 * Arredonda para longe de zero.
 */
export const UP = 10;
