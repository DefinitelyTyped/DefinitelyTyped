declare module "stream/web" {
    type NonSharedArrayBufferView = ArrayBufferView<ArrayBuffer>;
    type NonSharedUint8Array = Uint8Array<ArrayBuffer>;
}
