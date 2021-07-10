// Type definitions for cssnano 4.0
// Project: https://github.com/cssnano/cssnano
// Definitions by: Armando Meziat <https://github.com/odnamrataizem>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

import { Plugin } from 'postcss';

declare namespace cssnano {
    interface CssNanoOptions {
        configFile?: string | undefined;
        preset?: [string, object] | string | undefined;
    }

    type CssNano = Plugin<CssNanoOptions>;
}

declare const cssnano: cssnano.CssNano;
export = cssnano;
