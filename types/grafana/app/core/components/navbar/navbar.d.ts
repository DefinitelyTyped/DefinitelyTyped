export class NavbarCtrl {
  private $scope;
  private contextSrv;
  /** @ngInject */
  constructor($scope: any, contextSrv: any);
}
export function navbarDirective(): {
  restrict: string;
  templateUrl: string;
  controller: typeof NavbarCtrl;
  bindToController: boolean;
  transclude: boolean;
  controllerAs: string;
  scope: {
    title: string;
    titleUrl: string;
    iconUrl: string;
  };
  link: (scope: any, elem: any, attrs: any, ctrl: any) => void;
};
