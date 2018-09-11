// Type definitions for cloudflare-apps 0.1
// Project: https://www.cloudflare.com/apps/
// Definitions by: MartynasZilinskas <https://github.com/MartynasZilinskas>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/**
 * An object which contains all of the options the installer specified,
 * based on the structure given in the options section of your `install.json`.
 */
declare const INSTALL_OPTIONS: CloudflareApps.InstallOptions;

/**
 * A string ID which is equal to the ID of this install.
 * Its primary purpose is to allow you to easily distinguish between your app being loaded
 * in the Cloudflare Preview or the installer’s live website.
 */
declare const INSTALL_ID: string;

/**
 * An object which you can use to store arbitrary values
 * which you would like to be accessable from other Cloudflare scripts,
 * without polluting the global scope.
 * For example, it’s commonly used to share an update function with its update handler.
 */
declare const INSTALL_SCOPE: CloudflareApps.InstallScope;

/**
 * This object is specific to paid apps. It allows you to know which product the user has purchased.
 * When you create a paid app you will be given product ids for each of the plans you wish to sell the product for.
 * `INSTALL_PRODUCT.id` will then be that id for the plan the user has purchased.
 * This value is absent for free apps and will always be set for paid apps even if the user is on a free plan.
 */
declare const INSTALL_PRODUCT: CloudflareApps.InstallProduct | undefined;

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
declare const INSTALL: CloudflareApps.CloudflareApps;

/**
 * This is undocumented global variable.
 * The documentation may arrive later.
 */
declare const CloudflareApps: CloudflareApps.CloudflareApps;

declare namespace CloudflareApps {
    interface InstallOptions {
        [key: string]: any;
    }

    interface InstallScope {
        [key: string]: any;
    }

    interface InstallProduct {
        id: string;
    }

    interface CloudflareAppsMethods {
        createElement<T extends Element>(options: ElementLocation, previousElement?: T): T;

        matchPage(patterns: string[]): boolean;

        querySelector<K extends keyof ElementTagNameMap>(selectors: K): ElementTagNameMap[K] | null;
        querySelector(selectors: string): Element | null;
    }

    interface CloudflareApps extends CloudflareAppsMethods {
        installs: { [id: string]: App | undefined };
        proxy: CloudflareAppsProxy;
        siteId: string;
    }

    interface App {
        appId: string;
        options: InstallOptions;
        scope: InstallScope;
    }

    interface CloudflareAppsProxy {
        embedSiteId: string;
        hasRocketEmbed: boolean;
        originalURL: OriginalURL;
    }

    interface OriginalURL {
        raw: string;
        parsed: OriginalURLParsed;
    }

    interface OriginalURLParsed {
        fragment: string;
        host: string;
        path: string;
        scheme: "https" | "http";
        query: URLQuery;
    }

    interface URLQuery {
        [key: string]: string[];
    }

    interface ElementLocation {
        method: "before" | "prepend" | "append" | "after" | "replace";
        selector: string;
    }
}
