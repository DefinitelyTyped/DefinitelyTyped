export {};

import * as util from "node:util";

type _TextDecoder = typeof globalThis extends { onmessage: any } ? {} : util.TextDecoder;
type _TextEncoder = typeof globalThis extends { onmessage: any } ? {} : util.TextEncoder;

declare global {
    interface TextDecoder extends _TextDecoder {}
    var TextDecoder: typeof globalThis extends { onmessage: any; TextDecoder: infer T } ? T : typeof util.TextDecoder;

    interface TextEncoder extends _TextEncoder {}
    var TextEncoder: typeof globalThis extends { onmessage: any; TextEncoder: infer T } ? T : typeof util.TextEncoder;
}
