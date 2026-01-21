export = addFields;
/** @module @nginstack/engine/lib/testing/dataset/addFields */
/**
 * @typedef {Object} FieldObj
 * @property {string} name
 * @property {string} type
 * @property {number} [size]
 * @private
 */
/**
 * @typedef {import('../../dataset/DataSet')} DataSet
 * @private
 */
/**
 * Cria os campos de um dataset a partir das definições.
 * @param {DataSet} ds Dataset não inicializado
 * @param {Array<FieldObj>} fields Definições dos campos de
 * acordo com os parâmetros definidos em {@link DataSet.createField}.
 * @return {DataSet} DataSet com os campos criados.
 */
declare function addFields(ds: DataSet, fields: FieldObj[]): DataSet;
declare namespace addFields {
    export { FieldObj, DataSet };
}
interface FieldObj {
    name: string;
    type: string;
    size?: number;
}
type DataSet = import('../../dataset/DataSet');
