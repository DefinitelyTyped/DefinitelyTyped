// Type definitions for flowjs 2.13
// Project: https://github.com/flowjs/flow.js
// Definitions by: Ryan McNamara <https://github.com/ryan10132>
//                 Martin Nuc <https://github.com/martinnuc>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace flowjs {
    interface Flow {
        support: boolean;
        supportDirectory: boolean;
        opts: FlowOptions;
        files: FlowFile[];

        assignBrowse(
            domNodes: ReadonlyArray<HTMLElement>,
            isDirectory?: boolean,
            singleFile?: boolean,
            attributes?: object
        ): void;
        assignDrop(node: HTMLElement | ReadonlyArray<HTMLElement>): void;
        unAssignDrop(node: HTMLElement | ReadonlyArray<HTMLElement>): void;
        on<T extends EventName>(event: T, callback: (...args: FlowEventMap[T]) => void): void;
        off(event?: EventName, callback?: () => void): void;
        upload(): void;
        pause(): void;
        resume(): void;
        cancel(): void;
        progress(): number;
        isUploading(): boolean;
        addFile(file: File): void;
        removeFile(file: FlowFile): void;
        getFromUniqueIdentifier(uniqueIdentifier: string): FlowFile;
        getSize(): number;
        sizeUploaded(): number;
        timeRemaining(): number;
    }

    interface FlowOptions {
        target?: string | undefined;
        singleFile?: boolean | undefined;
        chunkSize?: number | undefined;
        forceChunkSize?: boolean | undefined;
        simultaneousUploads?: number | undefined;
        fileParameterName?: string | undefined;
        query?: object | undefined;
        headers?: object | undefined;
        withCredentials?: boolean | undefined;
        method?: string | undefined;
        testMethod?: string | undefined;
        uploadMethod?: string | undefined;
        allowDuplicateUploads?: boolean | undefined;
        prioritizeFirstAndLastChunk?: boolean | undefined;
        testChunks?: boolean | undefined;
        preprocess?: ((chunk: FlowChunk) => void) | undefined;
        initFileFn?: ((file: FlowFile, chunk: FlowChunk) => void) | undefined;
        readFileFn?: ((file: FlowFile, startByte: number, endByte: number, fileType: string, chunk: FlowChunk) => void) | undefined;
        generateUniqueIdentifier?: ((file: FlowFile) => any) | undefined;
        maxChunkRetries?: number | undefined;
        chunkRetryInterval?: number | undefined;
        progressCallbacksInterval?: number | undefined;
        speedSmoothingFactor?: number | undefined;
        successStatuses?: number[] | undefined;
        permanentErrors?: number[] | undefined;
    }

    interface FlowFile {
        flowObj: Flow;
        file: File;
        name: string;
        relativePath: string;
        size: number;
        uniqueIdentifier: string;
        averageSpeed: number;
        currentSpeed: number;
        chunks: ReadonlyArray<FlowChunk>;
        paused: boolean;
        error: boolean;

        progress(): number;
        pause(): void;
        resume(): void;
        cancel(): void;
        retry(): void;
        bootstrap(): void;
        isUploading(): boolean;
        isComplete(): boolean;
        sizeUploaded(): number;
        timeRemaining(): number;
        getExtension(): string;
        getType(): string;
    }

    interface FlowChunk {
        flowObj: Flow;
        fileObj: FlowFile;
        offset: number;
        tested: boolean;
        retries: number;
        pendingRetry: false;
        preprocessState: 0 | 1 | 2;
        readState: 0 | 1 | 2;
        loaded: number;
        total: number;
        chunkSize: number;
        startByte: number;
        endByte: number;
        xhr: XMLHttpRequest;
        getParams(): FlowChunkParams;
        test(): void;
        send(): void;
        abort(): void;
        status(): void;
        message(): void;
        progress(): void;
        sizeUploaded(): number;
    }

    interface FlowChunkParams {
        flowChunkNumber: number;
        flowChunkSize: number;
        flowCurrentChunkSize: number;
        flowTotalSize: number;
        flowIdentifier: any;
        flowFilename: string;
        flowRelativePath: string;
        flowTotalChunks: number;
    }

    interface FlowEventMap {
        fileSuccess: FileSuccessCallbackArguments;
        fileProgress: FileProgressCallbackArguments;
        fileAdded: FileAddedCallbackArguments;
        filesAdded: FilesAddedCallbackArguments;
        filesSubmitted: FilesSubmittedCallbackArguments;
        fileRemoved: FileRemovedCallbackArguments;
        fileRetry: FileRetryCallbackArguments;
        fileError: FileErrorCallbackArguments;
        uploadStart: UploadStartCallbackArguments;
        complete: CompleteCallbackArguments;
        progress: ProgressCallbackArguments;
        error: ErrorCallbackArguments;
        catchAll: CatchAllCallbackArguments;
    }

    type EventName = keyof FlowEventMap;
    type FlowEvent = FlowEventMap[keyof FlowEventMap];

    type FlowEventFromEventName<T extends EventName> = FlowEventMap[T];
    type FlowEventTypeFromFlowEvent<T extends FlowEvent> =
        T extends FlowEventFromEventName<infer U> ? U : never;

    type FileSuccessCallbackArguments = [FlowFile, string, FlowChunk];
    type FileProgressCallbackArguments = [FlowFile, FlowChunk];
    type FileAddedCallbackArguments = [FlowFile, Event];
    type FilesAddedCallbackArguments = [FlowFile[], Event];
    type FilesSubmittedCallbackArguments = [FlowFile[], Event];
    type FileRemovedCallbackArguments = [FlowFile];
    type FileRetryCallbackArguments = [FlowFile, FlowChunk];
    type FileErrorCallbackArguments = [FlowFile, string, FlowChunk];
    type UploadStartCallbackArguments = [];
    type CompleteCallbackArguments = [];
    type ProgressCallbackArguments = [];
    type ErrorCallbackArguments = [string, FlowFile, FlowChunk];
    type CatchAllCallbackArguments = [Event];
}
// use namespace export like in flowjs/index.d.ts. Fix TS2306 "flowjs/index.d.ts not a module"
// tslint:disable-next-line export-just-namespace
export = flowjs;
export as namespace flowjs;
