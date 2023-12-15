/// <reference types="node" />

import EventEmitter = require("events");

export interface Settings {
    targetAmsNetId: string;
    targetAdsPort: number;
    objectifyEnumerations?: boolean;
    convertDatesToJavascript?: boolean;
    readAndCacheSymbols?: boolean;
    readAndCacheDataTypes?: boolean;
    disableSymbolVersionMonitoring?: boolean;
    routerTcpPort?: number;
    routerAddress?: string;
    localAddress?: string;
    localTcpPort?: number;
    localAmsNetId?: string;
    localAdsPort?: number;
    timeoutDelay?: number;
    hideConsoleWarnings?: boolean;
    autoReconnect?: boolean;
    reconnectInterval?: number;
    checkStateInterval?: number;
    connectionDownDelay?: number;
    allowHalfOpen?: boolean;
    disableBigInt?: boolean;
    bareClient?: boolean;
}

export interface Metadata {
    deviceInfo: object;
    systemManagerState: object;
    plcRuntimeState: PLCRuntimeState;
    uploadInfo: object;
    symbolVersion: number;
    allSymbolsCached: boolean;
    symbols: object;
    allDataTypesCached: boolean;
    dataTypes: object;
    routerState: object;
}

export type ADSStateStr =
    | "Invalid"
    | "Idle"
    | "Reset"
    | "Initialize"
    | "Start"
    | "Run"
    | "Stop"
    | "SaveConfig"
    | "LoadConfig"
    | "PowerFailure"
    | "PowerGood"
    | "Error"
    | "Shutdown"
    | "Susped" // Upstream typo
    | "Resume"
    | "Config"
    | "Reconfig"
    | "Stopping"
    | "Incompatible"
    | "Exception"
    | "UNKNOWN";

export interface PLCRuntimeState {
    adsState: number;
    adsStateStr: ADSStateStr;
    deviceState: number;
}

export interface Connection {
    connected: boolean;
    isLocal: boolean;
    localAmsNetId: string;
    localAdsPort: number;
    targetAmsNetId: string;
    targetAdsPort: number;
}

export interface PLCEnum {
    name: string;
    value: number;
}

export type PLCValue = boolean | number | string | [] | object | PLCEnum | Date;

export interface SymbolData {
    symbol: object;
    value: PLCValue;
    type: Datatype;
}

export interface Datatype {
    version: number;
    hashValue: number;
    typeHashValue: number;
    size: number;
    offset: number;
    adsDataType: number;
    adsDataTypeStr: string;
    flags: number[];
    flagsStr: string[];
    nameLength: string;
    typeLength: number;
    commentLength: number;
    arrayDimension: number;
    subItemCount: number;
    name: string;
    type: string;
    comment: string;
    arrayData: unknown[];
    subItems: unknown[];
    attributes: unknown[];
    rpcMethods: unknown[];
}

export interface Subscription {
    target: string;
    settings: SubscriptionSettings;
    callback: (callback: SubscriptionCallbackData, subscription: Subscription) => void;
    symbolInfo: object;
    notificationHandle: number;
    lastValue: PLCValue;
    internal: boolean;

    unsubscribe(): Promise<void>;

    dataParser(value: unknown): Promise<SymbolData>;
}

export interface SubscriptionSettings {
    transmissionMode: number;
    maximumDelay: number;
    cycleTime: number;
    targetAdsPort?: number;
    internal: boolean;
}

export interface SubscriptionCallbackData {
    value: PLCValue;
    timeStamp: Date;
    type: Datatype;
}

export interface IndexGroupAndOffset {
    indexGroup: number;
    indexOffset: number;
}

export interface ReadRawMultiParam {
    indexGroup: number;
    indexOffset: number;
    size: number;
}

export interface MultiErrorInfo {
    error: boolean;
    errorCode: number;
    errorStr: string;
}

export interface ReadRawMultiResult {
    success: boolean;
    errorInfo: MultiErrorInfo;
    target: IndexGroupAndOffset;
    data: Buffer;
}

export interface WriteRawMultiParam {
    indexGroup: number;
    indexOffset: number;
    data: Buffer;
}

export interface WriteRawMultiResult {
    success: boolean;
    errorInfo: MultiErrorInfo;
    target: IndexGroupAndOffset;
}

export interface CreateVariableHandleResult {
    handle: number;
    size: number;
    type: string;
}

export type VariableHandleParam = number | CreateVariableHandleResult | CreateVariableHandleMultiResult;

export interface CreateVariableHandleMultiResult {
    success: boolean;
    errorInfo: MultiErrorInfo;
    target: string;
    handle: number;
}

export interface DeleteVariableHandleMultiResult {
    success: boolean;
    errorInfo: MultiErrorInfo;
    handle: number;
}

export interface RpcMethodResult {
    returnValue: PLCValue;
    outputs: object;
}

export interface SymbolInfo {
    indexGroup: number;
    indexOffset: number;
    size: number;
    adsDataType: number;
    adsDataTypeStr: string;
    flags: number;
    flagsStr: string;
    arrayDimension: number;
    nameLength: number;
    typeLength: number;
    commentLength: number;
    name: string;
    type: string;
    comment: string;
    arrayData: Array<{ startIndex: number; length: number }>;
    typeGuid: string;
    attributes: Array<{ name: string; value: string }>;
    attributeCount: number;
}

export class Client extends EventEmitter {
    static defaultSettings(): Settings;

    constructor(settings: Settings);

    settings: Settings;
    readonly metaData: Metadata;
    readonly connection: Connection;

    setDebugging(level: number): void;

    connect(): Promise<any>;

    disconnect(forceDisconnect?: boolean): Promise<any>;

    reconnect(forceDisconnect?: boolean): Promise<any>;

    readDeviceInfo(): Promise<object>;

    readSystemManagerState(): Promise<object>;

    readPlcRuntimeState(adsPort?: number): Promise<PLCRuntimeState>;

    readSymbolVersion(): Promise<number>;

    readUploadInfo(): Promise<object>;

    readAndCacheSymbols(): Promise<object>;

    readAndCacheDataTypes(): Promise<object>;

    getDataType(dataTypeName: string): Promise<Datatype>;

    getSymbolInfo(variableName: string): Promise<SymbolInfo>;

    readSymbol(variableName: string): Promise<SymbolData>;

    writeSymbol(variableName: string, value: PLCValue, autoFill?: boolean): Promise<SymbolData>;

    subscribe(
        variableName: string,
        callback: (data: SubscriptionCallbackData, sub: Subscription) => any,
        cycleTime?: number,
        onChange?: boolean,
        initialDelay?: number,
    ): Promise<Subscription>;

    subscribeRaw(
        indexGroup: number,
        indexOffset: number,
        size: number,
        callback: (data: SubscriptionCallbackData, sub: object) => any,
        cycleTime?: number,
        onChange?: boolean,
        initialDelay?: number,
    ): Promise<object>;

    unsubscribe(notificationHandle: number): Promise<object>;

    unsubscribeAll(): Promise<object>;

    readRawByHandle(handle: VariableHandleParam, size?: number): Promise<Buffer>;

    readRawByName(variableName: string): Promise<Buffer>;

    readRawBySymbol(symbol: object): Promise<Buffer>;

    readRaw(indexGroup: number, indexOffset: number, size: number, targetAdsPort?: number): Promise<Buffer>;

    readRawMulti(targetArray: ReadRawMultiParam[], targetAdsPort?: number): Promise<ReadRawMultiResult[]>;

    readWriteRaw(
        indexGroup: number,
        indexOffset: number,
        readLength: number,
        dataBuffer: Buffer,
        targetAdsPort?: number,
    ): Promise<Buffer>;

    writeRawByHandle(handle: VariableHandleParam, dataBuffer: Buffer): Promise<object>;

    writeRawBySymbol(symbol: object, dataBuffer: Buffer): Promise<object>;

    writeRaw(indexGroup: number, indexOffset: number, dataBuffer: Buffer, targetAdsPort?: number): Promise<object>;

    writeRawMulti(targetArray: WriteRawMultiParam[], targetAdsPort?: number): Promise<WriteRawMultiResult[]>;

    createVariableHandle(variableName: string): Promise<CreateVariableHandleResult>;

    createVariableHandleMulti(targetArray: string[]): Promise<CreateVariableHandleMultiResult[]>;

    deleteVariableHandle(handle: VariableHandleParam): Promise<object>;

    deleteVariableHandleMulti(
        handleArray: CreateVariableHandleMultiResult[],
    ): Promise<DeleteVariableHandleMultiResult[]>;

    convertFromRaw(rawData: Buffer, dataTypeName: string): Promise<object>;

    convertToRaw(value: PLCValue, dataTypeName: string, autoFill?: boolean): Promise<Buffer>;

    getEmptyPlcType(dataTypeName: string): Promise<object>;

    writeControl(adsPort: number, adsState: number, deviceState?: number, data?: Buffer): Promise<object>;

    startPlc(adsPort?: number): Promise<object>;

    stopPlc(adsPort?: number): Promise<object>;

    restartPlc(adsPort?: number): Promise<object>;

    setSystemManagerToRun(): Promise<object>;

    setSystemManagerToConfig(): Promise<object>;

    restartSystemManager(): Promise<object>;

    invokeRpcMethod(variableName: string, methodName: string, parameters?: object): Promise<RpcMethodResult>;

    sendAdsCommand(
        adsCommand: number,
        adsData: Buffer,
        targetAdsPort?: number,
        targetAmsNetId?: string,
    ): Promise<object>;

    byteArrayToAmsNetIdStr(byteArray: Buffer | any[]): string;

    amsNetIdStrToByteArray(str: any): any[];
}
