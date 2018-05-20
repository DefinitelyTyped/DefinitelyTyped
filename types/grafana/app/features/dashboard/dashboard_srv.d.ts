/// 
import { DashboardModel } from './model';
export class DashboardSrv {
    private backendSrv;
    private $rootScope;
    private $location;
    dash: any;
    /** @ngInject */
    constructor(backendSrv: any, $rootScope: any, $location: any);
    create(dashboard: any, meta: any): DashboardModel;
    setCurrent(dashboard: any): void;
    getCurrent(): any;
    saveDashboard(options: any): any;
    handleSaveDashboardError(err: any): void;
    saveDashboardAs(): void;
}
