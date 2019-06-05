import Abstract = require('./Abstract');
import TeamSpeak3 = require('../TeamSpeak3');

/**
 * the response of the clientlist command for a single client
 */
interface ClientListResponse {
    clid: number;
    client_database_id: number;
    client_type: number;
    client_unique_identifier: string;
}

declare enum ClientType {
    CLIENT = 0,
    QUERY = 1
}

declare class TeamSpeakClient extends Abstract {
    constructor(parent: TeamSpeak3, list: ClientListResponse);

    cid: number;
    cfid: number;
    ctid: number;
    reasonid: number;
    clid: number;
    uniqueIdentifier: string;
    nickname: string;
    inputMuted: 0 | 1;
    outputMuted: 0 | 1;
    outputonlyMuted: 0 | 1;
    inputHardware: number;
    outputHardware: number;
    isRecording: 0 | 1;
    databaseId: number;
    channelGroupId: number;
    servergroups: number[];
    away: 0 | 1;
    type: ClientType;
    talkPower: number;
    talkRequest: number;
    isTalker: 0 | 1;
    isPrioritySpeaker: 0 | 1;
    unreadMessages: string;
    neededServerqueryViewPower: string;
    iconId: number;
    isChannelCommander: 0 | 1;
    channelGroupInheritedChannelId: number;
    badges?: string;
    myteamspeakId?: string;

    /**
     * Returns the Database ID of the Client
     * @returns the Clients Database ID
     */
    getDBID(): number;

    /**
     * Returns the Client ID
     * @returns the Client ID
     */
    getID(): number;

    /**
     * Returns the Client Unique ID
     * @returns the Client UniqueID
     */
    getUID(): string;

    /**
     * Evaluates if the Client is a Query Client or a normal Client
     * @returns true when the Client is a Server Query Client
     */
    isQuery(): boolean;

    /**
     * Retrieves a displayable Client Link for the TeamSpeak Chat
     * @return the TeamSpeak Client URL as Link
     */
    getURL(): string;

    /**
     * Returns General Info of the Client, requires the Client to be online
     * @returns a Promise with the Client Information
     */
    getInfo(): Promise<any>;

    /**
     * Returns the Clients Database Info
     * @returns the Client Database Info
     */
    getDBInfo(): Promise<any>;

    /**
     * Displays a list of custom properties for the client
     */
    customInfo(): Promise<any>;

    /**
     * Removes a custom property from the client
     * This requires TeamSpeak Server Version 3.2.0 or newer.
     * @param - The Key which should be deleted
     */
    customDelete(ident: string): Promise<any>;

    /**
     * Creates or updates a custom property for the client.
     * Ident and value can be any value, and are the key value pair of the custom property.
     * This requires TeamSpeak Server Version 3.2.0 or newer.
     * @param  - The Key which should be set
     * @param - The Value which should be set
     */
    customSet(ident: string, value: string): Promise<any>;

    /**
     * Kicks the Client from the Server
     * @param - The Message the Client should receive when getting kicked
     */
    kickFromServer(msg: string): Promise<any>;

    /**
     * Kicks the Client from their currently joined Channel
     * @param - The Message the Client should receive when getting kicked (max 40 Chars)
     */
    kickFromChannel(msg: string): Promise<any>;

    /**
     * Adds a new ban rule on the selected virtual server. All parameters are optional but at least one of the following must be set: ip, name, or uid.
     * @param - IP Regex
     * @param - Name Regex
     * @param - UID Regex
     * @param  - Bantime in Seconds, if left empty it will result in a permaban
     * @param- Ban Reason
     */
    banAdd(
        ip?: string,
        name?: string,
        uid?: string,
        time?: number,
        banreason?: string
    ): Promise<any>;

    /**
     * creates a new ban with the clients uid
     * @param - reason message
     * @param - the time in seconds a client should be banned, leave empty if it should result in a permanent ban
     */
    ban(banreason?: string, time?: number): Promise<any>;

    /**
     * Moves the Client to a different Channel
     * @param - Channel ID in which the Client should get moved
     * @param - The Channel Password
     */
    move(cid: number, cpw?: string): Promise<any>;

    /**
     * Adds the client to the server group specified with sgid. Please note that a client cannot be added to default groups or template groups.
     * @param - The Server Group ID which the Client should be added to
     */
    serverGroupAdd(sgid: number): Promise<any>;

    /**
     * Removes the client from the server group specified with sgid.
     * @param - The Server Group ID which the Client should be removed from
     */
    serverGroupDel(sgid: number): Promise<any>;

    /**
     * Pokes the Client with a certain message
     * @param - The message the Client should receive
     */
    poke(msg: string): Promise<any>;

    /**
     * Sends a textmessage to the Client
     * @param - The message the Client should receive
     */
    message(msg: string): Promise<any>;

    /**
     * Displays a list of permissions defined for a client
     * @param - If the permsid option is set to true the output will contain the permission names. Defaults to false.
     */
    permList(permsid?: boolean): Promise<any>;

    /**
     * Adds a set of specified permissions to a client. Multiple permissions can be added by providing the three parameters of each permission. A permission can be specified by permid or permsid.
     * @param - The permid or permsid
     * @param - Value of the Permission
     * @param - Whether the skip flag should be set. Defaults to 0.
     * @param - Whether the negate flag should be set. Defaults to 0.
     */
    addPerm(
        perm: string | number,
        value: number,
        skip?: number,
        negate?: number
    ): Promise<any>;

    /**
     * Removes a set of specified permissions from a client. Multiple permissions can be removed at once. A permission can be specified by permid or permsid
     * @param - The permid or permsid
     */
    delPerm(perm: string | number): Promise<any>;

    /**
     * Returns a Buffer with the Avatar of the User
     * @returns a Promise with the binary data of the avatar
     */
    getAvatar(): Promise<any>;

    /**
     * Returns a Buffer with the Icon of the Client
     * @returns a Promise with the binary data of the Client Icon
     */
    getIcon(): Promise<any>;

    /**
     * Gets the Avatar Name of the Client
     */
    getAvatarName(): Promise<string>;

    /**
     * Gets the Icon Name of the Client
     */
    getIconName(): Promise<any>;
}

export = TeamSpeakClient;
