export = Environment;
declare function Environment(): void;
declare class Environment {
    private _ctrlChannel;
    sessionToken: string;
    exiting: boolean;
    private prompt;
    confirm(msg: string, noAsDefault?: boolean): boolean;
    exit(uri?: string): void;
    lockScreen(): boolean;
}
declare namespace Environment {
    function getInstance(): Environment;
}
