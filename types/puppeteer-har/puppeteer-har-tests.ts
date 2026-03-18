/// <reference lib="dom" />

// Import only for type-checking purposes
import { Frame, Page } from "puppeteer";
import { PuppeteerHar, PuppeteerHarOptions } from "puppeteer-har";

// Define a mock Page interface just for type-checking

// Create a mock Page object for type-checking
const mockPage: any = {
    goto: async (url: string) => {
        // Mock implementation
    },
};

// Check if the PuppeteerHar class is correctly typed
const page: Page = mockPage as any; // Type assertion to use Page

const har = new PuppeteerHar(page, {
    path: "",
    saveResponse: true,
    captureMimeTypes: true,
} as PuppeteerHarOptions);

// Type-check the methods of PuppeteerHar
const startPromise: Promise<void> = har.start();
const stopPromise: Promise<PuppeteerHar | undefined> = har.stop();
const cleanupPromise: Promise<void> = har.cleanUp();

// Verify that the PuppeteerHar instance is correctly typed
const harInstance: PuppeteerHar = har;

const memberInProgress: boolean = har.inProgress;
const memberPage: Page = har.page;
const memberMainFrame: Frame = har.mainFrame;

// Ensure that the methods return the correct types
startPromise.then(() => console.log("Start method passed type check"));
stopPromise.then(() => console.log("Stop method passed type check"));
cleanupPromise.then(() => console.log("Cleanup method passed type check"));
