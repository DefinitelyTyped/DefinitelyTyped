import { GraphQueryableInstance, GraphQueryableCollection } from "./graphqueryable";
import { Contacts, ContactFolders } from "./contacts";
import { OneNoteMethods } from "./onenote";
import { Drive, Drives } from "./onedrive";
import { Tasks } from "./planner";
import { Teams } from "./teams";
import { User as IUser, Message as IMessage } from "@microsoft/microsoft-graph-types";
import { Messages, MailboxSettings, MailFolders } from "./messages";
import { DirectoryObjects } from "./directoryobjects";
import { People } from "./people";
import { Photo } from "./photos";
import { Calendar } from "./calendars";
import { InsightsMethods } from "./insights";
/**
 * Describes a collection of Users objects
 *
 */
export declare class Users extends GraphQueryableCollection<IUser[]> {
    /**
     * Gets a user from the collection using the specified id
     *
     * @param id Id of the user to get from this collection
     */
    getById(id: string): User;
}
/**
 * Represents a user entity
 */
export declare class User extends GraphQueryableInstance<IUser> {
    /**
    * The onenote associated with me
    */
    readonly onenote: OneNoteMethods;
    /**
    * The Contacts associated with the user
    */
    readonly contacts: Contacts;
    /**
     * The calendar associated with the user
     */
    readonly calendar: Calendar;
    /**
    * The photo associated with the user
    */
    readonly photo: Photo;
    /**
    * The Teams associated with the user
    */
    readonly joinedTeams: Teams;
    /**
    * The groups and directory roles associated with the user
    */
    readonly memberOf: DirectoryObjects;
    /**
     * Returns all the groups and directory roles that the specified useris a member of. The check is transitive
     *
     * @param securityEnabledOnly
     */
    getMemberObjects(securityEnabledOnly?: boolean): Promise<{
        value: string[];
    }>;
    /**
     * Return all the groups that the specified user is a member of. The check is transitive
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
    * The Contact Folders associated with the user
    */
    readonly contactFolders: ContactFolders;
    /**
    * The default Drive associated with the user
    */
    readonly drive: Drive;
    /**
    * The Drives the user has available
    */
    readonly drives: Drives;
    /**
    * The Tasks the user has available
    */
    readonly tasks: Tasks;
    /**
     * Get the messages in the signed-in user's mailbox
     */
    readonly messages: Messages;
    /**
     * Get the MailboxSettings in the signed-in user's mailbox
     */
    readonly mailboxSettings: MailboxSettings;
    /**
     * Get the MailboxSettings in the signed-in user's mailbox
     */
    readonly mailFolders: MailFolders;
    /**
     * Updates this user
     *
     * @param properties Properties used to update this user
     */
    update(properties: IUser): Promise<void>;
    /**
     * Deletes this user
     */
    delete(): Promise<void>;
    /**
     * Send the message specified in the request body. The message is saved in the Sent Items folder by default.
     *
     * @param message The message details to send
     * @param saveToSentItems If true the message will be saved to sent items. Default: false
     */
    sendMail(message: IMessage, saveToSentItems?: boolean): Promise<void>;
    /**
    * People ordered by their relevance to the user
    */
    readonly people: People;
    /**
    * People that have direct reports to the user
    */
    readonly directReports: People;
    /**
    * The Insights associated with this user
    */
    readonly insights: InsightsMethods;
    /**
    * The manager associated with this user
    */
    readonly manager: User;
}
