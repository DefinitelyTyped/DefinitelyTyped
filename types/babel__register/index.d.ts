import { TransformOptions } from "@babel/core";

interface RegisterOptions extends TransformOptions {
    /**
     * Setting this will remove the currently hooked extensions of `.es6`, `.es`,
     * `.jsx`, `.mjs` and `.js` so you'll have to add them back if you want them
     * to be used again.
     */
    extensions?: string[];
    /**
     * Setting this to false will disable the cache.
     */
    cache?: boolean;
}

declare function register(opts?: RegisterOptions): void;
declare namespace register {
    export { register as default, RegisterOptions };
}
export = register;
