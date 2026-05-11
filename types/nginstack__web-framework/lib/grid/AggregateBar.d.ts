export = AggregateBar;
declare function AggregateBar(grid: any): void;
declare class AggregateBar {
    constructor(grid: any);
    grid: any;
    aggregates: {};
    count: number;
    private fReadOnly;
    private getReadOnly;
    private setReadOnly;
    clear(): void;
    add(aggr: any): void;
    resetLastSentValues(): void;
    getChanges(): AggregateState[];
}
declare namespace AggregateBar {
    export { AggregateState };
}
interface AggregateState {
    name: string;
    type: string;
    value: any;
    readOnly: boolean;
}
