import { Editor } from '@ckeditor/ckeditor5-core';
import { DowncastWriter, Element, Model, StylesProcessor } from '@ckeditor/ckeditor5-engine';
import Schema from '@ckeditor/ckeditor5-engine/src/model/schema';
import Selection from '@ckeditor/ckeditor5-engine/src/model/selection';
import ContainerElement from '@ckeditor/ckeditor5-engine/src/view/containerelement';
import Document from '@ckeditor/ckeditor5-engine/src/view/document';
import ViewElement from '@ckeditor/ckeditor5-engine/src/view/element';
import Position from '@ckeditor/ckeditor5-engine/src/view/position';
import View from '@ckeditor/ckeditor5-engine/src/view/view';
import { Rect } from '@ckeditor/ckeditor5-utils';
import * as CKWidget from '@ckeditor/ckeditor5-widget';
import Resizer from '@ckeditor/ckeditor5-widget/src/widgetresize/resizer';

class MyEditor extends Editor {}
const editor = new MyEditor();

class MyView extends ViewElement {}
const view = new MyView();

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
    isCentered: () => true,
    modelElement: new Element('div'),
    onCommit: newValue => {
        newValue.startsWith('foo');
    },
    viewElement: new ContainerElement(),
});
resizer = widgetResize.getResizerByViewElement(new ContainerElement())!;

const widgetTypeAround = new CKWidget.WidgetTypeAround(editor);
widgetTypeAround.init();
widgetTypeAround.destroy();
CKWidget.WidgetTypeAround.requires.length === 2;
CKWidget.WidgetTypeAround.requires.map(Plugin => new Plugin(editor).init());

CKWidget.isWidget(new ContainerElement());
const position: Position = CKWidget.centeredBalloonPositionForLongWidgets(
    new Rect(document.createElement('div')),
    new Rect(document.createElement('div')),
)!;
const bool: boolean = CKWidget.checkSelectionOnObject(new Selection(null), new Schema());
CKWidget.findOptimalInsertionPosition(new Selection(null), new Model());
const str: string = CKWidget.getLabel(view);
CKWidget.setHighlightHandling(
    view,
    new DowncastWriter(new Document(new StylesProcessor())),
    () => {},
    () => {},
);
CKWidget.setLabel(view, () => 'foo', new DowncastWriter(new Document(new StylesProcessor())));
CKWidget.toWidget(view, new DowncastWriter(new Document(new StylesProcessor())));
