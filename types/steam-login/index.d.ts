// Type definitions for steam-login 0.1
// Project: http://github.com/cpancake/steam-login
// Definitions by: Nick Winans <https://github.com/Nicell>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

import { Request, RequestHandler } from 'express';

export interface MiddlewareOptions {
    verify: string;
    realm: string;
    apiKey: string;
    useSession?: boolean;
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
        profilestate?: number;
        lastlogoff: number;
        commentpermission?: number;
        realname?: string;
        primaryclanid?: string;
        timecreated?: number;
        gameid?: string;
        gameserverip?: string;
        gameextrainfo?: string;
        loccountrycode?: string;
        locstatecode?: string;
        loccityid?: number;
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
    user?: SteamUser;
}

export function middleware(opts: MiddlewareOptions): RequestHandler;

export function enforceLogin(redirect: string): RequestHandler;

export function verify(): RequestHandler;

export function authenticate(): RequestHandler;
