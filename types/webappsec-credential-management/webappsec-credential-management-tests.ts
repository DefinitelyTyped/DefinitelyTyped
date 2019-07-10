// password based sign-in example from Section 1.2.1:
// https://www.w3.org/TR/credential-management-1/#examples-password-signin
function passwordBasedSignInDeprecated() {
    if (!navigator.credentials) {
        return;
    }

    navigator.credentials.get({ password: true }).then((credential) => {
        if (!credential) {
            return;
        }

        if (credential.type === 'password') {
            fetch('https://example.com/loginEndpoint', {
                credentials: credential,
                method: 'POST'
            }).then((response: Response) => {
                console.log('authenticated');
            });
        }
    });
}

// password based sign-in for new specs.
// https://www.w3.org/TR/credential-management-1/#examples-password-signin
function passwordBasedSignIn() {
    if (!navigator.credentials) {
        return;
    }

    navigator.credentials
        .get({ password: true })
        .then((credential) => {
            if (!credential) {
                // The user either doesn’t have credentials for this site, or
                // refused to share them. Insert some code here to fall back to
                // a basic login form.
                return;
            }
            if (credential.type === 'password') {
                const form = new FormData();
                form.append('username_field', credential.id);
                form.append('password_field', credential.password || '');
                const opt = {
                    method: 'POST',
                    body: form,
                    credentials: 'include'  // Send cookies.
                };
                fetch('https://example.com/loginEndpoint', opt)
                    .then((response) => {
                        if (navigator.credentials) {
                            // Record that the credential was effective. See note below.
                            navigator.credentials.store(credential);
                            // Notify the user that sign-in succeeded! Do amazing, signed-in things!
                            // Maybe navigate to a landing page via location.href =
                            // '/signed-in-experience'?
                        } else {
                            // Insert some code here to fall back to a basic login form.
                        }
                    });
            }
        });
}

// https://www.w3.org/TR/2017/WD-credential-management-1-20170804/#mediation-examples
function signInMediationSilent() {
    window.addEventListener('load', _ => {
        if (!navigator.credentials) {
            return;
        }
        navigator.credentials.get({
            password: true,
            mediation: 'silent'
        }).then((credential) => {
            // Hooray! Let’s sign the user in using these credentials!
        });
    });
}

// https://www.w3.org/TR/2017/WD-credential-management-1-20170804/#mediation-examples
function signInMediationRequired() {
    window.addEventListener('load', _ => {
        if (!navigator.credentials) {
            return;
        }
        navigator.credentials.get({
            password: true,
            mediation: 'required'
        }).then((credential) => {
            // Hooray! Let’s sign the user in using these credentials!
        });
    });
}

// https://www.w3.org/TR/2017/WD-credential-management-1-20170804/#mediation-examples
function signInMediationOptional() {
    window.addEventListener('load', _ => {
        if (!navigator.credentials) {
            return;
        }
        navigator.credentials.get({
            password: true,
            mediation: 'optional'
        }).then((credential) => {
            // Hooray! Let’s sign the user in using these credentials!
        });
    });
}

// federated sign-in example from Section 1.2.2:
// https://www.w3.org/TR/credential-management-1/#examples-federated-signin
function federatedSignIn() {
    if (!navigator.credentials) {
        return;
    }

    navigator.credentials
        .get({
            password: true,
            federated: { providers: ['https://federation.com'] }
        })
        .then((credential) => {
            if (!credential) return;

            if (credential.type === 'federated') {
                switch (credential.provider) {
                    case 'https://www.facebook.com/':
                        // Use Facebook’s SDK
                        break;

                    case 'https://accounts.google.com/':
                        // Use Google's SDK
                        break;

                    // ... any other providers you care about ...

                    default:
                        fetch(
                            'https://example.com/loginEndpoint',
                            { credentials: credential, method: 'POST' });
                        break;
                }
            } else {
                const pwCred = credential as PasswordCredential;
                fetch(
                    'https://example.com/loginEndpoint',
                    { credentials: pwCred, method: 'POST' });
            }
        });
}

// Post-sign-in confirmation example from Section 1.2.3:
// https://www.w3.org/TR/credential-management-1/#examples-post-signin
function passwordPostSignInConfirmation() {
    if (!navigator.credentials) {
        return;
    }

    document.querySelector('#theForm')!.addEventListener('submit', e => {
        if (navigator.credentials) {
            e.preventDefault();

            const formElem = (e.target as HTMLFormElement);
            const c = new PasswordCredential(formElem);
            fetch(formElem.action, { method: 'POST', credentials: c }).then(r => {
                if (r.status === 200) {
                    navigator.credentials.store(c);
                }
            });
        }
    });
}

// federation example
function federationPostSignInConfirmation() {
    if (navigator.credentials) {
        navigator.credentials.store(new FederatedCredential(
            { id: 'username', provider: 'https://federation.com' }));
    }
}

// The change password example from Section 1.2.4 is essentially the same
// as in 1.2.4, but the form element has different autocomplete annotations.
// Therefore, we don't duplicate it here.
// https://www.w3.org/TR/credential-management-1/#examples-change-password

// layering on top of a legacy system examples, from Section 1.2.5
// https://www.w3.org/TR/credential-management-1/#examples-legacy
function existingFormPost(credential: PasswordCredential) {
    credential.idName = 'u';
    credential.passwordName = 'p';
    fetch(
        'https://example.com/loginEndpoint',
        { credentials: credential, method: 'POST' });
}

function additionalDataPost(credential: PasswordCredential, token: string) {
    credential.additionalData = new FormData();
    credential.additionalData.append('csrf', token);
    fetch(
        'https://example.com/loginEndpoint',
        { credentials: credential, method: 'POST' });
}

function formEncodedPost(credential: PasswordCredential, token: string) {
    credential.additionalData = new URLSearchParams();
    fetch(
        'https://example.com/loginEndpoint',
        { credentials: credential, method: 'POST' });
}

function federatedCredentialPost(credential: FederatedCredential) {
    fetch(
        'https://example.com/loginEndpoint',
        { credentials: credential, method: 'POST' });
}

// requireUserMediation example: not included in the spec, but included here
// to ensure it typechecks correctly.
function signOutDeprecated() {
    if (!navigator.credentials) {
        return;
    }

    navigator.credentials.requireUserMediation().then(() => {
        document.location.assign('/');
    });
}

function signOut() {
    if (!navigator.credentials) {
        return;
    }

    navigator.credentials.preventSilentAccess().then(() => {
        document.location.assign('/');
    });
}

// Example not included in spec but added to ensure it typechecks
// correctly.
function createPasswordCredential() {
    if (!navigator.credentials) {
        return;
    }

    navigator.credentials.create({
        password: { id: 'username', password: 'password' }
    }).then((credential) => {
        // Credential created!
    });
}

// Example not included in spec but added to ensure it typechecks
// correctly.
function createPasswordCredentialWithForm() {
    if (!navigator.credentials) {
        return;
    }

    const formElt = document.querySelector('#form') as HTMLFormElement;

    navigator.credentials.create({
        password: formElt
    }).then((credential) => {
        // Credential created!
    });
}

// Example not included in spec but added to ensure it typechecks
// correctly.
function createFederatedCredential() {
    if (!navigator.credentials) {
        return;
    }

    navigator.credentials.create({
        federated: { id: 'username', provider: 'provider' }
    }).then((credential) => {
        // Credential created!
    });
}

function webauthnRegister() {
    if (!navigator.credentials) {
        return;
    }

    const challenge = new Uint8Array(32);
    window.crypto.getRandomValues(challenge);

    const credPromise = navigator.credentials.create({
        publicKey: {
            rp: {
                id: document.domain,
                name: document.domain,
            },
            user: {
                id: new Uint8Array(1).buffer,
                name: 'test user',
                displayName: 'test user',
            },
            challenge,
            pubKeyCredParams: [{ type: 'public-key', alg: -7 }],
            excludeCredentials: [
                {
                    id: new Uint8Array(1).buffer,
                    type: 'public-key',
                    transports: ['ble', 'internal'],
                },
            ],
            timeout: 5000,
            attestation: 'direct',
            authenticatorSelection: {
                userVerification: 'preferred',

                requireResidentKey: false,
                authenticatorAttachment: 'platform',
            },
        },
    });

    credPromise.then((cred) => {
        const pubKeyCred = cred as PublicKeyCredential;
        console.log(pubKeyCred);
    }, (e) => {
        console.log(e.message);
    });
}

function webauthnAuthenticate() {
    if (!navigator.credentials) {
        return;
    }

    const credentialID = new Uint8Array(64);
    const challenge = new Uint8Array(32);
    window.crypto.getRandomValues(challenge);

    const authPromise = navigator.credentials.get({
        publicKey: {
            challenge,
            timeout: 5000,
            rpId: document.domain,
            allowCredentials: [{
                type: "public-key",
                id: credentialID,
                transports: ['internal', 'ble', 'nfc', 'usb']
            }],
        }
    });

    authPromise.then((cred) => {
        if (cred === null) {
            return;
        }

        const pubKeyCred = cred as PublicKeyCredential;
        const response = <AuthenticatorAssertionResponse> pubKeyCred.response;
        const authData = new Uint8Array(response.authenticatorData);
    }, (e) => {
        console.log(e.message);
    });
}

function mockAuthenticatorAssertionResponse() {
    if (!navigator.credentials) {
        return;
    }

    const sampleResponse: AuthenticatorAssertionResponse = {
        clientDataJSON: new ArrayBuffer(0),
        authenticatorData: new ArrayBuffer(0),
        signature: new ArrayBuffer(0),
        userHandle: null,
    };
    sampleResponse.userHandle === undefined;
}
