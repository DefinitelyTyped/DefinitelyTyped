/**
 * Opções para o modo de somente leitura do campo.
 * @enum {number}
 */

/**
 * O campo sempre pode ser modificado pelo usuário.
 */
export const NEVER = 0;

/**
 * O campo nunca pode ser modificado pelo usuário, apenas internamente pelos eventos
 * da classe de dados e objetos de gestão.
 */
export const ALWAYS = 1;

/**
 * O campo pode ser modificado durante a inserção do registro. Após a inserção, ele não
 * poderá ser mais modificado pelo usuário, mesmo que não tenha sido preenchido durante
 * a inserção.
 */
export const AFTER_INSERT = 2;

/**
 * @deprecated Utilize {@link module:@nginstack/engine/lib/classdef/ReadOnlyMode#AFTER_INSERT}.
 */
export const ONEDIT = 2;

/**
 * O campo pode ser modificado até que seja preenchido pela primeira vez. Após ser
 * preenchido, ele não poderá ser mais modificado pelo usuário. Durante a inserção do
 * registro, o campo com este modo de somente leitura poderá ser modificado livremente
 * até que seja efetivada a inserção. Após a efetivação, e caso ele tenha conteúdo, não
 * poderá ser mais modificado.
 */
export const FILLED = 3;
