import Code from '@ckeditor/ckeditor5-code-block';
import CodeCommand from '@ckeditor/ckeditor5-code-block/src/codeblockcommand';
import * as converters from '@ckeditor/ckeditor5-code-block/src/converters';
import IndentCodeBlockCommand from '@ckeditor/ckeditor5-code-block/src/indentcodeblockcommand';
import OutdentCodeBlockCommand from '@ckeditor/ckeditor5-code-block/src/outdentcodeblockcommand';
import * as utils from '@ckeditor/ckeditor5-code-block/src/utils';
import { Editor } from '@ckeditor/ckeditor5-core';
import { Model, StylesProcessor, UpcastWriter } from '@ckeditor/ckeditor5-engine';
import Selection from '@ckeditor/ckeditor5-engine/src/model/selection';
import Writer from '@ckeditor/ckeditor5-engine/src/model/writer';
import Document from '@ckeditor/ckeditor5-engine/src/view/document';
import View from '@ckeditor/ckeditor5-engine/src/view/view';

class MyEditor extends Editor {}
const editor = new MyEditor();

new Code.CodeBlock(editor);
Code.CodeBlock.requires.map(Plugin => new Plugin(editor).init());

new Code.CodeBlockUi(editor).init();

new Code.CodeBlockEditing(editor).init();

new CodeCommand(editor).execute();
new CodeCommand(editor).refresh();

converters.modelToViewCodeBlockInsertion(new Model(), [{ language: 'php', label: 'PHP' }], true);
converters.modelToDataViewSoftBreakInsertion(new Model());
converters.dataViewToModelCodeBlockInsertion(new View(new StylesProcessor()), [{ language: 'php', label: 'PHP' }]);
converters.dataViewToModelTextNewlinesInsertion();

utils.getLeadingWhiteSpaces(new Writer().createText('')).startsWith('foo');
utils.getPropertyAssociation([{ language: 'php', label: 'PHP' }], '', '').foo = 'bar';
utils.getIndentOutdentPositions(new Model()).map(pos => pos.stickiness.startsWith('foo'));
utils.isModelSelectionInCodeBlock(new Selection(null));
utils.rawSnippetTextToViewDocumentFragment(new UpcastWriter(new Document(new StylesProcessor())), '');

new IndentCodeBlockCommand(editor).execute();
new IndentCodeBlockCommand(editor).refresh();

new OutdentCodeBlockCommand(editor).execute();
new OutdentCodeBlockCommand(editor).refresh();
