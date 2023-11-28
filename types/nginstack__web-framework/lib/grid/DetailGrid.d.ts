export = DetailGrid;
declare function DetailGrid(parent: any, name: any, master: any): void;
declare class DetailGrid {
    constructor(parent: any, name: any, master: any);
    master: any;
    private adaptEvent_;
    private _masterScrollRequiresDataSet;
    private lastMasterBookmarkSynchronized;
    maxRecordCount: any;
    masterDeleteAction: number;
    onCreateDataSet: any;
    onMasterInsert: any;
    onMasterScroll: any;
    onMasterPost: any;
    onMasterCancel: any;
    onMasterDelete: any;
    private prepare;
    protected sync_(...args: any[]): void;
    config(): void;
    title: any;
    readOnly: boolean;
    classKey: any;
    defaultMasterDetailCreateDataSet(sender: any): any;
    defaultMasterDetailBeforeInsert(sender: any): void;
    defaultMasterDetailAfterInsert(sender: any): void;
    defaultMasterDetailScroll(detailGrid: any): void;
    defaultMasterDetailDelete(sender: any): void;
    private _tryCreateDataSet;
    ds: any;
    notifyCreateDataSet(): void;
    notifyMasterInsert(): void;
    notifyMasterPost(): void;
    notifyMasterCancel(): void;
    notifyMasterDelete(): void;
    private notifyingMasterScroll_;
    notifyMasterScroll(): void;
    fDs: any;
    insert(): void;
    del(handleDetailGrid: any): void;
    delete: any;
    edit(field: any): void;
    autoMasterPost: boolean;
    post(autoMasterPost: any, ...args: any[]): void;
    private toString;
}
declare namespace DetailGrid {
    export { Event };
}
type Event = any;
