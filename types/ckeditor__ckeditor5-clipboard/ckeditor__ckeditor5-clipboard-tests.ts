import { Clipboard, ClipboardPipeline, DragDrop, PastePlainText } from '@ckeditor/ckeditor5-clipboard';
import ClipboardObserver from '@ckeditor/ckeditor5-clipboard/src/clipboardobserver';
import normalizeClipboardData from '@ckeditor/ckeditor5-clipboard/src/utils/normalizeclipboarddata';
import plainTextToHTML from '@ckeditor/ckeditor5-clipboard/src/utils/plaintexttohtml';
import viewToPlainText from '@ckeditor/ckeditor5-clipboard/src/utils/viewtoplaintext';
import { Editor } from '@ckeditor/ckeditor5-core';
import { DowncastWriter, StylesProcessor, ViewDocument } from '@ckeditor/ckeditor5-engine';
import View from '@ckeditor/ckeditor5-engine/src/view/view';

class MyEditor extends Editor {}
const editor = new MyEditor();
const viewElement = new DowncastWriter(new ViewDocument(new StylesProcessor())).createEmptyElement('div');

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

new ClipboardObserver(new View(new StylesProcessor())).onDomEvent(new ClipboardEvent(''));

// $ExpectType Clipboard
editor.plugins.get('Clipboard');

// $ExpectType ClipboardPipeline
editor.plugins.get('ClipboardPipeline');

// $ExpectType DragDrop
editor.plugins.get('DragDrop');

// $ExpectType PastePlainText
editor.plugins.get('PastePlainText');
