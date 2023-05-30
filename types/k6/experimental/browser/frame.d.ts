import {
  ContentLoadOptions,
  ElementClickOptions,
  ElementHandleOptions,
  ElementStateFilter,
  KeyboardModifierOptions,
  KeyboardPressOptions,
  LifecycleEvent,
  MouseClickOptions,
  MouseMoveOptions,
  MouseMultiClickOptions,
  NavigationOptions,
  PageFunction,
  PollingOptions,
  SelectOptionsObject,
  StrictnessOptions,
  TimeoutOptions,
} from ".";
import { ElementHandle } from "./element_handle";
import { JSHandle } from "./js_handle";
import { Response } from "./response";
import { Locator } from "./locator";
import { Page } from "./page";

/**
 * Frame represents the frame within a page. A page is made up of hierarchy of frames.
 */
export class Frame {
  /**
   * Finds an element matching the specified selector within the `Frame`.
   * @param selector A selector to query element for.
   * @returns An `ElementHandle` pointing to the result element or `null`.
   */
  $(selector: string): ElementHandle | null;

  /**
   * Finds all elements matching the specified selector within the `Frame`.
   * @param selector A selector to query element for.
   * @returns A list of `ElementHandle`s pointing to the result elements.
   */
  $$(selector: string): ElementHandle[];

  /**
   * Checks the first checkbox element found that matches selector.
   * @param selector The selector to use.
   * @param options The options to use.
   */
  check(selector: string, options?: ElementClickOptions & StrictnessOptions): void;

  /**
   * Uncheck the first found element that matches the selector.
   * @param selector The selector to use.
   * @param options The options to use.
   */
  uncheck(selector: string, options?: ElementClickOptions & StrictnessOptions): void;

  /**
   * Clicks the element.
   * @param selector The selector to use.
   * @param options The options to use.
   * @returns A promise that resolves when the element is clicked.
   */
  click(selector: string, options?: MouseMultiClickOptions & StrictnessOptions): Promise<void>;

  /**
   * Double clicks the element.
   * @param selector The selector to use.
   * @param options The options to use.
   */
  dblclick(selector: string, options?: MouseClickOptions & MouseMoveOptions & StrictnessOptions): void;

  /**
   * Fills out the first element found that matches the selector.
   * @param selector The selector to use.
   * @param value The value to fill.
   * @param options The options to use.
   */
  fill(selector: string, value: string, options?: ElementHandleOptions & StrictnessOptions): void;

  /**
   * Focuses the first element found that matches the selector.
   * @param selector The selector to use.
   * @param options The options to use.
   */
  focus(selector: string, options?: TimeoutOptions & StrictnessOptions): void;

  /**
   * Hovers the first element found that matches the selector.
   * @param selector The selector to use.
   * @param options The options to use.
   */
  hover(selector: string, options?: ElementClickOptions & KeyboardModifierOptions & StrictnessOptions): void;

  /**
   * Taps the first element found that matches the selector.
   * @param selector The selector to use.
   * @param options The options to use.
   */
  tap(selector: string, options?: ElementClickOptions & KeyboardModifierOptions & StrictnessOptions): void;

  /**
   * Press the given key for the first element found that matches the selector.
   * @param selector The selector to use.
   * @param key The key to press.
   * @param options The options to use.
   */
  press(selector: string, key: string, options?: KeyboardPressOptions & StrictnessOptions): void;

  /**
   * Type the given text for the first element found that matches the selector.
   * @param selector The selector to use.
   * @param text The text to type.
   * @param options The options to use.
   */
  type(selector: string, text: string, options?: KeyboardPressOptions & StrictnessOptions): void;

  /**
   * Select the given options and return the array of option values of the first element
   * found that matches the selector.
   * @param selector The selector to use.
   * @param values The values to select.
   * @returns The array of option values of the first element found.
   */
  selectOption(
    selector: string,
    values: string | ElementHandle | SelectOptionsObject | string[] | ElementHandle[] | SelectOptionsObject[],
    options?: ElementHandleOptions & StrictnessOptions): string[];

  /**
   * Dispatches an event for the first element matching the selector.
   * @param selector The selector to use.
   * @param type The type of event to dispatch.
   * @param eventInit The event initialization properties.
   * @param options The options to use.
   */
  dispatchEvent(selector: string, type: string, eventInit?: object, options?: TimeoutOptions & StrictnessOptions): void;

  /**
   * Returns the value of the `pageFunction` invocation.
   *
   * A string can also be passed in instead of a function.
   *
   * @param pageFunction Function to be evaluated in the page context.
   * @param arg Optional argument to pass to `pageFunction`.
   */
  evaluate<R, Arg>(pageFunction: PageFunction<Arg, R>, arg?: Arg): R;

  /**
   * Returns the value of the `pageFunction` invocation as a [JSHandle].
   *
   * The only difference between page.evaluate(pageFunction[, arg]) and
   * page.evaluateHandle(pageFunction[, arg]) is that
   * page.evaluateHandle(pageFunction[, arg])returns [JSHandle].
   *
   * @param pageFunction Function to be evaluated in the page context.
   * @param arg Optional argument to pass to `pageFunction`.
   */
  evaluateHandle<R, Arg>(pageFunction: PageFunction<Arg, R>, arg?: Arg): JSHandle<R>;

  /**
   * Get the page that owns frame.
   * @returns The page that owns frame.
   */
  page(): Page;

  /**
   * Get the parent frame.
   * @returns The parent frame, or `null` if there is no parent frame.
   */
  parentFrame(): Frame|null;

  /**
   * Get a list of all child frames.
   * @returns A list of all child frames.
   */
  childFrames(): Frame[];

  /**
   * Get the `ElementHandle` for this frame.
   * @returns The `ElementHandle` for this frame.
   */
  frameElement(): ElementHandle;

  /**
   * Navigate the frame to the specified URL and return a HTTP response object.
   * @param url The URL to navigate to.
   * @param options The options to use.
   * @returns A promise that resolves to the HTTP response object.
   */
  goto(url: string, options?: NavigationOptions): Promise<Response|null>;

  /**
   * Replace the entire HTML document content.
   * @param html The HTML to use.
   * @param options The options to use.
   */
  setContent(html: string, options?: ContentLoadOptions): void;

  /**
   * Get the name of the frame.
   * @returns The name of the frame.
   */
  name(): string;

  /**
   * Get the title of the frame.
   * @returns The title of the frame.
   */
  title(): string;

  /**
   * Get the URL of the frame.
   * @returns The URL of the frame.
   */
  url(): string;

  /**
   * Get the HTML content of the frame.
   * @returns The HTML content of the frame.
   */
  content(): string;

  /**
   * Get whether the frame is detached or not.
   * @returns `true` if the frame is detached, `false` otherwise.
   */
  isDetached(): boolean;

  /**
   * Сreates and returns a new locator for this frame.
   * @param selector The selector to use.
   * @returns The new locator.
   */
  locator(selector: string): Locator;

  /**
   * Get the `innerHTML` attribute of the first element found that matches the selector.
   * @param selector The selector to use.
   * @param options The options to use.
   * @returns The `innerHTML` attribute of the first element found.
   */
  innerHTML(selector: string, options?: TimeoutOptions & StrictnessOptions): string;

  /**
   * Get the `innerText` attribute of the first element found that matches the selector.
   * @param selector The selector to use.
   * @param options The options to use.
   * @returns The `innerText` attribute of the first element found.
   */
  innerText(selector: string, options?: TimeoutOptions & StrictnessOptions): string;

  /**
   * Get the text content of the first element found that matches the selector.
   * @param selector The selector to use.
   * @param options The options to use.
   * @returns The text content of the first element found.
   */
  textContent(selector: string, options?: TimeoutOptions & StrictnessOptions): string;

  /**
   * Get the value of an attribute of the first element found that matches the selector.
   * @param selector The selector to use.
   * @param name The name of the attribute to get.
   * @param options The options to use.
   * @returns The value of the attribute.
   */
  getAttribute(selector: string, name: string, options?: TimeoutOptions & StrictnessOptions): string;

  /**
   * Get the input value of the first element found that matches the selector.
   * @param selector The selector to use.
   * @param options The options to use.
   * @returns The input value of the first element found.
   */
  inputValue(selector: string, options?: TimeoutOptions & StrictnessOptions): string;

  /**
   * Get the `checked` attribute of the first checkbox element found that matches the selector.
   * @param selector The selector to use.
   * @param options The options to use.
   * @returns `true` if the checkbox is checked, `false` otherwise.
   */
  isChecked(selector: string, options?: TimeoutOptions & StrictnessOptions): boolean;

  /**
   * Get whether the first element found that matches the selector is disabled or not.
   * @param selector The selector to use.
   * @param options The options to use.
   * @returns `true` if the element is disabled, `false` otherwise.
   */
  isDisabled(selector: string, options?: TimeoutOptions & StrictnessOptions): boolean;

  /**
   * Get whether the first element found that matches the selector is enabled or not.
   * @param selector The selector to use.
   * @param options The options to use.
   * @returns `true` if the element is enabled, `false` otherwise.
   */
  isEnabled(selector: string, options?: TimeoutOptions & StrictnessOptions): boolean;

  /**
   * Get whether the first element found that matches the selector is editable or not.
   * @param selector The selector to use.
   * @param options The options to use.
   * @returns `true` if the element is editable, `false` otherwise.
   */
  isEditable(selector: string, options?: TimeoutOptions & StrictnessOptions): boolean;

  /**
   * Get whether the first element found that matches the selector is hidden or not.
   * @param selector The selector to use.
   * @param options The options to use.
   * @returns `true` if the element is hidden, `false` otherwise.
   */
  isHidden(selector: string, options?: TimeoutOptions & StrictnessOptions): boolean;

  /**
   * Get whether the first element found that matches the selector is visible or not.
   * @param selector The selector to use.
   * @param options The options to use.
   * @returns `true` if the element is visible, `false` otherwise.
   */
  isVisible(selector: string, options?: TimeoutOptions & StrictnessOptions): boolean;

  /**
   * Wait for the given function to return a truthy value.
   * @param predicate The function to call and wait for.
   * @param options The options to use.
   */
  waitForFunction<R, Arg>(pageFunction: PageFunction<Arg, R>, options?: PollingOptions & TimeoutOptions, arg?: Arg): Promise<JSHandle<R>>;

  /**
   * Wait for the given load state to be reached.
   * This will unblock if that lifecycle event has already been received.
   * @param state The load state to wait for, defaults to `load`.
   * @param options The options to use.
   */
  waitForLoadState(state?: LifecycleEvent, options?: TimeoutOptions): void;

  /**
   * Waits for the navigation event to happen.
   * @param options The options to use.
   * @returns A promise that resolves to the response of the navigation when it happens.
   */
  waitForNavigation(options?: ContentLoadOptions): Promise<Response|null>;

  /**
   * Wait for the given selector to match the waiting criteria.
   * @param selector The selector to use.
   * @param options The options to use.
   * @returns The first element found that matches the selector.
   */
  waitForSelector(selector: string, options?: ElementStateFilter & TimeoutOptions & StrictnessOptions): ElementHandle;

  /**
   * Wait for the given timeout to elapse.
   * @param timeout The timeout to wait for.
   */
  waitForTimeout(timeout: number): void;
}
