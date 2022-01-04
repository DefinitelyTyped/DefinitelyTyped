export type Result<TResolution, TCandidates> =
    | { readonly type: 'resolved'; readonly resolution: TResolution }
    | { readonly type: 'failed'; readonly candidates: TCandidates };

export type Resolution =
    | FileResolution
    | {
          readonly type: 'empty';
      };

export type AssetFileResolution = ReadonlyArray<string>;
export type FileResolution =
    | { readonly type: 'sourceFile'; readonly filePath: string }
    | { readonly type: 'assetFiles'; readonly filePaths: AssetFileResolution };

export interface FileAndDirCandidates {
    readonly dir: FileCandidates;
    readonly file: FileCandidates;
}

/**
 * This is a way to describe what files we tried to look for when resolving
 * a module name as file. This is mainly used for error reporting, so that
 * we can explain why we cannot resolve a module.
 */
export type FileCandidates =
    // We only tried to resolve a specific asset.
    | { readonly type: 'asset'; readonly name: string }
    // We attempted to resolve a name as being a source file (ex. JavaScript,
    // JSON...), in which case there can be several extensions we tried, for
    // example `/js/foo.ios.js`, `/js/foo.js`, etc. for a single prefix '/js/foo'.
    | {
          readonly type: 'sourceFile';
          filePathPrefix: string;
          readonly candidateExts: ReadonlyArray<string>;
      };

/**
 * Check existence of a single file.
 */
export type DoesFileExist = (filePath: string) => boolean;
export type IsAssetFile = (fileName: string) => boolean;

/**
 * Given a directory path and the base asset name, return a list of all the
 * asset file names that match the given base name in that directory. Return
 * null if there's no such named asset. `platform` is used to identify
 * platform-specific assets, ex. `foo.ios.js` instead of a generic `foo.js`.
 */
export type ResolveAsset = (dirPath: string, assetName: string, extension: string) => ReadonlyArray<string> | undefined;

export interface FileContext {
    readonly doesFileExist: DoesFileExist;
    readonly isAssetFile: IsAssetFile;
    readonly nodeModulesPaths: ReadonlyArray<string>;
    readonly preferNativePlatform: boolean;
    readonly redirectModulePath: (modulePath: string) => string | false;
    readonly resolveAsset: ResolveAsset;
    readonly sourceExts: ReadonlyArray<string>;
}

export interface FileOrDirContext extends FileContext {
    /**
     * This should return the path of the "main" module of the specified
     * `package.json` file, after post-processing: for example, applying the
     * 'browser' field if necessary.
     *
     * FIXME: move the post-processing here. Right now it is
     * located in `node-haste/Package.js`, and fully duplicated in
     * `ModuleGraph/node-haste/Package.js` (!)
     */
    readonly getPackageMainPath: (packageJsonPath: string) => string;
}

export interface HasteContext extends FileOrDirContext {
    /**
     * Given a name, this should return the full path to the file that provides
     * a Haste module of that name. Ex. for `Foo` it may return `/smth/Foo.js`.
     */
    readonly resolveHasteModule: (name: string) => string | undefined;
    /**
     * Given a name, this should return the full path to the package manifest that
     * provides a Haste package of that name. Ex. for `Foo` it may return
     * `/smth/Foo/package.json`.
     */
    readonly resolveHastePackage: (name: string) => string | undefined;
}

export interface ModulePathContext extends FileOrDirContext {
    /**
     * Full path of the module that is requiring or importing the module to be
     * resolved.
     */
    readonly originModulePath: string;
}

export interface ResolutionContext extends ModulePathContext, HasteContext {
    allowHaste: boolean;
    extraNodeModules?: { [key: string]: string };
    originModulePath: string;
    resolveRequest?: CustomResolver;
}

export type CustomResolver = (
    context: ResolutionContext,
    realModuleName: string,
    platform: string | null,
    moduleName: string | null,
) => Resolution;
