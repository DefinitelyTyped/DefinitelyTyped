declare module 'aurelia-templating-resources/compose' {
	export class Compose {
	    container: any;
	    compositionEngine: any;
	    viewSlot: any;
	    viewResources: any;
	    executionContext: any;
	    currentViewModel: any;
	    view: any;
	    viewModel: any;
	    model: any;
	    constructor(container: any, compositionEngine: any, viewSlot: any, viewResources: any);
	    bind(executionContext: any): void;
	    modelChanged(newValue: any, oldValue: any): void;
	    viewChanged(newValue: any, oldValue: any): void;
	    viewModelChanged(newValue: any, oldValue: any): void;
	}

}
declare module 'aurelia-templating-resources/global-behavior' {
	export class GlobalBehavior {
	    element: any;
	    handler: any;
	    aureliaCommand: any;
	    aureliaAttrName: any;
	    static handlers: any;
	    static createSettingsFromBehavior: any;
	    static jQueryPlugins: any;
	    constructor(element: any);
	    bind(): void;
	    attached(): void;
	    detached(): void;
	    unbind(): void;
	}

}
declare module 'aurelia-templating-resources/if' {
	export class If {
	    viewFactory: any;
	    viewSlot: any;
	    showing: any;
	    view: any;
	    constructor(viewFactory: any, viewSlot: any);
	    valueChanged(newValue: any): void;
	}

}
declare module 'aurelia-templating-resources/with' {
	export class With {
	    viewFactory: any;
	    viewSlot: any;
	    view: any;
	    constructor(viewFactory: any, viewSlot: any);
	    valueChanged(newValue: any): void;
	}

}
declare module 'aurelia-templating-resources/repeat' {
	export class Repeat {
	    viewFactory: any;
	    viewSlot: any;
	    observerLocator: any;
	    local: any;
	    key: any;
	    value: any;
	    items: any;
	    executionContext: any;
	    oldItems: any;
	    disposeSubscription: any;
	    lastBoundItems: any;
	    constructor(viewFactory: any, viewSlot: any, observerLocator: any);
	    bind(executionContext: any): void;
	    unbind(): void;
	    itemsChanged(): void;
	    processItems(): void;
	    processArrayItems(items: any): void;
	    processMapEntries(items: any): void;
	    createBaseExecutionContext(data: any): any;
	    createBaseExecutionKvpContext(key: any, value: any): any;
	    createFullExecutionContext(data: any, index: any, length: any): any;
	    createFullExecutionKvpContext(key: any, value: any, index: any, length: any): any;
	    updateExecutionContext(context: any, index: any, length: any): any;
	    handleSplices(array: any, splices: any): void;
	    handleMapChangeRecords(map: any, records: any): void;
	    getViewIndexByKey(key: any): any;
	}

}
declare module 'aurelia-templating-resources/show' {
	export class Show {
	    element: any;
	    constructor(element: any);
	    valueChanged(newValue: any): void;
	}

}
declare module 'aurelia-templating-resources/sanitize-html' {
	export class SanitizeHtmlValueConverter {
	    static defaultSanitizer(untrustedMarkup: any): any;
	    sanitizer: any;
	    constructor();
	    toView(untrustedMarkup: any): any;
	}

}
declare module 'aurelia-templating-resources/index' {
	export function configure(aurelia: any): void;
	export { Compose } from 'aurelia-templating-resources/compose';
	export { If } from 'aurelia-templating-resources/if';
	export { With } from 'aurelia-templating-resources/with';
	export { Repeat } from 'aurelia-templating-resources/repeat';
	export { Show } from 'aurelia-templating-resources/show';
	export { GlobalBehavior } from 'aurelia-templating-resources/global-behavior';
	export { SanitizeHtmlValueConverter } from 'aurelia-templating-resources/sanitize-html';

}
declare module 'aurelia-templating-resources' {
	export * from 'aurelia-templating-resources/index';
}
