import { PanelCtrl } from 'grafana/app/plugins/sdk';

class Ctrl extends PanelCtrl {
    constructor($scope: any, $injector: any) {
        super($scope, $injector);
        this.refresh();
    }
}

export { Ctrl as PanelCtrl };
