// Type definitions for non-npm package Apple Sign in API 0.1
// Project: https://developer.apple.com/documentation/signinwithapplejs
// Definitions by: Julius Lungys <https://github.com/voidpumpkin>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace AppleSignInAPI {
    // https://developer.apple.com/documentation/signinwithapplejs/authi
    interface AuthI {
        auth: {
            init: (config?: ClientConfigI) => Promise<void>;
            signIn: (config?: ClientConfigI) => Promise<signInResponse>;
            renderButton: () => void;
        };
    }
    // https://developer.apple.com/documentation/signinwithapplejs/clientconfigi
    interface ClientConfigI {
        clientId: string;
        redirectURI: string;
        scope: string;
        state: string;
        usePopup: boolean; // Mentioned in https://developer.apple.com/documentation/signinwithapplejs/configuring_your_webpage_for_sign_in_with_apple
    }
    // https://developer.apple.com/documentation/signinwithapplejs/configuring_your_webpage_for_sign_in_with_apple
    interface signInResponse {
        authorization: {
            code: string;
            id_token: string;
            state: string;
        };
        user?: { name: { firstName: string; lastName: string }; email: string };
    }
}
