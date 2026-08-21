declare namespace emailCheck {
    interface EmailCheckOptions {
        from?: string | undefined;
        host?: string | undefined;
        timeout?: number | undefined;
    }
}

declare function emailCheck(email: string, options?: emailCheck.EmailCheckOptions): Promise<boolean>;

export = emailCheck;
