import CKDataTransfer from '@ckeditor/ckeditor5-clipboard/src/datatransfer';
import { Editor } from '@ckeditor/ckeditor5-core';
import { StylesProcessor, UpcastWriter } from '@ckeditor/ckeditor5-engine';
import Document from '@ckeditor/ckeditor5-engine/src/view/document';
import DocumentFragment from '@ckeditor/ckeditor5-engine/src/view/documentfragment';
import PFO from '@ckeditor/ckeditor5-paste-from-office';
import MSWordNormalizer from '@ckeditor/ckeditor5-paste-from-office/src/normalizers/mswordnormalizer';
import GoogleDocNormalizer from '@ckeditor/ckeditor5-paste-from-office/src/normalizers/googledocsnormalizer';
import { replaceImagesSourceWithBase64 } from '@ckeditor/ckeditor5-paste-from-office/src/filters/image';
import {
    transformListItemLikeElementsIntoLists,
    unwrapParagraphInListItem,
} from '@ckeditor/ckeditor5-paste-from-office/src/filters/list';
import { parseHtml } from '@ckeditor/ckeditor5-paste-from-office/src/filters/parse';
import { normalizeSpacing, normalizeSpacerunSpans } from '@ckeditor/ckeditor5-paste-from-office/src/filters/space';
import removeBoldWrapper from '@ckeditor/ckeditor5-paste-from-office/src/filters/removeboldwrapper';

class MyEditor extends Editor {}
const editor = new MyEditor();

PFO.PasteFromOffice.requires.map(Plugin => new Plugin(editor).init());
new PFO.PasteFromOffice(editor).init();

let doc: Document = new MSWordNormalizer(new Document(new StylesProcessor())).document;
new MSWordNormalizer(new Document(new StylesProcessor())).isActive('foo');
new MSWordNormalizer(new Document(new StylesProcessor())).execute({
    content: new DocumentFragment(),
    dataTransfer: new CKDataTransfer(new DataTransfer()),
    method: 'paste',
});

doc = new GoogleDocNormalizer(new Document(new StylesProcessor())).document;
let documentFragment: DocumentFragment = new DocumentFragment();
new GoogleDocNormalizer(new Document(new StylesProcessor())).isActive('foo');
new GoogleDocNormalizer(new Document(new StylesProcessor())).execute({
    content: documentFragment,
    dataTransfer: new CKDataTransfer(new DataTransfer()),
    method: 'paste',
});

replaceImagesSourceWithBase64(new DocumentFragment(), '');

unwrapParagraphInListItem(new DocumentFragment(), new UpcastWriter(doc));
transformListItemLikeElementsIntoLists(new DocumentFragment(), '');

documentFragment = parseHtml('', new StylesProcessor()).body;
parseHtml('', new StylesProcessor()).styles[0].insertRule('');
parseHtml('', new StylesProcessor()).bodyString.startsWith('');
parseHtml('', new StylesProcessor()).stylesString.localeCompare('');

normalizeSpacing('').startsWith('');
normalizeSpacerunSpans(document);

removeBoldWrapper(documentFragment, new UpcastWriter(doc));
