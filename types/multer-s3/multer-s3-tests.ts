import AWS = require("aws-sdk");
import multer = require("multer");
import s3Storage = require("multer-s3");

let accessKeyId: string;
let secretAccessKey: string;
let region: string;
let bucket: string;

const s3 = new AWS.S3({ accessKeyId, secretAccessKey, region });

const s3Upload = multer({
    storage: s3Storage({
        s3,
        bucket,
        contentType: s3Storage.AUTO_CONTENT_TYPE,
    }),
});
