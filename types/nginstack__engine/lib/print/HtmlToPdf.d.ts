export = HtmlToPdf;
declare function HtmlToPdf(): void;
declare class HtmlToPdf {
    private workDir_;
    private pages_;
    private resources_;
    private logger_;
    timeout: number;
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
    private tryExecuteApp_;
    private buildCommand_;
    private updateAppPackage_;
    private htmlToPdfPath_;
    private htmlToPdfExec_;
    private isAppAvailableOnEnvironment_;
    private addFileByPath_;
    private addFileByContent_;
    addPage(inputFilePath: string): void;
    addResource(inputFilePath: string): void;
    addPageContent(fileName: string, content: string): void;
    addResourceContent(fileName: string, fileContent: string): void;
    setPageExtraArguments(index: number, params: string): void;
    getPages(): any[];
    print(outputFileName: string, generateLog?: boolean): number;
}
declare namespace HtmlToPdf {
    namespace prototype {
        type localFileAction = string;
    }
}
