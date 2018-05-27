/// 
import { DashboardExporter } from './exporter';
export class DashExportCtrl {
    private backendSrv;
    dash: any;
exporter: DashboardExporter;
    /** @ngInject */
    constructor(backendSrv: any, dashboardSrv: any, datasourceSrv: any, $scope: any);
    save(): void;
    saveJson(): void;
}
export function dashExportDirective(): {
    restrict: string;
    templateUrl: string;
    controller: typeof DashExportCtrl;
    bindToController: boolean;
    controllerAs: string;
};
