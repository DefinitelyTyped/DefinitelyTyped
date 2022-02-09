export = SimpleDialog;
declare function SimpleDialog(process?: import('../process/Process.js')): void;
declare class SimpleDialog {
    constructor(process?: import('../process/Process.js'));
    private _process;
    message: string;
    title: string;
    show(): void;
}
