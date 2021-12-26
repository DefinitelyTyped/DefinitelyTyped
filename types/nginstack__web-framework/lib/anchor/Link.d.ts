export = Link;
declare function Link(
    name: string,
    target: string | ((arg0: any) => any),
    processKey?: number,
    newTab?: boolean,
    ...args: any[]
): void;
declare class Link {
    constructor(
        name: string,
        target: string | ((arg0: any) => any),
        processKey?: number,
        newTab?: boolean,
        ...args: any[]
    );
    private paramsFieldNames_;
    cssClass: string;
    private written_;
    srcId: string;
    paramsFieldNames: any[];
    autoSanitize: boolean;
    private getProcessedParameters;
    private toString;
    private getClientFunction_;
    prepare(): void;
    private _prepare;
    private getHtml;
    write(content: string, parametersValue: string, cssClass: string): void;
    private writeToClient;
    private setPropertiesDefaultValues;
    enabled: boolean;
    private getLinkFieldNamesParamsOp;
    private _getArrayFromList;
    private getChanges;
    changed: boolean;
    clone(): Link;
    protected propertiesToSync_: string[];
}
