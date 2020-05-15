// Type definitions for meteor-files 1.14.2
// Project: https://github.com/VeliovGroup/Meteor-Files
// Definitions by: Oliver J. Coleman <https://github.com/OliverColeman>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped


// Definitions for https://github.com/VeliovGroup/Meteor-Files
declare module "meteor/ostrio:files" {
    import { Mongo } from 'meteor/mongo';
    import { ReactiveVar } from 'meteor/reactive-var';
    import { SimpleSchemaDefinition } from 'simpl-schema';
    

    interface Version<MetadataType> {
        extension: string;
        meta: MetadataType;
        path: string;
        size: number;
        type: string;
    }


    class FileObj<MetadataType> {
        _id: string;
        size: number;
        name: string;
        type: string;
        path: string;
        isVideo: boolean;
        isAudio: boolean;
        isImage: boolean;
        isText: boolean;
        isJSON: boolean;
        isPDF: boolean;
        ext?: string;
        extension?: string;
        extensionWithDot: string;
        _storagePath: string;
        _downloadRoute: string;
        _collectionName: string;
        public?: boolean;
        meta?: MetadataType;
        userId?: string;
        updatedAt?: Date;
        versions: {
            [propName: string]: Version<MetadataType>;
        };
        mime: string;
        "mime-type": string;
    }


    class FileRef<MetadataType> extends FileObj<MetadataType> {
        remove: (callback: (error: any) => void) => void;
        link: (version?: string, location?: string) => string;
        get: (property?: string) => FileObj<MetadataType> | any;
        fetch: () => FileObj<MetadataType>[]
        with: () => FileCursor<MetadataType>
    }


    interface FileData<MetadataType> {
        size: number;
        type: string;
        mime: string;
        "mime-type": string;
        ext: string;
        extension: string;
        name: string;
        meta: MetadataType;
    }


    interface FilesCollectionConfig<MetadataType> {
        storagePath?: string | ((fileObj: FileObj<MetadataType>) => string);
        collection?: Mongo.Collection<FileObj<MetadataType>>;
        collectionName?: string;
        continueUploadTTL?: string;
        ddp?: Object;
        cacheControl?: string;
        responseHeaders?: { [x: string]: string } | ((responseCode?: string, fileRef?: FileRef<MetadataType>, versionRef?: Version<MetadataType>, version?: string) => { [x: string]: string });
        throttle?: number | boolean;
        downloadRoute?: string;
        schema?: SimpleSchemaDefinition;
        chunkSize?: number;
        namingFunction?: (fileObj: FileObj<MetadataType>) => string;
        permissions?: number;
        parentDirPermissions?: number;
        integrityCheck?: boolean;
        strict?: boolean;
        downloadCallback?: (fileObj: FileObj<MetadataType>) => boolean;
        protected?: boolean | ((fileObj: FileObj<MetadataType>) => boolean | number);
        public?: boolean;
        onBeforeUpload?: (fileData: FileData<MetadataType>) => boolean | string;
        onBeforeRemove?: (cursor: Mongo.Cursor<FileObj<MetadataType>>) => boolean;
        onInitiateUpload?: (fileData: FileData<MetadataType>) => void;
        onAfterUpload?: (fileRef: FileRef<MetadataType>) => any;
        onAfterRemove?: (files: ReadonlyArray<FileObj<MetadataType>>) => any;
        onbeforeunloadMessage?: string | (() => string);
        allowClientCode?: boolean;
        debug?: boolean;
        interceptDownload?: (http: Object, fileRef: FileRef<MetadataType>, version: string) => boolean;
    }
    

    export interface SearchOptions<MetadataType, TransformAdditions> {
        sort?: Mongo.SortSpecifier;
        skip?: number;
        limit?: number;
        fields?: Mongo.FieldSpecifier;
        reactive?: boolean;
        transform?: (fileObj: FileObj<MetadataType>) => FileObj<MetadataType> & TransformAdditions;
    }
    

    export interface InsertOptions<MetadataType> {
        file: File | Object | string;
        isBase64?: boolean;
        meta?: MetadataType;
        transport?: 'ddp' | 'http'
        onStart?: (error: Object, fileData: FileData<MetadataType>) => any;
        onUploaded?: (error: Object, fileRef: FileRef<MetadataType>) => any;
        onAbort?: (fileData: FileData<MetadataType>) => any;
        onError?: (error: Object, fileData: FileData<MetadataType>) => any;
        onProgress?: (progress: number, fileData: FileData<MetadataType>) => any;
        onBeforeUpload?: (fileData: FileData<MetadataType>) => any;
        streams?: number | 'dynamic';
        chunkSize?: number | 'dynamic';
        allowWebWorkers?: boolean;
    }


    export interface LoadOptions<MetadataType> {
        fileName: string;
        meta?: MetadataType;
        type?: string;
        size?: number;
    }


    export class FileUpload {
        file: File;
        onPause: ReactiveVar<boolean>;
        progress: ReactiveVar<number>;
        estimateTime: ReactiveVar<number>;
        estimateSpeed: ReactiveVar<number>;
        state: ReactiveVar<'active' | 'paused' | 'aborted' | 'completed'>;

        pause(): void;
        continue(): void;
        toggle(): void;
        pipe(): void;
        start(): void;
        on(event: string, callback: Function): void;
    }


    export class FileCursor<MetadataType> extends FileRef<MetadataType> { }


    export class FilesCursor<MetadataType, TransformAdditions> extends Mongo.Cursor<FileObj<MetadataType>> {
        cursor: Mongo.Cursor<FileObj<MetadataType>>; // Refers to base cursor? Why is this existing?

        get(): Array<FileCursor<MetadataType> & TransformAdditions>;
        hasNext(): boolean;
        next(): FileCursor<MetadataType> & TransformAdditions;
        hasPrevious(): boolean;
        previous(): FileCursor<MetadataType> & TransformAdditions;
        first(): FileCursor<MetadataType> & TransformAdditions;
        last(): FileCursor<MetadataType> & TransformAdditions;
        remove(callback: (err: Object) => void): void;
        each(): Array<FileCursor<MetadataType> & TransformAdditions>;
        current(): Object | undefined;
    }


    export class FilesCollection<MetadataType = { [x: string]: any }> {
        collection: Mongo.Collection<FileObj<MetadataType>>;
        schema: SimpleSchemaDefinition;

        constructor(config: FilesCollectionConfig<MetadataType>)

        /**
         * Find and return Cursor for matching documents.
         * 
         * @param selector [[http://docs.meteor.com/api/collections.html#selectors | Mongo-Style selector]]
         * @param options [[http://docs.meteor.com/api/collections.html#sortspecifiers | Mongo-Style selector Options]]
        
         * @template TransformAdditions Additional properties provided by transforming a document with options.tranform(). 
         *                        Note that removing fields with a transform function is not currently supported as this may break 
         *                        functions defined on a FileRef or FileCursor.
         */
        find<TransformAdditions = {}>(selector?: Mongo.Selector<Partial<FileObj<MetadataType>>>, options?: SearchOptions<MetadataType, TransformAdditions>): FilesCursor<MetadataType, TransformAdditions>;
        
        /**
         * Finds the first document that matches the selector, as ordered by sort and skip options.
         * 
         * @param selector [[http://docs.meteor.com/api/collections.html#selectors | Mongo-Style selector]]
         * @param options [[http://docs.meteor.com/api/collections.html#sortspecifiers | Mongo-Style selector Options]]
         * 
         * @template TransformAdditions Additional properties provided by transforming a document with options.tranform().
         *                        Note that removing fields with a transform function is not currently supported as this may break 
         *                        functions defined on a FileRef or FileCursor.
         */
        findOne<TransformAdditions = {}>(selector?: Mongo.Selector<Partial<FileObj<MetadataType>>> | string, options?: SearchOptions<MetadataType, TransformAdditions>): FileCursor<MetadataType> & TransformAdditions;
        
        insert(settings: InsertOptions<MetadataType>, autoStart?: boolean): FileUpload;
        remove(select: Mongo.Selector<FileObj<MetadataType>> | string, callback?: (error: Object) => Object): FilesCollection<MetadataType>;
        link(fileRef: FileRef<MetadataType>, version?: string): string;
        allow(options: Mongo.AllowDenyOptions): void;
        deny(options: Mongo.AllowDenyOptions): void;
        denyClient(): void;
        on(event: string, callback: (fileRef: FileRef<MetadataType>) => void): void;
        unlink(fileRef: FileRef<MetadataType>, version?: string): FilesCollection<MetadataType>;
        addFile(path: string, opts: LoadOptions<MetadataType>, callback: (err: any, fileRef: FileRef<MetadataType>) => any, proceedAfterUpload: boolean): FilesCollection<MetadataType>;
        load(url: string, opts: LoadOptions<MetadataType>, callback: (err: Object, fileRef: FileRef<MetadataType>) => any, proceedAfterUpload: boolean): FilesCollection<MetadataType>;
        write(buffer: Buffer, opts: LoadOptions<MetadataType>, callback: (err: Object, fileRef: FileRef<MetadataType>) => any, proceedAfterUpload: boolean): FilesCollection<MetadataType>;
    }
}
