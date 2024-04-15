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
    let SHOW: string;
    let HIDE: string;
    let MAXIMIZE: string;
    let MINIMIZE: string;
    let INFINITE_TIMEOUT: number;
    function startDetached(command: string, parameters: string, workingDirectory: string): number;
}
