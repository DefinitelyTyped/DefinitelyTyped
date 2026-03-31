import { RemoteValue } from "./remoteValue";

export interface ScriptSource {
    realm: string;
    context?: string;
}

/**
 * Represents a message received through a channel.
 * Described in https://w3c.github.io/webdriver-bidi/#event-script-message.
 */
declare class Message {
    private _channel: string;
    private _data: RemoteValue;
    private _source: Source;

    /**
     * Creates a new Message instance.
     * @param channel - The channel through which the message is received.
     * @param data - The data contained in the message.
     * @param source - The source of the message.
     */
    constructor(
        channel: string,
        data: RemoteValue,
        source: Source,
    );

    /**
     * Gets the channel through which the message is received.
     * @returns The channel.
     */
    get channel(): string;

    /**
     * Gets the data contained in the message.
     * @returns The data.
     */
    get data(): RemoteValue;

    /**
     * Gets the source of the message.
     * @returns The source.
     */
    get source(): Source;
}

/**
 * Represents a source object.
 * Described in https://w3c.github.io/webdriver-bidi/#type-script-Source.
 */
declare class Source {
    private _browsingContextId: string | null;
    private _realmId: string;

    constructor(source: ScriptSource);

    /**
     * Get the browsing context ID.
     * @returns The browsing context ID.
     */
    get browsingContextId(): string | null;

    /**
     * Get the realm ID.
     * @returns The realm ID.
     */
    get realmId(): string;
}

export { Message, Source };
