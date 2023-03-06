import { Command } from '@ckeditor/ckeditor5-core';

/**
 * The toggle table caption command.
 *
 * This command is registered by {@link module:table/tablecaption/tablecaptionediting~TableCaptionEditing} as the
 * `'toggleTableCaption'` editor command.
 *
 * Executing this command:
 *
 * * either adds or removes the table caption of a selected table (depending on whether the caption is present or not),
 * * removes the table caption if the selection is anchored in one.
 *
 *    // Toggle the presence of the caption.
 *    editor.execute( 'toggleTableCaption' );
 *
 * **Note**: You can move the selection to the caption right away as it shows up upon executing this command by using
 * the `focusCaptionOnShow` option:
 *
 *    editor.execute( 'toggleTableCaption', { focusCaptionOnShow: true } );
 */
export default class ToggleTableCaptionCommand extends Command {
    /**
     * Executes the command.
     *
     *    editor.execute( 'toggleTableCaption' );
     */
    execute(options?: { focusCaptionOnShow?: boolean }): void;
}

declare module '@ckeditor/ckeditor5-core/src/plugincollection' {
    interface Plugins {
        ToggleTableCaptionCommand: ToggleTableCaptionCommand;
    }
}
