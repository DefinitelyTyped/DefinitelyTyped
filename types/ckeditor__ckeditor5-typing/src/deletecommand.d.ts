import { Command, Editor } from "@ckeditor/ckeditor5-core";
import ChangeBuffer from "./utils/changebuffer";

export default class DeleteCommand extends Command {
    constructor(editor: Editor, direction: "forward" | "backward");
    readonly direction: "forward" | "backward";
    readonly buffer: ChangeBuffer;
    execute(options?: { unit?: "character"; sequence?: number }): void;
}
