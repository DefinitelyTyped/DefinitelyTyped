// Type definitions for msgpack.js - MessagePack JavaScript Implementation
// Project: https://github.com/uupaa/msgpack.js/
// Definitions by: Shinya Mochizuki <https://github.com/enrapt-mochizuki/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace msgpack {
  interface MsgPackStatic {
    /**
     * @param data string or ByteArray.
     * @param toString return string value if true.
     *
     * @return string or ByteArray or false. pack failed if false.
     */
    pack(data: any, toString?: boolean): any;

    /**
     * @param data string or ByteArray.
     *
     * @return string or ByteArray or undefined. unpack failed if undefined.
     */
    unpack(data: any): any;

    worker: string;

    upload(url: string, option: MsgPackUploadOption, callback: MsgPackUploadCallback): void;

    download(url: string, option: MsgPackDownloadOption, callback: MsgPackDownloadCallback): void;
  }

  interface MsgPackUploadOption {
    /**
     * string or ByteArray
     */
    data: any;

    /**
     * use WebWorker if true.
     */
    worker?: boolean;

    /**
     * timeout sec.
     */
    timeout?: number;

    before?: (xhr: XMLHttpRequest, option: MsgPackUploadOption) => void;

    after?: (xhr: XMLHttpRequest, option: MsgPackUploadOption, result: MsgPackCallbackResult) => void;
  }

  interface MsgPackUploadCallback {
    (data: string, option: MsgPackUploadOption, result: MsgPackCallbackResult): void;
  }

  interface MsgPackDownloadOption {
    /**
     * use WebWorker if true.
     */
    worker?: boolean;

    /**
     * timeout sec.
     */
    timeout?: number;

    before?: (xhr: XMLHttpRequest, option: MsgPackDownloadOption) => void;

    after?: (xhr: XMLHttpRequest, option: MsgPackDownloadOption, result: MsgPackCallbackResult) => void;
  }

  interface MsgPackDownloadCallback {
    /**
     * @param data string or ByteArray
     */
    (data: any, option: MsgPackDownloadCallback, result: MsgPackCallbackResult): void;
  }

  interface MsgPackCallbackResult {
    status: number;

    ok: boolean;
  }
}

declare var msgpack: msgpack.MsgPackStatic;

export = msgpack;
export as namespace msgpack;
