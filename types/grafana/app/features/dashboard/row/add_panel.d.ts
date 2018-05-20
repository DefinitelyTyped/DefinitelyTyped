/// 
export declare class AddPanelCtrl {
  private $scope;
  private $timeout;
  private $rootScope;
  row: any;
  dashboard: any;
  rowCtrl: any;
  allPanels: any;
  panelHits: any;
  activeIndex: any;
  panelSearch: any;
  /** @ngInject */
  constructor($scope: any, $timeout: any, $rootScope: any);
  keyDown(evt: any): void;
  moveSelection(direction: any): void;
  panelSearchChanged(): void;
  addPanel(panelPluginInfo: any): void;
}
export declare function addPanelDirective(): {
  restrict: string;
  templateUrl: string;
  controller: typeof AddPanelCtrl;
  bindToController: boolean;
  controllerAs: string;
  scope: {
    rowCtrl: string;
  };
};
