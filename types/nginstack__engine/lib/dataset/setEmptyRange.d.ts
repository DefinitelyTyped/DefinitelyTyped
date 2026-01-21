export = setEmptyRange;
/**
 * @typedef {import('./DataSet')} DataSet
 * @private
 */
/**
 * Força a criação de um range que filtra todos os registros. Caso o dataset
 * não tenha um índice, será criado um para que o range possa ser definido.
 * @param {!DataSet} ds DataSet que terá todos os registros filtrados.
 */
declare function setEmptyRange(ds: DataSet): void;
declare namespace setEmptyRange {
    export {
        NUMERIC_EMPTY_RANGE_START_,
        NUMERIC_EMPTY_RANGE_END_,
        STRING_EMPTY_RANGE_START_,
        STRING_EMPTY_RANGE_END_,
        DataSet,
    };
}
declare let NUMERIC_EMPTY_RANGE_START_: number;
declare let NUMERIC_EMPTY_RANGE_END_: number;
declare let STRING_EMPTY_RANGE_START_: string;
declare let STRING_EMPTY_RANGE_END_: string;
type DataSet = import('./DataSet');
