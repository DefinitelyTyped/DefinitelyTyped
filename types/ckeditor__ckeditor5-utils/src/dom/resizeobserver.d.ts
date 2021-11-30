import { ViewDocument } from '@ckeditor/ckeditor5-engine';
import { Emitter, EmitterMixinDelegateChain } from '../emittermixin';
import EventInfo from '../eventinfo';
import { PriorityString } from '../priorities';
import { Emitter as DomEmitter } from './emittermixin';

/**
 * A helper class which instances allow performing custom actions when native DOM elements are resized.
 *
 *  const editableElement = editor.editing.view.getDomRoot();
 *
 *  const observer = new ResizeObserver( editableElement, entry => {
 *   console.log( 'The editable element has been resized in DOM.' );
 *   console.log( entry.target ); // -> editableElement
 *   console.log( entry.contentRect.width ); // -> e.g. '423px'
 *  } );
 *
 * By default, it uses the [native DOM resize observer](https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver)
 * under the hood and in browsers that do not support the native API yet, a polyfilled observer is
 * used instead.
 */
export default class ResizeObserver implements DomEmitter {
    /**
     * Creates an instance of the `ResizeObserver` class.
     *
     * the element must be visible (i.e. not detached from DOM) for the observer to work.
     * the [`ResizeObserverEntry`](https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserverEntry)
     * object with information about the resize event.
     */
    constructor(element: HTMLElement, callback: (entry: ResizeObserverEntry) => void);
    on<K extends keyof HTMLElementEventMap>(
        event: K,
        callback: (this: this, info: EventInfo<this, K>, event: HTMLElementEventMap[K]) => void,
        options?: {
            priority?: number | PriorityString | undefined;
            useCapture?: boolean | undefined;
            usePassive?: boolean | undefined;
        },
    ): void;
    on<K extends string>(
        event: K,
        callback: (this: this, info: EventInfo<this, K>, ...args: any[]) => void,
        options?: { priority?: number | PriorityString | undefined },
    ): void;
    once<K extends keyof HTMLElementEventMap>(
        event: K,
        callback: (this: this, info: EventInfo<this, K>, event: HTMLElementEventMap[K]) => void,
        options?: {
            priority?: number | PriorityString | undefined;
            useCapture?: boolean | undefined;
            usePassive?: boolean | undefined;
        },
    ): void;
    once<K extends string>(
        event: K,
        callback: (this: this, info: EventInfo<this, K>, ...args: any[]) => void,
        options?: { priority?: number | PriorityString | undefined },
    ): void;
    off<K extends keyof HTMLElementEventMap>(
        event: K,
        callback: (this: this, info: EventInfo<this, K>, event: HTMLElementEventMap[K]) => void,
    ): void;
    off<K extends string>(event: K, callback?: (this: this, info: EventInfo<this, K>, ...args: any[]) => void): void;
    fire<K extends keyof HTMLElementEventMap>(name: K, event: HTMLElementEventMap[K]): unknown;
    fire(event: string | EventInfo, ...args: any[]): unknown;
    delegate(...events: string[]): EmitterMixinDelegateChain;
    stopDelegating(...events: string[]): void;
    stopDelegating(event?: string, emitter?: DomEmitter): void;
    listenTo<K extends keyof HTMLElementEventMap, E extends Emitter | Node | Window | ViewDocument>(
        emitter: E,
        event: K,
        callback: (this: this, info: EventInfo<E, K>, event: HTMLElementEventMap[K]) => void,
        options?: {
            priority?: number | PriorityString | undefined;
            useCapture?: boolean | undefined;
            usePassive?: boolean | undefined;
        },
    ): void;
    listenTo<P extends string, E extends Emitter>(
        emitter: E,
        event: P,
        callback: (this: this, info: EventInfo<E, P>, ...args: any[]) => void,
        options?: { priority?: number | PriorityString | undefined },
    ): void;
    stopListening<K extends keyof HTMLElementEventMap, E extends Emitter | Node | Window | ViewDocument>(
        emitter?: E,
        event?: K,
        callback?: (this: this, info: EventInfo<E, K>, event: HTMLElementEventMap[K]) => void,
    ): void;
    stopListening<E extends Emitter, P extends string>(
        emitter?: E,
        event?: P,
        callback?: (this: this, info: EventInfo<E, P>, ...args: any[]) => void,
    ): void;
    /**
     * Destroys the observer which disables the `callback` passed to the {@link #constructor}.
     */
    destroy(): void;
}
