declare namespace CKEDITOR {
    interface CKEditorStatic {
        readonly fileTools: {
            readonly fileLoader: fileTools.fileLoaderConstructor;
            readonly uploadRepository: fileTools.uploadRepositoryConstructor;
        } & fileTools;
    }

    /** https://ckeditor.com/docs/ckeditor4/latest/api/CKEDITOR_fileTools.html */
    interface fileTools {
        isFileUploadSupported: boolean;

        addUploadWidget(editor: editor, name: string, def: fileTools.uploadWidgetDefinition): void;

        bindNotification(editor: editor, fileLoader: fileTools.fileLoader): void;

        getUploadUrl(config: { [key: string]: unknown }, type?: string): string;

        isTypeSupported(file: Blob, supportedTypes: RegExp): boolean;

        markElement(element: dom.element, widgetName: string, loaderId: number): void;
    }

    namespace fileTools {
        interface fileLoaderConstructor extends eventConstructor<fileLoader> {
            new(editor: editor, fileOrData: Blob | string, fileName?: string): fileLoader;
        }
        interface fileLoader extends event {
            readonly data: string;
            readonly file: Blob;
            readonly fileName: string;
            readonly id: number;
            readonly loaded: number;
            readonly message: string;
            readonly reader: FileReader;
            readonly responseData: unknown;
            status: string;
            readonly total: number;
            readonly uploadTotal: number;
            readonly uploadUrl: string;
            readonly uploaded: string;
            readonly url: string;
            readonly xhr: XMLHttpRequest;

            abort(): void;

            isFinished(): boolean;

            load(): void;

            loadAndUpload(url: string, additionalRequestParameters?: unknown): void;

            update(): void;

            upload(url: string, additionalRequestParameters?: unknown): void;
        }

        interface uploadRepositoryConstructor extends eventConstructor<uploadRepository> {
            new(editor: editor): uploadRepository;
        }

        interface uploadRepository extends event {
            readonly loaders: fileLoader[];

            create(fileOrData: Blob | string, fileName: string, loaderType?: unknown): fileLoader;

            isFinished(): boolean;
        }

        interface uploadWidgetDefinition extends plugins.widget.definition {
            additionalRequestParameters?: unknown;
            fileToElement?: ((pastedFile: unknown) => HTMLElement) | undefined;
            loadMethod?: "load" | "loadAndUpload" | "upload" | undefined;
            loaderType?: unknown;
            onAbort?: (() => boolean) | undefined;
            onError?: (() => boolean) | undefined;
            onLoaded?: (() => boolean) | undefined;
            onUploaded?: (() => boolean) | undefined;
            onUploading?: (() => boolean) | undefined;
            replaceWith?: (() => unknown) | undefined;
            skipNotifications?: boolean | undefined;
            supportedTypes?: RegExp | undefined;
            uploadUrl?: string | undefined;
        }
    }
}
