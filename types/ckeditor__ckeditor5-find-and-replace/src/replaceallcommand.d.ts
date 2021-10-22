import { Command, Editor } from '@ckeditor/ckeditor5-core';
import { FindAndReplaceState } from './findandreplaceediting';

/**
 * The replace all command.
 */
export default class ReplaceAllCommand extends Command {
    isEnabled: true;
    /**
     * Creates a new `ReplaceCommand` instance.
     */
    constructor(editor: Editor, state: FindAndReplaceState);

    /**
     * Replaces all the occurrences of `textToReplace` with a given `newText` string.
     *
     * ```js
     *    replaceAllCommand.execute( 'replaceAll', 'new text replacement', 'text to replace' );
     * ```
     *
     * Alternatively you can call it from editor instance:
     *
     * ```js
     *    editor.execute( 'replaceAll', 'new text', 'old text' );
     * ```
     */
    execute(newText: string, textToReplace: string | FindAndReplaceState['results']): void;
}

declare module '@ckeditor/ckeditor5-core/src/commandcollection' {
    interface Commands {
        ReplaceAllCommand: ReplaceAllCommand;
    }
}
