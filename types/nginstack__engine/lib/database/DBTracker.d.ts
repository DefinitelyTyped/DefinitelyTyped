export = DBTracker;
declare function DBTracker(opt_options?: { id?: string; database?: any; poolId?: number }): void;
declare class DBTracker {
    constructor(opt_options?: { id?: string; database?: any; poolId?: number });
    private database_;
    private id_;
    poolId: number;
    private event_;
    private logger_;
    private poolId_;
    autoUndo: boolean;
    id: string;
    private getDBDate_;
    private searchEvent_;
    maxActiveTime: number;
    active: boolean;
    start(): void;
    finish(): void;
    undoChanges(): number;
}
declare namespace DBTracker {
    function finishAbandoned(opt_database?: any): number;
    function isCapable(opt_database?: any): boolean;
}
