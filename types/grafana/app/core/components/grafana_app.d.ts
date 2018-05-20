export declare class GrafanaCtrl {
  /** @ngInject */
  constructor($scope: any, alertSrv: any, utilSrv: any, $rootScope: any, $controller: any, contextSrv: any);
}
/** @ngInject */
export declare function grafanaAppDirective(playlistSrv: any, contextSrv: any): {
  restrict: string;
  controller: typeof GrafanaCtrl;
  link: (scope: any, elem: any) => void;
};
