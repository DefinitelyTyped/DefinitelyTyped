/// <reference path="./blob-stream.d.ts" />

var bl = BlobStream();

var blob = bl.toBlob("aplication/PDF");
var brl = bl.toBlobURL("app/JSON");