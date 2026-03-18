import type { Frame, Page } from "puppeteer";


export interface PuppeteerHarOptions {
    path?: string;
    saveResponse?: boolean,
    captureMimeTypes?: boolean
}

export class PuppeteerHar {
    constructor(page: any, options?: PuppeteerHarOptions);
    start(options?: PuppeteerHarOptions): Promise<void>;
    stop(): Promise< PuppeteerHar | undefined >;
    cleanUp(): Promise<void>;

    inProgress: boolean;
    page: Page;
    mainFrame: Frame
}
