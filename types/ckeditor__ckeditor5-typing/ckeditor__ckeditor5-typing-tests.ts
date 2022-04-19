import { Editor } from '@ckeditor/ckeditor5-core';
import { Element, Model, Range, StylesProcessor } from '@ckeditor/ckeditor5-engine';
import Position from '@ckeditor/ckeditor5-engine/src/model/position';
import { KeyEventData } from '@ckeditor/ckeditor5-engine/src/view/observer/keyobserver';
import View from '@ckeditor/ckeditor5-engine/src/view/view';
import {
    Delete,
    getLastTextLine,
    inlineHighlight,
    Input,
    TextTransformation,
    TextWatcher,
    TwoStepCaretMovement,
    Typing,
} from '@ckeditor/ckeditor5-typing';
import DeleteCommand from '@ckeditor/ckeditor5-typing/src/deletecommand';
import InputCommand from '@ckeditor/ckeditor5-typing/src/inputcommand';
import {
    TextTransformationConfig,
    TextTransformationDescription,
} from '@ckeditor/ckeditor5-typing/src/texttransformation';
import findAttributeRange from '@ckeditor/ckeditor5-typing/src/utils/findattributerange';
import injectUnsafeKeystrokesHandling, {
    isNonTypingKeystroke,
} from '@ckeditor/ckeditor5-typing/src/utils/injectunsafekeystrokeshandling';

class MyEditor extends Editor {}
const editor = new MyEditor();

new Typing(editor);
Typing.requires.length === 2;
Typing.requires.map(Plugin => new Plugin(editor).init());

const input = new Input(editor);
input.init();

const del = new Delete(editor);
del.init();

const textWatcher = new TextWatcher(new Model(), foo => foo.startsWith('bar'));
textWatcher.hasMatch === textWatcher.testCallback('foo');

textWatcher.on('foo', (ev, ...args) => {
    // $ExpectType EventInfo<TextWatcher, "foo">
    ev;
    // $ExpectType any[]
    args;
});

textWatcher.set('foo');

const twoStep = new TwoStepCaretMovement(editor);
twoStep.init();
twoStep.registerAttribute('foo');

const textTranformation = new TextTransformation(editor);
textTranformation.init();

const description: TextTransformationDescription = {
    from: /foo/,
    to: 'foo',
};

const config: TextTransformationConfig = {
    extra: [description, description],
    include: [description, description, '', ''],
    remove: ['', ''],
};

const position = new Position(Element.fromJSON({ name: 'div' }), [3]);
const range = new Range(position);

inlineHighlight(editor, 'foo', 'bar', 'zet');

findAttributeRange(position, '', '', new Model());

getLastTextLine(range, new Model());

injectUnsafeKeystrokesHandling(editor);

new InputCommand(editor, 5).execute();
new InputCommand(editor, 5).execute({ resultRange: range });
new InputCommand(editor, 5).execute({ text: '', range, resultRange: range });

new DeleteCommand(editor, 'forward').execute({ unit: 'character' });
new DeleteCommand(editor, 'forward').execute({ sequence: 4, unit: 'character' });
// $ExpectType Delete
editor.plugins.get('Delete');

// $ExpectType Input
editor.plugins.get('Input');

// $ExpectType TextTransformation
editor.plugins.get('TextTransformation');

// $ExpectType TwoStepCaretMovement
editor.plugins.get('TwoStepCaretMovement');

// $ExpectType Typing
editor.plugins.get('Typing');

// $ExpectType InputCommand | undefined
editor.commands.get('InputCommand');

// $ExpectType DeleteCommand | undefined
editor.commands.get('DeleteCommand');

// $ExpectType boolean
isNonTypingKeystroke(new KeyEventData(new View(new StylesProcessor()), new KeyboardEvent('foo')));
