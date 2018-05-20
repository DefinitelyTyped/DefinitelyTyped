export class LayoutSelectorCtrl {
    private $rootScope;
    mode: string;
    constructor($rootScope: any);
    listView(): void;
    gridView(): void;
}

export function layoutSelector(): {
    restrict: string;
    controller: typeof LayoutSelectorCtrl;
    bindToController: boolean;
    controllerAs: string;
    scope: {};
    template: string;
};

export function layoutMode($rootScope: any): {
    restrict: string;
    scope: {};
    link: (scope: any, elem: any) => void;
};
