export = DBTracker;
declare function DBTracker(opt_options?: {
    id?: string;
    database?: Database;
    poolId?: number;
}): void;
declare class DBTracker {
    constructor(opt_options?: { id?: string; database?: Database; poolId?: number });
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
    export { finishAbandoned, Database };
}
type Database = import('./Database');
declare function finishAbandoned(opt_database?: Database): number;
