export = HighchartsVisualization;
declare function HighchartsVisualization(definition: any): void;
declare class HighchartsVisualization {
    constructor(definition: any);
    onGetOptions: Event;
    private canExport_;
    setCanExport(): never;
    private chart_;
    render(outputObj: any): void;
    queryData(filterValues: Record<string, any>): void;
    private ds_;
}
declare namespace HighchartsVisualization {
    export { Event };
}
type Event = import('@nginstack/engine/lib/event/Event');
