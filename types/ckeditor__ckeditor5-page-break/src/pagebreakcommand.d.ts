import { Command } from '@ckeditor/ckeditor5-core';
/**
 * The page break command.
 *
 * The command is registered by {@link module:page-break/pagebreakediting~PageBreakEditing} as `'pageBreak'`.
 *
 * To insert a page break at the current selection, execute the command:
 *
 *    editor.execute( 'pageBreak' );
 */
export default class PageBreakCommand extends Command {
    refresh(): void;
    /**
     * Executes the command.
     */
    execute(): void;
}

declare module '@ckeditor/ckeditor5-core/src/commandcollection' {
    interface Commands {
        PageBreakCommand: PageBreakCommand;
    }
}
