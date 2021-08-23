export = FormDialog;
declare function FormDialog(process: any): void;
declare class FormDialog {
    constructor(process: any);
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
import FormDialogField = require('./FormDialogField.js');
