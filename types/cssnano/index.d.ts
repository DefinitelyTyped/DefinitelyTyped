// Type definitions for cssnano 5.0
// Project: https://github.com/cssnano/cssnano
// Definitions by: Armando Meziat <https://github.com/odnamrataizem>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { PluginCreator } from 'postcss';

declare namespace cssnano {
    interface CssNanoOptions {
        configFile?: string | undefined;
        preset?: [string, object] | string | undefined;
    }

    type CssNano = PluginCreator<CssNanoOptions>;
}

declare const cssnano: cssnano.CssNano;
export = cssnano;
