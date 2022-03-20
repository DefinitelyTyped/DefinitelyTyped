// https://tailwindcss.com/docs/plugins#css-in-js-syntax
export type AddComponentsFn = (
    components: Record<string, any> | Array<Record<string, any>>
) => void;

// https://tailwindcss.com/docs/plugins
export type TailwindPluginFn = (helpers: {
    addUtilities: any;
    matchUtilities: any;
    addComponents: (components: Record<string, any>) => void;
    matchComponents: any;
    addBase: any;
    addVariant: any;
    e: any;
    prefix: any;
    theme: any;
    variants: any;
    config: any;
    postcss: any;
}) => void;

// https://github.com/tailwindlabs/tailwindcss/blob/master/src/util/createPlugin.js
export interface TailwindPluginWithoutOptions {
    handler: TailwindPluginFn;
    config?: any;
}

// https://github.com/tailwindlabs/tailwindcss/blob/master/src/util/createPlugin.js#L10
export interface TailwindPluginWithOptions<T = any>
    extends TailwindPluginWithoutOptions {
    __options?: T;
}

// https://github.com/tailwindlabs/tailwindcss/blob/master/src/util/createPlugin.js#L9
export interface TailwindPluginWithOptionsFn<T = any>
    extends TailwindPluginWithOptions<T> {
    (options?: T): TailwindPluginWithOptions<T>;

    // https://github.com/tailwindlabs/tailwindcss/blob/master/src/util/createPlugin.js#L17
    __isOptionsFunction: true;

    // https://github.com/tailwindlabs/tailwindcss/blob/master/src/util/createPlugin.js#L21-L22
    __pluginFunction: (options?: T) => TailwindPluginFn;
    __configFunction: (options?: T) => any;
}

export type TailwindPlugin<T = any> =
    | TailwindPluginWithoutOptions
    | TailwindPluginWithOptions<T>;

export interface TailwindPluginCreator {
    (plugin: TailwindPluginFn, config?: any): TailwindPlugin;
    withOptions<T = any>(
        pluginOptions: (options?: T) => TailwindPluginFn,
        configOptions?: (options?: T) => any
    ): TailwindPluginWithOptionsFn<T>;
}

declare const plugin: TailwindPluginCreator;

export default plugin;
