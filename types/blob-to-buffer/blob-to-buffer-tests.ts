import * as blobToBuffer from "blob-to-buffer";

blobToBuffer(new Blob(), (error, buffer) => {
    console.log(error);
    console.log(buffer);
});
