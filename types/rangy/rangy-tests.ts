declare function assertAny(a:any):any;
declare function assertBoolean(b:boolean):any;
declare function assertString(s:string):any;
declare function assertRangyRange(r:RangyRange):any;
declare function getRangyRange():RangyRange;

type TextRange = any; // ?

function testRangyStatic() {
    rangy.addInitListener((rangy:RangyStatic) => {
    });

    rangy.createMissingNativeApi();
    rangy.shim();

    let nativeRange:Range|TextRange = rangy.createNativeRange(document);
    nativeRange = rangy.createNativeRange(window);
    nativeRange = rangy.createNativeRange(new HTMLIFrameElement);
    nativeRange = rangy.createNativeRange();

    let rangyRange:RangyRange = rangy.createRange(document);
    rangyRange = rangy.createRange(window);
    rangyRange = rangy.createRange(new HTMLIFrameElement);
    rangyRange = rangy.createRange();

    rangyRange = rangy.createRangyRange(document);
    rangyRange = rangy.createRangyRange(window);
    rangyRange = rangy.createRangyRange(new HTMLIFrameElement);
    rangyRange = rangy.createRangyRange();

    let nativeSelection:Selection = rangy.getNativeSelection(window);
    nativeSelection = rangy.getNativeSelection();

    let rangySelection:RangySelection = rangy.getSelection();

    let initialized:boolean = rangy.initialized;
    let supported:boolean = rangy.supported;
}

function testRangyRange() {
    let rangyRange:RangyRange = rangy.createRange();

    assertBoolean(rangyRange.canSurroundContents());
    rangyRange.collapseAfter(new Node);
    rangyRange.collapseBefore(new Node);
    rangyRange.collapseToPoint(new Node, 23);
    assertAny(rangyRange.compareNode(new Node));
    assertBoolean(rangyRange.containsNode(new Node, true));
    assertBoolean(rangyRange.containsNodeContents(new Node));
    assertBoolean(rangyRange.containsNodeText(new Node));
    assertBoolean(rangyRange.containsNodeText(new Node));
    assertBoolean(rangyRange.containsRange(rangyRange));
    assertBoolean(rangyRange.equals(rangyRange));
    let bookmark:{start:number, end:number} = rangyRange.getBookmark();
    bookmark = rangyRange.getBookmark(new Node);
    let doc:Document = rangyRange.getDocument();
    let nodes:Node[] = rangyRange.getNodes();
    nodes = rangyRange.getNodes([new Node]);
    nodes = rangyRange.getNodes([new Node], (node:Node) => true);
    assertString(rangyRange.inspect());
    assertRangyRange(rangyRange.intersection(rangyRange));
    assertBoolean(rangyRange.intersectsOrTouchesRange(rangyRange));
    assertBoolean(rangyRange.intersectsRange(rangyRange));
    assertBoolean(rangyRange.isValid());
    rangyRange.moveToBookmark({});
    rangyRange.normalizeBoundaries();
    rangyRange.refresh();
    rangyRange.select();
    rangyRange.setStartAndEnd(new Node, 23);
    rangyRange.setStartAndEnd(new Node, 23, 42);
    rangyRange.setStartAndEnd(new Node, 23, new Node, 42);
    rangyRange.splitBoundaries();
    assertString(rangyRange.toHtml());
    assertRangyRange(rangyRange.union(rangyRange));
    let characterRange: { start: number, end: number } = rangyRange.toCharacterRange(new Node);
    let characterRange2: { start: number, end: number } = rangyRange.toCharacterRange(new Node, {})
}

function testSelection() {
    let selection:RangySelection = rangy.getSelection();

    selection.detach();
    let ranges:RangyRange[] = selection.getAllRanges();
    let range:RangyRange = selection.getRangeAt(0);
    selection.getBookmark(new Node);
    let nativeTextRange:TextRange = selection.getNativeTextRange();
    assertString(selection.inspect());
    assertBoolean(selection.isBackwards());
    selection.moveToBookmark({});
    var nativeSelection:Selection = selection.nativeSelection;
    selection.refresh();
    selection.refresh(true);
    selection.restoreRanges({});
    var object:Object = selection.saveRanges();
    selection.setRanges(ranges);
    selection.setSingleRange(getRangyRange());
    assertString(selection.toHtml());
    var node:Node = new Node();
    object = selection.saveCharacterRanges(node, {});
    selection.restoreCharacterRanges(node, object, {});
    assertString(selection.toHtml());
    let moved: number = selection.move('character', 1, {});
}


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
    classApplier.detach(new HTMLIFrameElement);
    classApplier.detach();

    let className: string = classApplier.className;
    className = classApplier.cssClass;

}
