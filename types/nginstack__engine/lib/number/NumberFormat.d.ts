/**
 * Formato decimal. Exemplo: 1.234,56.
 */
export const DECIMAL = -1892603085;

/**
 * Formato inteiro. Exemplo: 1.234.567.890.
 */
export const INTEGER = -1892603082;

/**
 * Formato inteiro para chaves do banco de dados. Exemplo: -1234567890.
 */
export const DBKEY = -1898139222;

/**
 * Formatos numéricos aceitos pelas funções {@link module:@nginstack/engine/lib/number/formatNumber} e
 * {@link module:@nginstack/engine/lib/number/parseNumber}.
 * @enum {number}
 */
export type NumberFormatType = typeof DECIMAL | typeof INTEGER | typeof DBKEY;
