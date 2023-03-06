import { AllowOptionalDependencies, DeltaResult, Dependency, Graph, Module, SerializerOptions } from 'metro';

export const dependency: Dependency = {
    absolutePath: 'abspath',
    data: {
        name: 'name',
        data: {
            asyncType: 'prefetch',
            isOptional: true,
            locs: [],
        },
    },
};

export const module: Module = {
    dependencies: new Map().set('dep', dependency),
    inverseDependencies: new Set(['d1', 'd2']),
    output: [],
    path: 'path',
    getSource: (): Buffer => {
        return Buffer.alloc(10);
    },
};

export const graph: Graph = {
    dependencies: new Map().set('mod', module),
    importBundleNames: new Set(),
    entryPoints: ['entry'],
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
    modulesOnly: false,
    processModuleFilter: (module: Module): boolean => true,
    projectRoot: 'root',
    runBeforeMainModule: [],
    runModule: true,
};
