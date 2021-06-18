import Batch from "@ckeditor/ckeditor5-engine/src/model/batch";
import BaseCommand from "./basecommand";

export default class UndoCommand extends BaseCommand {
    execute(batch?: Batch): void;
}
