export {};

import * as console from "node:console";

declare global {
    interface Console extends console.Console {}

    var console: typeof globalThis extends { onmessage: any; console: infer T } ? T : Console;
}
