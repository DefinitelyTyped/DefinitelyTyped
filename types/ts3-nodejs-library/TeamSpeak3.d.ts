/// <reference types="node" />

import { EventEmitter } from 'events';
import TeamSpeakChannel = require('./property/Channel');
import TeamSpeakClient = require('./property/Client');
import TeamSpeakServer = require('./property/Server');
import TeamSpeakServerGroup = require('./property/ServerGroup');
import TeamSpeakChannelGroup = require('./property/ChannelGroup');

// We need this namespace, becaue we can't just export the interface directly,
// as it would conflict with export = TeamSpeak3.
declare namespace TeamSpeak3 {
    interface ConnectionParams {
        /** The Protocol to use. Defaults to raw. */
        protocol?: 'ssh' | 'raw';
        /** The Host on which the TeamSpeak Server runs. Defaults to 127.0.0.1. */
        host?: string;
        /** The Queryport on which the TeamSpeak Server runs. Defaults to 10011. */
        queryport?: number;
        /** The Serverport on which the TeamSpeak Instance runs. Defaults to 9987. */
        serverport?: number;
        /** The username to authenticate with the TeamSpeak Server. */
        username: string;
        /** The password to authenticate with the TeamSpeak Server */
        password: string;
        /** The Nickname the Client should have */
        nickname: string;
        /** Maximum wait time for the connection to get established. Defaults to 20000. */
        readyTimeout?: number;
    }

    enum TargetMode {
        CLIENT = 1,
        CHANNEL = 2,
        VIRTUAL_SERVER = 3
    }

    enum ClientType {
        CLIENT = 0,
        QUERY = 1
    }

    interface MessageData {
        invoker: TeamSpeakClient;
        msg: string;
        targetmode: TargetMode;
    }

    interface WhoAmIResponse {
        virtualserver_status: string;
        virtualserver_id: number;
        virtualserver_unique_identifier: string;
        virtualserver_port: number;
        client_id: number;
        client_channel_id: number;
        client_nickname: string;
        client_database_id: number;
        cient_login_name: string;
        client_unique_identifier: string;
        client_origin_server_id: number;
    }

    interface ClientMovedResponse {
        client: TeamSpeakClient;
        channel: TeamSpeakChannel;
        reasonid: number;
    }

    interface ServerGroupClientListResponse {
        cldbid: number;
        client_nickname: string;
        client_unique_identifier: string;
    }

    interface DisconnectedClient {
        clid: number;
        cid: number;
        client_database_id: number;
        client_nickname: string;
        client_type: ClientType;
        client_away: number;
        client_away_message: string | undefined;
        client_flag_talking: number;
        client_input_muted: number;
        client_output_muted: number;
        client_input_hardware: number;
        client_output_hardware: number;
        client_talk_power: number;
        client_is_talker: number;
        client_is_priority_speaker: number;
        client_is_recording: number;
        client_is_channel_commander: number;
        client_unique_identifier: string;
        client_servergroups: number[];
        client_channel_group_id: number;
        client_channel_group_inherited_channel_id: number;
        client_version: string;
        client_platform: string;
        client_idle_time: number;
        client_created: number;
        client_lastconnected: number;
        client_icon_id: number;
        client_country: string | undefined;
        connection_client_ip: string;
    }

    interface DisconnectEvent {
        cfid: number;
        ctid: number;
        reasonid: number;
        reasonmsg: string;
        clid: number;
    }

    interface ClientDisconnectResponse {
        client: DisconnectedClient;
        event: DisconnectEvent;
    }

    interface DebugInformation {
        type: string;
        data: string;
    }

    interface ComplainListEntry {
        tcldbid: string;
        tname: string;
        fcldbid: string;
        fname: string;
        message: string;
        timestamp: string;
    }

    interface BanListEntry {
        banid: string;
        ip?: string;
        name?: string;
        uid?: string;
        mytsid?: string;
        lastnickname?: string;
        created: string;
        duration: string;
        invokername: string;
        invokercldbid: string;
        invokeruid: string;
        reason: string;
        enforcements: string;
    }
}

interface TeamSpeak3 {
    on(
        event: 'textmessage',
        listener: (data: TeamSpeak3.MessageData) => void
    ): this;
    on(
        event: 'clientconnect',
        listener: (data: { client: TeamSpeakClient }) => void
    ): this;
    on(
        event: 'clientmoved',
        listener: (data: TeamSpeak3.ClientMovedResponse) => void
    ): this;
    on(
        event: 'clientdisconnect',
        listener: (data: TeamSpeak3.ClientDisconnectResponse) => void
    ): this;
    on(
        event: 'close' | 'error' | 'flooding',
        listener: (err: Error) => void
    ): this;
    on(event: 'ready', listener: () => void): this;
    on(
        event: 'debug',
        listener: (debug: TeamSpeak3.DebugInformation) => void
    ): this;
    on(event: string, listener: () => any): this;
}

declare class TeamSpeak3 extends EventEmitter {
    constructor(config?: TeamSpeak3.ConnectionParams);

    /**
     * Sends a raw command to the TeamSpeak Server.
     * @example
     * ts3.execute("clientlist", ["-ip"])
     * ts3.execute("use", [9987], { client_nickname: "test" })
     * @param - The Command which should get executed on the TeamSpeak Server
     * @returns Promise object which returns the Information about the Query executed
     */
    execute(...args: any[]): Promise<any>;

    /**
     * Adds a new query client login, or enables query login for existing clients.
     * When no virtual server has been selected, the command will create global query logins.
     * Otherwise the command enables query login for existing client, and cldbid must be specified.
     * @param - the login name
     * @param - the database id which should be used
     * @returns Promise object which returns the Information about the Query executed
     */
    queryLoginAdd(client_login_name: string, cldbid?: number): Promise<any>;

    /**
     * Deletes an existing server query login on selected server.
     * When no virtual server has been selected, deletes global query logins instead.
     * @param - deletes the querylogin of this client
     * @returns Promise object which returns the Information about the Query executed
     */
    queryLoginDel(cldbid: number): Promise<void>;

    /**
     * List existing query client logins.
     * The pattern parameter can include regular characters and SQL wildcard characters (e.g. %).
     * Only displays query logins of the selected virtual server, or all query logins when no virtual server have been  selected.
     * @param - the pattern to filter for client login names
     * @param - the offset from where clients should be listed
     * @param - how many clients should be listed
     * @returns Promise object which returns the Information about the Query executed
     */
    queryLoginList(
        pattern?: string,
        start?: number,
        duration?: number
    ): Promise<any>;

    /**
     * Change your ServerQuery clients settings using given properties.
     * @param - The Properties which should be changed
     */
    clientUpdate(properties: any): Promise<any>;

    /**
     * Subscribes to an Event.
     * @param - The Event on which should be subscribed
     * @param - The Channel ID, only required when subscribing to the "channel" event
     */
    registerEvent(event: string, id?: number): Promise<any>;

    /**
     * Authenticates with the TeamSpeak 3 Server instance using given ServerQuery login credentials.
     * @param - The Username which you want to login with
     * @param - The Password you want to login with
     */
    login(username: string, password: string): Promise<any>;

    /**
     * Deselects the active virtual server and logs out from the server instance.
     */
    logout(): Promise<void>;

    /**
     * Displays the servers version information including platform and build number.
     */
    version(): Promise<any>;

    /**
     * Displays detailed connection information about the server instance including uptime,
     * number of virtual servers online, traffic information, etc.
     */
    hostInfo(): Promise<any>;

    /**
     * Displays the server instance configuration including database revision number,
     * the file transfer port, default group IDs, etc.
     */
    instanceInfo(): Promise<any>;

    /**
     * Changes the server instance configuration using given properties.
     * @param - The stuff you want to change
     */
    instanceEdit(properties: any): Promise<any>;

    /**
     * Displays a list of IP addresses used by the server instance on multi-homed machines.
     */
    bindingList(): Promise<any>;

    /**
     * Selects the virtual server specified with the port to allow further interaction.
     * @param - The Port the Server runs on
     * @param - Set Nickname when selecting a server
     */
    useByPort(port: number, client_nickname?: string): Promise<any>;

    /**
     * Selects the virtual server specified with the sid to allow further interaction.
     * @param - The Server ID
     * @param - Set Nickname when selecting a server
     */
    useBySid(sid: number, client_nickname?: string): Promise<any>;

    /**
     * Displays information about your current ServerQuery connection including your loginname, etc.
     */
    whoami(): Promise<TeamSpeak3.WhoAmIResponse>;

    /**
     * Displays detailed configuration information about the selected virtual server
     * including unique ID, number of clients online, configuration, etc.
     */
    serverInfo(): Promise<any>;

    /**
     * Displays the database ID of the virtual server running on the UDP port
     * @param - The Server Port where data should be retrieved
     */
    serverIdGetByPort(virtualserver_port: number): Promise<any>;

    /**
     * Changes the selected virtual servers configuration using given properties.
     * Note that this command accepts multiple properties which means that you're able to change all settings of the selected virtual server at once.
     * @param properties - The Server Settings which should be changed
     */
    serverEdit(properties: any): Promise<any>;

    /**
     * Stops the entire TeamSpeak 3 Server instance by shutting down the process.
     * @param - Specifies a text message that is sent to the clients before the client disconnects (requires TeamSpeak Server 3.2.0 or newer).
     */
    serverProcessStop(reasonmsg?: string): Promise<any>;

    /**
     * Displays detailed connection information about the selected virtual server including uptime, traffic information, etc.
     */
    connectionInfo(): Promise<any>;

    /**
     * Creates a new virtual server using the given properties and displays its ID, port and initial administrator privilege key.
     * If virtualserver_port is not specified, the server will test for the first unused UDP port
     * @param - The Server Settings
     * @returns the server admin token for the new server and the response from the server creation
     */
    serverCreate(properties: any): Promise<any>;

    /**
     * Deletes a Server.
     * @param - the server id
     */
    serverDelete(sid: number): Promise<any>;

    /**
     * Starts the virtual server. Depending on your permissions,
     * you're able to start either your own virtual server only or all virtual servers in the server instance.
     * @param - the server id
     */
    serverStart(sid: number): Promise<any>;

    /**
     * Stops the virtual server. Depending on your permissions,
     * you're able to stop either your own virtual server only or all virtual servers in the server instance.
     * @param - the server id
     * @param - Specifies a text message that is sent to the clients before the client disconnects (requires TeamSpeak Server 3.2.0 or newer).
     */
    serverStop(sid: number, reasonmsg?: string): Promise<any>;

    /**
     * Creates a new server group using the name specified with name.
     * The optional type parameter can be used to create ServerQuery groups and template groups.
     * @param - The Name of the Server Group
     * @param - Type of the Server Group
     */
    serverGroupCreate(name: string, type?: number): Promise<any>;

    /**
     * Displays the IDs of all clients currently residing in the server group.
     * @param - the ServerGroup id
     */
    serverGroupClientList(
        sgid: number
    ): Promise<
        | TeamSpeak3.ServerGroupClientListResponse[]
        | TeamSpeak3.ServerGroupClientListResponse
    > | null;

    /**
     * Adds the client to the server group specified with sgid.
     * Please note that a client cannot be added to default groups or template groups.
     * @param - The Client Database ID which should be added
     * @param - The Server Group ID which the Client should be added to
     */
    serverGroupAddClient(cldbid: number, sgid: number): Promise<any>;

    /**
     * Removes the client from the server group specified with sgid.
     * @param - The Client Database ID which should be removed
     * @param - The Server Group ID which the Client should be removed from
     */
    serverGroupDelClient(cldbid: number, sgid: number): Promise<any>;

    /**
     * Deletes the server group. If force is set to 1, the server group will be deleted even if there are clients within.
     * @param - the ServerGroup id
     * @param - If set to 1 the ServerGroup will be deleted even when Clients are in it
     */
    serverGroupDel(sgid: number, force?: number): Promise<any>;

    /**
     * Creates a copy of the server group specified with ssgid.
     * If tsgid is set to 0, the server will create a new group.
     * To overwrite an existing group, simply set tsgid to the ID of a designated target group.
     * If a target group is set, the name parameter will be ignored.
     * @param - the source ServerGroup
     * @param - the target ServerGroup, 0 to create a new Group
     * @param - The Type of the Group (0 = Query Group | 1 = Normal Group)
     * @param - Name of the Group
     */
    serverGroupCopy(
        ssgid: number,
        tsgid?: number,
        type?: number,
        name?: string | boolean
    ): Promise<any>;

    /**
     * Changes the name of the server group
     * @param - the ServerGroup id
     * @param - new name of the ServerGroup
     */
    serverGroupRename(sgid: number, name: string): Promise<any>;

    /**
     * Displays a list of permissions assigned to the server group specified with sgid.
     * @param - the ServerGroup id
     * @param - If the permsid option is set to true the output will contain the permission names.
     */
    serverGroupPermList(sgid: number, permsid?: boolean): Promise<any>;

    /**
     * Adds a specified permissions to the server group. A permission can be specified by permid or permsid.
     * @param - the ServerGroup id
     * @param - The permid or permsid
     * @param - Value of the Permission
     * @param - Whether the skip flag should be set
     * @param - Whether the negate flag should be set
     */
    serverGroupAddPerm(
        sgid: number,
        perm: string | number,
        value: number,
        skip?: number,
        negate?: number
    ): Promise<any>;

    /**
     * Removes a set of specified permissions from the server group.
     * A permission can be specified by permid or permsid.
     * @param - the ServerGroup id
     * @param - The permid or permsid
     */
    serverGroupDelPerm(sgid: number, perm: string | number): Promise<any>;

    /**
     * Creates a new channel using the given properties.
     * Note that this command accepts multiple properties which means that you're able to specifiy all settings of the new channel at once.
     * @param - The Name of the Channel
     * @param - Properties of the Channel
     */
    channelCreate(name: string, properties?: any): Promise<any>;

    /**
     * Creates a new channel group using a given name.
     * The optional type parameter can be used to create ServerQuery groups and template groups.
     * @param - The Name of the Channel Group
     * @param - Type of the Channel Group
     */
    channelGroupCreate(name: string, type?: number): Promise<any>;

    /**
     * Retrieves a Single Channel by the given Channel ID
     * @param- The Channel Id
     */
    getChannelByID(cid: number): Promise<TeamSpeakChannel | undefined>;

    /**
     * Retrieves a Single Channel by the given Channel Name
     * @param - The Name of the Channel
     */
    getChannelByName(
        channel_name: number
    ): Promise<TeamSpeakChannel | undefined>;

    /**
     * Displays detailed configuration information about a channel including ID, topic, description, etc.
     * @param - the channel id
     */
    channelInfo(cid: number): Promise<any>;

    /**
     * Moves a channel to a new parent channel with the ID cpid.
     * If order is specified, the channel will be sorted right under the channel with the specified ID.
     * If order is set to 0, the channel will be sorted right below the new parent.
     * @param - the channel id
     * @param - Channel Parent ID
     * @param - Channel Sort Order
     */
    channelMove(cid: number, cpid: number, order?: number): Promise<any>;

    /**
     * Deletes an existing channel by ID.
     * If force is set to 1, the channel will be deleted even if there are clients within.
     * The clients will be kicked to the default channel with an appropriate reason message.
     * @param - the channel id
     * @param - If set to 1 the Channel will be deleted even when Clients are in it
     */
    channelDelete(cid: number, force?: number): Promise<any>;

    /**
     * Changes a channels configuration using given properties.
     * Note that this command accepts multiple properties which means that you're able to change all settings of the channel specified with cid at once.
     * @param - the channel id
     * @param - The Properties of the Channel which should get changed
     */
    channelEdit(cid: number, properties?: any): Promise<any>;

    /**
     * Displays a list of permissions defined for a channel.
     * @param - the channel id
     * @param - Whether the Perm SID should be displayed aswell
     */
    channelPermList(cid: number, permsid?: boolean): Promise<any[]>;

    /**
     * Adds a set of specified permissions to a channel.
     * @param  - the channel id
     * @param - The permid or permsid
     * @param - The Value which should be set
     */
    channelSetPerm(
        cid: number,
        perm: string | number,
        value: number
    ): Promise<any>;

    /**
     * Adds a set of specified permissions to a channel.
     * A permission can be specified by permid or permsid.
     * @param - the channel id
     * @param - the permissions to assign
     * @example
     * ts3.channelSetPerms(5, [{ permsid: "i_channel_needed_modify_power", permvalue: 75 }])
     */
    channelSetPerms(
        cid: number,
        permissions: Array<{ permsid: string; permvalue: number }>
    ): Promise<any>; // TODO: permsid can be typed better (we know which permissions exist).

    /**
     * Removes a set of specified permissions from a channel.
     * Multiple permissions can be removed at once.
     * A permission can be specified by permid or permsid.
     * @param - the channel id
     * @param - The permid or permsid
     */
    channelDelPerm(cid: number, perm: string | number): Promise<any>;

    /**
     * Retrieves a Single Client by the given Client ID
     * @param clid - The Client Id
     */
    getClientByID(clid: number): Promise<TeamSpeakClient | undefined>;

    /**
     * Retrieves a Single Client by the given Client Database ID
     * @param - The Client Database Id
     */
    getClientByDBID(
        client_database_id: number
    ): Promise<TeamSpeakClient | undefined>;

    /**
     * Retrieves a Single Client by the given Client Unique Identifier
     * @param - The Client Unique Identifier
     */
    getClientByUID(
        client_unique_identifier: string
    ): Promise<TeamSpeakClient | undefined>;

    /**
     * Retrieves a Single Client by the given Client Unique Identifier
     * @param - The Nickname of the Client
     */
    getClientByName(
        client_nickname: string
    ): Promise<TeamSpeakClient | undefined>;

    /**
     * Returns General Info of the Client, requires the Client to be online
     * @param - the client id
     * @returns Promise with the Client Information
     */
    clientInfo(clid: number): Promise<any>;

    /**
     * Returns the Clients Database List.1
     * @param - Start Offset. Defaults to 0.
     * @param - Duration or Limit of Clients. Defaults to 1000.
     * @param - True when the results should be counted
     * @returns the Client Database Info
     */
    clientDBList(
        start?: number,
        duration?: number,
        count?: boolean
    ): Promise<any>;

    /**
     * Returns the Clients Database Info
     * @param - the client database id
     * @returns the Client Database Info
     */
    clientDBInfo(cldbid: number): Promise<TeamSpeak3.DisconnectedClient | undefined>;

    /**
     * Kicks the Client from the Server
     * @param - the client id
     * @param - the reasonid
     * @param - The Message the Client should receive when getting kicked
     */
    clientKick(clid: number, reasonid: number, reasonmsg: string): Promise<any>;

    /**
     * Moves the Client to a different Channel
     * @param - the client id
     * @param - Channel ID in which the Client should get moved
     * @param - The Channel Password
     */
    clientMove(clid: number, cid: number, cpw?: string): Promise<any>;

    /**
     * Pokes the Client with a certain message
     * @param - the client id
     * @param - The message the Client should receive
     */
    clientPoke(clid: number, msg: string): Promise<any>;

    /**
     * Displays a list of permissions defined for a client
     * @param - the client database id
     * @param - If the permsid option is set to true the output will contain the permission names.
     */
    clientPermList(cldbid: number, permsid?: boolean): Promise<any>;

    /**
     * Adds a set of specified permissions to a client.
     * Multiple permissions can be added by providing the three parameters of each permission.
     * A permission can be specified by permid or permsid.
     * @param - the client database id
     * @param - The permid or permsid
     * @param - Value of the Permission
     * @param - Whether the skip flag should be set
     * @param - Whether the negate flag should be set
     */
    clientAddPerm(
        cldbid: number,
        perm: string | number,
        value: number,
        skip?: number,
        negate?: number
    ): Promise<any>;

    /**
     * Removes a set of specified permissions from a client.
     * Multiple permissions can be removed at once.
     * A permission can be specified by permid or permsid
     * @param - the client database id
     * @param - The permid or permsid
     */
    clientDelPerm(cldbid: number, perm: string | number): Promise<any>;

    /**
     * Searches for custom client properties specified by ident and value.
     * The value parameter can include regular characters and SQL wildcard characters (e.g. %).
     * @param  - the key to search for
     * @param - the search pattern to use
     */
    customSearch(ident: string, pattern: string): Promise<any>;

    /**
     * Displays a list of custom properties for the client specified with cldbid.
     * @param - The Client Database ID which should be retrieved
     */
    customInfo(cldbid: number): Promise<any>;

    /**
     * Removes a custom property from a client specified by the cldbid.
     * This requires TeamSpeak Server Version 3.2.0 or newer.
     * @param - The Client Database ID which should be changed
     * @param - The Key which should be deleted
     */
    customDelete(cldbid: number, ident: string): Promise<any>;

    /**
     * Creates or updates a custom property for client specified by the cldbid.
     * Ident and value can be any value, and are the key value pair of the custom property.
     * This requires TeamSpeak Server Version 3.2.0 or newer.
     * @param - The Client Database ID which should be changed
     * @param - The Key which should be set
     * @param - The Value which should be set
     */
    customSet(cldbid: number, ident: string, value: string): Promise<any>;

    /**
     * Sends a text message a specified target.
     * The type of the target is determined by targetmode while target specifies the ID of the recipient,
     * whether it be a virtual server, a channel or a client.
     * @param - target client id which should receive the message
     * @param - targetmode (1: client, 2: channel, 3: server)
     * @param - The message the Client should receive
     */
    sendTextMessage(
        target: number,
        targetmode: number,
        msg: string
    ): Promise<any>;

    /**
     * Retrieves a single ServerGroup by the given ServerGroup ID
     * @param - the ServerGroup Id
     */
    getServerGroupByID(sgid: number): Promise<TeamSpeakServerGroup | undefined>;

    /**
     * Retrieves a single ServerGroup by the given ServerGroup Name
     * @param - the ServerGroup name
     */
    getServerGroupByName(
        name: number
    ): Promise<TeamSpeakServerGroup | undefined>;

    /**
     * Retrieves a single ChannelGroup by the given ChannelGroup ID
     * @param - the ChannelGroup Id
     */
    getChannelGroupByID(
        cgid: number
    ): Promise<TeamSpeakChannelGroup | undefined>;

    /**
     * Retrieves a single ChannelGroup by the given ChannelGroup Name
     * @param - the ChannelGroup name
     */
    getChannelGroupByName(
        name: number
    ): Promise<TeamSpeakChannelGroup | undefined>;

    /**
     * Sets the channel group of a client
     * @param - The Channel Group which the Client should get assigned
     * @param - The Channel in which the Client should be assigned the Group
     * @param - The Client Database ID which should be added to the Group
     */
    setClientChannelGroup(
        cgid: number,
        cid: number,
        cldbid: number
    ): Promise<any>;

    /**
     * Deletes the channel group. If force is set to 1, the channel group will be deleted even if there are clients within.
     * @param - the channelgroup id
     * @param - If set to 1 the Channel Group will be deleted even when Clients are in it
     */
    deleteChannelGroup(cgid: number, force?: number): Promise<any>;

    /**
     * Creates a copy of the channel group.
     * If tcgid is set to 0, the server will create a new group.
     * To overwrite an existing group, simply set tcgid to the ID of a designated target group.
     * If a target group is set, the name parameter will be ignored.
     * @param - the source ChannelGroup
     * @param - the target ChannelGroup (0 to create a new Group)
     * @param - The Type of the Group (0 = Template Group | 1 = Normal Group)
     * @param - Name of the Group
     */
    channelGroupCopy(
        scgid: number,
        tcgid?: number,
        type?: number,
        name?: string | boolean
    ): Promise<any>;

    /**
     * Changes the name of the channel group
     * @param - the ChannelGroup id to rename
     * @param - new name of the ChannelGroup
     */
    channelGroupRename(cgid: number, name: string): Promise<any>;

    /**
     * Displays a list of permissions assigned to the channel group specified with cgid.
     * @param - the ChannelGroup id to list
     * @param - If the permsid option is set to true the output will contain the permission names.
     */
    channelGroupPermList(cgid: number, permsid?: boolean): Promise<any[]>;

    /**
     * Adds a specified permissions to the channel group. A permission can be specified by permid or permsid.
     * @param - the ChannelGroup id
     * @param - The permid or permsid
     * @param - Value of the Permission
     * @param - Whether the skip flag should be set
     * @param - Whether the negate flag should be set
     */
    channelGroupAddPerm(
        cgid: number,
        perm: string | number,
        value: number,
        skip?: number,
        negate?: number
    ): Promise<any>;

    /**
     * Removes a set of specified permissions from the channel group. A permission can be specified by permid or permsid.
     * @param - the ChannelGroup id
     * @param - The permid or permsid
     */
    channelGroupDelPerm(cgid: number, perm: string | number): Promise<any>;

    /**
     * Displays the IDs of all clients currently residing in the channel group.
     * @param - the ChannelGroup id
     * @param - The Channel ID
     */
    channelGroupClientList(
        cgid: number,
        cid?: number
    ): Promise<TeamSpeakClient[]>;

    /**
     * Displays all permissions assigned to a client for the channel specified with cid.
     * If permid is set to 0, all permissions will be displayed.
     * A permission can be specified by permid or permsid.
     * @param - The Client Database ID
     * @param - One or more Permission Names
     * @param - One or more Permission IDs
     * @param - One or more Permission Names
     */
    permOverview(
        cldbid: number,
        cid: number,
        permid?: number,
        permsid?: number
    ): Promise<any>;

    /**
     * Retrieves a list of permissions available on the server instance including ID, name and description.
     */
    permissionList(): Promise<any[]>;

    /**
     * Retrieves the database ID of one or more permissions specified by permsid.
     * @param - One or more Permission Names
     * @returns gets the specified permissions
     */
    permIdGetByName(permsid: string | string[]): Promise<any>;

    /**
     * Retrieves the current value of the permission for your own connection.
     * This can be useful when you need to check your own privileges.
     * @param - Perm ID or Name which should be checked
     */
    permGet(key: number | string): Promise<any>;

    /**
     * Retrieves detailed information about all assignments of the permission.
     * The output is similar to permoverview which includes the type and the ID of the client, channel or group associated with the permission.
     * @param - Perm ID or Name to get
     */
    permFind(perm: number | string): Promise<any>;

    /**
     * Restores the default permission settings on the selected virtual server and creates a new initial administrator token.
     * Please note that in case of an error during the permreset call - e.g. when the database has been modified or corrupted - the virtual server will be deleted from the database.
     */
    permReset(): Promise<void>;

    /**
     * Retrieves a list of privilege keys available including their type and group IDs.
     */
    privilegeKeyList(): Promise<any>;

    /**
     * Create a new token.
     * If type is set to 0, the ID specified with tokenid will be a server group ID.
     * Otherwise, tokenid is used as a channel group ID and you need to provide a valid channel ID using channelid.
     * @param - Token Type
     * @param - Depends on the Type given, add either a valid Channel Group or Server Group
     * @param - Depends on the Type given, add a valid Channel ID
     * @param - Token Description
     */
    privilegeKeyAdd(
        tokentype: number,
        group: number,
        cid?: number,
        description?: string
    ): Promise<any>;

    /**
     * Create a new privilegekey token for a ServerGroup with the given description
     * @param - Server Group which should be generated the token for
     * @param - Token Description
     */
    serverGroupPrivilegeKeyAdd(
        group: number,
        description?: string
    ): Promise<any>;

    /**
     * Create a new privilegekey token for a Channel Group and assigned Channel ID with the given description
     * @param - The Channel Group for which the token should be valid
     * @param - Channel ID for which the token should be valid
     * @param - Token Description
     */
    channelGroupPrivilegeKeyAdd(
        group: number,
        cid: number,
        description?: string
    ): Promise<any>;

    /**
     * Deletes an existing token matching the token key specified with token.
     * @param - The token which should be deleted
     */
    privilegeKeyDelete(token: string): Promise<any>;

    /**
     * Use a token key gain access to a server or channel group.
     * Please note that the server will automatically delete the token after it has been used.
     * @param - The token which should be used
     */
    privilegeKeyUse(token: string): Promise<any>;

    /**
     * Displays a list of offline messages you've received.
     * The output contains the senders unique identifier, the messages subject, etc.
     */
    messageList(): Promise<any>;

    /**
     * Sends an offline message to the client specified by uid.
     * @param - Client Unique Identifier (uid)
     * @param - Subject of the message
     * @param - Message Text
     */
    messageAdd(cluid: string, subject: string, text: string): Promise<any>;

    /**
     * Sends an offline message to the client specified by uid.
     * @param - The Message ID which should be deleted
     */
    messageDel(msgid: number): Promise<any>;

    /**
     * Displays an existing offline message with the given id from the inbox.
     * @param - Gets the content of the Message
     */
    messageGet(msgid: number): Promise<any>;

    /**
     * Displays an existing offline message with the given id from the inbox.
     * @param - Gets the content of the Message
     * @param - If flag is set to 1 the message will be marked as read
     */
    messageUpdate(msgid: number, flag?: number): Promise<any>;

    /**
     * Displays a list of complaints on the selected virtual server.
     * If dbid is specified, only complaints about the targeted client will be shown.
     * @param - Filter only for certain Client with the given Database ID
     */
    complainList(cldbid?: number): Promise<TeamSpeak3.ComplainListEntry[]>;

    /**
     * Submits a complaint about the client with database ID dbid to the server.
     * @param - Filter only for certain Client with the given Database ID
     * @param - The Message which should be added
     */
    complainAdd(cldbid: number, message?: string): Promise<void>;

    /**
     * Deletes the complaint about the client with ID tdbid submitted by the client with ID fdbid from the server.
     * If dbid will be left empty all complaints for the tdbid will be deleted
     * @param - The Target Client Database ID
     * @param - The Client Database ID which filed the Report
     */
    complainDel(tcldbid: number, fcldbid?: number): Promise<void>;

    /**
     * Displays a list of active bans on the selected virtual server.
     */
    banList(): Promise<TeamSpeak3.BanListEntry[]>;

    /**
     * Adds a new ban rule on the selected virtual server.
     * All parameters are optional but at least one of the following must be set: ip, name, or uid.
     * @param - IP Regex
     * @param - Name Regex
     * @param - UID Regex
     * @param - Bantime in Seconds, if left empty it will result in a permaban
     * @param - Ban Reason
     */
    banAdd(
        ip?: string,
        name?: string,
        uid?: string,
        time?: number,
        banreason?: string
    ): Promise<{ banid: string }>;

    /**
     * Removes one or all bans from the server
     * @param- The BanID to remove, if not provided it will remove all bans
     */
    banDel(banid?: number): Promise<void>;

    /**
     * Displays a specified number of entries from the servers log.
     * If instance is set to 1, the server will return lines from the master logfile (ts3server_0.log) instead of the selected virtual server logfile.
     * @param - Lines to receive
     * @param - Invert Output
     * @param - Instance or Virtual Server Log
     * @param - Begin at Position
     */
    logView(
        lines?: number,
        reverse?: number,
        instance?: number,
        begin_pos?: number
    ): Promise<any>;

    /**
     * Writes a custom entry into the servers log.
     * Depending on your permissions, you'll be able to add entries into the server instance log and/or your virtual servers log.
     * The loglevel parameter specifies the type of the entry
     * @param - Level 1 to 4
     * @param - Message to log
     */
    logAdd(loglevel: number, logmsg: string): Promise<any>;

    /**
     * Sends a text message to all clients on all virtual servers in the TeamSpeak 3 Server instance.
     * @param - Message which will be sent to all instances
     */
    gm(msg: string): Promise<any>;

    /**
     * Displays a list of client database IDs matching a given pattern.
     * You can either search for a clients last known nickname or his unique identity by using the -uid option.
     * @param - The Pattern which should be searched for
     * @param - True when instead of the Name it should be searched for a uid
     */
    clientDBFind(pattern: string, isUid: boolean): Promise<any>;

    /**
     * Changes a clients settings using given properties.
     * @param - The Client Database ID which should be edited
     * @param - The Properties which should be modified
     */
    clientDBEdit(cldbid: string, properties?: any): Promise<any>;

    /**
     * Deletes a clients properties from the database.
     * @param - The Client Database ID which should be edited
     */
    clientDBDelete(cldbid: string): Promise<any>;

    /**
     * Displays a list of virtual servers including their ID, status, number of clients online, etc.
     */
    serverList(): Promise<TeamSpeakServer[]>;

    /**
     * Displays a list of channel groups available. Depending on your permissions, the output may also contain template groups.
     * @param - Filter Object
     */
    channelGroupList(filter: any): Promise<TeamSpeakChannelGroup[]>;

    /**
     * Displays a list of server groups available.
     * Depending on your permissions, the output may also contain global ServerQuery groups and template groups.
     * @param - Filter Object
     */
    serverGroupList(filter: any): Promise<TeamSpeakServerGroup[]>;

    /**
     * Lists all Channels with a given Filter
     * @param - Filter Object
     */
    channelList(filter: any): Promise<TeamSpeakChannel[]>;

    /**
     * Lists all Clients with a given Filter
     * @param - Filter Object
     */
    clientList(filter?: any): Promise<TeamSpeakClient[]>;

    /**
     * Displays a list of files and directories stored in the specified channels file repository.
     * @param - the channel id to check for
     * @param - the path to list
     * @param - the channel password
     */
    ftGetFileList(cid: number, path?: string, cpw?: string): Promise<any>;

    /**
     * Displays detailed information about one or more specified files stored in a channels file repository.
     * @param - the channel id to check for
     * @param - the filepath to receive
     * @param - the channel password
     */
    ftGetFileInfo(cid: number, name: string, cpw?: string): Promise<any>;

    /**
     * Stops the running file transfer with server-side ID serverftfid.
     * @param - Server File Transfer ID
     * @param - <Description Pending>
     */
    ftStop(serverftfid: number, del?: number): Promise<any>;

    /**
     * Deletes one or more files stored in a channels file repository
     * @param - the channel id to check for
     * @param - path to the file to delete
     * @param - the channel password
     */
    ftDeleteFile(cid: number, name: string, cpw?: string): Promise<any>;

    /**
     * Creates new directory in a channels file repository
     * @param - the channel id to check for
     * @param - path to the directory
     * @param - the channel password
     */
    ftCreateDir(cid: number, dirname: string, cpw?: string): Promise<any>;

    /**
     * Renames a file in a channels file repository.
     * If the two parameters tcid and tcpw are specified, the file will be moved into another channels file repository
     * @param - the channel id to check for
     * @param - the path to the file which should be renamed
     * @param - the path to the file with the new name
     * @param - target channel id if the file should be moved to a different channel
     * @param - the channel password from where the file gets renamed
     * @param - the channel password from where the file will get transferred to
     */
    ftRenameFile(
        cid: number,
        oldname: string,
        newname: string,
        tcid?: string,
        cpw?: string,
        tcpw?: string
    ): Promise<any>;

    /**
     * Initializes a file transfer upload. clientftfid is an arbitrary ID to identify the file transfer on client-side.
     * On success, the server generates a new ftkey which is required to start uploading the file through TeamSpeak 3's file transfer interface.
     * @param - The Transfer Object
     * @param - Arbitary ID to Identify the Transfer
     * @param - Destination Filename
     * @param - Size of the File
     * @param - Channel ID to upload to
     * @param - Channel Password of the Channel which will be uploaded to
     * @param - Overwrites an existing file
     * @param - <Description Pending>
     */
    ftInitUpload(transfer: {
        clientftfid?: any;
        name: string;
        size: number;
        cid?: number;
        cpw?: string;
        overwrite?: number;
        resume?: number;
    }): Promise<any>;

    /**
     * Initializes a file transfer download. clientftfid is an arbitrary ID to identify the file transfer on client-side.
     * On success, the server generates a new ftkey which is required to start downloading the file through TeamSpeak 3's file transfer interface.
     * @param - The Transfer Object
     * @param - Filepath to Download
     * @param - Arbitary ID to Identify the Transfer
     * @param - Channel ID to upload to
     * @param - Channel Password of the Channel which will be uploaded to
     * @param - <Description Pending File Startposition?>
     */
    ftInitDownload(transfer: {
        name: string;
        clientftfid?: number;
        cid?: number;
        cpw?: string;
        seekpos?: number;
    }): Promise<any>;

    /**
     * Uploads a file
     * @param - the path whith the filename where the file should be uploaded to
     * @param - The data to upload
     * @param - Channel ID to upload to
     * @param - Channel Password of the Channel which will be uploaded to
     */
    uploadFile(
        path: string,
        data: string | Buffer,
        cid?: number,
        cpw?: string
    ): Promise<any>;

    /**
     * Returns the file in the channel with the given path
     * @param - the path whith the filename where the file should be uploaded to
     * @param - Channel ID to download from
     * @param - Channel Password of the Channel which will be uploaded to
     */
    downloadFile(path: string, cid?: number, cpw?: string): Promise<any>;

    /**
     * Returns an Icon with the given Name
     * @param - The Name of the Icon to retrieve eg "icon_262672952"
     */
    downloadIcon(name: string): Promise<any>;

    /**
     * Gets the Icon Name of a resolveable Perm List
     * @param - expects a promise which resolves to a permission list
     */
    getIconName(permlist: Promise<any[]>): Promise<any>;

    /**
     * Closes the ServerQuery connection to the TeamSpeak 3 Server instance.
     */
    quit(): Promise<any>;

    /**
     * Filters an Object with given Option
     * @param - The Object which should get filtered
     * @param - Filter Object
     */
    static filter(array: any[], filter: any): Promise<any[]>;

    /**
     * Transforms an Input to an Array
     * @param - input data which should be converted to an array
     */
    toArray(input: any): Promise<any[]>;
}

export = TeamSpeak3;
