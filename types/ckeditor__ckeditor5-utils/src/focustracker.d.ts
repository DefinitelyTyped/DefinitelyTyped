import { Emitter as DomEmitter } from './dom/emittermixin';
import { Observable } from './observablemixin';

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
type ObservableDomEmitter = DomEmitter & Observable;
// tslint:disable-next-line:no-empty-interface
export default interface FocusTracker extends ObservableDomEmitter {}
export default class FocusTracker {
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
     * The currently focused element.
     *
     * While {@link #isFocused `isFocused`} remains `true`, the focus can
     * move between different UI elements. This property tracks those
     * elements and tells which one is currently focused.
     */
    get focusedElement(): HTMLElement;
    protected set focusedElement(value: HTMLElement);
    /**
     * True when one of the registered elements is focused.
     */
    get isFocused(): boolean;
    protected set isFocused(value: boolean);
}
