import ImageKit = require('imagekit');
import { Transformation } from 'imagekit';

const imageKit = new ImageKit({
    privateKey: 'private_1234',
    publicKey: 'public_1234',
    urlEndpoint: 'https://ik.imagekit.io/your_imagekit_id/',
});

imageKit.url({ path: '/some/path', transformationPosition: 'path' }); // $ExpectType string
imageKit.url({ src: '/some/src', transformationPosition: 'path' }); // $ExpectType string
// @ts-expect-error
imageKit.url({ path: '/some/path', src: '/some/src', transformationPosition: 'path' });

imageKit.listFiles({}, (error, listFileResponse) => {}); // $ExpectType void
imageKit.listFiles({}); // $ExpectType Promise<ListFileResponse>

imageKit.upload({ file: 'data:image/png;base64,', fileName: 'imagekit.png' }, (error, uploadResponse) => {}); // $ExpectType void
imageKit.upload({ file: 'data:image/png;base64,', fileName: 'imagekit.png' }); // $ExpectType Promise<UploadResponse>

imageKit.getFileDetails('someId', (error, fileDetailsResponse) => {}); // $ExpectType void
imageKit.getFileDetails('someId'); // $ExpectType Promise<FileDetailsResponse>

imageKit.getFileMetadata('someId', (error, fileMetadataResponse) => {}); // $ExpectType void
imageKit.getFileMetadata('someId'); // $ExpectType Promise<FileMetadataResponse>

imageKit.updateFileDetails('someId', {}, (error, fileDetailsResponse) => {}); // $ExpectType void
imageKit.updateFileDetails('someId', {}); // $ExpectType Promise<FileDetailsResponse>

imageKit.deleteFile('someId', () => {}); // $ExpectType void
imageKit.deleteFile('someId'); // $ExpectType Promise<void>

imageKit.bulkDeleteFiles(['1', '2', '3'], (error, bulkDeleteFilesResponse) => {}); // $ExpectType void
imageKit.bulkDeleteFiles(['1', '2', '3']); // $ExpectType Promise<BulkDeleteFilesResponse>

imageKit.purgeCache('/full/url', (error, purgeCacheResponse) => {}); // $ExpectType void
imageKit.purgeCache('/full/url'); // $ExpectType Promise<PurgeCacheResponse>

imageKit.getPurgeCacheStatus('123', (error, purgeCacheStatusResponse) => {}); // $ExpectType void
imageKit.getPurgeCacheStatus('123'); // $ExpectType Promise<PurgeCacheStatusResponse>

imageKit.getAuthenticationParameters(); // $ExpectType { token: string; expire: number; signature: string; }
imageKit.getAuthenticationParameters('token'); // $ExpectType { token: string; expire: number; signature: string; }
imageKit.getAuthenticationParameters('token', 1000); // $ExpectType { token: string; expire: number; signature: string; }

imageKit.pHashDistance('hashA', 'hashB'); // $ExpectType number

const applyTransformations = (transformations: Transformation[]) => transformations;
applyTransformations([
    {
        height: '300',
        width: '200',
    },
]);
