class CallbacksTest {
    constructor(private opts: qq.CallbackOptions) {

    }

    testCallbacks() {
        const opts = this.opts;

        interface CustomType {
            myTypeOfClass: string;
        }

        opts.onAutoRetry = (id, name, attemptNumber) => {};

        opts.onCancel = (id, name) => {};

        opts.onComplete = (id: number, name: string, responseJSON: CustomType, xhr: XMLHttpRequest) => {};

        opts.onAllComplete = (succeeded, failed) => {};

        opts.onDelete = (id) => {};

        opts.onDeleteComplete = (id, xhr, isError) => {};

        opts.onError = (id, name, errorReason, xhr) => {};

        opts.onManualRetry = (id, name) => {
            return true;
        };

        opts.onPasteReceived = (blob) => {};

        opts.onProgress = (id, name, uploadedBytes, totalBytes) => {};

        opts.onResume = (id: number, name: string, chunkData: CustomType) => {};

        opts.onSessionRequestComplete = (response: CustomType[], success: boolean, xhrOrXdr: XMLHttpRequest) => {};

        opts.onStatusChange = (id, oldStatus, newStatus) => {};

        opts.onSubmit = (id, name) => {};

        opts.onSubmitDelete = (id) => {};

        opts.onSubmitted = (id, name) => {};

        opts.onTotalProgress = (totalUploadedBytes, totalBytes) => {};

        opts.onUpload = (id, name) => {};

        opts.onUploadChunk = (id, name, chunkData) => {};

        opts.onUploadChunkSuccess = (id: number, chunkData: qq.ChunkData, responseJSON: CustomType, xhr: XMLHttpRequest) => {};

        opts.onValidate = (data, buttonContainer) => {};

        opts.onValidateBatch = (fileOrBlobDataArray, buttonContaine) => {};
    }
}
