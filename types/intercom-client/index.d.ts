// Type definitions for intercom-client 2.9
// Project: https://github.com/intercom/intercom-node
// Definitions by: Jinesh Shah <https://github.com/jineshshah36>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface IdentityVerificationOptions {
    secretKey: string;
    identifier: string;
}

export const IdentityVerification: {
    userHash(opts: IdentityVerificationOptions): string;
};
