// Type definitions for Alt 0.16.10
// Project: https://github.com/goatslacker/alt
// Definitions by: Michael Shearer <https://github.com/Shearerbeard>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

///<reference types="react"/>

declare namespace AltJS {

  interface StoreReduce {
    action:any;
    data: any;
  }

  export interface StoreModel<S> {
    //Actions
    bindAction?( action:Action<any>, handler:ActionHandler):void;
    bindActions?(actions:ActionsClass):void;

    //Methods/Listeners
    exportPublicMethods?(exportConfig:any):void;
    bindListeners?(config:{[methodName:string]:Action<any> | Actions}):void;
    exportAsync?(source:Source):void;
    registerAsync?(datasource:Source):void;

    //state
    setState?(state:S):void;
    setState?(stateFn:(currentState:S, nextState:S) => S):void;
    getState?():S;
    waitFor?(store:AltStore<any>):void;

    //events
    onSerialize?(fn:(data:any) => any):void;
    onDeserialize?(fn:(data:any) => any):void;
    on?(event:AltJS.lifeCycleEvents, callback:() => any):void;
    emitChange?():void;
    waitFor?(storeOrStores:AltStore<any> | Array<AltStore<any>>):void;
    otherwise?(data:any, action:AltJS.Action<any>):void;
    observe?(alt:Alt):any;
    reduce?(state:any, config:StoreReduce):Object;
    preventDefault?():void;
    afterEach?(payload:Object, state:Object):void;
    beforeEach?(payload:Object, state:Object):void;
    // TODO: Embed dispatcher interface in def
    dispatcher?:any;

    //instance
    getInstance?():AltJS.AltStore<S>;
    alt?:Alt;
    displayName?:string;
  }

  export type Source = {[name:string]: () => SourceModel<any>};

  export interface SourceModel<S> {
    local(state:any, ...args: any[]):any;
    remote(state:any, ...args: any[]):Promise<S>;
    shouldFetch?(fetchFn:(...args:Array<any>) => boolean):void;
    loading?:(args:any) => void;
    success?:(state:S) => void;
    error?:(args:any) => void;
    interceptResponse?(response:any, action:Action<any>, ...args:Array<any>):any;
  }

  export interface AltStore<S> {
    getState():S;
    listen(handler:(state:S) => any):() => void;
    unlisten(handler:(state:S) => any):void;
    emitChange():void;
  }

  export enum lifeCycleEvents {
    bootstrap,
    snapshot,
    init,
    rollback,
    error
  }

  export type Actions = {[action:string]:Action<any>};

  export interface Action<T> {
    ( args:T):void;
    defer(data:any):void;
  }

  export interface ActionsClass {
    generateActions?( ...action:Array<string>):void;
    dispatch( ...payload:Array<any>):void;
    actions?:Actions;
  }

  type StateTransform = (store:StoreModel<any>) => AltJS.AltStore<any>;

  interface AltConfig {
    dispatcher?:any;
    serialize?:(serializeFn:(data:Object) => string) => void;
    deserialize?:(deserializeFn:(serialData:string) => Object) => void;
    storeTransforms?:Array<StateTransform>;
    batchingFunction?:(callback:( ...data:Array<any>) => any) => void;
  }

  class Alt {
    constructor(config?:AltConfig);
    actions:Actions;
    bootstrap(jsonData:string):void;
    takeSnapshot( ...storeNames:Array<string>):string;
    flush():Object;
    recycle( ...stores:Array<AltJS.AltStore<any>>):void;
    rollback():void;
    dispatch(action?:AltJS.Action<any>|string, data?:Object, details?:any):void;

    //Actions methods
    addActions(actionsName:string, ActionsClass: ActionsClassConstructor):void;
    createActions<T>(ActionsClass: ActionsClassConstructor, exportObj?: Object):T;
    createActions<T>(ActionsClass: ActionsClassConstructor, exportObj?: Object, ...constructorArgs:Array<any>):T;
    generateActions<T>( ...actions:Array<string>):T;
    getActions(actionsName:string):AltJS.Actions;

    //Stores methods
    addStore(name:string, store:StoreModel<any>, saveStore?:boolean):void;
    createStore<S>(store:StoreModel<S>, name?:string):AltJS.AltStore<S>;
    getStore(name:string):AltJS.AltStore<any>;
  }

  export interface AltFactory {
    new(config?:AltConfig):Alt;
  }

  type ActionsClassConstructor = new (alt:Alt) => AltJS.ActionsClass;

  type ActionHandler = ( ...data:Array<any>) => any;
  type ExportConfig = {[key:string]:(...args:Array<any>) => any};
}

declare module "alt/utils/chromeDebug" {
  function chromeDebug(alt:AltJS.Alt):void;
  export = chromeDebug;
}

declare module "alt/AltContainer" {

  import * as React from "react";

  interface ContainerProps {
    store?:AltJS.AltStore<any>;
    stores?:Array<AltJS.AltStore<any>>;
    inject?:{[key:string]:any};
    actions?:{[key:string]:Object};
    render?:(...props:Array<any>) => React.ReactElement<any>;
    flux?:AltJS.Alt;
    transform?:(store:AltJS.AltStore<any>, actions:any) => any;
    shouldComponentUpdate?:(props:any) => boolean;
    component?:React.Component<any>;
  }

  type AltContainer = React.ReactElement<ContainerProps>;
  var AltContainer:React.ComponentClass<ContainerProps>;

  export = AltContainer;
}

declare module "alt" {
  var alt:AltJS.AltFactory;
  export = alt;
}
