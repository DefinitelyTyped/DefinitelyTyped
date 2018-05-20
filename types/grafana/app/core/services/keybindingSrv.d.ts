/// 
export declare class KeybindingSrv {
  private $rootScope;
  private $modal;
  private $location;
  private contextSrv;
  private $timeout;
  helpModal: boolean;
  /** @ngInject */
  constructor($rootScope: any, $modal: any, $location: any, contextSrv: any, $timeout: any);
  setupGlobal(): void;
  openSearchStarred(): void;
  openSearchTags(): void;
  openSearch(): void;
  openAlerting(): void;
  goToHome(): void;
  goToProfile(): void;
  showHelpModal(): void;
  bind(keyArg: any, fn: any): void;
  showDashEditView(view: any): void;
  setupDashboardBindings(scope: any, dashboard: any): void;
}
