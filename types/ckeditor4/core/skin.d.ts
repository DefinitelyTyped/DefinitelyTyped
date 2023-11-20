declare namespace CKEDITOR {
    interface CKEditorStatic {
        readonly skin: skin;
    }
    interface skin {
        icons: { [name: string]: { path: string } };
        name: string;
        ua: { [name: string]: unknown };
        ua_dialog: string;
        ua_editor: string;

        addIcon(name: string, path: string, offset?: number, bgsize?: string): void;

        chameleon(editor: string, part: string): void;

        getIconStyle(name: string, rtl?: boolean, overridePath?: number, overrideBgsize?: string): unknown;

        getPath(part: string): unknown;

        loadPart(part: string, fn: () => void): void;

        path(): string;
    }
}
