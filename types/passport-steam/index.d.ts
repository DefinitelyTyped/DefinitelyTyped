import { Request } from "express";
import * as Passport from "passport";

declare class SteamStrategy<T extends SteamStrategyOptions> extends Passport.Strategy {
    constructor(options: T, validate: ValidateFn<T>);
}

declare namespace SteamStrategy {
    const Strategy: typeof SteamStrategy;
    const version: string;
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
