import * as blobUtil from 'blob-util';

const testBlob = new Blob(['abcd']);

blobUtil.base64StringToBlob('abcd'); // $ExpectType Promise<Blob>
blobUtil.createObjectURL(testBlob); // $ExpectType string
blobUtil.imgSrcToBlob('test.jpg'); // $ExpectType Promise<Blob>
blobUtil.imgSrcToBlob('http://some-other-site.com/img.jpg', 'image/jpeg', 'Anonymous', 1.0); // $ExpectType Promise<Blob>
blobUtil.imgSrcToBlob('test.jpg', 'image/jpeg', undefined, 0.7); // $ExpectType Promise<Blob>
blobUtil.createBlob(['abcd']); // $ExpectType Blob
blobUtil.arrayBufferToBlob(new ArrayBuffer(0)); // $ExpectType Promise<Blob>
blobUtil.binaryStringToBlob('0101'); // $ExpectType Promise<Blob>
blobUtil.blobToArrayBuffer(testBlob); // $ExpectType Promise<ArrayBuffer>
blobUtil.blobToBase64String(testBlob); // $ExpectType Promise<string>
blobUtil.blobToBinaryString(testBlob); // $ExpectType Promise<string>
blobUtil.canvasToBlob(new HTMLCanvasElement()); // $ExpectType Promise<Blob>
blobUtil.canvasToBlob(new HTMLCanvasElement(), 'image/webp'); // $ExpectType Promise<Blob>
blobUtil.canvasToBlob(new HTMLCanvasElement(), 'image/webp', 0.8); // $ExpectType Promise<Blob>
blobUtil.dataURLToBlob('data:abcd'); // $ExpectType Promise<Blob>
blobUtil.blobToDataURL(testBlob); // $ExpectType Promise<string>
blobUtil.imgSrcToDataURL('test.jpg'); // $ExpectType Promise<string>
blobUtil.imgSrcToDataURL('http://some-other-site.com/img.jpg', 'image/jpeg', 'Anonymous', 1.0); // $ExpectType Promise<string>
blobUtil.revokeObjectURL('blob:example'); // $ExpectType void
