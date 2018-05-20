export class SideMenuCtrl {
  private $scope;
  private $location;
  private contextSrv;
  private backendSrv;
  private $element;
  isSignedIn: boolean;
  showSignout: boolean;
  user: any;
  mainLinks: any;
  orgMenu: any;
  appSubUrl: string;
  loginUrl: string;
  orgFilter: string;
  orgItems: any;
  orgs: any;
  maxShownOrgs: number;
  /** @ngInject */
  constructor($scope: any, $location: any, contextSrv: any, backendSrv: any, $element: any);
  getUrl(url: any): any;
  openUserDropdown(): void;
  loadOrgsItems(): void;
}
export function sideMenuDirective(): {
  restrict: string;
  templateUrl: string;
  controller: typeof SideMenuCtrl;
  bindToController: boolean;
  controllerAs: string;
  scope: {};
  link: (scope: any, elem: any) => void;
};
