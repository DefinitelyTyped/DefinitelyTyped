/// 
declare class TestDataDatasource {
    private backendSrv;
    private $q;
    /** @ngInject */
    constructor(backendSrv: any, $q: any);
    query(options: any): any;
    annotationQuery(options: any): any;
}
export { TestDataDatasource };
