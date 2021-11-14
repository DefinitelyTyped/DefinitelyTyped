import { Command, Editor } from '@ckeditor/ckeditor5-core';
import Element from '@ckeditor/ckeditor5-engine/src/view/element';

export default class ImageTypeCommand extends Command {
    constructor(editor: Editor, modelElementName: 'imageBlock' | 'imageInline');
    refresh(): void;
    execute(): {
        oldElement: Element;
        newElement: Element;
    } | null;
}

declare module '@ckeditor/ckeditor5-core/src/commandcollection' {
    interface Commands {
        ImageTypeCommand: ImageTypeCommand;
    }
}
