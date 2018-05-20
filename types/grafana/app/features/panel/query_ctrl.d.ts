/// 
export class QueryCtrl {
  $scope: any;
  private $injector;
  target: any;
  datasource: any;
  panelCtrl: any;
  panel: any;
  hasRawMode: boolean;
  error: string;
  constructor($scope: any, $injector: any);
  refresh(): void;
}
