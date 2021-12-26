import { ServerOptions, DefaultGraphOptions, DefaultBundleOptions, default as Server } from 'metro/src/Server';
import { ConfigT } from 'metro-config';

export const serverOptions: ServerOptions = {
    hasReducedPerformance: false,
    onBundleBuilt: (bundlePath: string): void => {},
    watch: true
};

export const defaultGraphOptions: DefaultGraphOptions = {
    customTransformOptions: {
        o1: "option 1",
        __proto__: null
    },
    dev: true,
    hot: true,
    minify: false,
    unstable_transformProfile: 'default'
};

export const defaultBundleOptions: DefaultBundleOptions = {
    ...defaultGraphOptions,
    excludeSource: true,
    inlineSourceMap: false,
    modulesOnly: false,
    onProgress: (): void => {},
    runModule: true,
    shallow: false,
    sourceMapUrl: "url",
    sourceUrl: "url"
};

// tslint:disable-next-line:no-object-literal-type-assertion
const config: ConfigT = {} as ConfigT;

export const server = new Server(config, serverOptions);
server.getAssets({ ...defaultBundleOptions, bundleType: 'bundle', entryFile: 'entry' });
server.end();
