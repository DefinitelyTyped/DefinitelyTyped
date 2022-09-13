// Type definitions for @keystonejs/auth-passport 5.0
// Project: https://github.com/keystonejs/keystone
// Definitions by: Kevin Brown <https://github.com/thekevinbrown>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.5

// Because this is a scoped package, without this line Typescript doesn't associate the
// types with the right package.
// tslint:disable-next-line:no-single-declare-module
declare module '@keystonejs/auth-passport' {
    import { Keystone } from '@keystonejs/keystone';

    class PassportAuthStrategy {
        // TODO: Better types here: https://www.keystonejs.com/keystonejs/auth-passport/
        constructor(
            authType: string,
            keystone: Keystone,
            listKey: string,
            config: any,
            strategy: any
        );

        static authType: string;

        getInputFragment(): string;
    }

    class GoogleAuthStrategy extends PassportAuthStrategy {}
    class FacebookAuthStrategy extends PassportAuthStrategy {}
    class GitHubAuthStrategy extends PassportAuthStrategy {}
    class TwitterAuthStrategy extends PassportAuthStrategy {}
}
