import * as zapier from "zapier-platform-core";

const BASE_URL = "http://example.com";
const OAUTH2_CLIENT_ID = "12345";
const OAUTH2_CLIENT_SECRET = "abcdef";

const authentication: zapier.OAuth2Authentication = {
    type: "oauth2",
    connectionLabel: "User account",
    oauth2Config: {
        authorizeUrl: `${BASE_URL}/oauth2/authorize`,

        getAccessToken: async (z, bundle) => {
            const response = await z.request(`${BASE_URL}/oauth2/access`, {
                method: "POST",
                body: {
                    code: bundle.inputData.code,
                    client_id: OAUTH2_CLIENT_ID,
                    client_secret: OAUTH2_CLIENT_SECRET,
                    grant_type: "authorization_code"
                }
            });

            if (response.status !== 200) {
                throw new Error(
                    "Unable to fetch access token: " + response.content
                );
            }

            if (typeof response.content !== "string") {
                throw new Error(
                    `Unable to response content, expected string but got ${typeof response.content}.`
                );
            }

            const result = z.JSON.parse(response.content);
            return {
                access_token: result.access_token,
                refresh_token: result.refresh_token
            };
        },

        refreshAccessToken: async (z, bundle) => {
            if (!bundle.authData.refresh_token) {
                throw new Error(
                    "Required `bundle.authData.refresh_token` field missing."
                );
            }

            const response = await z.request(`${BASE_URL}/oauth2/refresh`, {
                method: "POST",
                body: {
                    refresh_token: bundle.authData.refresh_token,
                    client_id: OAUTH2_CLIENT_ID,
                    client_secret: OAUTH2_CLIENT_SECRET,
                    grant_type: "refresh_token"
                }
            });

            if (response.status !== 200) {
                throw new Error(
                    "Unable to fetch access token: " + response.content
                );
            }

            if (typeof response.content !== "string") {
                throw new Error(
                    `Unable to response content, expected string but got ${typeof response.content}.`
                );
            }

            const result = z.JSON.parse(response.content);
            return {
                access_token: result.access_token,
                refresh_token: bundle.authData.refresh_token
            };
        },

        autoRefresh: true,

        scope: "read,write"
    },

    test: async z => {
        const response = await z.request(`${BASE_URL}/oauth2/test`);

        if (response.status === 401) {
            throw new Error("The access token you supplied is not valid");
        }

        return true;
    }
};

zapier.version;

const testCreateAppTester = async () => {
    const zapierApp = {};
    const appTester = await zapier.createAppTester(zapierApp);
};
