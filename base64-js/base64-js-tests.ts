import * as base64js from "base64-js";

const length: number = base64js.byteLength("");
const bytes: Uint8Array = base64js.toByteArray("");
const decoded: string = base64js.fromByteArray(new Uint8Array(0));
