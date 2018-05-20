/// 
import { Variable } from './variable';
export class QueryVariable implements Variable {
    private model;
    private datasourceSrv;
    private templateSrv;
    private variableSrv;
    private $q;
    datasource: any;
    query: any;
    regex: any;
    sort: any;
    options: any;
    current: any;
    refresh: number;
    hide: number;
    name: string;
    multi: boolean;
    includeAll: boolean;
    useTags: boolean;
    tagsQuery: string;
    tagValuesQuery: string;
    tags: any[];
    defaults: {
        type: string;
        label: any;
        query: string;
        regex: string;
        sort: number;
        datasource: any;
        refresh: number;
        hide: number;
        name: string;
        multi: boolean;
        includeAll: boolean;
        allValue: any;
        options: any[];
        current: {};
        tags: any[];
        useTags: boolean;
        tagsQuery: string;
        tagValuesQuery: string;
    };
    /** @ngInject **/
    constructor(model: any, datasourceSrv: any, templateSrv: any, variableSrv: any, $q: any);
    getSaveModel(): any;
    setValue(option: any): any;
    setValueFromUrl(urlValue: any): any;
    getValueForUrl(): any;
    updateOptions(): any;
    updateTags(datasource: any): any;
    getValuesForTag(tagKey: any): any;
    updateOptionsFromMetricFindQuery(datasource: any): any;
    addAllOption(): void;
    metricNamesToVariableValues(metricNames: any): any;
    sortVariableValues(options: any, sortOrder: any): any;
    dependsOn(variable: any): boolean;
}
