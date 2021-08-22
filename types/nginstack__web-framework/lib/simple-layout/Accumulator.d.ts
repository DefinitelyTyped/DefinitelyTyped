export = Accumulator;
declare function Accumulator(simpleLayout: any): void;
declare class Accumulator {
    constructor(simpleLayout: any);
    simpleLayout: any;
    groupingValues: any[];
    setGroupingDepth(width: any): void;
    feed(value: any): void;
    reset(groupIndex: any): void;
    getValue(groupIndex: any): any;
    toString(): string;
}
