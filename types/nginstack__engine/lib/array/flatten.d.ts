export = flatten;
/** @module @nginstack/engine/lib/array/flatten */
/**
 * Retorna um array contendo todos os argumentos e com todos os arrays
 * expandidos recursivamente.
 * @param {...*} var_args Os valores a serem expandidos.
 * @return {!Array.<*>} Valores de expandidos.
 * @author Adaptado de goog.array.flatten da Closure Library
 */
declare function flatten(...args: any[]): any[];
