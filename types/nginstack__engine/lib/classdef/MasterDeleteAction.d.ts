/**
 * Enumerado com as possíveis ações que devem ser realizadas nos registros detalhes ao excluir
 * o registro mestre.
 * @enum {number}
 */

/**
 * Deve ser gerado um erro caso haja registros detalhes no momento da exclusão do registro
 * mestre.
 */
export const ERROR = 0;

/**
 * Os registros detalhes devem ser excluídos.
 */
export const DELETE = 1;

/**
 * Os campos que vinculam os registros detalhes,
 * {@link module:@nginstack/engine/lib/classdef/Field#detailFieldNames}, devem ser preenchidos com
 * **null**.
 */
export const UNLINK = 2;

/**
 * Ignora os eventos de exclusão. Útil para grades detalhe com dados temporários que não são
 * persistidos na base de dados.
 */
export const IGNORE = 3;
