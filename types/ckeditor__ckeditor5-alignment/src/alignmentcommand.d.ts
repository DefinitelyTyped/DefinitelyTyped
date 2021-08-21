import { Command } from "@ckeditor/ckeditor5-core";
import { AlignmentFormat } from "./alignmentediting";
/**
 * The alignment command plugin.
 */
export default class AlignmentCommand extends Command {
    value?: AlignmentFormat["name"] | boolean;
    refresh(): void;
    /**
     * Executes the command. Applies the alignment `value` to the selected blocks.
     * If no `value` is passed, the `value` is the default one or it is equal to the currently selected block"s alignment attribute,
     * the command will remove the attribute from the selected blocks.
     * @fires execute
     */
    execute(options?: { value?: AlignmentCommand["value"] }): void;
    /**
     * Checks whether a block can have alignment set.
     */
    private _canBeAligned;
}
