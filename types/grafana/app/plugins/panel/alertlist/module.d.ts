import { PanelCtrl } from 'grafana/app/plugins/sdk';

export class AlertListPanel extends PanelCtrl {
  private $location;
  private backendSrv;
  private timeSrv;
  private templateSrv;
  static templateUrl: string;
  showOptions: Array<{
    text: string;
    value: string;
  }>;
  sortOrderOptions: Array<{
    text: string;
    value: number;
  }>;
  contentHeight: string;
  stateFilter: any;
  currentAlerts: any;
  alertHistory: any;
  panelDefaults: {
    show: string;
    limit: number;
    stateFilter: any[];
    onlyAlertsOnDashboard: boolean;
    sortOrder: number;
  };
  /** @ngInject */
  constructor($scope: any, $injector: any, $location: any, backendSrv: any, timeSrv: any, templateSrv: any);
  sortResult(alerts: any): any;
  updateStateFilter(): void;
  onRender(): void;
  getStateChanges(): void;
  getCurrentAlertState(): void;
  onInitEditMode(): void;
}

export { AlertListPanel as PanelCtrl };
