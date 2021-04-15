import { EmitterMixinDelegateChain } from "../emittermixin";
import EventInfo from "../eventinfo";
import { PriorityString } from "../priorities";
import { Emitter } from "./emittermixin";

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
export default class ResizeObserver implements Emitter {
    /**
     * Creates an instance of the `ResizeObserver` class.
     *
     * the element must be visible (i.e. not detached from DOM) for the observer to work.
     * the [`ResizeObserverEntry`](https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserverEntry)
     * object with information about the resize event.
     */
    constructor(element: HTMLElement, callback: (entry: ResizeObserverEntry) => void);
    /**
     * Destroys the observer which disables the `callback` passed to the {@link #constructor}.
     */
    destroy(): void;

    // Implements
    delegate(...events: string[]): EmitterMixinDelegateChain;
    fire(eventOrInfo: string | EventInfo<Emitter>, ...args: any[]): any;
    listenTo(
        emitter: Emitter,
        event: string,
        callback: Function,
        options?: { priority?: PriorityString | number },
    ): void;
    off(event: string, callback?: Function): void;
    on: (event: string, callback: Function, options?: { priority: PriorityString | number }) => void;
    once(event: string, callback: Function, options?: { priority: PriorityString | number }): void;
    stopDelegating(event?: string, emitter?: Emitter): void;
    stopListening(emitter?: Emitter, event?: string, callback?: Function): void;
}
