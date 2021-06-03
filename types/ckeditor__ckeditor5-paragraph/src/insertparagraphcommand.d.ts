import { Command } from '@ckeditor/ckeditor5-core';
import { Position } from '@ckeditor/ckeditor5-utils/src/dom/position';

export default class InsertParagraphCommand extends Command {
    execute(options: { position: Position }): void;
}
