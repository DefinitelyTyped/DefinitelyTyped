import { Command, Editor } from '@ckeditor/ckeditor5-core';
import { ImageConfig } from '../image';
import { ImageStyleFormat } from './imagestyleediting';

export default class ImageStyleCommand extends Command {
    constructor(editor: Editor, styles: ImageStyleFormat[]);
    readonly defaultStyle: boolean;
    readonly styles: ImageStyleFormat[];
    refresh(): void;
    execute(options: { value: ImageConfig['styles'] }): void;
}

declare module '@ckeditor/ckeditor5-core/src/commandcollection' {
    interface Commands {
        ImageStyleCommand: ImageStyleCommand;
    }
}
