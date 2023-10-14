export = setEmptyRange;
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
type DataSet = import('./DataSet');
declare var NUMERIC_EMPTY_RANGE_START_: number;
declare var NUMERIC_EMPTY_RANGE_END_: number;
declare var STRING_EMPTY_RANGE_START_: string;
declare var STRING_EMPTY_RANGE_END_: string;
