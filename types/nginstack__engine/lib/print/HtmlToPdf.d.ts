export = HtmlToPdf;
declare function HtmlToPdf(canSendToServer: boolean): void;
declare class HtmlToPdf {
    constructor(canSendToServer: boolean);
    private pages_;
    private resources_;
    private operationType_;
    private workDir_;
    private logger_;
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
    private htmlToPdfPath_;
    private htmlToPdfExec_;
    private encode_;
    private decode_;
    private buildRemotePayload_;
    private remotePayload_;
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
