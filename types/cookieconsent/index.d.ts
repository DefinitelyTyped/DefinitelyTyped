import * as CSS from "csstype";

export type Status = "deny" | "allow" | "dismiss";

export interface Country {
    hasLaw: boolean;
    revokable: boolean;
    explicitAction: boolean;
}

export type ServiceResponse =
    | {
        code: string;
    }
    | Error;

export interface ServiceOptions {
    name: string;
    interpolateUrl?: {
        [key: string]: string;
    };
    [key: string]: unknown;
}

export type Service = ServiceOptions | string | (() => ServiceOptions);

export type ServiceDefinition = (options: ServiceOptions) => {
    url: string;
    headers?: string[];
    isScript?: boolean;
    callback: (done: (resp: ServiceResponse) => void, response: string) => ServiceResponse;
};

export interface ComplianceTypes {
    info: string;
    "opt-in": string;
    "opt-out": string;
}

export type LayoutTypes = { basic?: string } & { [key: string]: string };

export interface Options {
    enabled?: boolean;
    container?: HTMLElement;
    cookie?: {
        name?: string;
        path?: string;
        domain?: string;
        expiryDays?: number;
        secure?: boolean;
    };
    onPopupOpen?: () => void;
    onPopupClose?: () => void;
    onInitialise?: (status: Status) => void;
    onStatusChange?: (status: Status, chosenBefore: boolean) => void;
    onRevokeChoice?: () => void;
    onNoCookieLaw?: (countryCode: string, country: Country) => void;
    content?: {
        header?: string;
        message?: string;
        dismiss?: string;
        allow?: string;
        deny?: string;
        link?: string;
        href?: string;
        close?: string;
        target?: string;
        policy?: string;
    };
    elements?: {
        header?: string;
        message?: string;
        messagelink?: string;
        dismiss?: string;
        allow?: string;
        deny?: string;
        link?: string;
        close?: string;
    };
    window?: string;
    revokeBtn?: string;
    compliance?: ComplianceTypes;
    type?: keyof ComplianceTypes;
    layouts?: LayoutTypes;
    layout?: LayoutTypes;
    position?: "top" | "bottom" | "top-left" | "top-right" | "bottom-left" | "bottom-right";
    theme?: "block" | "edgeless" | "classic";
    static?: boolean;
    palette?: {
        popup?: {
            background?: CSS.Properties["background"];
            text?: CSS.Properties["color"];
            link?: CSS.Properties["color"];
        };

        button?: {
            background?: CSS.Properties["background"];
            border?: CSS.Properties["color"];
            text?: CSS.Properties["color"];
        };

        highlight?: {
            background?: CSS.Properties["background"];
            border?: CSS.Properties["color"];
            text?: CSS.Properties["color"];
        };
    };
    revokable?: boolean;
    animateRevokable?: boolean;
    showLink?: boolean;
    dismissOnScroll?: boolean;
    dismissOnTimeout?: boolean;
    dismissOnWindowClick?: boolean;
    ignoreClicksFrom?: string[];
    autoOpen?: boolean;
    autoAttach?: boolean;
    whitelistPage?: string[];
    blacklistPage?: string[];
    overrideHTML?: string;
    law?: {
        countryCode?: string;
        regionalLaw?: boolean;
    };
    location?: {
        timeout?: number;
        services?: Service[];
        serviceDefinitions?: { [key: string]: ServiceDefinition };
    };
}

export interface Popup {
    autoOpen(options: Options): void;
    clearStatus(): void;
    close(showRevoke: boolean): void;
    destroy(): void;
    fadeIn(): void;
    fadeOut(): void;
    getStatus(): Status;
    hasAnswered(options: Options): void;
    hasConsented(): void;
    initialise(options: Options): void;
    isOpen(): boolean;
    open(): void;
    revokeChoice(preventOpen: boolean): void;
    setStatus(status: Status): void;
    toggleRevokeButton(show: boolean): void;
}

export interface Consent {
    initialise(options: Options, success?: (cb: Popup) => void, error?: (cb: Popup) => void): void;
    getCountryCode(options: Options, success: (resp: { code?: string }) => void, error: (err: Error) => void): void;
    hasTransition: boolean;
    hasInitialised: boolean;
}
