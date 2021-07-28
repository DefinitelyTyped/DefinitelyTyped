export = FormDialog;
declare function FormDialog(process: any): void;
declare class FormDialog {
    constructor(process: any);
    process_: any;
    _fields: any[];
    title: string;
    addField(name: string, type: string, size?: number): FormDialogField;
    field(name: any): FormDialogField;
    show(): boolean;
    _nameToId(name: any): string;
    _getProperties(): string;
    private getUserProfileName_;
}
import FormDialogField = require('./FormDialogField.js');
