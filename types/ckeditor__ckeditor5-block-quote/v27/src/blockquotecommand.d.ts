import { Command } from "@ckeditor/ckeditor5-core";

export default class BlockQuoteCommand extends Command {
    value: boolean;
    refresh(): void;
    execute(options?: { forceValue?: boolean | undefined }): void;
}

declare module '@ckeditor/ckeditor5-core/src/commandcollection' {
    interface Commands {
        BlockQuoteCommand: BlockQuoteCommand;
    }
}
