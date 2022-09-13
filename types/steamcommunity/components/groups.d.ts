import SteamID = require('steamid');
import { gid, Callback, cid } from '../index';

export interface Groups {
    getGroupMembers(gid: gid, callback: Callback, members: any[], link: string, addresses: any[], addressIdx: number): any;

    getGroupMembersEx(gid: gid, addresses: any[], callback: Callback): void;

    joinGroup(gid: gid, callback: Callback): void;

    leaveGroup(gid: gid, callback: Callback): void;

    getAllGroupAnnouncements(gid: gid, time: Date, callback: Callback): any;

    postGroupAnnouncement(gid: gid, headline: string, content: string, hidden: boolean, callback: Callback): void;

    editGroupAnnouncement(gid: gid, aid: any, headline: string, content: string, callback: Callback): void;

    deleteGroupAnnouncement(gid: gid, aid: any, callback: Callback): void;

    scheduleGroupEvent(gid: gid, name: any, type: any, description: string, time: Date, server: any, callback: Callback): void;

    editGroupEvent(gid: gid, id: any, name: string, type: any, description: string, time: Date, server: any, callback: Callback): void;

    deleteGroupEvent(gid: gid, id: any, callback: Callback): void;

    setGroupPlayerOfTheWeek(gid: gid, steamID: SteamID | string, callback: Callback): void;

    kickGroupMember(gid: gid, steamID: SteamID | string, callback: Callback): void;

    getGroupHistory(gid: gid, page: number, callback: Callback): void;

    getAllGroupComments(gid: gid, from: number, count: number, callback: Callback): void;

    deleteGroupComment(gid: gid, cid: cid, callback: Callback): void;

    postGroupComment(gid: gid, message: string, callback: Callback): void;

    /**
     * Get requests to join a restricted group.
     * @param gid - The SteamID of the group you want to manage
     * @param callback - First argument is null/Error, second is array of SteamID objects
     */
    getGroupJoinRequests(gid: gid, callback: Callback): void;

    /**
     * Respond to one or more join requests to a restricted group.
     * @param gid - The SteamID of the group you want to manage
     * @param steamIDs - The SteamIDs of the users you want to approve or deny membership for (or a single value)
     * @param approve - True to put them in the group, false to deny their membership
     * @param callback - Takes only an Error object/null as the first argument
     */
    respondToGroupJoinRequests(gid: gid, steamIDs: SteamID | string | SteamID[] | string[], approve: boolean, callback: Callback): void;

    /**
     * Respond to *ALL* pending group-join requests for a particular group.
     * @param gid - The SteamID of the group you want to manage
     * @param approve - True to allow everyone who requested into the group, false to not
     * @param callback - Takes only an Error object/null as the first argument
     */
    respondToAllGroupJoinRequests(gid: gid, approve: boolean, callback: Callback): void;
}
