/// <reference types='knockout'/>
declare namespace oj {  
  namespace ModuleBinding {
    var defaults: {viewPath: string, viewSuffix: string, modelPath: string, initializeMethod: string, disposeMethod: string, activatedHandler: string, attachedHandler: string, detachedHandler: string, bindingsAppliedHandler: string, deactivatedHandler: string, transitionCompletedHandler: string};
  }

}
declare namespace oj.ModuleBinding {  
  interface ConventionMethods {
    dispose(info: {element: Node, valueAccessor: Function}): void;
    handleActivated(info: {element: Node, valueAccessor: Function}): Promise<any>|undefined;
    handleAttached(info: {element: Node, valueAccessor: Function, fromCache: boolean}): void;
    handleBindingsApplied(info: {element: Node, valueAccessor: Function}): void;
    handleDeactivated(info: {element: Node, valueAccessor: Function}): void;
    handleDetached(info: {element: Node, valueAccessor: Function, cachedNodes: Array<any>}): void;
    handleTransitionCompleted(info: {element: Node, valueAccessor: Function}): void;
    initialize(info: {element: Node, valueAccessor: Function}): object|undefined;
  }

}
declare namespace ojModule {
    var Options: {view: Promise<any>|string|Array<Node>|DocumentFragment, viewModel: Promise<any>|Function|object, name: string, viewName: string, require: Function|{instance: any, viewPath: string, modelPath: string}, viewModelFactory: object, params: object, createViewFunction: string, cacheKey: string, lifecycleListener: object, animation: object};
  }

