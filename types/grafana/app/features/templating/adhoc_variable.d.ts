/// 
import { Variable } from './variable';
export declare class AdhocVariable implements Variable {
  private model;
  filters: any[];
  defaults: {
    type: string;
    name: string;
    label: string;
    hide: number;
    datasource: any;
    filters: any[];
  };
  /** @ngInject **/
  constructor(model: any);
  setValue(option: any): Promise<void>;
  getSaveModel(): any;
  updateOptions(): Promise<void>;
  dependsOn(variable: any): boolean;
  setValueFromUrl(urlValue: any): Promise<void>;
  getValueForUrl(): string[];
  setFilters(filters: any[]): void;
}
