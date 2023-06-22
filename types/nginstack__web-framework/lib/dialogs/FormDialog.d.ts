export = FormDialog;
declare function FormDialog(process: Process): void;
declare class FormDialog {
    constructor(process: Process);
    private process_;
    private _fields;
    title: string;
    addField(name: string, type: string, size?: number): FormDialogField;
    field(name: any): FormDialogField;
    show(): boolean;
    private _nameToId;
    private _getProperties;
    private getUserProfileName_;
}
declare namespace FormDialog {
    export { Process };
}
type Process = import('../process/Process');
import FormDialogField = require('./FormDialogField.js');
