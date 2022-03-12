import { Model } from '@ckeditor/ckeditor5-engine';
import { ColorGridView, View, ViewCollection } from '@ckeditor/ckeditor5-ui';
import { ColorDefinition } from '@ckeditor/ckeditor5-ui/src/colorgrid/colorgridview';
import { FocusTracker, KeystrokeHandler, Locale } from '@ckeditor/ckeditor5-utils';
import DocumentColorCollection from '../documentcolorcollection';

export default class ColorTableView extends View {
    constructor(
        locale: Locale,
        config: {
            colors: ColorDefinition[];
            columns: number;
            removeButtonLabel: string;
            documentColorsLabel: string;
            documentColorsCount: number;
        },
    );
    readonly items: ViewCollection;
    colorDefinitions: ColorDefinition[];
    readonly focustracker: FocusTracker;
    readonly keystrokes: KeystrokeHandler;
    selectedColor: string;
    removeButtonLabel: string;
    columns: number;
    readonly documentColors: DocumentColorCollection;
    readonly documentColorsCount: number;
    readonly staticColorsGrid: ColorGridView | undefined;
    readonly documentColorsGrid: ColorGridView | undefined;
    updateDocumentColors(model: Model, attributeName: string): void;
    updateSelectedColors(): void;
    render(): void;
    appendGrids(): void;
    focus(): void;
    focusLast(): void;
    destroy(): void;
}
