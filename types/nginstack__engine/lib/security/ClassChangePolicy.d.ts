/**
 * As formas de alteração de classe de registros suportadas pelo sistema.
 * @enum {number}
 */

/**
 * A verificação de permissão ao alterar uma classe deve verificar a permissão de remover da
 * classe atual e de inserir da classe nova.
 */
export const DELETE_AND_INSERT = 1;

/**
 * A verificação de permissão ao alterar uma classe deve verificar apenas a permissão de alterar
 * da classe atual.
 */
export const CHANGE = 2;
