"use strict";

let accessKeyId: string
let secretAccessKey: string
let region: string
let bucket: string

import AWS = require("aws-sdk")

let s3 = new AWS.S3({
    accessKeyId: accessKeyId,
    secretAccessKey: secretAccessKey,
    region: region,
})

import multer = require("multer")
import s3Storage = require("multer-s3")

let s3Upload = multer({
    storage: s3Storage({
        s3: s3,
        bucket: bucket,
        contentType: s3Storage.AUTO_CONTENT_TYPE,
    })
})
