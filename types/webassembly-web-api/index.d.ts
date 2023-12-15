/**
 *  The WebAssembly Web API defines extensions to the JavaScript API made
 *  available specifically in web browsers. See [WebAssembly Web
 *  API](https://www.w3.org/TR/wasm-web-api-1/) for more information.
 */
declare namespace WebAssembly {
    /// Other WebAssembly declarations, for compatibility with older versions of Typescript
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface Module {}
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface Instance {}
    interface ResultObject {
        module: Module;
        instance: Instance;
    }

    function compileStreaming(source: Response | Promise<Response>): Promise<Module>;
    function instantiateStreaming(source: Response | Promise<Response>, importObject?: object): Promise<ResultObject>;
}
