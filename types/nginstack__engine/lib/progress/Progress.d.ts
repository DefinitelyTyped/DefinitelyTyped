export = Progress;
declare function Progress(opt_logger?: Logger): void;
declare class Progress {
    constructor(opt_logger?: Logger);
    beginTask(name: string, opt_totalWork?: number): void;
    worked(opt_qty?: number): void;
    done(): void;
    forkSubTask(workQty: number): void;
}
declare namespace Progress {
    export { Logger };
}
type Logger = import('../log/Logger');
