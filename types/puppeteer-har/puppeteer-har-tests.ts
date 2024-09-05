/// <reference lib="dom" />

// Import only for type-checking purposes
import PuppeteerHar from "puppeteer-har";

// Define a mock Page interface just for type-checking
interface MockPage {
    goto(url: string): Promise<void>;
}

// Create a mock Page object for type-checking
const mockPage: MockPage = {
    goto: async (url: string) => {
        // Mock implementation
    },
};

// Check if the PuppeteerHar class is correctly typed
const page: MockPage = mockPage as any; // Type assertion to use MockPage
const har = new PuppeteerHar(page);

// Type-check the methods of PuppeteerHar
const startPromise: Promise<void> = har.start();
const stopPromise: Promise<void> = har.stop();
const savePromise: Promise<void> = har.save({ path: "example.har" });

// Verify that the PuppeteerHar instance is correctly typed
const harInstance: PuppeteerHar = har;

// Ensure that the methods return the correct types
startPromise.then(() => console.log("Start method passed type check"));
stopPromise.then(() => console.log("Stop method passed type check"));
savePromise.then(() => console.log("Save method passed type check"));
