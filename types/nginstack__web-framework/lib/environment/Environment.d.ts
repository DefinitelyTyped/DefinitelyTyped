export = Environment;
declare function Environment(): void;
declare class Environment {
    private _ctrlChannel;
    sessionToken: string;
    exiting: boolean;
    alert(message: string): any;
    prompt(
        label: string,
        options: any[],
        verticalAlign?: boolean,
        defaultOptionIndex?: number,
        escapeIndex?: number,
    ): any;
    confirm(msg: string, negativeDefaultAnswer?: boolean): boolean;
    exit(uri?: string): void;
    lockScreen(): boolean;
}
declare namespace Environment {
    function getInstance(): Environment;
}
