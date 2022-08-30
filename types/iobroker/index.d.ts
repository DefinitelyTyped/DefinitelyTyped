// Type definitions for ioBroker 4.0
// Project: https://github.com/ioBroker/ioBroker, http://iobroker.net
// Definitions by: AlCalzone <https://github.com/AlCalzone>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 4.5

// Note: This is not the definition for the package `iobroker`,
// which is just an installer, not a library.
// The definitions may change with updates to ioBroker.js-controller

/// <reference types="node" />
/// <reference path="./objects.d.ts" />
import * as fs from 'fs';
export {}; // avoids exporting AtLeastOne into the global scope

// Requires at least one of the properties of T to be given, whether it's optional or not
type AtLeastOne<T, Req = { [K in keyof T]-?: T[K] }, Opt = { [K in keyof T]+?: T[K] }> = {
    [K in keyof Req]: Omit<Opt, K> & { [P in K]: Req[P] };
}[keyof Req];

declare global {
    namespace ioBroker {
        enum StateQuality {
            good = 0x00, // or undefined or null
            bad = 0x01,
            general_problem = 0x01,
            general_device_problem = 0x41,
            general_sensor_problem = 0x81,
            device_not_connected = 0x42,
            sensor_not_connected = 0x82,
            device_reports_error = 0x44,
            sensor_reports_error = 0x84,
        }

        type StateValue = string | number | boolean | null;

        interface State {
            /** The value of the state. */
            val: StateValue;

            /** Direction flag: false for desired value and true for actual value. Default: false. */
            ack: boolean;

            /** Unix timestamp. Default: current time */
            ts: number;

            /** Unix timestamp of the last time the value changed */
            lc: number;

            /** Name of the adapter instance which set the value, e.g. "system.adapter.web.0" */
            from: string;

            /** The user who set this value */
            user?: string;

            /** Optional time in seconds after which the state is reset to null */
            expire?: number;

            /** Optional quality of the state value */
            q?: StateQuality;

            /** Optional comment */
            c?: string;
        }

        type SettableState = AtLeastOne<State>;

        type Session = any; // TODO: implement

        /** Defines access rights for a single object type */
        interface ObjectOperationPermissions {
            /** Whether a user may enumerate objects of this type */
            list: boolean;
            /** Whether a user may read objects of this type */
            read: boolean;
            /** Whether a user may write objects of this type */
            write: boolean;
            /** Whether a user may create objects of this type */
            create: boolean;
            /** Whether a user may delete objects of this type */
            delete: boolean;
        }

        /** Defines the rights a user or group has to change objects */
        interface ObjectPermissions {
            /** The access rights for files */
            file: ObjectOperationPermissions;
            /** The access rights for objects */
            object: ObjectOperationPermissions;
            /** The access rights for users/groups */
            users: ObjectOperationPermissions;
            /** The access rights for states */
            state?: ObjectOperationPermissions;
        }
        /** Defined the complete set of access rights a user has */
        interface PermissionSet extends ObjectPermissions {
            /** The name of the user this ACL is for */
            user: string;
            /** The name of the groups this ACL was merged from */
            groups: string[];
            /** The access rights for certain commands */
            other: {
                execute: boolean;
                http: boolean;
                sendto: boolean;
            };
        }

        interface Permission {
            /** The type of the permission */
            type: string;
            /** Which kind of operation is required */
            operation: string;
        }
        interface ObjectOrStatePermission extends Permission {
            type: 'object' | 'file' | 'users' | 'state';
            operation: 'list' | 'read' | 'write' | 'create' | 'delete';
        }
        interface OtherPermission extends Permission {
            type: 'other';
            operation: 'execute' | 'http' | 'sendto';
        }
        interface CommandsPermissions {
            // TODO: Are all properties required or is a partial object ok?
            getObject: ObjectOrStatePermission;
            getObjects: ObjectOrStatePermission;
            getObjectView: ObjectOrStatePermission;
            setObject: ObjectOrStatePermission;
            subscribeObjects: ObjectOrStatePermission;
            unsubscribeObjects: ObjectOrStatePermission;
            getStates: ObjectOrStatePermission;
            getState: ObjectOrStatePermission;
            setState: ObjectOrStatePermission;
            getStateHistory: ObjectOrStatePermission;
            subscribe: ObjectOrStatePermission;
            unsubscribe: ObjectOrStatePermission;
            getVersion: Permission;
            httpGet: OtherPermission;
            sendTo: OtherPermission;
            sendToHost: OtherPermission;
            readFile: ObjectOrStatePermission;
            readFile64: ObjectOrStatePermission;
            writeFile: ObjectOrStatePermission;
            writeFile64: ObjectOrStatePermission;
            unlink: ObjectOrStatePermission;
            rename: ObjectOrStatePermission;
            mkdir: ObjectOrStatePermission;
            readDir: ObjectOrStatePermission;
            chmodFile: ObjectOrStatePermission;
            authEnabled: Permission;
            disconnect: Permission;
            listPermissions: Permission;
            getUserPermissions: ObjectOrStatePermission;
        }

        type UserGroup = any; // TODO find out how this looks like
        // interface UserGroup { }

        /** Contains information about a user */
        interface User {
            /** Which groups this user belongs to */
            groups: UserGroup[];
            /** Access rights of this user */
            acl: ObjectPermissions;
        }

        /** Parameters for adapter.getObjectView */
        interface GetObjectViewParams {
            /** First id to include in the return list */
            startkey?: string;
            /** Last id to include in the return list */
            endkey?: string;
            /** Whether docs should be included in the return list */ // TODO: What are docs?
            include_docs?: boolean;
        }

        /** Parameters for adapter.getObjectList */
        type GetObjectListParams = GetObjectViewParams;

        type LogLevel = 'silly' | 'debug' | 'info' | 'warn' | 'error';
        interface Logger {
            /** log message with silly level */
            silly(message: string): void;
            /** log message with debug level */
            debug(message: string): void;
            /** log message with info level (default output level for all adapters) */
            info(message: string): void;
            /** log message with warning severity */
            warn(message: string): void;
            /** log message with error severity */
            error(message: string): void;

            /** Verbosity of the log output */
            level: LogLevel;
        }

        interface Certificates {
            /** private key file */
            key: string | Buffer;
            /** public certificate */
            cert: string | Buffer;
            /** chained CA certificates */
            ca: Array<string | Buffer>;
        }

        type MessagePayload = string | Record<string, any>;

        /** Callback information for a passed message */
        interface MessageCallbackInfo {
            /** The original message payload */
            message: MessagePayload;
            /** ID of this callback */
            id: number;
            // ???
            ack: boolean;
            /** Timestamp of this message */
            time: number;
        }

        /** A message being passed between adapter instances */
        interface Message {
            /** The command to be executed */
            command: string;
            /** The message payload */
            message: MessagePayload;
            /** The source of this message */
            from: string;
            /** ID of this message */
            _id: number;
            /** Callback information. This is set when the source expects a response */
            callback: MessageCallbackInfo;
        }

        type Log = any; // TODO: define this https://github.com/ioBroker/ioBroker.js-controller/blob/master/lib/states/statesInMemServer.js#L873

        type EnumList = string | string[];

        type Enum = any; // TODO: implement this

        type Plugin = Record<string, any>; // TODO: Add definition

        interface DirectoryEntry {
            file: string;
            stats: fs.Stats;
            isDir: boolean;
            acl: any; // access control list object
            modifiedAt: number;
            createdAt: number;
        }

        interface GetHistoryOptions {
            instance?: string;
            start?: number;
            end?: number;
            step?: number;
            count?: number;
            from?: boolean;
            ack?: boolean;
            q?: boolean;
            addID?: boolean;
            limit?: number;
            ignoreNull?: boolean;
            sessionId?: any;
            aggregate?: 'minmax' | 'min' | 'max' | 'average' | 'total' | 'count' | 'none';
        }

        interface DelObjectOptions {
            /** Whether all child objects should be deleted aswell */
            recursive?: boolean;
            // Allow non-documented properties
            [other: string]: unknown;
        }

        interface ExtendObjectOptionsPreserve {
            [prop: string]: ExtendObjectOptionsPreserve | boolean | string[];
        }

        interface ExtendObjectOptions {
            /** Which properties of the original object should be preserved */
            preserve?: ExtendObjectOptionsPreserve;
            // Allow non-documented properties
            [other: string]: unknown;
        }

        /** Predefined notification scopes and their categories */
        interface NotificationScopes {
            system:
                | 'memIssues'
                | 'fsIoErrors'
                | 'noDiskSpace'
                | 'accessErrors'
                | 'nonExistingFileErrors'
                | 'remoteHostErrors'
                | 'restartLoop'
                | 'fileToJsonl';
        }

        interface AdapterOptions {
            /** The name of the adapter */
            name: string;

            /** path to adapter */
            dirname?: string;

            /** if the global system config should be included in the created object. Default: false */
            systemConfig?: boolean;

            /** provide alternative global configuration for the adapter. Default: null */
            config?: any;

            /** instance of the created adapter. Default: null */
            instance?: number;

            /** If the adapter needs access to the formatDate function to format dates according to the global settings. Default: false */
            useFormatDate?: boolean;

            /** If the adapter collects logs from all adapters (experts only). Default: false */
            logTransporter?: boolean;

            /** Handler for changes of subscribed objects */
            objectChange?: ObjectChangeHandler;
            /** Handler for received adapter messages. Can only be used if messagebox in io-package.json is set to true. */
            message?: MessageHandler;
            /** Handler for changes of subscribed states */
            stateChange?: StateChangeHandler;
            /** Will be called when the adapter is intialized */
            ready?: ReadyHandler;
            /** Will be called on adapter termination */
            unload?: UnloadHandler;
            /** Will be called when ioBroker detects an unhandled error in the adapter. Return `true` to signal that the error was handled and the adapter does not need to be restarted. */
            error?: ErrorHandler;

            /** If true, the adapter will have a property `oObjects` that contains a live cache of the adapter's objects */
            objects?: boolean;

            /** If true, the adapter will have a property `oStates` that contains a live cache of the adapter's states */
            states?: boolean;

            /** Whether the adapter should warn if states are set without an corresponding existing object. Default: `true` */
            strictObjectChecks?: boolean;
        } // end interface AdapterOptions

        // tslint:disable-next-line:no-empty-interface
        interface AdapterConfig {
            // This is a stub to be augmented in every adapter
        }

        interface Adapter {
            /** The name of the adapter */
            name: string;
            /** The name of the host where the adapter is running */
            host: string;
            /** instance number of this adapter instance */
            instance: number;
            /** Namespace of adapter objects: `<name>.<instance>` */
            readonly namespace: `${string}.${number}`;
            /** native part of the adapter settings */
            config: AdapterConfig;
            /** common part of the adapter settings */
            common: any;
            /** system part of the adapter settings */
            systemConfig?: any;
            /** path to the adapter folder */
            adapterDir: string;
            /** content of io-package.json */
            ioPack: any;
            /** content of package.json */
            pack: any;
            /** access to the logging functions */
            log: Logger;
            /** adapter version */
            version: any;
            /** if the adapter is connected to the host */
            connected: boolean;

            /**
             * Contains a live cache of the adapter's objects.
             *
             * NOTE: This is only defined if the adapter was initialized with the option `objects: true`.
             */
            oObjects?: Record<string, ioBroker.Object | undefined>;
            /**
             * Contains a live cache of the adapter's states.
             *
             * NOTE: This is only defined if the adapter was initialized with the option `states: true`.
             */
            oStates?: Record<string, ioBroker.State | undefined>;

            /** Can be used to test for forbidden chars in object IDs */
            readonly FORBIDDEN_CHARS: RegExp;

            /**
             * Whether the adapter should warn if states are set without an corresponding existing object.
             * Defaults to the value passed to the constructor via the option {@link AdapterOptions.strictObjectChecks}.
             */
            performStrictObjectChecks: boolean;

            /* ===============================
               Functions defined in adapter.js
               =============================== */

            /**
             * Helper function that looks for first free TCP port starting with the given one.
             * @param port - The port to start with
             * @param callback - gets called when a free port is found
             */
            getPort(port: number, callback: (port: number) => void): void;
            /**
             * Helper function that looks for first free TCP port starting with the given one.
             * @param port - The port to start with
             */
            getPortAsync(port: number): Promise<number>;

            /** Stops the adapter. Note: Is not always defined. */
            stop?: () => void;

            // ==============================
            // GENERAL

            /** Returns the ID of the user with the given username, if it exists */
            getUserID(username: string): Promise<string | undefined>;

            /** Validates username and password */
            checkPassword(user: string, password: string, callback: (result: boolean) => void): void;
            checkPassword(user: string, password: string, options: unknown, callback: (result: boolean) => void): void;
            /** Validates username and password */
            checkPasswordAsync(user: string, password: string, options?: unknown): Promise<boolean>;
            /** Sets a new password for the given user */
            setPassword(user: string, password: string, callback?: ErrorCallback): void;
            setPassword(user: string, password: string, options: unknown, callback?: ErrorCallback): void;
            /** Sets a new password for the given user */
            setPasswordAsync(user: string, password: string, options?: unknown): Promise<void>;
            /** <INTERNAL> Checks if a user exists and is in the given group. */
            checkGroup(user: string, group: string, callback: (result: boolean) => void): void;
            checkGroup(user: string, group: string, options: unknown, callback: (result: boolean) => void): void;
            /** <INTERNAL> Checks if a user exists and is in the given group. */
            checkGroupAsync(user: string, group: string, options?: unknown): Promise<boolean>;
            /** <INTERNAL> Determines the users permissions */
            calculatePermissions(
                user: string,
                commandsPermissions: CommandsPermissions,
                callback: (result: PermissionSet) => void,
            ): void;
            calculatePermissions(
                user: string,
                commandsPermissions: CommandsPermissions,
                options: unknown,
                callback: (result: PermissionSet) => void,
            ): void;
            /** <INTERNAL> Determines the users permissions */
            calculatePermissionsAsync(
                user: string,
                commandsPermissions: CommandsPermissions,
                options?: unknown,
            ): Promise<PermissionSet>;
            /** Returns SSL certificates by name (private key, public cert and chained certificate) for creation of HTTPS servers */
            getCertificates(
                publicName: string,
                privateName: string,
                chainedName: string,
                callback: (err?: Error | null, certs?: Certificates, useLetsEncryptCert?: boolean) => void,
            ): void;
            // TODO: getCertificates cannot be represented with promises right now

            /**
             * Encrypt the given cleartext, so it can be stored securely in adapter settings.
             */
            encrypt(cleartext: string): string;

            /**
             * Decrypt a value that has been encrypted with the `encrypt` method
             */
            decrypt(ciphertext: string): string;

            /**
             * Terminates the adapter execution but does not disable the adapter
             * @param reason (optional) A message to print into the log prior to termination
             * @param exitCode (optional) The exit code to use for termination
             */
            terminate(reason?: string, exitCode?: number): never;
            terminate(exitCode: number): never;

            /** Restarts the adapter */
            restart(): never;

            /**
             * Disables and stops the adapter instance.
             * It is recommended that you leave the current method (e.g. by using `return`) after calling this.
             */
            disable(): void;

            /**
             * Updates the adapter config with new values. Only a subset of the configuration has to be provided,
             * since merging with the existing config is done automatically.
             *
             * After updating the configuration, the adapter is automatically restarted. It is recommended that you
             * leave the current method (e.g. by using `return`) after calling this.
             *
             * @param newConfig The new config values to be stored
             */
            updateConfig(newConfig: Partial<AdapterConfig>): void;

            /**
             * Sends a message to a specific instance or all instances of some specific adapter.
             * @param instanceName The instance to send this message to.
             * If the ID of an instance is given (e.g. "admin.0"), only this instance will receive the message.
             * If the name of an adapter is given (e.g. "admin"), all instances of this adapter will receive it.
             * @param command (optional) Command name of the target instance. Default: "send"
             * @param message The message (e.g. params) to send.
             */
            sendTo(
                instanceName: string,
                message: MessagePayload,
                callback?: MessageCallback | MessageCallbackInfo,
            ): void;
            sendTo(
                instanceName: string,
                command: string,
                message: MessagePayload,
                callback?: MessageCallback | MessageCallbackInfo,
            ): void;
            /**
             * Sends a message to a specific instance or all instances of some specific adapter.
             * @param instanceName The instance to send this message to.
             * If the ID of an instance is given (e.g. "admin.0"), only this instance will receive the message.
             * If the name of an adapter is given (e.g. "admin"), all instances of this adapter will receive it.
             * @param command (optional) Command name of the target instance. Default: "send"
             * @param message The message (e.g. params) to send.
             */
            sendToAsync(instanceName: string, message: MessagePayload): Promise<Message | undefined>;
            sendToAsync(instanceName: string, command: string, message: MessagePayload): Promise<Message | undefined>;
            /**
             * Sends a message to a specific host or all hosts.
             */
            sendToHost(
                hostName: string,
                message: MessagePayload,
                callback?: MessageCallback | MessageCallbackInfo,
            ): void;
            sendToHost(
                hostName: string,
                command: string,
                message: MessagePayload,
                callback?: MessageCallback | MessageCallbackInfo,
            ): void;
            /**
             * Sends a message to a specific host or all hosts.
             */
            sendToHostAsync(hostName: string, message: MessagePayload): Promise<Message | undefined>;
            sendToHostAsync(hostName: string, command: string, message: MessagePayload): Promise<Message | undefined>;

            /**
             * Send a notification with the given scope and category to the host of this adapter
             * @param scope The scope of the notification
             * @param category The category of the notification. If `null` is passed, ioBroker will try to infer a matching category from the `message` parameter.
             *
             * **Note:** If no category can be inferred, the message will NOT be registered!
             * @param message The message of the notification
             */
            registerNotification<Scope extends keyof NotificationScopes>(
                scope: Scope,
                category: NotificationScopes[Scope] | null,
                message: string,
            ): Promise<void>;

            /**
             * Set capabilities of the given executable. Only works on Linux systems.
             * @param execPath Path to the executable. For Node.js, this can be determined via `process.execPath`.
             * @param capabilities Capabilities to set, e.g. ['cap_net_admin', 'cap_net_bind_service']
             * @param modeEffective Add effective mode
             * @param modePermitted Add permitted mode
             * @param modeInherited Add inherited mode
             */
            setExecutableCapabilities(
                execPath: string,
                capabilities: string[],
                modeEffective?: boolean,
                modePermitted?: boolean,
                modeInherited?: boolean,
            ): Promise<void>;

            /** Convert ID to {device: D, channel: C, state: S} */
            idToDCS(id: string): {
                device: string;
                channel: string;
                state: string;
            };

            // ==============================
            // own objects

            /** Reads an object from the object db */
            getObject(id: string, callback: GetObjectCallback): void;
            getObject(id: string, options: unknown, callback: GetObjectCallback): void;
            /** Reads an object from the object db */
            getObjectAsync(id: string, options?: unknown): GetObjectPromise;

            /** Creates or overwrites an object in the object db */
            setObject(id: string, obj: ioBroker.SettableObject, callback?: SetObjectCallback): void;
            setObject(id: string, obj: ioBroker.SettableObject, options: unknown, callback?: SetObjectCallback): void;
            /** Creates or overwrites an object in the object db */
            setObjectAsync(id: string, obj: ioBroker.SettableObject, options?: unknown): SetObjectPromise;

            /** Creates an object in the object db. Existing objects are not overwritten. */
            setObjectNotExists(id: string, obj: ioBroker.SettableObject, callback?: SetObjectCallback): void;
            setObjectNotExists(
                id: string,
                obj: ioBroker.SettableObject,
                options: unknown,
                callback?: SetObjectCallback,
            ): void;
            /** Creates an object in the object db. Existing objects are not overwritten. */
            setObjectNotExistsAsync(id: string, obj: ioBroker.SettableObject, options?: unknown): SetObjectPromise;

            /** Get all states, channels, devices and folders of this adapter */
            getAdapterObjects(callback: (objects: Record<string, AdapterScopedObject>) => void): void;
            /** Get all states, channels, devices and folders of this adapter */
            getAdapterObjectsAsync(): Promise<Record<string, AdapterScopedObject>>;

            /** Extend an object and create it if it might not exist */
            extendObject(id: string, objPart: PartialObject, callback?: SetObjectCallback): void;
            extendObject(
                id: string,
                objPart: PartialObject,
                options: ExtendObjectOptions,
                callback?: SetObjectCallback,
            ): void;
            /** Extend an object and create it if it might not exist */
            extendObjectAsync(id: string, objPart: PartialObject, options?: ExtendObjectOptions): SetObjectPromise;
            /**
             * Deletes an object from the object db
             * @param id - The id of the object without namespace
             */
            delObject(id: string, callback?: ErrorCallback): void;
            delObject(id: string, options: DelObjectOptions, callback?: ErrorCallback): void;
            /**
             * Deletes an object from the object db
             * @param id - The id of the object without namespace
             */
            delObjectAsync(id: string, options?: DelObjectOptions): Promise<void>;

            // ==============================
            // foreign objects

            /** Reads an object (which might not belong to this adapter) from the object db */
            getForeignObject<T extends string>(id: T, callback: GetObjectCallback<T>): void;
            getForeignObject<T extends string>(id: T, options: unknown, callback: GetObjectCallback<T>): void;
            /** Reads an object (which might not belong to this adapter) from the object db */
            getForeignObjectAsync<T extends string>(id: T, options?: unknown): GetObjectPromise<T>;

            /** Get foreign objects by pattern, by specific type and resolve their enums. */
            // tslint:disable:unified-signatures
            getForeignObjects(pattern: string, callback: GetObjectsCallback): void;
            getForeignObjects(pattern: string, options: unknown, callback: GetObjectsCallback): void;
            getForeignObjects<T extends ObjectType>(
                pattern: string,
                type: T,
                callback: GetObjectsCallbackTyped<T>,
            ): void;
            getForeignObjects<T extends ObjectType>(
                pattern: string,
                type: T,
                enums: EnumList,
                callback: GetObjectsCallbackTyped<T>,
            ): void;
            getForeignObjects<T extends ObjectType>(
                pattern: string,
                type: T,
                options: unknown,
                callback: GetObjectsCallbackTyped<T>,
            ): void;
            getForeignObjects<T extends ObjectType>(
                pattern: string,
                type: T,
                enums: EnumList,
                options: unknown,
                callback: GetObjectsCallbackTyped<T>,
            ): void;
            // tslint:enable:unified-signatures
            /** Get foreign objects by pattern, by specific type and resolve their enums. */
            getForeignObjectsAsync<T extends ObjectType>(
                pattern: string,
                type: T,
                enums: EnumList,
                options?: unknown,
            ): GetObjectsPromiseTyped<T>;
            getForeignObjectsAsync<T extends ObjectType>(
                pattern: string,
                type: T,
                options?: unknown,
            ): GetObjectsPromiseTyped<T>;
            getForeignObjectsAsync(pattern: string, options?: unknown): GetObjectsPromise;

            /** Creates or overwrites an object (which might not belong to this adapter) in the object db */
            setForeignObject<T extends string>(
                id: T,
                obj: ioBroker.SettableObject<ObjectIdToObjectType<T, 'write'>>,
                callback?: SetObjectCallback,
            ): void;
            setForeignObject<T extends string>(
                id: T,
                obj: ioBroker.SettableObject<ObjectIdToObjectType<T, 'write'>>,
                options: unknown,
                callback?: SetObjectCallback,
            ): void;
            /** Creates or overwrites an object (which might not belong to this adapter) in the object db */
            setForeignObjectAsync<T extends string>(
                id: T,
                obj: ioBroker.SettableObject<ObjectIdToObjectType<T, 'write'>>,
                options?: unknown,
            ): SetObjectPromise;
            /** Creates an object (which might not belong to this adapter) in the object db. Existing objects are not overwritten. */
            setForeignObjectNotExists<T extends string>(
                id: T,
                obj: ioBroker.SettableObject<ObjectIdToObjectType<T, 'write'>>,
                callback?: SetObjectCallback,
            ): void;
            setForeignObjectNotExists<T extends string>(
                id: T,
                obj: ioBroker.SettableObject<ObjectIdToObjectType<T, 'write'>>,
                options: unknown,
                callback?: SetObjectCallback,
            ): void;
            /** Creates an object (which might not belong to this adapter) in the object db. Existing objects are not overwritten. */
            setForeignObjectNotExistsAsync<T extends string>(
                id: T,
                obj: ioBroker.SettableObject<ObjectIdToObjectType<T, 'write'>>,
                options?: unknown,
            ): SetObjectPromise;

            /** Extend an object (which might not belong to this adapter) and create it if it might not exist */
            extendForeignObject<T extends string>(
                id: T,
                objPart: PartialObject<ObjectIdToObjectType<T, 'write'>>,
                callback?: SetObjectCallback,
            ): void;
            extendForeignObject<T extends string>(
                id: T,
                objPart: PartialObject<ObjectIdToObjectType<T, 'write'>>,
                options: ExtendObjectOptions,
                callback?: SetObjectCallback,
            ): void;
            /** Extend an object (which might not belong to this adapter) and create it if it might not exist */
            extendForeignObjectAsync<T extends string>(
                id: T,
                objPart: PartialObject<ObjectIdToObjectType<T, 'write'>>,
                options?: ExtendObjectOptions,
            ): SetObjectPromise;
            /**
             * Finds an object by its ID or name
             * @param type - common.type of the state
             */
            findForeignObject(idOrName: string, type: string, callback: FindObjectCallback): void;
            findForeignObject(idOrName: string, type: string, options: unknown, callback: FindObjectCallback): void;
            /**
             * Finds an object by its ID or name
             * @param type - common.type of the state
             */
            findForeignObjectAsync(idOrName: string, type: string): Promise<{ id: string; name?: ObjectCommon['name'] }>;
            /**
             * Deletes an object (which might not belong to this adapter) from the object db
             * @param id - The id of the object including namespace
             */
            delForeignObject(id: string, callback?: ErrorCallback): void;
            delForeignObject(id: string, options: DelObjectOptions, callback?: ErrorCallback): void;
            /**
             * Deletes an object (which might not belong to this adapter) from the object db
             * @param id - The id of the object including namespace
             */
            delForeignObjectAsync(id: string, options?: DelObjectOptions): Promise<void>;

            /**
             * Query a predefined object view (similar to SQL stored procedures) and return the results
             * For a detailed description refer to https://github.com/ioBroker/ioBroker/wiki/Adapter-Development-Documentation#object-fields
             * or http://guide.couchdb.org/editions/1/en/views.html
             * @param design The namespace of the object view, as defined in io-package.json. Usually the adapter name, e.g. "hm-rpc"
             * @param search The name of the object view.
             * @param params Parameters to additionally filter out objects from the return list. Null to include all objects
             * @param options (optional) Some internal options.
             * @param callback Is called when the operation has finished (successfully or not)
             */
            getObjectView<Design extends string = string, Search extends string = string>(
                design: Design,
                search: Search,
                params: GetObjectViewParams | null | undefined,
                callback: GetObjectViewCallback<InferGetObjectViewItemType<Design, Search>>,
            ): void;
            getObjectView<Design extends string = string, Search extends string = string>(
                design: Design,
                search: Search,
                params: GetObjectViewParams | null | undefined,
                options: unknown,
                callback: GetObjectViewCallback<InferGetObjectViewItemType<Design, Search>>,
            ): void;
            /**
             * Query a predefined object view (similar to SQL stored procedures) and return the results
             * For a detailed description refer to https://github.com/ioBroker/ioBroker/wiki/Adapter-Development-Documentation#object-fields
             * or http://guide.couchdb.org/editions/1/en/views.html
             * @param design The namespace of the object view, as defined in io-package.json. Usually the adapter name, e.g. "hm-rpc"
             * @param search The name of the object view.
             * @param params Parameters to additionally filter out objects from the return list. Null to include all objects
             * @param options (optional) Some internal options.
             */
            getObjectViewAsync<Design extends string = string, Search extends string = string>(
                design: Design,
                search: Search,
                params: GetObjectViewParams | null | undefined,
                options?: unknown,
            ): GetObjectViewPromise<InferGetObjectViewItemType<Design, Search>>;

            /**
             * Returns a list of objects with id between params.startkey and params.endkey
             * @param params Parameters determining the objects included in the return list. Null to include all objects
             * @param options If the returned list should be sorted. And some internal options.
             * @param callback Is called when the operation has finished (successfully or not)
             */
            getObjectList(params: GetObjectListParams | null, callback: GetObjectListCallback): void;
            getObjectList(
                params: GetObjectListParams | null,
                options: { sorted?: boolean } | Record<string, any>,
                callback: GetObjectListCallback,
            ): void;
            /**
             * Returns a list of objects with id between params.startkey and params.endkey
             * @param params Parameters determining the objects included in the return list. Null to include all objects
             * @param options If the returned list should be sorted. And some internal options.
             */
            getObjectListAsync(
                params: GetObjectListParams | null,
                options?: { sorted?: boolean } | Record<string, any>,
            ): GetObjectListPromise;

            // ==============================
            // states

            // Multiple signatures help understanding what the parameters are about
            /** Writes a value into the states DB. */
            // tslint:disable:unified-signatures
            setState(id: string, state: State | StateValue | SettableState, callback?: SetStateCallback): void;
            setState(
                id: string,
                state: State | StateValue | SettableState,
                ack: boolean,
                callback?: SetStateCallback,
            ): void;
            setState(
                id: string,
                state: State | StateValue | SettableState,
                options: unknown,
                callback?: SetStateCallback,
            ): void;
            setState(
                id: string,
                state: State | StateValue | SettableState,
                ack: boolean,
                options: unknown,
                callback?: SetStateCallback,
            ): void;
            /** Writes a value into the states DB. */
            setStateAsync(id: string, state: State | StateValue | SettableState, ack?: boolean): SetStatePromise;
            setStateAsync(id: string, state: State | StateValue | SettableState, options?: unknown): SetStatePromise;
            setStateAsync(
                id: string,
                state: State | StateValue | SettableState,
                ack: boolean,
                options: unknown,
            ): SetStatePromise;
            /** Writes a value into the states DB only if it has changed. */
            setStateChanged(
                id: string,
                state: State | StateValue | SettableState,
                callback?: SetStateChangedCallback,
            ): void;
            setStateChanged(
                id: string,
                state: State | StateValue | SettableState,
                ack: boolean,
                callback?: SetStateChangedCallback,
            ): void;
            setStateChanged(
                id: string,
                state: State | StateValue | SettableState,
                options: unknown,
                callback?: SetStateChangedCallback,
            ): void;
            setStateChanged(
                id: string,
                state: State | StateValue | SettableState,
                ack: boolean,
                options: unknown,
                callback?: SetStateChangedCallback,
            ): void;
            /** Writes a value into the states DB only if it has changed. */
            setStateChangedAsync(
                id: string,
                state: State | StateValue | SettableState,
                ack?: boolean,
            ): SetStateChangedPromise;
            setStateChangedAsync(
                id: string,
                state: State | StateValue | SettableState,
                options?: unknown,
            ): SetStateChangedPromise;
            setStateChangedAsync(
                id: string,
                state: State | StateValue | SettableState,
                ack: boolean,
                options: unknown,
            ): SetStateChangedPromise;
            /** Writes a value (which might not belong to this adapter) into the states DB. */
            setForeignState(id: string, state: State | StateValue | SettableState, callback?: SetStateCallback): void;
            setForeignState(
                id: string,
                state: State | StateValue | SettableState,
                ack: boolean,
                callback?: SetStateCallback,
            ): void;
            setForeignState(
                id: string,
                state: State | StateValue | SettableState,
                options: unknown,
                callback?: SetStateCallback,
            ): void;
            setForeignState(
                id: string,
                state: State | StateValue | SettableState,
                ack: boolean,
                options: unknown,
                callback?: SetStateCallback,
            ): void;
            /** Writes a value (which might not belong to this adapter) into the states DB. */
            setForeignStateAsync(id: string, state: State | StateValue | SettableState, ack?: boolean): SetStatePromise;
            setForeignStateAsync(
                id: string,
                state: State | StateValue | SettableState,
                options?: unknown,
            ): SetStatePromise;
            setForeignStateAsync(
                id: string,
                state: State | StateValue | SettableState,
                ack: boolean,
                options: unknown,
            ): SetStatePromise;
            /** Writes a value (which might not belong to this adapter) into the states DB only if it has changed. */
            setForeignStateChanged(
                id: string,
                state: State | StateValue | SettableState,
                callback?: SetStateChangedCallback,
            ): void;
            setForeignStateChanged(
                id: string,
                state: State | StateValue | SettableState,
                ack: boolean,
                callback?: SetStateChangedCallback,
            ): void;
            setForeignStateChanged(
                id: string,
                state: State | StateValue | SettableState,
                options: unknown,
                callback?: SetStateChangedCallback,
            ): void;
            setForeignStateChanged(
                id: string,
                state: State | StateValue | SettableState,
                ack: boolean,
                options: unknown,
                callback?: SetStateChangedCallback,
            ): void;
            /** Writes a value (which might not belong to this adapter) into the states DB only if it has changed. */
            setForeignStateChangedAsync(
                id: string,
                state: State | StateValue | SettableState,
                ack?: boolean,
            ): SetStateChangedPromise;
            setForeignStateChangedAsync(
                id: string,
                state: State | StateValue | SettableState,
                options?: unknown,
            ): SetStateChangedPromise;
            setForeignStateChangedAsync(
                id: string,
                state: State | StateValue | SettableState,
                ack: boolean,
                options: unknown,
            ): SetStateChangedPromise;
            // tslint:enable:unified-signatures

            /** Read a value from the states DB. */
            getState(id: string, callback: GetStateCallback): void;
            getState(id: string, options: unknown, callback: GetStateCallback): void;
            /** Read a value from the states DB. */
            getStateAsync(id: string, options?: unknown): GetStatePromise;
            /** Read a value (which might not belong to this adapter) from the states DB. */
            getForeignState(id: string, callback: GetStateCallback): void;
            getForeignState(id: string, options: unknown, callback: GetStateCallback): void;
            /** Read a value (which might not belong to this adapter) from the states DB. */
            getForeignStateAsync(id: string, options?: unknown): GetStatePromise;
            /** Read all states of this adapter which match the given pattern */
            getStates(pattern: string, callback: GetStatesCallback): void;
            getStates(pattern: string, options: unknown, callback: GetStatesCallback): void;
            /** Read all states of this adapter which match the given pattern */
            getStatesAsync(pattern: string, options?: unknown): GetStatesPromise;
            /** Read all states (which might not belong to this adapter) which match the given pattern */
            getForeignStates(pattern: string, callback: GetStatesCallback): void;
            getForeignStates(pattern: string, options: unknown, callback: GetStatesCallback): void;
            /** Read all states (which might not belong to this adapter) which match the given pattern */
            getForeignStatesAsync(pattern: string, options?: unknown): GetStatesPromise;

            /** Deletes a state from the states DB, but not the associated object. Consider using @link{deleteState} instead */
            delState(id: string, callback?: ErrorCallback): void;
            delState(id: string, options: unknown, callback?: ErrorCallback): void;
            /** Deletes a state from the states DB, but not the associated object. Consider using @link{deleteState} instead */
            delStateAsync(id: string, options?: unknown): Promise<void>;
            /** Deletes a state from the states DB, but not the associated object */
            delForeignState(id: string, callback?: ErrorCallback): void;
            delForeignState(id: string, options: unknown, callback?: ErrorCallback): void;
            /** Deletes a state from the states DB, but not the associated object */
            delForeignStateAsync(id: string, options?: unknown): Promise<void>;

            getHistory(id: string, options: GetHistoryOptions, callback: GetHistoryCallback): void;
            // TODO: getHistoryAsync

            // MISSING:
            // logRedirect https://github.com/ioBroker/ioBroker.js-controller/blob/master/lib/adapter.js#L4294
            // requireLog https://github.com/ioBroker/ioBroker.js-controller/blob/master/lib/adapter.js#L4336
            // processLog https://github.com/ioBroker/ioBroker.js-controller/blob/master/lib/adapter.js#L4360

            /**
             * @deprecated Despite the naming convention, this method doesn't prepend the adapter namespace. Use {@link setForeignBinaryState} instead.
             *
             * Writes a binary state into Redis
             * @param id The id of the state
             * @param binary The data to be written
             * @param options (optional) Some internal options.
             * @param callback Is called when the operation has finished (successfully or not)
             */
            setBinaryState(id: string, binary: Buffer, callback: SetStateCallback): void;
            setBinaryState(id: string, binary: Buffer, options: unknown, callback: SetStateCallback): void;
            /**
             * @deprecated Despite the naming convention, this method doesn't prepend the adapter namespace. Use {@link setForeignBinaryStateAsync} instead.
             *
             * Writes a binary state into Redis
             * @param id The id of the state
             * @param binary The data to be written
             * @param options (optional) Some internal options.
             */
            setBinaryStateAsync(id: string, binary: Buffer, options?: unknown): SetStatePromise;
            /**
             * @deprecated Despite the naming convention, this method doesn't prepend the adapter namespace. Use {@link getForeignBinaryState} instead.
             *
             * Reads a binary state from Redis
             * @param id The id of the state
             * @param options (optional) Some internal options.
             * @param callback Is called when the operation has finished (successfully or not)
             */
            getBinaryState(id: string, callback: GetBinaryStateCallback): void;
            getBinaryState(id: string, options: unknown, callback: GetBinaryStateCallback): void;
            /**
             * @deprecated Despite the naming convention, this method doesn't prepend the adapter namespace. Use {@link getForeignBinaryStateAsync} instead.
             *
             * Reads a binary state from Redis
             * @param id The id of the state
             * @param options (optional) Some internal options.
             */
            getBinaryStateAsync(id: string, options?: unknown): GetBinaryStatePromise;

            /**
             * @deprecated Despite the naming convention, this method doesn't prepend the adapter namespace. Use {@link delForeignBinaryState} instead.
             *
             * Deletes a binary state from the states DB
             */
            delBinaryState(id: string, callback?: ErrorCallback): void;
            delBinaryState(id: string, options: unknown, callback?: ErrorCallback): void;
            /**
             * @deprecated Despite the naming convention, this method doesn't prepend the adapter namespace. Use {@link delForeignBinaryStateAsync} instead.
             *
             * Deletes a binary state from the states DB
             */
            delBinaryStateAsync(id: string, options?: unknown): Promise<void>;

            /**
             * Writes a binary state into Redis. The ID will not be prefixed with the adapter namespace.
             * @param id The id of the state
             * @param binary The data to be written
             * @param options (optional) Some internal options.
             * @param callback Is called when the operation has finished (successfully or not)
             */
            setForeignBinaryState(id: string, binary: Buffer, callback: SetStateCallback): void;
            setForeignBinaryState(id: string, binary: Buffer, options: unknown, callback: SetStateCallback): void;
            /**
             * Writes a binary state into Redis. The ID will not be prefixed with the adapter namespace.
             * @param id The id of the state
             * @param binary The data to be written
             * @param options (optional) Some internal options.
             */
            setForeignBinaryStateAsync(id: string, binary: Buffer, options?: unknown): SetStatePromise;
            /**
             * Reads a binary state from Redis. The ID will not be prefixed with the adapter namespace.
             * @param id The id of the state
             * @param options (optional) Some internal options.
             * @param callback Is called when the operation has finished (successfully or not)
             */
            getForeignBinaryState(id: string, callback: GetBinaryStateCallback): void;
            getForeignBinaryState(id: string, options: unknown, callback: GetBinaryStateCallback): void;
            /**
             * Reads a binary state from Redis. The ID will not be prefixed with the adapter namespace.
             * @param id The id of the state
             * @param options (optional) Some internal options.
             */
            getForeignBinaryStateAsync(id: string, options?: unknown): GetBinaryStatePromise;

            /**
             * Deletes a binary state from the states DB. The ID will not be prefixed with the adapter namespace.
             */
            delForeignBinaryState(id: string, callback?: ErrorCallback): void;
            delForeignBinaryState(id: string, options: unknown, callback?: ErrorCallback): void;
            /**
             * Deletes a binary state from the states DB. The ID will not be prefixed with the adapter namespace.
             */
            delForeignBinaryStateAsync(id: string, options?: unknown): Promise<void>;

            // ==============================
            // enums

            /** Returns the enum tree, filtered by the optional enum name */
            getEnum(callback: GetEnumCallback): void;
            getEnum(name: string, callback: GetEnumCallback): void;
            getEnum(name: string, options: unknown, callback: GetEnumCallback): void;
            /** Returns the enum tree, filtered by the optional enum name */
            getEnumAsync(
                name: string,
                options?: unknown,
            ): Promise<{ result: Record<string, any>; requestEnum: string }>;
            /** Returns the enum tree, filtered by the optional enum name */
            getEnums(callback: GetEnumsCallback): void;
            getEnums(enumList: EnumList, callback: GetEnumsCallback): void;
            getEnums(enumList: EnumList, options: unknown, callback: GetEnumsCallback): void;
            /** Returns the enum tree, filtered by the optional enum name */
            getEnumsAsync(enumList: EnumList, options?: unknown): GetEnumsPromise;

            addChannelToEnum(
                enumName: string,
                addTo: string,
                parentDevice: string,
                channelName: string,
                callback?: ErrorCallback,
            ): void;
            addChannelToEnum(
                enumName: string,
                addTo: string,
                parentDevice: string,
                channelName: string,
                options: unknown,
                callback?: ErrorCallback,
            ): void;
            addChannelToEnumAsync(
                enumName: string,
                addTo: string,
                parentDevice: string,
                channelName: string,
                options?: unknown,
            ): Promise<void>;

            deleteChannelFromEnum(
                enumName: string,
                parentDevice: string,
                channelName: string,
                callback?: ErrorCallback,
            ): void;
            deleteChannelFromEnum(
                enumName: string,
                parentDevice: string,
                channelName: string,
                options: unknown,
                callback?: ErrorCallback,
            ): void;
            deleteChannelFromEnumAsync(
                enumName: string,
                parentDevice: string,
                channelName: string,
                options?: unknown,
            ): Promise<void>;

            addStateToEnum(
                enumName: string,
                addTo: string,
                parentDevice: string,
                parentChannel: string,
                stateName: string,
                callback?: ErrorCallback,
            ): void;
            addStateToEnum(
                enumName: string,
                addTo: string,
                parentDevice: string,
                parentChannel: string,
                stateName: string,
                options: unknown,
                callback?: ErrorCallback,
            ): void;
            addStateToEnumAsync(
                enumName: string,
                addTo: string,
                parentDevice: string,
                parentChannel: string,
                stateName: string,
                options?: unknown,
            ): Promise<void>;

            deleteStateFromEnum(
                enumName: string,
                parentDevice: string,
                parentChannel: string,
                stateName: string,
                callback?: ErrorCallback,
            ): void;
            deleteStateFromEnum(
                enumName: string,
                parentDevice: string,
                parentChannel: string,
                stateName: string,
                options: unknown,
                callback?: ErrorCallback,
            ): void;
            deleteStateFromEnumAsync(
                enumName: string,
                parentDevice: string,
                parentChannel: string,
                stateName: string,
                options?: unknown,
            ): Promise<void>;

            // ==============================
            // subscriptions

            /** Subscribe to changes of objects in this instance */
            subscribeObjects(pattern: string, callback?: ErrorCallback): void;
            subscribeObjects(pattern: string, options: unknown, callback?: ErrorCallback): void;
            /** Subscribe to changes of objects in this instance */
            subscribeObjectsAsync(pattern: string, options?: unknown): Promise<void>;
            /** Subscribe to changes of objects (which might not belong to this adapter) */
            subscribeForeignObjects(pattern: string, callback?: ErrorCallback): void;
            subscribeForeignObjects(pattern: string, options: unknown, callback?: ErrorCallback): void;
            /** Subscribe to changes of objects (which might not belong to this adapter) */
            subscribeForeignObjectsAsync(pattern: string, options?: unknown): Promise<void>;
            /** Unsubscribe from changes of objects in this instance */
            unsubscribeObjects(pattern: string, callback?: ErrorCallback): void;
            unsubscribeObjects(pattern: string, options: unknown, callback?: ErrorCallback): void;
            /** Unsubscribe from changes of objects in this instance */
            unsubscribeObjectsAsync(pattern: string, options?: unknown): Promise<void>;
            /** Unsubscribe from changes of objects (which might not belong to this adapter) */
            unsubscribeForeignObjects(pattern: string, callback?: ErrorCallback): void;
            unsubscribeForeignObjects(pattern: string, options: unknown, callback?: ErrorCallback): void;
            /** Unsubscribe from changes of objects (which might not belong to this adapter) */
            unsubscribeForeignObjectsAsync(pattern: string, options?: unknown): Promise<void>;

            /** Subscribe to changes of states in this instance */
            subscribeStates(pattern: string, callback?: ErrorCallback): void;
            subscribeStates(pattern: string, options: unknown, callback?: ErrorCallback): void;
            /** Subscribe to changes of states in this instance */
            subscribeStatesAsync(pattern: string, options?: unknown): Promise<void>;

            /** Subscribe to changes of states (which might not belong to this adapter) */
            subscribeForeignStates(pattern: string, callback?: ErrorCallback): void;
            subscribeForeignStates(pattern: string, options: unknown, callback?: ErrorCallback): void;
            /** Subscribe to changes of states (which might not belong to this adapter) */
            subscribeForeignStatesAsync(pattern: string, options?: unknown): Promise<void>;

            /**
             * Subscribe from changes of states in this instance
             * @param pattern - Must match the pattern used to subscribe
             */
            unsubscribeStates(pattern: string, callback?: ErrorCallback): void;
            unsubscribeStates(pattern: string, options: unknown, callback?: ErrorCallback): void;
            /**
             * Subscribe from changes of states in this instance
             * @param pattern - Must match the pattern used to subscribe
             */
            unsubscribeStatesAsync(pattern: string, options?: unknown): Promise<void>;
            /**
             * Subscribe from changes of states (which might not belong to this adapter)
             * @param pattern - Must match the pattern used to subscribe
             */
            unsubscribeForeignStates(pattern: string, callback?: ErrorCallback): void;
            unsubscribeForeignStates(pattern: string, options: unknown, callback?: ErrorCallback): void;
            /**
             * Subscribe from changes of states (which might not belong to this adapter)
             * @param pattern - Must match the pattern used to subscribe
             */
            unsubscribeForeignStatesAsync(pattern: string, options?: unknown): Promise<void>;

            // ==============================
            // devices and channels

            // tslint:disable:unified-signatures
            /** creates an object with type device */
            createDevice(deviceName: string, callback?: SetObjectCallback): void;
            createDevice(
                deviceName: string,
                common: Partial<ioBroker.DeviceCommon>,
                callback?: SetObjectCallback,
            ): void;
            createDevice(
                deviceName: string,
                common: Partial<ioBroker.DeviceCommon>,
                native: Record<string, any>,
                callback?: SetObjectCallback,
            ): void;
            createDevice(
                deviceName: string,
                common: Partial<ioBroker.DeviceCommon>,
                native: Record<string, any>,
                options: unknown,
                callback?: SetObjectCallback,
            ): void;
            /** creates an object with type device */
            createDeviceAsync(deviceName: string, common?: Partial<ioBroker.DeviceCommon>): SetObjectPromise;
            createDeviceAsync(
                deviceName: string,
                common: Partial<ioBroker.DeviceCommon>,
                native?: Record<string, any>,
            ): SetObjectPromise;
            createDeviceAsync(
                deviceName: string,
                common: Partial<ioBroker.DeviceCommon>,
                native: Record<string, any>,
                options?: unknown,
            ): SetObjectPromise;
            /** deletes a device, its channels and states */
            deleteDevice(deviceName: string, callback?: ErrorCallback): void;
            deleteDevice(deviceName: string, options: unknown, callback?: ErrorCallback): void;
            /** deletes a device, its channels and states */
            deleteDeviceAsync(deviceName: string, options?: unknown): Promise<void>;

            /** Creates an object with type channel. It must be located under a device */
            createChannel(parentDevice: string, channelName: string, callback?: SetObjectCallback): void;
            createChannel(
                parentDevice: string,
                channelName: string,
                roleOrCommon: string | Partial<ioBroker.ChannelCommon>,
                callback?: SetObjectCallback,
            ): void;
            createChannel(
                parentDevice: string,
                channelName: string,
                roleOrCommon: string | Partial<ioBroker.ChannelCommon>,
                native: Record<string, any>,
                callback?: SetObjectCallback,
            ): void;
            createChannel(
                parentDevice: string,
                channelName: string,
                roleOrCommon: string | Partial<ioBroker.ChannelCommon>,
                native: Record<string, any>,
                options: unknown,
                callback?: SetObjectCallback,
            ): void;
            /** Creates an object with type channel. It must be located under a device */
            createChannelAsync(
                parentDevice: string,
                channelName: string,
                roleOrCommon?: string | Partial<ioBroker.ChannelCommon>,
            ): SetObjectPromise;
            createChannelAsync(
                parentDevice: string,
                channelName: string,
                roleOrCommon: string | Partial<ioBroker.ChannelCommon>,
                native?: Record<string, any>,
            ): SetObjectPromise;
            createChannelAsync(
                parentDevice: string,
                channelName: string,
                roleOrCommon: string | Partial<ioBroker.ChannelCommon>,
                native: Record<string, any>,
                options?: unknown,
            ): SetObjectPromise;
            /** Deletes a channel and its states. It must have been created with `createChannel` */
            deleteChannel(channelName: string, options?: unknown, callback?: ErrorCallback): void;
            deleteChannel(parentDevice: string, channelName: string, options?: unknown, callback?: ErrorCallback): void;
            /** Deletes a channel and its states. It must have been created with `createChannel` */
            deleteChannelAsync(channelName: string, options?: unknown): Promise<void>;
            deleteChannelAsync(parentDevice: string, channelName: string, options?: unknown): Promise<void>;

            /**
             * Creates a state and the corresponding object. It must be located in a channel under a device
             */
            createState(
                parentDevice: string,
                parentChannel: string,
                stateName: string,
                callback?: SetObjectCallback,
            ): void;
            createState(
                parentDevice: string,
                parentChannel: string,
                stateName: string,
                roleOrCommon: string | Partial<ioBroker.StateCommon>,
                callback?: SetObjectCallback,
            ): void;
            createState(
                parentDevice: string,
                parentChannel: string,
                stateName: string,
                roleOrCommon: string | Partial<ioBroker.StateCommon>,
                native: Record<string, any>,
                callback?: SetObjectCallback,
            ): void;
            createState(
                parentDevice: string,
                parentChannel: string,
                stateName: string,
                roleOrCommon: string | Partial<ioBroker.StateCommon>,
                native: Record<string, any>,
                options: unknown,
                callback?: SetObjectCallback,
            ): void;
            /**
             * Creates a state and the corresponding object. It must be located in a channel under a device
             */
            createStateAsync(
                parentDevice: string,
                parentChannel: string,
                stateName: string,
                roleOrCommon?: string | Partial<ioBroker.StateCommon>,
            ): SetObjectPromise;
            createStateAsync(
                parentDevice: string,
                parentChannel: string,
                stateName: string,
                roleOrCommon: string | Partial<ioBroker.StateCommon>,
                native?: Record<string, any>,
            ): SetObjectPromise;
            createStateAsync(
                parentDevice: string,
                parentChannel: string,
                stateName: string,
                roleOrCommon: string | Partial<ioBroker.StateCommon>,
                native: Record<string, any>,
                options?: unknown,
            ): SetObjectPromise;
            /** Deletes a state. It must have been created with `createState` */
            deleteState(stateName: string, options?: unknown, callback?: ErrorCallback): void;
            deleteState(parentChannel: string, stateName: string, options?: unknown, callback?: ErrorCallback): void;
            deleteState(
                parentDevice: string,
                parentChannel: string,
                stateName: string,
                options?: unknown,
                callback?: ErrorCallback,
            ): void;
            /** Deletes a state. It must have been created with `createState` */
            deleteStateAsync(stateName: string, options?: unknown): Promise<void>;
            deleteStateAsync(parentChannel: string, stateName: string, options?: unknown): Promise<void>;
            deleteStateAsync(
                parentDevice: string,
                parentChannel: string,
                stateName: string,
                options?: unknown,
            ): Promise<void>;
            // tslint:enable:unified-signatures

            /**
             * Returns a list of all devices in this adapter instance
             * @param options (optional) Some internal options.
             * @param callback Is called when the operation has finished (successfully or not)
             */
            getDevices(callback: GetObjectsCallback3<DeviceObject>): void;
            getDevices(options: unknown, callback: GetObjectsCallback3<DeviceObject>): void;
            /**
             * Returns a list of all devices in this adapter instance
             * @param options (optional) Some internal options.
             * @param callback Is called when the operation has finished (successfully or not)
             */
            getDevicesAsync(options?: unknown): Promise<DeviceObject[]>;

            /**
             * Returns a list of all channels in this adapter instance
             * @param parentDevice (optional) Name of the parent device to filter the channels by
             * @param options (optional) Some internal options.
             * @param callback Is called when the operation has finished (successfully or not)
             */
            getChannels(callback: GetObjectsCallback3<ChannelObject>): void;
            getChannels(parentDevice: string, callback: GetObjectsCallback3<ChannelObject>): void;
            getChannels(parentDevice: string, options: unknown, callback: GetObjectsCallback3<ChannelObject>): void;
            /**
             * Returns a list of all channels in this adapter instance
             * @param parentDevice (optional) Name of the parent device to filter the channels by
             * @param options (optional) Some internal options.
             */
            getChannelsAsync(): Promise<ChannelObject[]>;
            // tslint:disable-next-line:unified-signatures
            getChannelsAsync(parentDevice: string, options?: unknown): Promise<ChannelObject[]>;
            /**
             * Returns a list of all channels in this adapter instance
             * @param parentDevice (optional) Name of the parent device to filter the channels by
             * @param options (optional) Some internal options.
             * @param callback Is called when the operation has finished (successfully or not)
             */
            getChannelsOf(callback: GetObjectsCallback3<ChannelObject>): void;
            getChannelsOf(parentDevice: string, callback: GetObjectsCallback3<ChannelObject>): void;
            getChannelsOf(parentDevice: string, options: unknown, callback: GetObjectsCallback3<ChannelObject>): void;
            /**
             * Returns a list of all channels in this adapter instance
             * @param parentDevice (optional) Name of the parent device to filter the channels by
             * @param options (optional) Some internal options.
             */
            getChannelsOfAsync(): Promise<ChannelObject[]>;
            // tslint:disable-next-line:unified-signatures
            getChannelsOfAsync(parentDevice: string, options?: unknown): Promise<ChannelObject[]>;

            /**
             * Returns a list of all states in this adapter instance
             * @param parentDevice (optional) Name of the parent device to filter the channels by
             * @param parentChannel (optional) Name of the parent channel to filter the channels by
             * @param options (optional) Some internal options.
             * @param callback Is called when the operation has finished (successfully or not)
             */
            getStatesOf(callback: GetObjectsCallback3<StateObject>): void;
            getStatesOf(parentDevice: string, callback: GetObjectsCallback3<StateObject>): void;
            getStatesOf(parentDevice: string, parentChannel: string, callback: GetObjectsCallback3<StateObject>): void;
            getStatesOf(
                parentDevice: string,
                parentChannel: string,
                options: unknown,
                callback: GetObjectsCallback3<StateObject>,
            ): void;
            /**
             * Returns a list of all states in this adapter instance
             * @param parentDevice (optional) Name of the parent device to filter the channels by
             * @param parentChannel (optional) Name of the parent channel to filter the channels by
             * @param options (optional) Some internal options.
             */
            // tslint:disable:unified-signatures
            getStatesOfAsync(): Promise<StateObject[]>;
            getStatesOfAsync(parentDevice: string, parentChannel?: string): Promise<StateObject[]>;
            getStatesOfAsync(parentDevice: string, parentChannel: string, options?: unknown): Promise<StateObject[]>;
            // tslint:enable:unified-signatures

            // ==============================
            // filesystem

            /**
             * reads the content of directory from DB for given adapter and path
             * @param adapterName - adapter name. If adapter name is null, default will be the name of the current adapter.
             * @param path - path to directory without adapter name. E.g. If you want to read "/vis.0/main/views.json", here must be "/main/views.json" and _adapter must be equal to "vis.0".
             */
            readDir(adapterName: string | null, path: string, callback: ReadDirCallback): void;
            readDir(adapterName: string | null, path: string, options: unknown, callback: ReadDirCallback): void;
            /**
             * reads the content of directory from DB for given adapter and path
             * @param adapterName - adapter name. If adapter name is null, default will be the name of the current adapter.
             * @param path - path to directory without adapter name. E.g. If you want to read "/vis.0/main/views.json", here must be "/main/views.json" and _adapter must be equal to "vis.0".
             */
            readDirAsync(adapterName: string | null, path: string, options?: unknown): ReadDirPromise;

            mkDir(adapterName: string | null, path: string, callback: ErrnoCallback): void;
            mkDir(adapterName: string | null, path: string, options: unknown, callback: ErrnoCallback): void;
            mkDirAsync(adapterName: string | null, path: string, options?: unknown): Promise<void>;

            readFile(adapterName: string | null, path: string, callback: ReadFileCallback): void;
            readFile(adapterName: string | null, path: string, options: unknown, callback: ReadFileCallback): void;
            readFileAsync(adapterName: string | null, path: string, options?: unknown): ReadFilePromise;

            writeFile(adapterName: string | null, path: string, data: Buffer | string, callback: ErrnoCallback): void;
            // options see https://github.com/ioBroker/ioBroker.js-controller/blob/master/lib/objects/objectsInMemServer.js#L599
            writeFile(
                adapterName: string | null,
                path: string,
                data: Buffer | string,
                options: unknown,
                callback: ErrnoCallback,
            ): void;
            writeFileAsync(
                adapterName: string | null,
                path: string,
                data: Buffer | string,
                options?: unknown,
            ): Promise<void>;

            /**
             * Checks if a file exists in the DB
             */
            fileExists(adapterName: string | null, path: string, callback: GenericCallback<boolean>): void;
            fileExists(
                adapterName: string | null,
                path: string,
                options: unknown,
                callback: GenericCallback<boolean>,
            ): void;
            fileExistsAsync(adapterName: string | null, path: string, options?: unknown): Promise<boolean>;

            /**
             * Deletes a given file
             * @param adapterName - adapter name. If adapter name is null, default will be the name of the current adapter.
             * @param path - path to directory without adapter name. E.g. If you want to delete "/vis.0/main/views.json", here must be "/main/views.json" and _adapter must be equal to "vis.0".
             */
            delFile(adapterName: string | null, path: string, callback: ErrnoCallback): void;
            delFile(adapterName: string | null, path: string, options: unknown, callback: ErrnoCallback): void;
            /**
             * Deletes a given file
             * @param adapterName - adapter name. If adapter name is null, default will be the name of the current adapter.
             * @param path - path to directory without adapter name. E.g. If you want to delete "/vis.0/main/views.json", here must be "/main/views.json" and _adapter must be equal to "vis.0".
             */
            delFileAsync(adapterName: string | null, path: string, options?: unknown): Promise<void>;

            /**
             * Deletes a given file
             * @param adapterName - adapter name. If adapter name is null, default will be the name of the current adapter.
             * @param path - path to directory without adapter name. E.g. If you want to delete "/vis.0/main/views.json", here must be "/main/views.json" and _adapter must be equal to "vis.0".
             */
            unlink(adapterName: string | null, path: string, callback: ErrnoCallback): void;
            unlink(adapterName: string | null, path: string, options: unknown, callback: ErrnoCallback): void;
            /**
             * Deletes a given file
             * @param adapterName - adapter name. If adapter name is null, default will be the name of the current adapter.
             * @param path - path to directory without adapter name. E.g. If you want to delete "/vis.0/main/views.json", here must be "/main/views.json" and _adapter must be equal to "vis.0".
             */
            unlinkAsync(adapterName: string | null, path: string, options?: unknown): Promise<void>;

            rename(adapterName: string | null, oldName: string, newName: string, callback: ErrnoCallback): void;
            rename(
                adapterName: string | null,
                oldName: string,
                newName: string,
                options: unknown,
                callback: ErrnoCallback,
            ): void;
            renameAsync(adapterName: string | null, oldName: string, newName: string, options?: unknown): Promise<void>;

            /**
             * Changes access rights of all files in the adapter directory
             * @param adapter Name of the adapter instance, e.g. "admin.0". Defaults to the namespace of this adapter.
             * @param path Pattern to match the file path against
             * @param options Mode of the access change as a number or hexadecimal string
             * @param callback Is called when the operation has finished (successfully or not)
             */
            chmodFile(
                adapter: string | null,
                path: string,
                options: { mode: number | string } | Record<string, any>,
                callback: ChownFileCallback,
            ): void;
            chmodFileAsync(
                adapter: string | null,
                path: string,
                options: { mode: number | string } | Record<string, any>,
            ): Promise<{ entries: ChownFileResult[]; id: string }>;

            /**
             * Checks if a given feature is supported by the current installation
             * @param featureName The name of the feature to test for
             */
            supportsFeature?: (featureName: string) => boolean;

            /**
             * Returns an instance of a loaded plugin
             * @param name The name of the plugin
             * @returns The plugin instance or null if it is not existent or not active
             */
            getPluginInstance(name: string): Plugin | null;

            /**
             * Returns the configuration for a loaded plugin
             * @param name The name of the plugin
             * @returns The plugin configuration or null if it is not existent or not active
             */
            getPluginConfig(name: string): Record<string, any> | null;

            // ==============================
            // formatting

            formatValue(value: number | string, format: any): string;
            formatValue(value: number | string, decimals: number, format: any): string;
            formatDate(dateObj: string | Date | number, format: string): string;
            formatDate(dateObj: string | Date | number, isDuration: boolean | string, format: string): string;

            // =============================================
            // Events exposed through EventEmitter interface
            // =============================================
            on(event: 'ready', handler: ReadyHandler): this;
            on(event: 'stateChange', handler: StateChangeHandler): this;
            on(event: 'objectChange', handler: ObjectChangeHandler): this;
            on(event: 'message', handler: MessageHandler): this;
            on(event: 'unload', handler: UnloadHandler): this;
            // The error event handler can not be attached later

            removeListener(event: 'ready', handler: ReadyHandler): this;
            removeListener(event: 'stateChange', handler: StateChangeHandler): this;
            removeListener(event: 'objectChange', handler: ObjectChangeHandler): this;
            removeListener(event: 'message', handler: MessageHandler): this;
            removeListener(event: 'unload', handler: UnloadHandler): this;

            removeAllListeners(event?: 'ready' | 'unload' | 'stateChange' | 'objectChange' | 'message'): this;

            // =============================================
            // Managed version of builtin setTimeout/setInterval/clear...
            // =============================================

            /** Creates a timeout that can automatically be cleared when the adapter is terminated */
            setTimeout<T extends any[]>(callback: (...args: T) => void, ms: number, ...args: T): Timeout;
            clearTimeout(timeoutId: Timeout): void;

            /** Creates an interval that can automatically be cleared when the adapter is terminated */
            setInterval<T extends any[]>(callback: (...args: T) => void, ms: number, ...args: T): Interval;
            clearInterval(intervalId: Interval): void;

            /**
             * Returns a Promise that resolves after the given delay in milliseconds.
             * This will automatically be cleared (and not resolve) when the adapter is terminated in the meantime.
             */
            delay(delayMs: number): Promise<void>;
        } // end interface Adapter

        type ReadyHandler = () => void | Promise<void>;
        type ObjectChangeHandler = (id: string, obj: ioBroker.Object | null | undefined) => void | Promise<void>;
        type StateChangeHandler = (id: string, obj: State | null | undefined) => void | Promise<void>;
        type MessageHandler = (obj: Message) => void | Promise<void>;
        type UnloadHandler = ((callback: EmptyCallback) => void) | (() => Promise<void>);
        type ErrorHandler = (err: Error) => boolean;

        type EmptyCallback = () => void;
        type ErrorCallback = (err?: Error | null) => void;
        /** Special variant of ErrorCallback for methods where Node.js returns an ErrnoException */
        type ErrnoCallback = (err?: NodeJS.ErrnoException | null) => void;
        // TODO: Redefine callbacks as subclass of GenericCallback
        type GenericCallback<T> = (err?: Error | null, result?: T) => void;

        type MessageCallback = (response?: Message) => void;

        type SetObjectCallback = (err?: Error | null, obj?: { id: string }) => void;
        type SetObjectPromise = Promise<NonNullCallbackReturnTypeOf<SetObjectCallback>>;

        type GetObjectCallback<T extends string = string> = (
            err?: Error | null,
            obj?: ObjectIdToObjectType<T> | null,
        ) => void;
        type GetObjectPromise<T extends string = string> = Promise<CallbackReturnTypeOf<GetObjectCallback<T>>>;

        type GetEnumCallback = (err?: Error | null, enums?: Record<string, Enum>, requestedEnum?: string) => void;
        type GetEnumsCallback = (
            err?: Error | null,
            result?: {
                [groupName: string]: Record<string, Enum>;
            },
        ) => void;
        type GetEnumsPromise = Promise<NonNullCallbackReturnTypeOf<GetEnumsCallback>>;

        type GetObjectsCallback = (err?: Error | null, objects?: Record<string, ioBroker.Object>) => void;
        type GetObjectsPromise = Promise<NonNullCallbackReturnTypeOf<GetObjectsCallback>>;

        type GetObjectsCallbackTyped<T extends ObjectType> = (
            err?: Error | null,
            objects?: Record<string, ioBroker.AnyObject & { type: T }>,
        ) => void;
        type GetObjectsPromiseTyped<T extends ObjectType> = Promise<
            NonNullCallbackReturnTypeOf<GetObjectsCallbackTyped<T>>
        >;

        type FindObjectCallback = (
            /** If an error happened, this contains the message */
            err?: Error | null,
            /** If an object was found, this contains the ID */
            id?: string,
            /** If an object was found, this contains the common.name */
            name?: ObjectCommon['name'],
        ) => void;

        // This is a version used by GetDevices/GetChannelsOf/GetStatesOf
        type GetObjectsCallback3<T extends BaseObject> = (err?: Error | null, result?: T[]) => void;

        type SecondParameterOf<T extends (...args: any[]) => any> = T extends (
            arg0: any,
            arg1: infer R,
            ...args: any[]
        ) => any
            ? R
            : never;
        /** Infers the return type from a callback-style API and strips out null and undefined */
        type NonNullCallbackReturnTypeOf<T extends (...args: any[]) => any> = Exclude<
            SecondParameterOf<T>,
            null | undefined
        >;
        /** Infers the return type from a callback-style API and and leaves null and undefined in */
        type CallbackReturnTypeOf<T extends (...args: any[]) => any> = SecondParameterOf<T>;

        type GetStateCallback = (err: Error | null, state?: State | null) => void;
        type GetStatePromise = Promise<CallbackReturnTypeOf<GetStateCallback>>;

        type GetStatesCallback = (err: Error | null, states?: Record<string, State>) => void;
        type GetStatesPromise = Promise<NonNullCallbackReturnTypeOf<GetStatesCallback>>;

        type GetBinaryStateCallback = (err?: Error | null, state?: Buffer) => void;
        type GetBinaryStatePromise = Promise<CallbackReturnTypeOf<GetBinaryStateCallback>>;

        type SetStateCallback = (err?: Error | null, id?: string) => void;
        type SetStatePromise = Promise<NonNullCallbackReturnTypeOf<SetStateCallback>>;

        type SetStateChangedCallback = (err: Error | null, id?: string, notChanged?: boolean) => void;
        type SetStateChangedPromise = Promise<NonNullCallbackReturnTypeOf<SetStateChangedCallback>>;

        type DeleteStateCallback = (err?: Error | null, id?: string) => void;

        type GetHistoryResult = Array<State & { id?: string }>;
        type GetHistoryCallback = (
            err: Error | null,
            result?: GetHistoryResult,
            step?: number,
            sessionId?: string,
        ) => void;

        /** Contains the return values of readDir */
        interface ReadDirResult {
            /** Name of the file or directory */
            file: string;
            /** File system stats */
            // https://github.com/ioBroker/adapter-core/issues/455
            // Sometimes the objects db just returns an empty object
            stats: fs.Stats | Record<string, never>;
            /** Whether this is a directory or a file */
            isDir: boolean;
            /** Access rights */
            acl?: EvaluatedFileACL;
            /** Date of last modification */
            modifiedAt?: number;
            /** Date of creation */
            createdAt?: number;
        }
        type ReadDirCallback = (err?: NodeJS.ErrnoException | null, entries?: ReadDirResult[]) => void;
        type ReadDirPromise = Promise<NonNullCallbackReturnTypeOf<ReadDirCallback>>;

        type ReadFileCallback = (err?: NodeJS.ErrnoException | null, data?: Buffer | string, mimeType?: string) => void;
        type ReadFilePromise = Promise<{ data: string | Buffer; mimeType?: string }>;

        /** Contains the return values of chownFile */
        interface ChownFileResult {
            /** The parent directory of the processed file or directory */
            path: string;
            /** Name of the file or directory */
            file: string;
            /** File system stats */
            stats: fs.Stats;
            /** Whether this is a directory or a file */
            isDir: boolean;
            /** Access rights */
            acl: FileACL;
            /** Date of last modification */
            modifiedAt: number;
            /** Date of creation */
            createdAt: number;
        }
        type ChownFileCallback = (err?: NodeJS.ErrnoException | null, processed?: ChownFileResult[]) => void;

        /** Contains the return values of rm */
        interface RmResult {
            /** The parent directory of the deleted file or directory */
            path: string;
            /** The name of the deleted file or directory */
            file: string;
        }
        type RmCallback = (err?: NodeJS.ErrnoException | null, entries?: RmResult[]) => void;

        type ChownObjectCallback = (err?: NodeJS.ErrnoException | null, list?: ioBroker.Object[]) => void;

        type GetConfigKeysCallback = (err?: Error | null, list?: string[]) => void;

        interface GetObjectViewItem<T> {
            /** The ID of this object */
            id: string;
            /** A copy of the object from the DB */
            value: T | null;
        }
        type GetObjectViewCallback<T> = (err?: Error | null, result?: { rows: Array<GetObjectViewItem<T>> }) => void;
        type GetObjectViewPromise<T> = Promise<NonNullCallbackReturnTypeOf<GetObjectViewCallback<T>>>;

        interface GetObjectListItem extends GetObjectViewItem<ioBroker.Object> {
            /** A copy of the object */
            value: ioBroker.Object;
            /** The same as @link{value} */
            doc: ioBroker.Object;
        }
        type GetObjectListCallback = (err?: Error | null, result?: { rows: GetObjectListItem[] }) => void;
        type GetObjectListPromise = Promise<NonNullCallbackReturnTypeOf<GetObjectListCallback>>;

        type ExtendObjectCallback = (
            err?: Error | null,
            result?: { id: string; value: ioBroker.Object },
            id?: string,
        ) => void;

        type GetSessionCallback = (session: Session) => void;

        /**
         * A timeout identifier that can be used to clear the timeout.
         * @remarks Note that this is actually a `number` type, but it
         * is not compatible with `globalThis.clearTimeout`. Provide
         * this to iobroker's `adatper.clearTimeout` instead.
         */
        interface Timeout {
            __ioBrokerBrand: 'Timeout';
        }
        /**
         * An interval identifier that can be used to clear the interval.
         * @remarks Note that this is actually a `number` type, but it
         * is not compatible with `globalThis.clearInterval`. Provide
         * this to iobroker's `adapter.clearInterval` instead.
         */
        interface Interval {
            __ioBrokerBrand: 'Interval';
        }
    } // end namespace ioBroker
} // end declare global
