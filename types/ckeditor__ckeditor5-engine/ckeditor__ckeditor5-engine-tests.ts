import {
    addBackgroundRules,
    addBorderRules,
    addMarginRules,
    addPaddingRules,
    ClickObserver,
    Conversion,
    DataController,
    disablePlaceholder,
    DocumentSelection,
    DomConverter,
    DowncastWriter,
    EditingController,
    Element,
    enablePlaceholder,
    getBoxSidesShorthandValue,
    getBoxSidesValueReducer,
    getPositionShorthandNormalizer,
    getShorthandValues,
    hidePlaceholder,
    HtmlDataProcessor,
    InsertOperation,
    isAttachment,
    isColor,
    isLength,
    isLineStyle,
    isPercentage,
    isPosition,
    isRepeat,
    isURL,
    LivePosition,
    LiveRange,
    MarkerOperation,
    Model,
    needsPlaceholder,
    Observer,
    Range,
    showPlaceholder,
    StylesProcessor,
    transformSets,
    TreeWalker,
    ViewDocument
} from '@ckeditor/ckeditor5-engine';
import DowncastDispatcher from '@ckeditor/ckeditor5-engine/src/conversion/downcastdispatcher';
import DowncastHelpers, {
    clearAttributes,
    convertCollapsedSelection,
    convertRangeSelection,
    insertElement,
    insertText,
    insertUIElement,
    remove,
    wrap
} from '@ckeditor/ckeditor5-engine/src/conversion/downcasthelpers';
import Mapper from '@ckeditor/ckeditor5-engine/src/conversion/mapper';
import UpcastDispatcher from '@ckeditor/ckeditor5-engine/src/conversion/upcastdispatcher';
import UpcastHelpers, {
    convertSelectionChange,
    convertText,
    convertToModelFragment
} from '@ckeditor/ckeditor5-engine/src/conversion/upcasthelpers';
import XmlDataProcessor from '@ckeditor/ckeditor5-engine/src/dataprocessor/xmldataprocessor';
import Batch from '@ckeditor/ckeditor5-engine/src/model/batch';
import ModelDocument from '@ckeditor/ckeditor5-engine/src/model/document';
import DocumentFragment from '@ckeditor/ckeditor5-engine/src/model/documentfragment';
import History from '@ckeditor/ckeditor5-engine/src/model/history';
import { Item } from '@ckeditor/ckeditor5-engine/src/model/item';
import MarkerCollection, { Marker } from '@ckeditor/ckeditor5-engine/src/model/markercollection';
import Node from '@ckeditor/ckeditor5-engine/src/model/node';
import AttributeOperation from '@ckeditor/ckeditor5-engine/src/model/operation/attributeoperation';
import DetachOperation from '@ckeditor/ckeditor5-engine/src/model/operation/detachoperation';
import Operation from '@ckeditor/ckeditor5-engine/src/model/operation/operation';
import ModelPosition from '@ckeditor/ckeditor5-engine/src/model/position';
import RootElement from '@ckeditor/ckeditor5-engine/src/model/rootelement';
import Schema from '@ckeditor/ckeditor5-engine/src/model/schema';
import Selection from '@ckeditor/ckeditor5-engine/src/model/selection';
import Text from '@ckeditor/ckeditor5-engine/src/model/text';
import TextProxy from '@ckeditor/ckeditor5-engine/src/model/textproxy';
import { TreeWalkerValue } from '@ckeditor/ckeditor5-engine/src/model/treewalker';
import deleteContent from '@ckeditor/ckeditor5-engine/src/model/utils/deletecontent';
import getSelectedContent from '@ckeditor/ckeditor5-engine/src/model/utils/getselectedcontent';
import insertContent from '@ckeditor/ckeditor5-engine/src/model/utils/insertcontent';
import modifySelection from '@ckeditor/ckeditor5-engine/src/model/utils/modifyselection';
import {
    injectSelectionPostFixer,
    mergeIntersectingRanges
} from '@ckeditor/ckeditor5-engine/src/model/utils/selection-post-fixer';
import Writer from '@ckeditor/ckeditor5-engine/src/model/writer';
import { getBoxSidesValues } from '@ckeditor/ckeditor5-engine/src/styles/utils';
import AttributeElement from '@ckeditor/ckeditor5-engine/src/view/attributeelement';
import ContainerElement, { getFillerOffset } from '@ckeditor/ckeditor5-engine/src/view/containerelement';
import Document from '@ckeditor/ckeditor5-engine/src/view/document';
import ViewDocumentFragment from '@ckeditor/ckeditor5-engine/src/view/documentfragment';
import ViewDocumentSelection from '@ckeditor/ckeditor5-engine/src/view/documentselection';
import { BlockFillerMode } from '@ckeditor/ckeditor5-engine/src/view/domconverter';
import EditableElement from '@ckeditor/ckeditor5-engine/src/view/editableelement';
import ViewElement from '@ckeditor/ckeditor5-engine/src/view/element';
import { ElementDefinition } from '@ckeditor/ckeditor5-engine/src/view/elementdefinition';
import EmptyElement from '@ckeditor/ckeditor5-engine/src/view/emptyelement';
import { getDataWithoutFiller, isInlineFiller, startsWithFiller } from '@ckeditor/ckeditor5-engine/src/view/filler';
import Matcher, { MatcherPattern } from '@ckeditor/ckeditor5-engine/src/view/matcher';
import ViewNode from '@ckeditor/ckeditor5-engine/src/view/node';
import ArrowKeysObserver from '@ckeditor/ckeditor5-engine/src/view/observer/arrowkeysobserver';
import BubblingEventInfo from '@ckeditor/ckeditor5-engine/src/view/observer/bubblingeventinfo';
import DomEventData from '@ckeditor/ckeditor5-engine/src/view/observer/domeventdata';
import DomEventObserver from '@ckeditor/ckeditor5-engine/src/view/observer/domeventobserver';
import FakeSelectionObserver from '@ckeditor/ckeditor5-engine/src/view/observer/fakeselectionobserver';
import FocusObserver from '@ckeditor/ckeditor5-engine/src/view/observer/focusobserver';
import InputObserver from '@ckeditor/ckeditor5-engine/src/view/observer/inputobserver';
import KeyObserver from '@ckeditor/ckeditor5-engine/src/view/observer/keyobserver';
import MouseObserver from '@ckeditor/ckeditor5-engine/src/view/observer/mouseobserver';
import MutationObserver from '@ckeditor/ckeditor5-engine/src/view/observer/mutationobserver';
import SelectionObserver from '@ckeditor/ckeditor5-engine/src/view/observer/selectionobserver';
import Position from '@ckeditor/ckeditor5-engine/src/view/position';
import ViewRange from '@ckeditor/ckeditor5-engine/src/view/range';
import RawElement from '@ckeditor/ckeditor5-engine/src/view/rawelement';
import RootEditableElement from '@ckeditor/ckeditor5-engine/src/view/rooteditableelement';
import ViewSelection from '@ckeditor/ckeditor5-engine/src/view/selection';
import ViewText from '@ckeditor/ckeditor5-engine/src/view/text';
import ViewTextProxy from '@ckeditor/ckeditor5-engine/src/view/textproxy';
import UIElement from '@ckeditor/ckeditor5-engine/src/view/uielement';
import View from '@ckeditor/ckeditor5-engine/src/view/view';
import { EmitterMixin } from '@ckeditor/ckeditor5-utils';

let str = '';
const stylesProcessor = new StylesProcessor();
let viewDocumentFragment = new ViewDocumentFragment();
let pattern: MatcherPattern = { name: /^p/ };

let num: number = getFillerOffset()!;
const nullvalue: null = getFillerOffset() as null;

pattern = {
    attributes: {
        title: 'foobar',
        foo: /^\w+/,
        bar: true,
    },
};

pattern = {
    classes: 'foobar',
};

pattern = {
    classes: /foo.../,
};

pattern = {
    classes: ['baz', 'bar', /foo.../],
};

pattern = {
    styles: {
        position: 'absolute',
        color: /^\w*blue$/,
    },
};

pattern = {
    name: 'span',
    styles: {
        'font-weight': 'bold',
    },
    classes: 'highlighted',
};

pattern = (element: ViewElement) => {
    if (element.name === 'div' && element.childCount > 0) {
        return { name: true };
    }

    return;
};

pattern = (element: ViewElement) => {
    if (element.name === 'p') {
        const fontSize = element.getStyle('font-size')!;
        const size = fontSize.match(/(\d+)/px);

        if (size && Number(size[1]) > 26) {
            return { name: true, attribute: ['font-size'] };
        }
    }

    return;
};

let viewDefinition: ElementDefinition = 'p';

viewDefinition = {
    name: 'h1',
    classes: ['foo', 'bar'],
};

viewDefinition = {
    name: 'span',
    styles: {
        'font-size': '12px',
        'font-weight': 'bold',
    },
    attributes: {
        'data-id': '123',
    },
};

let model = new Model();
const root = model.document.createRoot();
let range = model.createRange(model.createPositionAt(root, 0), model.createPositionAt(root, 0));
model.change(writer => {
    writer.insertText('foo', model.document.selection.getFirstPosition());
});
new Model().on('foo', (ev, ...args) => {
    // $ExpectType EventInfo<Model, "foo">
    ev;
    // $ExpectType any[]
    args;
});

new Model().set('foo');

model.document.createRoot();
model.schema.register('paragraph', { inheritAllFrom: '$block' });
model.schema.addAttributeCheck(context => {
    if (context.endsWith('paragraph')) {
        return true;
    }
});
model.createBatch();
model.createBatch({ isUndo: true });

const view: View = new View(new StylesProcessor());
view.change(writer => {
    writer.insert(new Position(viewDocumentFragment, 4), writer.createText('foo'));
});

const viewElement = new DowncastWriter(new ViewDocument(new StylesProcessor())).createEmptyElement('div');
// $ExpectType boolean
viewElement.shouldRenderUnsafeAttribute('');

let viewDocument = new ViewDocument(stylesProcessor);
// $ExpectType boolean
viewDocument.isSelecting;
viewDocument.isSelecting = true;
let bool: boolean = viewDocument.isReadOnly;
num = viewDocument.roots.length;
// $ExpectType (RootEditableElement & { id: string; }) | null
viewDocument.roots.get('main');
// $ExpectType RootEditableElement | null
viewDocument.getRoot();

enablePlaceholder({
    view,
    element: viewElement,
    text: 'foo',
});
enablePlaceholder({
    view,
    element: viewElement,
    text: 'foo',
    isDirectHost: true,
    keepOnFocus: true,
});
disablePlaceholder(view, viewElement);
showPlaceholder(new DowncastWriter(viewDocument), viewElement);
hidePlaceholder(new DowncastWriter(viewDocument), viewElement);
bool = needsPlaceholder(viewElement, bool);

const editingcontroller: EditingController = new EditingController(model, stylesProcessor);
editingcontroller.destroy();
editingcontroller.set('foo', 'bar');
editingcontroller.once('foo', (ev, ...args) => {
    // $ExpectType EventInfo<EditingController, "foo">
    ev;
    // $ExpectType any[]
    args;
});
editingcontroller.downcastDispatcher.on('insert:$element', () => {});

const datacontroller: DataController = new DataController(model, stylesProcessor);
model = datacontroller.model;
// $ExpectType StylesProcessor
datacontroller.stylesProcessor;
// $ExpectType DocumentFragment
datacontroller.parse(str);
// $ExpectType DocumentFragment
datacontroller.parse('foo', ['$block']);
// $ExpectType DocumentFragment
datacontroller.toModel(viewElement);
// $ExpectType DocumentFragment
datacontroller.toModel(viewDocumentFragment);
// $ExpectType DocumentFragment
datacontroller.toModel(viewDocumentFragment, ['inlineRoot']);
datacontroller.init('').then(() => {});
datacontroller.set('');
datacontroller.set({ foo: '' });
datacontroller.set({ foo: '' }, { batchType: 'transparent' });
// @ts-expect-error
datacontroller.set({ foo: 5 });

const downcastDispA = new DowncastDispatcher({});
const downcastDispB = new DowncastDispatcher({});
const upcastDispaA = new UpcastDispatcher({});
const conversion = new Conversion([downcastDispA, downcastDispB], [upcastDispaA]);
conversion.addAlias('upcast', upcastDispaA);
let upcastHelper: UpcastHelpers = conversion.for('upcast');
upcastHelper = new UpcastHelpers([new UpcastDispatcher()]).add(() => {});
// @ts-expect-error
upcastHelper = new UpcastHelpers([new DowncastDispatcher()]);
upcastHelper = upcastHelper.add(dispatcher => {
    dispatcher.on('element:p', (evt, data, conversionApi) => {
        evt.name; // $ExpectType "element:p"
        data; // $ExpectType UpcastConversionData<Element & { name: "p"; }>
        conversionApi; // $ExpectType UpcastConversionApi
        const { modelCursor, modelRange, viewItem } = data;
        modelCursor; // $ExpectType Position
        modelRange; // $ExpectType Range
        viewItem; // $ExpectType Element & { name: "p"; }
    });
    dispatcher.on('element', (evt, data, conversionApi) => {
        evt.name; // $ExpectType "element"
        data; // $ExpectType UpcastConversionData<Element>
        conversionApi; // $ExpectType UpcastConversionApi
    });
    dispatcher.on('text', (evt, data, conversionApi) => {
        evt.name; // $ExpectType "text"
        data; // $ExpectType UpcastConversionData<Text>
        conversionApi; // $ExpectType UpcastConversionApi
    });
    dispatcher.on('documentFragment', (evt, data, conversionApi) => {
        evt.name; // $ExpectType "documentFragment"
        data; // $ExpectType UpcastConversionData<DocumentFragment>
        conversionApi; // $ExpectType UpcastConversionApi
    });
    dispatcher.on('element', convertToModelFragment());
    dispatcher.on('element:p', convertToModelFragment());
    dispatcher.on('documentFragment', convertToModelFragment());
    dispatcher.on('text', convertText());
    dispatcher.on('viewCleanup', (_evt, data): ViewDocumentFragment | ViewElement => {
        return data;
    });
});
upcastHelper.attributeToAttribute({
    view: 'foo',
    model: 'bar',
    converterPriority: 5,
});
upcastHelper.attributeToAttribute({
    view: 'foo',
    model: 'bar',
    converterPriority: 'low',
});
let downcastHelper: DowncastHelpers = conversion.for('downcast');
downcastHelper = conversion.for('dataDowncast');
downcastHelper = conversion.for('editingDowncast');
downcastHelper = downcastHelper.add(dispatcher => {
    dispatcher.on('insert:paragraph', (evt, data, { consumable, mapper, writer, dispatcher, schema }) => {
        evt.name; // $ExpectType "insert:paragraph"
        data; // $ExpectType { item: Element & { name: "paragraph"; }; range: Range; }
        schema; // $ExpectType Schema
        writer; // $ExpectType DowncastWriter<Document>
        dispatcher; // $ExpectType DowncastDispatcher<{}>
        mapper; // $ExpectType Mapper
        consumable; // ExpectType ModelConsumable

        const viewElement = mapper.toViewElement(data.item);
        if (viewElement) {
            writer.addClass('img-class', viewElement);
        }
    });
    dispatcher.on(
        'insert:myElem',
        insertElement((modelItem, { writer }) => {
            modelItem; // $ExpectType Element
            // ExpectType ViewText
            writer.createText('myText');
            return writer.createAttributeElement('myElem', { myAttr: 'my-' + modelItem.getAttribute('myAttr') });
        }),
    );
    dispatcher.on('insert:$text', (evt, data, conversionApi) => {
        evt.name; // $ExpectType "insert:$text"
        data; // $ExpectType { item: TextProxy; range: Range; }
        conversionApi; // $ExpectType DowncastConversionApi<{}>
    });
    dispatcher.on('insert:$text', insertText());
    dispatcher.on('insert', (evt, data, conversionApi) => {
        evt.name; // $ExpectType "insert"
        data; // $ExpectType { item: TextProxy | Element; range: Range; } || { item: Element | TextProxy; range: Range; }
        conversionApi; // $ExpectType DowncastConversionApi<{}>
    });
    dispatcher.on('attribute:bold', (evt, data, conversionApi) => {
        evt.name; // $ExpectType "attribute:bold"
        // $ExpectType { item: Element; range: Range; attributeKey: "bold"; attributeOldValue: any; attributeNewValue: any; }
        data;
        conversionApi; // $ExpectType DowncastConversionApi<{}>
    });
    dispatcher.on(
        'attribute:bold',
        wrap((modelAttributeValue, conversionApi) => {
            modelAttributeValue; // $ExpectType any
            conversionApi; // $ExpectType DowncastConversionApi<any>
            const { writer } = conversionApi;
            return writer.createAttributeElement('strong');
        }),
    );
    dispatcher.on('attribute:bold:$text', (evt, data, conversionApi) => {
        evt.name; // $ExpectType "attribute:bold:$text"
        // $ExpectType { item: DocumentSelection | TextProxy; range: Range; attributeKey: "bold"; attributeOldValue: any; attributeNewValue: any; }
        data;
        conversionApi; // $ExpectType DowncastConversionApi<{}>
    });
    dispatcher.on('attribute', (evt, data, conversionApi) => {
        evt.name; // $ExpectType "attribute"
        // $ExpectType { item: Element; range: Range; attributeKey: string; attributeOldValue: any; attributeNewValue: any; }
        data;
        conversionApi; // $ExpectType DowncastConversionApi<{}>
    });
    dispatcher.on('selection', (evt, data, conversionApi) => {
        evt.name; // $ExpectType "selection"
        data; // $ExpectType { selection: Selection; }
        conversionApi; // $ExpectType DowncastConversionApi<{}>
    });
    dispatcher.on('selection', clearAttributes());
    dispatcher.on('selection', convertRangeSelection());
    dispatcher.on('selection', convertCollapsedSelection());
    dispatcher.on('remove', (evt, data, conversionApi) => {
        evt.name; // $ExpectType "remove"
        data; // $ExpectType { position: Position; length: number; }
        conversionApi; // $ExpectType DowncastConversionApi<{}>
    });
    dispatcher.on('remove', remove());
    dispatcher.on('removeMarker:mention', (evt, data, conversionApi) => {
        evt.name; // $ExpectType "removeMarker:mention"
        data; // $ExpectType { markerName: "mention"; markerRange: Range; }
        conversionApi; // $ExpectType DowncastConversionApi<{}>
    });
    dispatcher.on('removeMarker', (evt, data, conversionApi) => {
        evt.name; // $ExpectType "removeMarker"
        data; // $ExpectType { markerName: string; markerRange: Range; }
        conversionApi; // $ExpectType DowncastConversionApi<{}>
    });
    dispatcher.on('addMarker:mention', (evt, data, conversionApi) => {
        evt.name; // $ExpectType "addMarker:mention"
        // $ExpectType { item?: Selection | undefined; range?: Range | undefined; markerName: "mention"; markerRange: Range; }
        data;
        conversionApi; // $ExpectType DowncastConversionApi<{}>
    });
    dispatcher.on(
        'addMarker:mention',
        insertUIElement((data, { writer }) => {
            const name = `${data.markerName}:${data.isOpening ? 'start' : 'end'}`;
            return writer.createUIElement(name);
        }),
    );
    dispatcher.on('addMarker', (evt, data, conversionApi) => {
        evt.name; // $ExpectType "addMarker"
        // $ExpectType { item?: Selection | undefined; range?: Range | undefined; markerName: string; markerRange: Range; }
        data;
        conversionApi; // $ExpectType DowncastConversionApi<{}>
    });
});
downcastHelper.attributeToAttribute({
    model: 'foo',
    view: 'bar',
    converterPriority: 5,
});
downcastHelper.attributeToAttribute({
    model: 'foo',
    view: 'bar',
    converterPriority: 'low',
});
downcastHelper.markerToElement({
    model: 'foo',
    view: 'bar',
    converterPriority: 5,
});
downcastHelper.markerToElement({
    model: 'foo',
    view: 'bar',
    converterPriority: 'low',
});
conversion.for('downcast').elementToElement({
    model: 'paragraph',
    view: 'p',
});

conversion.for('downcast').elementToElement({
    model: 'paragraph',
    view: 'div',
    converterPriority: 'high',
});

conversion.for('downcast').elementToElement({
    model: 'fancyParagraph',
    view: {
        name: 'p',
        classes: 'fancy',
    },
});

conversion.for('downcast').elementToElement({
    model: 'heading',
    view: (modelElement, conversionApi) => {
        const { writer } = conversionApi;

        return writer.createContainerElement('h' + modelElement.getAttribute('level'));
    },
});

const dataProcessor = new HtmlDataProcessor(viewDocument);
viewDocumentFragment = dataProcessor.toView('');
str = dataProcessor.toData(viewDocumentFragment);
dataProcessor.registerRawContentMatcher({ name: 'div', classes: 'raw' });

let insertOperation = new InsertOperation(
    new ModelPosition(model.document.createRoot(), [0]),
    new Writer().createText(''),
    model.document.version,
);
if (insertOperation.type === 'insert') {
}

// $ExpectType PositionStickiness
insertOperation.position.stickiness;
model.applyOperation(insertOperation);
insertOperation = insertOperation.clone();
insertOperation.nodes.getNode(9);
insertOperation.shouldReceiveAttributes = true;
insertOperation.toJSON().baseVersion;
insertOperation.toJSON().baseVersion;
InsertOperation.fromJSON(insertOperation.toJSON(), new ModelDocument());

// $ExpectType "detach"
new DetachOperation(new ModelPosition(model.document.createRoot(), [0]), 0).type;
// $ExpectType number
new DetachOperation(new ModelPosition(model.document.createRoot(), [0]), 0).toJSON().howMany;

let markerOperation = new MarkerOperation('name', nullvalue, range, model.markers, true, 0);
if (markerOperation.type === 'marker') {
}
model.applyOperation(markerOperation);
markerOperation = markerOperation.getReversed();

let attributeOperation = new AttributeOperation(range, '', true, false, 1);
attributeOperation = attributeOperation.clone();
attributeOperation = attributeOperation.getReversed();
// $ExpectType true
attributeOperation.oldValue;
const attributeOperation2 = new AttributeOperation(range, '', true, undefined, 1);
// $ExpectType null
attributeOperation2.newValue;
// $ExpectType null
attributeOperation2.toJSON().newValue;

let operation: Operation;

// @ts-expect-error
transformSets(insertOperation, insertOperation);
// @ts-expect-error
transformSets([insertOperation], insertOperation);
operation = transformSets([insertOperation], [insertOperation]).operationsA[0];
operation = transformSets([insertOperation], [insertOperation]).operationsB[0];
operation = transformSets([insertOperation], [insertOperation]).originalOperations.get(operation) as Operation;

const documentSelection: DocumentSelection = new DocumentSelection(model.document);
const result = documentSelection.getRanges().next();
if (!result.done) {
    range = result.value;
}
// $ExpectType Position | null
documentSelection.anchor;
// $ExpectType Position | null
documentSelection.focus;
bool = documentSelection.isBackward;
bool = documentSelection.hasOwnRange;
bool = documentSelection.isCollapsed;
const result2 = documentSelection.getAttributes().next();
if (!result2.done) {
    str = result2.value[0];
    bool = result2.value[1] as boolean;
    str = result2.value[1] as string;
}
// $ExpectType (Marker & { id: string; })[]
documentSelection.markers.map(marker => marker);
documentSelection.observeMarkers('foo');

range = range.clone();
let position: ModelPosition = range.start;
position = range.end;
let element: Element = range.root as Element;
bool = range.isCollapsed;
range = range.clone();
bool = range.isIntersecting(range);
bool = range.isEqual(range);
// $ExpectType TreeWalker
range.getWalker();
// $ExpectType TreeWalker
range.getWalker({ singleCharacters: true });
const result3 = range.getItems({ startPosition: position }).next();
range.getItems();
if (!result3.done) {
    const item: Item = result3.value;
    bool = range.containsItem(item);
}
const result4 = range.getPositions({ startPosition: position }).next();
if (!result4.done) {
    position = result4.value;
}
bool = range.containsPosition(position);
bool = range.containsRange(range);
range = range.getDifference(range)[0];
range = range.getIntersection(range) as Range;
range = range.getJoined(range) as Range;
range = range.getTransformedByOperation(insertOperation)[0];
range = range.getTransformedByOperations([insertOperation, markerOperation])[0];
range = range.getMinimalFlatRanges()[0];

let liveRange = new LiveRange(position);
liveRange = new LiveRange(position, position);
liveRange.detach();
range = liveRange;
liveRange = LiveRange.fromRange(range);
range = liveRange.toRange();

let livePosition = new LivePosition(root, [0]);
livePosition.detach();
bool = livePosition.is('foo');
livePosition = new LivePosition(model.document.createRoot(), [0]);
livePosition = LivePosition.fromPosition(position);
position = livePosition.toPosition();

model.change((writer: Writer) => {
    console.log(writer);
});
model.enqueueChange(new Batch(), () => {});
model.enqueueChange(new Batch({ isUndoable: true, isUndo: false }), (writer: Writer) => {
    console.log(writer);
});
model.enqueueChange((writer: Writer) => {
    console.log(writer);
});
model.insertContent(new DocumentFragment());
model.insertContent(new Writer().createText(''));
model.deleteContent(model.document.selection);
model.modifySelection(model.document.selection);
model.modifySelection(model.document.selection, { direction: 'backward' });
model.on('getSelectedContent', () => {});
new DocumentFragment();
// $ExpectType DocumentFragment
model.getSelectedContent(model.document.selection);
bool = model.hasContent(range);
// $ExpectType Position
model.createPositionFromPath(model.document.getRoot()!, [0]);
// $ExpectType Position
model.createPositionAfter(model.document.getRoot()!.getChild(0));
// $ExpectType Position
model.createPositionBefore(model.document.getRoot()!.getChild(0));
range = model.createRangeIn(model.document.getRoot()!.getChild(0) as Element);
range = model.createRangeOn(model.document.getRoot()!.getChild(0));
// $ExpectType Batch
model.createBatch();
// $ExpectType Batch
model.createBatch({ isUndo: false });
operation = model.createOperationFromJSON({
    __className: 'NoOperation',
    baseVersion: 0,
});
model.destroy();
model.listenTo(Object.create(EmitterMixin), 'event', () => {});

new TreeWalker({
    startPosition: position,
});
new TreeWalker({
    startPosition: position,
    boundaries: range,
    direction: 'forward',
    ignoreElementEnd: false,
    shallow: false,
    singleCharacters: false,
});
// $ExpectType { done: false; value: TreeWalkerValue; } | { done: true; value: undefined; }
new TreeWalker({
    startPosition: position,
}).next();
// $ExpectType void
new TreeWalker({
    startPosition: position,
}).skip((value: TreeWalkerValue) => !!value.length);
// $ExpectType TreeWalkerValue[]
Array.from(
    new TreeWalker({
        startPosition: position,
    }),
);

element = new Writer().createElement('div');
element = new Writer().createElement('div', { foo: 'bar' });
num = element.maxOffset;
num = element.childCount;
let node: Text | Element = element.getChild(num);
if ('data' in node) {
    str = node.data;
}
bool = element.is('foo', 'bar');
// $ExpectType [string, string | number | boolean][]
Array.from(element.getAttributes());
// $ExpectType (Element | Text)[]
Array.from(element.getChildren());
node = element.getNodeByPath([num]);
node = element.findAncestor('p')!;
num = element.getChildIndex(node);
num = element.getChildStartOffset(node);
num = element.offsetToIndex(num);

let domConverter = new DomConverter(viewDocument);
domConverter.setDomElementAttribute(document.body, 'foo', 'bar');
domConverter.setDomElementAttribute(document.body, 'foo', 'bar', viewElement);
domConverter.removeDomElementAttribute(document.body, 'foo');
// @ts-expect-error
domConverter.isComment;
// $ExpectType boolean
domConverter.shouldRenderAttribute('', '', '');
// @ts-expect-error
domConverter.shouldRenderAttribute('', 5);
domConverter.setContentOf(document.createElement('div'), '');
// @ts-expect-error
domConverter.setContentOf(document.createElement(''), 5);
let blockFillerMode: BlockFillerMode = 'nbsp';
const viewEditableElement = new DowncastWriter(new ViewDocument(new StylesProcessor())).createEditableElement('div');
domConverter = new DomConverter(viewDocument, { blockFillerMode });
blockFillerMode = domConverter.blockFillerMode;
domConverter.bindElements(document.createElement('div'), viewEditableElement);
domConverter.unbindDomElement(document.createElement('div'));
domConverter.focus(viewEditableElement);
// $ExpectType Node | null
domConverter.domToView(document.createElement('div'), { skipComments: true });
bool = domConverter.isElement(document.createElement('div'));

class MyObserver extends Observer {
    observe(_domElement: HTMLElement, _name?: string): void {
        throw new Error('Method not implemented.');
    }
}
const myObserver: Observer = new MyObserver(view);
viewDocument = myObserver.document;
bool = myObserver.isEnabled;
myObserver.enable();
myObserver.disable();
bool = myObserver.checkShouldIgnoreEventFromTarget(document.createElement('div'));

const clickObserver = new ClickObserver(view);
view.addObserver(ClickObserver);
clickObserver.domEventType === 'click';
clickObserver.onDomEvent(new MouseEvent('foo'));

const downcastWriter = new DowncastWriter(new Document(new StylesProcessor()));
downcastWriter.createPositionAt(downcastWriter.createEmptyElement('div'), 'after');
downcastWriter.createPositionAt(new Position(downcastWriter.createEmptyElement('div'), 5));
downcastWriter.createAttributeElement('fo');
downcastWriter.createAttributeElement('fo', { foo: 'bar' });
downcastWriter.createAttributeElement('fo', { foo: 'bar' }, { renderUnsafeAttributes: ['foo', 'bar'] });
downcastWriter.createEmptyElement('fo');
downcastWriter.createEmptyElement('fo', { foo: 'bar' });
downcastWriter.createEmptyElement('fo', { foo: 'bar' }, { renderUnsafeAttributes: ['foo', 'bar'] });
downcastWriter.createContainerElement('fo');
downcastWriter.createContainerElement('fo', { foo: 'bar' });
downcastWriter.createContainerElement('fo', { foo: 'bar' }, { renderUnsafeAttributes: ['foo', 'bar'] });

type ModelIsTypes =
    | DocumentFragment
    | DocumentSelection
    | Element
    | ModelPosition
    | LivePosition
    | Marker
    | Range
    | LiveRange
    | RootElement
    | Selection
    | Text
    | TextProxy;

const modelObj = null as unknown as ModelIsTypes;

if (modelObj.is('position') || modelObj.is('model:position')) {
    const obj: ModelPosition | LivePosition = modelObj;
}
if (modelObj.is('livePosition') || modelObj.is('model:livePosition')) {
    const obj: LivePosition = modelObj;
}
if (modelObj.is('range') || modelObj.is('model:range')) {
    const obj: Range | LiveRange = modelObj;
}
if (modelObj.is('liveRange') || modelObj.is('model:liveRange')) {
    const obj: LiveRange = modelObj;
}
if (modelObj.is('marker') || modelObj.is('model:marker')) {
    const obj: Marker = modelObj;
}
if (modelObj.is('$text') || modelObj.is('model:$text') || modelObj.is('text') || modelObj.is('model:text')) {
    const obj: Text = modelObj;
}
if (
    modelObj.is('$textProxy') ||
    modelObj.is('model:$textProxy') ||
    modelObj.is('textProxy') ||
    modelObj.is('model:textProxy')
) {
    const obj: TextProxy = modelObj;
}
if (
    modelObj.is('element') ||
    modelObj.is('model:element') ||
    modelObj.is('element', 'div') ||
    modelObj.is('model:element', 'div')
) {
    const obj: Element | RootElement = modelObj;
}
if (modelObj.is('element', 'div')) {
    const obj: (Element | RootElement) & { name: 'div' } = modelObj;
}
if (modelObj.is('model:element', 'div')) {
    const obj: (Element | RootElement) & { name: 'div' } = modelObj;
}
if (modelObj.is('element', 'div') || modelObj.is('element', 'span')) {
    const obj: Element | RootElement = modelObj;
}
if (modelObj.is('model:element', 'div') || modelObj.is('model:element', 'span')) {
    const obj: Element | RootElement = modelObj;
}
if (
    modelObj.is('rootElement') ||
    modelObj.is('model:rootElement') ||
    modelObj.is('rootElement', 'div') ||
    modelObj.is('model:rootElement', 'div')
) {
    const obj: RootElement = modelObj;
}
{
    const obj = modelObj as RootElement;
    if (obj.is('rootElement', 'paragraph')) {
        // $ExpectType RootElement & { name: "paragraph"; }
        obj;
    }
    if (obj.is('model:rootElement', 'paragraph')) {
        // $ExpectType RootElement & { name: "paragraph"; }
        obj;
    }
    if (obj.is('rootElement', 'paragraph') || obj.is('rootElement', 'blockQuote')) {
        // $ExpectType (RootElement & { name: "paragraph"; }) | (RootElement & { name: "blockQuote"; })
        obj;
    }
    if (obj.is('model:rootElement', 'paragraph') || obj.is('model:rootElement', 'blockQuote')) {
        // $ExpectType (RootElement & { name: "paragraph"; }) | (RootElement & { name: "blockQuote"; })
        obj;
    }
    // @ts-expect-error
    if (obj.is('rootElement') || obj.is('rootElement', 'paragraph')) 1;
    // @ts-expect-error
    if (obj.is('model:rootElement') || obj.is('model:rootElement', 'paragraph')) 1;
}
{
    const obj = modelObj as Element;
    if (obj.is('element', 'paragraph')) {
        // $ExpectType (RootElement | Element) & { name: "paragraph"; } || (Element | RootElement) & { name: "paragraph"; }
        obj;
    }
    if (obj.is('model:element', 'paragraph')) {
        // $ExpectType (RootElement | Element) & { name: "paragraph"; } || (Element | RootElement) & { name: "paragraph"; }
        obj;
    }
    if (obj.is('element', 'paragraph') || obj.is('element', 'blockQuote')) {
        // $ExpectType "paragraph" | "blockQuote"
        obj.name;
    }
    if (obj.is('model:element', 'paragraph') || obj.is('model:element', 'blockQuote')) {
        // $ExpectType "paragraph" | "blockQuote"
        obj.name;
    }
    // @ts-expect-error
    if (obj.is('element') || obj.is('element', 'paragraph')) 1;
    // @ts-expect-error
    if (obj.is('model:element') || obj.is('model:element', 'paragraph')) 1;
}

if (modelObj.is('selection') || modelObj.is('model:selection')) {
    const obj: Selection | DocumentSelection = modelObj;
}
if (modelObj.is('documentSelection') || modelObj.is('model:documentSelection')) {
    const obj: DocumentSelection = modelObj;
}
if (modelObj.is('node') || modelObj.is('model:node')) {
    const obj: Node | Element | Text | RootElement = modelObj;
}
if (modelObj.is('documentFragment') || modelObj.is('model:documentFragment')) {
    const obj: DocumentFragment = modelObj;
}

type ViewIsTypes =
    | ViewDocumentFragment
    | ViewDocumentSelection
    | ViewElement
    | ContainerElement
    | EditableElement
    | AttributeElement
    | UIElement
    | RawElement
    | EmptyElement
    | RootEditableElement
    | ViewRange
    | Position
    | ViewSelection
    | ViewText
    | ViewTextProxy;

const viewObj = null as unknown as ViewIsTypes;

if (viewObj.is('position') || viewObj.is('view:position')) {
    const obj: Position = viewObj;
}
if (viewObj.is('range') || viewObj.is('view:range')) {
    const obj: ViewRange = viewObj;
}
if (viewObj.is('documentFragment') || viewObj.is('view:documentFragment')) {
    const obj: ViewDocumentFragment = viewObj;
}
if (viewObj.is('selection') || viewObj.is('view:selection')) {
    const obj: ViewSelection | ViewDocumentSelection = viewObj;
}
if (viewObj.is('documentSelection') || viewObj.is('view:documentSelection')) {
    const obj: ViewDocumentSelection = viewObj;
}
if (
    viewObj.is('$textProxy') ||
    viewObj.is('view:$textProxy') ||
    viewObj.is('textProxy') ||
    viewObj.is('view:textProxy')
) {
    const obj: ViewTextProxy = viewObj;
}
if (viewObj.is('node') || viewObj.is('view:node')) {
    const obj:
        | ViewNode
        | ViewElement
        | ViewText
        | ContainerElement
        | EditableElement
        | RootEditableElement
        | AttributeElement
        | UIElement
        | RawElement
        | EmptyElement = viewObj;
}
if (viewObj.is('$text') || viewObj.is('view:$text') || viewObj.is('text') || viewObj.is('view:text')) {
    const obj: ViewText = viewObj;
}
if (
    viewObj.is('element') ||
    viewObj.is('view:element') ||
    viewObj.is('element', 'div') ||
    viewObj.is('view:element', 'div')
) {
    const obj:
        | ViewElement
        | ContainerElement
        | EditableElement
        | AttributeElement
        | UIElement
        | RawElement
        | EmptyElement
        | RootEditableElement = viewObj;
}

{
    const obj = viewObj as ViewElement;
    if (obj.is('element', 'p') || obj.is('element', 'div')) {
        // $ExpectType (Element & { name: "div"; }) | (Element & { name: "p"; }) || (EmptyElement & { name: "p"; }) | (EmptyElement & { name: "div"; })
        obj;
    }
    if (obj.is('view:element', 'p') || obj.is('view:element', 'div')) {
        // $ExpectType (Element & { name: "div"; }) | (Element & { name: "p"; }) || (EmptyElement & { name: "p"; }) | (EmptyElement & { name: "div"; })
        obj;
    }
    if (obj.is('element', 'p')) {
        // $ExpectType "p"
        obj.name;
    }
    if (obj.is('view:element', 'p')) {
        // $ExpectType "p"
        obj.name;
    }
    // @ts-expect-error
    if (obj.is('element') || obj.is('element', 'p')) 1;
    // @ts-expect-error
    if (obj.is('view:element') || obj.is('view:element', 'p')) 1;
}

if (
    viewObj.is('containerElement') ||
    viewObj.is('view:containerElement') ||
    viewObj.is('containerElement', 'div') ||
    viewObj.is('view:containerElement', 'div')
) {
    const obj: ContainerElement | EditableElement | RootEditableElement = viewObj;
}

{
    const obj = viewObj as ContainerElement;
    if (obj.is('containerElement', 'p') || obj.is('containerElement', 'div')) {
        // $ExpectType (ContainerElement & { name: "div"; }) | (ContainerElement & { name: "p"; }) || (ContainerElement & { name: "p"; }) | (ContainerElement & { name: "div"; })
        obj;
    }
    if (obj.is('view:containerElement', 'p') || obj.is('view:containerElement', 'div')) {
        // $ExpectType (ContainerElement & { name: "div"; }) | (ContainerElement & { name: "p"; }) || (ContainerElement & { name: "p"; }) | (ContainerElement & { name: "div"; })
        obj;
    }
    if (obj.is('containerElement', 'p')) {
        // $ExpectType "p"
        obj.name;
    }
    if (obj.is('view:containerElement', 'p')) {
        // $ExpectType "p"
        obj.name;
    }
    // @ts-expect-error
    if (obj.is('containerElement') || obj.is('containerElement', 'p')) 1;
    // @ts-expect-error
    if (obj.is('view:containerElement') || obj.is('view:containerElement', 'p')) 1;
}

if (
    viewObj.is('editableElement') ||
    viewObj.is('view:editableElement') ||
    viewObj.is('editableElement', 'div') ||
    viewObj.is('view:editableElement', 'div')
) {
    const obj: EditableElement | RootEditableElement = viewObj;
}
{
    const obj = viewObj as EditableElement;
    if (obj.is('editableElement', 'p') || obj.is('editableElement', 'div')) {
        // $ExpectType (EditableElement & { name: "div"; }) | (EditableElement & { name: "p"; }) || (EditableElement & { name: "p"; }) | (EditableElement & { name: "div"; })
        obj;
    }
    if (obj.is('view:editableElement', 'p') || obj.is('view:editableElement', 'div')) {
        // $ExpectType (EditableElement & { name: "div"; }) | (EditableElement & { name: "p"; }) || (EditableElement & { name: "p"; }) | (EditableElement & { name: "div"; })
        obj;
    }
    if (obj.is('editableElement', 'p')) {
        // $ExpectType "p"
        obj.name;
    }
    if (obj.is('view:editableElement', 'p')) {
        // $ExpectType "p"
        obj.name;
    }
    // @ts-expect-error
    if (obj.is('editableElement') || obj.is('editableElement', 'p')) 1;
    // @ts-expect-error
    if (obj.is('view:editableElement') || obj.is('view:editableElement', 'p')) 1;
}

if (
    viewObj.is('rootEditableElement') ||
    viewObj.is('view:rootEditableElement') ||
    viewObj.is('rootEditableElement', 'div') ||
    viewObj.is('view:rootEditableElement', 'div')
) {
    const obj: RootEditableElement = viewObj;
}
{
    const obj = viewObj as RootEditableElement;
    if (obj.is('rootEditableElement', 'p') || obj.is('rootEditableElement', 'div')) {
        // $ExpectType (RootEditableElement & { name: "div"; }) | (RootEditableElement & { name: "p"; }) || (RootEditableElement & { name: "p"; }) | (RootEditableElement & { name: "div"; })
        obj;
    }
    if (obj.is('view:rootEditableElement', 'p') || obj.is('view:rootEditableElement', 'div')) {
        // $ExpectType (RootEditableElement & { name: "div"; }) | (RootEditableElement & { name: "p"; }) || (RootEditableElement & { name: "p"; }) | (RootEditableElement & { name: "div"; })
        obj;
    }
    if (obj.is('rootEditableElement', 'p')) {
        // $ExpectType RootEditableElement & { name: "p"; }
        obj;
    }
    if (obj.is('view:rootEditableElement', 'p')) {
        // $ExpectType RootEditableElement & { name: "p"; }
        obj;
    }
    // @ts-expect-error
    if (obj.is('rootEditableElement') || obj.is('rootEditableElement', 'p')) 1;
    // @ts-expect-error
    if (obj.is('view:rootEditableElement') || obj.is('view:rootEditableElement', 'p')) 1;
}
if (
    viewObj.is('rawElement') ||
    viewObj.is('view:rawElement') ||
    viewObj.is('rawElement', 'div') ||
    viewObj.is('view:rawElement', 'div')
) {
    const obj: RawElement = viewObj;
}
{
    const obj = viewObj as RawElement;
    if (obj.is('rawElement', 'p') || obj.is('rawElement', 'div')) {
        // $ExpectType (RawElement & { name: "div"; }) | (RawElement & { name: "p"; }) || (RawElement & { name: "p"; }) | (RawElement & { name: "div"; })
        obj;
    }
    if (obj.is('view:rawElement', 'p') || obj.is('view:rawElement', 'div')) {
        // $ExpectType (RawElement & { name: "div"; }) | (RawElement & { name: "p"; }) || (RawElement & { name: "p"; }) | (RawElement & { name: "div"; })
        obj;
    }
    if (obj.is('rawElement', 'p')) {
        // $ExpectType RawElement & { name: "p"; }
        obj;
    }
    if (obj.is('view:rawElement', 'p')) {
        // $ExpectType RawElement & { name: "p"; }
        obj;
    }
    // @ts-expect-error
    if (obj.is('rawElement') || obj.is('rawElement', 'p')) 1;
    // @ts-expect-error
    if (obj.is('view:rawElement') || obj.is('view:rawElement', 'p')) 1;
}

if (
    viewObj.is('attributeElement') ||
    viewObj.is('view:attributeElement') ||
    viewObj.is('attributeElement', 'div') ||
    viewObj.is('view:attributeElement', 'div')
) {
    const obj: AttributeElement = viewObj;
}
{
    const obj = viewObj as AttributeElement;
    if (obj.is('attributeElement', 'p') || obj.is('attributeElement', 'div')) {
        // $ExpectType (AttributeElement & { name: "div"; }) | (AttributeElement & { name: "p"; }) || (AttributeElement & { name: "p"; }) | (AttributeElement & { name: "div"; })
        obj;
    }
    if (obj.is('view:attributeElement', 'p') || obj.is('view:attributeElement', 'div')) {
        // $ExpectType (AttributeElement & { name: "div"; }) | (AttributeElement & { name: "p"; }) || (AttributeElement & { name: "p"; }) | (AttributeElement & { name: "div"; })
        obj;
    }
    if (obj.is('attributeElement', 'p')) {
        // $ExpectType AttributeElement & { name: "p"; }
        obj;
    }
    if (obj.is('view:attributeElement', 'p')) {
        // $ExpectType AttributeElement & { name: "p"; }
        obj;
    }
    // @ts-expect-error
    if (obj.is('attributeElement') || obj.is('attributeElement', 'p')) 1;
    // @ts-expect-error
    if (obj.is('view:attributeElement') || obj.is('view:attributeElement', 'p')) 1;
}

if (
    viewObj.is('uiElement') ||
    viewObj.is('view:uiElement') ||
    viewObj.is('uiElement', 'div') ||
    viewObj.is('view:uiElement', 'div')
) {
    const obj: UIElement = viewObj;
}
{
    const obj = viewObj as UIElement;
    if (obj.is('uiElement', 'p') || obj.is('uiElement', 'div')) {
        // $ExpectType (UIElement & { name: "div"; }) | (UIElement & { name: "p"; }) || (UIElement & { name: "p"; }) | (UIElement & { name: "div"; })
        obj;
    }
    if (obj.is('view:uiElement', 'p') || obj.is('view:uiElement', 'div')) {
        // $ExpectType (UIElement & { name: "div"; }) | (UIElement & { name: "p"; }) || (UIElement & { name: "p"; }) | (UIElement & { name: "div"; })
        obj;
    }
    if (obj.is('uiElement', 'p')) {
        // $ExpectType UIElement & { name: "p"; }
        obj;
    }
    if (obj.is('view:uiElement', 'p')) {
        // $ExpectType UIElement & { name: "p"; }
        obj;
    }
    // @ts-expect-error
    if (obj.is('uiElement') || obj.is('uiElement', 'p')) 1;
    // @ts-expect-error
    if (obj.is('view:uiElement') || obj.is('view:uiElement', 'p')) 1;
}

if (
    viewObj.is('emptyElement') ||
    viewObj.is('view:emptyElement') ||
    viewObj.is('emptyElement', 'div') ||
    viewObj.is('view:emptyElement', 'div')
) {
    const obj: EmptyElement = viewObj;
}
{
    const obj = viewObj as EmptyElement;
    if (obj.is('emptyElement', 'hr') || obj.is('emptyElement', 'img')) {
        // $ExpectType (EmptyElement & { name: "hr"; }) | (EmptyElement & { name: "img"; })
        obj;
    }
    if (obj.is('view:emptyElement', 'hr') || obj.is('view:emptyElement', 'img')) {
        // $ExpectType (EmptyElement & { name: "hr"; }) | (EmptyElement & { name: "img"; })
        obj;
    }
    if (obj.is('emptyElement', 'hr')) {
        // $ExpectType EmptyElement & { name: "hr"; }
        obj;
    }
    if (obj.is('view:emptyElement', 'hr')) {
        // $ExpectType EmptyElement & { name: "hr"; }
        obj;
    }
    // @ts-expect-error
    if (obj.is('emptyElement') || obj.is('emptyElement', 'hr')) 1;
    // @ts-expect-error
    if (obj.is('view:emptyElement') || obj.is('view:emptyElement', 'hr')) 1;
}

// Selectable
new Writer().setSelection(null);

// MatcherPattern
pattern = 'div';
pattern = /foo/;
pattern = { name: 'p' };
pattern = { name: /^(ul|ol)$/ };
pattern = {
    attributes: {
        title: true,
    },
};
pattern = {
    name: 'p',
    attributes: true,
};
pattern = {
    name: 'figure',
    attributes: 'title',
};
pattern = {
    name: 'figure',
    attributes: /^data-.*$/,
};

pattern = {
    name: 'figure',
    attributes: {
        title: 'foobar',
        alt: true,
        'data-type': /^(jpg|png)$/,
    },
};
pattern = {
    name: 'figure',
    attributes: ['title', /^data-*$/],
};

pattern = {
    name: 'input',
    attributes: [
        {
            key: 'type',
            value: /^(text|number|date)$/,
        },
        {
            key: /^data-.*$/,
            value: true,
        },
    ],
};

pattern = {
    name: 'p',
    styles: true,
};

pattern = {
    name: 'p',
    styles: 'color',
};

pattern = {
    name: 'p',
    styles: /^border.*$/,
};

pattern = {
    name: 'p',
    attributes: {
        color: /rgb\((\d{1,3}), (\d{1,3}), (\d{1,3})\)/,
        'font-weight': 600,
        'text-decoration': true,
    },
};

pattern = {
    name: 'p',
    attributes: ['color', /^border.*$/],
};

pattern = {
    name: 'p',
    attributes: [
        {
            key: 'color',
            value: /rgb\((\d{1,3}), (\d{1,3}), (\d{1,3})\)/,
        },
        {
            key: /^border.*$/,
            value: true,
        },
    ],
};

pattern = {
    name: 'p',
    classes: true,
};

pattern = {
    name: 'p',
    classes: 'highlighted',
};

pattern = {
    name: 'figure',
    classes: /^image-side-(left|right)$/,
};

pattern = {
    name: 'p',
    classes: {
        highlighted: true,
        marker: true,
    },
};

pattern = {
    name: 'figure',
    classes: ['image', /^image-side-(left|right)$/],
};

pattern = {
    name: 'figure',
    classes: [
        {
            key: 'image',
            value: true,
        },
        {
            key: /^image-side-(left|right)$/,
            value: true,
        },
    ],
};

pattern = {
    name: 'span',
    attributes: ['title'],
    styles: {
        'font-weight': 'bold',
    },
    classes: 'highlighted',
};

new Matcher(pattern).add(pattern);
new Matcher(pattern, pattern).add(pattern, pattern);

// $ExpectType boolean
startsWithFiller(document.createElement('div'));
// $ExpectType boolean
isInlineFiller(document.createTextNode(''));
// $ExpectType string
getDataWithoutFiller(document.createTextNode(''));

// $ExpectType string[]
new ViewElement(new ViewDocument(new StylesProcessor()), 'div').getStyleNames();
// $ExpectType string[]
new ViewElement(new ViewDocument(new StylesProcessor()), 'div').getStyleNames(true);

// $ExpectType boolean
new MarkerCollection().has('');
// $ExpectType boolean
new MarkerCollection().has(
    new Marker('', new LiveRange(new ModelPosition(model.document.createRoot(), [0])), true, true),
);

// @ts-expect-error
downcastWriter.createRawElement();
// prettier-ignore
downcastWriter.createRawElement('div').render = function(domElement: HTMLElement, domConverter: DomConverter) {
    domConverter.setContentOf(domElement, '<b>This is the raw content of myRawElement.</b>');
    // $ExpectType DowncastWriter<Document>
    this;
};
// prettier-ignore
downcastWriter.createRawElement('div', { id: 'foo' }, function(domElement, domConverter) {
    domConverter.setContentOf(domElement, '<b>This is the raw content of myRawElement.</b>');
    // $ExpectType DowncastWriter<Document>
    this;
});

stylesProcessor.setReducer('margin', margin => {
    return [['margin', `${margin.top} ${margin.right} ${margin.bottom} ${margin.left}`]];
});

// $ExpectType string | undefined
getBoxSidesValues().top;
// $ExpectType undefined
getBoxSidesValues('').top;

class MyOperation extends Operation {
    toJSON() {
        return { __className: '', baseVersion: 0 };
    }
    type: 'foo';
}
new Batch().addOperation(new MyOperation(1));

injectSelectionPostFixer(model);
// $ExpectType Range[]
mergeIntersectingRanges([range]);

class MyViewNode extends ViewNode {}
// @ts-expect-error
new DomConverter(viewDocument).viewToDom(new MyViewNode());
new DomConverter(viewDocument).viewToDom(new MyViewNode(), window.document);

// $ExpectType string | number | boolean | undefined
new Element('div').getAttribute('');

// $ExpectType void
new History().addOperation(operation);
// $ExpectType Operation[]
new History().getOperations();
// $ExpectType Operation[]
new History().getOperations(0, 1);
// $ExpectType Operation | undefined
new History().getOperation(4);
// $ExpectType void
new History().setOperationAsUndone(new History().getOperations(0, 1)[0], new History().getOperations(0, 1)[1]);
// $ExpectType boolean
new History().isUndoingOperation(new History().getOperations(0, 1)[0]);
// $ExpectType boolean
new History().isUndoneOperation(new History().getOperations(0, 1)[0]);
// $ExpectType Operation | undefined
new History().getUndoneOperation(new History().getOperations(0, 1)[0]);

new DowncastDispatcher({}).convertSelection(new Selection(), new MarkerCollection(), downcastWriter);
new DowncastDispatcher({}).convertSelection(model.document.selection, new MarkerCollection(), downcastWriter);

convertSelectionChange(new Model(), new Mapper());

new Model().createSelection();
new Model().createSelection(range);
new Model().createSelection([range]);
new Model().createSelection(new Model().createSelection());
new Model().createSelection(model.document.selection);
new Model().createSelection(position);
new Model().createSelection(element);
new Model().createSelection(element, 5);
new Model().createSelection(element, 'on');
new Model().createSelection(range, { backward: true });
new Model().createSelection(range, 5, { backward: true });

new Selection().isEqual(new Selection());
new Selection().isEqual(model.document.selection);

new RootEditableElement(new ViewDocument(new StylesProcessor()), '').rootName = '';

new DomConverter(viewDocument).blockFillerMode = 'markedNbsp';

// $ExpectType string | number | boolean | undefined
new Element('div').getAttribute('');

// $ExpectType void
deleteContent(model, new Selection());
// $ExpectType void
deleteContent(model, new Selection(), { leaveUnmerged: true });
// $ExpectType void
deleteContent(model, new Selection(), { doNotAutoparagraph: true, leaveUnmerged: true });
// $ExpectType void
deleteContent(model, new Selection(), { doNotResetEntireContent: true, doNotAutoparagraph: true, leaveUnmerged: true });
// $ExpectType Range
insertContent(model, new DocumentFragment(), new Selection());
// $ExpectType Range
insertContent(model, new Element('div'), new Selection());
// $ExpectType Range
insertContent(model, new Element('div'));
// $ExpectType Range
insertContent(model, new Element('div'), range);
// $ExpectType Range
insertContent(model, new Element('div'), range, 0);
// $ExpectType Range
insertContent(model, new Element('div'), range, 'on');
// $ExpectType DocumentFragment
getSelectedContent(model, new Selection());
// $ExpectType DocumentFragment
getSelectedContent(model, new DocumentSelection(new ModelDocument()));
// $ExpectType void
modifySelection(model, model.document.selection);
// $ExpectType void
modifySelection(model, model.document.selection, { direction: 'backward' });

new Writer().createPositionAt(new DocumentFragment());

const viewPosition = new Position(downcastWriter.createEmptyElement('div'), 5);
new BubblingEventInfo(viewDocument, '', new ViewRange(viewPosition));
// $ExpectType Range
new BubblingEventInfo(viewDocument, '', new ViewRange(viewPosition)).startRange;
// $ExpectType "none" | "capturing" | "atTarget" | "bubbling"
new BubblingEventInfo(viewDocument, '', new ViewRange(viewPosition)).eventPhase;
// $ExpectType Document | Node | null
new BubblingEventInfo(viewDocument, '', new ViewRange(viewPosition)).currentTarget;

viewDocument.isFocused = true;

new Mapper().on('foo', () => {});
// $ExpectType void
new Mapper().bindElements(new Element('div'), new ViewElement(viewDocument, 'div'));
// $ExpectType void
new Mapper().unbindViewElement(new ViewElement(viewDocument, 'div'));
// $ExpectType void
new Mapper().unbindModelElement(new Element('div'));
// $ExpectType void
new Mapper().bindElementToMarker(new ViewElement(viewDocument, 'div'), 'div');
// $ExpectType void
new Mapper().unbindElementFromMarkerName(new ViewElement(viewDocument, 'div'), 'div');
// $ExpectType string[]
new Mapper().flushUnboundMarkerNames();
// $ExpectType number
new Mapper().getModelLength(new ViewElement(viewDocument, 'div'));
// $ExpectType void
new Mapper().clearBindings();
// $ExpectType Element | undefined
new Mapper().toModelElement(new ViewElement(viewDocument, 'div'));
// $ExpectType Element
new Mapper().toViewElement(new Element('div'));
// $ExpectType Range
new Mapper().toModelRange(new ViewRange(new Position(new ViewElement(viewDocument, 'div'), 5)));
// $ExpectType Range
new Mapper().toViewRange(new Range(position));
// $ExpectType Position
new Mapper().toModelPosition(new Position(new ViewElement(viewDocument, 'div'), 5));
// $ExpectType Position
new Mapper().toViewPosition(new Mapper().toModelPosition(new Position(new ViewElement(viewDocument, 'div'), 5)));
// $ExpectType Set<Element> | null
new Mapper().markerNameToElements('');
// $ExpectType void
new Mapper().registerViewToModelLength('', (el: ViewElement) => el.childCount);
// $ExpectType Element
new Mapper().findMappedViewAncestor(
    new Mapper().toViewPosition(new Mapper().toModelPosition(new Position(new ViewElement(viewDocument, 'div'), 5))),
);
// $ExpectType Position
new Mapper().findPositionIn(viewElement, 5);

new DomEventData(view, new DragEvent('dragstart'));
new DomEventData(view, new DragEvent('dragstart'), { dataTransfer: new DataTransfer() });

// $ExpectType MutationObserver
view.getObserver(MutationObserver);
new MutationObserver(view).flush();

// $ExpectType ArrowKeysObserver
view.getObserver(ArrowKeysObserver);
new ArrowKeysObserver(view).observe();

// $ExpectType FakeSelectionObserver
view.getObserver(FakeSelectionObserver);
new FakeSelectionObserver(view).destroy();

// $ExpectType SelectionObserver
view.getObserver(SelectionObserver);
new SelectionObserver(view).destroy();
new SelectionObserver(view).observe(document.body);

// $ExpectType MouseObserver
view.getObserver(MouseObserver);
new MouseObserver(view).destroy();
new MouseObserver(view).observe(document.body);
new MouseObserver(view).onDomEvent(new MouseEvent(''));
// @ts-expect-error
new MouseObserver(view).onDomEvent(new KeyboardEvent(''));

// $ExpectType FocusObserver
view.getObserver(FocusObserver);
new FocusObserver(view).destroy();
new FocusObserver(view).observe(document.body);
new FocusObserver(view).onDomEvent(new FocusEvent(''));
// @ts-expect-error
new FocusObserver(view).onDomEvent(new KeyboardEvent(''));

// $ExpectType KeyObserver
view.getObserver(KeyObserver);
new KeyObserver(view).destroy();
new KeyObserver(view).observe(document.body);
new KeyObserver(view).onDomEvent(new KeyboardEvent(''));
// @ts-expect-error
new KeyObserver(view).onDomEvent(new FocusEvent(''));

// $ExpectType ClickObserver
view.getObserver(ClickObserver);
new ClickObserver(view).destroy();
new ClickObserver(view).observe(document.body);
new ClickObserver(view).onDomEvent(new MouseEvent(''));
// @ts-expect-error
new ClickObserver(view).onDomEvent(new FocusEvent(''));

// $ExpectType InputObserver
view.getObserver(InputObserver);
new InputObserver(view).destroy();
new InputObserver(view).observe(document.body);
new InputObserver(view).onDomEvent(new InputEvent(''));
// @ts-expect-error
new InputObserver(view).onDomEvent(new FocusEvent(''));

class MyClickObserver extends DomEventObserver {
    readonly domEventType: 'click';

    onDomEvent(domEvent: MouseEvent) {
        this.fire('click', domEvent, { button: 1 });
        // @ts-expect-error
        this.fire('click', domEvent, { button: true });
    }

    expectError(domEvent: KeyboardEvent) {
        // @ts-expect-error
        this.fire('click', domEvent);
    }
}

new DomEventData(view, new DragEvent(''));
new DomEventData(view, new DragEvent(''), { dataTransfer: null });
// @ts-expect-error
new DomEventData(view, new KeyboardEvent(''), { button: 1 });

// $ExpectType void
addBackgroundRules(new StylesProcessor());
// $ExpectType void
addBorderRules(new StylesProcessor());
// $ExpectType void
addMarginRules(new StylesProcessor());
// $ExpectType void
addPaddingRules(new StylesProcessor());

// $ExpectType boolean
isColor('');
// $ExpectType boolean
isLineStyle('');
// $ExpectType boolean
isLength('');
// $ExpectType boolean
isPercentage('');
// $ExpectType boolean
isRepeat('');
// $ExpectType boolean
isPosition('');
// $ExpectType boolean
isAttachment('');
// $ExpectType boolean
isURL('');

// $ExpectType void
stylesProcessor.setReducer('padding', getBoxSidesValueReducer('padding'));
stylesProcessor.setReducer('foo', getBoxSidesValueReducer('foo'));
stylesProcessor.setReducer('margin', margin => {
    return [['margin', `${margin.top} ${margin.right} ${margin.bottom} ${margin.left}`]];
});

// $ExpectType string
getBoxSidesShorthandValue({ top: '', right: '', bottom: '', left: '' });

// $ExpectType void
stylesProcessor.setNormalizer('foo', value => ({
    path: 'foo',
    value: { top: value, right: value, bottom: value, left: value },
}));
stylesProcessor.setNormalizer('foo-top', value => ({
    path: 'foo.top',
    value,
}));
stylesProcessor.setNormalizer('margin', getPositionShorthandNormalizer('margin'));

// $ExpectType string[]
getShorthandValues('');

const myUIElement = downcastWriter.createUIElement('span');
myUIElement.render = function render(domDocument, domConverter) {
    const domElement = this.toDomElement(domDocument);

    domConverter.setContentOf(domElement, '<b>this is ui element</b>');

    return domElement;
};

downcastWriter.createUIElement('span', null, function callback(domDocument) {
    const domElement = this.toDomElement(domDocument);
    domElement.innerHTML = '<b>this is ui element</b>';

    return domElement;
});

new Schema().on('foo', (ev, ...args) => {
    // $ExpectType EventInfo<Schema, "foo">
    ev;
    // $ExpectType any[]
    args;
});

new Schema().set('foo');

new XmlDataProcessor(viewDocument);
new XmlDataProcessor(viewDocument, { namespaces: [''] });
// $ExpectType string
new XmlDataProcessor(viewDocument).toData(viewDocumentFragment);
// $ExpectType DocumentFragment
new XmlDataProcessor(viewDocument).toView("");
new XmlDataProcessor(viewDocument).useFillerType("default");
new XmlDataProcessor(viewDocument).registerRawContentMatcher(pattern);
