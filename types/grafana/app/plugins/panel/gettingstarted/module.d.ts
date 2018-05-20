import { PanelCtrl } from 'grafana/app/plugins/sdk';
export class GettingStartedPanelCtrl extends PanelCtrl {
    private backendSrv;
    private datasourceSrv;
    private $q;
    static templateUrl: string;
    checksDone: boolean;
    stepIndex: number;
    steps: any;
    constructor($scope: any, $injector: any, backendSrv: any, datasourceSrv: any, $q: any);
    $onInit(): any;
    nextStep(): any;
    dismiss(): void;
}
export { GettingStartedPanelCtrl as PanelCtrl };
