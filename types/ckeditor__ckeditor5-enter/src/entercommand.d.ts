import Command from "@ckeditor/ckeditor5-core/src/command";

export default class EnterCommand extends Command {
    execute(): void;
}

declare module '@ckeditor/ckeditor5-core/src/commandcollection' {
    interface Commands {
        EnterCommand: EnterCommand;
    }
}
