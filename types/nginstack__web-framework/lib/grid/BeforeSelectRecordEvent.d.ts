export = BeforeSelectRecordEvent;
declare function BeforeSelectRecordEvent(...args: any[]): void;
declare class BeforeSelectRecordEvent {
    constructor(...args: any[]);
    bookmarks: string[];
    private selectedRecords_;
}
