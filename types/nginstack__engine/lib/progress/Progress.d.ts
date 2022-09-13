export = Progress;
declare function Progress(opt_logger?: any): void;
declare class Progress {
    constructor(opt_logger?: any);
    beginTask(name: string, opt_totalWork?: number): void;
    worked(opt_qty?: number): void;
    done(): void;
    forkSubTask(workQty: number): void;
}
