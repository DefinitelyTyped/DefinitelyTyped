export = getFieldValues;
/** @module @nginstack/engine/lib/dataset/getFieldValues */
/**
 * @typedef {import('./DataSet')} DataSet
 * @private
 */
/**
 * Obtém os valores dos campos informados do registro corrente como um array.
 * @example
 * const getFieldValues = require('@nginstack/engine/lib/dataset/getFieldValues');
 * getFieldValues(ds, ['CHAVE', 'VERSAO']); // => [100, 28301]
 *
 * @param {DataSet} dataSet DataSet do qual serão obtidos os valores dos campos.
 * @param {Array<string>|string} fieldNames Array com os nomes dos campos ou uma lista
 * de campos separada por "," ou ";".
 * @return {Array<*>} Valores dos campos informados.
 */
declare function getFieldValues(dataSet: DataSet, fieldNames: string[] | string): any[];
declare namespace getFieldValues {
    export { DataSet };
}
type DataSet = import('./DataSet');
