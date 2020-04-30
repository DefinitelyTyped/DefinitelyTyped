const ClientConfig: AppleSignInAPI.ClientConfigI = {
    clientId: '',
    redirectURI: '',
    scope: '',
    state: '',
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
        init: () => new Promise(() => {}),
        signIn: () => new Promise(() => signInResponse),
        renderButton: () => {},
    },
};

const AuthBad: AppleSignInAPI.AppleID = {
    auth: {
        init: () => new Promise(() => {}),
        signIn: () => new Promise(() => signInError),
        renderButton: () => {},
    },
};
