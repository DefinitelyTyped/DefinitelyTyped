import { Command } from '@ckeditor/ckeditor5-core';
import { AlignmentFormat } from './alignmentediting';

export default class AlignmentCommand extends Command {
    value: AlignmentFormat['name'];
    /**
     * Executes the command. Applies the alignment `value` to the selected blocks.
     * If no `value` is passed, the `value` is the default one or it is equal to the currently selected block"s alignment attribute,
     * the command will remove the attribute from the selected blocks.
     */
    execute(options?: { value?: AlignmentCommand['value'] }): void;
}

declare module '@ckeditor/ckeditor5-core/src/commandcollection' {
    interface Commands {
        AlignmentCommand: AlignmentCommand;
    }
}
