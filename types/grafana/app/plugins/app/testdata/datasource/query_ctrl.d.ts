/// 
import { QueryCtrl } from 'grafana/app/plugins/sdk';
export declare class TestDataQueryCtrl extends QueryCtrl {
  private backendSrv;
  static templateUrl: string;
  scenarioList: any;
  scenario: any;
  /** @ngInject **/
  constructor($scope: any, $injector: any, backendSrv: any);
  $onInit(): any;
  scenarioChanged(): void;
}
