export = ProcessHelpFormatter;
declare function ProcessHelpFormatter(process: Process): void;
declare class ProcessHelpFormatter {
    constructor(process: Process);
    private process_;
    private formatConfigurePermissionsAnchor_;
    private getCurrentInteractionProcessHelp_;
    formatProcessHelp(): string;
    formatGridHelp(gridName: string): string;
    formatFieldHelp(gridName: string, fieldName: string): string;
}
declare namespace ProcessHelpFormatter {
    export { Process };
}
type Process = import('./Process');
