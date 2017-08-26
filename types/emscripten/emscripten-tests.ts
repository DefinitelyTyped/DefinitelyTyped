/// Module
function ModuleTest(): void {
    Module.environment = "WEB";
    Module.environment = "NODE";
    Module.noInitialRun = false;
    Module.logReadFiles = false;
    Module.filePackagePrefixURL = "http://www.example.org/";
    Module.preinitializedWebGLContext = new WebGLRenderingContext();

    let package: ArrayBuffer = Module.getPreloadedPackage("package-name", 100);
    let exports: WebAssembly.Exports = Module.instantiateWasm(
        [{name: "func-name", kind: "function"}],
        (module: WebAssembly.Module) => {}
    );
    let memFile: string = Module.locateFile("http://www.example.org/file.mem");
    Module.onCustomMessage(new MessageEvent("TestType"));

    Module.print = function(text) { alert('stdout: ' + text) };

    var int_sqrt = Module.cwrap('int_sqrt', 'number', ['number'])
    int_sqrt(12)
    int_sqrt(28)

    var myTypedArray = new Uint8Array(10);
    var buf = Module._malloc(myTypedArray.length*myTypedArray.BYTES_PER_ELEMENT);
    Module.setValue(buf, 10, 'i32');
    var x = Module.getValue(buf, 'i32') + 123;
    Module.HEAPU8.set(myTypedArray, buf);
    Module.ccall('my_function', 'number', ['number'], [buf]);
    Module._free(buf);
    Module.destroy({});
}

/// FS
function FSTest(): void {
    FS.mkdir('/working');
    FS.mount(NODEFS, { root: '.' }, '/working');

    function myAppStartup(): void {
        FS.mkdir('/data');
        FS.mount(IDBFS, {}, '/data');

        FS.syncfs(true, function (err) {
            // handle callback
        });
    }

    function myAppShutdown() {
        FS.syncfs(function (err) {
            // handle callback
        });
    }

    var id = FS.makedev(64, 0);
    FS.registerDevice(id, {});
    FS.mkdev('/dummy', id);

    FS.writeFile('file', 'foobar');
    FS.symlink('file', 'link');

    FS.writeFile('/foobar.txt', 'Hello, world');
    FS.unlink('/foobar.txt');

    FS.writeFile('file', 'foobar');
    FS.symlink('file', 'link');

    FS.writeFile('forbidden', 'can\'t touch this');
    FS.chmod('forbidden', parseInt("0000", 8));

    FS.writeFile('file', 'foobar');
    FS.truncate('file', 3);

    var stream = FS.open('abinaryfile', 'r');
    var buf = new Uint8Array(4);
    FS.read(stream, buf, 0, 4, 0);
    FS.close(stream);

    var data = new Uint8Array(32);
    var stream = FS.open('dummy', 'w+');
    FS.write(stream, data, 0, data.length, 0);
    FS.close(stream);

    var lookup = FS.lookupPath("path", { parent: true });
}
