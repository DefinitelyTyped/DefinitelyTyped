import './graph';
import './legend';
import './series_overrides_ctrl';
import './thresholds_form';

import { MetricsPanelCtrl } from 'grafana/app/plugins/sdk';
import { DataProcessor } from './data_processor';

export class GraphCtrl extends MetricsPanelCtrl {
  private annotationsSrv;
  static template: string;
  hiddenSeries: any;
  seriesList: any;
  dataList: any;
  annotations: any;
  alertState: any;
  annotationsPromise: any;
  datapointsCount: number;
  datapointsOutside: boolean;
  colors: any;
  subTabIndex: number;
  processor: DataProcessor;
  panelDefaults: {
    datasource: any;
    renderer: string;
    yaxes: Array<{
      label: any;
      show: boolean;
      logBase: number;
      min: any;
      max: any;
      format: string;
    }>;
    xaxis: {
      show: boolean;
      mode: string;
      name: any;
      values: any[];
    };
    lines: boolean;
    fill: number;
    linewidth: number;
    points: boolean;
    pointradius: number;
    bars: boolean;
    stack: boolean;
    percentage: boolean;
    legend: {
      show: boolean;
      values: boolean;
      min: boolean;
      max: boolean;
      current: boolean;
      total: boolean;
      avg: boolean;
    };
    nullPointMode: string;
    steppedLine: boolean;
    tooltip: {
      value_type: string;
      shared: boolean;
      sort: number;
    };
    timeFrom: any;
    timeShift: any;
    targets: any[];
    aliasColors: {};
    seriesOverrides: any[];
    thresholds: any[];
  };

  constructor($scope: any, $injector: any, annotationsSrv: any);
  onInitEditMode(): void;
  onInitPanelActions(actions: any): void;
  issueQueries(datasource: any): any;
  zoomOut(evt: any): void;
  onDataSnapshotLoad(snapshotData: any): void;
  onDataError(err: any): void;
  onDataReceived(dataList: any): void;
  onRender(): void;
  changeSeriesColor(series: any, color: any): void;
  toggleSeries(serie: any, event: any): void;
  toggleSeriesExclusiveMode(serie: any): void;
  toggleAxis(info: any): void;
  addSeriesOverride(override: any): void;
  removeSeriesOverride(override: any): void;
  toggleLegend(): void;
  legendValuesOptionChanged(): void;
exportCsv(): void;
exportCsvColumns(): void;
}
export { GraphCtrl as PanelCtrl };
