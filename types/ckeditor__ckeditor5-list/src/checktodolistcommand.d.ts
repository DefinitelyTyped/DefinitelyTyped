import { Command } from '@ckeditor/ckeditor5-core';
import { Element } from '@ckeditor/ckeditor5-engine';

/**
 * The check to-do command.
 *
 * The command is registered by the {@link module:list/todolistediting~TodoListEditing} as
 * the `checkTodoList` editor command and it is also available via aliased `todoListCheck` name.
 */
export default class CheckTodoListCommand extends Command {
    /**
     * A list of to-do list items selected by the {@link module:engine/model/selection~Selection}.
     */
    get value(): Element[];
    protected set value(value: Element[]);

    /**
     * Updates the command's {@link #value} and {@link #isEnabled} properties based on the current selection.
     */
    refresh(): void;

    /**
     * Executes the command.
     */
    execute(options?: { forceValue?: boolean | undefined }): void;
}

declare module '@ckeditor/ckeditor5-core/src/commandcollection' {
    interface Commands {
        CheckTodoListCommand: CheckTodoListCommand;
    }
}
