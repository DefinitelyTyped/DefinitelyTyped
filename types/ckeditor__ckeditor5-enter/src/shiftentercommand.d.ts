import Command from "@ckeditor/ckeditor5-core/src/command";

export default class ShiftEnterCommand extends Command {
    execute(): void;
    refresh(): void;
}

declare module '@ckeditor/ckeditor5-core/src/commandcollection' {
    interface Commands {
        ShiftEnterCommand: ShiftEnterCommand;
    }
}
