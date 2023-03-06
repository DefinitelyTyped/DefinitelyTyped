import { Editor } from '@ckeditor/ckeditor5-core';
import MinimapIframeView from '@ckeditor/ckeditor5-minimap/src/minimapiframeview';
import { Locale } from '@ckeditor/ckeditor5-utils';
import Minimap from '@ckeditor/ckeditor5-minimap/src/minimap';
import MinimapPositionTrackerView from '@ckeditor/ckeditor5-minimap/src/minimappositiontrackerview';
import MinimapView from '@ckeditor/ckeditor5-minimap/src/minimapview';
import * as utils from '@ckeditor/ckeditor5-minimap/src/utils';

const myEditor = new (class MyEditor extends Editor {})();

new Minimap(myEditor);

new MinimapIframeView(new Locale(), {
    domRootClone: document.body,
    scaleRatio: 0,
    pageStyles: ['', { href: '' }],
});
new MinimapIframeView(new Locale(), {
    domRootClone: document.body,
    scaleRatio: 0,
    pageStyles: ['', { href: '' }],
    extraClasses: '',
    useSimplePreview: true,
});

new MinimapPositionTrackerView();
// $ExpectType number
new MinimapPositionTrackerView().top;
// $ExpectType number
new MinimapPositionTrackerView().height;
// $ExpectType number
new MinimapPositionTrackerView().scrollProgress;
new MinimapPositionTrackerView().setHeight(5);
new MinimapPositionTrackerView().setTopOffset(5);
new MinimapPositionTrackerView().setScrollProgress(5);

// $ExpectType number
new MinimapView({
    locale: new Locale(),
    scaleRatio: 0,
    domRootClone: document.body,
    pageStyles: ['', { href: '' }],
}).scrollHeight;
new MinimapView({
    locale: new Locale(),
    scaleRatio: 0,
    domRootClone: document.body,
    pageStyles: ['', { href: '' }],
}).setContentHeight(4);
new MinimapView({
    locale: new Locale(),
    scaleRatio: 0,
    domRootClone: document.body,
    pageStyles: ['', { href: '' }],
}).setScrollProgress(4);
new MinimapView({
    locale: new Locale(),
    scaleRatio: 0,
    domRootClone: document.body,
    pageStyles: ['', { href: '' }],
}).setPositionTrackerHeight(4);
new MinimapView({
    locale: new Locale(),
    scaleRatio: 0,
    domRootClone: document.body,
    pageStyles: ['', { href: '' }],
});

// $ExpectType HTMLElement
utils.cloneEditingViewDomRoot(myEditor, '');
// $ExpectType Rect
utils.getDomElementRect(document.body);
// $ExpectType (string | { href: string; })[]
utils.getPageStyles();
// $ExpectType number
utils.getClientHeight(document.body);
// $ExpectType HTMLElement | null
utils.findClosestScrollableAncestor(document.body);
// $ExpectType HTMLElement | Window
utils.getScrollable(document.body);

// $ExpectType Minimap
myEditor.plugins.get('Minimap');
