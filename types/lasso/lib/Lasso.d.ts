/// <reference types="node" />

import { EventEmitter } from 'events';
import LassoContext from './LassoContext';
import { Bundle, DependencyConfig, DependencyRegistry } from './dependencies';
import { writers } from '../index';
import LassoPageResult from './LassoPageResult';

export interface PageConfig {
    name?: string;
    dependencies: DependencyConfig[] | string[] | string | null;
    flags?: string[];
    from?: string;
    packagePath?: string;
    packagePaths?: string[];
    lassoContext?: LassoContext;
    cache?: any;
    cacheKey?: string;
    pageName?: string;
    data?: any;
}

export type Callback = (err: Error | null, result?: any) => any;
export type LassoPage = (options: PageConfig, callback?: (err: Error | null, result: LassoPageResult) => void) => Promise<any>;
export type LassoResource = (path: string, options?: any, callback?: Callback) => void;

export interface CustomPlugin {
    plugin: string;
    config: any;
}

export interface LassoConfig {
    baseDir?: string;
    plugins?: string[] | CustomPlugin[];
    require?: any;
    outputDir?: string;
    urlPrefix?: string;
    fingerprintsEnabled?: boolean;
    includeSlotNames?: boolean;
    minify?: boolean;
    minifyJS?: boolean;
    minifyCSS?: boolean;
    minifyInlineOnly?: boolean;
    minifyInlineJSOnly?: boolean;
    minifyInlineCSSOnly?: boolean;
    resolveCssUrls?: boolean;
    relativeUrlsEnabled?: boolean;
    bundlingEnabled?: boolean;
    bundles?: Bundle[];
    noConflict?: string;

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
    buildLassoCacheKey(lassoContext: LassoContext): { value: string; parts: string[]; };
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
