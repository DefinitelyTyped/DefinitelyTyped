// Aliases required for alignment with the IDL array buffer view types,
// which do not accept views over SharedArrayBuffers by default.
// TODO: remove these aliases once @types/node no longer supports TS 5.6,
// and use the unaliased types instead.
declare module "stream/web" {
    type NonSharedArrayBufferView = ArrayBufferView<ArrayBuffer>;
    type NonSharedUint8Array = Uint8Array<ArrayBuffer>;
}
