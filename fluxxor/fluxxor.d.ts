// Type definitions for Fluxxor 1.5.2
// Project: https://github.com/BinaryMuse/fluxxor
// Definitions by: Yuichi Murata <https://github.com/mrk21>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

///<reference path='../react/legacy/react-0.12.d.ts' />
///<reference path='../eventemitter3/eventemitter3.d.ts' />

declare module Fluxxor {
    class Dispatcher {
        constructor(stores: any);
        addStore(name: string, store: Store): void;
        dispatch(action: Function): void;
        doDispatchLoop(action: Function): void;
        waitForStores(store: Store, stores: string[], fn: Function): void;
    }
    
    class Flux extends EventEmitter3.EventEmitter {
        constructor(stores: any, actions: any);
        addActions(actions: any): void;
        addAction(...args: Array<string|Function>): void;
        addAction(names: string[], action: Function): void;
        store(name: string): any;
        addStore(name: string, store: Store): void;
        addStores(stores: any): void;
        stores: any;
        actions: any;
    }
    
    interface Store extends EventEmitter3.EventEmitter {
        bindActions(...args: Array<string|Function>): void;
        bindActions(args: Array<string|Function>): void;
        waitFor(stores: string[], fn: Function): void;
    }
    
    interface StoreSpec {
        initialize?(instance?: any, options?: {}): void;
        actions?: any;
    }
    
    interface StoreClass {
        new (options?: {}): any;
    }
    
    interface Context {
        flux: Flux;
    }
    
    interface FluxMixin {
        getFlux(): Flux;
    }
    
    interface FluxChildMixin {
        getFlux(): Flux;
    }
    
    interface StoreWatchMixin<StoreState> {
        getStateFromFlux(): StoreState;
    }
    
    function FluxMixin(React: React.Exports): FluxMixin;
    function FluxChildMixin(React: React.Exports): FluxChildMixin;
    function StoreWatchMixin<StoreState>(...storeNames: string[]): StoreWatchMixin<StoreState>;
    function createStore(spec: StoreSpec): StoreClass;
    var version: string;
}

declare module 'fluxxor' {
    export = Fluxxor;
}
