export = Accumulator;
declare function Accumulator(simpleLayout: SimpleLayout): void;
declare class Accumulator {
    constructor(simpleLayout: SimpleLayout);
    simpleLayout: SimpleLayout;
    groupingValues: any[];
    setGroupingDepth(width: any): void;
    feed(value: any): void;
    reset(groupIndex: any): void;
    getValue(groupIndex: any): any;
    toString(): string;
}
declare namespace Accumulator {
    export { SimpleLayout };
}
type SimpleLayout = import('./SimpleLayout');
