export = canApplyUpdates;
/** @module @nginstack/engine/lib/dataset/canApplyUpdates */
/**
 * @typedef {import('./DataSet')} DataSet
 * @private
 */
/**
 * Indica se o dataSet pode ter suas alterações gravadas no banco de dados por meio do método
 * applyUpdates.
 * @param {!DataSet} ds
 * @return {boolean} Retorna true se o applyUpdates pode ser utilizado,
 * false caso contrário.
 */
declare function canApplyUpdates(ds: DataSet): boolean;
declare namespace canApplyUpdates {
    export { DataSet };
}
type DataSet = import('./DataSet');
