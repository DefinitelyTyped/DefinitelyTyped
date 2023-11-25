import { Request } from "express"
import { Strategy } from "passport"

declare class SteamStrategy<T extends SteamStrategyOptions> extends Strategy {
    constructor(options: T, validate: ValidateFn<T>)
}

export interface SteamStrategyOptions {
    returnURL: string,
    realm: string,
    apiKey: string,
    passReqToCallback?: boolean
}

export type ValidateFn<T extends SteamStrategyOptions> = T["passReqToCallback"] extends true
    ? (req: Request, identifier: SteamIdentifier, profile: SteamProfile, done: DoneFn) => void
    : (identifier: SteamIdentifier, profile: SteamProfile, done: DoneFn) => void

export type DoneFn = (err: unknown, user?: Express.User | false | null) => void

export type SteamIdentifier = string

export interface SteamProfile {
    provider: "steam",
    _json: {
        steamid: string,
        communityvisibilitystate: number,
        profilestate: number,
        personaname: string,
        commentpermission: number,
        profileurl: string,
        avatar: string,
        avatarmedium: string,
        avatarfull: string,
        avatarhash: string,
        lastlogoff: number,
        personastate: number,
        realname: string,
        primaryclanid: string,
        timecreated: number,
        personastateflags: number,
        loccountrycode: string,
        locstatecode: string
    },
    id: string,
    displayName: string,
    photos: Array<{ value: string }>
}

export default SteamStrategy