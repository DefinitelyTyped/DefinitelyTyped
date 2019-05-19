/**
 * Definition from Target.js
 * https://github.com/GoogleChrome/puppeteer/blob/master/lib/Target.js
 */

import { CDPSession } from "./Connection";
import { BrowserContext, Browser } from "./Browser";
import { Page } from "./Page";
import { Worker } from "./Worker";

export type TargetType = "page" | "background_page" | "service_worker" | "browser" | "other";

export interface Target {
  /** Get the browser the target belongs to. */
  browser(): Browser;

  /** The browser context the target belongs to. */
  browserContext(): BrowserContext;

  /** Creates a Chrome Devtools Protocol session attached to the target. */
  createCDPSession(): Promise<CDPSession>;

  /** Get the target that opened this target. Top-level targets return `null`. */
  opener(): Target | null;

  /** Returns the target `Page` or a `null` if the type of the page is not "page". */
  page(): Promise<Page>;

  /** Identifies what kind of target this is.  */
  type(): TargetType;

  /** Returns the target URL. */
  url(): string;

  /**
   * If the target is not of type "service_worker" or "shared_worker", returns null.
   * @since 1.16.0
   */
  worker(): Promise<Worker|null>;
}
