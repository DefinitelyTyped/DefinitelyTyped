export = AuthToken;
declare function AuthToken(scope: string | string[] | number | DBKey, data?: string): void;
declare class AuthToken {
    constructor(scope: string | string[] | number | DBKey, data?: string);
    scope: string;
    data: string;
    expires: Date | null;
    description: string;
    userKey: number;
    context: string;
}
declare namespace AuthToken {
    export { DBKey };
}
type DBKey = import('../dbkey/DBKey');
