import { Plugin } from "@ckeditor/ckeditor5-core";
import PendingActions from "@ckeditor/ckeditor5-core/src/pendingactions";
import Collection from "@ckeditor/ckeditor5-utils/src/collection";

export default class FileRepository extends Plugin {
    static pluginName: "FileRepository";
    static requires: [typeof PendingActions];

    createUploadAdapter?(loader: FileLoader): UploadAdapter;
    loaders: Collection<FileLoader>;
    uploadTotal: number | null;
    uploaded: number;
    uploadedPercent: number;

    createLoader(fileOrPromise: File | (() => Promise<File>)): FileLoader | null;
    destroyLoader(fileOrPromiseOrLoader: File | FileLoader | Promise<FileLoader>): void;
    getLoader(fileOrPromise: File | Promise<File>): FileLoader | null;

    init(): void;
}

export class FileLoader {
    data?: File | undefined;
    file: Promise<File | null>;
    readonly id: number;
    status: "idle" | "reading" | "uploading" | "aborted" | "error";
    uploadResponse: null | Record<string, unknown>;
    uploadTotal: number | null;
    uploaded: number;
    uploadedPercent: number;

    constructor(filePromise: Promise<File>, uploadAdapterCreator: () => UploadAdapter);
    abort(): void;
    read(): Promise<string>;
    upload(): Promise<Record<string, string>>;
}

export interface UploadAdapter {
    abort(): void;
    upload(): Promise<Record<string, string>>;
}

declare module '@ckeditor/ckeditor5-core/src/plugincollection' {
    interface Plugins {
        FileRepository: FileRepository;
    }
}
