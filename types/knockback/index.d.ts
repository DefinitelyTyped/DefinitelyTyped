// Type definitions for Knockback.js
// Project: http://kmalakoff.github.io/knockback/
// Definitions by: Boris Yankov <https://github.com/borisyankov/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="knockout" />
/// <reference types="backbone" />

declare namespace Knockback {
    interface EventWatcherOptions {
        emitter: (newEmitter) => void;
        update: (newValue) => void;
        event_selector: string;
        key?: string;
    }

    interface FactoryOptions {
        factories: any;
    }

    interface StoreOptions {
        creator: any;
        path: string;
        store: Store;
        factory: Factory;
    }

    class Destroyable {
        destroy();
    }

    class ViewModel extends Destroyable {
        constructor (model?: Backbone.Model, options?: ViewModelOptions, viewModel?: ViewModel);
        shareOptions(): ViewModelOptions;
        extend(source: any);
        model(): Backbone.Model;
    }

    class EventWatcher extends Destroyable {
        static useOptionsOrCreate(options, emitter: KnockoutObservable<any>, obj: Backbone.Model, callback_options: any);

        emitter(): Backbone.Model;
        emitter(newEmitter: Backbone.Model);
        registerCallbacks(obj: any, callback_info: any);
        releaseCallbacks(obj: any);
    }

    class Factory {
        static useOptionsOrCreate(options: FactoryOptions, obj: any, owner_path: string);

        constructor (parent_factory: any);
        hasPath(path: string): boolean;
        addPathMapping(path: string, create_info);
        addPathMappings(factories: any, owner_path: string);
        hasPathMappings(factories: any, owner_path: string): boolean;
        creatorForPath(obj: any, path: string);
    }

    class Store extends Destroyable {
        static useOptionsOrCreate(options: StoreOptions, obj: any, observable: KnockoutObservable<any>);

        constructor (model:Backbone.Model, options: StoreOptions);
        clear();
        register(obj: Backbone.Model, observable: KnockoutObservable<any>, options: StoreOptions);
        findOrCreate(obj: Backbone.Model, options: StoreOptions);
    }

    class DefaultObservable extends Destroyable {
        constructor (targetObservable: KnockoutObservable<any>, defaultValue: any);
        setToDefault();
    }

    class FormattedObservable extends Destroyable {
        constructor (format: string, args: any[]);
        constructor (format: KnockoutObservable<any>, args: any[]);
    }

    interface LocalizedObservable {
        constructor (value: any, options: any, vm: any);
        destroy();
        resetToCurrent();
        observedValue(value: any);
    }

    class TriggeredObservable extends Destroyable {
        constructor (emitter: Backbone.ModelBase, event: string);
        emitter(): Backbone.ModelBase;
        emitter(newEmitter: Backbone.ModelBase);
    }

    class Statistics {
        constructor ();
        clear();
        addModelEvent(event: string);
        modelEventsStatsString();
        register(key: string, obj: any);
        unregister(key: string, obj: any);
        registeredCount(type: any): number;
        registeredStatsString(success_message: string): string;
    }

    interface OptionsBase {
        path?: string;               // the path to the value (used to create related observables from the factory).
        store?: Store;               // a store used to cache and share view models.
        factory?: Factory;           // a factory used to create view models.
        options?: any;               // a set of options merge into these options using _.defaults. Useful for extending options when deriving classes rather than merging them by hand.
    }

    interface ViewModelOptions extends OptionsBase {
        internals?: string[];       // an array of atttributes that should be scoped with an underscore, eg. name -> _name
        requires?: string[];        // an array of atttributes that will have kb.Observables created even if they do not exist on the Backbone.Model. Useful for binding Views that require specific observables to exist
        keys?: string[];            // restricts the keys used on a model. Useful for reducing the number of kb.Observables created from a limited set of Backbone.Model attributes
        if(objOrArray: any);        // an array is supplied, excludes keys to exclude on the view model; for example, if you want to provide a custom implementation. If an Object, it provides options to the kb.Observable constructor.
        path?: string;              // the path to the value (used to create related observables from the factory).
        factories?: any;            // a map of dot-deliminated paths; for example {'models.name': kb.ViewModel} to either constructors or create functions. Signature: {'some.path': function(object, options)}
    }

    interface CollectionOptions extends OptionsBase {
        models_only?: boolean;         // flag for skipping the creation of view models. The collection observable will be populated with (possibly sorted) models.
        view_model?: any;           // (Constructor) — the view model constructor used for models in the collection. Signature: constructor(model, options)
        create?: any;               // a function used to create a view model for models in the collection. Signature: create(model, options)
        factories?: any;            // a map of dot-deliminated paths; for example 'models.owner': kb.ViewModel to either constructors or create functions. Signature: 'some.path': function(object, options)
        comparator?: any;           //a function that is used to sort an object. Signature: function(model_a, model_b) returns negative value for ascending, 0 for equal, and positive for descending
        sort_attribute?: string;    // the name of an attribute. Default: resort on all changes to a model.
        filters?: any;              // filters can be individual ids (observable or simple) or arrays of ids, functions, or arrays of functions.
    }

    interface CollectionObservable extends KnockoutObservableArray<any> {
        collection(colleciton: Backbone.Collection<Backbone.Model>);
        collection(): Backbone.Collection<Backbone.Model>;
        destroy();
        shareOptions():  CollectionOptions;
        filters(id: any) : Backbone.Model;
        filters(ids: any[]): CollectionObservable;
        filters(iterator: (element: Backbone.Model) => boolean): CollectionObservable;
        comparator(comparatorFunction: any);
        sortAttribute(attr: string);
        viewModelByModel(model: Backbone.Model): ViewModel;
        hasViewModels(): boolean;
    }

    interface Utils {
        wrappedObservable(obj: any): any;
        wrappedObservable(obj: any, value: any);
        wrappedObject(obj: any): any;
        wrappedObject(obj: any, value: any);
        wrappedModel(obj: any): any;
        wrappedModel(obj: any, value: any);
        wrappedStore(obj: any): any;
        wrappedStore(obj: any, value: any);
        wrappedFactory(obj: any): any;
        wrappedFactory(obj: any, value: any);
        wrappedEventWatcher(obj: any): any;
        wrappedEventWatcher(obj: any, value: any);
        wrappedDestroy(obj: any);
        valueType(observable: KnockoutObservable<any>): any;
        pathJoin(path1: string, path2: string): string;
        optionsPathJoin(options: any, path: string): any;
        inferCreator(value: any, factory: Factory, path: string, owner: any, key: string);
        createFromDefaultCreator(obj: any, options?: any);
        hasModelSignature(obj: any): boolean;
        hasCollectionSignature(obj: any): boolean;
    }

    interface Static extends Utils {
    	ViewModel;
    	CollectionObservable;
        collectionObservable(model?: Backbone.Collection<Backbone.Model>, options?: CollectionOptions): CollectionObservable;
    	/** Base class for observing model attributes. */
    	observable(
			/** the model to observe (can be null) */
			model: Backbone.Model,
			/** the create options. String is a single attribute name, Array is an array of attribute names. */
				options: IObservableOptions,
			/** the viewModel */
			vm?: ViewModel): KnockoutObservable<any>;
        observable(
			/** the model to observe (can be null) */
        	model: Backbone.Model,
    		/** the create options. String is a single attribute name, Array is an array of attribute names. */
        	options_attributeName: string,
			/** the viewModel */
			vm?: ViewModel): KnockoutObservable<any>;
        viewModel(model?: Backbone.Model, options?: any): KnockoutObservable<any>;
        defaultObservable(targetObservable: KnockoutObservable<any>, defaultValue: any): KnockoutObservable<any>;
        formattedObservable(format: string, args: any[]): KnockoutObservable<any>;
        formattedObservable(format: KnockoutObservable<any>, args: any[]): KnockoutObservable<any>;
        localizedObservable(data: any, options: any): KnockoutObservable<any>;
        release(object: any, pre_release?: () => void );
        releaseKeys(object: any);
        releaseOnNodeRemove(viewmodel: ViewModel, node: Element);
        renderTemplate(template: string, viewModel: ViewModel, options: any);
        renderAutoReleasedTemplate(template: string, viewModel: ViewModel, options: any);
        applyBindings(viewModel: ViewModel, node?: Element);
    }

	/** parameter of ko.observable constructor
	Options Hash: (option):
	key (String) — the name of the attribute.
	read (Function) — a function used to provide transform the attribute value before passing it to the caller. Signature: read()
	write (Function) — a function used to provide transform the value before passing it to the model set function. Signature: write(value)
	args (Array) — arguments to pass to the read and write functions (they can be ko.observables). Can be useful for passing arguments to a locale manager.
	localizer (Constructor) — a concrete kb.LocalizedObservable constructor for localization.
	default (Data|ko.observable) — the default value. Can be a value, string or ko.observable.
	path (String) — the path to the value (used to create related observables from the factory).
	store (kb.Store) — a store used to cache and share view models.
	factory (kb.Factory) — a factory used to create view models.
	options (Object) — a set of options merge into these options using _.defaults. Useful for extending options when deriving classes rather than merging them by hand.
	*/
    interface IObservableOptions {
    	key: string;
    	read?: () => any;
    	write?: (value: any) => void;
    	args?: KnockoutObservable<any>[];
    	localizer?: LocalizedObservable;
    	default?: any;
    	path?: string;
    	store?: any;
    	factory?: any;
    	options?: any;
    }

}

declare var kb: Knockback.Static;
