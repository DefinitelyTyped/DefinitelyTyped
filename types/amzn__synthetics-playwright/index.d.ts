type PlaywrightBrowser = import("@playwright/test").Browser;
type PlaywrightBrowserType = import("@playwright/test").BrowserType;
type PlaywrightBrowserContext = import("@playwright/test").BrowserContext;
type PlaywrightLaunchOptions = import("@playwright/test").LaunchOptions;
type PlaywrightPage = import("@playwright/test").Page;

interface StepConfig {
  /** 
   * Whether to continue execution if this step fails.
   * Default: false
   */
  readonly continueOnStepFailure?: boolean;
  
  /** 
   * Whether to take a screenshot when the step starts.
   * Default: true
   */
  readonly screenshotOnStepStart?: boolean;
  
  /** 
   * Whether to take a screenshot when the step succeeds.
   * Default: true
   */
  readonly screenshotOnStepSuccess?: boolean;
  
  /** 
   * Whether to take a screenshot when the step fails.
   * Default: true
   */
  readonly screenshotOnStepFailure?: boolean;
}

interface SyntheticsType {
  /**
   * Launches a Chromium browser using Playwright with CloudWatch Synthetics configurations.
   * Returns a Browser instance that can be used to create pages and browser contexts.
   * 
   * @param options - Optional browser launch options to override default settings
   * @returns Promise that resolves to a Playwright Browser instance
   * 
   * @example
   * ```typescript
   * const browser = await synthetics.launch();
   * const browser = await synthetics.launch({ headless: false });
   * ```
   */
  readonly launch: PlaywrightBrowserType["launch"];

  /**
   * Creates a new page from a browser or browser context with automatic CloudWatch Synthetics instrumentation.
   * Sets up Chrome DevTools Protocol connection for monitoring and captures network activity.
   * 
   * @param browserOrContext - A Playwright Browser or BrowserContext instance
   * @returns Promise that resolves to a Playwright Page instance
   * 
   * @example
   * ```typescript
   * const browser = await synthetics.launch();
   * const page = await synthetics.newPage(browser);
   * 
   * const context = await browser.newContext();
   * const page = await synthetics.newPage(context);
   * ```
   */
  readonly newPage: (
    browserOrContext: PlaywrightBrowser | PlaywrightBrowserContext,
  ) => Promise<PlaywrightPage>;

  /**
   * Closes the currently opened browser and cleans up resources.
   * Should be called in a finally block to ensure proper cleanup.
   * 
   * @returns Promise that resolves when the browser is closed
   * 
   * @example
   * ```typescript
   * try {
   *   const browser = await synthetics.launch();
   *   // ... perform tests
   * } finally {
   *   await synthetics.close();
   * }
   * ```
   */
  readonly close: () => Promise<void>;

  /**
   * Returns the default browser launch options used by CloudWatch Synthetics.
   * These options are optimized for running canaries in the AWS Lambda environment.
   * 
   * @returns Promise that resolves to default Playwright launch options
   * 
   * @example
   * ```typescript
   * const defaultOptions = await synthetics.getDefaultLaunchOptions();
   * const customOptions = { ...defaultOptions, slowMo: 100 };
   * const browser = await synthetics.launch(customOptions);
   * ```
   */
  readonly getDefaultLaunchOptions: () => Promise<PlaywrightLaunchOptions>;

  /**
   * Executes a step in a Synthetics canary script with automatic monitoring and reporting.
   * Provides step-level screenshots, execution reports, and CloudWatch metrics emission.
   * 
   * @param stepName - Descriptive name for the step (used in reports and metrics)
   * @param functionToExecute - Async function containing the step logic to execute
   * @param stepConfig - Optional configuration for step behavior (screenshots, failure handling)
   * @param page - Optional Playwright page for enhanced screenshot context
   * @returns Promise that resolves to the return value of functionToExecute
   * 
   * @example
   * ```typescript
   * await synthetics.executeStep(
   *   'navigateToHomepage',
   *   async () => {
   *     await page.goto('https://example.com');
   *     await page.waitForLoadState('networkidle');
   *   }
   * );
   * 
   * const title = await synthetics.executeStep(
   *   'checkPageTitle',
   *   async () => {
   *     return await page.title();
   *   },
   *   {
   *     continueOnStepFailure: false,
   *     screenshotOnStepStart: true
   *   },
   *   page
   * );
   * ```
   */
  readonly executeStep: <T>(
    stepName: string,
    functionToExecute: () => Promise<T>,
    stepConfig?: StepConfig,
    page?: PlaywrightPage,
  ) => Promise<T>;
}

/**
 * The main synthetics object providing methods for browser automation with CloudWatch Synthetics.
 * This object is pre-configured for the AWS Lambda environment and includes automatic
 * monitoring, reporting, and screenshot capabilities.
 */
export const synthetics: SyntheticsType;

export {};
