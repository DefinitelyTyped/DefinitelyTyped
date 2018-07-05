// Type definitions for otplib 7.0
// Project: https://yeojz.github.io/otplib
// Definitions by: Soner Köksal <https://github.com/renjfk>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export namespace authenticator {
    interface VerifyOptions {
        token: string;
        secret: string;
    }

    function generateSecret(): string;

    function generate(secret: string): string;

    function check(token: string, secret: string): boolean;

    function verify(options: VerifyOptions): boolean;
}
