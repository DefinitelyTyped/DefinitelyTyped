/// <reference types="jquery" />
/// <reference types="underscore" />
import * as t from "./common";

export = Backbone;
export as namespace Backbone;

declare namespace Backbone {
    type _Omit<T, K> = t._Omit<T, K>;
    type _Result<T> = t._Result<T>;
    type _StringKey<T> = t._StringKey<T>;

    interface AddOptions extends t.AddOptions {}
    interface CollectionSetOptions extends t.CollectionSetOptions {}
    interface HistoryOptions extends t.HistoryOptions {}
    interface NavigateOptions extends t.NavigateOptions {}
    interface RouterOptions extends t.RouterOptions {}
    interface Silenceable extends t.Silenceable {}
    interface Validable extends t.Validable {}
    interface Waitable extends t.Waitable {}
    interface Parseable extends t.Parseable {}
    interface PersistenceOptions extends t.PersistenceOptions {}
    interface ModelConstructorOptions<TModel extends t.Model = t.Model> extends t.ModelConstructorOptions<TModel> {}

    type CombinedModelConstructorOptions<E, M extends t.Model<any, any, E> = t.Model> =
        & t.ModelConstructorOptions<M>
        & E;

    interface ModelSetOptions extends t.ModelSetOptions {}
    interface ModelFetchOptions extends t.ModelFetchOptions {}
    interface ModelSaveOptions extends t.ModelSaveOptions {}
    interface ModelDestroyOptions extends t.ModelDestroyOptions {}
    interface CollectionFetchOptions extends t.CollectionFetchOptions {}

    type ObjectHash = t.ObjectHash;

    interface RoutesHash extends t.RoutesHash {}

    /**
     * DOM events (used in the events property of a View)
     */
    interface EventsHash extends t.EventsHash {}

    /**
     * JavaScript events (used in the methods of the Events interface)
     */
    interface EventHandler extends t.EventHandler {}
    interface EventMap extends t.EventMap {}

    const Events: t.Events;
    interface Events extends t.EventsMixin {}

    /**
     * Helper shorthands for classes that implement the Events interface.
     * Define your class like this:
     *
     * import {
     *     Events,
     *     Events_On,
     *     Events_Off,
     *     Events_Trigger,
     *     Events_Listen,
     *     Events_Stop,
     * } from 'backbone';
     *
     * class YourClass implements Events {
     *     on: Events_On<YourClass>;
     *     off: Events_Off<YourClass>;
     *     trigger: Events_Trigger<YourClass>;
     *     bind: Events_On<YourClass>;
     *     unbind: Events_Off<YourClass>;
     *
     *     once: Events_On<YourClass>;
     *     listenTo: Events_Listen<YourClass>;
     *     listenToOnce: Events_Listen<YourClass>;
     *     stopListening: Events_Stop<YourClass>;
     *
     *     // ... (other methods)
     * }
     *
     * Object.assign(YourClass.prototype, Events);  // can also use _.extend
     *
     * If you are just writing a class type declaration that doesn't already
     * extend some other base class, you can use the EventsMixin instead;
     * see below.
     */
    interface Events_On<BaseT> extends t.Events_On<BaseT> {}
    interface Events_Off<BaseT> extends t.Events_Off<BaseT> {}
    interface Events_Trigger<BaseT> extends t.Events_Trigger<BaseT> {}
    interface Events_Listen<BaseT> extends t.Events_Listen<BaseT> {}
    interface Events_Stop<BaseT> extends t.Events_Stop<BaseT> {}

    /**
     * Helper to avoid code repetition in type declarations.
     * Backbone.Events cannot be extended, hence a separate abstract
     * class with a different name. Both classes and interfaces can
     * extend from this helper class to reuse the signatures.
     *
     * For class type declarations that already extend another base
     * class, and for actual class definitions, please see the
     * Events_* interfaces above.
     */
    abstract class EventsMixin extends t.EventsMixin {}

    class ModelBase extends t.ModelBase {}

    /**
     * E - Extensions to the model constructor options. You can accept additional constructor options
     * by listing them in the E parameter.
     */
    class Model<T extends t.ObjectHash = any, S = t.ModelSetOptions, E = any> extends t.Model<T, S, E> {}
    class Collection<TModel extends t.Model = t.Model> extends t.Collection<TModel> {}

    type RouterCallback = t.RouterCallback;

    class Router extends t.Router {}

    const history: t.History;

    class History extends t.History {}

    interface ViewOptions<TModel extends (t.Model | undefined) = t.Model, TElement extends Element = HTMLElement>
        extends t.ViewOptions<TModel, TElement>
    {}

    type ViewEventListener = t.ViewEventListener;

    class View<TModel extends (t.Model | undefined) = t.Model, TElement extends Element = HTMLElement>
        extends t.View<TModel, TElement>
    {}

    // SYNC
    function sync(method: string, model: Model | Collection, options?: JQueryAjaxSettings): any;
    function ajax(options?: JQueryAjaxSettings): JQueryXHR;
    let emulateHTTP: boolean;
    let emulateJSON: boolean;

    // Utility
    function noConflict(): typeof Backbone;
    let $: JQueryStatic;
}
