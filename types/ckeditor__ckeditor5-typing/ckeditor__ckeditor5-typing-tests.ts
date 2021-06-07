import { Editor } from "@ckeditor/ckeditor5-core";
import { Element, Model, Range } from "@ckeditor/ckeditor5-engine";
import Batch from "@ckeditor/ckeditor5-engine/src/model/batch";
import Position from "@ckeditor/ckeditor5-engine/src/model/position";
import {
    Delete,
    getLastTextLine,
    inlineHighlight,
    Input,
    TextTransformation,
    TextWatcher,
    TwoStepCaretMovement,
    Typing,
} from "@ckeditor/ckeditor5-typing";
import {
    TextTransformationConfig,
    TextTransformationDescription,
} from "@ckeditor/ckeditor5-typing/src/texttransformation";
import findAttributeRange from "@ckeditor/ckeditor5-typing/src/utils/findattributerange";
import injectUnsafeKeystrokesHandling from "@ckeditor/ckeditor5-typing/src/utils/injectunsafekeystrokeshandling";

class MyEditor extends Editor {}
const editor = new MyEditor();

new Typing(editor);
Typing.requires.length === 2;
Typing.requires.map(Plugin => new Plugin(editor).init());

const input = new Input(editor);
input.init();
input.isInput(new Batch());

const del = new Delete(editor);
del.init();

const textWatcher = new TextWatcher(new Model(), foo => foo.startsWith("bar"));
textWatcher.hasMatch === textWatcher.testCallback("foo");

const twoStep = new TwoStepCaretMovement(editor);
twoStep.init();
twoStep.registerAttribute("foo");

const textTranformation = new TextTransformation(editor);
textTranformation.init();

const description: TextTransformationDescription = {
    from: /foo/,
    to: "foo",
};

const config: TextTransformationConfig = {
    extra: [description, description],
    include: [description],
    remove: [description],
};

inlineHighlight(editor, "foo", "bar", "zet");

findAttributeRange(new Position(new Element("div"), [3]), "", "", new Model());

getLastTextLine(new Range(new Position(new Element("div"), [4])), new Model());

injectUnsafeKeystrokesHandling(editor);
