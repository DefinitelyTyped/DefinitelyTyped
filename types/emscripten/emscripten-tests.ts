/// <reference types="emscripten" />

/// Extending Module
// This requires -s "EXTRA_EXPORTED_RUNTIME_METHODS=['cwrap','ccall','getValue','setvalue']"
// in emcc compilation flags
interface EmscriptenModule {
    cwrap: typeof cwrap;
    ccall: typeof ccall;
    getValue: typeof getValue;
    setValue: typeof setValue;
}

let Module: EmscriptenModule;

/// Module
function ModuleTest(): void {
    Module.environment = 'WEB';
    Module.environment = 'NODE';
    Module.environment = 'WORKER';
    Module.noInitialRun = false;
    Module.logReadFiles = false;
    Module.filePackagePrefixURL = 'http://www.example.org/';
    Module.preinitializedWebGLContext = new WebGLRenderingContext();
    Module.onAbort = what => console.log('abort');
    Module.onRuntimeInitialized = () => console.log('init');

    const package: ArrayBuffer = Module.getPreloadedPackage('package-name', 100);
    const exports: Emscripten.WebAssemblyExports = Module.instantiateWasm(
        [{ name: 'func-name', kind: 'function' }],
        (module: WebAssembly.Module) => {},
    );
    const memFile: string = Module.locateFile('file.mem', 'http://www.example.org/');
    Module.onCustomMessage(new MessageEvent('TestType'));

    Module.print = text => alert('stdout: ' + text);

    const int_sqrt_number = Module.cwrap('int_sqrt', 'number', ['number']);
    const int_sqrt_null = Module.cwrap('int_sqrt', null, ['number']);
    const num: number = int_sqrt_number(12);
    const empty: null = int_sqrt_null(28);

    const myTypedArray = new Uint8Array(10);
    const buf = Module._malloc(myTypedArray.length * myTypedArray.BYTES_PER_ELEMENT);
    Module.setValue(buf, 10, 'i32');
    const x = Module.getValue(buf, 'i32') + 123;
    Module.HEAPU8.set(myTypedArray, buf);
    Module.ccall('my_function', 'number', ['number'], [buf]);
    Module.ccall('my_function', null, ['number'], [buf]);
    Module.ccall('my_function', null, ['number'], [buf], { async: true });
    Module.cwrap('my_function', 'string', ['number', 'boolean', 'array']);
    Module.cwrap('my_function', null, ['number']);
    Module.cwrap('my_function', 'string', ['number', 'boolean', 'array'], { async: true });
    Module._free(buf);
    Module.destroy({});
}

/// FS
function FSTest(): void {
    FS.init(
        () => null,
        _ => null,
        _ => null,
    );
    FS.init(null, null, null);

    FS.mkdir('/working');
    FS.mount(NODEFS, { root: '.' }, '/working');

    function myAppStartup(): void {
        FS.mkdir('/data');
        FS.mount(IDBFS, {}, '/data');

        FS.syncfs(true, err => {
            // handle callback
        });
    }

    function myAppShutdown() {
        FS.syncfs(err => {
            // handle callback
        });
    }

    const id = FS.makedev(64, 0);
    FS.registerDevice(id, {});
    FS.mkdev('/dummy', id);

    FS.writeFile('file', 'foobar');
    FS.symlink('file', 'link');

    FS.writeFile('/foobar.txt', 'Hello, world');
    FS.unlink('/foobar.txt');

    FS.writeFile('file', 'foobar');
    FS.symlink('file', 'link');

    FS.writeFile('forbidden', "can't touch this");
    FS.chmod('forbidden', parseInt('0000', 8));

    FS.writeFile('file', 'foobar');
    FS.truncate('file', 3);

    const contents1 = FS.readFile('file', { encoding: 'utf8' });
    const contents2 = FS.readFile('file', { encoding: 'binary' });
    const contents3 = FS.readFile('file');

    const rstream = FS.open('abinaryfile', 'r');
    const buf = new Uint8Array(4);
    FS.read(rstream, buf, 0, 4, 0);
    FS.close(rstream);

    const data = new Uint8Array(32);
    const wstream = FS.open('dummy1', 'w+');
    FS.write(wstream, data, 0, data.length, 0);
    FS.close(wstream);

    FS.createDataFile('/', 'dummy2', data, true, true, true);

    const lookup = FS.lookupPath('path', { parent: true });
}

/// String conversions
function StringConv(): void {
    let s = '';
    let p = 0;

    const nullptr = 0;
    s = UTF8ToString(nullptr);
    s = UTF8ToString(nullptr, 42);
    s = UTF16ToString(nullptr);
    s = UTF32ToString(nullptr);
    const i1 = lengthBytesUTF8(s);
    const i2 = lengthBytesUTF16(s);
    const i3 = lengthBytesUTF32(s);
    stringToUTF8(s, p);
    stringToUTF8(s, p, 42);
    stringToUTF16(s, p);
    stringToUTF16(s, p, 42);
    stringToUTF32(s, p);
    stringToUTF32(s, p, 42);
    p = allocateUTF8(s);
    Module._free(p);
}

// Stack allocations
function StackAlloc() {
    const stack = stackSave();
    const ptr = stackAlloc(42);
    const strPtr = allocateUTF8OnStack('testString');
    stackRestore(stack);
}

let createModule: EmscriptenModuleFactory;
interface MyModule extends EmscriptenModule {
    foo: string;
}
let createMyModule: EmscriptenModuleFactory<MyModule>;

async function ModuleFactoryTest() {
    const module1 = await createModule();
    module1.print('🦆');
    const module2 = await createModule({
        print() {
            console.log('testing passing overrides');
        },
    });
    const myModule: MyModule = await createMyModule({
        foo: 'bar',
        locateFile: (url, dir) => '🌈',
    });
    myModule.foo;
}
