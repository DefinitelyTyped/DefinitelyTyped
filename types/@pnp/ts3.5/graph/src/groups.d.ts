import { GraphQueryableInstance, GraphQueryableCollection } from "./graphqueryable";
import { Members, Owners } from "./members";
import { TypedHash } from "@pnp/common";
import { Calendar, Events } from "./calendars";
import { Conversations, Senders } from "./conversations";
import { Event as IEvent, Group as IGroup } from "@microsoft/microsoft-graph-types";
import { Plans } from "./planner";
import { Photo } from "./photos";
import { Team } from "./teams";
import { TeamProperties } from "./types";
export declare enum GroupType {
    /**
     * Office 365 (aka unified group)
     */
    Office365 = 0,
    /**
     * Dynamic membership
     */
    Dynamic = 1,
    /**
     * Security
     */
    Security = 2
}
/**
 * Describes a collection of Field objects
 *
 */
export declare class Groups extends GraphQueryableCollection<IGroup[]> {
    /**
     * Gets a group from the collection using the specified id
     *
     * @param id Id of the group to get from this collection
     */
    getById(id: string): Group;
    /**
     * Create a new group as specified in the request body.
     *
     * @param name Name to display in the address book for the group
     * @param mailNickname Mail alias for the group
     * @param groupType Type of group being created
     * @param additionalProperties A plain object collection of additional properties you want to set on the new group
     */
    add(name: string, mailNickname: string, groupType: GroupType, additionalProperties?: TypedHash<any>): Promise<GroupAddResult>;
}
/**
 * Represents a group entity
 */
export declare class Group extends GraphQueryableInstance<IGroup> {
    /**
     * The calendar associated with this group
     */
    readonly calendar: Calendar;
    /**
     * Retrieve a list of event objects
     */
    readonly events: Events;
    /**
     * Gets the collection of owners for this group
     */
    readonly owners: Owners;
    /**
     * The collection of plans for this group
     */
    readonly plans: Plans;
    /**
     * Gets the collection of members for this group
     */
    readonly members: Members;
    /**
     * Gets the conversations collection for this group
     */
    readonly conversations: Conversations;
    /**
     * Gets the collection of accepted senders for this group
     */
    readonly acceptedSenders: Senders;
    /**
     * Gets the collection of rejected senders for this group
     */
    readonly rejectedSenders: Senders;
    /**
     * The photo associated with the group
     */
    readonly photo: Photo;
    /**
     * Gets the team associated with this group, if it exists
     */
    readonly team: Team;
    /**
     * Add the group to the list of the current user's favorite groups. Supported for only Office 365 groups
     */
    addFavorite(): Promise<void>;
    /**
     * Creates a Microsoft Team associated with this group
     *
     * @param properties Initial properties for the new Team
     */
    createTeam(properties: TeamProperties): Promise<any>;
    /**
     * Returns all the groups and directory roles that the specified group is a member of. The check is transitive
     *
     * @param securityEnabledOnly
     */
    getMemberObjects(securityEnabledOnly?: boolean): Promise<{
        value: string[];
    }>;
    /**
     * Return all the groups that the specified group is a member of. The check is transitive
     *
     * @param securityEnabledOnly
     */
    getMemberGroups(securityEnabledOnly?: boolean): Promise<{
        value: string[];
    }>;
    /**
     * Check for membership in a specified list of groups, and returns from that list those groups of which the specified user, group, or directory object is a member.
     * This function is transitive.
     * @param groupIds A collection that contains the object IDs of the groups in which to check membership. Up to 20 groups may be specified.
     */
    checkMemberGroups(groupIds: String[]): Promise<{
        value: string[];
    }>;
    /**
     * Deletes this group
     */
    delete(): Promise<void>;
    /**
     * Update the properties of a group object
     *
     * @param properties Set of properties of this group to update
     */
    update(properties: IGroup): Promise<void>;
    /**
     * Remove the group from the list of the current user's favorite groups. Supported for only Office 365 groups
     */
    removeFavorite(): Promise<void>;
    /**
     * Reset the unseenCount of all the posts that the current user has not seen since their last visit
     */
    resetUnseenCount(): Promise<void>;
    /**
     * Calling this method will enable the current user to receive email notifications for this group,
     * about new posts, events, and files in that group. Supported for only Office 365 groups
     */
    subscribeByMail(): Promise<void>;
    /**
     * Calling this method will prevent the current user from receiving email notifications for this group
     * about new posts, events, and files in that group. Supported for only Office 365 groups
     */
    unsubscribeByMail(): Promise<void>;
    /**
     * Get the occurrences, exceptions, and single instances of events in a calendar view defined by a time range, from the default calendar of a group
     *
     * @param start Start date and time of the time range
     * @param end End date and time of the time range
     */
    getCalendarView(start: Date, end: Date): Promise<IEvent[]>;
}
export interface GroupAddResult {
    group: Group;
    data: any;
}
