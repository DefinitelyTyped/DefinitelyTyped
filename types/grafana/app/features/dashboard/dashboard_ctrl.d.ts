/// 
export declare class DashboardCtrl {
  private $scope;
  private $rootScope;
  /** @ngInject */
  constructor($scope: any, $rootScope: any, keybindingSrv: any, timeSrv: any, variableSrv: any, alertingSrv: any, dashboardSrv: any, unsavedChangesSrv: any, dynamicDashboardSrv: any, dashboardViewStateSrv: any, contextSrv: any, alertSrv: any, $timeout: any);
  init(dashboard: any): void;
}
