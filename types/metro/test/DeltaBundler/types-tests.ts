import type {
    AllowOptionalDependencies,
    DeltaResult,
    Dependency,
    Module,
    ReadOnlyGraph,
    SerializerOptions,
} from 'metro';
import CountingSet from 'metro/lib/CountingSet';

export const dependency: Dependency = {
    absolutePath: 'abspath',
    data: {
        name: 'name',
        data: {
            key: 'key',
            asyncType: 'prefetch',
            isOptional: true,
            locs: [],
        },
    },
};

export const module: Module = {
    dependencies: new Map().set('dep', dependency),
    inverseDependencies: new CountingSet(['d1', 'd2']),
    output: [],
    path: 'path',
    getSource: (): Buffer => {
        return Buffer.alloc(10);
    },
};

export const graph: ReadOnlyGraph = {
    dependencies: new Map().set('mod', module),
    entryPoints: new Set(['entry']),
    transformOptions: {
        dev: true,
        hot: true,
        minify: false,
        platform: 'ios',
        type: 'module',
        unstable_transformProfile: 'default',
    },
};

export const allowOptionalDependencies: AllowOptionalDependencies = {
    exclude: ['test'],
};

export const deltaResult: DeltaResult = {
    added: new Map().set('added', module),
    modified: new Map().set('modified', module),
    deleted: new Set(['del']),
    reset: false,
};

export const serializerOptions: SerializerOptions = {
    asyncRequireModulePath: 'p',
    createModuleId: (filePath: string): number => 123,
    dev: true,
    getRunModuleStatement: (moduleId: string | number) => 'abc',
    includeAsyncPaths: true,
    modulesOnly: false,
    processModuleFilter: (module: Module): boolean => true,
    projectRoot: 'root',
    serverRoot: 'root',
    runBeforeMainModule: [],
    runModule: true,
};
