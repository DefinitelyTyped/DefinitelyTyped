// Type definitions for @babel/preset-env 7.9
// Project: https://github.com/babel/babel/tree/master/packages/babel-preset-env, https://babeljs.io/docs/en/babel-preset-env
// Definitions by: Slava Fomin II <https://github.com/slavafomin>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface Options {
    targets?: TargetsOptions;
    bugfixes?: boolean;
    spec?: boolean;
    loose?: boolean;
    modules?: ModuleOption;
    debug?: boolean;
    include?: PluginList;
    exclude?: PluginList;
    useBuiltIns?: UseBuiltInsOption;
    corejs?: CorejsOption;
    forceAllTransforms?: boolean;
    configPath?: string;
    ignoreBrowserslistConfig?: boolean;
    shippedProposals?: boolean;
}

/**
 * "targets" config option:
 * https://babeljs.io/docs/en/babel-preset-env#targets
 */
export type TargetsOptions = (
    | BrowserslistQuery
    | ReadonlyArray<BrowserslistQuery>
    | { [key in Target]?: string; }
    | { esmodules: true }
    | { node: (string | 'current' | true) }
    | { safari: (string | 'tp') }
    | { browsers: (string | ReadonlyArray<string>) }
);

export type BrowserslistQuery = string;

/**
 * List of supported Browserslist targets:
 * Source: https://github.com/browserslist/browserslist#browsers
 */
export type Target = (
    | 'Android'
    | 'Baidu'
    | 'BlackBerry' | 'bb'
    | 'Chrome'
    | 'ChromeAndroid' | 'and_chr'
    | 'Edge'
    | 'Electron'
    | 'Explorer' | 'ie'
    | 'ExplorerMobile' | 'ie_mob'
    | 'Firefox' | 'ff'
    | 'FirefoxAndroid' | 'and_ff'
    | 'iOS' | 'ios_saf'
    | 'Node'
    | 'Opera'
    | 'OperaMini' | 'op_mini'
    | 'OperaMobile' | 'op_mob'
    | 'QQAndroid' | 'and_qq'
    | 'Safari'
    | 'Samsung'
    | 'UCAndroid' | 'and_uc'
    | 'kaios'
);

/**
 * https://babeljs.io/docs/en/babel-preset-env#modules
 */
export type ModuleOption = (
    | 'amd'
    | 'umd'
    | 'systemjs'
    | 'commonjs'
    | 'cjs'
    | 'auto'
    | false
);

export type PluginList = ReadonlyArray<PluginListItem>;
export type PluginListItem = (string | RegExp);

export type UseBuiltInsOption = (
    | 'usage'
    | 'entry'
    | false
);

export type CorejsOption = (
    | CorejsVersion
    | { version: CorejsVersion, proposals: boolean }
);

export type CorejsVersion = (2 | 3);
