export = dataSetEquals;
/**
 * @typedef {import('./DataSet')} DataSet
 * @private
 */
/**
 * Verifica se os dois DataSets informados são iguais. Eles serão considerados
 * iguais se possuírem a mesma quantidade de registros e se os valores de todos
 * os campos de todos os registros forem iguais.
 * @param {!DataSet} a
 * @param {!DataSet} b
 * @return {boolean} True se os dataSets são iguais.
 */
declare function dataSetEquals(a: DataSet, b: DataSet): boolean;
declare namespace dataSetEquals {
    export { DataSet };
}
type DataSet = import('./DataSet');
