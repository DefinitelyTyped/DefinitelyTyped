import BaseCommand from "./basecommand";

export default class RedoCommand extends BaseCommand {
    execute(): void;
}

declare module '@ckeditor/ckeditor5-core/src/commandcollection' {
    interface Commands {
        RedoCommand: RedoCommand;
    }
}
