// Type definitions for steamapi 2.1
// Project: https://github.com/xDimGG/node-steamapi
// Definitions by: vanitasboi <https://github.com/vanitasboi>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare class SteamAPI {
        constructor(key: string, options?: Options);
        get(path: string, base?: string, key?: string): Record<string, unknown>;
        resolve(info: string): Promise<string>;
        getAppList(): Promise<App[]>;
        getFeaturedCategories(): Promise<Array<Record<string, unknown>>>;
        getFeaturedGames(): Promise<Record<string, unknown>>;
        getGameAchievements(app: string): Promise<Record<string, unknown>>;
        getGameDetails(app: string, force?: boolean, region?: string): Promise<Record<string, unknown>>;
        getGameNews(app: string): Promise<Array<Record<string, unknown>>>;
        getGamePlayers(app: string): Promise<number>;
        getGameSchema(app: string): Promise<Record<string, unknown>>;
        getServers(host: string): Promise<Server[]>;
        getUserAchievements(id: string, app: string): Promise<PlayerAchievements>;
        getUserBadges(id: string): Promise<PlayerBadges>;
        getUserBans(id: string): Promise<PlayerBans|PlayerBans[]>;
        getUserFriends(id: string): Promise<Friend[]>;
        getUserGroups(id: string): Promise<string[]>;
        getUserLevel(id: string): Promise<number>;
        getUserOwnedGames(id: string): Promise<Game[]>;
        getUserRecentGames(id: string): Promise<RecentGame[]>;
        getUserServers(hide?: boolean, key?: string): Promise<PlayerServers>;
        getUserStats(id: string, app: string): Promise<PlayerStats>;
        getUserSummary(id: string): Promise<PlayerSummary>;
}

interface Options {
    enabled: boolean;
    expires: number;
    disableWarnings: boolean;
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
