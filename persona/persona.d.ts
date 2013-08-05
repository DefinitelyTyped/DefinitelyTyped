// Type definitions for Persona
// Project: http://www.mozilla.org/en-US/persona
// Definitions by: James Frasca <https://github.com/Nycto>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module Persona {

    export interface WatchOptions {
        loggedInUser: String
        onlogin: (String) => void
        onlogout: () => void
        onready?: () => void
    }

    export interface RequestOptions {
        backgroundColor?: String
        siteName?: String
        siteLogo?: String
        termsOfService?: String
        privacyPolicy?: String
        returnTo?: String
        oncancel?: () => void
    }

    export interface GetOptions {
        backgroundColor?: String
        siteName?: String
        siteLogo?: String
        termsOfService?: String
        privacyPolicy?: String
    }

    export interface Persona {
        watch( options: WatchOptions ): void
        request( options: RequestOptions ): void
        request(): void
        logout(): void
        get( gotAssertion: (String) => void ): void
        get( gotAssertion: (String) => void, options: GetOptions ): void
    }

}

interface Navigator {
    id: Persona.Persona
}

