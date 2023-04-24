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
// @ts-expect-error
new SelectAllCommand(editor).execute(true);

// $ExpectType false
new SelectAllCommand(editor).affectsData;

// $ExpectType SelectAll
editor.plugins.get('SelectAll');

// $ExpectType SelectAllEditing
editor.plugins.get('SelectAllEditing');

// $ExpectType SelectAllUI
editor.plugins.get('SelectAllUI');

// $ExpectType SelectAllCommand | undefined
editor.commands.get('SelectAllCommand');
