/// 
export class MetricsDsSelectorCtrl {
  private uiSegmentSrv;
  dsSegment: any;
  dsName: string;
  panelCtrl: any;
  datasources: any[];
  current: any;
  /** @ngInject */
  constructor(uiSegmentSrv: any, datasourceSrv: any);
  getOptions(): Promise<any[]>;
  datasourceChanged(): void;
  addDataQuery(datasource: any): void;
}
