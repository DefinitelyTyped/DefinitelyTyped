export = ResourceString;
/**
 * Classe responsável pelo acesso aos textos e definições armazenados na tabela iResourceString.
 * A instância da classe pode ser feita por meio do alias "$R", mais simples e sem necessidade de
 * namespace. A ResourceString possui suporte a formatação com passagem de parâmetros na chamada
 * do objeto. Os tipos suportados para formatação são:
 *
 *     - %s para strings
 *     - %d para inteiros
 *     - %f para números fracionados.
 * @example
 * var ResourceString = require('@nginstack/engine/lib/i18n/ResourceString');
 * var resourceString = ResourceString(12345678, ['teste', 123]);
 * @example
 * var $R = require('@nginstack/engine/lib/i18n/ResourceString');
 * var resourceString = $R(12345678, ['teste', 123]);
 * @param {number} key Chave do registro que contém a string desejada.
 * @param {array} [paramsArray] Array com os dados a serem formatados na string, caso exista.
 * @constructor
 */
declare function ResourceString(key: number): void;
declare class ResourceString {
    /**
     * Classe responsável pelo acesso aos textos e definições armazenados na tabela iResourceString.
     * A instância da classe pode ser feita por meio do alias "$R", mais simples e sem necessidade de
     * namespace. A ResourceString possui suporte a formatação com passagem de parâmetros na chamada
     * do objeto. Os tipos suportados para formatação são:
     *
     *     - %s para strings
     *     - %d para inteiros
     *     - %f para números fracionados.
     * @example
     * var ResourceString = require('@nginstack/engine/lib/i18n/ResourceString');
     * var resourceString = ResourceString(12345678, ['teste', 123]);
     * @example
     * var $R = require('@nginstack/engine/lib/i18n/ResourceString');
     * var resourceString = $R(12345678, ['teste', 123]);
     * @param {number} key Chave do registro que contém a string desejada.
     * @param {array} [paramsArray] Array com os dados a serem formatados na string, caso exista.
     * @constructor
     */
    constructor(key: number);
    /**
     * Retorna a string armazenada na base de dados.
     * @example
     * var $R = require('@nginstack/engine/lib/i18n/ResourceString');
     * var text = $R(12345678, ['teste', 123]).toString();
     * @return {string} String armazenada na base de dados.
     */
    toString(): string;
}
