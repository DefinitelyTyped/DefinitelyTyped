declare module "meteor/accounts-base" {
    interface URLS {
        resetPassword: (token: string) => string;
        verifyEmail: (token: string) => string;
        enrollAccount: (token: string) => string;
    }

    interface EmailFields {
        from?: () => string;
        subject?: (user: Meteor.User) => string;
        text?: (user: Meteor.User, url: string) => string;
        html?: (user: Meteor.User, url: string) => string;
    }

    module Accounts {
        var urls: URLS;

        function user(): Meteor.User;

        function userId(): string;

        function createUser(options: {
            username?: string;
            email?: string;
            password?: string;
            profile?: Object;
        }, callback?: Function): string;

        function config(options: {
            sendVerificationEmail?: boolean;
            forbidClientAccountCreation?: boolean;
            restrictCreationByEmailDomain?: string | Function;
            loginExpirationInDays?: number;
            oauthSecretKey?: string;
            passwordResetTokenExpirationInDays?: number;
            passwordEnrollTokenExpirationInDays?: number;
            ambiguousErrorMessages?: boolean;
        }): void;

        function onLogin(func: Function): {
            stop: () => void
        };

        function onLoginFailure(func: Function): {
            stop: () => void
        };

        function loginServicesConfigured(): boolean;

        function onPageLoadLogin(func: Function): void;
    }

    module Accounts {
        function changePassword(oldPassword: string, newPassword: string, callback?: Function): void;

        function forgotPassword(options: {
            email?: string;
        }, callback?: Function): void;

        function resetPassword(token: string, newPassword: string, callback?: Function): void;

        function verifyEmail(token: string, callback?: Function): void;

        function onEmailVerificationLink(callback: Function): void;

        function onEnrollmentLink(callback: Function): void;

        function onResetPasswordLink(callback: Function): void;

        function loggingIn(): boolean;

        function logout(callback?: Function): void;

        function logoutOtherClients(callback?: Function): void;

        var ui: {
            config(options: {
                requestPermissions?: Object;
                requestOfflineToken?: Object;
                forceApprovalPrompt?: Object;
                passwordSignupFields?: string;
            }): void;
        };
    }

    interface Header {
        [id: string]: string;
    }

    interface EmailTemplates {
        from: string;
        siteName: string;
        headers?: Header;
        resetPassword: EmailFields;
        enrollAccount: EmailFields;
        verifyEmail: EmailFields;
    }

    module Accounts {
        var emailTemplates: EmailTemplates;

        function addEmail(userId: string, newEmail: string, verified?: boolean): void;

        function removeEmail(userId: string, email: string): void;

        function onCreateUser(func: Function): void;

        function findUserByEmail(email: string): Object;

        function findUserByUsername(username: string): Object;

        function sendEnrollmentEmail(userId: string, email?: string): void;

        function sendResetPasswordEmail(userId: string, email?: string): void;

        function sendVerificationEmail(userId: string, email?: string): void;

        function setUsername(userId: string, newUsername: string): void;

        function setPassword(userId: string, newPassword: string, options?: {
            logout?: Object;
        }): void;

        function validateNewUser(func: Function): boolean;

        function validateLoginAttempt(func: Function): {
            stop: () => void
        };

        function _hashPassword(password: string): { digest: string; algorithm: string; };

        interface IValidateLoginAttemptCbOpts {
            type: string;
            allowed: boolean;
            error: Meteor.Error;
            user: Meteor.User;
            connection: Meteor.Connection;
            methodName: string;
            methodArguments: any[];
        }
    }

    module Accounts {
        function onLogout(func: Function): void;
    }

    module Accounts {
        function onLogout(func: (user: Meteor.User, connection: Meteor.Connection) => void): void;
    }
}
