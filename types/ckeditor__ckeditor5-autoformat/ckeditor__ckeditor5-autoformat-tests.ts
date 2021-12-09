import { Autoformat } from '@ckeditor/ckeditor5-autoformat';
import blockAutoformatEditing from '@ckeditor/ckeditor5-autoformat/src/blockautoformatediting';
import inlineAutoformatEditing from '@ckeditor/ckeditor5-autoformat/src/inlineautoformatediting';
import { Editor } from '@ckeditor/ckeditor5-core';

class MyEditor extends Editor {}
const editor = new MyEditor();

const autoformat = new Autoformat(new MyEditor());
autoformat.afterInit();

blockAutoformatEditing(new MyEditor(), autoformat, /foo/, 'foo');
blockAutoformatEditing(new MyEditor(), autoformat, /foo/, arg => {
    arg.match; // $ExpectType RegExpExecArray
});

inlineAutoformatEditing(new MyEditor(), autoformat, /foo/, writer => {
    writer.createText('foo');
    return false;
});

// $ExpectType Autoformat
editor.plugins.get('Autoformat');
