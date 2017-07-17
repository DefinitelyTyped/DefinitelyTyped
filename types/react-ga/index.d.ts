// Type definitions for react-ga 2.1
// Project: https://github.com/react-ga/react-ga
// Definitions by: Tim Aldridge <https://github.com/telshin>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface EventArgs {
    category: string;
    action: string;
    label?: string;
    value?: number;
    nonInteraction?: boolean;
}

export interface GaOptions {
    name?: string;
    clientId?: string;
    sampleRate?: number;
    siteSpeedSampleRate?: number;
    alwaysSendReferrer?: boolean;
    allowAnchor?: boolean;
    cookieName?: string;
    cookieDomain?: string;
    cookieExpires?: number;
    legacyCookieDomain?: string;
    legacyHistoryImport?: boolean;
    allowLinker?: boolean;
    userId?: string;
}

export interface InitializeOptions {
    debug?: boolean;
    titleCase?: boolean;
    gaOptions?: GaOptions;
}

export interface FieldsObject {
    [i: string]: any;
}

export interface TimingArgs {
    category: string;
    variable: string;
    value: number;
    label?: string;
}

export interface Plugin {
    require(name: string, options: any): void;
    execute(pluginName: string, action: string, actionTypeOrPayload: string|any, payload?: any): void;
}

export interface OutboundLinkArgs {
    label: string;
}

export function initialize(trackingCode: string, options?: InitializeOptions): void;
export function ga(): any;
export function set(fieldsObject: FieldsObject): void;
export function send(fieldsObject: FieldsObject): void;
export function pageview(path: string): void;
export function modalview(name: string): void;
export function timing(args: TimingArgs): void;
export function event(args: EventArgs): void;
export function exception(fieldsObject: FieldsObject): void;
export const plugin: Plugin;
export function outboundLink(args: OutboundLinkArgs, hitCallback: () => void): void;
