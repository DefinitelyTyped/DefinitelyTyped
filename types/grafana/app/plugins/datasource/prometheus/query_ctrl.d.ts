import { QueryCtrl } from 'grafana/app/plugins/sdk';

export class PrometheusQueryCtrl extends QueryCtrl {
    private templateSrv;
    static templateUrl: string;
    metric: any;
    resolutions: any;
    oldTarget: any;
    suggestMetrics: any;
    linkToPrometheus: any;
    constructor($scope: any, $injector: any, templateSrv: any);
    refreshMetricData(): void;
    updateLink(): void;
}
