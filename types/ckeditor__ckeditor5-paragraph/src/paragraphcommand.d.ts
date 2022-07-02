import { Command } from '@ckeditor/ckeditor5-core';
import { DocumentSelection } from '@ckeditor/ckeditor5-engine';
import Selection from '@ckeditor/ckeditor5-engine/src/model/selection';

/**
 * The paragraph command.
 */
export default class ParagraphCommand extends Command {
    /**
     * The value of the command. Indicates whether the selection start is placed in a paragraph.
     */
    get value(): boolean;
    protected set value(value: boolean);

    /**
     * Executes the command. All the blocks (see {@link module:engine/model/schema~Schema}) in the selection
     * will be turned to paragraphs.
     */
    execute(options?: { selection?: Selection | DocumentSelection | undefined }): void;
}
