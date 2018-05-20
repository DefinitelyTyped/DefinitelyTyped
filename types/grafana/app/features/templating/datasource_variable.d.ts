/// 
import { Variable } from './variable';
export class DatasourceVariable implements Variable {
    private model;
    private datasourceSrv;
    private variableSrv;
    regex: any;
    query: string;
    options: any;
    current: any;
    refresh: any;
    defaults: {
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

    constructor(model: any, datasourceSrv: any, variableSrv: any);
     getSaveModel(): any;
     setValue(option: any): any;
     updateOptions(): any;
     dependsOn(variable: any): boolean;
     setValueFromUrl(urlValue: any): any;
     getValueForUrl(): any;
}
