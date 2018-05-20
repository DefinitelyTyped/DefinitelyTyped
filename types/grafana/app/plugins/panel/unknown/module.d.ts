import { PanelCtrl } from 'grafana/app/plugins/sdk';

export class UnknownPanelCtrl extends PanelCtrl {
  static templateUrl: string;
  /** @ngInject */
  constructor($scope: any, $injector: any);
}
