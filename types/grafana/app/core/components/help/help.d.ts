export class HelpCtrl {
    private $scope;
    tabIndex: any;
    shortcuts: any;
    /** @ngInject */
    constructor($scope: any, $sce: any);
    dismiss(): void;
}
export function helpModal(): {
    restrict: string;
    templateUrl: string;
    controller: typeof HelpCtrl;
    bindToController: boolean;
    transclude: boolean;
    controllerAs: string;
    scope: {};
};
