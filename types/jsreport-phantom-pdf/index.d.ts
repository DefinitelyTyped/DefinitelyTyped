import { ExtensionDefinition, Template } from "jsreport-core";

declare namespace JsReportPhantomPdf {
    interface Margin {
        left: number | string;
        right: number | string;
        top: number | string;
        bottom: number | string;
    }

    interface Phantom {
        margin: string | Margin;
        header: string;
        footer: string;
        width: string;
        height: string;
        headerHeight: string;
        footerHeight: string;
        format: string;
        orientation: "portrait" | "landscape";
        blockJavaScript: boolean;
        resourceTimeout: number;
        waitForJS: boolean;
        fitToPage: boolean;
        customPhantomJS: boolean;
        phantomjsVersion: string;
    }

    // const enum PhantomStrategy {
    //   dedicatedProcess = 'dedicated-process',
    //   phantomServer = 'phantom-server'
    // }

    interface Options {
        allowLocalFilesAccess: boolean;
        // appDirectory: string;
        defaultPhantomjsVersion: string;
        strategy: "dedicated-process" | "phantom-server";
        timeout: number;
    }

    // without exporting enum, it doesn't include the require('jsreport-core') in the test.js for some reason
    // help welcome
    // export enum Foo { }

    interface PhantomPDFTemplate extends Template {
        phantom?: Partial<Phantom> | undefined;
        recipe: "phantom-pdf" | string;
    }
}

declare module "jsreport-core" {
    interface TemplateRegistry {
        PhantomPDFTemplate: JsReportPhantomPdf.PhantomPDFTemplate;
    }
}

declare function JsReportPhantomPdf(options?: Partial<JsReportPhantomPdf.Options>): ExtensionDefinition;

export = JsReportPhantomPdf;
