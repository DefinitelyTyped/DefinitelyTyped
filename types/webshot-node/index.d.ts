/// <reference types="node"/>

export = webshot;

declare function webshot(src: string, dst: string, options: webshot.Options, cb?: (e: Error | null) => void): void;
declare function webshot(src: string, dst: string, cb?: (e: Error | null) => void): void;
declare function webshot(src: string, options: webshot.Options, cb?: (e: Error | null) => void): NodeJS.ReadableStream;
declare function webshot(src: string, cb?: (e: Error | null) => void): NodeJS.ReadableStream;

declare namespace webshot {
    interface Options {
        windowSize?: {
            width: number;
            height: number;
        } | undefined;
        screenSize?: {
            width: number;
            height: number;
        } | undefined;
        shotSize?: {
            width: "window" | "all" | number;
            height: "window" | "all" | number;
        } | undefined;
        shotOffset?: {
            left: number;
            right: number;
            top: number;
            bottom: number;
        } | undefined;
        phantomPath?: string | undefined;
        phantomConfig?: { [key: string]: any } | undefined;
        cookies?: Array<{ [key: string]: any }> | null | undefined;
        customHeaders?: Array<{ [key: string]: any }> | null | undefined;
        defaultWhiteBackground?: boolean | undefined;
        customCSS?: string | undefined;
        quality?: number | undefined;
        streamType?: "png" | "jpg" | "jpeg" | undefined;
        siteType?: "url" | "file" | "html" | undefined;
        renderDelay?: number | undefined;
        timeout?: number | undefined;
        takeShotOnCallback?: boolean | undefined;
        errorIfStatusIsNot200?: boolean | undefined;
        errorIfJSException?: boolean | undefined;
        captureSelector?: boolean | undefined;
    }
}
