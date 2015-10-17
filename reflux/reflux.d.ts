// Type definitions for RefluxJS
// Project: https://github.com/reflux/refluxjs
// Definitions by: Maurice de Beijer <https://github.com/mauricedb>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module  RefluxCore {

    interface StoreDefinition {
        listenables?: any[],
        init?: Function,
        getInitialState?: Function,
        [propertyName: string]: any;
    }

    interface ListenFn {
        (...params: any[]):any,
        completed: Function,
        failed: Function
    }
    interface Listenable {
        listen: ListenFn
    }

    interface Subscription {
        stop: Function,
        listenable: Listenable
    }

    interface Store {
        hasListener(listenable: Listenable): boolean,
        listenToMany(listenables: Listenable[]): void,
        validateListening(listenable: Listenable): string,
        listenTo(listenable: Listenable, callback: Function, defaultCallback?: Function): Subscription,
        stopListeningTo(listenable: Listenable): boolean,
        stopListeningToAll(): void,
        fetchInitialState(listenable: Listenable, defaultCallback: Function): void,
        trigger(state: any):void;
    }

    interface ActionsDefinition {
        [index: string]:any
    }

    interface Actions {
        [index: string]: Listenable
    }

    function createStore(definition: StoreDefinition): Store;

    function createAction(definition: ActionsDefinition): any;

    function createActions(definition: ActionsDefinition): any;
    function createActions(definitions: string[]): any;

    function listenTo(store: Store, handler: string):void;
    function setState(state: any):void;
}

declare module "reflux" {
    export = RefluxCore;
}

