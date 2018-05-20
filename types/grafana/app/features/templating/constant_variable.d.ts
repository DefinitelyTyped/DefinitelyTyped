/// 
import { Variable } from './variable';
export declare class ConstantVariable implements Variable {
  private model;
  private variableSrv;
  query: string;
  options: any[];
  current: any;
  defaults: {
    type: string;
    name: string;
    hide: number;
    label: string;
    query: string;
    current: {};
    options: any[];
  };
  /** @ngInject **/
  constructor(model: any, variableSrv: any);
  getSaveModel(): any;
  setValue(option: any): void;
  updateOptions(): Promise<void>;
  dependsOn(variable: any): boolean;
  setValueFromUrl(urlValue: any): any;
  getValueForUrl(): any;
}
