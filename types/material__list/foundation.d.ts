import MDCFoundation from 'material__base/foundation';
import { MDCListAdapter } from './adapter';
import { strings, cssClasses, Index } from './constants';

declare const ELEMENTS_KEY_ALLOWED_IN: string[];

declare class MDCListFoundation extends MDCFoundation<MDCListFoundation> {
  static readonly strings: strings;
  static readonly cssClasses: cssClasses;

  /**
   * {@see MDCListAdapter} for typing information on parameters and return
   * types.
   * @return {!MDCListAdapter}
   */
  static readonly defaultAdapter: MDCListAdapter;
  constructor(adapter: MDCListAdapter);

  layout(): void;

  /**
   * Sets the private wrapFocus_ variable.
   */
  setWrapFocus(value: boolean): void;

  /**
   * Sets the isVertical_ private variable.
   */
  setVerticalOrientation(value: boolean): void;

  /**
   * Sets the isSingleSelectionList_ private variable.
   */
  setSingleSelection(value: boolean): void;

  /**
   * Sets the useActivatedClass_ private variable.
   */
  setUseActivatedClass(useActivated: boolean): void;

  /** @return {!Index} */
  getSelectedIndex(): Index;

  /** @param {!Index} index */
  setSelectedIndex(index: Index): void;

  /**
   * Focus in handler for the list items.
   * @param evt
   * @param {number} listItemIndex
   */
  handleFocusIn(evt: Event, listItemIndex: number): void;

  /**
   * Focus out handler for the list items.
   * @param {Event} evt
   * @param {number} listItemIndex
   */
  handleFocusOut(evt: Event, listItemIndex: number): void;

  /**
   * Key handler for the list.
   * @param {Event} evt
   * @param {boolean} isRootListItem
   * @param {number} listItemIndex
   */
  handleKeydown(evt: Event, isRootListItem: boolean, listItemIndex: number): void;

  /**
   * Click handler for the list.
   * @param {number} index
   * @param {boolean} toggleCheckbox
   */
  handleClick(index: number, toggleCheckbox: boolean): void;

  /**
   * Focuses the next element on the list.
   * @param {number} index
   * @return {number}
   */
  focusNextElement(index: number): number;

  /**
   * Focuses the previous element on the list.
   * @param {number} index
   * @return {number}
   */
  focusPrevElement(index: number): number;

  /**
   * @return {number}
   */
  focusFirstElement(): number;

  /**
   * @return {number}
   */
  focusLastElement(): number;
}

export { MDCListFoundation };
