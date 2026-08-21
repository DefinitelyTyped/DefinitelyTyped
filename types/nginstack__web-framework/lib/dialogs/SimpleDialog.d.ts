export = SimpleDialog;
declare function SimpleDialog(): void;
declare class SimpleDialog {
    message: string;
    title: string;
    autoSanitize: boolean;
    show(): void;
}
