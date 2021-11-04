// Type definitions for steamapi 2.2
// Project: https://github.com/xDimGG/node-steamapi
// Definitions by: Joshua Jeschek <https://github.com/joshuajeschek>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare class SteamAPI {
    /**
     * Sets Steam key for future use.
     * @param key - Steam key
     * @param [options={}] Optional options for caching and warnings `getGameDetails()`
     */
    constructor(key: string, options?: Options);

    /**
     * Get custom path that isn't in SteamAPI.
     * @param path Path to request e.g '/IPlayerService/GetOwnedGames/v1?steamid=76561198378422474'
     * @param [base=this.baseAPI] Base URL
     * @param [key=this.key] The key to use
     * @returns JSON Response
     */
    get(path: string, base?: string, key?: string): Record<string, unknown>;

    /**
     * Resolve info based on id, profile, or url.
     * Rejects promise if a profile couldn't be resolved.
     * @param info Something to resolve e.g 'https://steamcommunity.com/id/xDim'
     * @returns Profile ID
     */
    resolve(info: string): Promise<string>;

    /**
     * Get every single app on steam.
     * @returns Array of apps
     */
    getAppList(): Promise<App[]>;

    /**
     * Get featured categories on the steam store.
     * @returns Featured categories
     */
    getFeaturedCategories(): Promise<Array<Record<string, unknown>>>;

    /**
     * Get featured games on the steam store
     * @returns Featured games
     */
    getFeaturedGames(): Promise<Record<string, unknown>>;

    /**
     * Get achievements for app id.
     * @param app App ID
     * @returns App achievements for ID
     */
    getGameAchievements(app: string): Promise<Record<string, unknown>>;

    /**
     * Get details for app id.
     * <warn>Requests for this endpoint are limited to 200 every 5 minutes</warn>
     * @param app App ID
     * @param [force=false] Overwrite cache
     * @param [region=us] Store region
     * @returns App details for ID
     */
    getGameDetails(app: string, force?: boolean, region?: string): Promise<Record<string, unknown>>;

    /**
     * Get news for app id.
     * @param app App ID
     * @returns App news for ID
     */
    getGameNews(app: string): Promise<Array<Record<string, unknown>>>;

    /**
     * Get number of current players for app id.
     * @param app App ID
     * @returns Number of players
     */
    getGamePlayers(app: string): Promise<number>;

    /**
     * Get schema for app id.
     * @param app App ID
     * @returns Schema
     */
    getGameSchema(app: string): Promise<Record<string, unknown>>;

    /**
     * Get every server associated with host.
     * @param host Host to request
     * @returns Server info
     */
    getServers(host: string): Promise<Server[]>;

    /**
     * Get users achievements for app id.
     * @param id User ID
     * @param app App ID
     * @returns Achievements
     */
    getUserAchievements(id: string, app: string): Promise<PlayerAchievements>;

    /**
     * Get users badges.
     * @param id User ID
     * @returns Badges
     */
    getUserBadges(id: string): Promise<PlayerBadges>;

    /**
     * Get users bans.
     * @param id User ID(s)
     * @returns Ban info
     */
    getUserBans(id: string): Promise<PlayerBans | PlayerBans[]>;

    /**
     * Get users friends.
     * @param id User ID
     * @returns Friends
     */
    getUserFriends(id: string): Promise<Friend[]>;

    /**
     * Get users groups.
     * @param id User ID
     * @returns Groups
     */
    getUserGroups(id: string): Promise<string[]>;

    /**
     * Get users level.
     * @param id User ID
     * @returns Level
     */
    getUserLevel(id: string): Promise<number>;

    /**
     * Get users owned games.
     * @param id User ID
     * @returns Owned games
     */
    getUserOwnedGames(id: string): Promise<Game[]>;

    /**
     * Get users recent games.
     * @param id User ID
     * @returns Recent games
     */
    getUserRecentGames(id: string): Promise<RecentGame[]>;

    /**
     * Gets servers on steamcommunity.com/dev/managegameservers using your key or provided key.
     * @param [hide=false] Hide deleted/expired servers
     * @param [key=this.key] Key
     * @returns Servers
     */
    getUserServers(hide?: boolean, key?: string): Promise<PlayerServers>;

    /**
     * Get users stats for app id.
     * @param id User ID
     * @param app App ID
     * @returns Stats for app id
     */
    getUserStats(id: string, app: string): Promise<PlayerStats>;

    /**
     * Get users summary.
     * @param id User ID
     * @returns Summary
     */
    getUserSummary(id: string): Promise<PlayerSummary>;
}

interface Options {
    enabled?: boolean;
    expires?: number;
    disableWarnings?: boolean;
}

interface App {
    appid: number;
    name: string;
}

interface Avatar {
    small: string;
    medium: string;
    large: string;
}

declare class PlayerSummary extends Player {
    constructor(player: Record<string, unknown>);
    avatar: Avatar;
    steamID: string;
    url: string;
    created: number;
    lastLogOff: number;
    nickname: string;
    realName: string;
    primaryGroupID: string;
    personaState: number;
    personaStateFlags: number;
    commentPermission: number;
    visibilityState: number;
    countryCode: any;
    stateCode: any;
    cityID: any;
    gameServerIP: string;
    gameServerSteamID: any;
    gameExtraInfo: any;
    gameID: any;
}

declare class PlayerStats {
    constructor(player: Record<string, unknown>);
    steamID: string;
    game: string;
    stats: Record<string, unknown>;
    achievements: Record<string, unknown>;
}

declare class GameServer {
    constructor(server: Record<string, unknown>);
    appID: number;
    actor: string;
    memo: any;
    token: string;
    deleted: boolean;
    expired: boolean;
    lastLoginTime: number;

    get usable(): boolean;
    get lastLoginAt(): Date;
}

declare class PlayerServers extends Player {
    constructor(player: Record<string, unknown>, hide: boolean);
    steamID: string;
    banned: false;
    expires: number;
    lastActionTime: number;
    servers: GameServer[];
}

declare class RecentGame extends Game {
    constructor(game: Record<string, unknown>);
}

declare class Game {
    constructor(game: Record<string, unknown>);
    name: string;
    appID: number;
    playTime: number;
    playTime2: number;
    logoURL: string;
    iconURL: string;
}

declare class Friend extends Player {
    constructor(friend: Record<string, unknown>);
    steamID: string;
    relationship: number;
    friendSince: number;

    get friendedAt(): Date;
}

declare class PlayerBans {
    constructor(player: Record<string, unknown>);
    steamID: string;
    communityBanned: boolean;
    vacBanned: boolean;
    daysSinceLastBan: number;
    economyBan: string;
    vacBans: number;
    gameBans: number;

    get lastBan(): Date;
}

declare class PlayerBadges {
    constructor(player: Record<string, unknown>);
    badges: Badge[];
    playerXP: number;
    playerLevel: number;
    playerNextLevelXP: number;
    playerCurrentLevelXP: number;
}

declare class Badge {
    constructor(badge: Record<string, unknown>);
    appID: number;
    badgeID: number;
    borderColor: number;
    communityItemID: string;
    completionTime: number;
    leve: number;
    scarcity: number;
    xp: number;
}

declare class Server {
    constructor(server: Record<string, unknown>);
    address: string;
    appID: number;
    game: string;
    gmsindex: number;
    lan: boolean;
    port: number;
    region: number;
    secure: boolean;
    specPort: number;
}

declare class Player {
    get profileUrl(): string;
}

declare class Achievement {
    constructor(achievement: Record<string, unknown>);
    api: string;
    name: string;
    description: string;
    achievend: boolean;
    unlockTime: number;

    get unlockedAt(): Date;
}

declare class PlayerAchievements extends Player {
    constructor(player: Record<string, unknown>);
    steamID: string;
    gameName: string;
    achievements: Achievement[];
}

export = SteamAPI;
