import BackBlazeB2 =  require('backblaze-b2');

const b2 = new BackBlazeB2({
    applicationKey: 'TEST',
    applicationKeyId: 'TEST2',
});

const b2WithOptionalParams = new BackBlazeB2({
    applicationKey: 'TEST',
    applicationKeyId: 'TEST2',
    axios: {
        someAxiosConfig: true,
    },
    retry: {
        retry: 3,
    },
});

b2.authorize();

b2.authorize({
    axios: { someAxiosConfig: true },
    axiosOverride: { someOtherParam: '' },
});

b2.createBucket({
    bucketName: 'bucket-1',
    bucketType: 'allPrivate',
});

b2.createBucket({
    bucketName: 'bucket-1',
    bucketType: 'allPrivate',
    axios: { someAxiosConfig: true },
    axiosOverride: { someOtherParam: '' },
});

b2.deleteBucket({
    bucketId: 'bucketId',
});

b2.deleteBucket({
    bucketId: 'bucketId',
    axios: { someAxiosConfig: true },
    axiosOverride: { someOtherParam: '' },
});

b2.listBuckets();

b2.listBuckets({
    axios: { someAxiosConfig: true },
    axiosOverride: { someOtherParam: '' },
});

b2.getBucket({
    bucketName: 'bucketName',
    bucketId: 'bucketId',
});

b2.getBucket({
    bucketName: 'bucketName',
});

b2.getBucket({
    bucketName: 'bucketName',
    axios: { someAxiosConfig: true },
    axiosOverride: { someOtherParam: '' },
});

b2.updateBucket({
    bucketId: 'bucketId',
    bucketType: 'allPublic',
});

b2.updateBucket({
    bucketId: 'bucketId',
    bucketType: 'allPublic',
    axios: { someAxiosConfig: true },
    axiosOverride: { someOtherParam: '' },
});

b2.getUploadUrl({
    bucketId: 'bucketId',
});

b2.getUploadUrl({
    bucketId: 'bucketId',
    axios: { someAxiosConfig: true },
    axiosOverride: { someOtherParam: '' },
});

const buf1 = Buffer.alloc(10);
b2.uploadFile({
    uploadUrl: 'uploadUrl',
    uploadAuthToken: 'uploadAuthToken',
    fileName: 'fileName',
    contentLength: 10,
    mime: '',
    data: buf1,
    hash: 'sha1-hash',
    info: {
        key1: 'value',
        key2: 'value',
    },
    onUploadProgress: event => {},
});

b2.uploadFile({
    uploadUrl: 'uploadUrl',
    uploadAuthToken: 'uploadAuthToken',
    fileName: 'fileName',
    data: buf1,
    onUploadProgress: null,
    axios: { someAxiosConfig: true },
    axiosOverride: { someOtherParam: '' },
});

b2.listFileNames({
    bucketId: 'bucketId',
    startFileName: 'startFileName',
    maxFileCount: 100,
    delimiter: '',
    prefix: '',
});

b2.listFileNames({
    bucketId: 'bucketId',
    startFileName: 'startFileName',
    maxFileCount: 100,
    delimiter: '',
    prefix: '',
    axios: { someAxiosConfig: true },
    axiosOverride: { someOtherParam: '' },
});

b2.listFileVersions({
    bucketId: 'bucketId',
    startFileName: 'startFileName',
    startFileId: 'startFileId',
    maxFileCount: 100,
});

b2.listFileVersions({
    bucketId: 'bucketId',
    startFileName: 'startFileName',
    startFileId: 'startFileId',
    maxFileCount: 100,
    axios: { someAxiosConfig: true },
    axiosOverride: { someOtherParam: '' },
});

b2.listParts({
    fileId: 'fileId',
    startPartNumber: 0,
    maxPartCount: 100,
});

b2.listParts({
    fileId: 'fileId',
    axios: { someAxiosConfig: true },
    axiosOverride: { someOtherParam: '' },
});

b2.hideFile({
    bucketId: 'bucketId',
    fileName: 'fileName',
});

b2.hideFile({
    bucketId: 'bucketId',
    fileName: 'fileName',
    axios: { someAxiosConfig: true },
    axiosOverride: { someOtherParam: '' },
});

b2.getFileInfo({
    fileId: 'fileId',
});

b2.getFileInfo({
    fileId: 'fileId',
    axios: { someAxiosConfig: true },
    axiosOverride: { someOtherParam: '' },
});

b2.getDownloadAuthorization({
    bucketId: 'bucketId',
    fileNamePrefix: 'fileNamePrefix',
    validDurationInSeconds: 230,
    b2ContentDisposition: 'b2ContentDisposition',
    axios: { someAxiosConfig: true },
    axiosOverride: { someOtherParam: '' },
});

b2.getDownloadAuthorization({
    bucketId: 'bucketId',
    fileNamePrefix: 'fileNamePrefix',
    validDurationInSeconds: 230,
    b2ContentDisposition: 'b2ContentDisposition',
    axios: { someAxiosConfig: true },
    axiosOverride: { someOtherParam: '' },
});

b2.downloadFileByName({
    bucketName: 'bucketName',
    fileName: 'fileName',
    responseType: 'document',
    onDownloadProgress: null,
});

b2.downloadFileByName({
    bucketName: 'bucketName',
    fileName: 'fileName',
    responseType: 'arraybuffer',
    onDownloadProgress: event => {},
    axios: { someAxiosConfig: true },
    axiosOverride: { someOtherParam: '' },
});

b2.downloadFileById({
    fileId: 'fileId',
    responseType: 'arraybuffer',
    onDownloadProgress: null,
});

b2.downloadFileById({
    fileId: 'fileId',
    responseType: 'arraybuffer',
    onDownloadProgress: null,
    axios: { someAxiosConfig: true },
    axiosOverride: { someOtherParam: '' },
});

b2.deleteFileVersion({
    fileId: 'fileId',
    fileName: 'fileName',
});

b2.deleteFileVersion({
    fileId: 'fileId',
    fileName: 'fileName',
    axios: { someAxiosConfig: true },
    axiosOverride: { someOtherParam: '' },
});

b2.startLargeFile({
    bucketId: 'bucketId',
    fileName: 'fileName',
});

b2.startLargeFile({
    bucketId: 'bucketId',
    fileName: 'fileName',
    axios: { someAxiosConfig: true },
    axiosOverride: { someOtherParam: '' },
});

b2.getUploadPartUrl({
    fileId: 'fileId',
});

b2.getUploadPartUrl({
    fileId: 'fileId',
    axios: { someAxiosConfig: true },
    axiosOverride: { someOtherParam: '' },
});

b2.uploadPart({
    partNumber: 23,
    uploadUrl: 'uploadUrl',
    uploadAuthToken: 'uploadAuthToken',
    data: buf1,
});

b2.uploadPart({
    partNumber: 23,
    uploadUrl: 'uploadUrl',
    uploadAuthToken: 'uploadAuthToken',
    data: buf1,
    hash: 'sha1-hash',
    onUploadProgress: null,
    contentLength: 0,
    axios: { someAxiosConfig: true },
    axiosOverride: { someOtherParam: '' },
});

b2.finishLargeFile({
    fileId: 'fileId',
    partSha1Array: ['partSha1Array'],
});

b2.finishLargeFile({
    fileId: 'fileId',
    partSha1Array: ['partSha1Array'],
    axios: { someAxiosConfig: true },
    axiosOverride: { someOtherParam: '' },
});

b2.cancelLargeFile({
    fileId: 'fileId',
});

b2.cancelLargeFile({
    fileId: 'fileId',
    axios: { someAxiosConfig: true },
    axiosOverride: { someOtherParam: '' },
});

b2.createKey({
    capabilities: ['READ_FILES', 'DELETE_FILES'],
    keyName: 'my-key-1',
});

b2.createKey({
    capabilities: ['readFiles', 'DELETE_FILES'],
    keyName: 'my-key-1', // letters, numbers, and '-' only, <=100 chars
    validDurationInSeconds: 3600, // expire after duration (optional)
    bucketId: 'bucketId', // restrict access to bucket (optional)
    namePrefix: 'prefix_', // restrict access to file prefix (optional)
    axios: { someAxiosConfig: true },
    axiosOverride: { someOtherParam: '' },
});

b2.deleteKey({
    applicationKeyId: 'applicationKeyId',
});

b2.deleteKey({
    applicationKeyId: 'applicationKeyId',
    axios: { someAxiosConfig: true },
    axiosOverride: { someOtherParam: '' },
});

b2.listKeys({
    maxKeyCount: 10,
    startApplicationKeyId: '...',
});

b2.listKeys({
    maxKeyCount: 10,
    startApplicationKeyId: '...',
    axios: { someAxiosConfig: true },
    axiosOverride: { someOtherParam: '' },
});
