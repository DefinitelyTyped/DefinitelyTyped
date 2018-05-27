/// 
export class ImpressionsStore {
    constructor();
    addDashboardImpression(dashboardId: any): void;
    getDashboardOpened(): any;
    impressionKey(config: any): string;
}
declare var impressions: ImpressionsStore;
export { impressions };
