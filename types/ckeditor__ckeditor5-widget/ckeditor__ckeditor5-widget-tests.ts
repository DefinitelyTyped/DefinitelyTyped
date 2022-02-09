import { Editor } from '@ckeditor/ckeditor5-core';
import { DowncastWriter, Element, Model, StylesProcessor } from '@ckeditor/ckeditor5-engine';
import Schema from '@ckeditor/ckeditor5-engine/src/model/schema';
import Selection from '@ckeditor/ckeditor5-engine/src/model/selection';
import Document from '@ckeditor/ckeditor5-engine/src/view/document';
import ViewElement from '@ckeditor/ckeditor5-engine/src/view/element';
import Position from '@ckeditor/ckeditor5-engine/src/view/position';
import View from '@ckeditor/ckeditor5-engine/src/view/view';
import { Rect } from '@ckeditor/ckeditor5-utils';
import Resizer from '@ckeditor/ckeditor5-widget/src/widgetresize/resizer';
import SizeView from '@ckeditor/ckeditor5-widget/src/widgetresize/sizeview';
import {
    findOptimalInsertionRange,
    centeredBalloonPositionForLongWidgets,
    checkSelectionOnObject,
    getLabel,
    isWidget,
    setHighlightHandling,
    setLabel,
    toWidget,
    Widget,
    WidgetResize,
    WidgetToolbarRepository,
    WidgetTypeAround,
} from '@ckeditor/ckeditor5-widget/';

class MyEditor extends Editor {}
const editor = new MyEditor();

const bool: boolean = checkSelectionOnObject(new Selection(null), new Schema());

const containerElement: ViewElement = new DowncastWriter(new Document(new StylesProcessor())).createContainerElement(
    'foo',
);

const widget = new Widget(editor);
widget.init();
Widget.requires.length === 2;
Widget.requires.map(Plugin => new Plugin(editor).init());

const widgetToolbarRepository = new WidgetToolbarRepository(editor);
WidgetToolbarRepository.requires.length === 1;
widgetToolbarRepository.init();
widgetToolbarRepository.destroy();
widgetToolbarRepository.register('foo');
widgetToolbarRepository.register('foo', { items: ['bar'], getRelatedElement: () => new View(new StylesProcessor()) });
widgetToolbarRepository.register('foo', {
    balloonClassName: 'foo',
    items: ['bar'],
    getRelatedElement: () => new View(new StylesProcessor()),
});

const widgetResize = new WidgetResize(editor);
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

const widgetTypeAround = new WidgetTypeAround(editor);
widgetTypeAround.init();
widgetTypeAround.destroy();
WidgetTypeAround.requires.length === 2;
WidgetTypeAround.requires.map(Plugin => new Plugin(editor).init());

isWidget(containerElement) === bool;
const position: Position = centeredBalloonPositionForLongWidgets(
    new Rect(document.createElement('div')),
    new Rect(document.createElement('div')),
)!;
position.is('foo');
findOptimalInsertionRange(new Selection(null), new Model()).containsRange(
    findOptimalInsertionRange(new Selection(null), new Model()),
);
getLabel(containerElement).startsWith('foo');
setHighlightHandling(
    containerElement,
    new DowncastWriter(new Document(new StylesProcessor())),
    () => {},
    () => {},
);
setLabel(containerElement, () => 'foo', new DowncastWriter(new Document(new StylesProcessor())));
toWidget(containerElement, new DowncastWriter(new Document(new StylesProcessor())));

new SizeView().render();
new SizeView().isRendered === bool;

// $ExpectType Widget
editor.plugins.get('Widget');

// $ExpectType WidgetResize
editor.plugins.get('WidgetResize');

// $ExpectType WidgetToolbarRepository
editor.plugins.get('WidgetToolbarRepository');

// $ExpectType WidgetTypeAround
editor.plugins.get('WidgetTypeAround');
