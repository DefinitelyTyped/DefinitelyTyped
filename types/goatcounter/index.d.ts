export interface GoatCounterVars {
    path?: string;
    referrer?: string;
    title?: string;
    event?: boolean;
}

export default class GoatCounter {
    path: string | ((p: string) => string | null);
    endpoint: string;
    // Filter some requests that we (probably) don't want to count.
    filter(): 'visibilityState' | 'frame' | 'localhost' | 'localfile' | 'disabled with #toggle-goatcounter' | false;

    // Get URL to send to GoatCounter.
    url(vars?: GoatCounterVars): string | void;

    // Count a hit.
    count(vars?: GoatCounterVars): void;

    // Get a query parameter.
    get_query(name: string): string;

    // Track click events.
    bind_events(): void;

    // Add a "visitor counter" frame or image.
    visit_count(opt: { type?: string; append?: string; path?: string; attr?: any }): void;
}
