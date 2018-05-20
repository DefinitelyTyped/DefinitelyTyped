/// 
export class AppPageCtrl {
  private backendSrv;
  private $routeParams;
  private $rootScope;
  page: any;
  pluginId: any;
  appModel: any;
  appLogoUrl: any;
  /** @ngInject */
  constructor(backendSrv: any, $routeParams: any, $rootScope: any);
  initPage(app: any): void;
  loadPluginInfo(): void;
}
