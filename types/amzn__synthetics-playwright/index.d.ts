import type { Browser, BrowserContext, BrowserType, LaunchOptions, Page } from "@playwright/test";

export interface StepConfig {
    readonly continueOnHttpStepFailure?: boolean | undefined;
    readonly continueOnStepFailure?: boolean | undefined;
    readonly screenshotOnStepFailure?: boolean | undefined;
    readonly screenshotOnStepStart?: boolean | undefined;
    readonly screenshotOnStepSuccess?: boolean | undefined;
    readonly stepDurationMetric?: boolean | undefined;
    readonly stepsReport?: boolean | undefined;
    readonly stepSuccessMetric?: boolean | undefined;
}

export interface SyntheticsType {
    readonly close: () => Promise<void>;
    readonly executeStep: <T>(
        stepName: string,
        func: () => Promise<T>,
        stepConfig?: StepConfig,
        page?: Page,
    ) => Promise<T>;
    readonly getDefaultLaunchOptions: () => Promise<LaunchOptions>;
    readonly getPage: (browser: Browser | BrowserContext) => Promise<Page>;
    readonly launch: BrowserType["launch"];
    readonly newPage: (browser: Browser | BrowserContext) => Promise<Page>;
}

export const synthetics: SyntheticsType;

export {};
