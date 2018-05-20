/// 
import { Variable } from './variable';
export class CustomVariable implements Variable {
    private model;
    private timeSrv;
    private templateSrv;
    private variableSrv;
    query: string;
    options: any;
    includeAll: boolean;
    multi: boolean;
    current: any;
    defaults: {
        type: string;
        name: string;
        label: string;
        hide: number;
        options: any[];
        current: {};
        query: string;
        includeAll: boolean;
        multi: boolean;
        allValue: any;
    };
    /** @ngInject **/
    constructor(model: any, timeSrv: any, templateSrv: any, variableSrv: any);
    setValue(option: any): any;
    getSaveModel(): any;
    updateOptions(): any;
    addAllOption(): void;
    dependsOn(variable: any): boolean;
    setValueFromUrl(urlValue: any): any;
    getValueForUrl(): any;
}
