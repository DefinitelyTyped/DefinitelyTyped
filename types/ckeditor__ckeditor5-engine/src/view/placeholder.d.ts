import View from "./view";
import DowncastWriter from "./downcastwriter";
import Element from "./element";

/**
 * A helper that enables a placeholder on the provided view element (also updates its visibility).
 * The placeholder is a CSS pseudo–element (with a text content) attached to the element.
 *
 * To change the placeholder text, simply call this method again with new options.
 *
 * To disable the placeholder, use {@link module:engine/view/placeholder~disablePlaceholder `disablePlaceholder()`} helper.
 */
export function enablePlaceholder(options?: {
    /**
     * Editing view instance
     */
    view: View;
    /**
     * Element that will gain a placeholder
     */
    element: Element;
    /**
     * Placeholder text
     */
    text: string;
    /**
     * If set `false`, the placeholder will not be enabled directly
     * in the passed `element` but in one of its children (selected automatically, i.e. a first empty child element).
     * Useful when attaching placeholders to elements that can host other elements (not just text), for instance,
     * editable root elements.
     */
    isDirectHost?: boolean;
    /**
     * If set `true`, the placeholder stay visible when the host element is focused.
     */
    keepOnFocus?: boolean;
}): void;

/**
 * Disables the placeholder functionality from a given element.
 */
export function disablePlaceholder(view: View, element: Element): void;

/**
 * Shows a placeholder in the provided element by changing related attributes and CSS classes.
 *
 * **Note**: This helper will not update the placeholder visibility nor manage the
 * it in any way in the future. What it does is a one–time state change of an element. Use
 * {@link module:engine/view/placeholder~enablePlaceholder `enablePlaceholder()`} and
 * {@link module:engine/view/placeholder~disablePlaceholder `disablePlaceholder()`} for full
 * placeholder functionality.
 *
 * **Note**: This helper will blindly show the placeholder directly in the root editable element if
 * one is passed, which could result in a visual clash if the editable element has some children
 * (for instance, an empty paragraph). Use {@link module:engine/view/placeholder~enablePlaceholder `enablePlaceholder()`}
 * in that case or make sure the correct element is passed to the helper.
 */
export function showPlaceholder(writer: DowncastWriter, element: Element): boolean;

/**
 * Hides a placeholder in the element by changing related attributes and CSS classes.
 *
 * **Note**: This helper will not update the placeholder visibility nor manage the
 * it in any way in the future. What it does is a one–time state change of an element. Use
 * {@link module:engine/view/placeholder~enablePlaceholder `enablePlaceholder()`} and
 * {@link module:engine/view/placeholder~disablePlaceholder `disablePlaceholder()`} for full
 * placeholder functionality.
 */
export function hidePlaceholder(writer: DowncastWriter, element: Element): boolean;

/**
 * Checks if a placeholder should be displayed in the element.
 *
 * **Note**: This helper will blindly check the possibility of showing a placeholder directly in the
 * root editable element if one is passed, which may not be the expected result. If an element can
 * host other elements (not just text), most likely one of its children should be checked instead
 * because it will be the final host for the placeholder. Use
 * {@link module:engine/view/placeholder~enablePlaceholder `enablePlaceholder()`} in that case or make
 * sure the correct element is passed to the helper.
 */
export function needsPlaceholder(element: Element, keepOnFocus: boolean): boolean;
