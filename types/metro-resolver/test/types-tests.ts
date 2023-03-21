import {
    AssetFileResolution,
    CustomResolutionContext,
    FileAndDirCandidates,
    FileCandidates,
    FileResolution,
    PackageInfo,
    PackageJson,
    Resolution,
    ResolutionContext,
    Result,
} from 'metro-resolver';

export const result: Result<number, string[]> = {
    type: 'resolved',
    resolution: 812,
};

export const resultFailed: Result<number, string[]> = {
    type: 'failed',
    candidates: ['module'],
};

export const assetFileResolution: AssetFileResolution = ['image.png'];

export const fileResolution: FileResolution = {
    type: 'sourceFile',
    filePath: 'file',
};

export const resolution: Resolution = fileResolution;

export const fileCandidates: FileCandidates = {
    type: 'asset',
    name: 'image',
};

export const fileAndDirCandidates: FileAndDirCandidates = {
    dir: fileCandidates,
    file: fileCandidates,
};

export const resolutionContext: ResolutionContext = {
    allowHaste: true,
    assetExts: ['jpg', 'png'],
    customResolverOptions: {},
    disableHierarchicalLookup: false,
    extraNodeModules: {
        react: 'react',
    },
    getPackage: (packageJsonPath: string): PackageJson | null => null,
    getPackageForModule: (modulePath: string): PackageInfo | null => null,
    doesFileExist: (filePath: string): boolean => true,
    mainFields: ['main', 'react-native', 'browser'],
    nodeModulesPaths: ['path'],
    originModulePath: 'path',
    preferNativePlatform: true,
    resolveAsset: (dirPath: string, assetName: string, extension: string): ReadonlyArray<string> | undefined =>
        undefined,
    redirectModulePath: (modulePath: string): string | false => false,
    resolveHasteModule: (name: string): string | undefined => undefined,
    resolveHastePackage: (name: string): string | undefined => undefined,
    sourceExts: ['.ts'],
    unstable_conditionNames: ['import', 'require'],
    unstable_conditionsByPlatform: {
        web: ['browser'],
    },
    unstable_enablePackageExports: false,
    unstable_logWarning: (message: string): void => {},
};

export const customResolutionContext: CustomResolutionContext = {
    ...resolutionContext,
    resolveRequest: (context: ResolutionContext, platform: string | null, moduleName: string | null): Resolution =>
        resolution,
};
