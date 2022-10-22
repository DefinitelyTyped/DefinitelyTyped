export = PasswordResetService;
declare function PasswordResetService(): void;
declare class PasswordResetService {
    requestAdministratorPasswordReset(expiresIn: number): AdministratorPasswordResetRequest;
    resetAdministratorPassword(requestKey: number, authCode: string, newPassword: string): void;
    sendPasswordResetMail(
        userKey: DBKey | number,
        options: {
            senderName?: string;
            htmlContent?: string;
            content?: string;
        }
    ): void;
    validateConfirmationCode(userKey: DBKey | number, confirmationCode: string): void;
    resetPassword(userKey: DBKey | number, confirmationCode: string, newPassword: string): void;
}
declare namespace PasswordResetService {
    export { DBKey, AdministratorPasswordResetRequest };
}
type AdministratorPasswordResetRequest = import('./AdministratorPasswordResetRequest');
type DBKey = import('../dbkey/DBKey');
