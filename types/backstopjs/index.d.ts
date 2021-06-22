// Type definitions for backstopjs 4.1
// Project: https://github.com/garris/backstopjs#readme
// Definitions by: Darío Blanco <https://github.com/darioblanco>, MindDoc <https://github.com/minddocdev>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface Config {
  asyncCaptureLimit?: number;
  asyncCompareLimit?: number;
  baseUrl?: string;
  ci?: {
    format?: string;
    testReportFileName?: string;
    testSuiteName?: string;
  };
  debugWindow?: boolean;
  debug?: boolean;
  dockerCommandTemplate?: string;
  engine?: 'chromy' | 'puppeteer';
  engineOptions?: {
    args: string[];
    chromeFlags?: string[];
    chromePath?: string;
    ignoreHTTPSErrors?: boolean;
    waitTimeout?: number;
  };
  id: string;
  onBeforeScript?: string;
  onReadyScript?: string;
  paths?: {
    ci_report?: string;
    bitmaps_reference?: string;
    bitmaps_test?: string;
    engine_scripts?: string;
    html_report?: string;
    json_report?: string;
  };
  report?: Array<'browser' | 'CI' | 'json'>;
  resembleOutputOptions?: { // See https://github.com/rsmbl/Resemble.js
    errorColor?: {
      red: number;
      green: number;
      blue: number;
    },
    errorType?: string;
    transparency?: number;
    ignoreAntialiasing?: boolean;
  };
  scenarios: Scenario[];
  viewports: Viewport[];
}

export interface KeypressSelector {
  selector: string;
  keyPress: string;
}

/** The Backstop test definition. See https://github.com/garris/BackstopJS#advanced-scenarios */
export interface Scenario {
  [key: string]: any; // Allow for custom properties.
  clickSelector?: string; // Click the specified DOM element prior to screenshot
  clickSelectors?: string[]; // Simulates multiple sequential click interactions
  cookiePath?: string; // Import cookies in JSON format
  delay?: number; // Wait for x milliseconds
  expect?: number; // Use with selectorExpansion true to expect number of results found
  hideSelectors?: string[]; // Selectors set to visibility: hidden
  hoverSelector?: string; // Move pointer over the given DOM element prior to screenshot
  hoverSelectors?: string[]; // Simulates multiple sequential hover interactions
  keyPressSelector?: KeypressSelector; // Press key in the DOM element prior to screenshot
  keyPressSelectors?: KeypressSelector[]; // Simulates multiple sequential keypress interactions
  label: string; // Tag saved with your reference images
  misMatchThreshold?: number; // Percentage of different pixels allowed to pass test
  onBeforeScript?: string; // Used to set up browser state e.g. cookies
  onReadyScript?: string; // Used to modify UI state prior to screenshots e.g. hovers, clicks etc
  postInteractionWait?: number; // Wait for selector (ms) after interacting with hover or click
  readyEvent?: string; // Wait until this string has been logged to the console
  readySelector?: string; // Wait until this selector exists before continuing
  referenceUrl?: string; // Specify a different state or environment when creating reference
  removeSelectors?: string[]; // Selectors set to display: none
  requireSameDimensions?: boolean; // If true, any change in selector size will trigger a failure
  selectors?: string[]; // Selectors to capture
  selectorExpansion?: boolean; // If true, take screenshots of all matching selector instances
  scrollToSelector?: string; // Scroll the specified DOM element into view prior to screenshots
  url: string; // The url of your app state
  viewports?: Viewport[]; // Override global viewports
}

export type Viewport = ViewportNext | ViewportLegacy;

export interface ViewportNext {
  label: string;
  width: number;
  height: number;
}

// Create a Viewport version that uses `name` for legacy support.
// https://github.com/garris/BackstopJS/blob/aa7de8ee059074f947768cfd04db1776348e1a7a/core/util/createBitmaps.js#L25
export interface ViewportLegacy {
  name: 'phone' | 'tablet' | 'desktop';
  width: number;
  height: number;
}

export default function backstop(
  command: 'approve' | 'init' | 'reference' | 'test',
  options?: { config?: Config | string, filter?: string },
): Promise<void>;
