import {
    Result,
    Resolution,
    AssetFileResolution,
    FileResolution,
    FileAndDirCandidates,
    FileCandidates,
    FileContext,
    FileOrDirContext,
    HasteContext,
    ModulePathContext,
    ResolutionContext,
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

export const fileContext: FileContext = {
    doesFileExist: (filePath: string): boolean => true,
    isAssetFile: (filePath: string): boolean => true,
    nodeModulesPaths: ['path'],
    preferNativePlatform: true,
    redirectModulePath: (modulePath: string): string | false => false,
    resolveAsset: (dirPath: string, assetName: string, extension: string): ReadonlyArray<string> | undefined =>
        undefined,
    sourceExts: ['.ts'],
};

export const fileOrDirContext: FileOrDirContext = {
    ...fileContext,
    getPackageMainPath: (packageJsonPath: string): string => 'hello',
};

export const hasteContext: HasteContext = {
    ...fileOrDirContext,
    resolveHasteModule: (name: string): string | undefined => undefined,
    resolveHastePackage: (name: string): string | undefined => undefined,
};

export const modulePathContext: ModulePathContext = {
    ...fileOrDirContext,
    originModulePath: 'path',
};

export const resolutionContext: ResolutionContext = {
    ...modulePathContext,
    ...hasteContext,
    allowHaste: true,
    extraNodeModules: {
        react: 'react',
    },
    originModulePath: 'path',
    resolveRequest: (
        context: ResolutionContext,
        realModuleName: string,
        platform: string | null,
        moduleName: string | null,
    ): Resolution => resolution,
};
