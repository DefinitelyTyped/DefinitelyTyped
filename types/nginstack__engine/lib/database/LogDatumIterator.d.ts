export = LogDatumIterator;
declare function LogDatumIterator(values: string): void;
declare class LogDatumIterator {
    constructor(values: string);
    values: string;
    data: string;
    size: number;
    endPos: number;
    initValues(values: string): void;
    getNextValue(): boolean;
    getFirstValue(): boolean;
}
