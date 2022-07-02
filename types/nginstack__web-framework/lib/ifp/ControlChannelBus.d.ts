export = ControlChannelBus;
declare function ControlChannelBus(): void;
declare class ControlChannelBus {
    private _sharedData;
    private _loadSharedData;
    openChannel(sid: string): string;
    writeMap(cid: string, data: any, msgCondition?: string): void;
    readMap(cid: string, fieldNames: any[]): any;
    read(cid: string, fieldName: string): any;
}
declare namespace ControlChannelBus {
    function getInstance(): ControlChannelBus;
}
