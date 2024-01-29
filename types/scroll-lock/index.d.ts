/**
 * Cross-browser JavaScript library to disable scrolling page
 */
export as namespace scrollLock;

export type ScrollableTarget = Element | Element[] | NodeList;

export type LockableTarget = Element | Element[] | NodeList;

export type FillGapTarget = Element | Element[] | NodeList;

export type ScrollableSelector = string | string[];
export type LockableSelector = string | string[];
export type FillGapSelector = string | string[];

export type FillGapMethod = "padding" | "margin" | "width" | "max-width" | "none";

/**
 * Fills the gap with elements with this selector
 * Initial value: ['body', '[data-scroll-lock-fill-gap]']
 */
export function addFillGapSelector(fillGapSelector: FillGapSelector): void;

/**
 * Fills the gap at the element.
 */
export function addFillGapTarget(fillGapTarget: FillGapTarget): void;
/**
 * Makes elements with this selector lockable.
 * Initial value: ['[data-scroll-lock-lockable]']
 */
export function addLockableSelector(lockableSelector: LockableSelector): void;

/**
 * Makes the element lockable.
 */
export function addLockableTarget(lockableTarget: LockableTarget): void;
/**
 * Makes elements with this selector scrollable.
 * Initial value '[`data-scroll-lock-scrollable`]'
 */
export function addScrollableSelector(scrollableSelector: ScrollableSelector): void;

/**
 * Makes the element scrollable.
 */
export function addScrollableTarget(scrollableTarget: ScrollableTarget): void;
/**
 * Hides the scroll bar and disables page scrolling.
 */
export function disablePageScroll(scrollableTarget?: ScrollableTarget): void;

/**
 * Shows the scroll bar and enables page scrolling.
 */
export function enablePageScroll(scrollableTarget?: ScrollableTarget): void;

/**
 * Returns the state of the page scroll bar.
 */
export function getScrollState(): boolean;

/**
 * Clears the queue value.
 */
export function clearQueueScrollLocks(): void;

/**
 * Returns the width of the scroll bar.
 * @default false
 */
export function getPageScrollBarWidth(onlyExists?: boolean): number;

/**
 * Returns the width of the scroll bar to specific moment.
 */
export function getCurrentPageScrollBarWidth(): number;

/**
 * Returns the gap for elements with this selector.
 */
export function removeFillGapSelector(fillGapSelector: FillGapSelector): void;

/**
 * Returns the gap at the element.
 */
export function removeFillGapTarget(fillGapTarget: FillGapTarget): void;

/**
 * Makes elements with this selector not scrollable.
 */
export function removeScrollableSelector(scrollableSelector: ScrollableSelector): void;

/**
 * Makes the element not scrollable.
 */
export function removeScrollableTarget(scrollableTarget: ScrollableTarget): void;

/**
 * Changes the method of filling the gap.
 * @default 'padding'
 */
export function setFillGapMethod(fillGapMethod: FillGapMethod): void;

/**
 * Recalculates filled gaps.
 */
export function refillGaps(): void;
