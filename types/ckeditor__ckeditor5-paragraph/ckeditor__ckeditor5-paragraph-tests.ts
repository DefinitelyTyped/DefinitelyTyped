import { Editor } from '@ckeditor/ckeditor5-core';
import InsertParagraphCommand from '@ckeditor/ckeditor5-paragraph/src/insertparagraphcommand';
import { Paragraph, ParagraphButtonUI } from '@ckeditor/ckeditor5-paragraph';
import ParagraphCommand from '@ckeditor/ckeditor5-paragraph/src/paragraphcommand';

class MyEditor extends Editor {}

const editor: Editor = new MyEditor();
const command = new InsertParagraphCommand(editor);
editor.commands.add('insertparagraphcommand', command);
command.execute({
    position: { top: 0, left: 0, name: '' },
});
command.destroy();

new Paragraph(editor).init();
const set: Set<string> = Paragraph.paragraphLikeElements;

new ParagraphButtonUI(editor).init();

const pc = new ParagraphCommand(editor);
pc.execute();
const bool: boolean = pc.value;
// $ExpectError
pc.value = true;

// $ExpectType Paragraph
editor.plugins.get('Paragraph');

// $ExpectType ParagraphButtonUI
editor.plugins.get('ParagraphButtonUI');
