/// 
export class PlaylistSearchCtrl {
  private $scope;
  private $location;
  private $timeout;
  private backendSrv;
  private contextSrv;
  query: any;
  tagsMode: boolean;
  searchStarted: any;
  /** @ngInject */
  constructor($scope: any, $location: any, $timeout: any, backendSrv: any, contextSrv: any);
  searchDashboards(): void;
  showStarred(): void;
  queryHasNoFilters(): boolean;
  filterByTag(tag: any, evt: any): void;
  getTags(): void;
}
export function playlistSearchDirective(): {
  restrict: string;
  templateUrl: string;
  controller: typeof PlaylistSearchCtrl;
  bindToController: boolean;
  controllerAs: string;
  scope: {
    searchStarted: string;
  };
};
