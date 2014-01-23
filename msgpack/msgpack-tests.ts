/// <reference path="msgpack.d.ts" />

var packed = msgpack.pack("");
msgpack.unpack(packed);

var packedString = msgpack.pack("", true);
msgpack.unpack(packedString);

var url = "http://example.com";

var uploadOption = {
  data: "",
  worker: false,
  timeout: 10,
  before: (xhr: XMLHttpRequest, option: MsgPackUploadOption) => { },
  after: (xhr: XMLHttpRequest, option: MsgPackUploadOption, result: MsgPackCallbackResult) => { }
};
var uploadCallback = (data: string, option: MsgPackUploadOption, result: MsgPackCallbackResult) => { };
msgpack.upload(url, uploadOption, uploadCallback);

var downloadOption = {
  worker: false,
  timeout: 10,
  before: (xhr: XMLHttpRequest, option: MsgPackDownloadOption) => { },
  after: (xhr: XMLHttpRequest, option: MsgPackDownloadOption, result: MsgPackCallbackResult) => { }
};
var downloadCallback = (data: any, option: MsgPackDownloadOption, result: MsgPackCallbackResult) => { };
msgpack.download(url, downloadOption, downloadCallback);
