import Abstract = require('./Abstract');
import TeamSpeak3 = require('../TeamSpeak3');

declare class TeamSpeakServer extends Abstract {
    constructor(parent: TeamSpeak3, s: {
        virtualserver_id: number
    })

    /**
     * Selects the Virtual Server
     * @param - Set Nickname when selecting a server
     */
    use(client_nickname?: string): Promise<any>;

    /**
     * Gets basic Infos about the Server
     */
    getInfo(): Promise<any>;

    /**
     * Deletes the Server.
     */
    del(): Promise<any>;

    /**
     * Starts the virtual server. Depending on your permissions, you're able to start either your own virtual server only or all virtual servers in the server instance.
     */
    start(): Promise<any>;

    /**
     * Stops the virtual server. Depending on your permissions, you're able to stop either your own virtual server only or all virtual servers in the server instance.
     * @param - Specifies a text message that is sent to the clients before the client disconnects (requires TeamSpeak Server 3.2.0 or newer).
     */
    stop(msg?: string): Promise<any>;

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

export = TeamSpeakServer;
