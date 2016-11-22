import * as Tesseract from 'tesseract.js';

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

var job = Tesseract.recognize("./demo.png");
job.progress(message => console.log(message));
job.catch(err => console.error(err));
job.then(result => console.log(result));
job.finally(resultOrError => console.log(resultOrError));

Tesseract.create({
    workerPath: '/path/to/worker.js',
    langPath: 'https://cdn.rawgit.com/naptha/tessdata/gh-pages/3.02/',
    corePath: 'https://cdn.rawgit.com/naptha/tesseract.js-core/0.1.0/index.js',
});
