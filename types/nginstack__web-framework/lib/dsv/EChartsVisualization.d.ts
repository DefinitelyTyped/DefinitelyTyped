export = EChartsVisualization;
declare function EChartsVisualization(definition: any): void;
declare class EChartsVisualization {
    constructor(definition: any);
    onGetOptions: Event;
    private chart_;
    render(outputObj: any): void;
    queryData(filterValues: Record<string, any>): void;
    private ds_;
}
declare namespace EChartsVisualization {
    export { Event };
}
type Event = import('@nginstack/engine/lib/event/Event');
