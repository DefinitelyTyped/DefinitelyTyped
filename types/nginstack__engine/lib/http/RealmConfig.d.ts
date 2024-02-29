export = RealmConfig;
declare function RealmConfig(): void;
declare class RealmConfig {
    environmentType: string;
    runtime: string;
    cleanupEnvironment: boolean;
    maxLifeTime: number;
    maxInactiveTime: number;
    httpCompressionEnabled: boolean;
    clientTrackingEnabled: boolean;
    sessionTrackingEnabled: boolean;
    application: DBKey | number;
}
declare namespace RealmConfig {
    function fromKey(directory: number): RealmConfig;
    function fromName(name: string): RealmConfig;
}
import DBKey = require('../dbkey/DBKey.js');
