import Module = require('node:module');
import { URL } from 'node:url';
require.extensions[".ts"] = () => "";

Module.runMain();
const s: string = Module.wrap("some code");

const m1: Module = new Module("moduleId");
const m2: Module = new Module("moduleId");
const b: string[] = Module.builtinModules;
let paths: string[] = [];
paths = m1.paths;
m1 instanceof Module;

Module.createRequireFromPath('./test')('test');

let rf: (m: string) => any;

rf = Module.createRequire('mod');
rf = Module.createRequireFromPath('mod');
rf = Module.createRequire(new URL('file:///C:/path/'));

const aModule: NodeModule = new Module("s");
const bModule: NodeModule = new Module("b", aModule);

const builtIn: string[] = Module.builtinModules;

const customRequire1 = Module.createRequireFromPath('./test');
const customRequire2 = Module.createRequire('./test');

customRequire1('test');
customRequire2('test');

const resolved1: string = customRequire1.resolve('test');
const resolved2: string = customRequire2.resolve('test');

const paths1: string[] | null  = customRequire1.resolve.paths('test');
const paths2: string[] | null  = customRequire2.resolve.paths('test');

const cachedModule1: Module | undefined = customRequire1.cache['/path/to/module.js'];
const cachedModule2: Module | undefined = customRequire2.cache['/path/to/module.js'];

const main1: Module | undefined = customRequire1.main;
const main2: Module | undefined = customRequire2.main;

Module.syncBuiltinESMExports();

const smap = new Module.SourceMap({
    file: 'test.js',
    mappings: 'ASDASd',
    names: [],
    sourceRoot: '/',
    sources: [],
    version: 3,
    sourcesContent: [],
});
const pl: Module.SourceMapPayload = smap.payload;
const entry: Module.SourceMapping = smap.findEntry(1, 1);
