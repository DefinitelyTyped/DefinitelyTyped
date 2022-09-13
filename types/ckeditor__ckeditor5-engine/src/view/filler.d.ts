import View from './view';

export function NBSP_FILLER(domDocument: Document): Text;

export function MARKED_NBSP_FILLER(domDocument: Document): HTMLSpanElement;

export function BR_FILLER(domDocument: Document): HTMLBRElement;

export const INLINE_FILLER_LENGTH = 7;

export const INLINE_FILLER = '\u2060\u2060\u2060\u2060\u2060\u2060\u2060';

export function startsWithFiller(domNode: Node): boolean;

export function isInlineFiller(domText: Text): boolean;

export function getDataWithoutFiller(domText: Text): string;

export function injectQuirksHandling(view: View): void;
