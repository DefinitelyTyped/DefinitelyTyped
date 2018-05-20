import { assignModelProperties } from 'grafana/app/core/core';

export interface Variable {
  setValue(option: any): any;
  updateOptions(): any;
  dependsOn(variable: any): any;
  setValueFromUrl(urlValue: any): any;
  getValueForUrl(): any;
  getSaveModel(): any;
}
export declare var variableTypes: {};
export { assignModelProperties };
export declare function containsVariable(...args: any[]): boolean;
