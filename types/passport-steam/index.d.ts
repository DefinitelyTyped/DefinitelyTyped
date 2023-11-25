import { Request } from "express";
import { Strategy } from "passport";

declare class SteamStrategy<T extends SteamStrategyOptions> extends Strategy {
    constructor(options: T, validate: ValidateFn<T>);
}

interface SteamStrategyOptions {
    returnURL: string;
    realm: string;
    apiKey: string;
    passReqToCallback?: boolean;
}

type ValidateFn<T extends SteamStrategyOptions> = T["passReqToCallback"] extends true
    ? (req: Request, identifier: SteamIdentifier, profile: SteamProfile, done: DoneFn) => void
    : (identifier: SteamIdentifier, profile: SteamProfile, done: DoneFn) => void;

type DoneFn = (err: unknown, user?: Express.User | false | null) => void;

type SteamIdentifier = string;

interface SteamProfile {
    provider: "steam";
    _json: {
        steamid: string;
        communityvisibilitystate: number;
        profilestate: number;
        personaname: string;
        commentpermission: number;
        profileurl: string;
        avatar: string;
        avatarmedium: string;
        avatarfull: string;
        avatarhash: string;
        lastlogoff: number;
        personastate: number;
        realname: string;
        primaryclanid: string;
        timecreated: number;
        personastateflags: number;
        loccountrycode: string;
        locstatecode: string;
    };
    id: string;
    displayName: string;
    photos: Array<{ value: string }>;
}

export = SteamStrategy;