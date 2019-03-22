/* tslint:disable:prefer-const */
import * as rangy from 'rangy';

declare function assertAny(a: any): any;

declare function assertBoolean(b: boolean): any;

declare function assertString(s: string): any;

declare function assertRangyRange(r: RangyRange): any;

declare function getRangyRange(): RangyRange;

type TextRange = any; // ?

function testRangyStatic() {
    rangy.addInitListener((rangy: RangyStatic) => {
    });

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
    let node = new Node();

    assertBoolean(rangyRange.canSurroundContents());
    rangyRange.collapseAfter(node);
    rangyRange.collapseBefore(node);
    rangyRange.collapseToPoint(node, 23);
    assertAny(rangyRange.compareNode(node));
    assertBoolean(rangyRange.containsNode(node, true));
    assertBoolean(rangyRange.containsNodeContents(node));
    assertBoolean(rangyRange.containsNodeText(node));
    assertBoolean(rangyRange.containsNodeText(node));
    assertBoolean(rangyRange.containsRange(rangyRange));
    assertBoolean(rangyRange.equals(rangyRange));
    let bookmark: rangy.Bookmark = rangyRange.getBookmark();
    bookmark = rangyRange.getBookmark(node);
    let doc: Document = rangyRange.getDocument();
    let nodes: Node[] = rangyRange.getNodes();
    nodes = rangyRange.getNodes([node]);
    nodes = rangyRange.getNodes([node], (node: Node) => true);
    assertString(rangyRange.inspect());
    assertRangyRange(rangyRange.intersection(rangyRange));
    assertBoolean(rangyRange.intersectsOrTouchesRange(rangyRange));
    assertBoolean(rangyRange.intersectsRange(rangyRange));
    assertBoolean(rangyRange.isValid());

    rangyRange.moveToBookmark(bookmark);
    rangyRange.normalizeBoundaries();
    rangyRange.refresh();
    rangyRange.select();
    rangyRange.setStartAndEnd(node, 23);
    rangyRange.setStartAndEnd(node, 23, 42);
    rangyRange.setStartAndEnd(node, 23, node, 42);
    rangyRange.splitBoundaries();
    assertString(rangyRange.toHtml());
    assertRangyRange(rangyRange.union(rangyRange));
    let characterRange: { start: number, end: number } = rangyRange.toCharacterRange(node);
    let characterRange2: { start: number, end: number } = rangyRange.toCharacterRange(node, {});
}

function testSelection() {
    let selection: RangySelection = rangy.getSelection();
    let node: Node = new Node();

    selection.detach();
    let ranges: RangyRange[] = selection.getAllRanges();
    let range: RangyRange = selection.getRangeAt(0);
    let selBookmark = selection.getBookmark(node);
    let nativeTextRange: TextRange = selection.getNativeTextRange();
    assertString(selection.inspect());
    assertBoolean(selection.isBackwards());
    selection.moveToBookmark(selBookmark.rangeBookmarks[0]);
    let nativeSelection: Selection = selection.nativeSelection;
    selection.refresh();
    selection.refresh(true);
    selection.restoreRanges({});
    let o: object = selection.saveRanges();
    selection.setRanges(ranges);
    selection.setSingleRange(getRangyRange());
    assertString(selection.toHtml());
    o = selection.saveCharacterRanges(node, {});
    selection.restoreCharacterRanges(node, o, {});
    assertString(selection.toHtml());
    let moved: number = selection.move('character', 1, {});
}

// consumer need this import or tsc will fail if tsconfig.json
// don't include ["index.d.ts", "rangy-classapplier.d.ts"] in "files" field
// this is expected!
import 'rangy/lib/rangy-classapplier';

function testRangyClassApplier() {
    function elementCreateFunction(element: Element, classApplier: RangyClassApplier): number {
        return 1;
    }

    let options: RangyClassApplierOptions = {
        elementTagName: 'span',
        elementProperties: {
            name: 'test-name',
            disabled: 'true'
        },
        elementAttributes: {
            id: 'test-id',
            type: 'test-type'
        },
        ignoreWhiteSpace: false,
        applyToEditableOnly: true,
        tagNames: ["span", "b", "strong", "a"],
        normalize: false,
        onElementCreate: elementCreateFunction,
        useExistingElements: false
    };

    let options2: RangyClassApplierOptions = {
        tagNames: 'span, b, strong, a'
    };

    let classApplier: RangyClassApplier;
    classApplier = rangy.createClassApplier('test', options, ['test1', 'test2']);
    classApplier = rangy.createClassApplier('test', options, 'test1, test2');
    classApplier = new rangy.ClassApplier('test', options, 'test1, test2');

    let rangyRange: RangyRange = rangy.createRange();

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

    let el = new Element();

    classApplier.copyPropertiesToElement({}, el, true);
    classApplier.copyAttributesToElement([""], el);
    let b: boolean = classApplier.appliesToElement(el);
    let nodes: Node[] = classApplier.getEmptyElements(rangyRange);
    let n = nodes[0];
    b = classApplier.hasClass(n);
    let nodeOrNull: Node|null = classApplier.getSelfOrAncestorWithClass();
    b = classApplier.isModifiable(n);
    b = classApplier.isIgnorableWhiteSpaceNode(n);

    let p: rangy.DomPosition = {node: n, offset: 2};
    classApplier.postApply(nodes, rangyRange);
    classApplier.postApply(nodes, rangyRange, [p]);
    classApplier.postApply(nodes, rangyRange, [p], b);
    el = classApplier.createContainer(n);
    b = classApplier.elementHasProperties(el, {});
    b = classApplier.elementHasAttributes(el, ["someAttrName"]);
    classApplier.applyToTextNode(n);
    b = classApplier.isRemovable(el);
    b = classApplier.isEmptyContainer(el);
    classApplier.removeEmptyContainers(rangyRange);
    classApplier.undoToTextNode(n, rangyRange, el, [p]);
    classApplier.splitAncestorWithClass(n, 1, [p]);
    classApplier.undoToAncestor(el, [p]);

    let ranges: RangyRange[] = classApplier.applyToRanges([rangyRange]);
    ranges = classApplier.undoToRanges(ranges);
    b = classApplier.isAppliedToRanges(ranges);
    classApplier.getElementsWithClassIntersectingRange(rangyRange);

    // test ClassApplierUtil
    let u = rangy.ClassApplier.util;
    b = u.hasClass(el, className);
    u.addClass(el, className);
    u.removeClass(el, className);
    let s: string = u.getClass(el);
    let el2 = new Element();
    b = u.hasSameClasses(el, el2);
    b = u.hasAllClasses(el, className);
    let nullableNodes: Array<Node|null> = u.replaceWithOwnChildren(n, [p]);
    b = u.elementsHaveSameNonClassAttributes(el, el2);
    b = u.elementHasNonClassAttributes(el, ["except1"]);
    n = u.splitNodeAt(n, n, 1, [p]);
    b = u.isEditableElement(n);
    b = u.isEditingHost(n);
    b = u.isEditable(n);
}

import 'rangy/lib/rangy-highlighter';

function testHighlighter() {
    let highlighter: rangy.Highlighter;
    highlighter = rangy.createHighlighter(document, "TextRange");
    let classApplier: rangy.ClassApplier = rangy.createClassApplier("cls");
    highlighter.addClassApplier(classApplier);
    let h: rangy.Highlight|null = highlighter.getHighlightForElement(new Node());
    if (h != null) {
        highlighter.removeHighlights([h]);
    }
    highlighter.removeAllHighlights();
    let r: RangyRange = rangy.createRange();
    let hs: rangy.Highlight[] = highlighter.getIntersectingHighlights([r]);
    let charRange: rangy.CharacterRange = {start: 1, end: 2};
    hs = highlighter.highlightCharacterRanges("theClassName", [charRange]);
    hs = highlighter.highlightRanges("cls", [r]);
    hs = highlighter.highlightSelection();

    let sel: RangySelection = rangy.getSelection();
    hs = highlighter.unhighlightSelection(sel);
    hs = highlighter.getHighlightsInSelection(sel);
    let b: boolean = highlighter.selectionOverlapsHighlight(sel);
    let s: string = highlighter.serialize();
    highlighter.deserialize(s);
}
