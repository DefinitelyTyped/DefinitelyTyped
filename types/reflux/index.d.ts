import * as React from "react";

export as namespace Reflux;

export interface StoreDefinition {
    listenables?: any[] | undefined;
    init?: Function | undefined;
    getInitialState?: Function | undefined;
    [propertyName: string]: any;
}

export interface ListenFn {
    (...params: any[]): any;
    completed: Function;
    failed: Function;
}

export interface Listenable {
    listen: ListenFn;
}

export interface Subscription {
    stop: Function;
    listenable: Listenable;
}

export class Store {
    id: string;
    hasListener(listenable: Listenable): boolean;
    listenToMany(listenables: Listenable[]): void;
    validateListening(listenable: Listenable): string;
    listenTo(listenable: Listenable, callback: Function, defaultCallback?: Function): Subscription;
    stopListeningTo(listenable: Listenable): boolean;
    stopListeningToAll(): void;
    fetchInitialState(listenable: Listenable, defaultCallback: Function): void;
    trigger(state: any): void;
    listen(callback: Function, bindContext: any): Function;
    listenables: any;
    state: Readonly<any>;
    setState(state: object): void;
}

export class Component<TOfStore extends typeof Store = typeof Store, P = any, S = any> extends React.Component<P, S> {
    store: TOfStore;
    stores: TOfStore[];
    storeKeys: string[];
    mapStoreToState(storeType: TOfStore, mappingFunc: (newState: any) => any): void;
}

export class PureComponent<TOfStore extends typeof Store = typeof Store, P = any, S = any, SS = any>
    extends React.PureComponent<P, S, SS>
{
    store: TOfStore;
    stores: TOfStore[];
    storeKeys: string[];
    mapStoreToState(storeType: TOfStore, mappingFunc: (newState: any) => any): void;
}

export interface ActionParameters {
    children?: string[] | undefined;
    asyncResult?: boolean | undefined;
    sync?: boolean | undefined;
    preEmit?: ((...args: any[]) => undefined | any[]) | undefined;
    shouldEmit?: ((...args: any[]) => boolean) | undefined;
}

export interface ActionDefinition extends ActionParameters {
    actionName?: string | undefined;
}

export interface ActionObjectDefinition {
    [propertyName: string]: ActionParameters;
}

export interface Actions {
    [index: string]: Listenable;
}

export function createStore(definition: StoreDefinition): Store;

export function createAction(definition?: ActionDefinition | string | object): any;

export function createActions(definitions: string[] | ActionObjectDefinition | ActionDefinition[]): any;

export function connect(store: Store, key?: string): void;
export function listenTo(store: Store, handler: string): void;
export function setState(state: any): void;

export function ListenerMixin(): any;

export function initStore(typeOfStore: typeof Store): Store;

export const ActionMethods: any;
