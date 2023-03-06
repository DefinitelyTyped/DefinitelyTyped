import { Command } from '@ckeditor/ckeditor5-core';
import EventInfo from '@ckeditor/ckeditor5-utils/src/eventinfo';
import { PriorityString } from '@ckeditor/ckeditor5-utils/src/priorities';

/**
 * The horizontal line command.
 *
 * The command is registered by {@link module:horizontal-line/horizontallineediting~HorizontalLineEditing} as `'horizontalLine'`.
 *
 * To insert a horizontal line at the current selection, execute the command:
 *
 *    editor.execute( 'horizontalLine' );
 */
export default class HorizontalLineCommand extends Command {
    /**
     * Executes the command.
     */
    execute(): void;
    on(
        event: 'execute',
        callback: (info: EventInfo<this, 'execute'>) => void,
        options?: {
            priority?: number | PriorityString | undefined;
        },
    ): void;
    once(
        event: 'execute',
        callback: (info: EventInfo<this, 'execute'>) => void,
        options?: {
            priority?: number | PriorityString | undefined;
        },
    ): void;
    off(event: 'execute', callback?: (info: EventInfo<this, 'execute'>) => void): void;
    fire(event: 'execute'): void;
}
