import { resolve, ResolutionContext } from 'metro-resolver';

const context: ResolutionContext = {
    assetExts: ['jpg', 'png'],
    customResolverOptions: {},
    disableHierarchicalLookup: false,
    doesFileExist: (filePath: string): boolean => true,
    mainFields: ['react-native', 'main'],
    nodeModulesPaths: ['module'],
    preferNativePlatform: true,
    redirectModulePath: (modulePath: string): string | false => 'hello',
    resolveAsset: (dirPath: string, assetName: string, extension: string): ReadonlyArray<string> | undefined =>
        undefined,
    sourceExts: ['ext'],
    getPackage: (packageJsonPath: string) => null,
    getPackageForModule: (modulePath: string) => null,
    originModulePath: 'path',
    allowHaste: true,
    resolveHasteModule: (name: string): string | undefined => 'module',
    resolveHastePackage: (name: string): string | undefined => 'package',
    unstable_conditionNames: ['import', 'require'],
    unstable_conditionsByPlatform: { web: ['browser'] },
    unstable_enablePackageExports: false,
    unstable_getRealPath: null,
    unstable_logWarning: (message: string) => {},
};

resolve(context, 'module', 'ios');
