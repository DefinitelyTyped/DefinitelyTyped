/// <reference path="tesseract.js.d.ts" />

import * as TesseractLib from 'tesseract.js';

TesseractLib.recognize("./demo.png", {
    lang: 'chi_sim',
}).progress(function (p) {
    console.log('progress', p);
}).then(function (result) {
    console.log(result.text)
});

TesseractLib.detect("./demo.png").then(function (result) {
    console.log(result)
});

TesseractLib.recognize("./demo.png")
    .progress(message => console.log(message))
    .catch(err => console.error(err))
    .then(result => console.log(result))
    .finally(resultOrError => console.log(resultOrError));

var job1 = TesseractLib.recognize("./demo.png");
job1.progress(message => console.log(message));
job1.catch(err => console.error(err));
job1.then(result => console.log(result));
job1.finally(resultOrError => console.log(resultOrError));

TesseractLib.create({
    workerPath: '/path/to/worker.js',
    langPath: 'https://cdn.rawgit.com/naptha/tessdata/gh-pages/3.02/',
    corePath: 'https://cdn.rawgit.com/naptha/tesseract.js-core/0.1.0/index.js',
});

Tesseract.recognize("./demo.png", {
    lang: 'chi_sim',
}).progress(function (p) {
    console.log('progress', p);
}).then(function (result) {
    console.log(result.text)
});

Tesseract.detect("./demo.png").then(function (result) {
    console.log(result)
});

Tesseract.recognize("./demo.png")
    .progress(message => console.log(message))
    .catch(err => console.error(err))
    .then(result => console.log(result))
    .finally(resultOrError => console.log(resultOrError));

var job2 = Tesseract.recognize("./demo.png");
job2.progress(message => console.log(message));
job2.catch(err => console.error(err));
job2.then(result => console.log(result));
job2.finally(resultOrError => console.log(resultOrError));

Tesseract.create({
    workerPath: '/path/to/worker.js',
    langPath: 'https://cdn.rawgit.com/naptha/tessdata/gh-pages/3.02/',
    corePath: 'https://cdn.rawgit.com/naptha/tesseract.js-core/0.1.0/index.js',
});
