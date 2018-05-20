/// 
import { Variable } from './variable';
export declare class IntervalVariable implements Variable {
  private model;
  private timeSrv;
  private templateSrv;
  private variableSrv;
  auto_count: number;
  auto_min: number;
  options: any;
  auto: boolean;
  query: string;
  refresh: number;
  current: any;
  defaults: {
    type: string;
    name: string;
    hide: number;
    label: string;
    refresh: number;
    options: any[];
    current: {};
    query: string;
    auto: boolean;
    auto_min: string;
    auto_count: number;
  };
  /** @ngInject **/
  constructor(model: any, timeSrv: any, templateSrv: any, variableSrv: any);
  getSaveModel(): any;
  setValue(option: any): any;
  updateAutoValue(): void;
  updateOptions(): any;
  dependsOn(variable: any): boolean;
  setValueFromUrl(urlValue: any): any;
  getValueForUrl(): any;
}
