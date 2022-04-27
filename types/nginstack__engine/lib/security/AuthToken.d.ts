export = AuthToken;
declare function AuthToken(scope: string | string[] | number | DBKey, data?: string): void;
declare class AuthToken {
    constructor(scope: string | string[] | number | DBKey, data?: string);
    scope: string;
    data: string;
    expires: Date;
    description: string;
    userKey: number | DBKey;
}
declare namespace AuthToken {
    export { DBKey };
}
type DBKey = import('../dbkey/DBKey');
