import * as express from 'express';
import { RequestHandler } from 'express-serve-static-core';
import fileUpload = require('express-fileupload');

const app = express();

app.use(fileUpload());

const uploadHandler: RequestHandler = (req, res, next) => {
    console.log(req.files.field.name);
    console.log(req.files.field2[0].name);
};

app.post('/upload', uploadHandler);
