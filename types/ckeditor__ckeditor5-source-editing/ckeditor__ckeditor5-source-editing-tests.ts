import { Editor } from '@ckeditor/ckeditor5-core';
import { SourceEditing } from '@ckeditor/ckeditor5-source-editing';
import { formatHtml } from '@ckeditor/ckeditor5-source-editing/src/utils/formathtml';

class MyEditor extends Editor {}
const editor = new MyEditor();

SourceEditing.requires.forEach(Plugin => new Plugin(editor).init());
// $ExpectType boolean
new SourceEditing(editor).isSourceEditingMode;
// $ExpectError
new SourceEditing(editor).isSourceEditingMode = true;
// $ExpectError
new SourceEditing(editor)._elementReplacer;
// $ExpectError
new SourceEditing(editor)._handleReadOnlyMode(true);

// $ExpectError
formatHtml('') === true;
// $ExpectError
formatHtml(5);
formatHtml('') === '';

// $ExpectType SourceEditing
editor.plugins.get('SourceEditing');
