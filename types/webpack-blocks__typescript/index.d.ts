// Type definitions for @webpack-blocks/typescript 2.0
// Project: https://github.com/andywer/webpack-blocks/tree/master/packages/typescript
// Definitions by: Max Boguslavskiy <https://github.com/maxbogus>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.7

import { Block } from 'webpack-blocks';

declare namespace typescript {
    type CustomTransformersFunction = (program: any) => any;

    interface BabelOptions {
        babelrc?: boolean | undefined;
        presets?: string[][] | Array<Array<{ targets?: string | undefined, modules?: boolean | undefined }>> | undefined;
    }

    interface Options {
        silent?: boolean | undefined;
        compiler?: string | undefined;
        useTranspileModule?: boolean | undefined;
        instance?: string | undefined;
        configFileName?: string | undefined;
        transpileOnly?: boolean | undefined;
        errorsAsWarnings?: boolean | undefined;
        forceIsolatedModules?: boolean | undefined;
        ignoreDiagnostics?: number[] | undefined;
        useBabel?: boolean | undefined;
        babelOptions?: BabelOptions | undefined;
        babelCore?: string | undefined;
        useCache?: boolean | undefined;
        usePrecompiledFiles?: boolean | undefined;
        cacheDirectory?: string | undefined;
        reportFiles?: string[] | undefined;
        getCustomTransformers?: string | CustomTransformersFunction | undefined;
    }
}

declare function typescript(options?: typescript.Options): Block;

export = typescript;
