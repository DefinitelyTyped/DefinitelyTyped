import * as engine from "@ckeditor/ckeditor5-engine";
import DowncastDispatcher from "@ckeditor/ckeditor5-engine/src/conversion/downcastdispatcher";
import UpcastDispatcher from "@ckeditor/ckeditor5-engine/src/conversion/upcastdispatcher";
import Document from "@ckeditor/ckeditor5-engine/src/model/document";
import DocumentFragment from "@ckeditor/ckeditor5-engine/src/model/documentfragment";
import MarkerCollection from "@ckeditor/ckeditor5-engine/src/model/markercollection";
import Node from "@ckeditor/ckeditor5-engine/src/model/node";
import Position from "@ckeditor/ckeditor5-engine/src/model/position";

const model: engine.Model = new engine.Model();
const modelMarks: MarkerCollection = model.markers;
model.createRange;

// $ExpectError
let markerOperation: engine.MarkerOperation = new engine.MarkerOperation();
markerOperation = new engine.MarkerOperation(
    "name",
    model.createRange(model.createPositionFromPath(new DocumentFragment(new Node()), [1])),
    model.createRange(model.createPositionAt(model.createPositionFromPath(new DocumentFragment(new Node()), [1]))),
    model.markers,
    false,
    1,
);

const range: engine.Range = new engine.Range(
    model.createPositionAt(new Position(new DocumentFragment([new Node()]), [1])),
);
const modelRange: engine.Range = model.createRange(
    model.createPositionAt(new Position(new DocumentFragment([new Node()]), [1])),
);

// $ExpectError
const element: engine.Element = new engine.Element();

const matcher: engine.Matcher = new engine.Matcher("foo", /bar/, () => null);

// $ExpectError
const observer: engine.Observer = new engine.Observer();

const treeWalker: engine.TreeWalker = new engine.TreeWalker();

// $ExpectError
let editingController: engine.EditingController = new engine.EditingController();
editingController = new engine.EditingController(model, new engine.StylesProcessor());

// $ExpectError
let dataController: engine.DataController = new engine.DataController();
dataController = new engine.DataController(model, new engine.StylesProcessor());

// $ExpectError
let conversion: engine.Conversion = new engine.Conversion();
conversion = new engine.Conversion(new DowncastDispatcher(), new UpcastDispatcher());

// $ExpectError
let htmlDataProcessor: engine.HtmlDataProcessor = new engine.HtmlDataProcessor();
htmlDataProcessor = new engine.HtmlDataProcessor(new engine.ViewDocument(new engine.StylesProcessor()));

// $ExpectError
let insertOperation: engine.InsertOperation = new engine.InsertOperation();
insertOperation = new engine.InsertOperation(new Position(new DocumentFragment([new Node()]), [1]), "div", 1);

// $ExpectError
let documentSelection: engine.DocumentSelection = new engine.DocumentSelection();
documentSelection = new engine.DocumentSelection(new Document());
