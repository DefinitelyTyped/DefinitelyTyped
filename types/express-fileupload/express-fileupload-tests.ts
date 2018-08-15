import express = require('express');
import { RequestHandler, Request, Response, NextFunction } from 'express-serve-static-core';
import fileUpload = require('express-fileupload');

type UploadedFile = fileUpload.UploadedFile;

const app: express.Express = express();

app.use(fileUpload({debug: true}));

function isUploadedFile(file: UploadedFile | UploadedFile[]): file is UploadedFile {
    return typeof file === 'object' && (<UploadedFile> file).name !== undefined;
}

const uploadHandler: RequestHandler = (req: Request, res: Response, next: NextFunction) => {
    if (typeof req.files === 'object') {
        const fileField = req.files.field;
        if (isUploadedFile(fileField)) {
            console.log(fileField.name);
            fileField.mv('/tmp/test', (err) => {
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
