import { Command } from '@ckeditor/ckeditor5-core';
import Position from '@ckeditor/ckeditor5-engine/src/model/position';

/**
 * The insert paragraph command. It inserts a new paragraph at a specific
 * {@link module:engine/model/position~Position document position}.
 *
 *    // Insert a new paragraph before an element in the document.
 *    editor.execute( 'insertParagraph', {
 *      position: editor.model.createPositionBefore( element )
 *    } );
 *
 * If a paragraph is disallowed in the context of the specific position, the command
 * will attempt to split position ancestors to find a place where it is possible
 * to insert a paragraph.
 *
 * **Note**: This command moves the selection to the inserted paragraph.
 */
export default class InsertParagraphCommand extends Command {
    /**
     * Executes the command.
     */
    execute(options: { position: Position }): void;
}
