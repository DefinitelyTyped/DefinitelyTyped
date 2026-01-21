/**
 * Modos de operação para se obter as permissões de classes e arquivos do sistema.
 * @enum {string}
 * @see module:@nginstack/engine/lib/security/Security#getPermission
 * @see module:@nginstack/engine/lib/classdef/PermissionField#readMode
 */

/**
 * Obtém a primeira permissão definida para a classe ou uma de suas mães,
 * levando em conta a ordem da classe informada. A ordem considerada no
 * sentido da classe atual até a classe root. Neste modo não há herança se a
 * chave informada for um script da iVFS como, por exemplo, um processo.
 * @type {string}
 */
export const FIRST = 'first';

/**
 * Obtém o maior valor informado para a classe ou para uma de suas mães. Neste
 * modo não há herança se a chave informada for um script da iVFS como, por
 * exemplo, um processo.
 * @type {string}
 */
export const MAX = 'max';

/**
 * Obtém o menor valor informado para a classe ou para uma de suas mães. Neste
 * modo não há herança se a chave informada for um script da iVFS como, por
 * exemplo, um processo.
 * @type {string}
 */
export const MIN = 'min';

/**
 * Obtém todos os valores distintos informados para a classe ou para uma de
 * suas mães. Se a permissão informada para uma classe possuir os separadores
 * ";" ou ",", a mesma será dividida e cada elemento será considerado um valor
 * distinto. Neste modo não há herança se a chave informada for um script da
 * iVFS como, por exemplo, um processo.
 * @type {string}
 */
export const DISTINCT = 'distinct';

/**
 * Obtém a permissão para a classe informada sem levar em conta as permissões
 * definidas nas classes mães. Este parâmetro não é adequado para utilização
 * com campos do tipo "string" que podem ser multivalorados, recomendamos o
 * uso do parâmetro "distinct".
 * @type {string}
 */
export const NO_INHERITANCE = 'withoutInheritance';

/**
 * Obtém todos os valores informados para a classe ou para uma de suas mães
 * concatenados. Se a permissão informada para uma classe possuir os
 * separadores ";" ou ",", a mesma será dividida e cada elemento será
 * considerado um valor distinto. Neste modo não há herança se a chave
 * informada for um script da iVFS como, por exemplo, um processo.
 * @type {string}
 */
export const CONCAT = 'concat';
