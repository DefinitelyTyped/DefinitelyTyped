// Type definitions for steam-login 0.1
// Project: https://github.com/cpancake/steam-login
// Definitions by: Nick Winans <https://github.com/Nicell>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import { Request, RequestHandler } from 'express';

export interface MiddlewareOptions {
    verify: string;
    realm: string;
    apiKey: string;
    useSession?: boolean | undefined;
}

export interface SteamUser {
    _json: {
        steamid: string;
        personaname: string;
        profileurl: string;
        avatar: string;
        avatarmedium: string;
        avatarfull: string;
        personastate: number;
        communityvisibilitystate: number;
        profilestate?: number | undefined;
        lastlogoff: number;
        commentpermission?: number | undefined;
        realname?: string | undefined;
        primaryclanid?: string | undefined;
        timecreated?: number | undefined;
        gameid?: string | undefined;
        gameserverip?: string | undefined;
        gameextrainfo?: string | undefined;
        loccountrycode?: string | undefined;
        locstatecode?: string | undefined;
        loccityid?: number | undefined;
    };
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

export interface SteamRequest extends Request {
    logout?(): (req: Request) => () => void;
    user?: SteamUser | undefined;
}

export function middleware(opts: MiddlewareOptions): RequestHandler;

export function enforceLogin(redirect: string): RequestHandler;

export function verify(): RequestHandler;

export function authenticate(): RequestHandler;
