declare var Offline: {
    options: OfflineOptions;
    check: () => void;
    state: string;

    on(event: "up", handler: (e: Event) => any, context?: any): void;
    on(event: "down", handler: (e: Event) => any, context?: any): void;
    on(event: "confirmed-up", handler: (e: Event) => any, context?: any): void;
    on(event: "confirmed-down", handler: (e: Event) => any, context?: any): void;
    on(event: "checking", handler: (e: Event) => any, context?: any): void;
    on(event: "reconnect:started", handler: (e: Event) => any, context?: any): void;
    on(event: "reconnect:stopped", handler: (e: Event) => any, context?: any): void;
    on(event: "reconnect:tick", handler: (e: Event) => any, context?: any): void;
    on(event: "reconnect:connecting", handler: (e: Event) => any, context?: any): void;
    on(event: "reconnect:failure", handler: (e: Event) => any, context?: any): void;
    on(event: "requests:flush", handler: (e: Event) => any, context?: any): void;
    on(event: "requests:hold", handler: (e: Event) => any, context?: any): void;
    on(event: string, handler: (e: Event) => any, context?: any): void;

    off(event: "up", handler?: (e: Event) => any): void;
    off(event: "down", handler?: (e: Event) => any): void;
    off(event: "confirmed-up", handler?: (e: Event) => any): void;
    off(event: "confirmed-down", handler?: (e: Event) => any): void;
    off(event: "checking", handler?: (e: Event) => any): void;
    off(event: "reconnect:started", handler?: (e: Event) => any): void;
    off(event: "reconnect:stopped", handler?: (e: Event) => any): void;
    off(event: "reconnect:tick", handler?: (e: Event) => any): void;
    off(event: "reconnect:connecting", handler?: (e: Event) => any): void;
    off(event: "reconnect:failure", handler?: (e: Event) => any): void;
    off(event: "requests:flush", handler?: (e: Event) => any): void;
    off(event: "requests:hold", handler?: (e: Event) => any): void;
    off(event: string, handler?: (e: Event) => any): void;
};

interface OfflineOptions {
    // TODO Should these types be `boolean|Function`?
    // The project documentation is not clear here.
    checkOnLoad?: boolean | undefined;
    interceptRequests?: boolean | undefined;
    requests?: boolean | undefined;
    game?: boolean | undefined;
    checks?: OfflineChecks | undefined;
    reconnect: {
        initialDelay: number;
        delay: number;
    };
}

interface OfflineChecks {
    // TODO "xhr" and "image" probably have different options.
    // However, this is not stated in the project documentation.
    xhr?: OfflineCheck | undefined;
    image?: OfflineCheck | undefined;
    active?: string | undefined;
}

interface OfflineCheck {
    url: string;
}
