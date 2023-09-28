export = OSApplication;
declare function OSApplication(command: string): void;
declare class OSApplication {
    constructor(command: string);
    workingDirectory: any;
    getPid(): number;
    getIsRunning(): boolean;
    getExitCode(): number;
    getLastErrorCode(): number;
    start(parameters: string, commandShow: string): boolean;
    startDetached(parameters: any, commandShow: any): void;
    redirectStdInput(inputFileName: string): void;
    redirectStdOutput(outputFileName: string): void;
    redirectStdErrorOutput(outputErrorFileName: string): void;
    terminate(opt_timeout?: number): boolean;
    waitFor(opt_timeout?: number): boolean;
}
declare namespace OSApplication {
    const SHOW: string;
    const HIDE: string;
    const MAXIMIZE: string;
    const MINIMIZE: string;
    const INFINITE_TIMEOUT: any;
    function startDetached(command: string, parameters: string, workingDirectory: string): number;
}
