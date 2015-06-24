// Type definitions for Alt 0.16.10
// Project: https://github.com/goatslacker/alt
// Definitions by: Michael Shearer <https://github.com/Shearerbeard>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../flux/flux.d.ts"/>


declare module AltJS {

  export interface StoreModel<S> {
    bindActions?( ...actions:Array<Object>);
    exportPublicMethods?<M>(exportConfig:M):void;
    getState?():S;
    exportAsync?(source:Source);
    waitFor?(store:AltStore<any>):void;
  }

  export type Source = {[name:string]:() => SourceModel};

  export interface SourceModel {
    local( ...args:Array<any>);
    remote( ...args:Array<any>);
    shouldFetch?(state:Object, ...args:Array<any>);
    loading: ( ...args:Array<any>) => void;
    success:( ...args:Array<any>) => void;
    error:( ...args:Array<any>) => void;
    interceptResponse?(response:Object, action:AltJS.Action<any>, ...args:Array<any>);
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
    (T);
    defer(data:any):void;
  }

  export interface ActionsClass {
    generateActions?( ...action:Array<string>);
    dispatch( ...payload:Array<any>);
    actions?:Actions;
  }
}

declare module "alt/utils/chromeDebug" {
	function chromeDebug(alt:any):void;
	export = chromeDebug;
}

declare module "alt/AltContainer" {

  import * as React from "react";

  interface ContainerProps {
    store:AltJS.AltStore<any>
  }

  class AltContainer extends React.Component<ContainerProps, any> {
  }

  export = AltContainer;
}

declare module "alt" {

  import {Dispatcher} from "flux";

  type StateTransform = (store:StoreModel<any>) => AltJS.AltStore<any>;

  interface AltConfig {
    dispatcher?:Dispatcher<any>;
    serialize?:(data:Object) => string;
    deserialize?:(serialized:string) => Object;
    storeTransforms?:Array<StateTransform>;
    batchingFunction?:(callback:( ...data:Array<any>) => any) => void;
  }

  class Alt {
    constructor(config?:AltConfig);
    actions:AltJS.Actions;
    bootstrap(data:string);
    takeSnapshot( ...storeNames:Array<string>):string;
    flush():Object;
    recycle( ...store:Array<AltJS.AltStore<any>>);
    rollback();
    dispatch(action?:AltJS.Action<any>, data?:Object, details?:any);
    addActions(actionsName:string, actions:AltJS.ActionsClass);
    addStore(name:string, store:StoreModel<any>, saveStore?:boolean);
    getStore(name:string):AltJS.AltStore<any>;
    getActions(actionsName:string):AltJS.Actions;
    createAction<T>(name:string, implementation:AltJS.ActionsClass):AltJS.Action<T>;
    createAction<T>(name:string, implementation:AltJS.ActionsClass, ...args:Array<any>):AltJS.Action<T>;
    createActions<T>(ActionsClass: ActionsClassConstructor, exportObj?: Object):T;
    createActions<T>(ActionsClass: ActionsClassConstructor, exportObj?: Object, ...constructorArgs:Array<any>):T;
    generateActions<T>( ...action:Array<string>):T;
    createStore<S>(store:StoreModel<S>, name?:string):AltJS.AltStore<S>;
  }

  type ActionsClassConstructor = new (alt:Alt) => AltJS.ActionsClass;

  type ActionHandler = ( ...data:Array<any>) => any;
  type ExportConfig = {[key:string]:( ...args:Array<any>) => any};

  interface StoreReduce {
    action:any;
    data: any;
  }

  interface StoreModel<S> extends AltJS.StoreModel<S> {
    setState?(currentState:Object, nextState:Object):Object;
    getState?():S;
    onSerialize?(data:any):void;
    onDeserialize?(data:any):void;
    on?(event:AltJS.lifeCycleEvents, callback:() => any):void;
    bindActions?(action:AltJS.Action<any>, method:ActionHandler):void;
    bindListeners?(config:{string: AltJS.Action<any> | AltJS.Actions});
    waitFor?(dispatcherSource:any):void;
    exportPublicMethods?(exportConfig:ExportConfig):void;
    getInstance?():AltJS.AltStore<S>;
    emitChange?():void;
    dispatcher?:Dispatcher<any>;
    alt?:Alt;
    displayName?:string;
    otherwise?(data:any, action:AltJS.Action<any>);
    reduce?(state:any, config:StoreReduce):Object;
    preventDefault?();
    observe?(alt:Alt):any;
    registerAsync?(datasource:AltJS.Source);
    beforeEach?(payload:Object, state:Object);
    afterEach?(payload:Object, state:Object);
    unlisten?();
  }

  type StoreModelConstructor = (alt:Alt) => StoreModel<any>;

  interface AltFactory {
    new(config?:AltConfig):Alt;
  }

  export = Alt;
}
