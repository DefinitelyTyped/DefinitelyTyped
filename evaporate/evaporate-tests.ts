/// <reference path="./evaporate.d.ts" />

function test_upload() {
  var evaporate = new Evaporate({});
  var uploadId = evaporate.add({});
  evaporate.cancel(uploadId);
}
