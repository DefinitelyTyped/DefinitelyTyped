import penthouse = require("penthouse");
import { Browser } from "puppeteer";

declare const browser: Browser;

// $ExpectType void
penthouse({
    url: "",
    cssString: "body { color: red; }",
    css: "styles.css",
    width: 1280,
    height: 720,
    screenshots: {
        type: "jpeg",
        quality: 80,
        fullPage: true,
        omitBackground: true,
    },
    keepLargerMediaQueries: true,
    forceInclude: [".header", /^\.hero/],
    forceExclude: [".ad", /^\.tracking/],
    propertiesToRemove: ["transition", /^animation/],
    timeout: 30000,
    pageLoadSkipTimeout: 5000,
    renderWaitTime: 100,
    blockJSRequests: false,
    maxEmbeddedBase64Length: 4096,
    maxElementsToCheckPerSelector: 25,
    userAgent: "penthouse-test-agent",
    customPageHeaders: {
        "x-test-header": "penthouse",
    },
    cookies: [
        {
            name: "session",
            value: "abc123",
            domain: "example.com",
        },
    ],
    strict: true,
    allowedResponseCode: 200,
    puppeteer: {
        getBrowser() {
            return browser;
        },
        pageGotoOptions: {
            timeout: 1000,
            waitUntil: "networkidle0",
        },
    },
}, (error, criticalCss) => {
    const nullableError: Error | null = error;
    const cssText: string = criticalCss;

    nullableError;
    cssText;
});

// $ExpectType Promise<string>
penthouse({
    url: "",
    cssString: "body { color: red; }",
    allowedResponseCode: /20\d/,
    puppeteer: {
        async getBrowser() {
            return Promise.resolve(browser);
        },
    },
});

// $ExpectType Promise<string>
penthouse({
    url: "",
    cssString: "body { color: red; }",
    allowedResponseCode(response) {
        return response.status() >= 200 && response.status() < 400;
    },
});

// @ts-expect-error
penthouse({ url: 123 });

// @ts-expect-error
penthouse({ url: "" });

// @ts-expect-error
penthouse({ url: "", width: "1280" });

// @ts-expect-error
penthouse({ url: "", height: "720" });

// @ts-expect-error
penthouse({ url: "", timeout: "30000" });

// @ts-expect-error
penthouse({ url: "", pageLoadSkipTimeout: "5000" });

// @ts-expect-error
penthouse({ url: "", renderWaitTime: "100" });

// @ts-expect-error
penthouse({ url: "", maxEmbeddedBase64Length: "4096" });

// @ts-expect-error
penthouse({ url: "", maxElementsToCheckPerSelector: "25" });

// @ts-expect-error
penthouse({ url: "", keepLargerMediaQueries: "yes" });

// @ts-expect-error
penthouse({ url: "", blockJSRequests: "no" });

// @ts-expect-error
penthouse({ url: "", strict: "true" });

// @ts-expect-error
penthouse({ url: "", forceInclude: [".header", 1] });

// @ts-expect-error
penthouse({ url: "", forceExclude: [".ad", 1] });

// @ts-expect-error
penthouse({ url: "", propertiesToRemove: ["transition", 1] });

penthouse({
    url: "",
    screenshots: {
        // @ts-expect-error
        path: "screenshot.png",
    },
});

penthouse({
    url: "",
    customPageHeaders: {
        // @ts-expect-error
        "x-test-header": 1,
    },
});

// @ts-expect-error
penthouse({ url: "", allowedResponseCode: true });
