import { Command } from '@ckeditor/ckeditor5-core';
import { AlignmentFormat } from './alignmentediting';

/**
 * The alignment command plugin.
 */
export default class AlignmentCommand extends Command {
    /**
     * A value of the current block's alignment.
     */
    get value(): AlignmentFormat['name'];
    protected set value(value: AlignmentFormat['name']);

    /**
     * Executes the command. Applies the alignment `value` to the selected blocks.
     * If no `value` is passed, the `value` is the default one or it is equal to the currently selected block"s alignment attribute,
     * the command will remove the attribute from the selected blocks.
     */
    execute(options?: { value?: AlignmentCommand['value'] }): void;
}
