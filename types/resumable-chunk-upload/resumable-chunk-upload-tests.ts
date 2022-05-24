import Uploader, { UploadError } from "resumable-chunk-upload";

const mockFile = new File([], 'file.png');

const uploader = new Uploader();
uploader.setFile(mockFile); // $ExpectType Uploader
uploader.setUploadStatusUrl('http://localhost:9000/upload-status'); // $ExpectType Uploader
uploader.setUploadUrl('http://localhost:9000/upload'); // $ExpectType Uploader
uploader.setFileId(mockFile.name); // $ExpectType Uploader
uploader.setChunkSize(10 ** 6); // $ExpectType Uploader
uploader.setHeaders({}); // $ExpectType Uploader
uploader.setRequestTimeout(3000); // $ExpectType Uploader
uploader.onProgress(info => {
    const i = info; // $ExpectType UploadProgress
});
uploader.upload()
.then(xhr => {
    const x = xhr; // $ExpectType XMLHttpRequest
})
.catch(error => {
    if (error instanceof UploadError) {
        const e = error; // $ExpectType UploadError<any>
    }
});
