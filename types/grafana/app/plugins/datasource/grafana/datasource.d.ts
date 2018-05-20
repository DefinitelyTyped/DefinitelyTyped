declare class GrafanaDatasource {
    private backendSrv;
    /** @ngInject */
    constructor(backendSrv: any);
    query(options: any): any;
    annotationQuery(options: any): any;
}
export { GrafanaDatasource };
