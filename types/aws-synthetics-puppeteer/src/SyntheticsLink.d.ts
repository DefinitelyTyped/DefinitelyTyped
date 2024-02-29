// js installs to root of node_modules
// eslint-disable-next-line @definitelytyped/no-single-declare-module
declare module "SyntheticsLink" {
    export = SyntheticsLink;
    /**
     * This class handles the creation of result for Synthetics Link. For each link, add url, text, parent url, status and failure reason using the methods below.
     * An instance of SyntheticsLink can be added to broken link checker report using addLink(instanceOfSyntheticsLink).
     */
    class SyntheticsLink {
        constructor(url: string);
        linkNum: number;
        url: string;
        text: string;
        parentUrl: string;
        status: {
            statusCode: string;
            statusText: string;
        };
        failureReason: string;
        screenshots: any[];
        withLinkNum(linkNum: number): SyntheticsLink;
        withUrl(url: string): SyntheticsLink;
        withText(text: string): SyntheticsLink;
        withParentUrl(parentUrl: any): SyntheticsLink;
        withStatusCode(statusCode: any): SyntheticsLink;
        withStatusText(statusText: any): SyntheticsLink;
        withFailureReason(failureReason: any): SyntheticsLink;
        withScreenshotResult(screenshotResults: any): SyntheticsLink;
        addScreenshotResult(screenshotResult: any): void;
        getLinkNum(): number;
        getUrl(): string;
        getText(): string;
        getParentUrl(): string;
        getStatusCode(): string;
        getStatusText(): string;
        getFailureReason(): string;
        getScreenshotResult(): any[];
    }
}
