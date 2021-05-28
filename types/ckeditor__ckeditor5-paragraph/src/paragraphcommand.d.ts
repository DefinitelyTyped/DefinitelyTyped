import { Command } from '@ckeditor/ckeditor5-core';
import { DocumentSelection } from '@ckeditor/ckeditor5-engine';
import Selection from '@ckeditor/ckeditor5-engine/src/model/selection';

export default class ParagraphCommand extends Command {
    readonly value: boolean;
    refresh(): void;
    execute(options?: { selection?: Selection | DocumentSelection }): void;
}
