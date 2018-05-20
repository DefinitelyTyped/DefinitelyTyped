
export declare class TablePanelEditorCtrl {
  private $q;
  private uiSegmentSrv;
  panel: any;
  panelCtrl: any;
  transformers: any;
  colorModes: any;
  columnStyles: any;
  columnTypes: any;
  fontSizes: any;
  dateFormats: any;
  addColumnSegment: any;
  unitFormats: any;
  getColumnNames: any;
  /** @ngInject */
  constructor($scope: any, $q: any, uiSegmentSrv: any);
  getColumnOptions(): any;
  addColumn(): void;
  transformChanged(): void;
  render(): void;
  removeColumn(column: any): void;
  setUnitFormat(column: any, subItem: any): void;
  addColumnStyle(): void;
  removeColumnStyle(style: any): void;
  invertColorOrder(index: any): void;
}
/** @ngInject */
export declare function tablePanelEditor($q: any, uiSegmentSrv: any): {
  restrict: string;
  scope: boolean;
  templateUrl: string;
  controller: typeof TablePanelEditorCtrl;
};
