export = ProcessManager;
declare function ProcessManager(): void;
declare class ProcessManager {
    private errorHandler_;
    private controller_;
    iVfs: DataSet;
    iClass: DataSet;
    publishedFileIds: {};
    processesById_: Record<string, Process>;
    onBeforeRun: import("@nginstack/engine/lib/event/Event");
    onAfterRun: import("@nginstack/engine/lib/event/Event");
    ctrlChannel: ControlChannel;
    private environment_;
    private openedTabs_;
    ctrlSessionId: any;
    private lastUse_;
    private currentProcess_;
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
    private isEAbort;
    private errorTreatment;
    private getDefaultProcessKeyOfClass;
    private handleIncomingMessages_;
    private handleRequest;
    private handleIfp;
    private getParameterFromRequestObject;
    private createProcess;
    getProcessById(id: string): Process;
    findProcess(id: string): Process;
    private getEntityShortcuts;
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
    private handleExecuteLink;
    private handleExecuteButton;
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
    export { Controller, DataSet, Event, getInstance, parseLayoutLinkContent, SessionTimeoutsInfo, TabInfo };
}
import Process = require("./Process.js");
import ControlChannel = require("../ifp/ControlChannel.js");
declare function getInstance(): ProcessManager;
declare function parseLayoutLinkContent(content: any): DBKey;
type Event = import("@nginstack/engine/lib/event/Event");
type DataSet = import("@nginstack/engine/lib/dataset/DataSet");
type Controller = import("../messaging/Controller");
interface TabInfo {
    processIds: string[];
    currentProcessId: string;
}
interface SessionTimeoutsInfo {
    inactivity: number;
    lockedScreen: number;
}
import DBKey = require("@nginstack/engine/lib/dbkey/DBKey.js");
