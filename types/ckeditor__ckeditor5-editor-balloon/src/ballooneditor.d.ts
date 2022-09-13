import { Editor } from '@ckeditor/ckeditor5-core';
import { EditorConfig } from '@ckeditor/ckeditor5-core/src/editor/editorconfig';
import { DataApi } from '@ckeditor/ckeditor5-core/src/editor/utils/dataapimixin';
import { ElementApi } from '@ckeditor/ckeditor5-core/src/editor/utils/elementapimixin';
import BalloonEditorUI from './ballooneditorui';

export default class BalloonEditor extends Editor implements DataApi, ElementApi {
    protected constructor();
    updateSourceElement(): void;
    setData(data: string): void;
    getData(options?: { rootName?: string | undefined; trim?: 'empty' | 'none' | undefined }): string;
    static create(sourceElementOrData: HTMLElement | string, config?: EditorConfig): Promise<BalloonEditor>;
    sourceElement?: HTMLElement | undefined;
    ui: BalloonEditorUI;
    destroy(): Promise<void>;
}
