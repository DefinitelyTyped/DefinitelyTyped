import { Editor } from '@ckeditor/ckeditor5-core';
import { SourceEditing } from '@ckeditor/ckeditor5-source-editing';
import { formatHtml } from '@ckeditor/ckeditor5-source-editing/src/utils/formathtml';

class MyEditor extends Editor {}
const editor = new MyEditor();

SourceEditing.requires.forEach(Plugin => new Plugin(editor).init());
// $ExpectType boolean
new SourceEditing(editor).isSourceEditingMode;
// @ts-expect-error
new SourceEditing(editor).isSourceEditingMode = true;
// @ts-expect-error
new SourceEditing(editor)._elementReplacer;
// @ts-expect-error
new SourceEditing(editor)._handleReadOnlyMode(true);

// @ts-expect-error
formatHtml('') === true;
// @ts-expect-error
formatHtml(5);
formatHtml('') === '';

// $ExpectType SourceEditing
editor.plugins.get('SourceEditing');
