import conn = require("@fusebit/oauth-connector");
import { FusebitContext } from "@fusebit/add-on-sdk";
import * as express from "express";

const userContext: conn.UserContext<{ userId: string; fullName: string }> = {
    status: "status",
    timestamp: 42,
    vendorUserId: "vendorUserId",
    vendorUserProfile: { userId: "jane@janedoe.com", fullName: "Jane Doe" },
    vendorToken: {
        scope: "scope1 scope2",
        expires_at: 42,
        expires_in: 42,
        token_type: "token_type",
        access_token: "access_token",
        refresh_token: "refresh_token",
        ext_expires_in: 42,
    },
    foreignOAuthIdentities: {
        service: {
            userId: "jane2",
            connectorBaseUrl: "http://example.com",
        },
    },
};

const authorizeParams: conn.AuthorizeParams = {
    action: "action",
    resourceFactory: (req: express.Request) => "result",
};

const response: conn.OAuthTokenResponse = {
    access_token: "access_token",
    token_type: "token_type",
    expires_in: "expires_in",
    refresh_token: "refresh_token",
    scope: "scope1 scope2",
};

class MyConnector extends conn.OAuthConnector {
    onCreate(app: express.Router) {
    }

    authorize(params: conn.AuthorizeParams): express.RequestHandler {
        return (req: express.Request, res: express.Response, next: express.NextFunction) => next;
    }

    onNewUser(
        fusebitContext: FusebitContext,
        userContext: conn.UserContext,
    ): Promise<void> {
        return Promise.resolve();
    }

    getUser(
        fusebitContext: FusebitContext,
        vendorUserId: string,
        foreignVendorId?: string,
    ): Promise<conn.UserContext> {
        return Promise.resolve(userContext);
    }

    getUserId(userContext: conn.UserContext): Promise<string> {
        return Promise.resolve("userId");
    }

    saveUser(
        fusebitContext: FusebitContext,
        userContext: conn.UserContext,
    ): Promise<conn.UserContext> {
        return Promise.resolve(userContext);
    }

    deleteUser(
        fusebitContext: FusebitContext,
        vendorUserId: string,
        vendorId?: string,
    ): Promise<void> {
        return Promise.resolve();
    }

    ensureAccessToken(
        fusebitContext: FusebitContext,
        userContext: conn.UserContext,
        foreignVendorId?: string,
    ): Promise<conn.OAuthTokenResponse> {
        return Promise.resolve(response);
    }
}

conn.createOAuthConnector(new MyConnector()).then(result => {
    return null;
});
