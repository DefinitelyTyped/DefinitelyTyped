declare namespace Persona {
    export interface WatchOptions {
        loggedInUser: string;
        onlogin: (s: string) => void;
        onlogout: () => void;
        onready?: (() => void) | undefined;
    }

    export interface RequestOptions {
        backgroundColor?: string | undefined;
        siteName?: string | undefined;
        siteLogo?: string | undefined;
        termsOfService?: string | undefined;
        privacyPolicy?: string | undefined;
        returnTo?: string | undefined;
        oncancel?: (() => void) | undefined;
    }

    export interface GetOptions {
        backgroundColor?: string | undefined;
        siteName?: string | undefined;
        siteLogo?: string | undefined;
        termsOfService?: string | undefined;
        privacyPolicy?: string | undefined;
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
