// Type definitions for lost 8.3
// Project: https://github.com/peterramsing/lost
// Definitions by: Adam Thompson-Sharpe <https://github.com/MysteryBlokHed>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { Container, PluginCreator, Result } from 'postcss';

declare namespace lost {
    interface Settings {
        /** @default '30px' */
        gutter?: string | undefined;
        /** @default 'no-flex' */
        flexbox?: string | undefined;
        /** @default 'auto' */
        cycle?: string | undefined;
        /** @default 'both' */
        clearing?: string | undefined;
        /** @default 99.9 */
        rounder?: number | undefined;
        /** @default '%' */
        gridUnit?: string | undefined;
        /** @default 'ltr' */
        direction?: 'ltr' | 'rtl' | undefined;
    }

    // These are used in the files under `lib/`
    // They all include the parameters for settings and result even when they're not used,
    // since the library's main file passes all 3 parameters to all of them

    /** Lib function that requires css and settings params */
    type LostLib<R = void> = (css: Container, settings: Settings, _result?: Result) => R;
    /** Lib function that only requires css param */
    type LostLibNoSettings<R = void> = (css: Container, _settings?: Settings, _result?: Result) => R;
    /** Lib function that requires css, settings, and result params */
    type LostLibResult<R = void> = (css: Container, settings: Settings, result: Result) => R;
}

declare var lost: PluginCreator<lost.Settings>;

export = lost;
