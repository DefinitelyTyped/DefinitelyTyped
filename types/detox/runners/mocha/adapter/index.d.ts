interface DetoxMochaAdapter {
    detox: Detox.Detox;
    beforeEach: (context: any) => Promise<void>;
    afterEach: (context: any) => Promise<void>;
}

declare const adapter: DetoxMochaAdapter;

export = adapter;
