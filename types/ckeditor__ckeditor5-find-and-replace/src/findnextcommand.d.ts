import { Command, Editor } from '@ckeditor/ckeditor5-core';
import FindAndReplaceState from './findandreplacestate';

/**
 * The find next command. Moves the highlight to the next search result.
 */
export default class FindNextCommand extends Command {
    /**
     * Creates a new `FindNextCommand` instance.
     */
    constructor(editor: Editor, state: FindAndReplaceState);
    readonly affectsData: false;
    refresh(): void;
    execute(): void;
}

declare module '@ckeditor/ckeditor5-core/src/commandcollection' {
    interface Commands {
        FindNextCommand: FindNextCommand;
    }
}
