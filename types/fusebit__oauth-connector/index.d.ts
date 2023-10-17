import { FusebitContext } from "@fusebit/add-on-sdk";
import * as express from "express";

/**
 * Model for persisted user data.
 */
export interface UserContext<TVendorUserProfile = object> {
    status?: string;
    timestamp: number;
    vendorUserId: string;
    vendorUserProfile: TVendorUserProfile;
    vendorToken?: {
        scope: string;
        expires_at: number;
        expires_in: number;
        token_type: string;
        access_token: string;
        refresh_token: string;
        ext_expires_in: number;
    };
    foreignOAuthIdentities: {
        [key: string]: {
            userId: string;
            connectorBaseUrl: string;
        };
    };
}

/**
 * Parameters that are passed to the authorize method.
 */
export interface AuthorizeParams {
    action: string;
    resourceFactory: (req: express.Request) => string;
}

/**
 * Response to a request for an access token.
 */
export interface OAuthTokenResponse {
    access_token: string;
    token_type: string;
    expires_in: string;
    refresh_token?: string;
    scope?: string;
}

export class OAuthConnector {
    /**
     * Called during connector initialization to allow the connector to register additional, application-specific
     * routes on the provided Express router.
     *
     * @param Express router
     */
    onCreate(app: express.Router): void;

    /**
     * Creates Express middleware that authorizes the call using Fusebit security. For example, the following will only execute
     * the Express handler if the access token supplied by the caller has the function:execute permission on the function resource.
     *
     * app.get('/myendpoint',
     *   authorize({
     *     action: 'function:execute',
     *     resourceFactory: req => `/account/${req.fusebit.accountId}/subscription/${req.fusebit.subscriptionId}/boundary/${req.fusebit.boundaryId}/function/${req.fusebit.functionId}/myendpoint/`
     *   }),
     *   handler
     * );
     *
     * @param param Object with action and resourceFactory properties
     */
    authorize(params: AuthorizeParams): express.RequestHandler;

    /**
     * Called after a new user successfuly completed a configuration flow and was persisted in the system. This extensibility
     * point allows for creation of any artifacts required to serve this new user, for example creation of additional
     * Fusebit functions.
     *
     * @async
     * @param fusebitContext The Fusebit context of the request
     * @param userContext The user context representing the vendor's user. Contains vendorToken and vendorUserProfile, representing responses
     * from getAccessToken and getUserProfile, respectively.
     */
    onNewUser(
        fusebitContext: FusebitContext,
        userContext: UserContext,
    ): Promise<void>;

    /**
     * Gets the user context representing the user with vendorUserId id. Returned object contains vendorToken and vendorUserProfile properties.
     *
     * @async
     * @param fusebitContext The Fusebit context
     * @param vendorUserId The vendor user id
     * @param foreignVendorId If specified, vendorUserId represents the identity of the user in another system.
     * The foreignVendorId must correspond to an entry in userContext.foreignOAuthIdentities.
     */
    getUser(
        fusebitContext: FusebitContext,
        vendorUserId: string,
        foreignVendorId?: string,
    ): Promise<UserContext>;

    /**
     * Returns a string uniquely identifying the user in vendor's system. Typically this is a property of
     * userContext.vendorUserProfile. Default implementation is opportunistically returning userContext.vendorUserProfile.id
     * if it exists.
     *
     * @async
     * @param userContext The user context representing the vendor's user. Contains vendorToken and vendorUserProfile, representing responses
     * from getAccessToken and getUserProfile, respectively.
     */
    getUserId(userContext: UserContext): Promise<string>;

    /**
     * Saves user context in storage for future use.
     *
     * @async
     * @param fusebitContext The Fusebit context of the request
     * @param userContext The user context representing the vendor's user. Contains vendorToken and vendorUserProfile, representing responses
     * from getAccessToken and getUserProfile, respectively.
     */
    saveUser(
        fusebitContext: FusebitContext,
        userContext: UserContext,
    ): Promise<UserContext>;

    /**
     * Deletes user context from storage.
     *
     * @async
     * @param fusebitContext The Fusebit context
     * @param vendorUserId The vendor user id
     * @param vendorId If specified, vendorUserId represents the identity of the user in another system.
     * The vendorId must correspond to an entry in userContext.foreignOAuthIdentities.
     */
    deleteUser(
        fusebitContext: FusebitContext,
        vendorUserId: string,
        vendorId?: string,
    ): Promise<void>;

    /**
     * Returns a valid access token to the vendor's system representing the vendor's user described by the userContext,
     * or a valid access token to a foreign system if foreignVendorId is specified.
     * For the vendor's system, if the currently stored access token is expired or nearing expiry, and a refresh token is available, a new access
     * token is obtained, stored for future use, and returned. If a current access token cannot be returned, an exception is thrown.
     *
     * @async
     * @param fusebitContext The Fusebit context of the request
     * @param userContext The vendor user context
     * @param foreignVendorId If specified, gets a valid access token for the OAuth connector identified by the
     * foreignVendorId entry in the userContext.foreignOAuthIdentities rather than a user of this connector.
     */
    ensureAccessToken(
        fusebitContext: FusebitContext,
        userContext: UserContext,
        foreignVendorId?: string,
    ): Promise<OAuthTokenResponse>;
}

/**
 * Creates and initializes new OAuth connector in a Fusebit integration.
 *
 * @async
 * @param vendorConnector OAuth connector instance to initialize.
 */
export function createOAuthConnector(vendorConnector: OAuthConnector): Promise<any>;
