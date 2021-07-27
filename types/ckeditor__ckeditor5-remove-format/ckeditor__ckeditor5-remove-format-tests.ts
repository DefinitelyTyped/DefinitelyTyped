import { Editor } from '@ckeditor/ckeditor5-core';
import { RemoveFormat, RemoveFormatUI, RemoveFormatEditing } from '@ckeditor/ckeditor5-remove-format';
import RemoveFormatCommand from '@ckeditor/ckeditor5-remove-format/src/removeformatcommand';

class MyEditor extends Editor {}
const editor = new MyEditor();

RemoveFormat.requires.forEach(Plugin => new Plugin(editor).init());
[RemoveFormatUI, RemoveFormatEditing].forEach(Plugin => new Plugin(editor).init());

new RemoveFormatCommand(editor).refresh();
new RemoveFormatCommand(editor).execute();
