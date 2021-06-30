import { Command } from "@ckeditor/ckeditor5-core";

export default class BlockQuoteCommand extends Command {
    value: boolean;
    refresh(): void;
    execute(options?: { forceValue?: boolean }): void;
}
