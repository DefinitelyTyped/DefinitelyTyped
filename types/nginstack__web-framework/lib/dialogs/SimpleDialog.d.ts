export = SimpleDialog;
declare function SimpleDialog(process?: any): void;
declare class SimpleDialog {
    constructor(process?: any);
    private _process;
    message: string;
    title: string;
    show(): void;
}
