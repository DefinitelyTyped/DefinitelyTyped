interface DetoxJestAdapter {
    detox: Detox.Detox;
    beforeEach: () => Promise<void>;
    afterAll: () => Promise<void>;
}

declare const adapter: DetoxJestAdapter;

export default adapter;
