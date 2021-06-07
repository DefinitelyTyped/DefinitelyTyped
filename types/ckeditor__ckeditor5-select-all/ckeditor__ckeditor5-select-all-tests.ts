import { Editor } from '@ckeditor/ckeditor5-core';
import * as SelectAll from '@ckeditor/ckeditor5-select-all';
import SelectAllCommand from '@ckeditor/ckeditor5-select-all/src/selectallcommand';

class MyEditor extends Editor {}
const editor = new MyEditor();

new SelectAll.SelectAll(editor);
SelectAll.SelectAll.requires.map(Plugin => new Plugin(editor).init());

new SelectAll.SelectAllUI(editor).init();

new SelectAll.SelectAllEditing(editor).init();

new SelectAllCommand(editor).execute();
// $ExpectError
new SelectAllCommand(editor).execute(true);
