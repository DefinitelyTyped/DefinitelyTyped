export = DBTrackerPool;
declare function DBTrackerPool(opt_options: {
    id?: number;
    size?: number;
    database?: any;
    trackerProperties?: any;
}): void;
declare class DBTrackerPool {
    constructor(opt_options: {
        id?: number;
        size?: number;
        database?: any;
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
import DBTracker = require('./DBTracker.js');
