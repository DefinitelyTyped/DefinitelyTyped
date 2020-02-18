const ClientConfig: AppleSignInAPI.ClientConfigI = {
    clientId: '',
    redirectURI: '',
    scope: '',
    state: '',
    usePopup: false,
};

const signinResponse: AppleSignInAPI.signInResponse = {
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

const AuthI: AppleSignInAPI.AuthI = {
    auth: {
        init: () => new Promise(() => {}),
        signIn: () => new Promise(() => signinResponse),
        renderButton: () => {},
    },
};
