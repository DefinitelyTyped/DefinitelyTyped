declare class SteamAPI {
    /**
     * Sets Steam key for future use.
     * @param key - Steam key
     * @param [options={}] Optional options for caching and warnings `getGameDetails()`
     */
    constructor(key: string, options?: SteamAPI.Options);

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
    getAppList(): Promise<SteamAPI.App[]>;

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
    getServers(host: string): Promise<SteamAPI.Server[]>;

    /**
     * Get users achievements for app id.
     * @param id User ID
     * @param app App ID
     * @returns Achievements
     */
    getUserAchievements(id: string, app: string): Promise<SteamAPI.PlayerAchievements>;

    /**
     * Get users badges.
     * @param id User ID
     * @returns Badges
     */
    getUserBadges(id: string): Promise<SteamAPI.PlayerBadges>;

    /**
     * Get users bans.
     * @param id User IDs
     * @returns Ban info
     */
    getUserBans(id: string[]): Promise<SteamAPI.PlayerBans[]>;

    /**
     * Get users bans.
     * @param id User ID
     * @returns Ban info
     */
    getUserBans(id: string): Promise<SteamAPI.PlayerBans>;

    /**
     * Get users friends.
     * @param id User ID
     * @returns Friends
     */
    getUserFriends(id: string): Promise<SteamAPI.Friend[]>;

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
    getUserOwnedGames(id: string): Promise<SteamAPI.Game[]>;

    /**
     * Get users recent games.
     * @param id User ID
     * @returns Recent games
     */
    getUserRecentGames(id: string): Promise<SteamAPI.RecentGame[]>;

    /**
     * Gets servers on steamcommunity.com/dev/managegameservers using your key or provided key.
     * @param [hide=false] Hide deleted/expired servers
     * @param [key=this.key] Key
     * @returns Servers
     */
    getUserServers(hide?: boolean, key?: string): Promise<SteamAPI.PlayerServers>;

    /**
     * Get users stats for app id.
     * @param id User ID
     * @param app App ID
     * @returns Stats for app id
     */
    getUserStats(id: string, app: string): Promise<SteamAPI.PlayerStats>;

    /**
     * Get users summary.
     * @param id User IDs
     * @returns Summary
     */
    getUserSummary(id: string[]): Promise<SteamAPI.PlayerSummary[]>;

    /**
     * Get users summary.
     * @param id User IDs
     * @returns Summary
     */
    getUserSummary(id: string): Promise<SteamAPI.PlayerSummary>;
}

declare namespace SteamAPI {
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

    interface PlayerSummary extends Player {
        avatar: Avatar;
        steamID: string;
        url: string;
        created?: number;
        lastLogOff?: number;
        nickname: string;
        realName?: string;
        primaryGroupID?: string;
        personaState: number;
        personaStateFlags?: number;
        commentPermission?: number;
        visibilityState: number;
        countryCode?: string;
        stateCode?: string;
        cityID?: number;
        gameServerIP?: string;
        gameServerSteamID?: string;
        gameExtraInfo?: string;
        gameID?: string;

        /**
         *  Date when this player's account was created.
         */
        readonly createdAt: Date;

        /**
         * Date when this player last logged off.
         */
        readonly lastLogOffAt: Date;
    }

    interface PlayerStats {
        steamID: string;
        game: string;
        stats: Record<string, unknown>;
        achievements: Record<string, unknown>;
    }

    interface GameServer {
        appID: number;
        actor: string;
        memo: string;
        token: string;
        deleted: boolean;
        expired: boolean;
        lastLoginTime: number;

        /**
         * Whether or not this token is usable.
         */
        readonly usable: boolean;

        /**
         * Date the last time this token was used.
         */
        readonly lastLoginAt: Date;
    }

    interface PlayerServers extends Player {
        steamID: string;
        banned: false;
        expires: number;
        lastActionTime: number;
        servers: GameServer[];

        /**
         * Date when this expires.
         */
        readonly expiresAt: Date;

        /**
         * Date when the last action was executed.
         */
        readonly lastActionAt: Date;
    }

    type RecentGame = Game;

    interface Game {
        name: string;
        appID: number;
        playTime: number;
        playTime2: number;
        logoURL: string;
        iconURL: string;
    }

    interface Friend extends Player {
        steamID: string;
        relationship: number;
        friendSince: number;

        /**
         * Date when this person was friended.
         */
        readonly friendedAt: Date;
    }

    interface PlayerBans {
        steamID: string;
        communityBanned: boolean;
        vacBanned: boolean;
        daysSinceLastBan: number;
        economyBan: string;
        vacBans: number;
        gameBans: number;

        /**
         * Date when the last ban occurred.
         */
        readonly lastBan: Date;
    }

    interface PlayerBadges {
        badges: Badge[];
        playerXP: number;
        playerLevel: number;
        playerNextLevelXP: number;
        playerCurrentLevelXP: number;
    }

    interface Badge {
        appID: number;
        badgeID: number;
        borderColor: number;
        communityItemID: string;
        completionTime: number;
        leve: number;
        scarcity: number;
        xp: number;

        /**
         * Date when this badge was completed.
         */
        readonly completedAt: Date;
    }

    interface Server {
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

    interface Player {
        /**
         * The permalink to this players profile.
         */
        readonly profileUrl: string;
    }

    interface Achievement {
        api: string;
        name: string;
        description: string;
        achieved: boolean;
        unlockTime: number;

        /**
         * Date when this achievement was unlocked at.
         */
        readonly unlockedAt: Date;
    }

    interface PlayerAchievements extends Player {
        steamID: string;
        gameName: string;
        achievements: Achievement[];
    }
}

export = SteamAPI;
