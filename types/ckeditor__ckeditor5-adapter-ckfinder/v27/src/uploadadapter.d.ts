import { Plugin } from '@ckeditor/ckeditor5-core';
import FileRepository, {
    FileLoader,
    UploadAdapter as IUploadAdapter,
} from '@ckeditor/ckeditor5-upload/src/filerepository';
import { Locale } from '@ckeditor/ckeditor5-utils';
/**
 * A plugin that enables file uploads in CKEditor 5 using the CKFinder server–side connector.
 *
 * See the {@glink features/images/image-upload/ckfinder "CKFinder file manager integration" guide} to learn how to configure
 * and use this feature as well as find out more about the full integration with the file manager
 * provided by the {@link module:ckfinder/ckfinder~CKFinder} plugin.
 *
 * Check out the {@glink features/images/image-upload/image-upload comprehensive "Image upload overview"} to learn about
 * other ways to upload images into CKEditor 5.
 */
export default class CKFinderUploadAdapter extends Plugin {
    static readonly requires: [typeof FileRepository];
    static readonly pluginName: 'CKFinderUploadAdapter';
    init(): void;
}
/**
 * Upload adapter for CKFinder.
 */
export class UploadAdapter implements IUploadAdapter {
    /**
     * FileLoader instance to use during the upload.
     */
    readonly loader: FileLoader;
    /**
     * Upload URL.
     */
    readonly url: string;
    /**
     * Locale translation method.
     */
    readonly t: Locale['t'];
    protected xhr?: XMLHttpRequest;
    /**
     * Creates a new adapter instance.
     */
    constructor(loader: FileLoader, url: string, t: Locale['t']);
    /**
     * Starts the upload process.
     */
    upload(): Promise<{
        default: string;
    }>;
    /**
     * Aborts the upload process.
     */
    abort(): void;
    /**
     * Initializes the XMLHttpRequest object.
     */
    private _initRequest(): void;
    /**
     * Initializes XMLHttpRequest listeners.
     */
    private _initListeners(
        resolve: (value: { default: string }) => void,
        reject: (reason?: unknown) => void,
        file: File,
    ): void;
    /**
     * Prepares the data and sends the request.
     */
    private _sendRequest(file: File): void;
}

declare module '@ckeditor/ckeditor5-core/src/plugincollection' {
    interface Plugins {
        CKFinderUploadAdapter: CKFinderUploadAdapter;
    }
}
