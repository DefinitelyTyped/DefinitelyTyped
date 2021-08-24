export = RecordBuffer;
declare function RecordBuffer(): void;
declare class RecordBuffer {
    fieldsValues: any[];
    newFieldsValues: any[];
    private fieldBuffers_;
    selected: boolean;
    disabled: boolean;
    bookmark: any;
    recNo: number;
    hintValue: any;
    version: number;
    resendRecord: boolean;
    field(idx: number): FieldBuffer;
    reset(): void;
    setLength(len: number): void;
    private toString;
}
import FieldBuffer = require('./FieldBuffer.js');
