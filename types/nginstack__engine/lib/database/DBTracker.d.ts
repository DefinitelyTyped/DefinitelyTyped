export = DBTracker;
declare function DBTracker(opt_options?: { id?: string; database?: any; poolId?: number }): void;
declare class DBTracker {
    constructor(opt_options?: { id?: string; database?: any; poolId?: number });
    database_: any;
    id_: string;
    poolId: number;
    event_: any;
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
    function getDBDate_(db: any): Date;
    function finishAbandoned(opt_database?: any): number;
    function isCapable(opt_database?: any): boolean;
}
