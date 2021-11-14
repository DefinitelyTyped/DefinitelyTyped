import { Editor } from '@ckeditor/ckeditor5-core';
import { StylesProcessor } from '@ckeditor/ckeditor5-engine';
import Document from '@ckeditor/ckeditor5-engine/src/view/document';
import DocumentFragment from '@ckeditor/ckeditor5-engine/src/view/documentfragment';
import { Markdown } from '@ckeditor/ckeditor5-markdown-gfm';
import GFMDataProcessor from '@ckeditor/ckeditor5-markdown-gfm/src/gfmdataprocessor';
import html2markdown from '@ckeditor/ckeditor5-markdown-gfm/src/html2markdown/html2markdown';
import markdown2html from '@ckeditor/ckeditor5-markdown-gfm/src/markdown2html/markdown2html';

class MyEditor extends Editor {}
const editor = new MyEditor();

new Markdown(editor);

new GFMDataProcessor(new Document(new StylesProcessor())).toData(new DocumentFragment()).startsWith('foo');
new GFMDataProcessor(new Document(new StylesProcessor())).toView('') instanceof DocumentFragment;
new GFMDataProcessor(new Document(new StylesProcessor())).keepHtml('');
new GFMDataProcessor(new Document(new StylesProcessor())).useFillerType();
new GFMDataProcessor(new Document(new StylesProcessor())).registerRawContentMatcher('');
new GFMDataProcessor(new Document(new StylesProcessor())).registerRawContentMatcher(() => undefined);
new GFMDataProcessor(new Document(new StylesProcessor())).registerRawContentMatcher({ name: 'foo' });

html2markdown('').startsWith('');

markdown2html('').startsWith('');

// $ExpectType Markdown
editor.plugins.get('Markdown');
