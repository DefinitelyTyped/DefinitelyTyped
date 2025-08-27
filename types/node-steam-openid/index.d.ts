import { Request } from "express";

export = SteamAuth;

declare class SteamAuth {
    /**
     * `realm` - Site name displayed to users on logon
     *
     * `returnUrl` - Your return route
     *
     * `apiKey` - Steam API key
     *
     * ```
     * const steam = new SteamAuth({
     *   realm: "http://localhost:5000",
     *   returnUrl: "http://localhost:5000/auth/steam/authenticate",
     *   apiKey: "XXXXXXXXXXXXXXXXXXXXXXXXXX"
     * });
     * ```
     */
    constructor(steamAuthOptions: SteamAuthOptions);

    /**
     * Gets the redirect URL to Steam.
     * @async
     */
    getRedirectUrl(): Promise<string>;

    /**
     * Authenticates the user with oAuth.
     * @async
     * @param request
     */
    authenticate(request: Request | object): Promise<UserObject>;
}

interface SteamAuthOptions {
    realm: string;
    returnUrl: string;
    apiKey: string;
}

/**
 * Object which holds all the authenticated user's data.
 * The key _json holds the raw response from Steam API.
 */
interface UserObject {
    _json: Record<string, any>;
    steamid: string;
    username: string;
    name: string;
    profile: string;
    avatar: {
        small: string;
        medium: string;
        large: string;
    };
}
