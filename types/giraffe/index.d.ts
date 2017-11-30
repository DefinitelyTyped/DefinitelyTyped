// Type definitions for Giraffe
// Project: https://github.com/barc/backbone.giraffe
// Definitions by: Matt McCray <https://github.com/darthapo>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="backbone" />
/// <reference types="jquery" />

declare namespace Giraffe {

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
  interface ViewMap<TModel extends Model> {
    [ cid:string ]: View<TModel>;
  }
  interface StringMap {
    [ def:string ]: string;
  }

  var app: App;
  var apps: AppMap;
  var defaultOptions: DefaultOptions;
  var version: string;
  var views: ViewMap<Model>;

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

  class Collection<TModel extends Model> extends Backbone.Collection<TModel> implements GiraffeObject {
    app: App;
    //model: typeof TModel;
    model: { new (): TModel; }; // workaround
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

  class View<TModel extends Model> extends Backbone.View<TModel> implements GiraffeObject {
    app: App;
    appEvents: StringMap;
    children: View<TModel>[];
    dataEvents: StringMap;
    defaultOptions: DefaultOptions;
    documentTitle: string;
    parent: View<TModel>;
    template: any;
    ui: StringMap;

    attachTo( el:any, options?:AttachmentOptions ): View<TModel>;
    attach( view:View<TModel>, options?:AttachmentOptions ): View<TModel>;
    isAttached( el:any ): boolean;

    render( options?:any ): View<TModel>;
    beforeRender();
    afterRender();
    templateStrategy(): string;
    serialize(): any;

    setParent( parent:View<TModel> ): View<TModel>;

    addChild( child:View<TModel> ): View<TModel>;
    addChildren( children:View<TModel>[] ): View<TModel>;
    removeChild( child:View<TModel>, preserve?:boolean ): View<TModel>;
    removeChildren( preserve?:boolean ): View<TModel>;

    detach( preserve?:boolean ): View<TModel>;
    detachChildren( preserve?:boolean ): View<TModel>;

    invoke( method:string, ...args:any[] );

    dispose(): View<TModel>;
    beforeDispose(): View<TModel>;
    afterDispose(): View<TModel>;

    static detachByElement( el:any, preserve?:boolean ): View<Model>;
    static getClosestView<TModel>( el:any ): View<Model>;
    static getByCid( cid:string ): View<Model>;
    static to$El( el:any, parent?:any, allowParentMatch?:boolean ): JQuery;
    static setDocumentEvents( events:string[], prefix?:string ): string[];
    static removeDocumentEvents( prefix?:string );
    static setDocumentEventPrefix( prefix?:string );
    static setTemplateStrategy( strategy:any, instance?:any );
  }

  class App extends View<Model> {
    routes: StringMap;

    addInitializer( initializer:( options?:any, callback?:()=>void )=>void ): App;

    start( options?:any ): App;
  }

  namespace Contrib {

    class Controller extends Backbone.Events implements GiraffeObject {
      app: App;
    }

    class CollectionView<TModel extends Model> extends View<TModel> {

      collection: Collection<TModel>;
      modelView: View<TModel>;
      modelViewArgs: any[];
      modelViewEl: any;
      renderOnChange: boolean;

      findByModel( model:Model ): View<TModel>;
      addOne( model:Model ): View<TModel>;
      removeOne( model:Model ): View<TModel>;

      static getDefaults( ctx:any ): any;
    }

    class FastCollectionView<TModel extends Model> extends View<TModel> {
      collection: Collection<TModel>;
      modelTemplate: any;
      modelTemplateStrategy: string;
      modelEl: any;
      renderOnChange: boolean;

      modelSerialize(): any;

      addAll(): View<TModel>;
      addOne( model:Model ): View<TModel>;
      removeOne( model:Model ): View<TModel>;

      removeByIndex( index:number ): View<TModel>;
      findElByModel( model:Model ): JQuery;
      findElByIndex( index:number ): JQuery;
      findModelByEl( el:any ): Model;

      static getDefaults( ctx:any ): any;
    }

  }
}
