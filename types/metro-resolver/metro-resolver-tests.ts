import { resolve, ResolutionContext } from 'metro-resolver';

resolve(
    {
        doesFileExist: (filePath: string): boolean => true,
        nodeModulesPaths: ['module'],
        preferNativePlatform: true,
        isAssetFile: (filePath: string): boolean => true,
        redirectModulePath: (modulePath: string): string | false => 'hello',
        resolveAsset: (dirPath: string, assetName: string, extension: string): ReadonlyArray<string> | undefined =>
            undefined,
        sourceExts: ['ext'],
        getPackageMainPath: (packageJsonPath: string): string => 'path',
        originModulePath: 'path',
        allowHaste: true,
        resolveHasteModule: (name: string): string | undefined => 'module',
        resolveHastePackage: (name: string): string | undefined => 'package',
    },
    'module',
    'ios',
);
