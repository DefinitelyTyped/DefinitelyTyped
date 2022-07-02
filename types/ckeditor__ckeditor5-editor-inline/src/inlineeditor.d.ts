import { Editor } from '@ckeditor/ckeditor5-core';
import { DataApi } from '@ckeditor/ckeditor5-core/src/editor/utils/dataapimixin';
import { ElementApi } from '@ckeditor/ckeditor5-core/src/editor/utils/elementapimixin';
import { EditorWithUI } from '@ckeditor/ckeditor5-core/src/editor/editorwithui';
import { EditorConfig } from '@ckeditor/ckeditor5-core/src/editor/editorconfig';
import InlineEditorUI from './inlineeditorui';

export default class InlineEditor extends Editor implements DataApi, ElementApi, EditorWithUI {
    readonly ui: InlineEditorUI;
    protected constructor(sourceElementOrData: HTMLElement | string, config: EditorConfig);
    sourceElement?: HTMLElement | undefined;
    updateSourceElement(): void;
    setData(data: string): void;
    getData(options?: { rootName?: string | undefined; trim?: 'empty' | 'none' | undefined }): string;
    destroy(): Promise<void>;
    static create(sourceElementOrData: HTMLElement | string, config?: EditorConfig): Promise<InlineEditor>;
}
