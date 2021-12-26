import { Command } from "@ckeditor/ckeditor5-core";
import Batch from "@ckeditor/ckeditor5-engine/src/model/batch";

export default abstract class BaseCommand extends Command {
    refresh(): void;
    addBatch(batch: Batch): void;
    clearStack(): void;
}
