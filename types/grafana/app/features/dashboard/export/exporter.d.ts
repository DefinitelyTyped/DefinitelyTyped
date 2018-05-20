/// 
export class DashboardExporter {
    private datasourceSrv;
    constructor(datasourceSrv: any);
    makeExportable(dashboard: any): Promise<{}>;
}
