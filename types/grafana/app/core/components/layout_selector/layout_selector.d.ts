export declare class LayoutSelectorCtrl {
  private $rootScope;
  mode: string;
  /** @ngInject **/
  constructor($rootScope: any);
  listView(): void;
  gridView(): void;
}
/** @ngInject **/
export declare function layoutSelector(): {
  restrict: string;
  controller: typeof LayoutSelectorCtrl;
  bindToController: boolean;
  controllerAs: string;
  scope: {};
  template: string;
};
/** @ngInject **/
export declare function layoutMode($rootScope: any): {
  restrict: string;
  scope: {};
  link: (scope: any, elem: any) => void;
};
