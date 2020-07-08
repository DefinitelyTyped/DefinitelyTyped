const ClientConfig: AppleSignInAPI.ClientConfigI = {
    clientId: '',
    redirectURI: '',
    scope: '',
    state: '',
    nonce: '',
    usePopup: false,
};

const signInResponse: AppleSignInAPI.SignInResponseI = {
    authorization: {
        state: '[STATE]',
        code: '[CODE]',
        id_token: '[ID_TOKEN]',
    },
    user: {
        email: '[EMAIL]',
        name: {
            firstName: '[FIRST_NAME]',
            lastName: '[LAST_NAME]',
        },
    },
};

const signInError: AppleSignInAPI.SignInErrorI = {
    error: '[ERROR]',
};

const AuthGood: AppleSignInAPI.AppleID = {
    auth: {
        init: () => undefined,
        signIn: () => Promise.resolve(signInResponse),
        renderButton: () => {},
    },
};

const AuthBad: AppleSignInAPI.AppleID = {
    auth: {
        init: () => undefined,
        signIn: () => Promise.reject(signInError),
        renderButton: () => {},
    },
};

AppleID.auth.init({
    clientId: '',
});
