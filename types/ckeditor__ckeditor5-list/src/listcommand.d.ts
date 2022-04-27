import { Command, Editor } from '@ckeditor/ckeditor5-core';

/**
 * The list command. It is used by the {@link module:list/list~List list feature}.
 */
export default class ListCommand extends Command {
    /**
     * Creates an instance of the command.
     */
    constructor(editor: Editor, type: 'numbered' | 'bulleted');

    /**
     * The type of the list created by the command.
     */
    readonly type: 'numbered' | 'bulleted';

    /**
     * A flag indicating whether the command is active, which means that the selection starts in a list of the same type.
     */
    get value(): boolean;
    protected set value(value: boolean);

    /**
     * Executes the list command.
     */
    execute(options?: { forceValue?: boolean | undefined }): void;
}

declare module '@ckeditor/ckeditor5-core/src/commandcollection' {
    interface Commands {
        ListCommand: ListCommand;
    }
}
