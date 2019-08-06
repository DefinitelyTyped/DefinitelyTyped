import Abstract = require('./Abstract');
import TeamSpeak3 = require('../TeamSpeak3');

/**
 * the response of the channellist command for a single channel
 */
interface ChannelListResponse {
    id: number;
}

declare class TeamSpeakChannel extends Abstract {
    constructor(parent: TeamSpeak3, list: ChannelListResponse);

    cid: number;
    pid: number;
    order: number;
    name: string;
    topic?: number;
    flagDefault: 0 | 1;
    flagPassword: 0 | 1;
    flagPermanent: 0 | 1;
    flagSemiPermanent: 0 | 1;
    codec: number;
    codecQuality: number;
    neededTalkPower: number;
    iconId: number;
    secondsEmpty: number;
    totalClientsFamily: number;
    maxclients: number;
    maxfamilyclients: number;
    totalClients: number;
    neededSubscribePower: number;

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
}

export = TeamSpeakChannel;
