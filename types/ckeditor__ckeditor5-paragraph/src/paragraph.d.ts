import { Plugin } from '@ckeditor/ckeditor5-core';
import InsertParagraphCommand from './insertparagraphcommand';
import ParagraphCommand from './paragraphcommand';

/**
 * The paragraph feature for the editor.
 *
 * It introduces the `<paragraph>` element in the model which renders as a `<p>` element in the DOM and data.
 *
 * It also brings two editors commands:
 *
 * * The {@link module:paragraph/paragraphcommand~ParagraphCommand `'paragraph'`} command that converts all
 * blocks in the model selection into paragraphs.
 * * The {@link module:paragraph/insertparagraphcommand~InsertParagraphCommand `'insertParagraph'`} command
 * that inserts a new paragraph at a specified location in the model.
 */
export default class Paragraph extends Plugin {
    static readonly pluginName: 'Paragraph';
    static paragraphLikeElements: Set<
        'blockquote' | 'dd' | 'div' | 'dt' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'li' | 'p' | 'td' | 'th'
    >;
    init(): void;
}

declare module '@ckeditor/ckeditor5-core/src/plugincollection' {
    interface Plugins {
        Paragraph: Paragraph;
    }
}

declare module '@ckeditor/ckeditor5-core/src/commandcollection' {
    interface Commands {
        paragraph: ParagraphCommand;
        insertParagraph: InsertParagraphCommand;
    }
}
