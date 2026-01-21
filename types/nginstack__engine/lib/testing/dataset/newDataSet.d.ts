export = newDataSet;
/**
 * @typedef {Object} FieldObj
 * @property {string} name
 * @property {string} type
 * @property {number} [string]
 * @private
 */
/**
 * Cria um DataSet a partir das definições dos campos.
 * @param {Array<FieldObj>} fields Definições dos campos de
 * acordo com os parâmetros definidos em {@link DataSet#createField}.
 * @return {DataSet} DataSet com os campos criados.
 */
declare function newDataSet(fields: FieldObj[]): DataSet;
declare namespace newDataSet {
    export { FieldObj };
}
import DataSet = require('../../dataset/DataSet.js');
interface FieldObj {
    name: string;
    type: string;
    string?: number;
}
