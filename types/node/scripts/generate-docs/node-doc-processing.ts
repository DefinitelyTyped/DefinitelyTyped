import { existsSync, writeFileSync, readFileSync } from "fs";
import { get } from "https";
import { resolve } from "path";

export interface Stability {
    stability?: number;
    stabilityText?: string;
}

export interface ChangeDocNode {
    version: string;
    "pr-url": string;
    description: string;
}

export interface MetaDocNode {
    added: string[];
    changes: ChangeDocNode[];
    deprecated?: string[];
}

export interface MethodDocNode extends Stability {
    signatures: SignatureDocNode[];
    name: string;
    textRaw: string;
    type: 'method';
    meta?: MetaDocNode;
    desc?: string;
}

export interface ParamDocNode {
    textRaw: string;
    type: string;
    name: string;
    desc?: string;
    default?: string;
}

export interface SignatureDocNode extends Stability {
    params: ParamDocNode[];
    return?: ParamDocNode;
}

export interface ClassDocNode extends Stability {
    type: 'class';
    properties?: PropertyDocNode[];
    classMethods?: MethodDocNode[];
    name: string;
    desc?: string;
    methods?: MethodDocNode[];
    meta?: MetaDocNode;
    signatures?: SignatureDocNode[];
}

export interface PropertyDocNode extends Stability {
    textRaw: string;
    name: string;
    desc?: string;
    methods?: MethodDocNode[];
    meta?: MetaDocNode;
    // This should not exists but node doc is weird
    properties?: PropertyDocNode[]
}

export interface ModuleDocNode extends Stability {
    type: 'module';
    meta?: MetaDocNode;
    introduced_in?: string;
    textRaw?: string;
    name: string;
    desc?: string;
    displayName?: string;
    modules?: ModuleDocNode[];
    classes?: ClassDocNode[];
    methods?: MethodDocNode[];
    properties?: PropertyDocNode[];
    miscs?: ModuleDocNode[];
}

export interface DocRoot {
    miscs?: ModuleDocNode[];
    classes: ClassDocNode[];
    modules: ModuleDocNode[];
    methods: MethodDocNode[];
    globals: Array<MethodDocNode | ClassDocNode>;
}

export interface SubmoduleDocNode {
    name?: string;
    modules?: ModuleDocNode[];
    miscs?: ModuleDocNode[];
}

function isModuleNode(node: object): node is ModuleDocNode {
    return ('type' in node) && (node as any).type === 'module';
}

function trimEmptyModule(node: DocRoot | ModuleDocNode): boolean {
    if (node.modules) {
        const newModules: ModuleDocNode[] = [];
        for (const subMod of node.modules) {
            if (!trimEmptyModule(subMod)) {
                continue;
            }
            newModules.push(subMod);
        }
        node.modules = newModules;
    }
    return !!node.classes?.length || !!node.methods?.length || !!node.modules?.length || !!(isModuleNode(node) && node.properties?.length);
}

function fixupModuleStructure(node: DocRoot): void {
    function getClass(node: ModuleDocNode | DocRoot, className: string): ClassDocNode {
        return node.classes!.find(({ name }) => name === className)!;
    }

    function getModule(node: SubmoduleDocNode, modName: string, allowMiscs = false): ModuleDocNode {
        const ret = node?.modules?.find(({ name }) => name === modName);
        if (!ret && allowMiscs) {
            return node.miscs?.find(({ name }) => name === modName)!;
        }
        if (!ret) {
            throw new Error(`failed to find module ${modName} of ${node.name}`);
        }
        return ret;
    }

    function getPropertyModule(node: ModuleDocNode, modName: string): PropertyDocNode {
        return node.properties!.find(({ name }) => name === modName)!;
    }

    function renameModule(oldName: string, newName: string): void {
        node.modules.find(({ name }) => name === oldName)!.name = newName;
    }

    function unnestSubmodule(modName: string, subs: string[][], allowMisc = false): ModuleDocNode {
        const module = getModule(node, modName);
        module.methods ??= [];
        module.classes ??= [];
        module.properties ??= [];
        for (const path of subs) {
            let mod: ModuleDocNode = module;
            for (const pathSeg of path) {
                mod = getModule(mod, pathSeg, allowMisc);
            }
            module.methods = module.methods.concat(mod.methods ?? []);
            module.classes = module.classes.concat(mod.classes ?? []);
            module.properties = module.properties.concat(mod.properties ?? []);
        }
        return module;
    }

    function unnestModule(path: string[], targetName: string): void {
        let subMod: ModuleDocNode | DocRoot = node;
        for (const seg of path) {
            subMod = getModule(subMod, seg);
        }
        (subMod as ModuleDocNode).name = targetName;
        node.modules.push(subMod as ModuleDocNode);
    }

    function mergeModules(name: string, other: string): void {
        const a = getModule(node, name);
        const b = getModule(node, other);
        a.modules ??= [];
        a.miscs ??= [];
        a.classes ??= [];
        a.methods ??= [];
        a.properties ??= [];
        a.modules = a.modules.concat(b.modules ?? []);
        a.miscs = a.miscs.concat(b.miscs ?? []);
        a.classes = a.classes.concat(b.classes ?? []);
        a.methods = a.methods.concat(b.methods ?? []);
        a.properties = a.properties.concat(b.properties ?? []);
    }

    // un-nest dgram module
    unnestSubmodule('dgram', [['`dgram`_module_functions']]);

    // FS is split into 2 modules, callback based, and promise based.
    unnestSubmodule('fs', [['callback_api'], ['synchronous_api'], ['common_objects']]);

    // yet another rename
    renameModule('performance_measurement_apis', 'perf_hooks');
    renameModule('http/2', 'http2');
    renameModule('tls_(ssl)', 'tls');
    renameModule('webassembly_system_interface_(wasi)', 'wasi');
    unnestModule(['fs', 'promises_api'], 'fs/promises');

    unnestSubmodule('trace_events', [['the_`trace_events`_module']]);

    unnestSubmodule('http2', [['core_api'], ['compatibility_api']]);

    // some of the methods of Http2ServerResponse are incorrectly nested under the `req` property.
    const http2Module = getModule(node, 'http2');
    const httpResponseClass = getClass(http2Module, 'http2.Http2ServerResponse');
    httpResponseClass.methods = httpResponseClass.methods!.concat(http2Module.properties!.find(({ name }) => name === 'req')?.methods!);
    httpResponseClass.properties = httpResponseClass.properties!.concat(http2Module.properties!.find(({ name }) => name === 'req')?.properties!);

    // un-nest deprecated APIs
    const util = unnestSubmodule('util', [['deprecated_apis']]);
    const typeUtil = getPropertyModule(util, 'types');
    // create virtual module for `util/types`
    node.modules.push({
        name: 'util/types',
        methods: typeUtil.methods,
        type: 'module',
    });

    // un-nest crypto methods
    unnestSubmodule('crypto', [['`crypto`_module_methods_and_properties']]);

    // un-nest process methods
    unnestSubmodule('child_process', [['asynchronous_process_creation'], ['synchronous_process_creation']]);

    // yup, another rename..
    renameModule('modules:_`module`_api', 'module');
    unnestSubmodule('module', [['the_`module`_object'], ['source_map_v3_support']]);

    // un-nest methods into main
    unnestSubmodule('v8', [['serialization_api']]);

    // un-nest legacy and whatwg into main
    unnestSubmodule('url', [['legacy_url_api'], ['the_whatwg_url_api']]);
    const urlClass = getClass(getModule(node, 'url'), 'URL');
    urlClass.classMethods = urlClass.methods?.filter(m => m.textRaw.startsWith('`URL'));

    // methods are incorrectly nested
    const asyncHooks = getModule(node, 'async_hooks');
    const asyncHookClass = getClass(asyncHooks, 'AsyncHook');
    asyncHooks.methods!.push(...asyncHookClass.methods!.filter(({ textRaw }) => textRaw.includes('async_hooks')));
    asyncHooks.classes = []; // remove existing classes as they are weird redirects.
    mergeModules('async_hooks', 'asynchronous_context_tracking');

    unnestSubmodule('buffer', [['`buffer`_module_apis']]);

    // create fake BufferConstructor for statics
    const bufferModule = getModule(node, 'buffer');
    const bufferClass = getClass(bufferModule, 'Buffer');
    bufferModule.classes?.push({
        name: 'BufferConstructor',
        type: 'class',
        methods: bufferClass.classMethods,
        properties: bufferClass.properties?.filter(p => p.name === 'poolSize'),
    });

    unnestSubmodule('diagnostics_channel', [['public_api']]);
    unnestSubmodule('diagnostics_channel', [['public_api', 'overview']]);

    // Caps
    renameModule('Events', 'events');
    const eventsModule = getModule(node, 'events');
    const eventEmitterClass = getClass(eventsModule, 'EventEmitter');
    eventEmitterClass.classMethods = eventsModule.methods;

    unnestModule(['timers', 'timers_promises_api'], 'timers/promises');
    unnestModule(['dns', 'dns_promises_api'], 'dns/promises');
    // unnestModule(['stream', 'types_of_streams', 'streams_promises_api'], 'stream/promises');
    unnestSubmodule('stream', [
        ['API for stream consumers', 'readable_streams'],
        ['API for stream consumers', 'writable_streams'],
        ['API for stream consumers', 'duplex_and_transform_streams'],
        ['API for stream implementers', 'implementing_a_transform_stream']
    ], true);

    // `process` is not really a class or interface but a bunch of exports in global, we declare it as an interface in types though
    const process = node.globals.find(({ name }) => name === 'Process');
    node.modules.push({
        name: 'process',
        classes: [{
            ...process,
            name: 'Process',
            type: 'class',
        }],
        type: 'module',
    });

}

function trimDocs(root: DocRoot): void {
    delete root.miscs;
    trimEmptyModule(root);
    fixupModuleStructure(root);
}

function simpleHTTPGet(url: string): Promise<string> {
    let out = Buffer.from('');
    return new Promise((resolve, reject) => {
        get(url, res => {
            res.on('data', (data: Buffer) => {
                out = Buffer.concat([out, data]);
            })
                .once('end', () => resolve(out.toString()))
                .once('error', reject);
        })
            .once('error', reject);
    });
}

export async function loadDocs(): Promise<DocRoot> {
    let docs: DocRoot;

    const version = process.env['VERSION'];
    const path = resolve(__dirname, `docs-${version}.json`);

    if (!version) {
        console.error(`Must specify "VERSION" env variable eg. "VERSION=16.6.0"`);
        process.exit(1);
    }

    if (!existsSync(path)) {
        console.log('Downloading docs...');
        const data = await simpleHTTPGet(`https://nodejs.org/dist/v${version}/docs/api/all.json`);
        console.log('Docs downloaded');
        docs = JSON.parse(data);
        writeFileSync(path, JSON.stringify(docs));
    } else {
        docs = JSON.parse(readFileSync(path, 'utf-8'));
    }
    trimDocs(docs);

    return docs;
}
