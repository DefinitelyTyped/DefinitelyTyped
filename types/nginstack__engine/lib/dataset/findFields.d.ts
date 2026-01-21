export = findFields;
/** @module @nginstack/engine/lib/dataset/findFields */
/**
 * @typedef {import('./DataSet')} DataSet
 * @private
 */
/**
 * Busca no dataset informado os campos <em>fieldNames</em> e retorna o índice
 * do primeiro encontrado.
 * @param {!DataSet} ds DataSet a ser pesquisado.
 * @param {!Array<string>} fieldNames Nomes de campos pesquisados.
 * @return {number} Retorna o índice do campo encontrado. Será retornado -1
 * caso não seja encontrado nenhum dos campos informados.
 */
declare function findFields(ds: DataSet, fieldNames: string[]): number;
declare namespace findFields {
    export { DataSet };
}
type DataSet = import('./DataSet');
