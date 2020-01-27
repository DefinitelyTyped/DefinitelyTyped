amazon.Login.setClientId("my-client-id");
amazon.Login.setSiteDomain("my://site.domain");
amazon.Login.setSandboxMode(true);
amazon.Login.setUseCookie(true);
amazon.Login.setRegion(amazon.Login.Region.Europe);

const clientId: string = amazon.Login.getClientId();

// Request full user data
const scope: AuthorizeScope = ["profile", "profile:user_id", "postal_code"];
// Authorize with a url as the `next` parameter
amazon.Login.authorize(
    {
        scope,
        interactive: "never",
        popup: false,
    },
    (req: AccessTokenRequest) => {
        if (req.error) {
            console.log(req.error_description);
            console.log(req.error_uri);
            return;
        }
        amazon.Login.retrieveProfile(req.access_token, onRetrieveProfile);
    }
);

const request = amazon.Login.authorize({
    response_type: "code",
    state: "my-state",
    scope: "profile",
    scope_data: {
        postal_code: { essential: true },
    },
});

request.onComplete("my://redirect.url");
request.onComplete((req: CodeRequest) => {
    console.log(req.code);
    console.log(req.state);
});

amazon.Login.retrieveProfile(onRetrieveProfile);

amazon.Login.logout();

function onRetrieveProfile(response: RetrieveProfileResponse): void {
    if (response.success) {
        console.log(`Profile Info:
id: ${response.profile.CustomerId}
name: ${response.profile.Name}
email: ${response.profile.PrimaryEmail}
postalCode: ${response.profile.PostalCode}`);
    } else {
        throw new Error(response.error);
    }
}
