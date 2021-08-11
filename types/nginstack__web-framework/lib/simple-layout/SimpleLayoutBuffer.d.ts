export = SimpleLayoutBuffer;
declare function SimpleLayoutBuffer(): void;
declare class SimpleLayoutBuffer {
    data_: DataSet;
    structuredData_: any[];
    length: number;
    push(value: string | any[]): void;
    forEach(callback: (arg0: any) => any, thisArg?: any): void;
    replace(substr: string, newSubStr: string, fromIndex: number): void;
    clear(): void;
}
import DataSet = require('@nginstack/engine/lib/dataset/DataSet.js');
