import * as rangy from "rangy";
import "rangy/lib/rangy-classapplier";
import "rangy/lib/rangy-highlighter";
import "rangy/lib/rangy-selectionsaverestore";
import "rangy/lib/rangy-serializer";
import "rangy/lib/rangy-textrange";

declare function assertAny(a: any): any;
declare function assertBoolean(b: boolean): any;
declare function assertString(s: string): any;
declare function assertRangyRange(r: rangy.RangyRange): any;
declare function getRangyRange(): rangy.RangyRange;

type TextRange = any;

function testRangyStatic() {
    rangy.addInitListener((r: rangy.RangyStatic) => {});
    rangy.createMissingNativeApi();
    rangy.shim();
    let nativeRange: Range | TextRange = rangy.createNativeRange(document);
    nativeRange = rangy.createNativeRange(window);
    nativeRange = rangy.createNativeRange(new HTMLIFrameElement());
    nativeRange = rangy.createNativeRange();
    let rangyRange: rangy.RangyRange = rangy.createRange(document);
    rangyRange = rangy.createRange(window);
    rangyRange = rangy.createRange(new HTMLIFrameElement());
    rangyRange = rangy.createRange();
    rangyRange = rangy.createRangyRange(document);
    rangyRange = rangy.createRangyRange(window);
    rangyRange = rangy.createRangyRange(new HTMLIFrameElement());
    rangyRange = rangy.createRangyRange();
    let nativeSelection: Selection = rangy.getNativeSelection(window);
    nativeSelection = rangy.getNativeSelection();
    let rangySelection: rangy.RangySelection = rangy.getSelection();
    let initialized: boolean = rangy.initialized;
    let supported: boolean = rangy.supported;
}

function testRangyRange() {
    let rangyRange: rangy.RangyRange = rangy.createRange();
    assertBoolean(rangyRange.canSurroundContents());
    rangyRange.collapseAfter(new Node());
    rangyRange.collapseBefore(new Node());
    rangyRange.collapseToPoint(new Node(), 23);
    assertAny(rangyRange.compareNode(new Node()));
    assertBoolean(rangyRange.containsNode(new Node(), true));
    assertBoolean(rangyRange.containsNodeContents(new Node()));
    assertBoolean(rangyRange.containsNodeText(new Node()));
    assertBoolean(rangyRange.containsRange(rangyRange));
    assertBoolean(rangyRange.equals(rangyRange));
    let bookmark: { start: number; end: number } = rangyRange.getBookmark();
    bookmark = rangyRange.getBookmark(new Node());
    let doc: Document = rangyRange.getDocument();
    let nodes: Node[] = rangyRange.getNodes();
    nodes = rangyRange.getNodes([new Node()]);
    nodes = rangyRange.getNodes([new Node()], (node: Node) => true);
    assertString(rangyRange.inspect());
    const intersection = rangyRange.intersection(rangyRange);
    if (intersection) assertRangyRange(intersection);
    assertBoolean(rangyRange.intersectsOrTouchesRange(rangyRange));
    assertBoolean(rangyRange.intersectsRange(rangyRange));
    assertBoolean(rangyRange.isValid());
    rangyRange.moveToBookmark({});
    rangyRange.normalizeBoundaries();
    rangyRange.refresh();
    rangyRange.select();
    rangyRange.setStartAndEnd(new Node(), 23);
    rangyRange.setStartAndEnd(new Node(), 23, new Node(), 42);
    rangyRange.splitBoundaries();
    assertString(rangyRange.toHtml());
    const union = rangyRange.union(rangyRange);
    if (union) assertRangyRange(union);
}

function testSelection() {
    let selection: rangy.RangySelection = rangy.getSelection();
    selection.detach();
    let ranges: rangy.RangyRange[] = selection.getAllRanges();
    let range: rangy.RangyRange = selection.getRangeAt(0);
    selection.getBookmark(new Node());
    let nativeTextRange: Range = selection.getNativeTextRange();
    assertString(selection.inspect());
    assertBoolean(selection.isBackwards());
    selection.moveToBookmark({});
    let nativeSelection: Selection = selection.nativeSelection;
    selection.refresh();
    selection.refresh(true);
    selection.restoreRanges({});
    let object: Object = selection.saveRanges();
    selection.setRanges(ranges);
    assertString(selection.toHtml());
}

function testRangyClassApplier() {
    function elementCreateFunction(element: Element, classApplier: rangy.RangyClassApplier): number {
        return 1;
    }
    let options: rangy.RangyClassApplierOptions = {
        elementTagName: "span",
        elementProperties: { name: "test-name", disabled: "true" },
        elementAttributes: { id: "test-id", type: "test-type" },
        ignoreWhiteSpace: false,
        applyToEditableOnly: true,
        tagNames: ["span", "b", "strong", "a"],
        normalize: false,
        onElementCreate: elementCreateFunction,
        useExistingElements: false,
    };
    let options2: rangy.RangyClassApplierOptions = { tagNames: "span, b, strong, a" };
    let classApplier: rangy.RangyClassApplier;
    classApplier = rangy.createClassApplier("test", options, ["test1", "test2"]);
    classApplier = rangy.createClassApplier("test", options, "test1, test2");
    let rangyRange: rangy.RangyRange = rangy.createRange();
    classApplier.applyToSelection();
    classApplier.applyToSelection(window);
    classApplier.undoToSelection();
    classApplier.undoToSelection(window);
    assertBoolean(classApplier.isAppliedToSelection());
    assertBoolean(classApplier.isAppliedToSelection(window));
    classApplier.toggleSelection();
    classApplier.toggleSelection(window);
    classApplier.applyToRange(rangyRange);
    classApplier.undoToRange(rangyRange);
    assertBoolean(classApplier.isAppliedToRange(rangyRange));
    classApplier.toggleRange(rangyRange);
    classApplier.detach(document);
    classApplier.detach(window);
    classApplier.detach(new HTMLIFrameElement());
    classApplier.detach();
    let className: string = classApplier.className;
    className = classApplier.cssClass;
}

testRangyStatic();
testRangyRange();
testSelection();
testRangyClassApplier();
