import { Editor } from "@ckeditor/ckeditor5-core";
import { EditorConfig } from "@ckeditor/ckeditor5-core/src/editor/editorconfig";
import { EditorWithUI } from "@ckeditor/ckeditor5-core/src/editor/editorwithui";
import { DataApi } from "@ckeditor/ckeditor5-core/src/editor/utils/dataapimixin";
import { ElementApi } from "@ckeditor/ckeditor5-core/src/editor/utils/elementapimixin";
import ClassicEditorUI from "./classiceditorui";

export default class ClassicEditor extends Editor implements DataApi, EditorWithUI, ElementApi {
    ui: ClassicEditorUI;
    static create(sourceElementOrData: HTMLElement | string, config?: EditorConfig): Promise<ClassicEditor>;

    setData(data: string): void;
    getData(options?: { rootName?: string | undefined; trim?: "empty" | "none" | undefined }): string;

    sourceElement?: HTMLElement | undefined;
    updateSourceElement(): void;
}
