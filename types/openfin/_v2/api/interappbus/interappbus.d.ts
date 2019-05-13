/// <reference types="node" />
import { Base } from '../base';
import { Identity } from '../../identity';
import Transport, { Message } from '../../transport/transport';
import { EventEmitter } from 'events';
import { Channel } from './channel/index';
/**
 * A messaging bus that allows for pub/sub messaging between different applications.
 * @namespace
*/
export default class InterApplicationBus extends Base {
    Channel: Channel;
    events: {
        subscriberAdded: string;
        subscriberRemoved: string;
    };
    private refCounter;
    protected emitter: EventEmitter;
    on: any;
    removeAllListeners: any;
    constructor(wire: Transport);
    /**
     * Publishes a message to all applications running on OpenFin Runtime that
     * are subscribed to the specified topic.
     * @param { string } topic The topic on which the message is sent
     * @param { any } message The message to be published. Can be either a primitive
     * data type (string, number, or boolean) or composite data type (object, array)
     * that is composed of other primitive or composite data types
     * @return {Promise.<void>}
     * @tutorial InterApplicationBus.publish
    */
    publish(topic: string, message: any): Promise<void>;
    /**
     * Sends a message to a specific application on a specific topic.
     * @param { Identity } destination The identity of the application to which the message is sent
     * @param { string } topic The topic on which the message is sent
     * @param { any } message The message to be sent. Can be either a primitive data
     * type (string, number, or boolean) or composite data type (object, array) that
     * is composed of other primitive or composite data types
     * @return {Promise.<void>}
     * @tutorial InterApplicationBus.send
    */
    send(destination: Identity, topic: string, message: any): Promise<void>;
    /**
     * Subscribes to messages from the specified application on the specified topic.
     * If the subscription is for a uuid, [name], topic combination that has already
     * been published to upon subscription you will receive the last 20 missed messages
     * in the order they were published.
     * @param { Identity } source This object is described in the Identity in the typedef
     * @param { string } topic The topic on which the message is sent
     * @param { function } listener A function that is called when a message has
     * been received. It is passed the message, uuid and name of the sending application.
     * The message can be either a primitive data type (string, number, or boolean) or
     * composite data type (object, array) that is composed of other primitive or composite
     * data types
     * @return {Promise.<void>}
     * @tutorial InterApplicationBus.subcribe
     */
    subscribe(source: Identity, topic: string, listener: any): Promise<void>;
    /**
     * Unsubscribes to messages from the specified application on the specified topic.
     * @param { Identity } source This object is described in the Identity in the typedef
     * @param { string } topic The topic on which the message is sent
     * @param { function } listener A callback previously registered with subscribe()
     * @return {Promise.<void>}
     * @tutorial InterApplicationBus.unsubscribe
     */
    unsubscribe(source: Identity, topic: string, listener: any): Promise<void>;
    private processMessage;
    private emitSubscriverEvent;
    protected createSubscriptionKey(uuid: string, name: string, topic: string): string;
    protected onmessage(message: Message<InterAppPayload>): boolean;
}
export declare class InterAppPayload {
    sourceUuid: string;
    sourceWindowName: string;
    topic: string;
    destinationUuid?: string;
    message?: any;
}
