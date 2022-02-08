import { Editor } from '@ckeditor/ckeditor5-core';
import { EditorConfig } from '@ckeditor/ckeditor5-core/src/editor/editorconfig';
import { EditorWithUI } from '@ckeditor/ckeditor5-core/src/editor/editorwithui';
import { DataApi } from '@ckeditor/ckeditor5-core/src/editor/utils/dataapimixin';
import DecoupledEditorUI from './decouplededitorui';

export default class DecoupledEditor extends Editor implements DataApi, EditorWithUI {
    protected constructor(sourceElementOrData: HTMLElement | string, config: EditorConfig);
    ui: DecoupledEditorUI;
    setData(data: string): void;
    getData(options?: { rootName?: string | undefined; trim?: 'empty' | 'none' | undefined }): string;
    destroy(): Promise<void>;
    static create(sourceElementOrData: HTMLElement | string, config?: EditorConfig): Promise<DecoupledEditor>;
}
