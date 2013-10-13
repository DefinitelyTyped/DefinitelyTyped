// Type definitions for Giraffe
// Project: https://github.com/barc/backbone.giraffe
// Definitions by: Matt McCray <https://github.com/darthapo>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../backbone/backbone.d.ts" />

declare module Giraffe {

  interface GiraffeObject {
    app: App;
    appEvents?: StringMap;
    dataEvents?: StringMap;
    defaultOptions?: DefaultOptions;

    initialize?();
    beforeInitialize?();
    afterInitialize?();

    dispose?();
    beforeDispose?();
    afterDispose?();
  }

  interface AttachmentOptions {
    method?: string;
    forceRender?: boolean;
    suppressRender?: boolean;
  }

  interface DefaultOptions {
    disposeOnDetach?: boolean;
    alwaysRender?: boolean;
    saveScrollPosition?: boolean;
    documentTitle?: string;
  }

  interface AppMap {
    [ cid:string ]: App;
  }
  interface ViewMap {
    [ cid:string ]: View;
  }
  interface StringMap {
    [ def:string ]: string;
  }

  var app: App;
  var apps: AppMap;
  var defaultOptions: DefaultOptions;
  var version: string;
  var views: ViewMap;

  function bindAppEvents( instance:GiraffeObject ): GiraffeObject;
  function bindDataEvents( instance:GiraffeObject ): GiraffeObject;
  function bindEvent( context:Backbone.Events, target:Backbone.Events, event:any, callback:Function );
  function unbindEvent( context:Backbone.Events, target:Backbone.Events, event:any, callback:Function );
  function bindEventMap( context:Backbone.Events, target:Backbone.Events, eventMap:any );
  function unbindEventMap( context:Backbone.Events, target:Backbone.Events, eventMap:any );

  function configure( instance:any, options?:any );
  function dispose( instance:GiraffeObject, ...args:any[] ): GiraffeObject;
  function disposeThis( ...args:any[] ): GiraffeObject;

  function wrapFn( obj:any, name:string, before:Function, after:Function);

  class Collection extends Backbone.Collection implements GiraffeObject {
    app: App;
    model: Model;
  }

  class Model extends Backbone.Model implements GiraffeObject {
    app: App;
  }

  class Router extends Backbone.Router implements GiraffeObject {
    app: App;
    namespace: string;
    triggers: StringMap;

    cause( appEvent:string, ...args:any[] );
    isCaused( appEvent:string, ...args:any[] ): boolean;
    getRoute( appEvent:string, ...args:any[] ): string;

    reload( url:string );
  }

  class View extends Backbone.View implements GiraffeObject {
    app: App;
    appEvents: StringMap;
    children: View[];
    dataEvents: StringMap;
    defaultOptions: DefaultOptions;
    documentTitle: string;
    parent: View;
    template: any;
    ui: StringMap;

    attachTo( el:any, options?:AttachmentOptions ): View;
    attach( view:View, options?:AttachmentOptions ): View;
    isAttached( el:any ): boolean;

    render( options?:any ): View;
    beforeRender();
    afterRender();
    templateStrategy(): string;
    serialize(): any;

    setParent( parent:View ): View;

    addChild( child:View ): View;
    addChildren( children:View[] ): View;
    removeChild( child:View, preserve?:boolean ): View;
    removeChildren( preserve?:boolean ): View;

    detach( preserve?:boolean ): View;
    detachChildren( preserve?:boolean ): View;

    invoke( method:string, ...args:any[] );

    dispose(): View;
    beforeDispose(): View;
    afterDispose(): View;

    static detachByElement( el:any, preserve?:boolean ): View;
    static getClosestView( el:any ): View;
    static getByCid( cid:string ): View;
    static to$El( el:any, parent?:any, allowParentMatch?:boolean ): JQuery;
    static setDocumentEvents( events:string[], prefix?:string ): string[];
    static removeDocumentEvents( prefix?:string );
    static setDocumentEventPrefix( prefix?:string );
    static setTemplateStrategy( strategy:any, instance?:any );
  }

  class App extends View {
    routes: StringMap;

    addInitializer( initializer:( options?:any, callback?:()=>void )=>void ): App;

    start( options?:any ): App;
  }

  module Contrib {

    class Controller extends Backbone.Events implements GiraffeObject {
      app: App;
    }

    class CollectionView extends View {

      collection: Collection;
      modelView: View;
      modelViewArgs: any[];
      modelViewEl: any;
      renderOnChange: boolean;

      findByModel( model:Model ): View;
      addOne( model:Model ): View;
      removeOne( model:Model ): View;

      static getDefaults( ctx:any ): any;
    }

    class FastCollectionView extends View {
      collection: Collection;
      modelTemplate: any;
      modelTemplateStrategy: string;
      modelEl: any;
      renderOnChange: boolean;

      modelSerialize(): any;

      addAll(): View;
      addOne( model:Model ): View;
      removeOne( model:Model ): View;

      removeByIndex( index:number ): View;
      findElByModel( model:Model ): JQuery;
      findElByIndex( index:number ): JQuery;
      findModelByEl( el:any ): Model;

      static getDefaults( ctx:any ): any;
    }

  }
}
