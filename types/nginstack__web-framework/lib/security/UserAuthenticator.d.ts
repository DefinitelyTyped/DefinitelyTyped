export = UserAuthenticator;
declare function UserAuthenticator(): void;
declare class UserAuthenticator {
    private _messages;
    userPolicyKey: number;
    defaultPasswordRule: any;
    private _isKeyOfGroupOrUser;
    getResultMessage(authResult: any): any;
    private authenticateUser;
    validateUserAccess(userId: string, remoteAddress: string): number;
}
declare namespace UserAuthenticator {
    const LOGIN_FAIL: number;
    const WITHOUT_PERMISSION: number;
    const USER_LOCKED: number;
    const PASSWORD_EXPIRED: number;
    const OK: number;
    const USER_NOT_EXISTS: number;
}
