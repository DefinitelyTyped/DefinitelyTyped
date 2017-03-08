class TestMethods {
    constructor(private uploader: qq.FineUploaderBasic) {
    }

    testAddFiles() {
        interface ParamType {
            field: string;
        }

        const params: ParamType = {
            field: 'hiiiii'
        };

        this.uploader.addFiles(
            new FileList(),
            params,
            "/my/happy/endpoint"
        );
    }

    testAddInitialFiles() {
        interface InitialFiles {
            myField: number;
        }

        const initialFiles: InitialFiles[] = [{
            myField: 1324
        }];

        this.uploader.addInitialFiles(initialFiles);
    }

    testDrawThumbnail() {
        const promise: Promise<any> = this.uploader.drawThumbnail(
            1234,
            new HTMLElement(),
            1234565,
            false,
            (resizeInfo) => {
                return new Promise<File | Blob>(() => {
                    return new Blob();
                });
            }
        );
    }

    testGetUploads() {
        interface ResponseType {
            hi: string;
        }
        const response: ResponseType | ResponseType[] = this.uploader.getUploads<ResponseType>({
            status: "proggresssssssesees"
        });
    }

    testSetCustomHeaders() {
        interface CustomHeader {
            customField: number;
        }

        this.uploader.setCustomHeaders<CustomHeader>({
            customField: 1234
        }, 1234);
    }

    testSetDeleteCustomHeaders() {
        interface CustomHeader {
            customField: number;
        }

        this.uploader.setDeleteFileCustomHeaders<CustomHeader>({
            customField: 1234
        }, 1234);
    }

    testSetDeleteFileParams() {
        interface CustomParams {
            paramField: boolean;
        }
        this.uploader.setDeleteFileParams<CustomParams>({
            paramField: false
        }, 1234);
    }

    testSetParams() {
        interface CustomParams {
            customParams: number;
        }

        this.uploader.setParams<CustomParams>({
            customParams: 1234
        }, 1234);
    }

    bulkTests() {
        this.uploader.cancel(1);
        this.uploader.cancelAll();
        this.uploader.clearStoredFiles();
        const shouldContinue: boolean = this.uploader.continueUpload(1234);
        this.uploader.deleteFile(1234);
        const elem: HTMLElement = this.uploader.getButton(1234);
        const fileOrBlob: File | Blob = this.uploader.getFile(1234);
        let num: number = this.uploader.getInProgress();
        let s: string = this.uploader.getName(1234);
        num = this.uploader.getParentId(1234);
        num = this.uploader.getRemainingAllowedItems();
        const resumables: qq.ResumableItem[] = this.uploader.getResumableFilesData();
        num = this.uploader.getSize(1234);
        s = this.uploader.getUuid(1234);
        this.uploader.log("why am i doing this?", "info");
        const b: boolean = this.uploader.pauseUpload(1234);
        this.uploader.reset();
        this.uploader.retry(1234);
        const blobPromise: Promise<Blob> = this.uploader.scaleImage(1234, {
            maxSize: 20,
            orient: false,
            type: "png",
            quality: 10,
            includeExif: false,
        });
        this.uploader.setEndpoint("/my/path/is/my/own", 1234);
        this.uploader.setEndpoint("/my/path/is/my/own", new HTMLElement());
        this.uploader.setDeleteFileEndpoint("/some/path", 1234);
        this.uploader.setDeleteFileEndpoint("/some/path", new HTMLElement());
        this.uploader.setItemLimit(1234);
        this.uploader.setForm(new HTMLFormElement());
        this.uploader.setForm("myFormElement");
        this.uploader.setName(1234, "myCustomName");
        this.uploader.setUuid(1234, "12341234");
        this.uploader.uploadStoredFiles();
    }

    uiTests() {
        this.uploader.addExtraDropzone(new HTMLElement());
        let elem: HTMLElement = this.uploader.getDropTarget(1234);
        const n: number = this.uploader.getId(elem);
        elem = this.uploader.getItemByFileId(n);
        this.uploader.removeExtraDropzone(elem);
    }
}
