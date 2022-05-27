import { Command, Editor } from '@ckeditor/ckeditor5-core';
import { Marker } from '@ckeditor/ckeditor5-engine/src/model/markercollection';
import FindAndReplaceState from './findandreplacestate';

/**
 * The replace command. It is used by the {@link module:find-and-replace/findandreplace~FindAndReplace find and replace feature}.
 */
export default class ReplaceCommand extends Command {
    /**
     * The replace command is always enabled.
     */
    get isEnabled(): true;
    /**
     * Creates a new `ReplaceCommand` instance.
     */
    constructor(editor: Editor, state: FindAndReplaceState);
    /**
     * Replace a given find result by a string or a callback.
     */
    execute(replacementText: string, result: { marker: Marker }): void;
}

declare module '@ckeditor/ckeditor5-core/src/commandcollection' {
    interface Commands {
        ReplaceCommand: ReplaceCommand;
    }
}
