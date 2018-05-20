export declare class DashboardSelectorCtrl {
  private backendSrv;
  model: any;
  options: any;
  /** @ngInject */
  constructor(backendSrv: any);
  $onInit(): any;
}
export declare function dashboardSelector(): {
  restrict: string;
  controller: typeof DashboardSelectorCtrl;
  bindToController: boolean;
  controllerAs: string;
  template: string;
  scope: {
    model: string;
  };
};
