/// 
import { Variable } from './variable';
export declare class DatasourceVariable implements Variable {
  private model;
  private datasourceSrv;
  private variableSrv;
  public regex: any;
  public query: string;
  public options: any;
  public current: any;
  public refresh: any;
  public defaults: {
    type: string;
    name: string;
    hide: number;
    label: string;
    current: {};
    regex: string;
    options: any[];
    query: string;
    refresh: number;
  };
  /** @ngInject **/
  constructor(model: any, datasourceSrv: any, variableSrv: any);
  public getSaveModel(): any;
  public setValue(option: any): any;
  public updateOptions(): any;
  public dependsOn(variable: any): boolean;
  public setValueFromUrl(urlValue: any): any;
  public getValueForUrl(): any;
}
