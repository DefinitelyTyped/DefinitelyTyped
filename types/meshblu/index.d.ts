/// <reference types="node" />

declare module "meshblu" {
    var Meshblu: MeshbluStatic;

    export = Meshblu;
}

interface MeshbluStatic {
    /**
     * Establish a secure socket.io connection to Meshblu.
     * @param opt
     * @returns A Meshblu Connection.
     */
    createConnection(opt: Meshblu.ConnectionOptions): Meshblu.Connection;
}

declare namespace Meshblu {
    interface Connection {
        /**
         * Authenticate with Meshblu.
         * @returns This Connection.
         */
        identify(): Connection;

        /**
         * @param data {string|number|object|array|Buffer} - data for signing.
         */
        sign(data: any): string;

        /**
         * @param message {string|number|object|array|Buffer} - signed data.
         * @param signature
         * @returns {*}
         */
        verify(message: any, signature: any): any;

        /**
         * @param uuid
         * @param message {string|number|object|array|Buffer} - data for encrypting.
         * @param options
         * @param fn The callback to be called. It should take one parameter, result,
         *     which is an object containing a property "error".
         * @returns This Connection.
         */
        encryptMessage(
            uuid: string,
            message: any,
            options: Meshblu.ConnectionOptions,
            fn: (result: any) => void,
        ): Connection;

        /**
         * Send a meshblu message.
         * @param payload An array of devices UUIDs.
         * @param fn The callback to be called. It should take one parameter, result,
         *     which is an object containing a property "error".
         * @returns This Connection.
         */
        message(payload: MessagePayload, fn: (result: any) => void): Connection;

        /**
         * Update a device record.
         * @param data
         * @param fn The callback to be called. It should take one parameter, result.
         * @returns This Connection.
         */
        update(data: UpdateData, fn: (result: UpdateSuccess) => void): Connection;

        /**
         * Register a new device record.
         * @param data
         * @param fn The callback to be called. It should take one parameter, result.
         * @returns This Connection.
         */
        register(data: RegisterData, fn: (result: RegisterResponse) => void): Connection;

        /**
         * Removes a device record.
         * @param data
         * @param fn The callback to be called. It should take one parameter, result.
         * @returns This Connection.
         */
        unregister(data: Device, fn: (result: Device) => void): Connection;

        /**
         * Get my device info.
         * @param data
         * @param fn The callback to be called. It should take one parameter, result.
         * @returns This Connection.
         */
        whoami(data: any, fn: (result: DeviceResponse) => void): Connection;

        /**
         * Find a Meshblu device.
         * @param data
         * @param fn The callback to be called. It should take one parameter, result.
         * @returns This Connection.
         */
        device(data: Device, fn: (result: DeviceResponse) => void): Connection;

        /**
         * Find Meshblu devices.
         * @param data
         * @param fn The callback to be called. It should take one parameter, result.
         * @returns This Connection.
         */
        devices(data: Color, fn: (result: DeviceResponse[]) => void): Connection;

        /**
         * Returns device messages as they are sent and received.
         * @param data
         * @param fn The callback to be called. It should take one parameter, result.
         * @returns This Connection.
         */
        subscribe(data: SubscribeData, fn: (result: any) => void): Connection;

        /**
         * Cancels device subscription.
         * @param data
         * @param fn The callback to be called. It should take one parameter, result.
         * @returns This Connection.
         */
        unsubscribe(data: UnsubscribeData, fn: (result: any) => void): Connection;

        /**
         * Send a meshblu data message.
         * @param data
         * @param fn The callback to be called. It should take one parameter, result.
         * @returns This Connection.
         */
        data(data: DataInput, fn: (result: any) => void): Connection;

        /**
         * Get a meshblu data for a device.
         * @param data
         * @param fn The callback to be called. It should take one parameter, result.
         * @returns This Connection.
         */
        getdata(data: GetDataInput, fn: (result: any) => void): Connection;

        /**
         * Generate a new session token for a device.
         * @param data
         * @param fn The callback to be called. It should take one parameter, result.
         */
        generateAndStoreToken(data: Device, fn: (result: ConnectionOptions) => void): void;

        /**
         * Remove a session token from a device.
         * @param data
         * @param fn The callback to be called. It should take one parameter, result.
         */
        revokeToken(data: ConnectionOptions, fn: (result: Device) => void): void;

        /**
         * @param uuid
         * @param fn The callback to be called. It should take one parameter, err,
         *     which will be null if there was no problem, and one parameter, publicKey,
         *     of type NodeRSA.
         */
        getPublicKey(uuid: string, fn: (err: Error, publicKey: any) => void): void;

        /*
         * Lack of documentation about these api functions.
         */
        send(text: string): Connection;
        bufferedSocketEmit(): void;
        parseUrl(serverUrl: string, port: string): string;
        generateKeyPair(): KeyPair;
        setPrivateKey(privateKey: string): void;
        setup(): Connection;
        connect(): void;
        reconnect(): void;
        claimdevice(data: Device, fn: (result: Device) => void): Connection;
        mydevices(data: any, fn: (result: any) => void): Connection;
        status(data: any): Connection;
        authenticate(data: any, fn: (result: any) => void): Connection;
        events(data: any, fn: (result: any) => void): Connection;
        localdevices(fn: (result: any) => void): Connection;
        unclaimeddevices(data: any, fn: (result: any) => void): Connection;
        textBroadcast(data: any): Connection;
        directText(data: any): Connection;
        subscribeText(data: any, fn: (result: any) => void): Connection;
        unsubscribeText(data: any, fn: (result: any) => void): Connection;
        close(fn: (result: any) => void): Connection;
        resetToken(data: any, fn: (result: any) => void): void;
    }

    /**
     * Contains the primary means of identifying a device.
     */
    interface ConnectionOptions {
        uuid: string;
        token: string;
    }

    interface KeyPair {
        privateKey: string;
        publicKey: string;
    }

    interface MessagePayload {
        devices: string[];
        topic: string;
        payload: any;
        qos?: number | undefined;
    }

    interface UpdateData {
        uuid: string;
        color: string;
    }

    interface UpdateSuccess {
        uuid: string;
        token: string;
        status: string;
    }

    interface RegisterData {
        type: string;
    }

    interface RegisterResponse {
        uuid: string;
        token: string;
        type: string;
    }

    interface Device {
        uuid: string;
    }

    interface DeviceResponse {
        uuid: string;
        online: boolean;
        color: string;
    }

    interface Color {
        color: string;
    }

    interface SubscribeData {
        uuid: string;
        types?: string[] | undefined;
        topics?: string[] | undefined;
    }

    interface UnsubscribeData {
        uuid: string;
        types?: string[] | undefined;
    }

    interface DataInput {
        uuid: string;
        online: boolean;
        x: number;
        y: number;
    }

    interface GetDataInput {
        uuid: string;
        start: string;
        finish: string;
        limit: number;
    }

    interface IdentifySuccess {
        uuid: string;
        token: string;
        status: string;
    }
}
