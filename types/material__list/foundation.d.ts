import MDCFoundation from 'material__base/foundation';
import { MDCListAdapter } from './adapter';
import { strings, cssClasses, Index } from './constants';

export const ELEMENTS_KEY_ALLOWED_IN: string[];

export class MDCListFoundation extends MDCFoundation<MDCListFoundation> {
  static readonly strings: strings;
  static readonly cssClasses: cssClasses;
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

  getSelectedIndex(): Index;

  setSelectedIndex(index: Index): void;

  /**
   * Focus in handler for the list items.
   */
  handleFocusIn(evt: Event, listItemIndex: number): void;

  /**
   * Focus out handler for the list items.
   */
  handleFocusOut(evt: Event, listItemIndex: number): void;

  /**
   * Key handler for the list.
   */
  handleKeydown(evt: Event, isRootListItem: boolean, listItemIndex: number): void;

  /**
   * Click handler for the list.
   */
  handleClick(index: number, toggleCheckbox: boolean): void;

  /**
   * Focuses the next element on the list.
   */
  focusNextElement(index: number): number;

  /**
   * Focuses the previous element on the list.
   */
  focusPrevElement(index: number): number;

  focusFirstElement(): number;

  focusLastElement(): number;
}
