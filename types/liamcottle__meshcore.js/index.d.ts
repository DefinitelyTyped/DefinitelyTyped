/// <reference types="node" />

import { EventEmitter } from "events";

/**
 * Base connection class for MeshCore devices
 */
export class Connection extends EventEmitter {
    /**
     * Connect to the MeshCore device
     */
    connect(): Promise<void>;

    /**
     * Close the connection to the MeshCore device
     */
    close(): Promise<void>;

    /**
     * Get information about this device
     * @param timeout - Optional timeout in milliseconds
     */
    getSelfInfo(timeout?: number): Promise<SelfInfo>;

    /**
     * Get pending messages waiting to be received
     */
    getWaitingMessages(): Promise<Message[]>;

    /**
     * Get all channels configured on the device
     */
    getChannels(): Promise<Channel[]>;

    /**
     * Get contacts from the device
     * @param since - Optional timestamp to get contacts since
     */
    getContacts(since?: number): Promise<Contact[]>;

    /**
     * Sync the next pending message from the device
     */
    syncNextMessage(): Promise<void>;

    /**
     * Send a text message to a contact
     * @param publicKey - The recipient's public key
     * @param text - The message text
     */
    sendTextMessage(publicKey: Buffer, text: string): Promise<void>;

    /**
     * Send a text message to a channel
     * @param channelIdx - The channel index
     * @param text - The message text
     */
    sendChannelTextMessage(channelIdx: number, text: string): Promise<void>;

    /**
     * Find a contact by public key prefix
     * @param prefix - The public key prefix (first 6 bytes)
     */
    findContactByPublicKeyPrefix(prefix: Buffer): Promise<Contact | null>;

    /**
     * Internal method to handle received frames
     * @param frame - The received frame buffer
     */
    onFrameReceived(frame: Buffer): void;

    // Event emitter overrides for better typing
    on(event: "connected", listener: () => void): this;
    on(event: "disconnected", listener: () => void): this;
    on(event: number, listener: (data: any) => void): this;
    on(event: string | number | symbol, listener: (...args: any[]) => void): this;

    emit(event: string | number | symbol, ...args: any[]): boolean;
}

/**
 * NodeJS Serial connection for MeshCore devices over USB
 */
export class NodeJSSerialConnection extends Connection {
    /**
     * Create a new serial connection
     * @param port - Serial port path (e.g., "/dev/ttyUSB0", "COM3")
     */
    constructor(port: string);
}

/**
 * Web Serial API connection for MeshCore devices
 */
export class WebSerialConnection extends Connection {
    constructor();
}

/**
 * TCP connection for MeshCore devices over WiFi
 */
export class TCPConnection extends Connection {
    /**
     * Create a new TCP connection
     * @param host - The host address
     * @param port - The port number
     */
    constructor(host: string, port: number);
}

/**
 * Web Bluetooth connection for MeshCore devices
 */
export class WebBleConnection extends Connection {
    constructor();
}

/**
 * Generic serial connection
 */
export class SerialConnection extends Connection {
    constructor();
}

/**
 * Information about the local device
 */
export interface SelfInfo {
    /** The device's public key */
    publicKey: Buffer;
    /** The device's name (optional) */
    name?: string;
}

/**
 * A received message
 */
export interface Message {
    /** Public key prefix of the sender (first 6 bytes) */
    pubKeyPrefix: Buffer;
    /** Path length (number of hops) */
    pathLen: number;
    /** Text type identifier */
    txtType: number;
    /** Timestamp from the sender */
    senderTimestamp: number;
    /** The message text */
    text: string;
}

/**
 * A MeshCore channel
 */
export interface Channel {
    /** The channel index */
    channelIdx: number;
    /** The channel name */
    name: string;
    /** The channel encryption secret */
    secret: Buffer;
}

/**
 * A contact in the mesh network
 */
export interface Contact {
    /** The contact's public key */
    publicKey: Buffer;
    /** The contact's name (optional) */
    name?: string;
    /** Last seen timestamp (optional) */
    lastSeen?: number;
}

/**
 * Constants used by the MeshCore protocol
 */
export class Constants {
    /** Supported companion protocol version */
    static readonly SupportedCompanionProtocolVersion: number;

    /** Response codes from the device */
    static readonly ResponseCodes: {
        /** Contact message received */
        ContactMsgRecv: number;
        /** Channel message received */
        ChannelMsgRecv: number;
        [key: string]: number;
    };

    /** Push notification codes */
    static readonly PushCodes: {
        /** Message waiting notification */
        MsgWaiting: number;
        /** New node advertisement */
        NewAdvert: number;
        [key: string]: number;
    };

    /** Command codes sent to the device */
    static readonly CommandCodes: {
        /** App start command */
        AppStart: number;
        /** Send text message command */
        SendTxtMsg: number;
        /** Send channel text message command */
        SendChannelTxtMsg: number;
        /** Get contacts command */
        GetContacts: number;
        /** Get device time command */
        GetDeviceTime: number;
        /** Set device time command */
        SetDeviceTime: number;
        /** Send self advertisement command */
        SendSelfAdvert: number;
        /** Set advertisement name command */
        SetAdvertName: number;
        [key: string]: number;
    };
}

/**
 * A node advertisement packet
 */
export class Advert {
    constructor(data: Buffer);
    /** The node's public key */
    publicKey: Buffer;
    /** The advertised name (optional) */
    advName?: string;
}

/**
 * A protocol packet
 */
export class Packet {
    constructor(data: Buffer);
}

/**
 * Buffer utility functions
 */
export class BufferUtils {
    /**
     * XOR two buffers
     */
    static xor(a: Buffer, b: Buffer): Buffer;

    /**
     * Concatenate multiple buffers
     */
    static concat(...buffers: Buffer[]): Buffer;
}

/**
 * Cayenne Low Power Payload encoder/decoder
 */
export class CayenneLpp {
    constructor();
}
