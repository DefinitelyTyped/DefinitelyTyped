/**
 * Modos de persistência das propriedades objeto global e de contexto **session**.
 *
 * A persistência automática via Engine não é otimizada e não deve ser utilizada. Processos que
 * necessitem de persistência, devem utilizar o banco de dados ou criar soluções próprias.
 * @enum {number}
 */

/**
 * Indica que o Engine não deve persistir as propriedades do objeto global e de contexto
 * **session**.
 */
export const NONE = 0;

/**
 * Indica que o Engine deve persistir as propriedades do objeto global e de contexto
 * **session** por meio de cookies.
 */
export const COOKIE = 1;

/**
 * Não implementado.
 */
export const LOCALSTORAGE = 2;

/**
 * Não implementado.
 */
export const DBSTORAGE = 3;
