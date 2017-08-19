import * as blobUtil from 'blob-util';

const testBlob = new Blob(['abcd']);

blobUtil.base64StringToBlob('abcd'); // $ExpectType Promise<Blob>
blobUtil.createObjectURL(testBlob); // $ExpectType string
blobUtil.imgSrcToBlob('test.jpg'); // $ExpectType Promise<Blob>
blobUtil.createBlob(['abcd']); // $ExpectType Blob
blobUtil.arrayBufferToBlob(new ArrayBuffer(0)); // $ExpectType Promise<Blob>
blobUtil.binaryStringToBlob('0101'); // $ExpectType Promise<Blob>
blobUtil.blobToArrayBuffer(testBlob); // $ExpectType Promise<ArrayBuffer>
blobUtil.blobToBase64String(testBlob); // $ExpectType Promise<string>
blobUtil.blobToBinaryString(testBlob); // $ExpectType Promise<string>
blobUtil.canvasToBlob(new HTMLCanvasElement()); // $ExpectType Promise<Blob>
blobUtil.dataURLToBlob('data:abcd'); // $ExpectType Promise<Blob>
blobUtil.imgSrcToDataURL('test.jpg'); // $ExpectType Promise<string>
blobUtil.revokeObjectURL('blob:example'); // $ExpectType void
