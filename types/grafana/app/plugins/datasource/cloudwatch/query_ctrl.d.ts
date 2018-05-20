import './query_parameter_ctrl';
import { QueryCtrl } from 'grafana/app/plugins/sdk';

export class CloudWatchQueryCtrl extends QueryCtrl {
    static templateUrl: string;
    aliasSyntax: string;
    /** @ngInject **/
    constructor($scope: any, $injector: any);
}
