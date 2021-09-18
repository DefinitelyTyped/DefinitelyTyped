import { Command } from "@ckeditor/ckeditor5-core";

export default class CKFinderCommand extends Command {
    execute(): void;
}

declare module '@ckeditor/ckeditor5-core/src/commandcollection' {
    interface Commands {
        CKFinderCommand: CKFinderCommand;
    }
}
