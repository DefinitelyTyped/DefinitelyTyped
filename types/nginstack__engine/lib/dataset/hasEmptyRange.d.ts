export = hasEmptyRange;
/**
 * @typedef {import('./DataSet')} DataSet
 * @private
 */
/**
 * Verifica se o dataset informado foi filtrado pela execução da função
 * {@link #setEmptyRange}.
 * @param {!DataSet} ds DataSet que será verificado.
 * @return {boolean} True se o dataset tem um range criado pela função
 * {@link #setEmptyRange}.
 * @see module:@nginstack/engine/lib/dataset/setEmptyRange
 */
declare function hasEmptyRange(ds: DataSet): boolean;
declare namespace hasEmptyRange {
    export { DataSet };
}
type DataSet = import('./DataSet');
