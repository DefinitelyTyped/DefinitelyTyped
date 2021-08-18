export = ControlChannelBus;
declare function ControlChannelBus(): void;
declare class ControlChannelBus {
    _sharedData: DataSet;
    private _loadSharedData;
    openChannel(sid: string): string;
    writeMap(cid: string, data: any, msgCondition?: string): void;
    readMap(cid: string, fieldNames: any[]): any;
    read(cid: string, fieldName: string): any;
}
declare namespace ControlChannelBus {
    const _globalInstance: ControlChannelBus;
    function getInstance(): ControlChannelBus;
}
import DataSet = require('@nginstack/engine/lib/dataset/DataSet.js');
