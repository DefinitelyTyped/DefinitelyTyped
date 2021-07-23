export = HtmlToPdf;
declare function HtmlToPdf(canSendToServer: boolean): void;
declare class HtmlToPdf {
    constructor(canSendToServer: boolean);
    pages_: any[];
    resources_: any[];
    operationType_: number;
    workDir_: string;
    logger_: Logger;
    timeout: number;
    transferEncoding: string;
    copies: number;
    grayScale: boolean;
    orientation: string;
    pageSize: string;
    title: string;
    extraArguments: string;
    localFileAction: string;
    captureOutput: boolean;
    private outputMessage_;
    getOutput(): string;
    private setOrientation;
    private getOrientation;
    private setPageSize;
    private getPageSize;
    private setExtraArguments;
    private getExtraArguments;
    private setCopies;
    private getCopies;
    private setGrayScale;
    private getGrayScale;
    private setTitle;
    private getTitle;
    private addFileByPath_;
    addPage(inputFilePath: string): void;
    addResource(inputFilePath: string): void;
    private addFileByContent_;
    addPageContent(fileName: string, fileContent: string, opt_transferEncoding?: string): void;
    addResourceContent(fileName: string, fileContent: string, opt_transferEncoding?: string): void;
    setPageExtraArguments(index: number, params: string): void;
    getPages(): any[];
    private tryExecuteApp_;
    private buildCommand_;
    private updateAppPackage_;
    htmlToPdfPath_: string;
    htmlToPdfExec_: string;
    private encode_;
    private decode_;
    private buildRemotePayload_;
    remotePayload_: {
        options: {
            orientation: string;
            'page-size': string;
            copies: number;
            grayscale: true;
            title: string;
        };
        extraArguments: string;
        pages: any[];
        resources: any[];
        timeout: number;
        transferEncoding: string;
    };
    private isAppAvailableOnEnvironment_;
    private printWithEmbeddedApp_;
    private printWithEnvironmentApp_;
    private printWithWebService_;
    private printWithRemoteServer_;
    print(outputFileName: string, generateLog?: boolean): number;
}
declare namespace HtmlToPdf {
    namespace prototype {
        type localFileAction = string;
    }
}
import Logger = require('../log/Logger.js');
