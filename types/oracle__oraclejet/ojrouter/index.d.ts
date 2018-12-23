/// <reference types="knockout" />
/// <reference types='knockout'/>
declare class Router {
    readonly currentState: (() => RouterState | undefined);
    readonly currentValue: (() => string | undefined);
    defaultStateId: string | undefined;
    static defaults: {
        urlAdapter?: Router.urlPathAdapter | Router.urlParamAdapter;
        baseUrl?: string;
        rootInstanceName?: string;
    };
    readonly direction: string | undefined;
    readonly moduleConfig: {
        name: KnockoutObservable<string>;
        params: {
            ojRouter: {
                parentRouter: Router;
                direction: string;
            };
        };
        lifecycleListener: {
            attached: ((param0: string) => void);
        };
    };
    readonly name: string;
    readonly observableModuleConfig: KnockoutObservable<Router.ModuleConfigType>;
    readonly parent: Router | undefined;
    static readonly rootInstance: Router;
    readonly stateId: ((param0?: string) => string);
    readonly states: RouterState[] | null;
    static readonly transitionedToState: object;
    static sync(): Promise<{
        hasChanged: boolean;
    }>;
    configure(option: {
        [key: string]: RouterState.ConfigOptions;
    } | ((id: string) => RouterState | undefined | null)): any;
    createChildRouter(name: string, parentStateId?: string): Router;
    dispose(): undefined;
    getChildRouter(name: string): Router | undefined;
    getCurrentChildRouter(): Router | undefined;
    getState(stateId: string): RouterState | undefined;
    go(stateIdPath?: string | string[], options?: {
        historyUpdate: string;
    }): Promise<{
        hasChanged: boolean;
    }>;
    retrieve(): any;
    store(data: object): undefined;
}
declare namespace Router {
    // tslint:disable-next-line interface-over-type-literal
    type ModuleConfigType = {
        name: KnockoutObservable<string>;
        params: {
            ojRouter: {
                parentRouter: Router;
                direction: string;
                parameters: object;
            };
        };
        lifecycleListener: {
            attached: ((param0: object) => void);
        };
    };
    // tslint:disable-next-line no-unnecessary-class
    class urlParamAdapter {
        constructor();
    }
    // tslint:disable-next-line no-unnecessary-class
    class urlPathAdapter {
        constructor();
    }
    interface RouterState {
        canEnter: (() => boolean) | (() => Promise<boolean>);
        canExit: (() => boolean) | (() => Promise<boolean>);
        enter: (() => void) | (() => Promise<void>);
        exit: (() => void) | (() => Promise<void>);
        readonly id: string;
        label: string | undefined;
        parameters: object;
        title: string | (() => string | undefined);
        value: any;
        // constructor(id: string, options?: RouterState.ConfigOptions, router?: Router);
        go(): Promise<{
            hasChanged: boolean;
        }>;
        isCurrent(): boolean;
    }
    namespace RouterState {
        // tslint:disable-next-line interface-over-type-literal
        type ConfigOptions = {
            label?: string;
            value?: any;
            isDefault?: boolean;
            canEnter?: (() => boolean) | (() => Promise<boolean>);
            enter?: (() => void) | (() => Promise<void>);
            canExit?: (() => boolean) | (() => Promise<boolean>);
            exit?: (() => void) | (() => Promise<void>);
        };
    }
}
export = Router;
declare class RouterState {
    canEnter: (() => boolean) | (() => Promise<boolean>);
    canExit: (() => boolean) | (() => Promise<boolean>);
    enter: (() => void) | (() => Promise<void>);
    exit: (() => void) | (() => Promise<void>);
    readonly id: string;
    label: string | undefined;
    parameters: object;
    title: string | (() => string | undefined);
    value: any;
    constructor(id: string, options?: RouterState.ConfigOptions, router?: Router);
    go(): Promise<{
        hasChanged: boolean;
    }>;
    isCurrent(): boolean;
}
declare namespace RouterState {
    // tslint:disable-next-line interface-over-type-literal
    type ConfigOptions = {
        label?: string;
        value?: any;
        isDefault?: boolean;
        canEnter?: (() => boolean) | (() => Promise<boolean>);
        enter?: (() => void) | (() => Promise<void>);
        canExit?: (() => boolean) | (() => Promise<boolean>);
        exit?: (() => void) | (() => Promise<void>);
    };
}
