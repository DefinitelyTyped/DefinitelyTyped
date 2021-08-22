import { Editor } from '@ckeditor/ckeditor5-core';
import { HorizontalLine, HorizontalLineEditing, HorizontalLineUI } from '@ckeditor/ckeditor5-horizontal-line';
import HorizontalLineCommand from '@ckeditor/ckeditor5-horizontal-line/src/horizontallinecommand';

class MyEditor extends Editor {}
const editor = new MyEditor();

new HorizontalLine(editor);
HorizontalLine.requires.map(Plugin => new Plugin(editor).init());

new HorizontalLineUI(editor);
new HorizontalLineEditing(editor);

new HorizontalLineCommand(editor).execute();
new HorizontalLineCommand(editor).refresh();
