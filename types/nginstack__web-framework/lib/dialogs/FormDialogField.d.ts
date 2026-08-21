export = FormDialogField;
declare function FormDialogField(name: any, type: any, size: any, ...args: any[]): void;
declare class FormDialogField {
    constructor(name: any, type: any, size: any, ...args: any[]);
    private registerEvents_;
    saveValuesToCache(entry: Entry): void;
    assignListeners(): void;
    on(): never;
    private write;
}
declare namespace FormDialogField {
    export { Entry };
}
interface Entry {
    processKey: number;
    interactionName: string;
    gridName: string;
    fieldName: string;
    fieldType: string;
}
