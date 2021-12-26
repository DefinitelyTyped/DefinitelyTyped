import { Command } from '@ckeditor/ckeditor5-core';
import { Range } from '@ckeditor/ckeditor5-engine';

/**
 * The mention command.
 *
 * The command is registered by {@link module:mention/mentionediting~MentionEditing} as `'mention'`.
 *
 * To insert a mention onto a range, execute the command and specify a mention object with a range to replace:
 *
 *    const focus = editor.model.document.selection.focus;
 *
 *    // It will replace one character before the selection focus with the '#1234' text
 *    // with the mention attribute filled with passed attributes.
 *    editor.execute( 'mention', {
 *      marker: '#',
 *      mention: {
 *        id: '#1234',
 *        name: 'Foo',
 *        title: 'Big Foo'
 *      },
 *      range: model.createRange( focus, focus.getShiftedBy( -1 ) )
 *    } );
 *
 *    // It will replace one character before the selection focus with the 'The "Big Foo"' text
 *    // with the mention attribute filled with passed attributes.
 *    editor.execute( 'mention', {
 *      marker: '#',
 *      mention: {
 *        id: '#1234',
 *        name: 'Foo',
 *        title: 'Big Foo'
 *      },
 *      text: 'The "Big Foo"',
 *      range: model.createRange( focus, focus.getShiftedBy( -1 ) )
 *    } );
 */
export default class MentionCommand extends Command {
    refresh(): void;

    /**
     * Executes the command.
     */
    execute(options: {
        mention: string | { id: string; text: string };
        marker: string;
        text?: string;
        range?: Range;
    }): void;
}

declare module '@ckeditor/ckeditor5-core/src/commandcollection' {
    interface Commands {
        MentionCommand: MentionCommand;
    }
}
