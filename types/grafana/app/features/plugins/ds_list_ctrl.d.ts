/// 
export class DataSourcesCtrl {
  private $scope;
  private $location;
  private $http;
  private backendSrv;
  private datasourceSrv;
  datasources: any;
  /** @ngInject */
  constructor($scope: any, $location: any, $http: any, backendSrv: any, datasourceSrv: any);
  removeDataSourceConfirmed(ds: any): void;
  removeDataSource(ds: any): void;
}
