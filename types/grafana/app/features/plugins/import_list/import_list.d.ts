/// 
export declare class DashImportListCtrl {
  private $http;
  private backendSrv;
  private $rootScope;
  dashboards: any[];
  plugin: any;
  datasource: any;
  /** @ngInject */
  constructor($scope: any, $http: any, backendSrv: any, $rootScope: any);
  importAll(payload: any): any;
  importNext(index: any): any;
  import(dash: any, overwrite: any): any;
  remove(dash: any): void;
}
export declare function dashboardImportList(): {
  restrict: string;
  templateUrl: string;
  controller: typeof DashImportListCtrl;
  bindToController: boolean;
  controllerAs: string;
  scope: {
    plugin: string;
    datasource: string;
  };
};
