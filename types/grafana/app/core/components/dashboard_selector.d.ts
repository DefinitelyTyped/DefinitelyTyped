export class DashboardSelectorCtrl {
    private backendSrv;
    model: any;
    options: any;
    /** @ngInject */
    constructor(backendSrv: any);
    $onInit(): any;
}
export function dashboardSelector(): {
    restrict: string;
    controller: typeof DashboardSelectorCtrl;
    bindToController: boolean;
    controllerAs: string;
    template: string;
    scope: {
        model: string;
    };
};
