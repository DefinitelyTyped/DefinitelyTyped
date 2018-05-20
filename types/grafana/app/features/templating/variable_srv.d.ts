/// 
export declare class VariableSrv {
  private $rootScope;
  private $q;
  private $location;
  private $injector;
  private templateSrv;
  dashboard: any;
  variables: any;
  /** @ngInject */
  constructor($rootScope: any, $q: any, $location: any, $injector: any, templateSrv: any);
  init(dashboard: any): any;
  onDashboardRefresh(): any;
  processVariable(variable: any, queryParams: any): any;
  createVariableFromModel(model: any): any;
  addVariable(model: any): any;
  updateOptions(variable: any): any;
  variableUpdated(variable: any): any;
  selectOptionsForCurrentValue(variable: any): any;
  validateVariableSelectionState(variable: any): any;
  setOptionFromUrl(variable: any, urlValue: any): any;
  setOptionAsCurrent(variable: any, option: any): any;
  updateUrlParamsWithCurrentVariables(): void;
}
