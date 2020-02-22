// Type definitions for non-npm package Apple Sign in API 1.4
// Project: https://developer.apple.com/documentation/signinwithapplejs
// Definitions by: Julius Lungys <https://github.com/voidpumpkin>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace AppleSignInAPI {
    // https://developer.apple.com/documentation/signinwithapplejs/authorizationi
    interface AuthorizationI {
        code: string;
        id_token: string;
        state: string;
    }
    // https://developer.apple.com/documentation/signinwithapplejs/namei
    interface NameI {
        firstName: string;
        lastName: string;
    }
    // https://developer.apple.com/documentation/signinwithapplejs/signinerrori
    interface SignInErrorI {
        error: string;
    }
    // https://developer.apple.com/documentation/signinwithapplejs/signinresponsei
    interface SignInResponseI {
        authorization: AuthorizationI;
        user?: UserI;
    }
    // https://developer.apple.com/documentation/signinwithapplejs/useri
    interface UserI {
        email: string;
        name: NameI;
    }
    // https://developer.apple.com/documentation/signinwithapplejs/authi
    interface AuthI {
        init: (config: ClientConfigI) => Promise<void>;
        signIn: (signInConfig?: ClientConfigI) => Promise<SignInResponseI | SignInErrorI>;
        renderButton: () => void;
    }
    // https://developer.apple.com/documentation/signinwithapplejs/clientconfigi
    interface ClientConfigI {
        clientId: string;
        redirectURI: string;
        scope: string;
        state: string;
        usePopup: boolean;
    }
    interface AppleID {
        auth: AuthI;
    }
}
