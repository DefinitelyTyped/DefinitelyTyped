export = ControlChannel;
declare function ControlChannel(sid: string): void;
declare class ControlChannel {
    constructor(sid: string);
    sid: string;
    private _bus;
    private _cid;
    touch(): void;
    private _throwError;
    getSyncStatus(): number;
    setSyncStatus(syncStatus: number, message?: string): void;
    setDataChannelSequence(seq: number): void;
    getDataChannelSequence(): number;
    lockSessionByNavigator(): string;
    unlockSessionByNavigator(userName: string, password: string, newPassword?: string): string;
    getSessionLocked(): boolean;
    getLastMessage(): any;
    updateMessage(message: any): void;
    setCtrlMessage(message: any): void;
    setStatusMessage(message: any, lastProcessPercent: any): void;
    abortRunningSequence(): void;
    finishRunningSequence(): void;
    ctrlChannelTimeout: number;
    ctrlChannelIsInactive(): boolean;
    private _waitForCondition;
    waitForState(expectedState: number, timeout: number): boolean;
    waitForOtherState(unexpectedState: number, timeout: number): boolean;
    setFinalMessageWithAcknowledgment(msg: any): void;
    setEvaluateCode(code: any): any;
    private _serializeTaskProgressStackUpdate;
    getMessageForNavigator(
        sequenceToListen: any,
        retry: any,
        disableContinueOptimization: any
    ): any;
    handleNavigatorResponse(ctrlMessage: any): 'ctrl:continue' | 'ctrl:stop:-1' | 'ctrl:setok';
}
declare namespace ControlChannel {
    function formatErrorPayload(
        error: any,
        info: {
            stackTrace?: string | string[];
            ticket?: string;
        }
    ): string;
    function getInstance(): ControlChannel;
}
