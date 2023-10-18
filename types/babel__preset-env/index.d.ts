export interface Options {
    targets?: TargetsOptions | undefined;
    bugfixes?: boolean | undefined;
    spec?: boolean | undefined;
    loose?: boolean | undefined;
    modules?: ModuleOption | undefined;
    debug?: boolean | undefined;
    include?: PluginList | undefined;
    exclude?: PluginList | undefined;
    useBuiltIns?: UseBuiltInsOption | undefined;
    corejs?: CorejsOption | undefined;
    forceAllTransforms?: boolean | undefined;
    configPath?: string | undefined;
    ignoreBrowserslistConfig?: boolean | undefined;
    shippedProposals?: boolean | undefined;
}

/**
 * "targets" config option:
 * https://babeljs.io/docs/en/babel-preset-env#targets
 */
export type TargetsOptions =
    | BrowserslistQuery
    | ReadonlyArray<BrowserslistQuery>
    | { [key in Target]?: string }
    | { esmodules: true }
    | { node: string | "current" | true }
    | { safari: string | "tp" }
    | { browsers: string | ReadonlyArray<string> };

export type BrowserslistQuery = string;

/**
 * List of supported Browserslist targets:
 * Source: https://github.com/browserslist/browserslist#browsers
 */
export type Target =
    | "Android"
    | "Baidu"
    | "BlackBerry"
    | "bb"
    | "Chrome"
    | "ChromeAndroid"
    | "and_chr"
    | "Edge"
    | "Electron"
    | "Explorer"
    | "ie"
    | "ExplorerMobile"
    | "ie_mob"
    | "Firefox"
    | "ff"
    | "FirefoxAndroid"
    | "and_ff"
    | "iOS"
    | "ios_saf"
    | "Node"
    | "Opera"
    | "OperaMini"
    | "op_mini"
    | "OperaMobile"
    | "op_mob"
    | "QQAndroid"
    | "and_qq"
    | "Safari"
    | "Samsung"
    | "UCAndroid"
    | "and_uc"
    | "kaios";

/**
 * https://babeljs.io/docs/en/babel-preset-env#modules
 */
export type ModuleOption =
    | "amd"
    | "umd"
    | "systemjs"
    | "commonjs"
    | "cjs"
    | "auto"
    | false;

export type PluginList = ReadonlyArray<PluginListItem>;
export type PluginListItem = string | RegExp;

export type UseBuiltInsOption =
    | "usage"
    | "entry"
    | false;

export type CorejsOption =
    | CorejsVersion
    | { version: CorejsVersion; proposals: boolean };

export type CorejsVersion = 2 | 3;
