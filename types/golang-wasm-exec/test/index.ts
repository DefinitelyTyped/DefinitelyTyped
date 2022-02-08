const go = new Go();

WebAssembly.instantiateStreaming(fetch('test.wasm'), go.importObject).then(result => {
  go.run(result.instance);
});
