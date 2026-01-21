export = getFirstFieldValue;
/**
 * @typedef {import('./DataSet')} DataSet
 * @private
 */
/**
 * Busca no dataset informado os campos <em>fieldNames</em> e retorna o valor
 * do primeiro encontrado.
 * @param {!DataSet} ds
 * @param {!Array.<string>} fieldNames
 * @return {*} Retorna o valor encontrado do primeiro campo passado no
 * Array. Um erro será gerado caso nenhum campo seja encontrado.
 */
declare function getFirstFieldValue(ds: DataSet, fieldNames: string[]): any;
declare namespace getFirstFieldValue {
    export { DataSet };
}
type DataSet = import('./DataSet');
