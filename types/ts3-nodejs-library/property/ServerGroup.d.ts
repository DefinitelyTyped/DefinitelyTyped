import Abstract = require('./Abstract');
import TeamSpeak3 = require('../TeamSpeak3');

/**
 * the response of the servergrouplist command for a single servergroup
 */
interface ServerGroupListResponse {
    sgid: number;
}

declare class TeamSpeakServerGroup extends Abstract {
    constructor(parent: TeamSpeak3, list: ServerGroupListResponse);

    sgid: number;
    name: string;
    type: string;
    iconid: string;
    savedb: string;
    sortid: string;
    namemode: string;
    nModifyp: string;
    nMemberAddp: string;
    nMemberRemovep: string;

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
    addPerm(
        perm: string | number,
        value: number,
        skip?: number,
        negate?: number
    ): Promise<any>;

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
}

export = TeamSpeakServerGroup;
