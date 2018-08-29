/// <reference types='knockout'/>
declare namespace oj {  
  class Router {
    readonly currentState: (()=> oj.RouterState|undefined);
    readonly currentValue: (()=> string|undefined);
    defaultStateId: string|undefined;
    static defaults: {urlAdapter?: oj.Router.urlPathAdapter|oj.Router.urlParamAdapter, baseUrl?: string, rootInstanceName?: string};
    readonly direction: string|undefined;
    readonly moduleConfig: {name: KnockoutObservable<string>, params: {ojRouter: {parentRouter: oj.Router, direction: string}}, lifecycleListener: {attached: ((param0: string)=> void)}};
    readonly name: string;
    readonly observableModuleConfig: KnockoutObservable<oj.Router.ModuleConfigType>;
    readonly parent: oj.Router|undefined;
    static readonly rootInstance: oj.Router;
    readonly stateId: ((param0?: string)=> string);
    readonly states: Array<oj.RouterState>|null;
    static readonly transitionedToState: object;
    static sync(): Promise<{hasChanged: boolean}>;
    configure(option: {[key:string]: oj.RouterState.ConfigOptions}|((id:string)=> oj.RouterState)): any;
    createChildRouter(name: string, parentStateId?: string): oj.Router;
    dispose(): undefined;
    getChildRouter(name: string): oj.Router|undefined;
    getCurrentChildRouter(): oj.Router|undefined;
    getState(stateId: string): oj.RouterState|undefined;
    go(stateIdPath?: string|Array<string>, options?: {historyUpdate: string}): Promise<{hasChanged: boolean}>;
    retrieve(): any;
    store(data: object): undefined;
  }
  namespace Router {
    type ModuleConfigType =
    {
      name: KnockoutObservable<string>, params: {ojRouter: {parentRouter: oj.Router, direction: string, parameters: object}}, lifecycleListener: {attached: ((param0: object)=> void)}
    }
  }  
  namespace Router {  
    class urlParamAdapter {
    constructor();
  }
class urlPathAdapter {
    constructor();
  }


  }


}
declare namespace oj {  
  class RouterState {
    canEnter: (()=> boolean)|(()=> Promise<boolean>);
    canExit: (()=> boolean)|(()=> Promise<boolean>);
    enter: (()=> void)|(()=> Promise<void>);
    exit: (()=> void)|(()=> Promise<void>);
    readonly id: string;
    label: string|undefined;
    parameters: object;
    title: string|(()=> string|undefined);
    value: any;
    constructor(id: string, options?: oj.RouterState.ConfigOptions, router?: oj.Router);
    go(): Promise<{hasChanged: boolean}>;
    isCurrent(): boolean;
  }
  namespace RouterState {
    type ConfigOptions =
    {
      label?: string, value?: any, isDefault?: boolean, canEnter?: (()=> boolean)|(()=> Promise<boolean>), enter?: (()=> void)|(()=> Promise<void>), canExit?: (()=> boolean)|(()=> Promise<boolean>), exit?: (()=> void)|(()=> Promise<void>)
    }
  }

}
