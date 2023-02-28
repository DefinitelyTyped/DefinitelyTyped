import { Editor, EditorUI } from '@ckeditor/ckeditor5-core';
import { EditorWithUI } from '@ckeditor/ckeditor5-core/src/editor/editorwithui';
import { Element } from '@ckeditor/ckeditor5-engine';
import Position from '@ckeditor/ckeditor5-engine/src/model/position';
import Selection from '@ckeditor/ckeditor5-engine/src/model/selection';
import { Paragraph, ParagraphButtonUI } from '@ckeditor/ckeditor5-paragraph';
import InsertParagraphCommand from '@ckeditor/ckeditor5-paragraph/src/insertparagraphcommand';
import ParagraphCommand from '@ckeditor/ckeditor5-paragraph/src/paragraphcommand';

class MyEditor extends Editor implements EditorWithUI {
    ui: EditorUI;
}

const editor = new MyEditor();
editor.commands.add('insertParagraph', new InsertParagraphCommand(editor));
editor.commands.get('insertParagraph')?.execute({ position: new Position(new Element('div'), [4]) });
editor.commands.get('insertParagraph')?.destroy();

new Paragraph(editor).init();
// $ExpectType Set<"blockquote" | "dd" | "div" | "dt" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "li" | "p" | "td" | "th">
Paragraph.paragraphLikeElements;

new ParagraphButtonUI(editor).init();

editor.commands.add('paragraph', new ParagraphCommand(editor));
editor.commands.get('paragraph')?.execute();
editor.commands.get('paragraph')?.execute({ selection: new Selection(new Element('div')) });
// $ExpectType boolean
editor.commands.get('paragraph')!.value;
// @ts-expect-error
editor.commands.get('paragraph')!.value = true;

// $ExpectType Paragraph
editor.plugins.get('Paragraph');

// $ExpectType ParagraphButtonUI
editor.plugins.get('ParagraphButtonUI');
