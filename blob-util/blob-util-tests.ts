/// <reference path="./blob-util.d.ts" />



blobUtil.imgSrcToBlob('some url').then(function (blob) {
    var blobURL:string = blobUtil.createObjectURL(blob);
});

blobUtil.imgSrcToBlob('some url', 'text/application').then(function (blob) {
    var blobURL:string = blobUtil.createObjectURL(blob);
});

blobUtil.imgSrcToBlob('some url', 'text/application', 'Anonymous').then(function (blob) {
    var blobURL:string = blobUtil.createObjectURL(blob);
});

var someURL:string = blobUtil.createObjectURL(new Blob([]));

blobUtil.revokeObjectURL('someUrl');

blobUtil.blobToBinaryString(new Blob([])).then(function(someString){
   var test:string = someString;
});

blobUtil.base64StringToBlob('base64').then(function(someBlob){
    var test:Blob = someBlob;
});

blobUtil.binaryStringToBlob('01010101010','text/application').then(function(someBlob){
    var test:Blob = someBlob;
});

blobUtil.blobToBase64String(new Blob([])).then(function(someString){
    var test:string = someString;
});

blobUtil.dataURLToBlob('url').then(function(someBlob){
    var test:Blob = someBlob;
});

blobUtil.imgSrcToDataURL('path').then(function(someString){
    var test:string = someString;
});

blobUtil.canvasToBlob('canvas').then(function(someBlob){
    var test:Blob = someBlob;
});

blobUtil.imgSrcToBlob('url').then(function(someBlob){
    var test:Blob = someBlob;
});

blobUtil.arrayBufferToBlob(new ArrayBuffer(50)).then(function(someBlob){
    var test:Blob = someBlob;
});

blobUtil.blobToArrayBuffer(new Blob([])).then(function(someArray){
    var test:ArrayBuffer = someArray;
});
