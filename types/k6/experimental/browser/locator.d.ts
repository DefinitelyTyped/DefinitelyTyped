import {
    MouseClickOptions,
    ElementClickOptions,
    KeyboardPressOptions,
    KeyboardModifierOptions,
    MouseMoveOptions,
    TimeoutOptions,
    ElementHandleOptions,
    EvaluationArgument,
    ElementState,
    MouseMultiClickOptions,
    StrictnessOptions,
} from './';

/**
 * The Locator API makes it easier to work with dynamically changing elements.
 * Some of the benefits of using it over existing ways to locate an element
 * (e.g. Page.$()) include:
 *
 * - Helps with writing robust tests by finding an element even if the
 * underlying frame navigates.
 * - Makes it easier to work with dynamic web pages and SPAs built with Svelte,
 * React, Vue, etc.
 */
export class Locator {
    /**
     * Mouse click on the chosen element.
     * @param options Options to use.
     * @returns Promise which resolves when the element is successfully clicked.
     */
    click(options?: MouseMoveOptions & MouseMultiClickOptions & StrictnessOptions): Promise<void>;

    /**
     * Mouse double click on the chosen element.
     * @param options Options to use.
     */
    dblclick(options?: MouseMoveOptions & MouseMultiClickOptions & StrictnessOptions): void;

    /**
     * Use this method to select an `input type="checkbox"`.
     * @param options Options to use.
     */
    check(options?: ElementClickOptions & StrictnessOptions): void;

    /**
     * Use this method to unselect an `input type="checkbox"`.
     * @param options Options to use.
     */
    uncheck(options?: ElementClickOptions & StrictnessOptions): void;

    /**
     * Checks to see if the `input type="checkbox"` is selected or not.
     * @param options Options to use.
     * @returns `true` if the element is checked, `false` otherwise.
     */
    isChecked(options?: TimeoutOptions & StrictnessOptions): boolean;

    /**
     * Checks if the element is editable.
     * @param options Options to use.
     * @returns `true` if the element is editable, `false` otherwise.
     */
    isEditable(options?: TimeoutOptions): boolean;

    /**
     * Checks if the element is `enabled`.
     * @param options Options to use.
     * @returns `true` if the element is enabled, `false` otherwise.
     */
    isEnabled(options?: TimeoutOptions & StrictnessOptions): boolean;

    /**
     * Checks if the element is `disabled`.
     * @param options Options to use.
     * @returns `true` if the element is disabled, `false` otherwise.
     */
    isDisabled(options?: TimeoutOptions & StrictnessOptions): boolean;

    /**
     * Checks if the element is `visible`.
     * @param options Options to use.
     * @returns `true` if the element is visible, `false` otherwise.
     */
    isVisible(options?: TimeoutOptions & StrictnessOptions): boolean;

    /**
     * Checks if the element is `hidden`.
     * @param options Options to use.
     * @returns `true` if the element is hidden, `false` otherwise.
     */
    isHidden(options?: TimeoutOptions & StrictnessOptions): boolean;

    /**
     * Fill an `input`, `textarea` or `contenteditable` element with the provided value.
     * @param value Value to fill for the `input` or `textarea` element.
     * @param options Options to use.
     */
    fill(value: string, options?: ElementHandleOptions & StrictnessOptions): void;

    /**
     * Focuses the element using locator's selector.
     * @param options Options to use.
     */
    focus(options?: TimeoutOptions & StrictnessOptions): void;

    /**
     * Returns the element attribute value for the given attribute name.
     * @param name Attribute name to retrieve value for.
     * @param options Options to use.
     * @returns Attribute value.
     */
    getAttribute(name: string, options?: TimeoutOptions & StrictnessOptions): string | null;

    /**
     * Returns the `element.innerHTML`.
     * @param options Options to use.
     * @returns Element's innerHTML.
     */
    innerHTML(options?: TimeoutOptions & StrictnessOptions): string;

    /**
     * Returns the `element.innerText`.
     * @param options Options to use.
     * @returns Element's innerText.
     */
    innerText(options?: TimeoutOptions & StrictnessOptions): string;

    /**
     * Returns the `element.textContent`.
     * @param options Options to use.
     * @returns Element's textContent.
     */
    textContent(options?: TimeoutOptions & StrictnessOptions): string;

    /**
     * Returns `input.value` for the selected `input`, `textarea` or `select` element.
     * @param options Options to use.
     * @returns The input value of the element.
     */
    inputValue(options?: TimeoutOptions & StrictnessOptions): string;

    /**
     * Select one or more options which match the values. If the select has the multiple attribute, all matching options are selected,
     * otherwise only the first option matching one of the passed options is selected.
     * @param values Values of options to select.
     * @param options Options to use.
     * @returns List of selected options.
     */
    selectOption(
        values: string | string[] | { value?: string; label?: string; index?: number },
        options?: ElementHandleOptions & StrictnessOptions,
    ): string[];

    /**
     * Press a single key on the keyboard or a combination of keys.
     * A superset of the key values can be found [here](https://developer.mozilla.org/en-US/docs/Web/API/UI_Events/Keyboard_event_key_values).
     * @param key Name of the key to press or a character to generate, such as `ArrowLeft` or `a`.
     * @param options Keyboard press options.
     */
    press(key: string, options?: KeyboardPressOptions): void;

    /**
     * Type a text into the input field.
     * @param text Text to type into the input field.
     * @param options Typing options.
     */
    type(text: string, options?: KeyboardPressOptions): void;

    /**
     * Hover over the element.
     * @param options Options to use.
     */
    hover(options?: MouseMoveOptions & StrictnessOptions): void;

    /**
     * Tap on the chosen element.
     * @param options Options to use.
     */
    tap(options?: MouseMoveOptions & StrictnessOptions): void;

    /**
     * Dispatches HTML DOM event types e.g. `click`.
     * @param type DOM event type.
     * @param eventInit Event-specific properties.
     * @param options Options to use.
     */
    dispatchEvent(type: string, eventInit?: EvaluationArgument, options?: TimeoutOptions & StrictnessOptions): void;

    /**
     * Wait for the element to be in a particular state e.g. `visible`.
     * @param options Wait options.
     */
    waitFor(options?: { state?: ElementState } & TimeoutOptions & StrictnessOptions): void;
}
