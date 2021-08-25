import { Command, Editor } from "@ckeditor/ckeditor5-core";

export default class HeadingCommand<E extends string[] | Readonly<string[]>> extends Command {
    constructor(editor: Editor, modelElements: E);
    readonly modelElements: E;
    refresh(): void;
    execute(options: { value: string }): void;
}
