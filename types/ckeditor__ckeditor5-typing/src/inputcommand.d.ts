import { Command, Editor } from "@ckeditor/ckeditor5-core";
import { Range } from "@ckeditor/ckeditor5-engine";
import ChangeBuffer from "./utils/changebuffer";

export default class InputCommand extends Command {
    constructor(editor: Editor, undoStepSize: number);
    readonly buffer: ChangeBuffer;
    destroy(): void;
    execute(options?: { text?: string; range?: Range; resultRange: Range }): void;
}

declare module '@ckeditor/ckeditor5-core/src/commandcollection' {
    interface Commands {
        InputCommand: InputCommand;
    }
}
