import { Clipboard, ClipboardPipeline, DragDrop, PastePlainText } from '@ckeditor/ckeditor5-clipboard';
import ClipboardObserver from '@ckeditor/ckeditor5-clipboard/src/clipboardobserver';
import normalizeClipboardData from '@ckeditor/ckeditor5-clipboard/src/utils/normalizeclipboarddata';
import plainTextToHTML from '@ckeditor/ckeditor5-clipboard/src/utils/plaintexttohtml';
import viewToPlainText from '@ckeditor/ckeditor5-clipboard/src/utils/viewtoplaintext';
import { Editor } from '@ckeditor/ckeditor5-core';
import { DowncastWriter, StylesProcessor, ViewDocument } from '@ckeditor/ckeditor5-engine';
import View from '@ckeditor/ckeditor5-engine/src/view/view';
import CKDataTransfer from '@ckeditor/ckeditor5-clipboard/src/datatransfer';

class MyEditor extends Editor {}
const editor = new MyEditor();
const viewElement = new DowncastWriter(new ViewDocument(new StylesProcessor())).createEmptyElement('div');
const view = new View(new StylesProcessor());

new Clipboard(editor);
Clipboard.requires.map(Plugin => new Plugin(editor).init());

new DragDrop(editor).init();
new DragDrop(editor).destroy();
DragDrop.requires.map(Plugin => new Plugin(editor).init());

PastePlainText.requires.map(Plugin => new Plugin(editor).init());
new PastePlainText(editor).init();

ClipboardPipeline.requires == null;
new ClipboardPipeline(editor).init();

plainTextToHTML(plainTextToHTML(''));

normalizeClipboardData(plainTextToHTML(''));

plainTextToHTML(viewToPlainText(viewElement));

new ClipboardObserver(view).onDomEvent(new ClipboardEvent(''));
new ClipboardObserver(view).onDomEvent(new DragEvent(''));
// @ts-expect-error
new ClipboardObserver(view).onDomEvent(new MouseEvent(''));

// $ExpectType ClipboardObserver
view.getObserver(ClipboardObserver);

// $ExpectType Clipboard
editor.plugins.get('Clipboard');

// $ExpectType ClipboardPipeline
editor.plugins.get('ClipboardPipeline');

// $ExpectType DragDrop
editor.plugins.get('DragDrop');

// $ExpectType PastePlainText
editor.plugins.get('PastePlainText');

// $ExpectType (File | null)[]
new CKDataTransfer(new DataTransfer()).files;
// @ts-expect-error
new CKDataTransfer(new DataTransfer()).effectAllowed = '';
new CKDataTransfer(new DataTransfer()).effectAllowed = 'none';
// $ExpectType readonly string[]
new CKDataTransfer(new DataTransfer()).types;
// $ExpectType void
new CKDataTransfer(new DataTransfer()).setData('', '');
// $ExpectType string
new CKDataTransfer(new DataTransfer()).getData('');
