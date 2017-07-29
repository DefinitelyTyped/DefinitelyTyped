
export interface Array<T> {
    bulkPost(): Q.Promise<any>;
    bulkPut(): Q.Promise<any>;
    bulkPatch(): Q.Promise<any>;
    bulkDel(): Q.Promise<any>;
}
