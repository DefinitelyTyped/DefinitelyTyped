import {
  Rect,
  ElementHandlePointerOptions,
  ElementClickOptions,
  KeyboardModifierOptions,
  TimeoutOptions,
  KeyboardPressOptions,
  ScreenshotOptions,
  ElementHandleOptions,
  MouseMoveOptions,
  StrictnessOptions,
  InputElementState,
  ElementState,
  SelectOptionsObject } from "./";
import { JSHandle } from "./js_handle";
import { Frame } from "./frame";

/**
 * ElementHandle represents an in-page DOM element.
 */
export class ElementHandle extends JSHandle {
  /**
   * Finds an element matching the specified selector in the `ElementHandle`'s subtree.
   * @param selector A selector to query element for.
   * @returns An `ElementHandle` pointing to the result element or `null`.
   */
  $(selector: string): ElementHandle | null;

  /**
   * Finds all elements matching the specified selector in the `ElementHandle`'s subtree.
   * @param selector A selector to query element for.
   * @returns A list of `ElementHandle`s pointing to the result elements.
   */
  $$(selector: string): ElementHandle[];

  /**
   * This method returns the bounding box of the element.
   * @returns Element's bounding box.
   */
  boundingBox(): Rect;

  /**
   * Get the content frame for element handles.
   * @returns The content frame handle of the element handle.
   */
  contentFrame(): Frame;

  /**
   * Fill the `input` or `textarea` element with the provided `value`.
   * @param value Value to fill for the `input` or `textarea` element.
   * @param options Element handle options.
   */
  fill(value: string, options?: ElementHandleOptions): void;

  /**
   * Focuses the element.
   */
  focus(): void;

  /**
   * Fetch the element's attribute value.
   * @param name Attribute name to get the value for.
   * @returns Attribute value.
   */
  getAttribute(name: string): string | null;

  /**
   * Scrolls element into view and hovers over its center point.
   * @param options Hover options.
   */
  hover(options?: ElementClickOptions & KeyboardModifierOptions): void;

  /**
   * Returns the `element.innerHTML`.
   * @returns Element's innerHTML.
   */
  innerHTML(): string;

  /**
   * Returns the `element.innerText`.
   * @returns Element's innerText.
   */
  innerText(): string;

  /**
   * Returns `input.value` for the selected `input`, `textarea` or `select` element.
   * @returns The input value of the element.
   */
  inputValue(options?: TimeoutOptions): string;

  /**
   * Checks if a checkbox or radio is checked.
   * @returns Whether the element is checked.
   */
  isChecked(): boolean;

  /**
   * Checks if the element is disabled.
   * @returns Whether the element is disabled.
   */
  isDisabled(): boolean;

  /**
   * Checks if the element is editable.
   * @returns Whether the element is editable.
   */
  isEditable(): boolean;

  /**
   * Checks if the element is enabled.
   * @returns Whether the element is enabled.
   */
  isEnabled(): boolean;

  /**
   * Checks if the element is hidden.
   * @returns Whether the element is hidden.
   */
  isHidden(): boolean;

  /**
   * Checks if the element is visible.
   * @returns Whether the element is visible.
   */
  isVisible(): boolean;

  /**
   * Returns the frame containing the given element.
   * @returns The frame that contains the element handle.
   */
  ownerFrame(): Frame;

  /**
   * Focuses the element, and then uses `keyboard.down` and `keyboard.up` with the specified key.
   * @param key A keyboard key name or a single character to press.
   * @param options Keyboard press options.
   */
  press(key: string, options?: KeyboardPressOptions): void;

  /**
   * This method scrolls element into view, if needed, and then captures a
   * screenshot of it.
   * @param options Screenshot options.
   * @returns An `ArrayBuffer` with the screenshot data.
   */
  screenshot(options?: ScreenshotOptions & TimeoutOptions): ArrayBuffer;

  /**
   * This method checks whether the element is actionable using provided options, and
   * then tries to scroll it into view, unless it is completely visible.
   * @param options Element handle options.
   */
  scrollIntoViewIfNeeded(options?: ElementHandleOptions): void;

  /**
   * Select one or more options of a `<select>` element which match the values.
   * @param values Values of options to select.
   * @param options Element handle options.
   * @returns List of selected options.
   */
  selectOption(values: string | ElementHandle | SelectOptionsObject | string[] | ElementHandle[] | SelectOptionsObject[], options?: ElementHandleOptions): string[];

  /**
   * Focuses the element and selects all its text content.
   * @param options Element handle options.
   */
  selectText(options?: ElementHandleOptions): void;

  /**
   * Scrolls element into view if needed, and then uses `page.tapscreen` to tap in the center of the element
   * or at the specified position.
   * @param options Tap options.
   */
  tap(options?: MouseMoveOptions): void;

  /**
   * Returns the `node.textContent`.
   * @returns The text content of the element.
   */
  textContent(): string;

  /**
   * Scrolls element into view, focuses element and types text.
   * @param text Text to type into the element.
   * @param options Typing options.
   */
  type(text: string, options?: KeyboardPressOptions): void;

  /**
   * Scrolls element into view, and if it's an input element of type
   * checkbox that is already checked, clicks on it to mark it as unchecked.
   * @param options Click options.
   */
  uncheck(options?: ElementClickOptions & StrictnessOptions): void;

  /**
   * Returns when the element satisfies the `state`.
   * @param state Wait for element to satisfy this state.
   * @param options Wait options.
   */
  waitForElementState(state: InputElementState, options?: TimeoutOptions): void;

  /**
   * Returns when the child element matching `selector` satisfies the `state`.
   * @param selector A selector to query for.
   * @param options Wait options.
   */
  waitForSelector(selector: string, options?: { state?: ElementState; } & StrictnessOptions & TimeoutOptions): void;
}
