/// 
export declare class QueryRowCtrl {
  collapsedText: string;
  canCollapse: boolean;
  getCollapsedText: any;
  target: any;
  queryCtrl: any;
  panelCtrl: any;
  panel: any;
  collapsed: any;
  constructor();
  toggleHideQuery(): void;
  getNextQueryLetter(): any;
  toggleCollapse(init: any): void;
  toggleEditorMode(): void;
  removeQuery(): void;
  duplicateQuery(): void;
  moveQuery(direction: any): void;
}
