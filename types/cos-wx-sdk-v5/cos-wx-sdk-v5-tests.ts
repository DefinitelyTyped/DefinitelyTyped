import COS = require("cos-wx-sdk-v5");

const options: COS.COSOptions = {
    FileParallelLimit: 3,
    SimpleUploadMethod: "putObject",
    getAuthorization(authOptions, callback) {
        const scope: COS.Scope = authOptions.Scope;
        scope.forEach(item => {
            item.action.toLowerCase();
            item.bucket.toLowerCase();
        });

        callback({
            TmpSecretId: "temporary-secret-id",
            TmpSecretKey: "temporary-secret-key",
            SecurityToken: "security-token",
            StartTime: 1_700_000_000,
            ExpiredTime: 1_700_001_800,
        });
    },
};

const cos = new COS(options);

const authorization: COS.Authorization = COS.getAuthorization({
    SecretId: "secret-id",
    SecretKey: "secret-key",
    Method: "PUT",
    Pathname: "/example.txt",
});
const digest: string = COS.util.md5("content");

const putObjectParams: COS.PutObjectParams = {
    Bucket: "examplebucket-1250000000",
    Region: "ap-guangzhou",
    Key: "example.txt",
    Body: "content",
    ContentType: "text/plain",
    onProgress(info) {
        const percent: number = info.percent;
        percent.toFixed(2);
    },
};

const putResult: Promise<COS.PutObjectResult> = cos.putObject(putObjectParams);
void putResult;

cos.putObject(putObjectParams, (error, result) => {
    if (error) {
        error.message?.toLowerCase();
        return;
    }

    const etag: COS.ETag = result.ETag;
    etag.toLowerCase();
});

const uploadResult: Promise<COS.UploadFileResult> = cos.uploadFile({
    Bucket: "examplebucket-1250000000",
    Region: "ap-guangzhou",
    Key: "photo.jpg",
    FilePath: "wxfile://temporary-photo.jpg",
});
void uploadResult;

const objectUrl: string = cos.getObjectUrl({
    Bucket: "examplebucket-1250000000",
    Region: "ap-guangzhou",
    Key: "photo.jpg",
    Sign: true,
});
void objectUrl;
void authorization;
void digest;

// @ts-expect-error Protocol only accepts HTTP or HTTPS.
new COS({ Protocol: "ftp:" });

// @ts-expect-error Bucket is required for object operations.
cos.putObject({ Region: "ap-guangzhou", Key: "example.txt", Body: "content" });
