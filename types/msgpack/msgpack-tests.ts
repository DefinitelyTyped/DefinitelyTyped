var packed = msgpack.pack("");
msgpack.unpack(packed);

var packedString = msgpack.pack("", true);
msgpack.unpack(packedString);

var url = "http://example.com";

var uploadOption = {
  data: "",
  worker: false,
  timeout: 10,
  before: (xhr: XMLHttpRequest, option: msgpack.MsgPackUploadOption) => { },
  after: (xhr: XMLHttpRequest, option: msgpack.MsgPackUploadOption, result: msgpack.MsgPackCallbackResult) => { }
};
var uploadCallback = (data: string, option: msgpack.MsgPackUploadOption, result: msgpack.MsgPackCallbackResult) => { };
msgpack.upload(url, uploadOption, uploadCallback);

var downloadOption = {
  worker: false,
  timeout: 10,
  before: (xhr: XMLHttpRequest, option: msgpack.MsgPackDownloadOption) => { },
  after: (xhr: XMLHttpRequest, option: msgpack.MsgPackDownloadOption, result: msgpack.MsgPackCallbackResult) => { }
};
var downloadCallback = (data: any, option: msgpack.MsgPackDownloadOption, result: msgpack.MsgPackCallbackResult) => { };
msgpack.download(url, downloadOption, downloadCallback);
