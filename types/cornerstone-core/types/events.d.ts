export default EVENTS;
export const events: EventTarget;
declare namespace EVENTS {
    const NEW_IMAGE: string;
    const INVALIDATED: string;
    const PRE_RENDER: string;
    const IMAGE_CACHE_MAXIMUM_SIZE_CHANGED: string;
    const IMAGE_CACHE_PROMISE_REMOVED: string;
    const IMAGE_CACHE_FULL: string;
    const IMAGE_CACHE_CHANGED: string;
    const WEBGL_TEXTURE_REMOVED: string;
    const WEBGL_TEXTURE_CACHE_FULL: string;
    const IMAGE_LOADED: string;
    const IMAGE_LOAD_FAILED: string;
    const ELEMENT_RESIZED: string;
    const IMAGE_RENDERED: string;
    const LAYER_ADDED: string;
    const LAYER_REMOVED: string;
    const ACTIVE_LAYER_CHANGED: string;
    const ELEMENT_DISABLED: string;
    const ELEMENT_ENABLED: string;
}
/**
 * EventTarget - Provides the [EventTarget](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget) interface
 */
declare class EventTarget {
    listeners: {};
    namespaces: {};
    addEventNamespaceListener(type: any, callback: any): void;
    removeEventNamespaceListener(type: any): void;
    addEventListener(type: any, callback: any): void;
    removeEventListener(type: any, callback: any): void;
    dispatchEvent(event: any): boolean;
}
