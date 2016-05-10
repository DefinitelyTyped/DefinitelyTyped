// Type definitions for Persona
// Project: http://www.mozilla.org/en-US/persona
// Definitions by: James Frasca <https://github.com/Nycto>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace Persona {

    export interface WatchOptions {
        loggedInUser: string;
        onlogin: (s: string) => void;
        onlogout: () => void;
        onready?: () => void;
    }

    export interface RequestOptions {
        backgroundColor?: string;
        siteName?: string;
        siteLogo?: string;
        termsOfService?: string;
        privacyPolicy?: string;
        returnTo?: string;
        oncancel?: () => void;
    }

    export interface GetOptions {
        backgroundColor?: string;
        siteName?: string;
        siteLogo?: string;
        termsOfService?: string;
        privacyPolicy?: string;
    }

    export interface Persona {
        watch(options: WatchOptions): void;
        request(options: RequestOptions): void;
        request(): void;
        logout(): void;
        get(gotAssertion: (s: string) => void): void;
        get(gotAssertion: (s: string) => void, options: GetOptions): void;
    }

}

interface Navigator {
    id: Persona.Persona;
}

