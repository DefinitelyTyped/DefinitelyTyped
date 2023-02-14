import { Definition, NightwatchAPI, Awaitable } from "./index";

export interface NightwatchExpectResult {
  value: null;
  returned: 1;
}

export interface ExpectLanguageChains<T> {
  // The following are provided as chainable getters
  // to improve the readability of your assertions.
  // They do not provide testing capabilities and
  // the order is not important.
  to: T;
  be: T;
  been: T;
  is: T;
  that: T;
  which: T;
  and: T;
  has: T;
  have: T;
  with: T;
  at: T;
  does: T;
  of: T;
  same: T;

  /**
   * Negates any of assertions following in the chain.
   */
  not: T;

  /**
   * Sets the `deep` flag, later to be used by the `equal`.
   */
  deep: T;
}

export interface ExpectEqual<T> {
  (value: any): Awaitable<T, NightwatchExpectResult>;
}

export interface ExpectInclude<T> {
  (value: string): Awaitable<T, NightwatchExpectResult>;
}

export interface ExpectMatch<T> {
  (regexp: RegExp): Awaitable<T, NightwatchExpectResult>;
}

export interface ExpectStartWith<T> {
  (value: string): Awaitable<T, NightwatchExpectResult>;
}

export interface ExpectEndWith<T> {
  (value: string): Awaitable<T, NightwatchExpectResult>;
}

export interface ExpectAssertions<T> extends ExpectLanguageChains<T> {
  equal: ExpectEqual<T>;
  equals: ExpectEqual<T>;
  eq: ExpectEqual<T>;

  include: ExpectInclude<T>;
  includes: ExpectInclude<T>;
  contain: ExpectInclude<T>;
  contains: ExpectInclude<T>;

  match: ExpectMatch<T>;
  matches: ExpectMatch<T>;

  startWith: ExpectStartWith<T>;
  startsWith: ExpectStartWith<T>;

  endWith: ExpectEndWith<T>;
  endsWith: ExpectEndWith<T>;

  before: (ms: number) => Awaitable<T, NightwatchExpectResult>;
  after: (ms: number) => Awaitable<T, NightwatchExpectResult>;

  // Assertion methods returning NightwatchAPI
  toEqual: (value: any) => NightwatchAPI;
  toBe: (value: any) => NightwatchAPI;
  toContain: (value: string) => NightwatchAPI;
  toMatch: (regexp: RegExp) => NightwatchAPI;
  toEndWith: (value: string) => NightwatchAPI;
}

export interface ExpectCookie extends ExpectAssertions<ExpectCookie> {}

export interface ExpectElement extends ExpectAssertions<ExpectElement> {
  /**
   * Checks if the type (i.e. tag name) of a specified element is of an expected value.
   */
  a(type: string, message?: string): Awaitable<this, NightwatchExpectResult>;

  /**
   * Checks if the type (i.e. tag name) of a specified element is of an expected value.
   */
  an(type: string, message?: string): Awaitable<this, NightwatchExpectResult>;

  /**
   * Property that checks if an element is active in the DOM.
   */
  active: Awaitable<this, NightwatchExpectResult>;

  /**
   * Checks if a given attribute of an element exists and optionally if it has the expected value.
   */
  attribute(attribute: string, message?: string): Awaitable<this, NightwatchExpectResult>;

  /**
   * Checks a given css property of an element exists and optionally if it has the expected value.
   */
  css(property: string, message?: string): Awaitable<this, NightwatchExpectResult>;

  /**
   * Property that checks if an element is currently enabled.
   */
  enabled: Awaitable<this, NightwatchExpectResult>;

  /**
   * Property that checks if an element is present in the DOM.
   */
  present: Awaitable<this, NightwatchExpectResult>;

  /**
   * Checks if a given DOM property of an element has the expected value.
   * For all the available DOM element properties, consult the [Element doc at MDN](https://developer.mozilla.org/en-US/docs/Web/API/element).
   */
  property(name: string, message?: string): Awaitable<this, NightwatchExpectResult>;

  /**
   * Property that checks if an OPTION element, or an INPUT element of type checkbox or radio button is currently selected.
   */
  selected: Awaitable<this, NightwatchExpectResult>;

  /**
   * Property that retrieves the text contained by an element. Can be chained to check if contains/equals/matches the specified text or regex.
   */
  text: Awaitable<this, NightwatchExpectResult>;

  /**
   * Property that retrieves the value (i.e. the value attributed) of an element. Can be chained to check if contains/equals/matches the specified text or regex.
   */
  value: Awaitable<this, NightwatchExpectResult>;

  /**
   * Property that asserts the visibility of a specified element.
   */
  visible: Awaitable<this, NightwatchExpectResult>;

  /**
   * Checks if the specified DOM property of a given element is present and has the expected value.
   * For all the available DOM element properties, consult the [Element doc at MDN](https://developer.mozilla.org/en-US/docs/Web/API/element).
   */
  domProperty(propertyName: string, message?: string): Awaitable<this, NightwatchExpectResult>;
}

export interface ExpectElements extends ExpectAssertions<ExpectElements> {
  /**
   * Checks if the number of elements specified by a selector is equal or not to a given value.
   */
  count: this;
}

export interface ExpectTitle extends ExpectAssertions<ExpectTitle> {}

export interface ExpectUrl extends ExpectAssertions<ExpectUrl> {}

export interface Expect {
  /**
   *  Expect assertions operating on a single cookie after
   *  retrieving the entire cookie string, using .getCookies().
   */
  cookie(name: string, domain?: string): ExpectCookie;

  /**
   * Expect assertions operating on a single element, specified by its CSS/Xpath selector.
   */
  element(property: Definition): ExpectElement;

  /**
   * Expect assertions operating on a collection of elements, specified by a CSS/Xpath selector.
   * So far only .count is available.
   */
  elements(property: Definition): ExpectElements;

  /**
   * Retrieves the page title value in order to be used for performing equal, match or contains assertions on it.
   */
  title(): ExpectTitle;

  /**
   * Retrieves the page url value in order to be used for performing equal, match or contains assertions on it.
   */
  url(): ExpectUrl;
}
