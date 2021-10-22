import { Model } from "@ckeditor/ckeditor5-engine";
import Batch from "@ckeditor/ckeditor5-engine/src/model/batch";

export default class ChangeBuffer {
    constructor(model: Model, limit?: number);
    readonly model: Model;
    size: number;
    readonly limit: number;
    isLocked: boolean;
    readonly batch: Batch;
    input(changeCount: number): void;
    lock(): void;
    unlock(): void;
    destroy(): void;
}
