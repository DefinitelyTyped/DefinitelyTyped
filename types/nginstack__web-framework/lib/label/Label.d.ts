export = Label;
declare function Label(process: any): void;
declare class Label {
    constructor(process: any);
    private _changedProperties;
    process: any;
    private logger_;
    private _changed;
    private written_;
    private toString;
    private getChanges;
    private _clearChangedProperties;
    private resetProperties;
    name: string;
    width: string;
    height: string;
    fontSize: string;
    border: string;
    color: string;
    backgroundColor: string;
    align: string;
    visible: boolean;
    css: string;
    text: string;
    autoSanitize: boolean;
    write(): void;
}
