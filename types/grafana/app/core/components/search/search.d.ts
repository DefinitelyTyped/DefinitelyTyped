export class SearchCtrl {
    private $scope;
    private $location;
    private $timeout;
    private backendSrv;
    private contextSrv;
    private $rootScope;
    isOpen: boolean;
    query: any;
    giveSearchFocus: number;
    selectedIndex: number;
    results: any;
    currentSearchId: number;
    tagsMode: boolean;
    showImport: boolean;
    dismiss: any;
    ignoreClose: any;
    /** @ngInject */
    constructor($scope: any, $location: any, $timeout: any, backendSrv: any, contextSrv: any, $rootScope: any);
    closeSearch(): void;
    openSearch(evt: any, payload: any): any;
    keyDown(evt: any): void;
    moveSelection(direction: any): void;
    searchDashboards(): any;
    queryHasNoFilters(): boolean;
    filterByTag(tag: any, evt: any): void;
    removeTag(tag: any, evt: any): void;
    getTags(): any;
    showStarred(): void;
    search(): void;
}
export function searchDirective(): {
    restrict: string;
    templateUrl: string;
    controller: typeof SearchCtrl;
    bindToController: boolean;
    controllerAs: string;
};
