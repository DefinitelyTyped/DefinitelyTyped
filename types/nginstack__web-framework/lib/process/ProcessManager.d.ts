export = ProcessManager;
declare function ProcessManager(): void;
declare class ProcessManager {
    private errorHandler_;
    private controller_;
    iVfs: any;
    iClass: any;
    publishedFileIds: {};
    processList: {};
    onBeforeRun: any;
    onAfterRun: any;
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
    private handleExecuteAnchor;
    private handleHistoryNavigation;
    private handleRefreshTabCall;
    private handleRunInteractionRequest;
    private handleGetFileRequest;
    private getFileContent;
    private getFileId;
    private purgeExpiredExportedFiles_;
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
import ControlChannel = require('../ifp/ControlChannel.js');
import Process = require('./Process.js');
declare function getInstance(): ProcessManager;
declare function parseLayoutLinkContent(content: any): any;
type Event = any;
type DataSet = any;
type Controller = import('../messaging/Controller');
interface TabInfo {
    processIds: string[];
    currentProcessId: string;
}
interface SessionTimeoutsInfo {
    inactivity: number;
    lockedScreen: number;
}
