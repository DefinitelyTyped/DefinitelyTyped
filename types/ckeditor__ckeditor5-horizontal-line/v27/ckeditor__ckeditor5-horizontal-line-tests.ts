import { Editor } from '@ckeditor/ckeditor5-core';
import HL from '@ckeditor/ckeditor5-horizontal-line';
import HorizontalLineCommand from '@ckeditor/ckeditor5-horizontal-line/src/horizontallinecommand';

class MyEditor extends Editor {}
const editor = new MyEditor();

new HL.HorizontalLine(editor);
HL.HorizontalLine.requires.map(Plugin => new Plugin(editor).init());

new HL.HorizontalLineUI(editor);
new HL.HorizontalLineEditing(editor);

new HorizontalLineCommand(editor).execute();
new HorizontalLineCommand(editor).refresh();

// $ExpectType HorizontalLine
editor.plugins.get('HorizontalLine');

// $ExpectType HorizontalLineEditing
editor.plugins.get('HorizontalLineEditing');

// $ExpectType HorizontalLineUI
editor.plugins.get('HorizontalLineUI');

// $ExpectType HorizontalLineCommand | undefined
editor.commands.get('HorizontalLineCommand');
