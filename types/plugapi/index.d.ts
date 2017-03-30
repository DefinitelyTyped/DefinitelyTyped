// Type definitions for plugapi 4.2
// Project: https://www.npmjs.com/package/plugapi
// Definitions by: Brice Theurillat <https://github.com/BNedry/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
declare namespace PlugAPI {
    interface PlugLogin {
        email: string;
        password: string;
    }

    interface Notification {
        action: string;
        id: number;
        timestamp: string;
        value: string;
    }

    interface RawChatMessage {
        cid: string;
        message: string;
        sub: number;
        uid: number;
        un: string;
    }

    interface Media {
        author: string;
        format: number;
        image: string;
        cid: string;
        duration: number;
        title: string;
        id: number;
    }

    interface Score {
        positive: number;
        listeners: number;
        grabs: number;
        negative: number;
        skipped: number;
    }

    interface LastPlay {
        dj: User.DJ;
        media: Media;
        score: Score;
    }

    interface FollowJoinData {
        r: number;
        un: string;
        id: string;
    }

    interface LogObject {
        log(): void;
    }

    namespace User {
        interface Default {
            username: string;
            language: string;
            avatarID: string;
        }

        interface Extended extends Default {
            status: number;
            fans: number;
            listenerPoints: number;
            id: string;
            curatorPoints: number;
            djPoints: number;
        }

        interface Update extends Extended {
            dateJoined: string;
        }

        interface Room extends Default {
            sub: number;
            level: number;
            joined: string;
            id: number;
            badge: string;
            role: number;
            gRole: number;
            slug: string;
        }

        interface User extends Room {
            silver: boolean;
            guest: boolean;
        }

        interface DJ extends Room {
            blurp: any;
            grab: boolean;
            status: number;
            vote: number;
        }

        interface Audience extends DJ {
            ignores: any[];
            notifications: Notification[];
            pp: number;
            pw: number;
            xp: number;
        }
    }

    namespace Enum {
        interface RoomRole {
            NONE: number;
            RESIDENTDJ: number;
            BOUNCER: number;
            MANAGER: number;
            COHOST: number;
            HOST: number;
        }

        interface GlobalRole {
            NONE: number;
            VOLUNTEER: number;
            AMBASSADOR: number;
            LEADER: number;
            ADMIN: number;
        }

        interface Status {
            OFFLINE: number;
            ONLINE: number;
        }

        interface Ban {
            HOUR: "h";
            DAY: "d";
            PERMA: "f";
        }

        interface BanReason {
            SPAMMING_TROLLING: number;
            VERBAL_ABUSE: number;
            OFFENSIVE_MEDIA: number;
            INAPPROPRIATE_GENRE: number;
            NEGATIVE_ATTITUDE: number;
        }

        interface Mute {
            SHORT: "s";
            MEDIUM: "m";
            LONG: "l";
        }

        interface MuteReason {
            VIOLATING_COMMUNITY_RULES: number;
            VERBAL_ABUSE: number;
            SPAMMING_TROLLING: number;
            OFFENSIVE_LANGUAGE: number;
            NEGATIVE_ATTITUDE: number;
        }

        interface Events {
            ADVANCE: "advance";
            BAN: "ban";
            BOOTH_LOCKED: "boothLocked";
            CHAT: "chat";
            CHAT_COMMAND: "command";
            CHAT_DELETE: "chatDelete";
            CHAT_LEVEL_UPDATE: "roomMinChatLevelUpdate";
            COMMAND: "command";
            DJ_LIST_CYCLE: "djListCycle";
            DJ_LIST_UPDATE: "djListUpdate";
            DJ_LIST_LOCKED: "djListLocked";
            EARN: "earn";
            FOLLOW_JOIN: "followJoin";
            FLOOD_CHAT: "floodChat";
            FRIEND_REQUEST: "friendRequest";
            GIFTED: "gifted";
            GRAB: "grab";
            KILL_SESSION: "killSession";
            MAINT_MODE: "plugMaintenance";
            MAINT_MODE_ALERT: "plugMaintenanceAlert";
            MODERATE_ADD_DJ: "modAddDJ";
            MODERATE_ADD_WAITLIST: "modAddWaitList";
            MODERATE_AMBASSADOR: "modAmbassador";
            MODERATE_BAN: "modBan";
            MODERATE_MOVE_DJ: "modMoveDJ";
            MODERATE_MUTE: "modMute";
            MODERATE_REMOVE_DJ: "modRemoveDJ";
            MODERATE_REMOVE_WAITLIST: "modRemoveWaitList";
            MODERATE_SKIP: "modSkip";
            MODERATE_STAFF: "modStaff";
            NOTIFY: "notify";
            PDJ_MESSAGE: "pdjMessage";
            PDJ_UPDATE: "pdjUpdate";
            PING: "ping";
            PLAYLIST_CYCLE: "playlistCycle";
            REQUEST_DURATION: "requestDuration";
            REQUEST_DURATION_RETRY: "requestDurationRetry";
            ROOM_CHANGE: "roomChanged";
            ROOM_DESCRIPTION_UPDATE: "roomDescriptionUpdate";
            ROOM_JOIN: "roomJoin";
            ROOM_NAME_UPDATE: "roomNameUpdate";
            ROOM_VOTE_SKIP: "roomVoteSkip";
            ROOM_WELCOME_UPDATE: "roomWelcomeUpdate";
            SESSION_CLOSE: "sessionClose";
            SKIP: "skip";
            STROBE_TOGGLE: "strobeToggle";
            USER_COUNTER_UPDATE: "userCounterUpdate";
            USER_FOLLOW: "userFollow";
            USER_JOIN: "userJoin";
            USER_LEAVE: "userLeave";
            USER_UPDATE: "userUpdate";
            VOTE: "vote";
        }
    }

    namespace Event {
        interface BoothCycle {
            moderator: string;
            cycle: boolean;
        }

        interface BoothLocked {
            m: string;
            c: boolean;
            ml: string;
            f: boolean;
        }

        interface Chat {
            raw: RawChatMessage;
            id: string;
            from: User.User;
            message: string;
            mentions: any[];
            muted: boolean;
            type: string;
        }

        interface ChatDelete {
            mi: number;
            chatID: string;
        }

        type Grab = number;

        interface Advance {
            media: Media;
            startTime: string;
            historyID: string;
            djs: User.DJ[];
            currentDJ: User.DJ;
            playlistID: number;
            lastPlay: LastPlay;
        }

        interface DJListUpdate {
            djs: User.DJ[];
            remove: string;
        }

        interface Emote {
            fromID: string;
            message: string;
            from: string;
            type: string;
            chatID: string;
        }

        interface FollowJoin {
            data: FollowJoinData;
            type: string;
        }

        interface ModAddDJ {
            moderator: string;
            username: string;
        }

        interface ModBan {
            moderator: string;
            username: string;
            duration: number;
            ref: string;
            reason: string;
        }

        interface ModMoveDJ {
            moderator: string;
            index: number;
            old: number;
            userID: string;
        }

        interface ModRemoveDJ {
            moderator: string;
            username: string;
            userID: string;
        }

        interface ModSkip {
            mi: number;
            m: string;
        }

        interface RoomMinChatLevelUpdate {
            level: number;
            id: number;
            user: User.User;
        }

        type RoomJoin = string;

        type UserJoin = User.User;

        type UserLeave = User.User;

        interface UserUpdate {
            username: string;
            status: number;
            fans: number;
            listenerPoints: number;
            dateJoined: string;
            language: string;
            avatarID: string;
            id: string;
            curatorPoints: number;
            djPoints: number;
        }

        interface Vote {
            i: number;
            v: number;
        }

        interface Command extends Event.Chat {
            command: string;
            args: string[];
            respond(...args: any[]): any;
            respondTimeout(...args: any[]): any;
            havePermission(...args: any[]): boolean;
            isFrom(...args: any[]): boolean;
        }
    }

    const ROOM_ROLE: Enum.RoomRole;
    const GLOBAL_ROLES: Enum.GlobalRole;
    const STATUS: Enum.Status;
    const BAN: Enum.Ban;
    const BAN_REASON: Enum.BanReason;
    const MUTE: Enum.Mute;
    const MUTE_REASON: Enum.MuteReason;
    const events: Enum.Events;
}

declare class PlugAPI {
    constructor(login: PlugAPI.PlugLogin, callback?: (error: Error, bot: PlugAPI) => void | ((bot: PlugAPI) => void));
    deleteAllChat: boolean;
    multiLine: boolean;
    multiLineLimit: number;

    connect(room: string): void;
    changeDJCycle(enabled: boolean, callback?: () => void): boolean;
    changeRoom(room: string, callback?: () => void): void;
    close(): void;
    getAdmins(): PlugAPI.User.Extended[];
    getAmbassadors(): PlugAPI.User.Extended[];
    getAudience(): PlugAPI.User.Audience[];
    getDJ(): PlugAPI.User.DJ;
    getDJs(): PlugAPI.User.DJ[];
    getHost(): PlugAPI.User.Extended;
    getMedia(): PlugAPI.Media;
    getRoomScore(): PlugAPI.Score;
    getSelf(): PlugAPI.User.Audience;
    getStaff(): PlugAPI.User.Extended[];
    getTimeElapsed(): number;
    getTimeRemaining(): number;
    getUser(userID: number): PlugAPI.User.DJ;
    getUsers(): PlugAPI.User.DJ[];
    getWaitList(): PlugAPI.User.Extended;
    getWaitListPosition(userID: number): number;
    havePermission(userID: number, permission: number, global?: boolean): boolean;
    joinBooth(callback?: () => void): boolean;
    leaveBooth(callback?: () => void): boolean;
    selfSkip(callback?: () => void): boolean;
    sendChat(msg: string, timeout?: number): void;
    setLogger(logObject: PlugAPI.LogObject): boolean;

    on(event: "boothCycle", callback: (data: PlugAPI.Event.BoothCycle) => void): void;
    on(event: "boothLocked", callback: (data: PlugAPI.Event.BoothLocked) => void): void;
    on(event: "chat", callback: (data: PlugAPI.Event.Chat) => void): void;
    on(event: "chatDelete", callback: (data: PlugAPI.Event.ChatDelete) => void): void;
    on(event: "grab", callback: (data: PlugAPI.Event.Grab) => void): void;
    on(event: "advance", callback: (data: PlugAPI.Event.Advance) => void): void;
    on(event: "djListUpdate", callback: (data: PlugAPI.Event.DJListUpdate) => void): void;
    on(event: "emote", callback: (data: PlugAPI.Event.Emote) => void): void;
    on(event: "followJoin", callback: (data: PlugAPI.Event.FollowJoin) => void): void;
    on(event: "modAddDJ", callback: (data: PlugAPI.Event.ModAddDJ) => void): void;
    on(event: "modBan", callback: (data: PlugAPI.Event.ModBan) => void): void;
    on(event: "modMoveDJ", callback: (data: PlugAPI.Event.ModMoveDJ) => void): void;
    on(event: "modRemoveDJ", callback: (data: PlugAPI.Event.ModRemoveDJ) => void): void;
    on(event: "modSkip", callback: (data: PlugAPI.Event.ModSkip) => void): void;
    on(event: "roomMinChatLevelUpdate", callback: (data: PlugAPI.Event.RoomMinChatLevelUpdate) => void): void;
    on(event: "roomJoin", callback: (data: PlugAPI.Event.RoomJoin) => void): void;
    on(event: "userJoin", callback: (data: PlugAPI.Event.UserJoin) => void): void;
    on(event: "userLeave", callback: (data: PlugAPI.Event.UserLeave) => void): void;
    on(event: "userUpdate", callback: (data: PlugAPI.Event.UserUpdate) => void): void;
    on(event: "vote", callback: (data: PlugAPI.Event.Vote) => void): void;
    on(event: "command", callback: (data: PlugAPI.Event.Command) => void): void;
    on(event: string, callback: (data: any) => void): void;
}

export = PlugAPI;
