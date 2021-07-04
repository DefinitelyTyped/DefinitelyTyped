import { Command } from '@ckeditor/ckeditor5-core';
import { Element } from '@ckeditor/ckeditor5-engine';

export default class CheckTodoListCommand extends Command {
    value: Element[];
    refresh(): void;
    execute(options?: { forceValue?: boolean }): void;
}
