/// 
export class RowOptionsCtrl {
  private $scope;
  private $timeout;
  private $rootScope;
  row: any;
  dashboard: any;
  rowCtrl: any;
  fontSizes: string[];
  /** @ngInject */
  constructor($scope: any, $timeout: any, $rootScope: any);
}
export function rowOptionsDirective(): {
  restrict: string;
  templateUrl: string;
  controller: typeof RowOptionsCtrl;
  bindToController: boolean;
  controllerAs: string;
  scope: {
    rowCtrl: string;
  };
};
