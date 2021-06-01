import { Editor } from '@ckeditor/ckeditor5-core';
import Clipboard from '@ckeditor/ckeditor5-clipboard';
import plainTextToHTML from '@ckeditor/ckeditor5-clipboard/src/utils/plaintexttohtml';
import normalizeClipboardData from '@ckeditor/ckeditor5-clipboard/src/utils/normalizeclipboarddata';
import viewToPlainText from '@ckeditor/ckeditor5-clipboard/src/utils/viewtoplaintext';
import EmptyElement from '@ckeditor/ckeditor5-engine/src/view/emptyelement';

class MyEditor extends Editor {}
const editor = new MyEditor();

new Clipboard.Clipboard(editor);
Clipboard.Clipboard.requires.map(Plugin => new Plugin(editor).init());

new Clipboard.DragDrop(editor).init();
new Clipboard.DragDrop(editor).destroy();
Clipboard.DragDrop.requires.map(Plugin => new Plugin(editor).init());

Clipboard.PastePlainText.requires.map(Plugin => new Plugin(editor).init());
new Clipboard.PastePlainText(editor).init();

Clipboard.ClipboardPipeline.requires == null;
new Clipboard.ClipboardPipeline(editor).init();

plainTextToHTML(plainTextToHTML(''));

normalizeClipboardData(plainTextToHTML(''));

plainTextToHTML(viewToPlainText(new EmptyElement()));
