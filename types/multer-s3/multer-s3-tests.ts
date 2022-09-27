import { S3Client } from '@aws-sdk/client-s3';
import multer = require("multer");
import s3Storage = require("multer-s3");

declare const accessKeyId: string;
declare const secretAccessKey: string;
declare const region: string;
declare const bucket: string;

const s3 = new S3Client({ credentials: { accessKeyId, secretAccessKey }, region });

const s3Upload = multer({
    storage: s3Storage({
        s3,
        bucket,
        contentType: s3Storage.AUTO_CONTENT_TYPE,
    }),
});
