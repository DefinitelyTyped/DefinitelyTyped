export = ProcessManager;
declare function ProcessManager(): void;
declare class ProcessManager {
    private errorHandler_;
    private controller_;
    iVfs: DataSet;
    iClass: DataSet;
    publishedFileIds: {};
    processesById_: Record<string, Process>;
    onBeforeRun: Adapter;
    onAfterRun: Adapter;
    private ctrlChannel_;
    private environment_;
    private openViews_;
    ctrlSessionId: any;
    private lastUse_;
    private currentProcess_;
    private lastExpiredExportedFilesPurge_;
    private inactivityTimeout_;
    private inactiveSessionHandling_;
    private lockedScreenTimeout_;
    private debugSessionTimeouts_;
    private logOutDueToInactivity_;
    private logger_;
    private textEncoder_;
    private loadSessionSettings_;
    private processEventQueue_;
    private handleStartup_;
    private handleUpdatePassword_;
    private handlePing_;
    private isScreenLocked;
    private setEvaluateCode;
    private isEAbort;
    private errorTreatment;
    private getDefaultProcessKeyOfClass;
    private handleIncomingMessages_;
    private handleRequest;
    private handleSync_;
    private getParameterFromRequestObject;
    private createProcess;
    getProcessById(id: string): Process;
    findProcess(id: string): Process;
    private getEntityShortcuts;
    private runProcess;
    private updateTabInfo_;
    private getTabIcon;
    private handleRunActivity_;
    private processWillGo;
    private runActivity_;
    closeProcess(id: number): void;
    private emitBeforeExitEvent_;
    private handleCloseView_;
    private handleRefreshView_;
    private handleRunInteraction_;
    private handleGetFile_;
    private getFileContent;
    private getFileId;
    private purgeExpiredExportedFiles_;
    private getClientAddress_;
    notifyUsage(lastUse?: number): void;
    verifySessionTimeouts(): SessionTimeoutsInfo;
    getCurrentProcess(): Process;
}
declare namespace ProcessManager {
    export {
        CloseViewRequest,
        CloseViewResponse,
        Controller,
        DataSet,
        DiscardProcessResponse,
        Event,
        getInstance,
        parseLayoutLinkContent,
        PingRequest,
        RefreshViewRequest,
        RefreshViewResponse,
        restrictAllowedProcesses,
        RunActivityRequest,
        RunActivityResponse,
        SessionTimeoutsInfo,
        StartupResponse,
        SyncCommand,
        SyncCommandWithError,
        SyncRequest,
        SyncResponse,
        TabInfo,
        UpdatePasswordRequest,
    };
}
import Process = require("./Process.js");
import Adapter = require("@nginstack/engine/lib/event/Adapter.js");
declare function getInstance(): ProcessManager;
declare const restrictAllowedProcesses: any;
declare function parseLayoutLinkContent(content: any): DBKey;
type Event = import("@nginstack/engine/lib/event/Event");
type DataSet = import("@nginstack/engine/lib/dataset/DataSet");
type Controller = import("../messaging/Controller");
interface TabInfo {
    processIds: string[];
    currentProcessId: string;
}
interface SyncCommandWithError {
    sync: SyncCommand[];
    error: Error | null;
}
interface SyncCommand {
    target: string;
    id?: string | number;
    data?: any;
}
interface SyncRequest {
    sequence: number;
    messages: Array<{
        targetId: string;
        message: any;
    }>;
    timestamp: number;
    lastUse: number;
    data: SyncCommand[];
}
interface SyncResponse {
    action: string;
    data: any;
}
interface RunActivityRequest {
    activityName: string;
    parameters?: any[];
    processKey?: number;
    processId?: string;
    icon?: string;
    canDoHistory?: boolean;
    lastShownProcessId?: string;
    validateLastActivity?: boolean;
}
interface RunActivityResponse {
    id: string;
    menuPath: string;
    icon?: string;
    processKey?: number;
    priorId?: string;
}
interface RefreshViewRequest {
    viewId: string;
}
interface RefreshViewResponse {
    currentId: string;
    id: string;
}
interface CloseViewRequest {
    viewId: string;
}
interface CloseViewResponse {
    processId: number;
}
interface DiscardProcessResponse {
    processId: string;
}
interface UpdatePasswordRequest {
    password: string;
}
interface StartupResponse {
    exiting: boolean;
    alert?: string;
    homeProcess?: {
        key: string;
        interactionName: string;
        serializedParameters: any[];
    };
}
interface PingRequest {
    processId?: string;
}
interface SessionTimeoutsInfo {
    inactivity: number;
    lockedScreen: number;
}
import DBKey = require("@nginstack/engine/lib/dbkey/DBKey.js");
