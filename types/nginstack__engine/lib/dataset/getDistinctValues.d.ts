export = getDistinctValues;
/** @module @nginstack/engine/lib/dataset/getDistinctValues */
/**
 * @typedef {import('./DataSet')} DataSet
 * @private
 */
/**
 * Pega os valores distintos de um campo.
 * @param {!DataSet} ds Dataset de onde serão obtidos os valores distintos
 * @param {string} fieldName Nome do campo.
 * @return {!Array} Todos os valores distintos em um dataset para um nome de campo.
 */
declare function getDistinctValues(ds: DataSet, fieldName: string): any[];
declare namespace getDistinctValues {
    export { DataSet };
}
type DataSet = import('./DataSet');
