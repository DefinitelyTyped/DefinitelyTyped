import Abstract = require('./Abstract');
import TeamSpeak3 = require('../TeamSpeak3');

declare class TeamSpeakChannel extends Abstract {
    constructor(parent: TeamSpeak3, c: {
        cid: number
    })

    /**
     * Returns the ID of the Channel
     * @returns the Channels ID
     */
    getID(): number;

    /**
     * Displays detailed configuration information about a channel including ID, topic, description, etc.
     */
    getInfo(): Promise<any>;

    /**
     * Moves a channel to a new parent channel with the ID cpid.
     * If order is specified, the channel will be sorted right under the channel with the specified ID.
     * If order is set to 0, the channel will be sorted right below the new parent.
     * @param - Channel Parent ID
     * @param - Channel Sort Order. Defaults to 0.
     */
    move(cpid: number, order?: number): Promise<any>;

    /**
     * Deletes an existing channel by ID. If force is set to 1, the channel will be deleted even if there are clients within.
     * The clients will be kicked to the default channel with an appropriate reason message.
     * @param - If set to 1 the Channel will be deleted even when Clients are in it
     */
    del(force: number): Promise<any>;

    /**
     * Changes a channels configuration using given properties.
     * Note that this command accepts multiple properties which means that you're able to change all settings of the channel specified with cid at once.
     * @param - The Properties of the Channel which should get changed
     */
    edit(properties: any): Promise<any>;

    /**
     * Displays a list of permissions defined for a channel.
     * @param - Whether the Perm SID should be displayed aswell. Defaults to false.
     */
    permList(permsid?: boolean): Promise<any[]>;

    /**
     * Adds a set of specified permissions to a channel. Multiple permissions can be added by providing the two parameters of each permission.
     * A permission can be specified by permid or permsid.
     * @param - The permid or permsid
     * @param - The Value which should be set
     */
    setPerm(perm: string | number, value: number): Promise<any>;

    /**
     * Removes a set of specified permissions from a channel. Multiple permissions can be removed at once. A permission can be specified by permid or permsid.
     * @param - The permid or permsid
     */
    delPerm(perm: string | number): Promise<any>;

    /**
     * Gets a List of Clients in the current Channel
     * @param - The Filter Object
     */
    getClients(filter: any): Promise<any>;

    /**
     * Returns a Buffer with the Icon of the Channel
     * @returns a Promise with the binary data of the Channel Icon
     */
    getIcon(): Promise<any>;

    /**
     * Gets the Icon Name of the Channel
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

export = TeamSpeakChannel;
