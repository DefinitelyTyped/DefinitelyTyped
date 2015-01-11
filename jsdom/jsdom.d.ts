// Type definitions for jsdom 2.0.0
// Project: https://github.com/tmpvar/jsdom
// Definitions by: Asana <https://asana.com>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module "jsdom" {
    export function env(config: Config): void;
    export function env(htmlRef: string, callback: Callback): void;
    export function env(htmlRef: string, scripts: string[], callback: Callback): void;
    export function env(htmlRef: string, config: Config, callback: Callback): void;
    export function env(htmlRef: string, scripts: string[], config: Config, callback: Callback): void;
    export function jsdom(markup?: string, options?: Config): Document;

    interface Callback {
        (errors: Error[], window: Window): any;
    }

    interface Config {
        html?: string;
        file?: string;
        url?: string;
        scripts?: string[];
        src?: string[];
        jar?: Object;
        parsingMode?: string;
        document?: {
            referrer?: string;
            cookie?: string;
            cookieDomain?: string;
        };
        headers?: Object;
        features?: {
            FetchExternalResources?: any; // string | string[] | boolean
            ProcessExternalResources?: any; // string | string[] | boolean
            SkipExternalResources?: any; // RegExp | boolean
        };
        created?: Callback;
        loaded?: Callback;
        done?: Callback;
    }
}