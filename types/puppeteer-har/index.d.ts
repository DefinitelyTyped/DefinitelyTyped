interface PuppeteerHarOptions {
    path?: string;
}

declare class PuppeteerHar {
    constructor(page: any, options?: PuppeteerHarOptions);
    start(options?: PuppeteerHarOptions): Promise<void>;
    stop(): Promise<void>;
    save(options: PuppeteerHarOptions): Promise<void>;
}

export = PuppeteerHar;
