/// 
export class DataSourceEditCtrl {
  private $scope;
  private $q;
  private backendSrv;
  private $routeParams;
  private $location;
  private datasourceSrv;
  isNew: boolean;
  datasources: any[];
  current: any;
  types: any;
  testing: any;
  datasourceMeta: any;
  tabIndex: number;
  hasDashboards: boolean;
  editForm: any;
  gettingStarted: boolean;
  /** @ngInject */
  constructor($scope: any, $q: any, backendSrv: any, $routeParams: any, $location: any, datasourceSrv: any);
  initNewDatasourceModel(): void;
  loadDatasourceTypes(): any;
  getDatasourceById(id: any): void;
  typeChanged(): any;
  updateFrontendSettings(): any;
  testDatasource(): void;
  saveChanges(): any;
  confirmDelete(): void;
  delete(s: any): void;
}
