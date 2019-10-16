// Type definitions for @webpack-blocks/typescript 2.0
// Project: https://github.com/andywer/webpack-blocks/tree/master/packages/typescript
// Definitions by: Max Boguslavskiy <https://github.com/maxbogus>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.0

import { Block } from 'webpack-blocks';

declare namespace typescript {
    type CustomTransformersFunction = (program: any) => any;

    interface BabelOptions {
        babelrc?: boolean;
        presets?: string[][] | Array<Array<{ targets?: string, modules?: boolean }>>;
    }

    interface Options {
        silent?: boolean;
        compiler?: string;
        useTranspileModule?: boolean;
        instance?: string;
        configFileName?: string;
        transpileOnly?: boolean;
        errorsAsWarnings?: boolean;
        forceIsolatedModules?: boolean;
        ignoreDiagnostics?: number[];
        useBabel?: boolean;
        babelOptions?: BabelOptions;
        babelCore?: string;
        useCache?: boolean;
        usePrecompiledFiles?: boolean;
        cacheDirectory?: string;
        reportFiles?: string[];
        getCustomTransformers?: string | CustomTransformersFunction;
    }
}

declare function typescript(options?: typescript.Options): Block;

export = typescript;
