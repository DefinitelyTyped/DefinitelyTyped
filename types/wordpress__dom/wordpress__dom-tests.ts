import * as dom from '@wordpress/dom';

// $ExpectType HTMLDivElement
const element = document.createElement('div');

// $ExpectType Node || ChildNode
const node = element.previousSibling!;

// $ExpectType Range
const range = document.createRange();

// --------------

// $ExpectType DOMRect | undefined
dom.computeCaretRect();

// $ExpectType boolean
dom.documentHasSelection();

// $ExpectType Element[]
dom.focus.focusable.find(element);

// $ExpectType Element[]
dom.focus.tabbable.find(element);

// $ExpectType boolean
dom.focus.tabbable.isTabbableIndex(element);

// $ExpectType Element | null
dom.getOffsetParent(node);

// $ExpectType DOMRect
dom.getRectangleFromRange(range);

// $ExpectType Element | undefined
dom.getScrollContainer(element);

// $ExpectType void
dom.insertAfter(node, node);

// $ExpectType boolean
dom.isEntirelySelected(element);

// $ExpectType boolean
dom.isHorizontalEdge(element, true);

// $ExpectType boolean
dom.isTextField(element);

// $ExpectType boolean
dom.isVerticalEdge(element, false);

// $ExpectType void
dom.placeCaretAtHorizontalEdge(element, true);

// $ExpectType void
dom.placeCaretAtHorizontalEdge(undefined, false);

// $ExpectType void
dom.placeCaretAtVerticalEdge(element, true);

// $ExpectType void
dom.placeCaretAtVerticalEdge(undefined, false);

// $ExpectType void
dom.remove(node);

// $ExpectType void
dom.replace(node, node);

// $ExpectType HTMLParagraphElement
dom.replaceTag(node, 'p');

// $ExpectType HTMLSpanElement
dom.replaceTag(node, 'span');

// $ExpectType void
dom.unwrap(node);

// $ExpectType void
dom.wrap(node, node);
