export = ApplicationSessionInfo;
declare function ApplicationSessionInfo(): void;
declare class ApplicationSessionInfo {
    applicationKey: number;
    applicationName: string;
    realm: string;
    userKey: number;
    userName: string;
    sessionId: string;
    engineId: string;
    clientAddress: string;
    clientId: string;
    userAgent: string;
    createdAt: number;
    accessedAt: number;
    expiresAt: number;
    updatedAt: number;
    dropRequestedAt: number | null;
    dropReason: string | null;
    dropRequesterKey: number | null;
    dropRequesterName: string | null;
    dropsAt: number | null;
}
declare namespace ApplicationSessionInfo {
    export { fromDataSet, DataSet };
}
declare function fromDataSet(ds: DataSet): ApplicationSessionInfo;
type DataSet = import('../dataset/DataSet');
