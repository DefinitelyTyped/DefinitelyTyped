import Abstract = require('./Abstract');
import TeamSpeak3 = require('../TeamSpeak3');

declare class TeamSpeakServerGroup extends Abstract {
    constructor(parent: TeamSpeak3, s: {
        sgid: number
    })

    /**
     * Returns the Server Group ID
     */
    getSGID(): number;

    /**
     * Deletes the server group. If force is set to 1, the server group will be deleted even if there are clients within.
     * @param - If set to 1 the ServerGroup will be deleted even when Clients are in it
     */
    del(force: number): Promise<any>;

    /**
     * Creates a copy of the server group specified with ssgid. If tsgid is set to 0, the server will create a new group.
     * To overwrite an existing group, simply set tsgid to the ID of a designated target group. If a target group is set, the name parameter will be ignored.
     * @param - The Target Group, 0 to create a new Group. Defaults to 0.
     * @param - The Type of the Group (0 = Query Group | 1 = Normal Group)
     * @param - Name of the Group. Defaults to false.
     */
    copy(tsgid?: number, type?: number, name?: string | boolean): Promise<any>;

    /**
     * Changes the name of the server group
     * @param - Name of the Group
     */
    rename(name: string): Promise<any>;

    /**
     * Displays a list of permissions assigned to the server group specified with sgid.
     * @param - If the permsid option is set to true the output will contain the permission names. Defaults to false.
     */
    permList(permsid?: boolean): Promise<any>;

    /**
     * Adds a specified permissions to the server group. A permission can be specified by permid or permsid.
     * @param - The permid or permsid
     * @param - Value of the Permission
     * @param - Whether the skip flag should be set Defaults to 0.
     * @param - Whether the negate flag should be set. Defaults to 0.
     */
    addPerm(perm: string | number, value: number, skip?: number, negate?: number): Promise<any>;

    /**
     * Removes a set of specified permissions from the server group. A permission can be specified by permid or permsid.
     * @param - The permid or permsid
     */
    delPerm(perm: string | number): Promise<any>;

    /**
     * Adds a client to the server group. Please note that a client cannot be added to default groups or template groups.
     * @param - The Client Database ID which should be added to the Group
     */
    addClient(cldbid: number): Promise<any>;

    /**
     * Removes a client specified with cldbid from the server group.
     * @param - The Client Database ID which should be removed from the Group
     */
    delClient(cldbid: number): Promise<any>;

    /**
     * Displays the IDs of all clients currently residing in the server group.
     */
    clientList(): Promise<any>;

    /**
     * Returns a Buffer with the Icon of the Server Group
     * @returns promise with the binary data of the ServerGroup Icon
     */
    getIcon(): Promise<any>;

    /**
     * Gets the Icon Name of the Server Group
     */
    getIconName(): Promise<any>;

    /**
     * retrieves the namespace of this class
     * @returns the current namespace
     */
    getNameSpace(): string;

    /**
     * returns JSONifyable data
     */
    toJSON(): void;

    /**
     * retrieves a single property value by the given name
     * @param - the name from where the value should be retrieved
     */
    getPropertyByName(name: string): void;

    /**
     * translates a TeamSpeak property key to a JavaScript conform name
     * @param - the name which will get converted
     * @returns the JavaScript conform name
     * @example
     *  //given that the abstract is extending a TeamSpeakClient
     *  client.translatePropName("client_nickname") //returns "nickname"
     *  client.translatePropName("client_is_talker") //returns "isTalker"
     *  client.translatePropName("client_channel_group_id") //returns "channelGroupId"
     */
    translatePropName(name: string): string;

    /**
     * Safely unsubscribes to all Events
     */
    destruct(): void;

    /**
     * Returns the data from the last List Command
     */
    getCache(): any;

    /**
     * Sets the Data from the Last List Command
     */
    updateCache(): void;

    /**
     * Copies the the new values and keys from src to dst and returns the changes to dst
     *
     * @param - the object to copy the src object onto
     * @param - the object with the new values
     * @return the updated values from src to dst
     */
    objectCopy(dst: any, src: any): any;

    /**
     * Returns the Parent Class
     * @returns the teamspeak instance
     */
    getParent(): TeamSpeak3;
}

export = TeamSpeakServerGroup;
