/// <reference types="node" />

import { EventEmitter } from "events";
import { writers } from "../index";
import { Bundle, DependencyConfig, DependencyRegistry } from "./dependencies";
import LassoContext from "./LassoContext";
import LassoPageResult from "./LassoPageResult";

export interface PageConfig {
    name?: string | undefined;
    dependencies: DependencyConfig[] | string[] | string | null;
    flags?: string[] | undefined;
    from?: string | undefined;
    packagePath?: string | undefined;
    packagePaths?: string[] | undefined;
    lassoContext?: LassoContext | undefined;
    cache?: any;
    cacheKey?: string | undefined;
    pageName?: string | undefined;
    data?: any;
}

export type Callback = (err: Error | null, result?: any) => any;
export type LassoPage = (
    options: PageConfig,
    callback?: (err: Error | null, result: LassoPageResult) => void,
) => Promise<any>;
export type LassoResource = (path: string, options?: any, callback?: Callback) => void;

export interface CustomPlugin {
    plugin: string;
    config: any;
}

export interface LassoConfig {
    baseDir?: string | undefined;
    plugins?: string[] | CustomPlugin[] | undefined;
    require?: any;
    outputDir?: string | undefined;
    urlPrefix?: string | undefined;
    fingerprintsEnabled?: boolean | undefined;
    includeSlotNames?: boolean | undefined;
    minify?: boolean | undefined;
    minifyJS?: boolean | undefined;
    minifyCSS?: boolean | undefined;
    minifyInlineOnly?: boolean | undefined;
    minifyInlineJSOnly?: boolean | undefined;
    minifyInlineCSSOnly?: boolean | undefined;
    resolveCssUrls?: boolean | undefined;
    relativeUrlsEnabled?: boolean | undefined;
    bundlingEnabled?: boolean | undefined;
    bundles?: Bundle[] | undefined;
    noConflict?: string | undefined;

    cspNonceProvider?(out: any): string;
    fingerprintInlineCode?(code: any): string;
}

export default class Lasso extends EventEmitter {
    constructor(config: LassoConfig);

    config: LassoConfig;
    lassoCacheLookup: any;
    dependencies: DependencyRegistry;
    writer: writers.Writer;

    initPlugins(): void;
    createAppBundleMappings(bundleSetConfig: any, lassoContext: LassoContext, callback: Callback): any;
    buildPageBundles(options: any, lassoContext: LassoContext, callback: Callback): void;
    getAppBundleMappingsCached(bundleSetConfig: any, lassoContext: LassoContext, callback: Callback): void;
    buildLassoCacheKey(lassoContext: LassoContext): { value: string; parts: string[] };
    getLassoCache(lassoContext: LassoContext): any;
    getConfig(): LassoConfig;
    getJavaScriptDependencyHtml(url: string, attributes?: any): string;
    getCSSDependencyHtml(url: string, attributes?: any): string;
    createLassoContext(options?: any): LassoContext;
    setCSPNonceProvider(func: any): any;
    addTransform(transform: any): void;
    getDependencyRegistry(): DependencyRegistry;
    lassoPage: LassoPage;
    lassoResource: LassoResource;
}
