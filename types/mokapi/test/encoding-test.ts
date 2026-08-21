import { base64 } from "mokapi/encoding";

// @ts-expect-error
base64.encode();
const s: string = base64.encode("");
// @ts-expect-error
const b: boolean = base64.encode("");
base64.encode(new ArrayBuffer(12));

// @ts-expect-error
base64.decode();
base64.decode("");
// @ts-expect-error
const i: number = base64.decode("");
const decoded: string = base64.decode("");
