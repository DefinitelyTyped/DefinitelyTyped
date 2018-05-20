/// 
export class DashImportCtrl {
  private backendSrv;
  private $location;
  private $scope;
  private $routeParams;
  step: number;
  jsonText: string;
  parseError: string;
  nameExists: boolean;
  dash: any;
  inputs: any[];
  inputsValid: boolean;
  gnetUrl: string;
  gnetError: string;
  gnetInfo: any;
  /** @ngInject */
  constructor(backendSrv: any, $location: any, $scope: any, $routeParams: any);
  onUpload(dash: any): void;
  setDatasourceOptions(input: any, inputModel: any): void;
  inputValueChanged(): void;
  titleChanged(): void;
  saveDashboard(): any;
  loadJsonText(): void;
  checkGnetDashboard(): any;
  back(): void;
}
export function dashImportDirective(): {
  restrict: string;
  templateUrl: string;
  controller: typeof DashImportCtrl;
  bindToController: boolean;
  controllerAs: string;
};
