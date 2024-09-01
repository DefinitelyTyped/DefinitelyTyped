import { Page } from "puppeteer";

interface PuppeteerHarOptions {
  path?: string;
}

declare class PuppeteerHar {
  constructor(page: Page, options?: PuppeteerHarOptions);
  start(options?: PuppeteerHarOptions): Promise<void>;
  stop(): Promise<void>;
}

export = PuppeteerHar;