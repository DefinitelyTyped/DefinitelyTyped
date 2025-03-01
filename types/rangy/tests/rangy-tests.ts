import rangy = require("rangy");
import { assertAny, assertBoolean, assertRangyRange, assertString, getRangyRange, TextRange } from "./test-utils";

function testRangyStatic() {
    rangy.addInitListener((rangy: RangyStatic) => {});
    rangy.createMissingNativeApi();
    rangy.shim();

    let nativeRange: Range | TextRange = rangy.createNativeRange(document);
    nativeRange = rangy.createNativeRange(window);
    nativeRange = rangy.createNativeRange(new HTMLIFrameElement());
    nativeRange = rangy.createNativeRange();

    let rangyRange: RangyRange = rangy.createRange(document);
    rangyRange = rangy.createRange(window);
    rangyRange = rangy.createRange(new HTMLIFrameElement());
    rangyRange = rangy.createRange();

    rangyRange = rangy.createRangyRange(document);
    rangyRange = rangy.createRangyRange(window);
    rangyRange = rangy.createRangyRange(new HTMLIFrameElement());
    rangyRange = rangy.createRangyRange();

    let nativeSelection: Selection = rangy.getNativeSelection(window);
    nativeSelection = rangy.getNativeSelection();

    let rangySelection: RangySelection = rangy.getSelection();

    let initialized: boolean = rangy.initialized;
    let supported: boolean = rangy.supported;
}

function testRangyRange() {
    let rangyRange: RangyRange = rangy.createRange();
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
    nodes = rangyRange.getNodes([1]); // Node type as number
    nodes = rangyRange.getNodes([1], (node: Node) => true);
    assertString(rangyRange.inspect());
    assertRangyRange(rangyRange.intersection(rangyRange));
    assertBoolean(rangyRange.intersectsOrTouchesRange(rangyRange));
    assertBoolean(rangyRange.intersectsRange(rangyRange));
    assertBoolean(rangyRange.isValid());
    rangyRange.moveToBookmark({});
    rangyRange.normalizeBoundaries();
    rangyRange.refresh();
    rangyRange.select();
    rangyRange.setStartAndEnd(new Node(), 23);
    rangyRange.setStartAndEnd(new Node(), 23, 42);
    rangyRange.setStartAndEnd(new Node(), 23, new Node(), 42);
    rangyRange.splitBoundaries();
    assertString(rangyRange.toHtml());
    assertRangyRange(rangyRange.union(rangyRange));
    let characterRange: { start: number; end: number } = rangyRange.toCharacterRange(new Node());
    characterRange = rangyRange.toCharacterRange(new Node(), {});
}

function testSelection() {
    let selection: RangySelection = rangy.getSelection();
    selection.detach();
    let ranges: RangyRange[] = selection.getAllRanges();
    let range: RangyRange = selection.getRangeAt(0);
    selection.getBookmark(new Node());
    let nativeTextRange: TextRange = selection.getNativeTextRange();
    assertString(selection.inspect());
    assertBoolean(selection.isBackwards());
    selection.moveToBookmark({});
    let nativeSelection: Selection = selection.nativeSelection;
    selection.refresh();
    selection.refresh(true);
    selection.restoreRanges({});
    let object: object = selection.saveRanges();
    selection.setRanges(ranges);
    selection.setSingleRange(getRangyRange());
    assertString(selection.toHtml());
    let node: Node = new Node();
    object = selection.saveCharacterRanges(node, {});
    selection.restoreCharacterRanges(node, object, {});
    assertString(selection.toHtml());
    let moved: number = selection.move("character", 1, {});
}
