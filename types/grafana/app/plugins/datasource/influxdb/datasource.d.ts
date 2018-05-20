/// 
export default class InfluxDatasource {
    private $q;
    private backendSrv;
    private templateSrv;
    type: string;
    urls: any;
    username: string;
    password: string;
    name: string;
    database: any;
    basicAuth: any;
    withCredentials: any;
    interval: any;
    supportAnnotations: boolean;
    supportMetrics: boolean;
    responseParser: any;
    /** @ngInject */
    constructor(instanceSettings: any, $q: any, backendSrv: any, templateSrv: any);
    query(options: any): any;
    annotationQuery(options: any): any;
    targetContainsTemplate(target: any): boolean;
    metricFindQuery(query: any): any;
    getTagKeys(options: any): any;
    getTagValues(options: any): any;
    _seriesQuery(query: any): any;
    serializeParams(params: any): any;
    testDatasource(): any;
    _influxRequest(method: any, url: any, data: any): any;
    getTimeFilter(options: any): string;
    getInfluxTime(date: any, roundUp: any): string;
}
