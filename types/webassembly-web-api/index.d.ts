// Type definitions for the WebAssembly Web API v1
// Project: https://webassembly.org/
// Definitions by: Johannes Henninger <https://github.com/jhenninger>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

/// <reference types="webassembly-js-api" />

/**
 *  The WebAssembly Web API defines extensions to the JavaScript API made
 *  available specifically in web browsers. See [WebAssembly Web
 *  API](https://www.w3.org/TR/wasm-web-api-1/) for more information.
 */
declare namespace WebAssembly {
    function compileStreaming(source: Response | Promise<Response>): Promise<Module>;
    function instantiateStreaming(source: Response | Promise<Response>, importObject?: any): Promise<ResultObject>;
}
