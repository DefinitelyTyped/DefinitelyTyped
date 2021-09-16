import {
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
    hidePlaceholder,
    HtmlDataProcessor,
    InsertOperation,
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
    ViewDocument,
} from "@ckeditor/ckeditor5-engine";
import DowncastDispatcher from "@ckeditor/ckeditor5-engine/src/conversion/downcastdispatcher";
import DowncastHelpers from "@ckeditor/ckeditor5-engine/src/conversion/downcasthelpers";
import Mapper from "@ckeditor/ckeditor5-engine/src/conversion/mapper";
import UpcastDispatcher from "@ckeditor/ckeditor5-engine/src/conversion/upcastdispatcher";
import UpcastHelpers from "@ckeditor/ckeditor5-engine/src/conversion/upcasthelpers";
import Batch from "@ckeditor/ckeditor5-engine/src/model/batch";
import DocumentFragment from "@ckeditor/ckeditor5-engine/src/model/documentfragment";
import { Item } from "@ckeditor/ckeditor5-engine/src/model/item";
import { Marker } from "@ckeditor/ckeditor5-engine/src/model/markercollection";
import Node from "@ckeditor/ckeditor5-engine/src/model/node";
import Operation from "@ckeditor/ckeditor5-engine/src/model/operation/operation";
import ModelPosition, { PositionStickiness } from "@ckeditor/ckeditor5-engine/src/model/position";
import RootElement from "@ckeditor/ckeditor5-engine/src/model/rootelement";
import Selection from "@ckeditor/ckeditor5-engine/src/model/selection";
import Text from "@ckeditor/ckeditor5-engine/src/model/text";
import TextProxy from "@ckeditor/ckeditor5-engine/src/model/textproxy";
import Writer from "@ckeditor/ckeditor5-engine/src/model/writer";
import AttributeElement from "@ckeditor/ckeditor5-engine/src/view/attributeelement";
import ContainerElement, { getFillerOffset } from "@ckeditor/ckeditor5-engine/src/view/containerelement";
import Document from "@ckeditor/ckeditor5-engine/src/view/document";
import ViewDocumentFragment from "@ckeditor/ckeditor5-engine/src/view/documentfragment";
import ViewDocumentSelection from "@ckeditor/ckeditor5-engine/src/view/documentselection";
import EditableElement from "@ckeditor/ckeditor5-engine/src/view/editableelement";
import ViewElement from "@ckeditor/ckeditor5-engine/src/view/element";
import { ElementDefinition } from "@ckeditor/ckeditor5-engine/src/view/elementdefinition";
import EmptyElement from "@ckeditor/ckeditor5-engine/src/view/emptyelement";
import { BlockFillerMode } from "@ckeditor/ckeditor5-engine/src/view/filler";
import Matcher, { MatcherPattern } from "@ckeditor/ckeditor5-engine/src/view/matcher";
import ViewNode from "@ckeditor/ckeditor5-engine/src/view/node";
import Position from "@ckeditor/ckeditor5-engine/src/view/position";
import ViewRange from "@ckeditor/ckeditor5-engine/src/view/range";
import RawElement from "@ckeditor/ckeditor5-engine/src/view/rawelement";
import RootEditableElement from "@ckeditor/ckeditor5-engine/src/view/rooteditableelement";
import ViewSelection from "@ckeditor/ckeditor5-engine/src/view/selection";
import ViewText from "@ckeditor/ckeditor5-engine/src/view/text";
import ViewTextProxy from "@ckeditor/ckeditor5-engine/src/view/textproxy";
import UIElement from "@ckeditor/ckeditor5-engine/src/view/uielement";
import View from "@ckeditor/ckeditor5-engine/src/view/view";
import { EmitterMixin } from "@ckeditor/ckeditor5-utils";

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

    return;
};

pattern = (element: ViewElement) => {
    if (element.name === "p") {
        const fontSize = element.getStyle("font-size")!;
        const size = fontSize.match(/(\d+)/px);

        if (size && Number(size[1]) > 26) {
            return { name: true, attribute: ["font-size"] };
        }
    }

    return;
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

const viewElement = new DowncastWriter(new ViewDocument(new StylesProcessor())).createEmptyElement("div");

let stylesProcessor = new StylesProcessor();
let viewDocument = new ViewDocument(stylesProcessor);
let bool: boolean = viewDocument.isReadOnly;
num = viewDocument.roots.length;
let rootEditableElement: RootEditableElement = viewDocument.roots.get("main")!;
rootEditableElement = viewDocument.getRoot()!;

enablePlaceholder({
    view,
    element: viewElement,
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
let upcastHelper: UpcastHelpers = conversion.for("upcast");
upcastHelper = new UpcastHelpers([new UpcastDispatcher()]).add(() => {});
// $ExpectError
upcastHelper = new UpcastHelpers([new DowncastDispatcher()]);
upcastHelper = upcastHelper.add(() => {});
upcastHelper.attributeToAttribute({
    view: "foo",
    model: "bar",
    converterPriority: 5,
});
upcastHelper.attributeToAttribute({
    view: "foo",
    model: "bar",
    converterPriority: "low",
});
let downcastHelper: DowncastHelpers = conversion.for("downcast");
downcastHelper = conversion.for("dataDowncast");
downcastHelper = conversion.for("editingDowncast");
downcastHelper = downcastHelper.add(() => {});
downcastHelper.attributeToAttribute({
    model: "foo",
    view: "bar",
    converterPriority: 5,
});
downcastHelper.attributeToAttribute({
    model: "foo",
    view: "bar",
    converterPriority: "low",
});
downcastHelper.markerToElement({
    model: "foo",
    view: "bar",
    converterPriority: 5,
});
downcastHelper.markerToElement({
    model: "foo",
    view: "bar",
    converterPriority: "low",
});

const dataProcessor = new HtmlDataProcessor(viewDocument);
viewDocumentFragment = dataProcessor.toView("") as ViewDocumentFragment;
str = dataProcessor.toData(viewDocumentFragment);
dataProcessor.registerRawContentMatcher({ name: "div", classes: "raw" });

let insertOperation = new InsertOperation(
    new ModelPosition(model.document.createRoot(), [0]),
    new Writer().createText(""),
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
let modelPosition: ModelPosition = documentSelection.anchor!;
modelPosition = documentSelection.focus!;
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
model.insertContent(new Writer().createText(""));
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

element = new Writer().createElement("div");
element = new Writer().createElement("div", { foo: "bar" });
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
const viewEditableElement = new DowncastWriter(new ViewDocument(new StylesProcessor())).createEditableElement("div");
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

new Mapper().on("foo", () => {});

const downcastWriter = new DowncastWriter(new Document(new StylesProcessor()));
downcastWriter.createPositionAt(downcastWriter.createEmptyElement("div"), "after");
downcastWriter.createPositionAt(new Position(downcastWriter.createEmptyElement("div"), 5));

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

if (modelObj.is("position") || modelObj.is("model:position")) {
    const obj: ModelPosition | LivePosition = modelObj;
}
if (modelObj.is("livePosition") || modelObj.is("model:livePosition")) {
    const obj: LivePosition = modelObj;
}
if (modelObj.is("range") || modelObj.is("model:range")) {
    const obj: Range | LiveRange = modelObj;
}
if (modelObj.is("liveRange") || modelObj.is("model:liveRange")) {
    const obj: LiveRange = modelObj;
}
if (modelObj.is("marker") || modelObj.is("model:marker")) {
    const obj: Marker = modelObj;
}
if (modelObj.is("$text") || modelObj.is("model:$text") || modelObj.is("text") || modelObj.is("model:text")) {
    const obj: Text = modelObj;
}
if (
    modelObj.is("$textProxy") ||
    modelObj.is("model:$textProxy") ||
    modelObj.is("textProxy") ||
    modelObj.is("model:textProxy")
) {
    const obj: TextProxy = modelObj;
}
if (
    modelObj.is("element") ||
    modelObj.is("model:element") ||
    modelObj.is("element", "div") ||
    modelObj.is("model:element", "div")
) {
    const obj: Element | RootElement = modelObj;
}
if (modelObj.is("element", "div")) {
    const obj: (Element | RootElement) & { name: "div"; } = modelObj;
}
if (modelObj.is("model:element", "div")) {
    const obj: (Element | RootElement) & { name: "div"; } = modelObj;
}
if (modelObj.is("element", "div") || modelObj.is("element", "span")) {
    const obj: Element | RootElement = modelObj;
}
if (modelObj.is("model:element", "div") || modelObj.is("model:element", "span")) {
    const obj: Element | RootElement = modelObj;
}
if (
    modelObj.is("rootElement") ||
    modelObj.is("model:rootElement") ||
    modelObj.is("rootElement", "div") ||
    modelObj.is("model:rootElement", "div")
) {
    const obj: RootElement = modelObj;
}
{
    const obj = modelObj as RootElement;
    if (obj.is("rootElement", "paragraph")) {
        // $ExpectType RootElement & { name: "paragraph"; }
        obj;
    }
    if (obj.is("model:rootElement", "paragraph")) {
        // $ExpectType RootElement & { name: "paragraph"; }
        obj;
    }
    if (obj.is("rootElement", "paragraph") || obj.is("rootElement", "blockQuote")) {
        // $ExpectType (RootElement & { name: "paragraph"; }) | (RootElement & { name: "blockQuote"; })
        obj;
    }
    if (obj.is("model:rootElement", "paragraph") || obj.is("model:rootElement", "blockQuote")) {
        // $ExpectType (RootElement & { name: "paragraph"; }) | (RootElement & { name: "blockQuote"; })
        obj;
    }
    // $ExpectError
    if (obj.is("rootElement") || obj.is("rootElement", "paragraph")) 1;
    // $ExpectError
    if (obj.is("model:rootElement") || obj.is("model:rootElement", "paragraph")) 1;
}
{
    const obj = modelObj as Element;
    if (obj.is("element", "paragraph")) {
        // $ExpectType (RootElement | Element) & { name: "paragraph"; }
        obj;
    }
    if (obj.is("model:element", "paragraph")) {
        // $ExpectType (RootElement | Element) & { name: "paragraph"; }
        obj;
    }
    if (obj.is("element", "paragraph") || obj.is("element", "blockQuote")) {
        // $ExpectType "paragraph" | "blockQuote"
        obj.name;
    }
    if (obj.is("model:element", "paragraph") || obj.is("model:element", "blockQuote")) {
        // $ExpectType "paragraph" | "blockQuote"
        obj.name;
    }
    // $ExpectError
    if (obj.is("element") || obj.is("element", "paragraph")) 1;
    // $ExpectError
    if (obj.is("model:element") || obj.is("model:element", "paragraph")) 1;
}

if (modelObj.is("selection") || modelObj.is("model:selection")) {
    const obj: Selection | DocumentSelection = modelObj;
}
if (modelObj.is("documentSelection") || modelObj.is("model:documentSelection")) {
    const obj: DocumentSelection = modelObj;
}
if (modelObj.is("node") || modelObj.is("model:node")) {
    const obj: Node | Element | Text | RootElement = modelObj;
}
if (modelObj.is("documentFragment") || modelObj.is("model:documentFragment")) {
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

if (viewObj.is("position") || viewObj.is("view:position")) {
    const obj: Position = viewObj;
}
if (viewObj.is("range") || viewObj.is("view:range")) {
    const obj: ViewRange = viewObj;
}
if (viewObj.is("documentFragment") || viewObj.is("view:documentFragment")) {
    const obj: ViewDocumentFragment = viewObj;
}
if (viewObj.is("selection") || viewObj.is("view:selection")) {
    const obj: ViewSelection | ViewDocumentSelection = viewObj;
}
if (viewObj.is("documentSelection") || viewObj.is("view:documentSelection")) {
    const obj: ViewDocumentSelection = viewObj;
}
if (
    viewObj.is("$textProxy") ||
    viewObj.is("view:$textProxy") ||
    viewObj.is("textProxy") ||
    viewObj.is("view:textProxy")
) {
    const obj: ViewTextProxy = viewObj;
}
if (viewObj.is("node") || viewObj.is("view:node")) {
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
if (viewObj.is("$text") || viewObj.is("view:$text") || viewObj.is("text") || viewObj.is("view:text")) {
    const obj: ViewText = viewObj;
}
if (
    viewObj.is("element") ||
    viewObj.is("view:element") ||
    viewObj.is("element", "div") ||
    viewObj.is("view:element", "div")
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
    if (obj.is("element", "p") || obj.is("element", "div")) {
        // $ExpectType (Element & { name: "p"; }) | (Element & { name: "div"; })
        obj;
    }
    if (obj.is("view:element", "p") || obj.is("view:element", "div")) {
        // $ExpectType (Element & { name: "p"; }) | (Element & { name: "div"; })
        obj;
    }
    if (obj.is("element", "p")) {
        // $ExpectType "p"
        obj.name;
    }
    if (obj.is("view:element", "p")) {
        // $ExpectType "p"
        obj.name;
    }
    // $ExpectError
    if (obj.is("element") || obj.is("element", "p")) 1;
    // $ExpectError
    if (obj.is("view:element") || obj.is("view:element", "p")) 1;
}

if (
    viewObj.is("containerElement") ||
    viewObj.is("view:containerElement") ||
    viewObj.is("containerElement", "div") ||
    viewObj.is("view:containerElement", "div")
) {
    const obj: ContainerElement | EditableElement | RootEditableElement = viewObj;
}

{
    const obj = viewObj as ContainerElement;
    if (obj.is("containerElement", "p") || obj.is("containerElement", "div")) {
        // $ExpectType (ContainerElement & { name: "p"; }) | (ContainerElement & { name: "div"; })
        obj;
    }
    if (obj.is("view:containerElement", "p") || obj.is("view:containerElement", "div")) {
        // $ExpectType (ContainerElement & { name: "p"; }) | (ContainerElement & { name: "div"; })
        obj;
    }
    if (obj.is("containerElement", "p")) {
        // $ExpectType "p"
        obj.name;
    }
    if (obj.is("view:containerElement", "p")) {
        // $ExpectType "p"
        obj.name;
    }
    // $ExpectError
    if (obj.is("containerElement") || obj.is("containerElement", "p")) 1;
    // $ExpectError
    if (obj.is("view:containerElement") || obj.is("view:containerElement", "p")) 1;
}

if (
    viewObj.is("editableElement") ||
    viewObj.is("view:editableElement") ||
    viewObj.is("editableElement", "div") ||
    viewObj.is("view:editableElement", "div")
) {
    const obj: EditableElement | RootEditableElement = viewObj;
}
{
    const obj = viewObj as EditableElement;
    if (obj.is("editableElement", "p") || obj.is("editableElement", "div")) {
        // $ExpectType (EditableElement & { name: "p"; }) | (EditableElement & { name: "div"; })
        obj;
    }
    if (obj.is("view:editableElement", "p") || obj.is("view:editableElement", "div")) {
        // $ExpectType (EditableElement & { name: "p"; }) | (EditableElement & { name: "div"; })
        obj;
    }
    if (obj.is("editableElement", "p")) {
        // $ExpectType "p"
        obj.name;
    }
    if (obj.is("view:editableElement", "p")) {
        // $ExpectType "p"
        obj.name;
    }
    // $ExpectError
    if (obj.is("editableElement") || obj.is("editableElement", "p")) 1;
    // $ExpectError
    if (obj.is("view:editableElement") || obj.is("view:editableElement", "p")) 1;
}

if (
    viewObj.is("rootEditableElement") ||
    viewObj.is("view:rootEditableElement") ||
    viewObj.is("rootEditableElement", "div") ||
    viewObj.is("view:rootEditableElement", "div")
) {
    const obj: RootEditableElement = viewObj;
}
{
    const obj = viewObj as RootEditableElement;
    if (obj.is("rootEditableElement", "p") || obj.is("rootEditableElement", "div")) {
        // $ExpectType (RootEditableElement & { name: "p"; }) | (RootEditableElement & { name: "div"; })
        obj;
    }
    if (obj.is("view:rootEditableElement", "p") || obj.is("view:rootEditableElement", "div")) {
        // $ExpectType (RootEditableElement & { name: "p"; }) | (RootEditableElement & { name: "div"; })
        obj;
    }
    if (obj.is("rootEditableElement", "p")) {
        // $ExpectType RootEditableElement & { name: "p"; }
        obj;
    }
    if (obj.is("view:rootEditableElement", "p")) {
        // $ExpectType RootEditableElement & { name: "p"; }
        obj;
    }
    // $ExpectError
    if (obj.is("rootEditableElement") || obj.is("rootEditableElement", "p")) 1;
    // $ExpectError
    if (obj.is("view:rootEditableElement") || obj.is("view:rootEditableElement", "p")) 1;
}
if (
    viewObj.is("rawElement") ||
    viewObj.is("view:rawElement") ||
    viewObj.is("rawElement", "div") ||
    viewObj.is("view:rawElement", "div")
) {
    const obj: RawElement = viewObj;
}
{
    const obj = viewObj as RawElement;
    if (obj.is("rawElement", "p") || obj.is("rawElement", "div")) {
        // $ExpectType (RawElement & { name: "p"; }) | (RawElement & { name: "div"; })
        obj;
    }
    if (obj.is("view:rawElement", "p") || obj.is("view:rawElement", "div")) {
        // $ExpectType (RawElement & { name: "p"; }) | (RawElement & { name: "div"; })
        obj;
    }
    if (obj.is("rawElement", "p")) {
        // $ExpectType RawElement & { name: "p"; }
        obj;
    }
    if (obj.is("view:rawElement", "p")) {
        // $ExpectType RawElement & { name: "p"; }
        obj;
    }
    // $ExpectError
    if (obj.is("rawElement") || obj.is("rawElement", "p")) 1;
    // $ExpectError
    if (obj.is("view:rawElement") || obj.is("view:rawElement", "p")) 1;
}

if (
    viewObj.is("attributeElement") ||
    viewObj.is("view:attributeElement") ||
    viewObj.is("attributeElement", "div") ||
    viewObj.is("view:attributeElement", "div")
) {
    const obj: AttributeElement = viewObj;
}
{
    const obj = viewObj as AttributeElement;
    if (obj.is("attributeElement", "p") || obj.is("attributeElement", "div")) {
        // $ExpectType (AttributeElement & { name: "p"; }) | (AttributeElement & { name: "div"; })
        obj;
    }
    if (obj.is("view:attributeElement", "p") || obj.is("view:attributeElement", "div")) {
        // $ExpectType (AttributeElement & { name: "p"; }) | (AttributeElement & { name: "div"; })
        obj;
    }
    if (obj.is("attributeElement", "p")) {
        // $ExpectType AttributeElement & { name: "p"; }
        obj;
    }
    if (obj.is("view:attributeElement", "p")) {
        // $ExpectType AttributeElement & { name: "p"; }
        obj;
    }
    // $ExpectError
    if (obj.is("attributeElement") || obj.is("attributeElement", "p")) 1;
    // $ExpectError
    if (obj.is("view:attributeElement") || obj.is("view:attributeElement", "p")) 1;
}

if (
    viewObj.is("uiElement") ||
    viewObj.is("view:uiElement") ||
    viewObj.is("uiElement", "div") ||
    viewObj.is("view:uiElement", "div")
) {
    const obj: UIElement = viewObj;
}
{
    const obj = viewObj as UIElement;
    if (obj.is("uiElement", "p") || obj.is("uiElement", "div")) {
        // $ExpectType (UIElement & { name: "p"; }) | (UIElement & { name: "div"; })
        obj;
    }
    if (obj.is("view:uiElement", "p") || obj.is("view:uiElement", "div")) {
        // $ExpectType (UIElement & { name: "p"; }) | (UIElement & { name: "div"; })
        obj;
    }
    if (obj.is("uiElement", "p")) {
        // $ExpectType UIElement & { name: "p"; }
        obj;
    }
    if (obj.is("view:uiElement", "p")) {
        // $ExpectType UIElement & { name: "p"; }
        obj;
    }
    // $ExpectError
    if (obj.is("uiElement") || obj.is("uiElement", "p")) 1;
    // $ExpectError
    if (obj.is("view:uiElement") || obj.is("view:uiElement", "p")) 1;
}

if (
    viewObj.is("emptyElement") ||
    viewObj.is("view:emptyElement") ||
    viewObj.is("emptyElement", "div") ||
    viewObj.is("view:emptyElement", "div")
) {
    const obj: EmptyElement = viewObj;
}
{
    const obj = viewObj as EmptyElement;
    if (obj.is("emptyElement", "hr") || obj.is("emptyElement", "img")) {
        // $ExpectType (EmptyElement & { name: "hr"; }) | (EmptyElement & { name: "img"; })
        obj;
    }
    if (obj.is("view:emptyElement", "hr") || obj.is("view:emptyElement", "img")) {
        // $ExpectType (EmptyElement & { name: "hr"; }) | (EmptyElement & { name: "img"; })
        obj;
    }
    if (obj.is("emptyElement", "hr")) {
        // $ExpectType EmptyElement & { name: "hr"; }
        obj;
    }
    if (obj.is("view:emptyElement", "hr")) {
        // $ExpectType EmptyElement & { name: "hr"; }
        obj;
    }
    // $ExpectError
    if (obj.is("emptyElement") || obj.is("emptyElement", "hr")) 1;
    // $ExpectError
    if (obj.is("view:emptyElement") || obj.is("view:emptyElement", "hr")) 1;
}

// Selectable
new Writer().setSelection(null);

// MatcherPattern
pattern = "div";
pattern = /foo/;
pattern = { name: "p" };
pattern = { name: /^(ul|ol)$/ };
pattern = {
    attributes: {
        title: true,
    },
};
pattern = {
    name: "p",
    attributes: true,
};
pattern = {
    name: "figure",
    attributes: "title",
};
pattern = {
    name: "figure",
    attributes: /^data-.*$/,
};

pattern = {
    name: "figure",
    attributes: {
        title: "foobar",
        alt: true,
        "data-type": /^(jpg|png)$/,
    },
};
pattern = {
    name: "figure",
    attributes: ["title", /^data-*$/],
};

pattern = {
    name: "input",
    attributes: [
        {
            key: "type",
            value: /^(text|number|date)$/,
        },
        {
            key: /^data-.*$/,
            value: true,
        },
    ],
};

pattern = {
    name: "p",
    styles: true,
};

pattern = {
    name: "p",
    styles: "color",
};

pattern = {
    name: "p",
    styles: /^border.*$/,
};

pattern = {
    name: "p",
    attributes: {
        color: /rgb\((\d{1,3}), (\d{1,3}), (\d{1,3})\)/,
        "font-weight": 600,
        "text-decoration": true,
    },
};

pattern = {
    name: "p",
    attributes: ["color", /^border.*$/],
};

pattern = {
    name: "p",
    attributes: [
        {
            key: "color",
            value: /rgb\((\d{1,3}), (\d{1,3}), (\d{1,3})\)/,
        },
        {
            key: /^border.*$/,
            value: true,
        },
    ],
};

pattern = {
    name: "p",
    classes: true,
};

pattern = {
    name: "p",
    classes: "highlighted",
};

pattern = {
    name: "figure",
    classes: /^image-side-(left|right)$/,
};

pattern = {
    name: "p",
    classes: {
        highlighted: true,
        marker: true,
    },
};

pattern = {
    name: "figure",
    classes: ["image", /^image-side-(left|right)$/],
};

pattern = {
    name: "figure",
    classes: [
        {
            key: "image",
            value: true,
        },
        {
            key: /^image-side-(left|right)$/,
            value: true,
        },
    ],
};

pattern = {
    name: "span",
    attributes: ["title"],
    styles: {
        "font-weight": "bold",
    },
    classes: "highlighted",
};

new Matcher(pattern).add(pattern);
new Matcher(pattern, pattern).add(pattern, pattern);
