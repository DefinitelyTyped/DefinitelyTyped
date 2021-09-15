import Batch from "@ckeditor/ckeditor5-engine/src/model/batch";
import BaseCommand from "./basecommand";

export default class UndoCommand extends BaseCommand {
    execute(batch?: Batch): void;
}

declare module '@ckeditor/ckeditor5-core/src/commandcollection' {
    interface Commands {
        UndoCommand: UndoCommand;
    }
}
