import {
    ElementClickOptions,
    KeyboardPressOptions,
    MouseMoveOptions,
    TimeoutOptions,
    ElementHandleOptions,
    EvaluationArgument,
    ElementState,
    MouseMultiClickOptions,
    StrictnessOptions,
    MouseClickOptions,
} from "./";

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
   * @param options Click options.
   * @returns Promise which resolves when the element is successfully clicked.
   */
  click(options?: MouseMoveOptions & MouseMultiClickOptions): Promise<void>;

  /**
   * Mouse double click on the chosen element.
   * @param options Double click options.
   */
  dblclick(options?: MouseMoveOptions & MouseClickOptions & StrictnessOptions): void;

  /**
   * Use this method to select an `input type="checkbox"`.
   * @param options Element click options.
   */
  check(options?: ElementClickOptions): void;

  /**
   * Use this method to unselect an `input type="checkbox"`.
   * @param options Element click options.
   */
  uncheck(options?: ElementClickOptions): void;

  /**
   * Checks to see if the `input type="checkbox"` is selected or not.
   * @param options timeout options.
   * @returns `true` if the element is checked, `false` otherwise.
   */
  isChecked(options?: TimeoutOptions): boolean;

  /**
   * Checks if the element is editable.
   * @param options timeout options.
   * @returns `true` if the element is editable, `false` otherwise.
   */
  isEditable(options?: TimeoutOptions): boolean;

  /**
   * Checks if the element is `enabled`.
   * @param options timeout options.
   * @returns `true` if the element is enabled, `false` otherwise.
   */
  isEnabled(options?: TimeoutOptions): boolean;

  /**
   * Checks if the element is `disabled`.
   * @param options timeout options.
   * @returns `true` if the element is disabled, `false` otherwise.
   */
  isDisabled(options?: TimeoutOptions): boolean;

  /**
   * Checks if the element is `visible`.
   * @param options timeout options.
   * @returns `true` if the element is visible, `false` otherwise.
   */
  isVisible(options?: TimeoutOptions): boolean;

  /**
   * Checks if the element is `hidden`.
   * @param options timeout options.
   * @returns `true` if the element is hidden, `false` otherwise.
   */
  isHidden(options?: TimeoutOptions): boolean;

  /**
   * Fill an `input`, `textarea` or `contenteditable` element with the provided value.
   * @param value Value to fill for the `input` or `textarea` element.
   * @param options Element handle options.
   */
  fill(value: string, options?: ElementHandleOptions): void;

  /**
   * Focuses the element using locator's selector.
   * @param options Timeout options.
   */
  focus(options?: TimeoutOptions): void;

  /**
   * Returns the element attribute value for the given attribute name.
   * @param name Attribute name to retrieve value for.
   * @param options Timeout options.
   * @returns Attribute value.
   */
  getAttribute(name: string, options?: TimeoutOptions): string|null;

  /**
   * Returns the `element.innerHTML`.
   * @param options Timeout options.
   * @returns Element's innerHTML.
   */
  innerHTML(options?: TimeoutOptions): string;

  /**
   * Returns the `element.innerText`.
   * @param options Timeout options.
   * @returns Element's innerText.
   */
  innerText(options?: TimeoutOptions): string;

  /**
   * Returns the `element.textContent`.
   * @param options Timeout options.
   * @returns Element's textContent.
   */
  textContent(options?: TimeoutOptions): string;

  /**
   * Returns `input.value` for the selected `input`, `textarea` or `select` element.
   * @param options Timeout options.
   * @returns The input value of the element.
   */
  inputValue(options?: TimeoutOptions): string;

  /**
   * Select one or more options which match the values. If the select has the multiple attribute, all matching options are selected,
   * otherwise only the first option matching one of the passed options is selected.
   * @param values Values of options to select.
   * @param options Element handle options.
   * @returns List of selected options.
   */
  selectOption(values: string|string[]|{ value?: string; label?: string; index?: number }, options?: ElementHandleOptions): string[];

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
  type(text: string, options?: KeyboardMultiPressOptions): void;

  /**
   * Hover over the element.
   * @param options Mouse move options.
   */
  hover(options?: MouseMoveOptions): void;

  /**
   * Tap on the chosen element.
   * @param options Tap options.
   */
  tap(options?: MouseMoveOptions): void;

  /**
   * Dispatches HTML DOM event types e.g. `click`.
   * @param type DOM event type.
   * @param eventInit Event-specific properties.
   * @param options Timeout options.
   */
  dispatchEvent(type: string, eventInit?: EvaluationArgument, options?: TimeoutOptions): void;

  /**
   * Wait for the element to be in a particular state e.g. `visible`.
   * @param options Wait options.
   */
  waitFor(options?: TimeoutOptions & { state?: ElementState }): void;
}
