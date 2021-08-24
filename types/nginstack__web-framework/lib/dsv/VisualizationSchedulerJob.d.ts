export = VisualizationSchedulerJob;
declare function VisualizationSchedulerJob(): void;
declare class VisualizationSchedulerJob {
    recipients: Array<{
        name: string;
        address: string;
    }>;
    filters: {
        [x: string]: any;
    };
    key: number;
    report: number;
    readonly name: string;
    private loadFromParametersField_;
    loadFromKey(key: number): void;
    loadFromEnvironment(): void;
    run(): void;
}
declare namespace VisualizationSchedulerJob {
    function formatParametersField(
        jobKey: number,
        dsvKey: number,
        filters: any,
        recipients: Array<{
            name: string;
            address: string;
        }>
    ): string;
    function parseParametersField(value: any): any;
    function tryGetServer(): number;
    function getServer(): number;
    function syncServerScheduler(): void;
}
