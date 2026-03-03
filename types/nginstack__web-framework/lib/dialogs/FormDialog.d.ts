export = FormDialog;
declare function FormDialog(process: Process): void;
declare class FormDialog {
    constructor(process: Process);
    private process_;
    private fields_;
    private reservedWords_;
    autoSanitize: boolean;
    title: string;
    content: string;
    width: number | null;
    private checkWordAvailability_;
    addField(name: string, type: string, size?: number): FormDialogField;
    field(name: any): FormDialogField;
    show(): boolean;
    private getDefinition_;
    private nameToId_;
    private getProperties_;
    private getUserProfileName_;
}
declare namespace FormDialog {
    export { Process };
}
import FormDialogField = require("./FormDialogField.js");
type Process = import("../process/Process");
