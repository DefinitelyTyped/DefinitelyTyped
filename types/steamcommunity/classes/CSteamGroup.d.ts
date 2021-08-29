import { Announcement, appid, Callback, CallbackError, cid, GroupComment, GroupEventType, GroupHistory } from '../index';
import SteamID = require('steamid');

export = CSteamGroup;

declare function CSteamGroup(community: any, groupData: any): void;

/**
 * A class which stands for a Steam group. This class cannot be instantiated directly; it must be received from a call to getSteamGroup.
 */
declare class CSteamGroup {
    constructor(community: any, groupData: any);

    /** A SteamID object containing the group's SteamID. Visit a group at {@link https://steamcommunity.com/gid/SteamID}. */
    steamID: SteamID;
    /** The group's name (cannot be changed). */
    name: string;
    /** The group's URL (this can be changed). Visit a group at {@link https://steamcommunity.com/groups/GROUPURL}. */
    url: string;
    /** The group's headline (this can be changed). */
    headline: string;
    /** The group's summary content (this can be changed). */
    summary: string;
    /** The hash of the group's avatar. */
    avatarHash: string;
    /** How many members the group had when getSteamGroup was called. */
    members: number;
    /** How many group members were in group chat when getSteamGroup was called. */
    membersInChat: number;
    /** How many group members were in-game when getSteamGroup was called. */
    membersInGame: number;
    /** How many group members were online on Steam when getSteamGroup was called. */
    membersOnline: number;

    /**
     * Returns a URL where you can download this group's avatar.
     *
     * @param size What size to get the avatar at. Possible values are full, medium, or empty (small). Default empty.
     * @param protocol The protocol to use. Possible values for protocol are http://, https://, or // (protocol aware). Default http://.
     * @returns string
     */
    getAvatarURL(size: string, protocol: 'http://' | 'https://' | string): string;

    /**
     * Retrieves a list of all users in this group. For large groups this could take around 30 seconds, possibly longer.
     *
     * @param addresses Optional. An array of IP addresses (in x.x.x.x format) that will be rotated between when paging through the results. See below for details.
     * @param callback Called when the member list is available.
     */
    getMembers(addresses: string[], callback: (
        err: CallbackError,
        memebers: SteamID[],
    ) => any): void;

    /**
     * Joins a group. If the group is restricted, requests to join.
     *
     * @param callback Called when the request completes.
     */
    join(callback: Callback): void;

    /**
     * Leaves a group.
     *
     * @param callback Called when the request completes.
     */
    leave(callback: Callback): void;

    /**
     * Gets all announcements posted to the group.
     *
     * @param time Optional. A Date object. If specified, only announcements posted after this time are returned.
     * @param callback Called when requested data is available.
     */
    getAllAnnouncements(time: Date | null, callback: (
        err: CallbackError,
        /** An array of announcement objects. */
        announcements: Announcement[],
    ) => any): void;

    /**
     * Posts an announcement to a group, provided you have permission to do so.
     *
     * @param headline The title of the announcement.
     * @param content What the announcement says.
     * @param hidden Optional. `true` to post this as a hidden announcement. Default `false`.
     * @param callback Called when the request completes.
     */
    postAnnouncement(headline: any, content: any, hidden: boolean, callback: Callback): void;

    /**
     * Edits an announcement in the group.
     *
     * @param annoucementID The ID of the announcement, as a string.
     * @param headline The new title for the announcement.
     * @param content The new content for the announcement.
     * @param callback Optional. Called when the request completes.
     */
    editAnnouncement(annoucementID: string, headline: string, content: string, callback?: Callback): void;

    /**
     * Deletes an announcement in the group.
     *
     * @param annoucementID The ID of the announcement, as a string.
     * @param callback Optional. Called when the request completes.
     */
    deleteAnnouncement(annoucementID: string, callback?: Callback): void;

    /**
     * Schedules a new event for the group. type can be one of the strings shown below, or an AppID to schedule a game-specific event.
     *
     * @param name The event's name/headline.
     * @param type Can be {@link SteamCommunity.GroupEventType}, or an `AppID` to schedule a game-specific event.
     * @param description A description for the event.
     * @param time `null` to start it immediately, otherwise a Date object representing a time in the future.
     * @param server If this is a game event (see below), this can be a string containing the game server's IP address or an object containing ip and password properties.
     * If not a game event, this should be null or undefined.
     * @param callback Called when the request completes.
     */
    scheduleEvent(name: string, type: GroupEventType | appid, description: string, time: null | Date, server: string | object, callback: Callback): void;

    /**
     * Edits an existing Steam group event. Parameters are identical to those in scheduleEvent.
     *
     * @param id The 64-bit numeric ID of the event you want to edit (as a string).
     * @param name The event's name/headline.
     * @param type See the docs {@link https://github.com/DoctorMcKay/node-steamcommunity/wiki/CSteamGroup#scheduleeventname-type-description-time-server-callback}.
     * @param description A description for the event.
     * @param time `null` to start it immediately, otherwise a Date object representing a time in the future.
     * @param server If this is a game event (see below), this can be a string containing the game server's IP address or an object containing ip and password properties.
     * If not a game event, this should be null or undefined.
     * @param callback Called when the request completes
     */
    editEvent(id: string, name: string, type: GroupEventType | string, description: string, time: null | Date, server: string | object, callback: Callback): void;

    /**
     * Deletes an existing Steam group event.
     *
     * @param id The 64-bit numeric ID of the event you want to delete (as a string).
     * @param callback Optional. Called when the request completes.
     */
    deleteEvent(id: string, callback?: Callback): void;

    /**
     * Changes the group's current Player of the Week.
     *
     * @param steamID A `SteamID` object representing the group's new Player of the Week.
     * @param callback Called when the request completes.
     */
    setPlayerOfTheWeek(steamID: SteamID, callback: (
        /** null on success, an Error object on failure. */
        err: CallbackError,
        /** A SteamID representing the former Player of the Week. */
        oldPOTW: SteamID,
        /** A SteamID representing the new Player of the Week. */
        newPOTW: SteamID,
    ) => any): void;

    /**
     * Kicks a player from the group.
     *
     * @param steamID A `SteamID` object representing the player to kick from the group.
     * @param callback Called when the request completes.
     */
    kick(steamID: SteamID, callback: Callback): void;

    /**
     * Requests a page of group history (visible at {@link https://steamcommunity.com/groups/yourgroup/history}).
     *
     * @param page The page of history that you're requesting, starting at 1.
     * @param callback
     */
    getHistory(page: any, callback: (
        err: CallbackError,
        history: GroupHistory,
    ) => any): void;

    /**
     * Gets a listing of comments in a Steam group.
     *
     * @param from The offset where you want to start. 0 to start with the first (most recent) comment.
     * @param count The number of comments you want to retrieve.
     * @param callback Called when the request completes.
     */
    getAllComments(from: number, count: number, callback: (
        err: CallbackError,
        /** An array of comments. */
        comments: GroupComment[],
    ) => any): void;

    /**
     * Deletes a comment in a Steam group, provided you have permission to do so (i.e. are the author or a group moderator/admin with the appropriate permission).
     *
     * @param cid The ID of the comment you want to delete.
     * @param callback Optional. Called when the request completes.
     */
    deleteComment(cid: cid, callback?: Callback): void;

    /**
     * @param message
     * @param callback Called when the request completes.
     */
    comment(message: string, callback: Callback): void;

    /**
     * Get requests to join this restricted group.
     *
     * @param callback - First argument is null/Error, second is array of SteamID objects
     */
    getJoinRequests(callback: Callback): void;

    /**
     * Respond to one or more join requests to this restricted group.
     *
     * @param steamIDs - The SteamIDs of the users you want to approve or deny membership for (or a single value)
     * @param approve - True to put them in the group, false to deny their membership
     * @param callback - Takes only an Error object/null as the first argument
     */
    respondToJoinRequests(steamIDs: SteamID | string | SteamID[] | string[], approve: boolean, callback: Callback): void;

    /**
     * Respond to *ALL* pending group-join requests for this group.
     *
     * @param approve - True to allow everyone who requested into the group, false to not
     * @param callback - Takes only an Error object/null as the first argument
     */
    respondToAllJoinRequests(approve: boolean, callback: Callback): void;
}
