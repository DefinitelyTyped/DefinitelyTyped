export class AxesEditorCtrl {
    private $scope;
    private $q;
    panel: any;
    panelCtrl: any;
    unitFormats: any;
    logScales: any;
    xAxisModes: any;
    xAxisStatOptions: any;
    xNameSegment: any;

    constructor($scope: any, $q: any);
    setUnitFormat(axis: any, subItem: any): void;
    render(): void;
    xAxisOptionChanged(): void;
    getDataFieldNames(onlyNumbers: any): any;
}

export function axesEditorComponent(): {
    restrict: string;
    scope: boolean;
    templateUrl: string;
    controller: typeof AxesEditorCtrl;
};
