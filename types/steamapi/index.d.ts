// Type definitions for steamapi 2.1
// Project: https://github.com/xDimGG/node-steamapi
// Definitions by: vanitasboi <https://github.com/vanitasboi>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export default class SteamAPI {
        constructor(key: string, options?: ConstructorOptions);
        get(path: string, base?: string, key?: string): object;
        resolve(info: string): Promise<string>;
        getAppList(): Promise<App[]>;
        getFeaturedCategories(): Promise<object[]>;
        getFeaturedGames(): Promise<object>;
        getGameAchievements(app: string): Promise<object>;
        getGameDetails(app: string, force?: boolean): Promise<object>;
        getGameNews(app: string): Promise<object[]>;
        getGamePlayers(app: string): Promise<number>;
        getGameSchema(app: string): Promise<object>;
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

export interface ConstructorOptions {
    enabled: boolean;
    expires: number;
    disableWarnings: boolean;
}

export interface App {
    appid: number;
    name: string;
}

export interface Avatar {
    small: string;
    medium: string;
    large: string;
}

export class PlayerSummary extends Player {
    constructor(player: object);
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

export class PlayerStats {
    constructor(player: object);
    steamID: string;
    game: string;
    stats: object;
    achievements: object;
}

export class GameServer {
    constructor(server: object);
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

export class PlayerServers extends Player {
    constructor(player: object, hide: boolean);
    steamID: string;
    banned: false;
    expires: number;
    lastActionTime: number;
    servers: GameServer[];
}

export class RecentGame extends Game {
    constructor(game: object);
}

export class Game {
    constructor(game: object);
    name: string;
    appID: number;
    playTime: number;
    playTime2: number;
    logoURL: string;
    iconURL: string;
}

export class Friend extends Player {
    constructor(friend: object);
    steamID: string;
    relationship: number;
    friendSince: number;

    get friendedAt(): Date;
}

export class PlayerBans {
    constructor(player: object);
    steamID: string;
    communityBanned: boolean;
    vacBanned: boolean;
    daysSinceLastBan: number;
    economyBan: string;
    vacBans: number;
    gameBans: number;

    get lastBan(): Date;
}

export class PlayerBadges {
    constructor(player: object);
    badges: Badge[];
    playerXP: number;
    playerLevel: number;
    playerNextLevelXP: number;
    playerCurrentLevelXP: number;
}

export class Badge {
    constructor(badge: object);
    appID: number;
    badgeID: number;
    borderColor: number;
    communityItemID: string;
    completionTime: number;
    leve: number;
    scarcity: number;
    xp: number;
}

export class Server {
	constructor(server: object);
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

export class Player {
    get profileUrl(): string;
}

export class Achievement {
    constructor(achievement: object);
    api: string;
    name: string;
    description: string;
    achievend: boolean;
    unlockTime: number;

    get unlockedAt(): Date;
}

export class PlayerAchievements extends Player {
    constructor(player: object);
    steamID: string;
    gameName: string;
    achievements: Achievement[];
}
