// Type definitions for knockback.js 0.16
// Project: http://backbonejs.org/
// Definitions: https://github.com/borisyankov/DefinitelyTyped


/// <reference path="backbone-0.9.d.ts" />
/// <reference path="knockout-2.2.d.ts" />

declare module Knockback {
    export interface EventWatcherOptions {
        emitter : (newEmitter) => void;
        update : (newValue) => void;
        event_selector : string;
        key? : string;
    }

    export interface FactoryOptions {
        factories: any;
    }

    export interface StoreOptions {
        creator: any;
        path: string;
        store: Store;
        factory: Factory;
    }

    export class Destroyable {
        destroy();
    }

    export class ViewModel extends Destroyable {
        constructor (model? : Backbone.Model , options? : ViewModelOptions, viewModel? : ViewModel );
        shareOptions() : ViewModelOptions;
        extend(source: any);
        model(): Backbone.Model;
    }

    export class EventWatcher extends Destroyable {
        useOptionsOrCreate(options, emitter : KnockoutObservableAny, obj : Backbone.Model, callback_options : any);
        emitter(): Backbone.Model;
        emitter(newEmitter : Backbone.Model);
        registerCallbacks(obj: any, callback_info: any);
        releaseCallbacks(obj: any);
    }

    export class Factory {
        constructor (parent_factory : any);
        useOptionsOrCreate(options: FactoryOptions, obj: any, owner_path: string);
        hasPath(path: string): bool;
        addPathMapping(path: string, create_info);
        addPathMappings(factories: any, owner_path: string);
        hasPathMappings(factories: any, owner_path: string) : bool;
        creatorForPath(obj: any, path: string);
    }

    export class Store extends Destroyable {
        constructor (model:Backbone.Model, options: StoreOptions);
        useOptionsOrCreate(options: StoreOptions, obj: any, observable: KnockoutObservableAny);
        clear();
        register(obj: Backbone.Model, observable: KnockoutObservableAny, options: StoreOptions);
        findOrCreate(obj: Backbone.Model, options: StoreOptions);
    }

    export class DefaultObservable extends Destroyable {
        constructor (targetObservable: KnockoutObservableAny, defaultValue: any);
        setToDefault();
    }

    export class FormattedObservable extends Destroyable {
        constructor (format: string, args: any[]);
        constructor (format: KnockoutObservableAny, args: any[]);
    }

    export interface LocalizedObservable {
        constructor (value: any, options: any, vm: any);
        destroy();
        resetToCurrent();
        observedValue(value: any);
    }

    export class TriggeredObservable extends Destroyable {
        constructor (emitter: Backbone.ModelBase, event: string);
        emitter() : Backbone.ModelBase;
        emitter(newEmitter: Backbone.ModelBase);
    }

    export class Statistics {
        constructor ();
        clear();
        addModelEvent(event: string);
        modelEventsStatsString();
        register(key: string, obj: any);
        unregister(key: string, obj: any);
        registeredCount(type: any) : number;
        registeredStatsString(success_message: string) : string;
    }

    export interface OptionsBase {
        path?: string;               // the path to the value (used to create related observables from the factory).
        store?: Store;               // a store used to cache and share view models.
        factory?: Factory;           // a factory used to create view models.
        options?: any;               // a set of options merge into these options using _.defaults. Useful for extending options when deriving classes rather than merging them by hand.
    }

    export interface ViewModelOptions extends OptionsBase {
        internals?: string[];       // an array of atttributes that should be scoped with an underscore, eg. name -> _name
        requires?: string[];        // an array of atttributes that will have kb.Observables created even if they do not exist on the Backbone.Model. Useful for binding Views that require specific observables to exist
        keys?: string[];            // restricts the keys used on a model. Useful for reducing the number of kb.Observables created from a limited set of Backbone.Model attributes
        if(objOrArray: any);        // an array is supplied, excludes keys to exclude on the view model; for example, if you want to provide a custom implementation. If an Object, it provides options to the kb.Observable constructor.
        path?: string;              // the path to the value (used to create related observables from the factory).
        factories?: any;            // a map of dot-deliminated paths; for example {'models.name': kb.ViewModel} to either constructors or create functions. Signature: {'some.path': function(object, options)}
    }

    export interface CollectionOptions extends OptionsBase {
        models_only?: bool;         // flag for skipping the creation of view models. The collection observable will be populated with (possibly sorted) models.
        view_model?: any;           // (Constructor) — the view model constructor used for models in the collection. Signature: constructor(model, options)
        create?: any;               // a function used to create a view model for models in the collection. Signature: create(model, options)
        factories?: any;            // a map of dot-deliminated paths; for example 'models.owner': kb.ViewModel to either constructors or create functions. Signature: 'some.path': function(object, options)
        comparator?: any;           //a function that is used to sort an object. Signature: function(model_a, model_b) returns negative value for ascending, 0 for equal, and positive for descending
        sort_attribute?: string;    // the name of an attribute. Default: resort on all changes to a model.
        filters?: any;              // filters can be individual ids (observable or simple) or arrays of ids, functions, or arrays of functions.
    }

    export interface CollectionObservable extends KnockoutObservableArray {
        collection() : Backbone.Collection;
        destroy();
        shareOptions() : CollectionOptions;
        filters(filter: any);
        comparator(comparatorFunction: any);
        sortAttribute(attr: string);
        viewModelByModel(model: Backbone.Model) : ViewModel;
        hasViewModels(): bool;
    }

    export interface Utils {
        wrappedObservable(obj: any) : any;
        wrappedObservable(obj: any, value: any);
        wrappedObject(obj: any) : any;
        wrappedObject(obj: any, value: any);
        wrappedModel(obj: any) : any;
        wrappedModel(obj: any, value: any);
        wrappedStore(obj: any) : any;
        wrappedStore(obj: any, value: any);
        wrappedFactory(obj: any) : any;
        wrappedFactory(obj: any, value: any);
        wrappedEventWatcher(obj: any) : any;
        wrappedEventWatcher(obj: any, value: any);
        wrappedDestroy(obj: any);
        valueType(observable: KnockoutObservableAny) : any;
        pathJoin(path1: string, path2: string): string;
        optionsPathJoin(options: any, path: string): any;
        inferCreator(value: any, factory: Factory, path: string, owner: any, key: string);
        createFromDefaultCreator(obj: any, options?: any);
        hasModelSignature(obj: any): bool;
        hasCollectionSignature(obj: any): bool;
    }

    export interface Static extends Utils {
        collectionObservable(model?: Backbone.Collection, options?: CollectionOptions): CollectionObservable;
        observable(model?: Backbone.Model, options?: any) : KnockoutObservableAny;
        viewModel(model?: Backbone.Model, options?: any) : KnockoutObservableAny;
        defaultObservable(targetObservable: KnockoutObservableAny, defaultValue: any) : KnockoutObservableAny;
        formattedObservable(format: string, args: any[]) : KnockoutObservableAny;
        formattedObservable(format: KnockoutObservableAny, args: any[]): KnockoutObservableAny;
        localizedObservable(data: any, options: any): KnockoutObservableAny;
        release(object: any, pre_release?: () => void );
        releaseKeys(object: any);
        releaseOnNodeRemove(viewmodel: ViewModel, node: Element);
        renderTemplate(template: string, viewModel: ViewModel, options: any);
        renderAutoReleasedTemplate(template: string, viewModel: ViewModel, options: any);
        applyBindings(viewModel: ViewModel, node?: Element);
    }

};

declare var kb: Knockback.Static;