/**
 * Modos como devem ser tratadas as tentativas de registrar uma função de listener duplicada em
 * um Emitter.
 * @enum {number}
 * @see module:@nginstack/engine/lib/event/Emitter#duplicationHandling
 */

/**
 * Ignora a função listener duplicada, conforme especificação W3C.
 */
export const IGNORE = 0;

/**
 * Registra a função listener duplicada.
 */
export const ACCEPT = 1;

/**
 * Remove a definição anterior e registra a função listener no final da fila de listeners.
 */
export const REMOVE = 2;
