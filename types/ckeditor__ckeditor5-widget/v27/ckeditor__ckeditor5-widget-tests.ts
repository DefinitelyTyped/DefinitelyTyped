import { Editor } from '@ckeditor/ckeditor5-core';
import { DowncastWriter, Element, Model, StylesProcessor } from '@ckeditor/ckeditor5-engine';
import Schema from '@ckeditor/ckeditor5-engine/src/model/schema';
import Selection from '@ckeditor/ckeditor5-engine/src/model/selection';
import Document from '@ckeditor/ckeditor5-engine/src/view/document';
import ViewElement from '@ckeditor/ckeditor5-engine/src/view/element';
import Position from '@ckeditor/ckeditor5-engine/src/view/position';
import View from '@ckeditor/ckeditor5-engine/src/view/view';
import { Rect } from '@ckeditor/ckeditor5-utils';
import * as CKWidget from '@ckeditor/ckeditor5-widget';
import Resizer from '@ckeditor/ckeditor5-widget/src/widgetresize/resizer';

class MyEditor extends Editor {}
const editor = new MyEditor();

const bool: boolean = CKWidget.checkSelectionOnObject(new Selection(null), new Schema());

const containerElement: ViewElement = new DowncastWriter(new Document(new StylesProcessor())).createContainerElement(
    'foo',
);

const widget = new CKWidget.Widget(editor);
widget.init();
CKWidget.Widget.requires.length === 2;
CKWidget.Widget.requires.map(Plugin => new Plugin(editor).init());

const widgetToolbarRepository = new CKWidget.WidgetToolbarRepository(editor);
CKWidget.WidgetToolbarRepository.requires.length === 1;
widgetToolbarRepository.init();
widgetToolbarRepository.destroy();
widgetToolbarRepository.register('foo');
widgetToolbarRepository.register('foo', { items: ['bar'], getRelatedElement: () => new View(new StylesProcessor()) });
widgetToolbarRepository.register('foo', {
    balloonClassName: 'foo',
    items: ['bar'],
    getRelatedElement: () => new View(new StylesProcessor()),
});

const widgetResize = new CKWidget.WidgetResize(editor);
widgetResize.init();
widgetResize.destroy();
let resizer: Resizer = widgetResize.visibleResizer!;
resizer = widgetResize.attachTo();
resizer = widgetResize.attachTo({
    editor,
    getResizeHost: el => el,
    getHandleHost: el => el,
    isCentered: () => bool,
    modelElement: Element.fromJSON({ name: 'div' }),
    onCommit: newValue => {
        newValue.startsWith('foo');
    },
    viewElement: containerElement,
});
resizer = widgetResize.getResizerByViewElement(containerElement)!;
resizer.destroy();

const widgetTypeAround = new CKWidget.WidgetTypeAround(editor);
widgetTypeAround.init();
widgetTypeAround.destroy();
CKWidget.WidgetTypeAround.requires.length === 2;
CKWidget.WidgetTypeAround.requires.map(Plugin => new Plugin(editor).init());

CKWidget.isWidget(containerElement);
const position: Position = CKWidget.centeredBalloonPositionForLongWidgets(
    new Rect(document.createElement('div')),
    new Rect(document.createElement('div')),
)!;
position.is('foo');
CKWidget.findOptimalInsertionPosition(new Selection(null), new Model());
CKWidget.getLabel(containerElement).startsWith('foo');
CKWidget.setHighlightHandling(
    containerElement,
    new DowncastWriter(new Document(new StylesProcessor())),
    () => {},
    () => {},
);
CKWidget.setLabel(containerElement, () => 'foo', new DowncastWriter(new Document(new StylesProcessor())));
CKWidget.toWidget(containerElement, new DowncastWriter(new Document(new StylesProcessor())));

// $ExpectType Widget
editor.plugins.get('Widget');

// $ExpectType WidgetResize
editor.plugins.get('WidgetResize');

// $ExpectType WidgetToolbarRepository
editor.plugins.get('WidgetToolbarRepository');

// $ExpectType WidgetTypeAround
editor.plugins.get('WidgetTypeAround');
