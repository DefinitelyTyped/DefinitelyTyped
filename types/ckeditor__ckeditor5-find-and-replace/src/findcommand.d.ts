import { Command, Editor } from '@ckeditor/ckeditor5-core';
import FindAndReplaceEditing, { FindAndReplaceState } from './findandreplaceediting';
/**
 * The find command. It is used by the {@link module:find-and-replace/findandreplace~FindAndReplace find and replace feature}.
 */
export default class FindCommand extends Command {
    isEnabled: true;
    state: FindAndReplaceState;
    /**
     * Creates a new `FindCommand` instance.
     */
    constructor(editor: Editor, state: FindAndReplaceState);
    /**
     * Executes the command.
     */
    execute(
        callbackOrText: Parameters<FindAndReplaceEditing['find']>[0],
        options?: { matchCase?: boolean; wholeWords?: boolean },
    ): {
        results: FindAndReplaceState['results'];
        findCallback: (
            str: string,
            options?: { matchCase?: boolean; wholeWords?: boolean },
        ) => (query: { text: string }) => Array<{ label: [string]; start: number; end: number }>;
    };
}

declare module '@ckeditor/ckeditor5-core/src/commandcollection' {
    interface Commands {
        FindCommand: FindCommand;
    }
}
