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
}

export = TeamSpeakServer;
