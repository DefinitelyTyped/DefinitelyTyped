import { Editor, Plugin } from '@ckeditor/ckeditor5-core';
import ColorTableView from './colortableview';

export default class ColorUI extends Plugin {
    readonly commandName: string;
    readonly componentName: string;
    readonly icon: string;
    readonly dropdownLabel: string;
    readonly columns: number;
    colorTableView: ColorTableView;
    constructor(
        editor: Editor,
        config: { commandName: string; icon: string; componentName: string; dropdownLabel: string },
    );
    init(): void;
}
