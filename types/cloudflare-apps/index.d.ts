// Type definitions for cloudflare-apps 0.1
// Project: https://www.cloudflare.com/apps/
// Definitions by: MartynasZilinskas <https://github.com/MartynasZilinskas>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

declare global {
    /**
     * An object which contains all of the options the installer specified,
     * based on the structure given in the options section of your `install.json`.
     */
    const INSTALL_OPTIONS: InstallOptions;

    /**
     * A string ID which is equal to the ID of this install.
     * Its primary purpose is to allow you to easily distinguish between your app being loaded
     * in the Cloudflare Preview or the installer’s live website.
     */
    const INSTALL_ID: string;

    /**
     * An object which you can use to store arbitrary values
     * which you would like to be accessable from other Cloudflare scripts,
     * without polluting the global scope.
     * For example, it’s commonly used to share an update function with its update handler.
     */
    const INSTALL_SCOPE: InstallScope;

    /**
     * This object is specific to paid apps. It allows you to know which product the user has purchased.
     * When you create a paid app you will be given product ids for each of the plans you wish to sell the product for.
     * `INSTALL_PRODUCT.id` will then be that id for the plan the user has purchased.
     * This value is absent for free apps and will always be set for paid apps even if the user is on a free plan.
     */
    const INSTALL_PRODUCT: InstallProduct | undefined;

    /**
     * It's the same as CloudflareApps variable.
     *
     * DON'T use this variable directly.
     * BAD Example:
     * ```ts
     * const apps: cloudflareApps.CloudflareApps = INSTALL;
     * ```
     * -------------------------------------------------
     * Use directly properties and methods.
     * GOOD Example:
     * ```ts
     * const siteId: string = INSTALL.siteId;
     * ```
     */
    const INSTALL: CloudflareApps;

    /**
     * This is undocumented global variable.
     * The documentation may arrive later.
     */
    const CloudflareApps: CloudflareApps;
}

export interface InstallOptions {
    [key: string]: any;
}

export interface InstallScope {
    [key: string]: any;
}

export interface InstallProduct {
    id: string;
}

export interface CloudflareAppsMethods {
    createElement<T extends Element>(options: ElementLocation, previousElement?: T): T;

    matchPage(patterns: string[]): boolean;

    querySelector<K extends keyof ElementTagNameMap>(selectors: K): ElementTagNameMap[K] | null;
    querySelector(selectors: string): Element | null;
}

export interface CloudflareApps extends CloudflareAppsMethods {
    installs: { [id: string]: App | undefined };
    proxy: CloudflareAppsProxy;
    siteId: string;
}

export interface App {
    appId: string;
    options: InstallOptions;
    scope: InstallScope;
}

export interface CloudflareAppsProxy {
    embedSiteId: string;
    hasRocketEmbed: boolean;
    originalURL: OriginalURL;
}

export interface OriginalURL {
    raw: string;
    parsed: OriginalURLParsed;
}

export interface OriginalURLParsed {
    fragment: string;
    host: string;
    path: string;
    scheme: "https" | "http";
    query: URLQuery;
}

export interface URLQuery {
    [key: string]: string[];
}

export interface ElementLocation {
    method: "before" | "prepend" | "append" | "after" | "replace";
    selector: string;
}
