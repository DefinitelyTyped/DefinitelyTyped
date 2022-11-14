// Type definitions for metro-resolver 0.66
// Project: https://github.com/facebook/metro
// Definitions by: Adam Foxman <https://github.com/afoxman>
//                 Tommy Nguyen <https://github.com/tido64>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

export {
    AssetFileResolution,
    CustomResolutionContext,
    CustomResolver,
    CustomResolverOptions,
    DoesFileExist,
    FileAndDirCandidates,
    FileCandidates,
    FileResolution,
    IsAssetFile,
    ResolutionContext,
    Resolution,
    ResolveAsset,
    Result,

    // didn't exported in the origin code
    FileContext,
    FileOrDirContext,
    HasteContext,
    ModulePathContext,
} from './types';

export { FailedToResolveNameError } from './FailedToResolveNameError';
export { FailedToResolvePathError } from './FailedToResolvePathError';
export { InvalidPackageError } from './InvalidPackageError';
export { formatFileCandidates } from './formatFileCandidates';
export { resolve } from './resolve';
