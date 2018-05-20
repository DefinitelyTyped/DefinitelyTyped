import './add_graphite_func';
import './func_editor';
import { QueryCtrl } from 'grafana/app/plugins/sdk';

export declare class GraphiteQueryCtrl extends QueryCtrl {
  private uiSegmentSrv;
  private templateSrv;
  static templateUrl: string;
  functions: any[];
  segments: any[];
  /** @ngInject **/
  constructor($scope: any, $injector: any, uiSegmentSrv: any, templateSrv: any);
  toggleEditorMode(): void;
  parseTarget(): void;
  addFunctionParameter(func: any, value: any, index: any, shiftBack: any): void;
  parseTargeRecursive(astNode: any, func: any, index: any): any;
  getSegmentPathUpTo(index: any): any;
  checkOtherSegments(fromIndex: any): any;
  setSegmentFocus(segmentIndex: any): void;
  wrapFunction(target: any, func: any): any;
  getAltSegments(index: any): any;
  segmentValueChanged(segment: any, segmentIndex: any): any;
  targetTextChanged(): void;
  updateModelTarget(): void;
  targetChanged(): void;
  removeFunction(func: any): void;
  addFunction(funcDef: any): void;
  moveAliasFuncLast(): void;
  smartlyHandleNewAliasByNode(func: any): void;
}
