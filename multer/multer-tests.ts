/// <reference path="../express/express.d.ts" />
/// <reference path="multer.d.ts" />

import express = require('express');
import multer = require('multer');

var upload = multer({ dest: 'uploads/' });

var app = express();

app.post('/profile', upload.single('avatar'), (req, res, next) => {
});

app.post('/photos/upload', upload.array('photos', 12), (req, res, next) => {
});

var cpUpload = upload.fields([{ name: 'avatar', maxCount: 1 }, { name: 'gallery', maxCount: 8 }])
app.post('/cool-profile', cpUpload, (req, res, next) => {
});

var diskStorage = multer.diskStorage({
    destination(req, file, cb) {
        cb(null, '/tmp/my-uploads');
    },
    filename(req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now());
    }
})

var diskUpload = multer({ storage: diskStorage });

var memoryStorage = multer.memoryStorage();
var memoryUpload = multer({ storage: memoryStorage });
