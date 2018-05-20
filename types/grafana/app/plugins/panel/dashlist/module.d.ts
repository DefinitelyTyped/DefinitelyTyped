import { PanelCtrl } from 'grafana/app/plugins/sdk';

declare class DashListCtrl extends PanelCtrl {
  private backendSrv;
  static templateUrl: string;
  groups: any[];
  modes: any[];
  panelDefaults: {
    query: string;
    limit: number;
    tags: any[];
    recent: boolean;
    search: boolean;
    starred: boolean;
    headings: boolean;
  };
  /** @ngInject */
  constructor($scope: any, $injector: any, backendSrv: any);
  onInitEditMode(): void;
  onRefresh(): Promise<{}>;
  getSearch(): any;
  getStarred(): any;
  getRecentDashboards(): any;
}
export { DashListCtrl, DashListCtrl as PanelCtrl };
