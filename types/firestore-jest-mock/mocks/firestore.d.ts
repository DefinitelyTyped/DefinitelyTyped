/// <reference types="jest" />
export const mockCollection: jest.Mock;
export const mockCollectionGroup: jest.Mock;
export const mockDoc: jest.Mock;
export const mockWhere: jest.Mock;
export const mockBatch: jest.Mock;
export const mockGet: jest.Mock;
export const mockGetAll: jest.Mock;
export const mockUpdate: jest.Mock;
export const mockAdd: jest.Mock;
export const mockSet: jest.Mock;
export const mockDelete: jest.Mock;
export const mockOrderBy: jest.Mock;
export const mockLimit: jest.Mock;

export const mockBatchDelete: jest.Mock;
export const mockBatchCommit: jest.Mock;
export const mockBatchUpdate: jest.Mock;
export const mockBatchSet: jest.Mock;

export interface FirestoreRecord {
    id?: string;
}

export interface BuildDocFromHashReturn<T extends FirestoreRecord> {
    exists: boolean;
    id: string;
    data(): T;
}

export interface BuildQuerySnapshotReturn<T extends FirestoreRecord> {
    empty: boolean;
    docs: Array<BuildDocFromHashReturn<T>>;
    forEach(): undefined;
}

/** Fake firestore class for the Firebase SDK */
export class FakeFireStore<T = {}> {
    recordToFetch?: FirestoreRecord | null;
    isFetchingSingle: boolean;
    collectionName?: string;
    database: T;

    constructor(stubbedDatabase: T);

    collection(collectionName: string): this;
    collectionGroup(collectionName: string): this;
    where(): this;
    get<R extends FirestoreRecord>(): Promise<
        BuildDocFromHashReturn<R> | { exists: boolean } | BuildQuerySnapshotReturn<R>
    >;
    getAll(): Promise<FirestoreRecord[]>;
    batch(): {
        delete(): void;
        set(): void;
        update(): void;
        commit(): Promise<void>;
    };
    doc(id: string): this;
    update<R extends FirestoreRecord>(object: R): Promise<BuildDocFromHashReturn<R>>;
    set<R extends FirestoreRecord>(object: R): Promise<BuildDocFromHashReturn<R>>;
    add<R extends FirestoreRecord>(object: R): Promise<BuildDocFromHashReturn<R>>;
    delete(): Promise<void>;
    orderBy(): this;
    limit(): this;
}
