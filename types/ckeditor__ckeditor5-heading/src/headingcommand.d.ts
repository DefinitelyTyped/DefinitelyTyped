import { Command, Editor } from "@ckeditor/ckeditor5-core";

export default class HeadingCommand extends Command {
    constructor(editor: Editor, modelElements: string[]);
    refresh(): void;
    execute(options: { value: string }): void;
}

declare module '@ckeditor/ckeditor5-core/src/commandcollection' {
    interface Commands {
        HeadingCommand: HeadingCommand;
    }
}
