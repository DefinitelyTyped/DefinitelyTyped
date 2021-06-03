import { Emitter, EmitterMixinDelegateChain } from "./emittermixin";
import { Emitter as DomEmitter } from "./dom/emittermixin";
import { BindChain, Observable } from "./observablemixin";
import { PriorityString } from "./priorities";
import EventInfo from "./eventinfo";
import { DomEventData } from "@ckeditor/ckeditor5-engine";

/**
 * Allows observing a group of `HTMLElement`s whether at least one of them is focused.
 *
 * Used by the {@link module:core/editor/editor~Editor} in order to track whether the focus is still within the application,
 * or were used outside of its UI.
 *
 * **Note** `focus` and `blur` listeners use event capturing, so it is only needed to register wrapper `HTMLElement`
 * which contain other `focusable` elements. But note that this wrapper element has to be focusable too
 * (have e.g. `tabindex="-1"`).
 *
 * Check out the {@glink framework/guides/deep-dive/ui/focus-tracking "Deep dive into focus tracking" guide} to learn more.
 *
 */
export default class FocusTracker implements Observable, Emitter, DomEmitter {
    /**
     * Starts tracking the specified element.
     *
     */
    add(element: HTMLElement): void;
    /**
     * Stops tracking the specified element and stops listening on this element.
     *
     */
    remove(element: HTMLElement): void;
    /**
     * Destroys the focus tracker by:
     * - Disabling all event listeners attached to tracked elements.
     * - Removing all tracked elements that were previously added.
     */
    destroy(): void;
    readonly focusedElement: HTMLElement;
    readonly isFocused: boolean;

    // Observable
    bind(...bindProperties: string[]): BindChain;
    decorate(methodName: string): void;
    set(name: object): void;
    set(name: string, value: any): void;
    unbind(...unbindProperties: string[]): void;

    // Observable (Emitter)
    delegate(...events: string[]): EmitterMixinDelegateChain;
    fire(eventOrInfo: string | EventInfo, ...args: any[]): any;
    listenTo(
        emitter: Emitter,
        event: string,
        callback: (info: EventInfo, data: DomEventData) => void,
        options?: { priority?: PriorityString | number },
    ): void;
    off(event: string, callback?: (info: EventInfo, data: DomEventData) => void): void;
    on: (
        event: string,
        callback: (info: EventInfo, data: DomEventData) => void,
        options?: { priority: PriorityString | number },
    ) => void;
    once(
        event: string,
        callback: (info: EventInfo, data: DomEventData) => void,
        options?: { priority: PriorityString | number },
    ): void;
    stopDelegating(event?: string, emitter?: Emitter): void;
    stopListening(emitter?: Emitter, event?: string, callback?: (info: EventInfo, data: DomEventData) => void): void;
}
