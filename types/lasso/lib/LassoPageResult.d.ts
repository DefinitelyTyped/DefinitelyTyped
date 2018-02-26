import LassoContext from './LassoContext';

export default interface LassoPageResult {
    addFile(filePath: string, contentType: string, isAsync: boolean, slot: any): void;
    addUrl(url: string, slot: any, contentType: string, isAsync: boolean): void;
    deserialize(reader: any, callback: any): void;
    getBodyHtml(data?: any): string;
    getCSSFiles(): any[];
    getCSSUrls(): any[];
    getFileByAsyncBundleName(bundleName: string): any;
    getFileByBundleName(bundleName: string): any;
    getFilePathsByContentType(...args: any[]): void;
    getHeadHtml(data?: any): string;
    getHtmlBySlot(): any;
    getHtmlForSlot(slotName: string, data?: any): any;
    getInlineCodeFingerprints(): string[];
    getJavaScriptFiles(): any[];
    getJavaScriptUrls(): any[];
    getOutputFiles(): any[];
    getOutputFilesWithInfo(...args: any[]): void;
    getSlotHtml(slotName: string, data?: any): any;
    getUrlByAsyncBundleName(bundleName: string): any;
    getUrlByBundleName(bundleName: string): any;
    getUrlsForSlot(slot: any): any;
    htmlSlotsToJSON(indentation: any): any;
    registerBundle(bundle: any, async: any, lassoContext: LassoContext): void;
    registerResource(resource: any): void;
    serialize(lassoPageResult: LassoPageResult): any;
    setHtmlBySlot(htmlBySlot: any): void;
    setInlineCodeFingerprints(inlineCodeFingerprints: string[]): void;
    toJSON(): any;
}
