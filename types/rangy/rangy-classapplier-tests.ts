import rangy = require('rangy');
import 'rangy/lib/rangy-classapplier';
import { assertAny, assertBoolean, assertString, assertRangyRange } from './test-utils';

function testRangyClassApplier() {
    function elementCreateFunction(element: Element, classApplier: RangyClassApplier): number {
        return 1;
    }

    let options: RangyClassApplierOptions = {
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

    let options2: RangyClassApplierOptions = { tagNames: "span, b, strong, a" };

    let classApplier: RangyClassApplier;
    classApplier = rangy.createClassApplier("test", options, ["test1", "test2"]);
    classApplier = rangy.createClassApplier("test", options2, "test1, test2");

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
}