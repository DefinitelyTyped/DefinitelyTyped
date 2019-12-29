// Type definitions for Cash
// Project: https://github.com/kenwheeler/cash
// Definitions by: Ashok Vishwakarma <https://github.com/akvlko>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * OffsetType
 * return type for cash.offset(), cash.position()
 */
interface OffsetType {
  top: number;
  left: number;
}

/**
 * CashStatic
 * Static declaration for CashJs accessible directly using Cash object or $
 */
interface CashStatic {
  /**
   * isArray
   * Check if the argument is an array.
   * @type method
   * @argument any
   * @return boolean
   */
  isArray(n: any): boolean;

  /**
   * isFunction
   * Check if the argument is a function.
   * @type method
   * @argument any
   * @return boolean
   */
  isFunction(n: any): boolean;

  /**
   * isNumeric
   * Check if the argument is numeric.
   * @type method
   * @type method
   * @argument any
   * @return boolean
   */
  isNumeric(n: any): boolean;

  /**
   * isString
   * Check if the argument is a string.
   * @type method
   * @argument str any
   * @return boolean
   */
  isString(str: any): boolean;

  /**
   * extend
   * Extends target object with properties from the source object. If no target is provided, cash itself will be extended.
   * @type method
   * @argument target any, source any
   */
  extend(target: any, source: any): any;

  /**
   * matches
   * Checks a selector against an element, returning a boolean value for match.
   * @type method
   * @argument element Cash, selector string
   * @return boolean
   */
  matches(element: Cash, selector: string): boolean;

  /**
   * parseHTML
   * Returns a collection from an HTML string.
   * @type method
   * @argument htmlString string
   * @return Cash
   */
  parseHTML(htmlString: string): Cash;

  /**
   * each
   * Iterates through a collection and calls the callback method on each.
   * @type method
   * @argument collection Array, callback Function
   * @return Array
   */
  each(collection: Array<any>, callback: Function): Array<any>;

  /**
   * fn: use to extend cash for plugin development
   * @type property
   */
  fn: any;

  /**
   * selector declaration for Cash to use $(<argument>)
   */
  (selector: string, context?: Element|Cash): Cash;
  (element: Element): Cash;
  (elementArray: Element[]): Cash;
}

/**
 * Cash
 * Interface for CashJs 
 * Refer https://github.com/kenwheeler/cash for documentation and uses of the methods and properties
 */
interface Cash {
  /**
   * add
   * Returns a new collection with the element(s) added to the end.
   */
  add(selector: string|Cash|Element, context?: Element): Cash;

  /**
   * addClass
   * Adds the className argument to collection elements.
   */
  addClass(c: string): Cash;

  /**
   * after
   * Inserts content or elements after the collection.
   */
  after(selector: Element|String): Cash;

  /**
   * append
   * Appends the target element to the each element in the collection.
   */
  append(content: string|Element|Cash): Cash;

  /**
   * appendTo
   * Adds the elements in a collection to the target element(s).
   */
  appendTo(parent: string|Element|Cash): Cash;

  /**
   * attr
   * Without attrValue, returns the attribute value of the first element in the collection.
   * With attrValue, sets the attribute value of each element of the collection.
   */
  attr(name: string): any;
  attr(name: string, value: string): Cash;

  /**
   * before
   * Inserts content or elements before the collection.
   */
  before(selector: string|Element): Cash;

  /**
   * children
   * Without a selector specified, returns a collection of child elements.
   * With a selector, returns child elements that match the selector.
   */
  children(selector?: string): Cash;

  /**
   * closest
   * Returns the closest matching selector up the DOM tree.
   */
  closest(selector?: string): Cash;

  /**
   * clone
   * Returns a clone of the collection.
   */
  clone(): Cash;

  /**
   * css
   * Returns a CSS property value when just property is supplied.
   * Sets a CSS property when property and value are supplied, and set multiple properties when an object is supplied.
   * Properties will be autoprefixed if needed for the user's browser.
   */
  css(prop: any): any;
  css(prop: string, value: any): Cash;

  /**
   * data
   * Link some data (string, object, array, etc.) to an element when both key and value are supplied.
   * If only a key is supplied, returns the linked data and falls back to data attribute value if no data is already linked.
   * Multiple data can be set when an object is supplied.
   */
  data(name: any): any;
  data(name: string, value: any): Cash;

  /**
   * each
   * Iterates over a collection with callback(value, index, array).
   */
  each(callback: Function): Cash;

  /**
   * empty
   * Empties an elements interior markup.
   */
  empty(): Cash;

  /**
   * eq
   * Returns a collection with the element at index.
   */
  eq(index: number): Cash;

  /**
   * extend
   * Adds properties to the cash collection prototype.
   */
  extend(target: any): any;

  /**
   * filter
   * Returns the collection that results from applying the filter method.
   */
  filter(selector: Function): Cash;

  /**
   * find
   * Returns selector match descendants from the first element in the collection.
   */
  find(selector: string): Cash;

  /**
   * first
   * Returns the first element in the collection.
   */
  first(): Cash;

  /**
   * get
   * Returns the element at the index.
   */
  get(index: number): HTMLElement;

  /**
   * has
   * Returns boolean result of the selector argument against the collection.
   */
  has(selector: string): boolean;

  /**
   * hasClass
   * Returns the boolean result of checking if the first element in the collection has the className attribute.
   */
  hasClass(c: string): boolean;

  /**
   * height
   * Returns the height of the element.
   */
  height(): number;

  /**
   * html
   * Returns the HTML text of the first element in the collection, sets the HTML if provided.
   */
  html(): string;
  html(content: string): Cash;

  /**
   * index
   * Returns the index of the element in its parent if an element or selector isn't provided.
   * Returns index within element or selector if it is.
   */
  index(elem?: Element): number;

  /**
   * innerHeight
   * Returns the height of the element + padding.
   */
  innerHeight(): number;

  /**
   * innerWidth
   * Returns the width of the element + padding.
   */
  innerWidth(): number;

  /**
   * insertAfter
   * Inserts collection after specified element.
   */
  insertAfter(selector: string|Element|Cash): Cash;

  /**
   * insertBefore
   * Inserts collection before specified element.
   */
  insertBefore(selector: string|Element|Cash): Cash;

  /**
   * is
   * Returns whether the provided selector, element or collection matches any element in the collection.
   */
  is(selector: string|Element|Cash): boolean;

  /**
   * last
   * Returns last element in the collection.
   */
  last(): Cash;
  
  /**
   * next
   * Returns next sibling.
   */
  next(): Cash;

  /**
   * not
   * Filters collection by false match on selector.
   */
  not(selector: string|Element|Cash): Cash;

  /**
   * off
   * Removes event listener from collection elements.
   */
  off(eventName: string, callback: Function): Cash;
  
  /**
   * offset
   * Get the coordinates of the first element in a collection relative to the document.
   */
  offset(): OffsetType;
  
  /**
   * offsetParent
   * Get the first element's ancestor that's positioned.
   */
  offsetParent(): OffsetType;

  /**
   * on
   * Adds event listener to collection elements. Event is delegated if delegate is supplied.
   */
  on(eventName: string|Array<string>, delegate: any, callback?: Function, runOnce?: boolean): Cash;

  /**
   * one
   * Adds event listener to collection elements that only triggers once for each element.
   * Event is delegated if delegate is supplied.
   */
  one(eventName: string|Array<string>, delegate: any, callback?: Function, runOnce?: boolean): Cash;

  /**
   * outerHeight
   * Returns the outer height of the element. Includes margins if margin is set to true.
   */
  outerHeight(flag?: boolean): number;

  /**
   * outerWidth
   * Returns the outer width of the element. Includes margins if margin is set to true.
   */
  outerWidth(flag?: boolean): number;

  /**
   * parent
   * Returns parent element.
   */
  parent(): Cash;

  /**
   * parents
   * Returns collection of elements who are parents of element. Optionally filtering by selector.
   */
  parents(selector?: string): Cash;

  /**
   * position
   * Get the coordinates of the first element in a collection relative to its offsetParent.
   */
  position(): OffsetType;

  /**
   * prepend
   * Prepends element to the each element in collection.
   */
  prepend(content: string): Cash;

  /**
   * prependTo
   * Prepends elements in a collection to the target element(s).
   */
  prependTo(parent: string|Element|Cash): Cash;

  /**
   * prev
   * Returns the previous adjacent element.
   */
  prev(): Cash;

  /**
   * prop
   * Returns a property value when just property is supplied.
   * Sets a property when property and value are supplied, and sets multiple properties when an object is supplied.
   */
  prop(name: string): any;
  prop(name: string, value: string): Cash;

  /**
   * ready
   * Calls callback method on DOMContentLoaded.
   */
  ready(fn: Function): void;

  /**
   * remove
   * Removes collection elements from the DOM.
   */
  remove(): Cash;
  
  /**
   * removeAttr
   * Removes attribute from collection elements.
   */
  removeAttr(name: string): Cash;

  /**
   * removeClass
   * Removes className from collection elements.
   * Accepts space-separated classNames for removing multiple classes.
   * Providing no arguments will remove all classes.
   */
  removeClass(c?: string): Cash;

  /**
   * removeData
   * Removes linked data and data-attributes from collection elements.
   */
  removeData(key: string): Cash;

  /**
   * removeProp
   * Removes property from collection elements.
   */
  removeProp(name: string): Cash;

  /**
   * serialize
   * When called on a form, serializes and returns form data.
   */
  serialize(): string;

  /**
   * siblings
   * Returns a collection of sibling elements.
   */
  siblings(): Cash;

  /**
   * text
   * Returns the inner text of the first element in the collection, sets the text if textContent is provided.
   */
  text(): string;
  text(content?: string): Cash;

  /**
   * toggleClass
   * Adds or removes className from collection elements based on if the element already has the class.
   * Accepts space-separated classNames for toggling multiple classes, and an optional force boolean to ensure classes are added (true) or removed (false).
   */
  toggleClass(c: string, state?: boolean): Cash;

  /**
   * trigger
   * Triggers supplied event on elements in collection. Data can be passed along as the second parameter.
   */
  trigger(eventName: string, data?: any): Cash;

  /**
   * val
   * Returns an inputs value. If value is supplied, sets all inputs in collection's value to the value argument.
   */
  val(): any;
  val(value?: string): Cash;

  /**
   * width
   * Returns the width of the element.
   */
  width(): number;
}

declare module "cash" {
    export = CashStatic;
}
declare var cash: CashStatic;
