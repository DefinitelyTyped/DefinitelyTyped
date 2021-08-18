export = HighchartsVisualization;
declare function HighchartsVisualization(definition: any): void;
declare class HighchartsVisualization {
    constructor(definition: any);
    onGetOptions: Event;
    canExport_: boolean;
    setCanExport(): never;
    private chart_;
    render(outputObj: any): void;
    queryData(filterValues: Record<string, any>): void;
    ds_: any;
}
declare namespace HighchartsVisualization {
    export { Event };
}
type Event = import('@nginstack/engine/lib/event/Event');
