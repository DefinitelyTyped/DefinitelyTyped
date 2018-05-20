import { MetricsPanelCtrl } from 'grafana/app/plugins/sdk';

export class TablePanelCtrl extends MetricsPanelCtrl {
  private annotationsSrv;
  private $sanitize;
  static templateUrl: string;
  pageIndex: number;
  dataRaw: any;
  table: any;
  panelDefaults: {
    targets: any[];
    transform: string;
    pageSize: any;
    showHeader: boolean;
    styles: Array<({
      type: string;
      pattern: string;
      dateFormat: string;
    } | {
      unit: string;
      type: string;
      decimals: number;
      colors: string[];
      colorMode: any;
      pattern: string;
      thresholds: any[];
    })>;
    columns: any[];
    scroll: boolean;
    fontSize: string;
    sort: {
      col: number;
      desc: boolean;
    };
  };
  /** @ngInject */
  constructor($scope: any, $injector: any, annotationsSrv: any, $sanitize: any);
  onInitEditMode(): void;
  onInitPanelActions(actions: any): void;
  issueQueries(datasource: any): any;
  onDataError(err: any): void;
  onDataReceived(dataList: any): void;
  render(): void;
  toggleColumnSort(col: any, colIndex: any): void;
exportCsv(): void;
  link(scope: any, elem: any, attrs: any, ctrl: any): void;
}

export { TablePanelCtrl as PanelCtrl };
