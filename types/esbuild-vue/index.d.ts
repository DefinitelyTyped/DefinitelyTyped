interface AssembleOptions {
    normalizer?: string;
    styleInjector?: string;
    styleInjectorSSR?: string;
}

interface EsbuildVuePluginOptions {
    /** Output a separate file for inline `<style>` blocks in single-file components. */
    extractCss?: boolean;
    /** The maximum amount of worker threads to use for compilation. By default this is 4 or the amount of CPUs available, whichever is least. Use `false` to disable multithreading. */
    workers?: number | boolean;
    /** Will be called with the (non-normalized) paths of every file read during the compilation process. For example, external files included using `@import` declarations in `<style>` blocks. */
    onReadFile?(path: string): void;
    /** PostCSS plugins which will be used when compiling `<style>` blocks in components. */
    postcssPlugins?: any[];
    /** By default, components are compiled using the synchronous (non-async) compiler. If you use async PostCSS plugins, you need to specify `true` here. */
    isAsync?: boolean;
    /** Allows to provide custom `normalizer`, `styleInjector` and `styleInjectorSSR` implementations. */
    assembleOptions?: AssembleOptions;
}

interface EsbuildVuePluginInstance {
    name: "vue";
    setup(build: any): void;
}

declare function vuePlugin(options?: Partial<EsbuildVuePluginOptions>): EsbuildVuePluginInstance;
export = vuePlugin;
