function debug(s: string) {
  // debug(s)
}

// Table
let table = new WebAssembly.Table({element: "anyfunc", initial: 1, maximum: 10});
debug(`table.length=${table.length}`);
debug(`table.get(0)=${table.get(0)}`);
table.grow(1);

// Memory
let memory = new WebAssembly.Memory({initial: 2, maximum: 8});
debug(`memory.grow(6)=${memory.grow(6)}`);
let u8 = new Uint8Array(memory.buffer);
u8[0] = 1;
u8[1] = 2;
debug(`u8[0]=${u8[0]}`);
debug(`u8[1]=${u8[1]}`);

let wasmDataU8 = new Uint8Array([0, 1, 2, 3, 4, 5, 6, 7]);
debug(`wasmDataU8.length=${wasmDataU8.length}`);
debug(`wasmDataU8[0]=${wasmDataU8[0].toString(16)}`);
debug(`wasmDataU8[1]=${wasmDataU8[1].toString(16)}`);
debug(`wasmDataU8[2]=${wasmDataU8[2].toString(16)}`);
debug(`wasmDataU8[3]=${wasmDataU8[3].toString(16)}`);
debug(`wasmDataU8[4]=${wasmDataU8[4].toString(16)}`);
debug(`wasmDataU8[5]=${wasmDataU8[5].toString(16)}`);
debug(`wasmDataU8[6]=${wasmDataU8[6].toString(16)}`);
debug(`wasmDataU8[7]=${wasmDataU8[7].toString(16)}`);

// Validate
let valid = WebAssembly.validate(wasmDataU8);
debug("wasmDataU8 is " + (valid ? "" : "not ") + "a valid wasm wasmModule");

// Module
let wasmModule = new WebAssembly.Module(wasmDataU8);
debug(`wasmModule=${wasmModule}`);

// CustomSections
let nameSections = WebAssembly.Module.customSections(wasmModule, "name");
debug(`Module contains ${nameSections.length} name sections`);
if (nameSections.length !== 0) {
    debug("Module contains a name section");
    debug(nameSections[0].toString());
}

// Instance
let instance = new WebAssembly.Instance(wasmModule);
debug(`instance=${instance}`);
debug(`instance.exports=${instance.exports}`);

// Compile Asynchronously
debug("instantiateAsync compile:");
WebAssembly.compile(wasmDataU8).then((mod: WebAssembly.Module) => {
    debug(`instantiateAsync compiled: ${JSON.stringify(mod)}`);
});

// Instantiate
//   Primary overload — taking wasm binary code
WebAssembly.instantiate(wasmDataU8).then((result: WebAssembly.ResultObject) => {
    debug(`Primary overload mod=${result.module}`);
    debug(`Primary overload inst=${result.instance}`);
    debug(`Primary exec instance.exports.addTwo1(-1, 1)=${result.instance.exports.addTwo1(-1, 1)}`);
});

// Instantiate
//   Secondary overload — taking a Module object
WebAssembly.instantiate(wasmModule).then((instance: WebAssembly.Instance) => {
    debug(`Secondary overload instance=${instance}`);
    debug(`Secondary exec instance.exports.addTwo1(0, -1)=${instance.exports.addTwo1(0, -1)}`);
});

// Validate
WebAssembly.validate(new ArrayBuffer(8));
WebAssembly.validate(wasmDataU8);
