export = AdministratorPasswordResetRequest;
declare function AdministratorPasswordResetRequest(): void;
declare class AdministratorPasswordResetRequest {
    key: number;
    userKey: number;
    userName: string;
    requesterKey: number;
    requesterName: string;
    licenserKey: number;
    licenseeName: string;
    licenseeId: string;
    dbName: string;
    utcCreatedAt: Date;
    utcExpiresAt: Date;
    utcFinishedAt: Date;
    authorize(privateKey: RSACryptoPKey): string;
    verifyAuthorization(authorizationCode: string): boolean;
    toString(): string;
}
declare namespace AdministratorPasswordResetRequest {
    export { fromString, RSACryptoPKey };
}
type RSACryptoPKey = import('../crypto/RSACryptoPKey');
declare function fromString(data: string): AdministratorPasswordResetRequest;
