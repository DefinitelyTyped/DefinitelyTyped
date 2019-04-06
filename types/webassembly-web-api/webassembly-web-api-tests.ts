const response: Response = new Response();
const promise: Promise<Response> = Promise.resolve(response);

// CompileStreaming - taking Response
// $ExpectType Promise<Module>
WebAssembly.compileStreaming(response);

// CompileStreaming - taking Promise<Response>
// $ExpectType Promise<Module>
WebAssembly.compileStreaming(promise);

// InstantiateStreaming - taking Response
// $ExpectType Promise<ResultObject>
WebAssembly.instantiateStreaming(response);

// InstantiateStreaming - taking Promise<Response>
// $ExpectType Promise<ResultObject>
WebAssembly.instantiateStreaming(promise);
