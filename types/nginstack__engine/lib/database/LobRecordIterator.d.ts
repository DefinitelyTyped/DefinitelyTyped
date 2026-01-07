export = LobRecordIterator;
declare function LobRecordIterator(ds: DataSet): void;
declare class LobRecordIterator {
    constructor(ds: DataSet);
    private ds_;
    private decode_;
    private decompress_;
    next(): {
        done: boolean;
        value: LargeObject;
    };
}
declare namespace LobRecordIterator {
    export { DataSet };
}
import LargeObject = require('./LargeObject.js');
type DataSet = import('../dataset/DataSet');
