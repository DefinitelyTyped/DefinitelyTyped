export = Environment;
declare function Environment(): void;
declare class Environment {
    private ctrlChannel_;
    sessionToken: string;
    exiting: boolean;
    prompt(
        label: string,
        answers: any[][],
        options: import("../process/Process.js").PromptOptions,
    ): any;
    confirm(message: string, noAsDefault?: boolean): boolean;
    alert(message: string): void;
    exit(uri?: string): void;
    lockScreen(): boolean;
    restrictSystemAccess: any;
}
declare namespace Environment {
    function getInstance(): Environment;
}
