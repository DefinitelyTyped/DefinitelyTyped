import { ViewDocument } from '@ckeditor/ckeditor5-engine';
import { Emitter as DomEmitter } from './dom/emittermixin';
import { Emitter, EmitterMixinDelegateChain } from './emittermixin';
import EventInfo from './eventinfo';
import { BindChain, Observable } from './observablemixin';
import { PriorityString } from './priorities';

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
export default class FocusTracker implements DomEmitter, Observable {
    /**
     * Starts tracking the specified element.
     */
    add(element: HTMLElement): void;
    /**
     * Stops tracking the specified element and stops listening on this element.
     */
    remove(element: HTMLElement): void;
    /**
     * Destroys the focus tracker by:
     * - Disabling all event listeners attached to tracked elements.
     * - Removing all tracked elements that were previously added.
     */
    destroy(): void;

    /**
     * True when one of the registered elements is focused.
     */
    get focusedElement(): HTMLElement;
    protected set focusedElement(value: HTMLElement);
    /**
     * The currently focused element.
     *
     * While {@link #isFocused `isFocused`} remains `true`, the focus can
     * move between different UI elements. This property tracks those
     * elements and tells which one is currently focused.
     */
    get isFocused(): boolean;
    protected set isFocused(value: boolean);

    set(...args: [option: Record<string, unknown>] | [name: string, value: unknown] | [name: string]): void;
    bind(...bindProperties: string[]): BindChain;
    unbind(...unbindProperties: string[]): void;
    decorate(methodName: string): void;
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
        options?: {
            priority?: number | PriorityString | undefined;
        },
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
}
