import MetroFileMap, { BuildParameters, DiskCacheManager } from 'metro-file-map';

MetroFileMap.create({
    cacheManagerFactory: (buildParameters: BuildParameters) =>
        new DiskCacheManager({
            buildParameters,
            cacheDirectory: '/tmp/foo',
        }),
    computeDependencies: true,
    computeSha1: true,
    enableSymlinks: false,
    extensions: ['js'],
    forceNodeFilesystemAPI: false,
    hasteImplModulePath: null,
    healthCheck: {
        enabled: false,
        filePrefix: '.metro-health-check',
        interval: 30000,
        timeout: 5000,
    },
    ignorePattern: /\/node_modules\//,
    maxWorkers: 2,
    mocksPattern: '',
    platforms: ['android', 'ios'],
    retainAllFiles: true,
    resetCache: false,
    rootDir: '/project',
    roots: ['/'],
    throwOnModuleCollision: true,
    useWatchman: true,
    watch: true,
    watchmanDeferStates: ['hg.update'],
});
