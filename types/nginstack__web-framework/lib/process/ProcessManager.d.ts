export = ProcessManager;
declare function ProcessManager(): void;
declare class ProcessManager {
    private errorHandler_;
    private controller_;
    navTree: {};
    iVfs: DataSet;
    iClass: DataSet;
    publishedFileIds: {};
    processList: {};
    onBeforeRun: Event;
    onAfterRun: Event;
    ctrlChannel: ControlChannel;
    private environment_;
    private openedTabs_;
    ctrlSessionId: any;
    private lastUse_;
    private currentProcess_;
    pendingTaskCounter: any;
    private lastExpiredExportedFilesPurge_;
    private inactivityTimeout_;
    private inactiveSessionHandling_;
    private lockedScreenTimeout_;
    private debugSessionTimeouts_;
    private logOutDueToInactivity_;
    private interface_count;
    private logger_;
    private loadSessionSettings_;
    private processEventQueue_;
    private handleStartup;
    private handleUpdatePassword_;
    private handleHit;
    private isScreenLocked;
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
    private handleRunInteractionRequest;
    private handleGetFileRequest;
    private getFileContent;
    private getFileId;
    private purgeExpiredExportedFiles_;
    private handleLoadNavTreeNodes_;
    private getClientAddress_;
    notifyUsage(lastUse?: number): void;
    verifySessionTimeouts(): SessionTimeoutsInfo;
    private callHandlers;
    private requestHandlers;
    getCurrentProcess(): Process;
}
declare namespace ProcessManager {
    export {
        getInstance,
        parseLayoutLinkContent,
        Event,
        DataSet,
        Controller,
        TabInfo,
        SessionTimeoutsInfo,
    };
}
type DataSet = import('@nginstack/engine/lib/dataset/DataSet');
type Event = import('@nginstack/engine/lib/event/Event');
import ControlChannel = require('../ifp/ControlChannel.js');
import Process = require('./Process.js');
interface SessionTimeoutsInfo {
    inactivity: number;
    lockedScreen: number;
}
declare function getInstance(): ProcessManager;
declare function parseLayoutLinkContent(content: any): DBKey;
type Controller = import('../messaging/Controller');
interface TabInfo {
    processIds: string[];
    currentProcessId: string;
}
import DBKey = require('@nginstack/engine/lib/dbkey/DBKey.js');
