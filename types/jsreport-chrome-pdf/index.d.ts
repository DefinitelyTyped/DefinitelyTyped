import { ExtensionDefinition, Template } from "jsreport-core";

declare namespace JsReportChromePdf {
    // https://jsreport.net/learn/chrome-pdf
    // https://github.com/puppeteer/puppeteer/blob/master/docs/api.md#pagepdfoptions
    interface Chrome {
        path: string;
        scale: number;
        displayHeaderFooter: boolean;
        headerTemplate: string;
        footerTemplate: string;
        printBackground: boolean;
        landscape: boolean;
        pageRanges: string; // 1-5, 8, 11-13
        format: string;
        width: string | number;
        height: string | number;
        margin: {
            top?: string | number | undefined;
            right?: string | number | undefined;
            bottom?: string | number | undefined;
            left?: string | number | undefined;
        };
        preferCSSPageSize: boolean;

        // https://jsreport.net/learn/chrome-pdf
        marginTop: string | number;
        marginRight: string | number;
        marginBottom: string | number;
        marginLeft: string | number;
        waitForJS: boolean;
        waitForNetworkIddle: boolean;

        // https://github.com/jsreport/jsreport-chrome-pdf/blob/master/test/chromeTest.js
        header: string;
        url: string;
        pageNumber: number;
        totalPages: number;
        mediaType: "screen" | "print";
    }

    // https://jsreport.net/learn/chrome-image
    // https://github.com/puppeteer/puppeteer/blob/v1.11.0/docs/api.md#pagescreenshotoptions
    interface ChromeImage {
        path: string;
        type: "jpeg" | "png";
        quality: number; // 0-100
        fullPage: boolean;
        clip: {
            x: number;
            y: number;
            width: number;
            height: number;
        };
        omitBackground: boolean;
        encoding: "base64" | "binary";
    }

    // https://github.com/puppeteer/puppeteer/blob/master/docs/api.md#puppeteerlaunchoptions
    interface LaunchOptions {
        product: "chrome" | "firefox";
        ignoreHTTPSErrors: boolean;
        headless: boolean;
        executablePath: string;
        slowMo: number;
        defaultViewport: Partial<{
            width: string;
            height: string;
            deviceScaleFactor: string;
            isMobile: boolean;
            hasTouch: boolean;
            isLandscape: boolean;
        }>;
        args: string[];
        ignoreDefaultArgs: boolean | string[];
        handleSIGINT: boolean;
        handleSIGTERM: boolean;
        handleSIGHUP: boolean;
        timeout: number;
        dumpio: boolean;
        userDataDir: string;
        env: { [key: string]: string };
        devtools: boolean;
        pipe: boolean;
        extraPrefsFirefox: { [key: string]: any };
    }

    // https://jsreport.net/learn/configuration
    interface Options {
        allowLocalFilesAccess: boolean;
        strategy: "dedicated-process" | "http-server" | "in-process";
        timeout: number;
        numberOfWorkers: number;
        host: string;
        portLeftBoundary: number;
        portRightBoundary: number;
        allowedModules: string[];
        launchOptions: Partial<LaunchOptions>;
    }
    interface ChromeTemplate extends Template {
        chrome?: Partial<Chrome> | undefined;
        chromeImage?: Partial<ChromeImage> | undefined;
        recipe: "chrome-pdf" | "chrome-image" | string;
        content: string;
    }
}

declare module "jsreport-core" {
    interface TemplateRegistry {
        ChromeTemplate: JsReportChromePdf.ChromeTemplate;
    }
}

declare function JsReportChromePdf(options?: Partial<JsReportChromePdf.Options>): ExtensionDefinition;

export = JsReportChromePdf;
