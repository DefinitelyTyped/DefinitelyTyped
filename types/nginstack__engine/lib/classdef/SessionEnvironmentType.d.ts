/**
 * Tipos de ambientes que podem ser configurados em um realm HTTP.
 * @enum {number}
 */

/**
 * Indica que o ambiente não deve preservar o estado do ambiente entre requisições. Dessa
 * forma, uma requisição não pode fazer uso de dados da requisição anteriores guardados apenas
 * no ambiente JavaScript.
 */
export const STATELESS = 0;

/**
 * Indica que o ambiente deve preservar o estado do ambiente entre requisições. Dessa
 * forma, uma requisição pode fazer uso de dados da requisição anteriores guardados no ambiente
 * JavaScript.
 *
 * O sistema faz uso de cookies para identificar quais requisições são relacionadas a uma
 * sessão de usuário
 */
export const STATEFUL = 1;

/**
 * @deprecated Utilize {@link #STATEFUL}.
 */
export const STATEFULL = 1;
