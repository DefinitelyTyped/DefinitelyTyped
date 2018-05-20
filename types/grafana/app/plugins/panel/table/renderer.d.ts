export declare class TableRenderer {
  private panel;
  private table;
  private isUtc;
  private sanitize;
  formaters: any[];
  colorState: any;
  constructor(panel: any, table: any, isUtc: any, sanitize: any);
  getColorForValue(value: any, style: any): any;
  defaultCellFormater(v: any, style: any): any;
  createColumnFormater(style: any, column: any): (v: any, style: any) => any;
  formatColumnValue(colIndex: any, value: any): any;
  renderCell(columnIndex: any, value: any, addWidthHack?: boolean): string;
  render(page: any): string;
  render_values(): {
    columns: any;
    rows: any[];
  };
}
