import type { Frame, Page } from "puppeteer";

declare namespace PuppeteerHar {
    interface PuppeteerHarOptions {
        path?: string;
        saveResponse?: boolean;
        captureMimeTypes?: boolean;
    }
}

declare class PuppeteerHar {
    constructor(page: Page, options?: PuppeteerHar.PuppeteerHarOptions);
    start(options?: PuppeteerHar.PuppeteerHarOptions): Promise<void>;
    stop(): Promise<PuppeteerHar | undefined>;
    cleanUp(): Promise<void>;

    inProgress: boolean;
    page: Page;
    mainFrame: Frame;
}

export = PuppeteerHar
