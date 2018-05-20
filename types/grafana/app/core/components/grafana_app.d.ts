export class GrafanaCtrl {
    constructor($scope: any, alertSrv: any, utilSrv: any, $rootScope: any, $controller: any, contextSrv: any);
}
/** @ngInject */
export function grafanaAppDirective(playlistSrv: any, contextSrv: any): {
    restrict: string;
    controller: typeof GrafanaCtrl;
    link: (scope: any, elem: any) => void;
};
