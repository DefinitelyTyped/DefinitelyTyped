export declare class QueryPartDef {
  type: string;
  params: any[];
  defaultParams: any[];
  renderer: any;
  category: any;
  addStrategy: any;
  constructor(options: any);
}
export declare class QueryPart {
  part: any;
  def: QueryPartDef;
  params: any[];
  text: string;
  constructor(part: any, def: any);
  render(innerExpr: string): any;
  hasMultipleParamsInString(strValue: any, index: any): any;
  updateParam(strValue: any, index: any): void;
  updateText(): void;
}
export declare function functionRenderer(part: any, innerExpr: any): string;
export declare function suffixRenderer(part: any, innerExpr: any): string;
export declare function identityRenderer(part: any, innerExpr: any): any;
export declare function quotedIdentityRenderer(part: any, innerExpr: any): string;
