 export class ThresholdFormCtrl {
    panelCtrl: any;
    panel: any;
    disabled: boolean;
    /** @ngInject */
    constructor($scope: any);
    addThreshold(): void;
    removeThreshold(index: any): void;
    render(): void;
}
