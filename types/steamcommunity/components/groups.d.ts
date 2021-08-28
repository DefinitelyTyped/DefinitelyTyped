import SteamID = require('steamid');
import { gid, Callback } from '../index';

export interface Groups {
    getGroupMembers(gid: gid, callback: Callback, members: any, link: any, addresses: any, addressIdx: any): any;

    getGroupMembersEx(gid: gid, addresses: any, callback: Callback): void;

    joinGroup(gid: gid, callback: Callback): void;

    leaveGroup(gid: gid, callback: Callback): void;

    getAllGroupAnnouncements(gid: gid, time: any, callback: Callback): any;

    postGroupAnnouncement(gid: gid, headline: any, content: any, hidden: any, callback: Callback): void;

    editGroupAnnouncement(gid: gid, aid: any, headline: any, content: any, callback: Callback): void;

    deleteGroupAnnouncement(gid: gid, aid: any, callback: Callback): void;

    scheduleGroupEvent(gid: gid, name: any, type: any, description: any, time: any, server: any, callback: Callback): void;

    editGroupEvent(gid: gid, id: any, name: any, type: any, description: any, time: any, server: any, callback: Callback): void;

    deleteGroupEvent(gid: gid, id: any, callback: Callback): void;

    setGroupPlayerOfTheWeek(gid: gid, steamID: any, callback: Callback): void;

    kickGroupMember(gid: gid, steamID: any, callback: Callback): void;

    getGroupHistory(gid: gid, page: any, callback: Callback): void;

    getAllGroupComments(gid: gid, from: any, count: any, callback: Callback): void;

    deleteGroupComment(gid: gid, cid: any, callback: Callback): void;

    postGroupComment(gid: gid, message: any, callback: Callback): void;

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
