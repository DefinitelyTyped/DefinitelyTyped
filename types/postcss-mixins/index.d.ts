// Type definitions for postcss-mixins 9.0
// Project: https://github.com/postcss/postcss-mixins
// Definitions by: Adam Thompson-Sharpe <https://github.com/MysteryBlokHed>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { Container, PluginCreator } from 'postcss';

declare namespace postcssMixins {
    interface Options {
        /**
         * Define mixins in code instead of with CSS.
         *
         * For functions: the first parameter is the mixin rule,
         * and all others are parameters passed to the mixin.
         */
        mixins?: Record<string, Mixin> | undefined;
        /**
         * Autoload all mixins from one or more dirs.
         * Mixin name will be taken from file name.
         */
        mixinsDir?: string | string[] | undefined;
        /**
         * Similar to mixinsDir, except you can provide fast-glob syntax
         * to target or not to target specific files.
         */
        mixinsFiles?: string | string[] | undefined;
        /**
         * Remove unknown mixins instead of throwing an error.
         * Off by default.
         */
        silent?: boolean | undefined;
    }

    /**
     * A mixin, either a function or an object
     */
    type Mixin = MixinFn | MixinObj;
    type MixinFn = (mixin: Container, ...args: string[]) => MixinObj | void;
    // The Exclude here is meant to make sure that you can't assign invalid functions to MixinObj,
    // which is possible with Record<string, any>
    // tslint:disable-next-line:ban-types
    type MixinObj = Record<string, Exclude<Object, Function>>;
}

declare var postcssMixins: PluginCreator<postcssMixins.Options>;

export = postcssMixins;
