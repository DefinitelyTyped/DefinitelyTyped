/// <reference types="jquery" />
/// <reference types="underscore" />
import * as t from "../common";

export {
    AddOptions,
    Collection,
    CollectionFetchOptions,
    CollectionSetOptions,
    CombinedModelConstructorOptions,
    EventHandler,
    EventMap,
    Events,
    Events_Listen,
    Events_Off,
    Events_On,
    Events_Stop,
    Events_Trigger,
    EventsHash,
    EventsMixin,
    History,
    HistoryOptions,
    Model,
    ModelBase,
    ModelConstructorOptions,
    ModelDestroyOptions,
    ModelFetchOptions,
    ModelSaveOptions,
    ModelSetOptions,
    NavigateOptions,
    ObjectHash,
    Parseable,
    PersistenceOptions,
    Router,
    RouterCallback,
    RouterOptions,
    RoutesHash,
    Silenceable,
    Validable,
    View,
    ViewEventListener,
    ViewOptions,
    Waitable,
} from "../common";

interface BackboneStatic extends t.EventsMixin {
    sync: typeof t.sync;
    ajax: typeof t.ajax;
    emulateHTTP: boolean;
    emulateJSON: boolean;
    noConflict: typeof noConflict;
    $: JQueryStatic;

    Model: typeof t.Model;
    Collection: typeof t.Collection;
    Router: typeof t.Router;
    History: typeof t.History;
    history: t.History;
    View: typeof t.View;
    Events: typeof t.Events;

    VERSION: string;
}

declare const Backbone: BackboneStatic;
export default Backbone;

// SYNC
export const { sync = t.sync, ajax = t.ajax };
export let { emulateHTTP = t.emulateHTTP, emulateJSON = t.emulateJSON };

// Utility
export function noConflict(): BackboneStatic;
export let $: JQueryStatic;
