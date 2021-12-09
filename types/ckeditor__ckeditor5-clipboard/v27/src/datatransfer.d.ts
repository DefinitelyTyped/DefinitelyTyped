export default class CKDataTransfer {
    constructor(datatransfer: DataTransfer);
    readonly files: File[];
    readonly types: DataTransfer['types'];
    getData(): ReturnType<DataTransfer['getData']>;
    setData(...args: Parameters<DataTransfer['setData']>): void;
    effectAllowed: DataTransfer['effectAllowed'];
    dropEffect: DataTransfer['dropEffect'];
    readonly isCancelled: boolean;
}
