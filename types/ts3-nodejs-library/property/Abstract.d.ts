import TeamSpeak3 = require('../TeamSpeak3');
import { EventEmitter } from 'events';

declare class Abstract extends EventEmitter {
    constructor(parent: TeamSpeak3, props: any, namespace: string);

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
     * @returns returns the JavaScript conform name
     * @example
     *  // given that the abstract is extending a TeamSpeakClient
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

export = Abstract;
