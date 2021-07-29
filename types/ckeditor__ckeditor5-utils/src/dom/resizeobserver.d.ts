import { Emitter, EmitterMixinDelegateChain } from "../emittermixin";
import EventInfo from "../eventinfo";
import { PriorityString } from "../priorities";

/**
 * A helper class which instances allow performing custom actions when native DOM elements are resized.
 *
 *  const editableElement = editor.editing.view.getDomRoot();
 *
 *  const observer = new ResizeObserver( editableElement, entry => {
 *   console.log( "The editable element has been resized in DOM." );
 *   console.log( entry.target ); // -> editableElement
 *   console.log( entry.contentRect.width ); // -> e.g. "423px"
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

    on<N extends string>(
        event: N,
        callback: (info: EventInfo<N>, ...data: any[]) => void,
        options?: { priority?: number | PriorityString | undefined },
    ): void;
    once<N extends string>(
        event: N,
        callback: (info: EventInfo<N>, ...data: any[]) => void,
        options?: { priority?: number | PriorityString | undefined },
    ): void;
    off<N extends string>(event: N, callback?: (info: EventInfo<N>, ...data: unknown[]) => void): void;
    listenTo<S extends Emitter, N extends string>(
        emitter: S,
        event: N,
        callback: (info: EventInfo<N, S>, ...data: any[]) => void,
        options?: { priority?: number | PriorityString | undefined },
    ): void;
    stopListening<S extends Emitter, N extends string>(
        emitter?: S,
        event?: N,
        callback?: (info: EventInfo<N, S>, ...data: unknown[]) => void,
    ): void;
    fire(eventOrInfo: string | EventInfo, ...args: any[]): unknown;
    delegate(...events: string[]): EmitterMixinDelegateChain;
    stopDelegating(event?: string, emitter?: Emitter): void;
}
