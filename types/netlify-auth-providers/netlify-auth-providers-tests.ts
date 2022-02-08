import Authenticator from 'netlify-auth-providers';

const authenticator = new Authenticator({ site_id: 'my netifly site' });

authenticator.authenticate(
    // Set the OAuth provider and token scope
    // Provider can be "github", "gitlab", or "bitbucket"
    // The scopes available depend on your OAuth provider
    { provider: 'github', scope: 'user' },
    (error, data) => {
        if (error) {
        } else {
            console.log(data);
        }
    },
);
