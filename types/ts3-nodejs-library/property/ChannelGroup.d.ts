import Abstract = require('./Abstract');
import TeamSpeak3 = require('../TeamSpeak3');

declare class TeamSpeakChannelGroup extends Abstract {
    constructor(parent: TeamSpeak3, c: {
        cgid: number
    })

    /**
     * Deletes the channel group. If force is set to 1, the channel group will be deleted even if there are clients within.
     * @param - If set to 1 the Channel Group will be deleted even when Clients are in it. Defaults to 0.
     */
    del(force?: number): Promise<any>;

    /**
     * Creates a copy of the channel group. If tcgid is set to 0, the server will create a new group.
     * To overwrite an existing group, simply set tcgid to the ID of a designated target group.
     * If a target group is set, the name parameter will be ignored.
     * @param - The Target Group, 0 to create a new Group. Defaults to 0.
     * @param - The Type of the Group (0 = Template Group | 1 = Normal Group)
     * @param - Name of the Group. Defaults to false.
     */
    copy(tcgid?: number, type?: number, name?: string | boolean): Promise<any>;

    /**
     * Changes the name of the channel group
     * @param - Name of the Group
     */
    rename(name: string): Promise<any>;

    /**
     * Displays a list of permissions assigned to the channel group specified with cgid.
     * @param - If the permsid option is set to true the output will contain the permission names. Defaults to false.
     */
    permList(permsid?: boolean): Promise<any[]>;

    /**
     * Adds a specified permissions to the channel group. A permission can be specified by permid or permsid.
     * @param - The permid or permsid
     * @param - Value of the Permission
     * @param - Whether the skip flag should be set. Defaults to 0.
     * @param - Whether the negate flag should be set. DEfaults to 0.
     */
    addPerm(perm: string | number, value: number, skip?: number, negate?: number): Promise<any>;

    /**
     * Removes a set of specified permissions from the channel group. A permission can be specified by permid or permsid.
     * @param - The permid or permsid
     */
    delPerm(perm: string | number): Promise<any>;

    /**
     * Sets the channel group of a client
     * @param - The Channel in which the Client should be assigned the Group
     * @param - The Client Database ID which should be added to the Group
     */
    setClient(cid: number, cldbid: number): Promise<any>;

    /**
     * Displays the IDs of all clients currently residing in the channel group.
     * @param - The Channel ID
     */
    clientList(cid?: number): Promise<any>;

    /**
     * Returns a Buffer with the Icon of the Channel Group
     * @returns a Promise with the binary data of the ChannelGroup Icon
     */
    getIcon(): Promise<any>;

    /**
     * Gets the Icon Name of the Channel Group
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
     * @returns the updated values from src to dst
     */
    objectCopy(dst: any, src: any): any;

    /**
     * Returns the Parent Class
     * @returns the teamspeak instance
     */
    getParent(): TeamSpeak3;
}

export = TeamSpeakChannelGroup;
