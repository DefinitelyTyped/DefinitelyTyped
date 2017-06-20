// password based sign-in example from Section 1.2.1:
// https://www.w3.org/TR/credential-management-1/#examples-password-signin
function passwordBasedSignIn() {
    if (!navigator.credentials) {
        return;
    }

    navigator.credentials.get({password: true}).then((credential) => {
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

// federated sign-in example from Section 1.2.2:
// https://www.w3.org/TR/credential-management-1/#examples-federated-signin
function federatedSignIn() {
    if (!navigator.credentials) {
        return;
    }

    navigator.credentials
        .get({
            password: true,
            federated: {providers: ['https://federation.com']}
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
                        break;
                }
            } else {
                fetch(
                    'https://example.com/loginEndpoint',
                    {credentials: credential, method: 'POST'});
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
            fetch(formElem.action, {method: 'POST', credentials: c}).then(r => {
                if (r.status === 200) {
                    navigator.credentials!.store(c);
                }
            });
        }
    });
}

// federation example
function federationPostSignInConfirmation() {
    if (navigator.credentials) {
        navigator.credentials.store(new FederatedCredential(
            {id: 'username', provider: 'https://federation.com'}));
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
        {credentials: credential, method: 'POST'});
}

function additionalDataPost(credential: PasswordCredential, token: string) {
    credential.additionalData = new FormData();
    credential.additionalData.append('csrf', token);
    fetch(
        'https://example.com/loginEndpoint',
        {credentials: credential, method: 'POST'});
}

function formEncodedPost(credential: PasswordCredential, token: string) {
    credential.additionalData = new URLSearchParams();
    fetch(
        'https://example.com/loginEndpoint',
        {credentials: credential, method: 'POST'});
}

// requireUserMediation example: not included in the spec, but included here
// to ensure it typechecks correctly.
function signOut() {
    if (!navigator.credentials) {
        return;
    }

    navigator.credentials.requireUserMediation().then(() => {
        document.location.assign('/');
    });
}
