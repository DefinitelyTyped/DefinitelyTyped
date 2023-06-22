export = Label;
declare function Label(process: Process): void;
declare class Label {
    constructor(process: Process);
    private _changedProperties;
    process: import('../process/Process');
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
declare namespace Label {
    export { Process };
}
type Process = import('../process/Process');
