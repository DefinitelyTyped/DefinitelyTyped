/// <reference lib="dom" />

interface Window {
    NDEFMessage: NDEFMessage;
}
declare class NDEFMessage {
    constructor(messageInit: NDEFMessageInit);
    records: ReadonlyArray<NDEFRecord>;
}
interface NDEFMessageInit {
    records: NDEFRecordInit[];
}

type NDEFRecordDataSource = string | BufferSource | NDEFMessageInit;

interface Window {
    NDEFRecord: NDEFRecord;
}
declare class NDEFRecord {
    constructor(recordInit: NDEFRecordInit);
    readonly recordType: string;
    readonly mediaType?: string;
    readonly id?: string;
    readonly data?: DataView;
    readonly encoding?: string;
    readonly lang?: string;
    toRecords?: () => NDEFRecord[];
}
interface NDEFRecordInit {
    recordType: string;
    mediaType?: string;
    id?: string;
    encoding?: string;
    lang?: string;
    data?: NDEFRecordDataSource;
}

type NDEFMessageSource = string | BufferSource | NDEFMessageInit;

interface Window {
    NDEFReader: NDEFReader;
}
declare class NDEFReader extends EventTarget {
    constructor();
    onreading: (this: this, event: NDEFReadingEvent) => any;
    onreadingerror: (this: this, error: Event) => any;
    scan: (options?: NDEFScanOptions) => Promise<void>;
    write: (
        message: NDEFMessageSource,
        options?: NDEFWriteOptions,
    ) => Promise<void>;
    makeReadOnly: (options?: NDEFMakeReadOnlyOptions) => Promise<void>;
}

interface Window {
    NDEFReadingEvent: NDEFReadingEvent;
}
declare class NDEFReadingEvent extends Event {
    constructor(type: string, readingEventInitDict: NDEFReadingEventInit);
    serialNumber: string;
    message: NDEFMessage;
}
interface NDEFReadingEventInit extends EventInit {
    serialNumber?: string;
    message: NDEFMessageInit;
}

interface NDEFWriteOptions {
    overwrite?: boolean;
    signal?: AbortSignal;
}
interface NDEFMakeReadOnlyOptions {
    signal?: AbortSignal;
}
interface NDEFScanOptions {
    signal: AbortSignal;
}
