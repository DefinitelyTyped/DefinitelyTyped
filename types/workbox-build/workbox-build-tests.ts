/* tslint:disable:comment-format no-namespace */

'use strict';

import {
    copyWorkboxLibraries,
    injectManifest,
    InjectManifestConfig,
    generateSW,
    GenerateSWConfig,
    getManifest,
    GetManifestConfig,
    getModuleURL,
} from 'workbox-build';

//==============================================================================
// WorkboxBuild.copyWorkboxLibraries
//==============================================================================

export namespace CopyWorkboxLibrariesTest {
    declare const destDirectory: string;

    // $ExpectType Promise<string>
    copyWorkboxLibraries(destDirectory);
}

//==============================================================================
// WorkboxBuild.getModuleURL
//==============================================================================

export namespace GetModuleURLTest {
    declare const moduleName: string;
    declare const buildType: string;

    // $ExpectType string
    getModuleURL(moduleName, buildType);
}

//==============================================================================
// WorkboxBuild.generateSW
//==============================================================================

export namespace GenerateSWTest {
    declare const config: GenerateSWConfig;

    // $ExpectType Promise<{ count: number; filePaths: string[]; size: number; warnings: string[]; }>
    generateSW(config);
}

//==============================================================================
// WorkboxBuild.getManifest
//==============================================================================

export namespace GetManifestTest {
    declare const config: GetManifestConfig;

    // $ExpectType Promise<{ count: number; filePaths: string[]; size: number; warnings: string[]; }>
    getManifest(config);
}

//==============================================================================
// WorkboxBuild.injectManifest
//==============================================================================

export namespace InjectManifestTest {
    declare const config: InjectManifestConfig;

    // $ExpectType Promise<{ count: number; filePaths: string[]; size: number; warnings: string[]; }>
    injectManifest(config);
}
