import { TypedHash } from "@pnp/common";
import { AuthToken } from "./types";
export declare function validateProviderHostedRequestToken(requestToken: string, clientSecret: string): Promise<TypedHash<string>>;
/**
 * Gets an add-in only authentication token based on the supplied site url, client id and secret
 */
export declare function getAddInOnlyAccessToken(siteUrl: string, clientId: string, clientSecret: string, realm: string, stsUri: string): Promise<AuthToken>;
/**
 * Gets a user authentication token based on the supplied site url, client id, client secret, and refresh token
 */
export declare function getUserAccessToken(siteUrl: string, clientId: string, clientSecret: string, refreshToken: string, realm: string, stsUri: string, cacheKey: string): Promise<AuthToken>;
