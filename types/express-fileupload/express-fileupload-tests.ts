import express = require('express');
import { Request } from 'express-serve-static-core';
import fileUpload = require('express-fileupload');

// test type exports
type FileArray = fileUpload.FileArray;
type UploadedFile = fileUpload.UploadedFile;
type Options = fileUpload.Options;

const app: express.Express = express();

function isSingleFile(file: UploadedFile | UploadedFile[]): file is UploadedFile {
    return typeof file === 'object' && (file as UploadedFile).name !== undefined;
}

function isFileArray(file: UploadedFile | UploadedFile[]): file is UploadedFile[] {
    return Array.isArray(file);
}

const uploadHandler = (req: Request) => {
    const files = req.files; // $ExpectType FileArray | null | undefined
    if (files != null) {
        const fileField = files.field; // $ExpectType UploadedFile | UploadedFile[]
        if (isSingleFile(fileField)) {
            fileField.data; // $ExpectType Buffer
            fileField.encoding; // $ExpectType string
            fileField.md5; // $ExpectType string
            fileField.mimetype; // $ExpectType string
            fileField.name; // $ExpectType string
            fileField.size; // $ExpectType number
            fileField.tempFilePath; // $ExpectType string
            fileField.truncated; // $ExpectType boolean
            console.log(fileField.name);
            // $ExpectType void
            fileField.mv('/tmp/test', err => {
                err; // $ExpectType any
                if (err) {
                    console.log('Error while copying file to target location');
                }
            });
            fileField.mv('foo'); // $ExpectType Promise<void>
        }

        if (isFileArray(fileField)) {
            console.log(fileField[0].name);
            fileField[0].mv('/tmp/test', err => {
                if (err) {
                    console.log('Error while copying file to target location');
                }
            });
        }

        const fileList = files.fileList;
        if (Array.isArray(fileList)) {
            for (const file of fileList) {
                console.log(file.name);
            }
        }
    }
};

app.post('/upload', uploadHandler);
app.use(fileUpload());
app.use(fileUpload({}));
app.use(fileUpload({ debug: true }));
app.use(fileUpload({ safeFileNames: /\\/g }));
app.use(fileUpload({ safeFileNames: true }));
app.use(fileUpload({ safeFileNames: true, preserveExtension: true }));
app.use(fileUpload({ safeFileNames: true, preserveExtension: 2 }));
app.use(fileUpload({ abortOnLimit: true }));
app.use(fileUpload({ responseOnLimit: 'Size Limit reached' }));
app.use(fileUpload({ limitHandler: true }));
app.use(fileUpload({ limits: { fileSize: 4096 }, defCharset: 'utf8' }));
app.use(fileUpload({ createParentPath: false }));
app.use(fileUpload({ parseNested: false }));
app.use(fileUpload({ tempFileDir: '/temp' }));
app.use(fileUpload({ uriDecodeFileNames: false }));
app.use(
    fileUpload({
        limitHandler: (req, res, next) => {
            req; // $ExpectType Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>
            res; // $ExpectType Response<any, Record<string, any>, number>
            next; // $ExpectType NextFunction
            if (req.files) {
                if (isSingleFile(req.files.field)) {
                    console.log(req.files.field.name);
                }
                if (isFileArray(req.files.field)) {
                    console.log(req.files.field[0].name);
                }
            }
            next();
        },
    }),
);
app.use(fileUpload({ useTempFiles: true, tempFileDir: 'temp2/' }));
app.use(fileUpload({ limitHandler: true }));
app.use(fileUpload({ uploadTimeout: 6_000 }));

// busboy options
app.use(fileUpload({ headers: { foo: 'bar' } }));
app.use(fileUpload({ highWaterMark: 1 }));
app.use(fileUpload({ fileHwm: 1 }));
app.use(fileUpload({ defCharset: 'utf8' }));
app.use(fileUpload({ defParamCharset: 'utf8' }));
app.use(fileUpload({ preservePath: true }));
app.use(fileUpload({ limits: { fieldNameSize: 1 } }));
