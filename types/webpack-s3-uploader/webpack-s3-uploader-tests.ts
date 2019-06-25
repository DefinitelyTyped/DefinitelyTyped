import WebpackS3Uploader = require("webpack-s3-uploader");

new WebpackS3Uploader({
    s3Options: {
    },
    s3UploadOptions: {
        Bucket: "red"
    }
});

new WebpackS3Uploader({
    s3Options: {
        credentials: {
            accessKeyId: "abc",
            secretAccessKey: "def"
        },
        region: "us-west-1",
        sessionToken: "lalala"
    },
    s3UploadOptions: {
        Bucket: "Liza"
    }
});
