// Type definitions for email-check 1.1
// Project: https://github.com/pensierinmusica/email-check
// Definitions by: Luke Jones <https://github.com/luke-j>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace emailCheck {
    interface EmailCheckOptions {
        from?: string | undefined;
        host?: string | undefined;
        timeout?: number | undefined;
    }
}

declare function emailCheck(email: string, options?: emailCheck.EmailCheckOptions): Promise<boolean>;

export = emailCheck;
