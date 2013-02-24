/// <reference path="../jquery/jquery.d.ts" />
/// <reference path="../knockout/knockout.d.ts" />

declare module "durandal/system" {
    export var getModuleId: (obj: any) => string;
    export var debug: (debug?: bool) => bool;
    export var isArray: (obj: any) => bool;
    export var log: (...msgs: any[]) => void;
    export var defer: (action?: Function) => JQueryDeferred;
    export var guid: () => string;
    export var acquire: (...modules: string[]) => JQueryPromise;
}

declare module "durandal/app" {
    export var showModal: (obj, activationData?, context?) => JQueryPromise;
    export var showMessage: (message: string, title?: string, options?: any) => JQueryPromise;
    export var start: () => JQueryPromise;
    export var setRoot: (root: any, transition: string, applicationHost: string) => void;
    export var adaptToDevice: () => void;
    export var on: (events: string, callback: Function, context?) => any;
    export var off: (events: string, callback: Function, context?) => any;
    export var trigger: (events: string, ...args: any[]) => any;
    export var proxy: (events) => Function;
}

declare module "durandal/composition" {
    export var activateDuringComposition: bool;
    export var convertTransitionToModuleId: (name: string) => string;
    export var defaultTransitionName: string;
    export var switchContent: (parent: HTMLElement, newChild: HTMLElement, settings: any) => void;
    export var bindAndShow: (element: HTMLElement, view: HTMLElement, settings: any) => void;
    export var defaultStrategy: (settings: any) => JQueryPromise;
    export var getSettings: (valueAccessor: any) => any;
    export var executeStrategy: (element: HTMLElement, settings: any) => void;
    export var inject: (element: HTMLElement, settings: any) => void;
    export var compose: (element: HTMLElement, settings: any, bindingContext: any) => void;
}

declare module "durandal/http" {
    export var defaultJSONPCallbackParam: string;
    export var get: (url: string, query: Object) => JQueryPromise;
    export var jsonp: (url: string, query: Object, callbackParam: string) => JQueryPromise;
    export var post: (url: string, data: Object) => JQueryPromise;
}

declare module "durandal/modalDialog" {
    export var currentZIndex: number;
    export var getNextZIndex: () => number;
    export var isModalOpen: () => bool;
    export var getContext: (name: string) => any;
    export var addContext: (name: string, modalContext: any) => JQueryPromise;
    export var createCompositionSettings: (obj: any, modalContext: any) => any;
    export var show: (obj: any, activationData: any, context: any) => JQueryPromise;
}

declare module "durandal/viewEngine" {
    export var viewExtension: string;
    export var viewPlugin: string;
    export var isViewUrl: (url: string) => bool;
    export var convertViewUrlToViewId: (url: string) => string;
    export var convertViewIdToRequirePath: (viewId: string) => string;
    export var parseMarkup: (markup: string) => HTMLElement;
    export var createView: (viewId: string) => JQueryPromise;
}

declare module "durandal/viewLocator" {
    export var useConvention: (modulesPath?: string, viewsPath?: string, areasPath?: string) => string;
    export var locateViewForObject: (obj: {}, elementsToSearch: HTMLElement[]) => JQueryPromise;
    export var convertModuleIdToViewId: (moduleId: string) => string;
    export var determineFallbackViewId: (obj: any) => string;
    export var translateViewIdToArea: (viewId: string, area?: string) => string;
    export var locateView: (viewOrUrlOrId: any, area: string, elementsToSearch: HTMLElement[]) => JQueryPromise;
}

declare module "durandal/viewModel" {
    export var interpretResponse: (value: any) => bool;
    export var activator: {
        (): IViewModelActiveItem;
        (initialActiveItem: any, settings?: IViewModelDefaults): IViewModelActiveItem;
    }
}

declare module "durandal/viewModelBinder" {
    export var bindContext: (bindingContext: KnockoutBindingContext, view: HTMLElement, obj: any) => void;
    export var bind: (obj: any, view: HTMLElement) => void;
}

interface IViewModelDefaults {
    areSameItem(currentItem, newItem, activationData): bool;
    closeOnDeactivate: bool;
    interpretResponse(value: any): bool;
    beforeActivate(newItem: any): any;
    afterDeactivate(): any;
};

interface IViewModelActiveItem {
    (val?): any;
    settings: IViewModelDefaults;
    isActivating(val?: bool): bool;
    canDeactivateItem(item, close): JQueryPromise;
    deactivateItem(item, close): JQueryDeferred;
    canActivateItem(newItem, activationData): JQueryPromise;
    activateItem(newItem, activationData): JQueryPromise;
    canActivate(): JQueryPromise;
    activate(): JQueryPromise;
    canDeactivate(): JQueryPromise;
    deactivate(): JQueryDeferred;
    includeIn(includeIn: any): JQueryPromise;
    forItems(items): IViewModelActiveItem;
};

interface routeInfo {
    url: string;
    moduleId: string;
    name: string;
    visible: bool;
};

declare module "durandal/plugins/router" {
    export var ready: KnockoutObservableBool;
    export var allRoutes: KnockoutObservableArray;
    export var visibleRoutes: KnockoutObservableArray;
    export var isNavigating: KnockoutObservableBool;
    export var activeItem: IViewModelActiveItem;
    export var afterCompose: () => void;
    export var navigateBack: () => void;
    export var navigateTo: (url: string) => void;
    export var convertRouteToName: (route: string) => string;
    export var convertRouteToModuleId: (url: string) => string;
    export var autoConvertRouteToModuleId: (url: string) => string;
    export var prepareRouteInfo: (info: routeInfo) => void;
    export var mapAuto: (path?: string) => void;
    export var mapNav: (url: string, moduleId: string, name: string) => routeInfo;
    export var mapRoute: (url: string, moduleId: string, name: string, visible: bool) => routeInfo;
    export var map: (routeOrRouteArray: string) => void;
    export var map: (routeOrRouteArray: string[]) => void;
    export var activate: (defaultRoute: string) => JQueryPromise;
}