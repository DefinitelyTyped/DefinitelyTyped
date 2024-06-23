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
    let LOGIN_FAIL: number;
    let WITHOUT_PERMISSION: number;
    let USER_LOCKED: number;
    let PASSWORD_EXPIRED: number;
    let OK: number;
    let USER_NOT_EXISTS: number;
}
