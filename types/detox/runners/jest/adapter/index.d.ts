interface DetoxJestAdapter {
    detox: Detox.Detox;
    beforeEach: () => Promise<void>;
    afterAll: () => Promise<void>;
    // These are not publicly used, but are defined in order to overlap with the jasmine.CustomReporter interface (which is a weak interface)
    specDone: () => void;
    specStarted: () => void;
}

declare const adapter: DetoxJestAdapter;

export = adapter;
