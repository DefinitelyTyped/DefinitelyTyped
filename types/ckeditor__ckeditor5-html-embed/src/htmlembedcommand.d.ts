import { Command } from '@ckeditor/ckeditor5-core';

/**
 * The insert HTML embed element command.
 *
 * The command is registered by {@link module:html-embed/htmlembedediting~HtmlEmbedEditing} as `'htmlEmbed'`.
 *
 * To insert an empty HTML embed element at the current selection, execute the command:
 *
 *    editor.execute( 'htmlEmbed' );
 *
 * You can specify the initial content of a new HTML embed in the argument:
 *
 *    editor.execute( 'htmlEmbed', '<b>Initial content.</b>' );
 *
 * To update the content of the HTML embed, select it in the model and pass the content in the argument:
 *
 *    editor.execute( 'htmlEmbed', '<b>New content of an existing embed.</b>' );
 */
export default class HtmlEmbedCommand extends Command {
    refresh(): void;

    /**
     * Executes the command, which either:
     *
     * * creates and inserts a new HTML embed element if none was selected,
     * * updates the content of the HTML embed if one was selected.
     */
    execute(value?: string): void;
}

declare module '@ckeditor/ckeditor5-core/src/commandcollection' {
    interface Commands {
        HtmlEmbedCommand: HtmlEmbedCommand;
    }
}
