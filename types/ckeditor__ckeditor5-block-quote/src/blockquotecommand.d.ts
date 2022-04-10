import { Command } from '@ckeditor/ckeditor5-core';

/**
 * The block quote command plugin.
 */
export default class BlockQuoteCommand extends Command {
    /**
     * Whether the selection starts in a block quote.
     */
    get value(): boolean;
    protected set value(value: boolean);

    /**
     * Executes the command. When the command {@link #value is on}, all top-most block quotes within
     * the selection will be removed. If it is off, all selected blocks will be wrapped with
     * a block quote.
     */
    execute(options?: { forceValue?: boolean | undefined }): void;
}

declare module '@ckeditor/ckeditor5-core/src/commandcollection' {
    interface Commands {
        BlockQuoteCommand: BlockQuoteCommand;
    }
}
