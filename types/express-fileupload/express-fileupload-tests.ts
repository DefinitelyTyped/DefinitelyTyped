import express = require('express');
import { RequestHandler, Request, Response, NextFunction } from 'express-serve-static-core';
import fileUpload = require('express-fileupload');

type UploadedFile = fileUpload.UploadedFile;

const app: express.Express = express();

function isUploadedFile(file: UploadedFile | UploadedFile[]): file is UploadedFile {
    return typeof file === 'object' && (file as UploadedFile).name !== undefined;
}

const uploadHandler: RequestHandler = (req: Request, res: Response, next: NextFunction) => {
    if (typeof req.files === 'object') {
        const fileField = req.files.field;
        if (isUploadedFile(fileField)) {
            console.log(fileField.name);
            fileField.mv('/tmp/test', err => {
                if (err) {
                    console.log('Error while copying file to target location');
                }
            });
        }

        const fileList = req.files.fileList;
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
app.use(
    fileUpload({
        abortOnLimit: false,
        createParentPath: false,
        debug: false,
        limitHandler: false,
        parseNested: false,
        preserveExtension: false,
        responseOnLimit: 'proper messsage',
        safeFileNames: false,
        tempFileDir: '/temp',
        uploadTimeout: 30 * 1_000,
        uriDecodeFileNames: false,
        useTempFiles: false,
    }),
);
app.use(
    fileUpload({
        limitHandler: (req, res, next) => {
            if (req.files) {
                if (isUploadedFile(req.files.field)) {
                    console.log(req.files.field.name);
                }
            }
            next();
        },
    }),
);
app.use(fileUpload({ useTempFiles: true, tempFileDir: 'temp2/' }));
app.use(fileUpload({ limitHandler: true }));
app.use(fileUpload({ uploadTimeout: 6_000 }));
