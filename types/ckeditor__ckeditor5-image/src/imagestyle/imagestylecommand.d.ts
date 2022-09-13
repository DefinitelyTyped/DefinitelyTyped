import { Command, Editor } from '@ckeditor/ckeditor5-core';
import { Element } from '@ckeditor/ckeditor5-engine';
import { ImageStyleOptionDefinition } from '../imagestyle';

export default class ImageStyleCommand extends Command {
    constructor(editor: Editor, styles: ImageStyleOptionDefinition[]);
    refresh(): void;
    execute(options?: { value: ImageStyleOptionDefinition['name'] }): void;
    shouldConvertImageType(requestedStyle: ImageStyleOptionDefinition, imageElement: Element): boolean;
}

declare module '@ckeditor/ckeditor5-core/src/commandcollection' {
    interface Commands {
        ImageStyleCommand: ImageStyleCommand;
    }
}
