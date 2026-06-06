export = DBTrackerPool;
declare function DBTrackerPool(opt_options: {
    id?: number;
    size?: number;
    database?: Database;
    trackerProperties?: any;
}): void;
declare class DBTrackerPool {
    constructor(opt_options: {
        id?: number;
        size?: number;
        database?: Database;
        trackerProperties?: any;
    });
    private database_;
    id: number;
    private generateTrackers_;
    private getAvailableTrackers_;
    private getDBTracker_;
    acquire(): any;
    tryAcquire(): DBTracker;
    release(tracker: DBTracker): void;
}
declare namespace DBTrackerPool {
    export { Database };
}
import DBTracker = require('./DBTracker.js');
type Database = import('./Database');
