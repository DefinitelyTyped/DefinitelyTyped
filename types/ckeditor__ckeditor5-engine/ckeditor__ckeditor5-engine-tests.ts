import {
    Conversion,
    DataController,
    disablePlaceholder,
    DocumentSelection,
    DowncastWriter,
    EditingController,
    enablePlaceholder,
    hidePlaceholder,
    HtmlDataProcessor,
    InsertOperation,
    LivePosition,
    LiveRange,
    MarkerOperation,
    Model,
    needsPlaceholder,
    Range,
    showPlaceholder,
    StylesProcessor,
    transformSets,
    TreeWalker,
    ViewDocument,
    Element,
    DomConverter,
    Observer,
    ClickObserver,
    DomEventObserver,
} from "@ckeditor/ckeditor5-engine";

import ConversionHelpers from "@ckeditor/ckeditor5-engine/src/conversion/conversionhelpers";
import DowncastDispatcher from "@ckeditor/ckeditor5-engine/src/conversion/downcastdispatcher";
import UpcastDispatcher from "@ckeditor/ckeditor5-engine/src/conversion/upcastdispatcher";
import DocumentFragment from "@ckeditor/ckeditor5-engine/src/model/documentfragment";
import Operation from "@ckeditor/ckeditor5-engine/src/model/operation/operation";
import ModelPosition, { PositionStickiness } from "@ckeditor/ckeditor5-engine/src/model/position";
import Text from "@ckeditor/ckeditor5-engine/src/model/text";
import ViewDocumentFragment from "@ckeditor/ckeditor5-engine/src/view/documentfragment";
import ViewElement from "@ckeditor/ckeditor5-engine/src/view/element";
import { ElementDefinition } from "@ckeditor/ckeditor5-engine/src/view/elementdefinition";
import { MatcherPattern } from "@ckeditor/ckeditor5-engine/src/view/matcher";
import Position from "@ckeditor/ckeditor5-engine/src/view/position";
import View from "@ckeditor/ckeditor5-engine/src/view/view";
import { EmitterMixin } from "@ckeditor/ckeditor5-utils";
import Batch from "@ckeditor/ckeditor5-engine/src/model/batch";
import { Item } from "@ckeditor/ckeditor5-engine/src/model/item";
import { Marker } from "@ckeditor/ckeditor5-engine/src/model/markercollection";
import Node from "@ckeditor/ckeditor5-engine/src/model/node";
import Selection from "@ckeditor/ckeditor5-engine/src/model/selection";
import Writer from "@ckeditor/ckeditor5-engine/src/model/writer";
import { getFillerOffset } from "@ckeditor/ckeditor5-engine/src/view/containerelement";
import EditableElement from "@ckeditor/ckeditor5-engine/src/view/editableelement";
import { BlockFillerMode } from "@ckeditor/ckeditor5-engine/src/view/filler";
import RootEditableElement from "@ckeditor/ckeditor5-engine/src/view/rooteditableelement";

let str = "";
let viewDocumentFragment = new ViewDocumentFragment();
let pattern: MatcherPattern = { name: /^p/ };

let num: number = getFillerOffset()!;
const nullvalue: null = getFillerOffset() as null;

pattern = {
    attributes: {
        title: "foobar",
        foo: /^\w+/,
        bar: true,
    },
};

pattern = {
    classes: "foobar",
};

pattern = {
    classes: /foo.../,
};

pattern = {
    classes: ["baz", "bar", /foo.../],
};

pattern = {
    styles: {
        position: "absolute",
        color: /^\w*blue$/,
    },
};

pattern = {
    name: "span",
    styles: {
        "font-weight": "bold",
    },
    classes: "highlighted",
};

pattern = (element: ViewElement) => {
    if (element.name === "div" && element.childCount > 0) {
        return { name: true };
    }

    return nullvalue;
};

pattern = (element: ViewElement) => {
    if (element.name === "p") {
        const fontSize = element.getStyle("font-size")!;
        const size = fontSize.match(/(\d+)/px);

        if (size && Number(size[1]) > 26) {
            return { name: true, attribute: ["font-size"] };
        }
    }

    return nullvalue;
};

let viewDefinition: ElementDefinition = "p";

viewDefinition = {
    name: "h1",
    classes: ["foo", "bar"],
};

viewDefinition = {
    name: "span",
    styles: {
        "font-size": "12px",
        "font-weight": "bold",
    },
    attributes: {
        "data-id": "123",
    },
};

let model: Model = new Model();
model.change(writer => {
    writer.insertText("foo", model.document.selection.getFirstPosition());
});

model.document.createRoot();
model.schema.register("paragraph", { inheritAllFrom: "$block" });

const view: View = new View(new StylesProcessor());
view.change(writer => {
    writer.insert(new Position(viewDocumentFragment, 4), writer.createText("foo"));
});

class MyElement extends ViewElement {
    toJSON() {
        return { document: "" };
    }
}

const viewElement = new MyElement();

let stylesProcessor = new StylesProcessor();
let viewDocument = new ViewDocument(stylesProcessor);
let bool: boolean = viewDocument.isReadOnly;
num = viewDocument.roots.length;
let rootEditableElement: RootEditableElement = viewDocument.roots.get("main")!;
rootEditableElement = viewDocument.getRoot()!;

enablePlaceholder({
    view,
    element: new MyElement(),
    text: "foo",
});
enablePlaceholder({
    view,
    element: viewElement,
    text: "foo",
    isDirectHost: true,
    keepOnFocus: true,
});
disablePlaceholder(view, viewElement);
showPlaceholder(new DowncastWriter(viewDocument), viewElement);
hidePlaceholder(new DowncastWriter(viewDocument), viewElement);
bool = needsPlaceholder(viewElement, bool);

const editingcontroller: EditingController = new EditingController(model, stylesProcessor);
editingcontroller.destroy();
editingcontroller.set("foo", "bar");
editingcontroller.once("foo", () => {});
editingcontroller.downcastDispatcher.on("insert:$element", () => {});

const datacontroller: DataController = new DataController(model, stylesProcessor);
model = datacontroller.model;
stylesProcessor = datacontroller.stylesProcessor;
let modeldocfrag: DocumentFragment = datacontroller.parse(str);
modeldocfrag = datacontroller.parse("foo", ["$block"]);
datacontroller.toModel(viewElement);
datacontroller.toModel(viewDocumentFragment);
datacontroller.toModel(viewDocumentFragment, ["inlineRoot"]);
datacontroller.init("").then(() => {});

const downcastDispA = new DowncastDispatcher({});
const downcastDispB = new DowncastDispatcher({});
const upcastDispaA = new UpcastDispatcher({});
const conversion = new Conversion([downcastDispA, downcastDispB], [upcastDispaA]);
conversion.addAlias("upcast", upcastDispaA);
let helper: ConversionHelpers = conversion.for("upcast");
helper = helper.add(() => {});

const dataProcessor = new HtmlDataProcessor(viewDocument);
viewDocumentFragment = dataProcessor.toView("") as ViewDocumentFragment;
str = dataProcessor.toData(viewDocumentFragment);
dataProcessor.registerRawContentMatcher({ name: "div", classes: "raw" });

let insertOperation = new InsertOperation(
    new ModelPosition(model.document.createRoot(), [0]),
    new Text("x"),
    model.document.version,
);
if (insertOperation.type === "insert") {
}
const stickiness: PositionStickiness = insertOperation.position.stickiness;
model.applyOperation(insertOperation);
insertOperation = insertOperation.clone();
insertOperation.nodes.getNode(9);
insertOperation.shouldReceiveAttributes = true;
insertOperation.toJSON().baseVersion;
insertOperation.toJSON().baseVersion;
InsertOperation.fromJSON(insertOperation.toJSON());

const root = model.document.createRoot();
let range = model.createRange(model.createPositionAt(root, 0), model.createPositionAt(root, 0));
let markerOperation = new MarkerOperation("name", nullvalue, range, model.markers, true, 0);
if (markerOperation.type === "marker") {
}
model.applyOperation(markerOperation);
markerOperation = markerOperation.getReversed();

let operation: Operation;

// $ExpectError
transformSets(insertOperation, insertOperation);
// $ExpectError
transformSets([insertOperation], insertOperation);
operation = transformSets([insertOperation], [insertOperation]).operationsA[0];
operation = transformSets([insertOperation], [insertOperation]).operationsB[0];
operation = transformSets([insertOperation], [insertOperation]).originalOperations.get(operation) as Operation;

const documentSelection: DocumentSelection = new DocumentSelection(model.document);
const result = documentSelection.getRanges().next();
if (!result.done) {
    range = result.value;
}
let modelPosition: ModelPosition = documentSelection.anchor as ModelPosition;
modelPosition = documentSelection.focus as ModelPosition;
bool = documentSelection.isBackward;
bool = documentSelection.hasOwnRange;
bool = documentSelection.isCollapsed;
const result2 = documentSelection.getAttributes().next();
if (!result2.done) {
    str = result2.value[0];
    bool = result2.value[1] as boolean;
    str = result2.value[1] as string;
}
documentSelection.markers.map(marker => {
    const m: Marker = marker;
});
documentSelection.observeMarkers("foo");

range = range.clone();
let position: ModelPosition = range.start;
position = range.end;
let element: Element = range.root as Element;
bool = range.isCollapsed;
range = range.clone();
bool = range.isIntersecting(range);
bool = range.isEqual(range);
let treeWalker: TreeWalker = range.getWalker();
treeWalker = range.getWalker({ singleCharacters: true });
const result3 = range.getItems({ startPosition: position }).next();
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
bool = livePosition.is("foo");
livePosition = new LivePosition(model.document.createRoot(), [0]);
livePosition = LivePosition.fromPosition(position);
position = livePosition.toPosition();

model = new Model();
model.change(writer => {
    const myWriter: Writer = writer;
});
model.enqueueChange("transparent", writer => {
    const myWriter: Writer = writer;
});
model.insertContent(new DocumentFragment());
model.insertContent(new Text(""));
model.deleteContent(model.document.selection);
model.modifySelection(model.document.selection);
model.modifySelection(model.document.selection, { direction: "backward" });
model.on("getSelectedContent", () => {});
let modelDocumentFragment = new DocumentFragment();
modelDocumentFragment = model.getSelectedContent(model.document.selection);
bool = model.hasContent(range);
modelPosition = model.createPositionFromPath(model.document.getRoot()!, [0]);
modelPosition = model.createPositionAfter(model.document.getRoot()!.getChild(0));
modelPosition = model.createPositionBefore(model.document.getRoot()!.getChild(0));
range = model.createRangeIn(model.document.getRoot()!.getChild(0) as Element);
range = model.createRangeOn(model.document.getRoot()!.getChild(0));
const selection: Selection = model.createSelection();
let batch: Batch = model.createBatch();
batch = model.createBatch("transparent");
operation = model.createOperationFromJSON({
    __className: "NoOperation",
    baseVersion: 0,
});
model.destroy();
model.listenTo(Object.create(EmitterMixin), "event", () => {});

treeWalker = new TreeWalker({
    startPosition: position,
});
treeWalker = new TreeWalker({
    startPosition: position,
    boundaries: range,
    direction: "forward",
    ignoreElementEnd: false,
    shallow: false,
    singleCharacters: false,
});

element = new Element("foo");
element = new Element("foo", nullvalue);
element = new Element("two", nullvalue, [new Text("ba"), new Element("img"), new Text("r")]);
num = element.maxOffset;
num = element.childCount;
let node: Text | Element = element.getChild(num);
if ("data" in node) {
    str = node.data;
}
bool = element.is("foo", "bar");
const result5: Array<[string, string | number | boolean]> = Array.from(element.getAttributes());
const result6: Node[] = Array.from(element.getChildren());
node = element.getNodeByPath([num]);
node = element.findAncestor("p")!;
num = element.getChildIndex(node);
num = element.getChildStartOffset(node);
num = element.offsetToIndex(num);

let domConverter = new DomConverter(viewDocument);
let blockFillerMode: BlockFillerMode = "nbsp";
const viewEditableElement = new EditableElement();
domConverter = new DomConverter(viewDocument, { blockFillerMode });
blockFillerMode = domConverter.blockFillerMode;
domConverter.bindElements(document.createElement("div"), viewEditableElement);
domConverter.unbindDomElement(document.createElement("div"));
domConverter.focus(viewEditableElement);
bool = domConverter.isElement(document.createElement("div"));

class MyObserver extends Observer {}
const myObserver: Observer = new MyObserver(view);
viewDocument = myObserver.document;
bool = myObserver.isEnabled;
myObserver.enable();
myObserver.disable();
bool = myObserver.checkShouldIgnoreEventFromTarget(document.createElement("div"));

const clickObserver = new ClickObserver(view);
view.addObserver(ClickObserver);
clickObserver.domEventType === "click";
clickObserver.onDomEvent(new MouseEvent("foo"));
