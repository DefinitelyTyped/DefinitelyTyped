export = EngineMonitor;
declare function EngineMonitor(): void;
declare class EngineMonitor {
    private acceptedSeverityLevels_;
    private shouldEmitAlert_;
    private emitEngineAlerts_;
    private _getHigherAppServerVersion;
    listOnlineEngines(): EngineInfo[];
    getAllAlerts(): EngineAlert[];
}
declare namespace EngineMonitor {
    export { EngineAlert };
}
import EngineInfo = require('./EngineInfo.js');
type EngineAlert = import('./EngineInfo.js').EngineAlert;
