export class ColorPickerCtrl {
    private $scope;
    private $rootScope;
    colors: any;
    autoClose: boolean;
    series: any;
    showAxisControls: boolean;
    /** @ngInject */
    constructor($scope: any, $rootScope: any);
    toggleAxis(yaxis: any): void;
    colorSelected(color: any): void;
}
export function colorPicker(): {
    restrict: string;
    controller: typeof ColorPickerCtrl;
    bindToController: boolean;
    controllerAs: string;
    template: string;
};
