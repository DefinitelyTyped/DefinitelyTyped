export = ProcessManager;
declare function ProcessManager(): void;
declare class ProcessManager {
    errorHandler_: any;
    controller_: any;
    navTree: {};
    iVfs: DataSet;
    iClass: DataSet;
    publishedFileIds: {};
    processList: {};
    onBeforeRun: Event;
    onAfterRun: Event;
    ctrlChannel: ControlChannel;
    _environment: Environment;
    openedTabs_: Record<string, TabInfo>;
    ctrlSessionId: any;
    private currentProcess_;
    pendingTaskCounter: any;
    private lastExpiredExportedFilesPurge_;
    private interface_count;
    private logger_;
    private processEventQueue_;
    private handleStartup;
    handleUpdatePassword_(newPassword: string): void;
    private handleHit;
    private getSessionLocked;
    private setEvaluateCode;
    private _justToGroupEvaluator;
    private isENativeError;
    private isEAbort;
    private errorTreatment;
    private getDefaultProcessKeyOfClass;
    private handleIncomingMessages_;
    private handleRequest;
    private handleIfp;
    private getParameterFromRequestObject;
    private createProcess;
    getProcessById(id: string): Process;
    private getEntityShortcuts;
    private getShortcutsScript;
    private runProcess;
    private updateTabInfo_;
    private getTabIcon;
    private handleRunActivityCall;
    private processWillGo;
    private runActivity;
    closeProcess(id: number): void;
    private emitBeforeExitEvent_;
    private handleCloseTabCall;
    private finalize;
    private handleUpdateTaskCounter;
    private handleGetNavtreeChildren;
    private handleExecuteAnchor;
    private handleRefreshTabCall;
    private handleSetControlSessionIdCall;
    private handleRunInteractionRequest;
    private handleGetFileRequest;
    private getFileContent;
    private getFileId;
    private purgeExpiredExportedFiles_;
    private handleLoadNavTreeNodes_;
    private callHandlers;
    private requestHandlers;
    getCurrentProcess(): Process;
}
declare namespace ProcessManager {
    export {
        runStartupScripts_,
        instance_,
        getInstance,
        parseLayoutLinkContent,
        Event,
        DataSet,
        TabInfo,
    };
}
type DataSet = import('@nginstack/engine/lib/dataset/DataSet');
type Event = import('@nginstack/engine/lib/event/Event');
import ControlChannel = require('../ifp/ControlChannel.js');
import Environment = require('../environment/Environment.js');
interface TabInfo {
    processIds: string[];
    currentProcessId: string;
}
import Process = require('./Process.js');
declare function runStartupScripts_(env: Environment): void;
declare var instance_: any;
declare function getInstance(): ProcessManager;
declare function parseLayoutLinkContent(content: any): DBKey;
import DBKey = require('@nginstack/engine/lib/dbkey/DBKey.js');
