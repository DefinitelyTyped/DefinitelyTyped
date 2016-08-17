/// <reference path="../express/express.d.ts" />
/// <reference path="../multer/multer.d.ts" />
/// <reference path="./multer-s3.d.ts" />

"use strict";

import AWS = require('aws-sdk')
import express = require('express')
import multer = require('multer')
import s3Storage = require('multer-s3')

var accessKeyId: string;
var secretAccessKey: string;
var region: string;
var bucket: string;

let s3 = new AWS.S3({
    accessKeyId: accessKeyId,
    secretAccessKey: secretAccessKey,
    region: region,
})

var s3Upload = multer({
    storage: s3Storage({
        s3: s3,
        bucket: bucket,
        contentType: s3Storage.AUTO_CONTENT_TYPE,
    })
})
