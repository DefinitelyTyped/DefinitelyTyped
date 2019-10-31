// Type definitions for ioBroker 1.4
// Project: https://github.com/ioBroker/ioBroker, http://iobroker.net
// Definitions by: AlCalzone <https://github.com/AlCalzone>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.2

// Note: This is not the definition for the package `iobroker`,
// which is just an installer, not a library.
// The definitions may change with updates to ioBroker.js-controller

/// <reference types="node" />
import * as fs from "fs";

// tslint:disable:no-namespace
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

        interface State {
            /** The value of the state. */
            val: any;

            /** Direction flag: false for desired value and true for actual value. Default: false. */
            ack: boolean;

            /** Unix timestamp. Default: current time */
            ts: number;

            /** Unix timestamp of the last time the value changed */
            lc: number;

            /** Name of the adapter instance which set the value, e.g. "system.adapter.web.0" */
            from: string;

            /** Optional time in seconds after which the state is reset to null */
            expire?: number;

            /** Optional quality of the state value */
            q?: StateQuality;

            /** Optional comment */
            c?: string;
        }

        /** Provides low-level access to the ioBroker states DB */
        interface States {
            /**
             * Returns a list of states with the given ids
             * @param keys IDs of the states to be retrieved
             * @param callback Is called when the operation has finished (successfully or not)
             * @param dontModify unused
             */
            getStates(keys: string[], callback: GetStatesCallback2, dontModify?: any): void;

            /**
             * Returns the state with the given id
             * @param id ID of the state to be retrieved
             * @param callback Is called when the operation has finished (successfully or not)
             */
            getState(id: string, callback: GetStateCallback): void;

            /**
             * Stores a state in the db
             * @param id ID of the state to be stored
             * @param state The state to be stored in the db
             * @param callback Is called when the operation has finished (successfully or not)
             */
            setState(id: string, state?: string | number | boolean | State | Partial<State>, callback?: SetStateCallback): void;

            /**
             * Updates a state in memory without triggering a save
             * @param id ID of the state to be stored
             * @param state The state to be updated
             * @param callback Is called when the operation has finished (successfully or not)
             */
            setRawState(id: string, state: State, callback?: SetStateCallback): void;

            /**
             * Deletes a state
             * @param id ID of the state to be stored
             * @param callback Is called when the operation has finished (successfully or not)
             */
            delState(id: string, callback: DeleteStateCallback): void;

            /**
             * Retrieves all ids of states matching @link{pattern}
             * @param pattern The pattern to match against
             * @param callback Is called when the operation has finished (successfully or not)
             * @param dontModify unused
             */
            getKeys(pattern: string, callback: GetConfigKeysCallback, dontModify?: any): void;

            /**
             * Subscribe to changes of all states matching @link{pattern}
             * @param pattern The pattern to match against
             * @param callback Is called when the operation has finished (successfully or not)
             */
            subscribe(pattern: string, cb: EmptyCallback): void;
            /**
             * Unsubscribe from changes of all states matching @link{pattern}
             * @param pattern The pattern to match against
             * @param callback Is called when the operation has finished (successfully or not)
             */
            unsubscribe(pattern: string, cb: EmptyCallback): void;

            /**
             * Register an adapter instance as subscribable.
             * This means that the instance can read information about all subscriptions to its states
             * and will be notified of changes.
             * @param instance Adapter instance to register, e.g. "admin.0"
             * @param cb Is called when the operation has finished (successfully or not)
             */
            registerAdapterSubs(instance: string, cb?: (error: null, success: boolean) => void): void;

            /**
             * Unregister an adapter instance as subscribable.
             * @param instance Adapter instance to unregister, e.g. "admin.0"
             * @param cb Is called when the operation has finished (successfully or not)
             */
            unregisterAdapterSubs(instance: string, cb?: (error: null, success: boolean) => void): void;

            /**
             * EDUCATED GUESS: Notify all clients about changes to an object
             * @param type object type
             * @param id State/object id
             * @param obj The changed object
             */
            publishAll(type: string, id: string, obj: Message): void;

            // TODO: Documentation for these functions is missing
            pushMessage(id: string, state: Message, callback: SetStateCallback): void;
            lenMessage(id: string, callback: GenericCallback<number>): void;
            getMessage(id: string, callback: GenericCallback<Message>): void;
            delMessage(id: string, messageId: number, callback: ErrorCallback): void;
            clearAllMessages(callback?: EmptyCallback): void;
            subscribeMessage(id: string, cb: EmptyCallback): void;
            unsubscribeMessage(id: string, cb: EmptyCallback): void;

            pushLog(id: string, log: Log, callback: SetStateCallback): void;
            lenLog(id: string, callback: GenericCallback<number>): void;
            getLog(id: string, callback: GenericCallback<Log>): void;
            delLog(id: string, logId: string, callback: ErrorCallback): void;
            clearAllLogs(callback?: EmptyCallback): void;
            subscribeLog(id: string, cb: EmptyCallback): void;
            unsubscribeLog(id: string, cb: EmptyCallback): void;

            getSession(id: string, callback: GetSessionCallback): void;
            setSession(id: string, expire: number, callback?: EmptyCallback): void;
            setSession(id: string, expire: number, obj: Session, callback?: EmptyCallback): void;
            destroySession(id: string, callback?: EmptyCallback): void;

            /**
             * Retrieves a copy of the object with the given ID
             * @param id Id of the object to find
             * @param callback Is called when the operation has finished (successfully or not)
             */
            getConfig(id: string, callback: GetObjectCallback): void;

            /**
             * Returns a list of config keys matching <pattern>
             * @param pattern Pattern to match against
             * @param callback Is called when the operation has finished (successfully or not)
             * @param dontModify unused
             */
            getConfigKeys(pattern: string, callback: GetConfigKeysCallback, dontModify?: any): void;

            /**
             * Returns a list of objects with the given ids
             * @param keys IDs of the objects to be retrieved
             * @param callback Is called when the operation has finished (successfully or not)
             * @param dontModify unused
             */
            getConfigs(keys: string[], callback: GetObjectsCallback2, dontModify?: any): void;

            /**
             * Creates or overwrites a config object in the object db
             * @param id ID of the object
             * @param obj Object to store
             * @param callback Is called when the operation has finished (successfully or not)
             */
            setConfig(id: string, obj: ioBroker.Object, callback: SetObjectCallback): void;

            /**
             * Deletes a config object in the object db
             * @param id ID of the object
             * @param callback Is called when the operation has finished (successfully or not)
             */
            delConfig(id: string, callback: ErrorCallback): void;

            /**
             * Subscribe to config object changes
             * @param pattern The pattern to match against
             */
            subscribeConfig(pattern: string, callback: EmptyCallback): void;

            /**
             * Unsubscribe from config object changes
             * @param pattern The pattern to match against
             */
            unsubscribeConfig(pattern: string, callback: EmptyCallback): void;

            /**
             * Writes a binary state into Redis
             * @param id The id of the state
             * @param data The data to be written
             * @param callback Is called when the operation has finished (successfully or not)
             */
            setBinaryState(id: string, data: Buffer, callback: SetStateCallback): void;

            /**
             * Reads a binary state from Redis
             * @param id The id of the state
             * @param callback Is called when the operation has finished (successfully or not)
             */
            getBinaryState(id: string, callback: GetBinaryStateCallback): void;

            /**
             * Deletes a binary state from Redis
             * @param id The id of the state to be deleted
             * @param callback Is called when the operation has finished (successfully or not)
             */
            delBinaryState(id: string, callback: DeleteStateCallback): void;

            /** Destructor of the class. Call this before shutting down */
            destroy(): void;
        } // end interface States

        type Session = any; // TODO: implement

        type ObjectType = "state" | "channel" | "device";
        type CommonType = "number" | "string" | "boolean" | "array" | "object" | "mixed" | "file";

        // Maybe this should extend Record<string, any>,
        // but the extra properties aren't defined anywhere,
        // so I'd rather force the user to explicitly state
        // they know what they're doing by casting to any
        interface ObjectCommon {
            /** name of this object */
            name: string;

            // Icon and role aren't defined in SCHEMA.md,
            // but they are being used by some adapters
            /** Icon for this object */
            icon?: string;
            /** role of the object */
            role?: string;
        }

        interface StateCommon extends ObjectCommon {
            /** Type of this state. See https://github.com/ioBroker/ioBroker/blob/master/doc/SCHEMA.md#state-commonrole for a detailed description */
            type?: CommonType;
            /** minimum value */
            min?: number;
            /** maximum value */
            max?: number;
            /** unit of the value */
            unit?: string;
            /** the default value */
            def?: any;
            /** description of this state */
            desc?: string;

            /** if this state is readable */
            read: boolean;
            /** if this state is writable */
            write: boolean;
            /** role of the state (used in user interfaces to indicate which widget to choose) */
            role: string;

            /**
             * Dictionary of possible values for this state in the form
             * <pre>
             * {
             *     "internal value 1": "displayed value 1",
             *     "internal value 2": "displayed value 2",
             *     ...
             * }
             * </pre>
             * In old ioBroker versions, this could also be a string of the form
             * "val1:text1;val2:text2" (now deprecated)
             */
            states?: Record<string, string> | string;

            /** ID of a helper state indicating if the handler of this state is working */
            workingID?: string;

            /** attached history information */
            history?: any;

            /** Custom settings for this state */
            custom?: Record<string, any>;
        }
        interface ChannelCommon extends ObjectCommon {
            /** description of this channel */
            desc?: string;

            // Only states can have common.custom
            custom?: undefined;
        }
        interface DeviceCommon extends ObjectCommon {
            // Only states can have common.custom
            custom?: undefined;
             // TODO: any other definition for device?
        }
        interface OtherCommon extends ObjectCommon {
            [propName: string]: any;

            // Only states can have common.custom
            custom?: undefined;
        }

        interface BaseObject {
            /** The ID of this object */
            _id: string;
            native: Record<string, any>;
            enums?: Record<string, string>;
            type: string; // specified in the derived interfaces
            common: StateCommon | ChannelCommon | DeviceCommon | OtherCommon;
            acl?: ObjectACL;
        }

        interface StateObject extends BaseObject {
            type: "state";
            common: StateCommon;
            acl?: StateACL;
        }
        interface PartialStateObject extends Partial<Pick<StateObject, "_id" | "native" | "enums" | "type">> {
            common?: Partial<StateCommon>;
            acl?: Partial<StateACL>;
        }

        interface ChannelObject extends BaseObject {
            type: "channel";
            common: ChannelCommon;
        }
        interface PartialChannelObject extends Partial<Pick<ChannelObject, "_id" | "native" | "enums" | "type" | "acl">> {
            common?: Partial<ChannelCommon>;
        }

        interface DeviceObject extends BaseObject {
            type: "device";
            common: DeviceCommon;
        }
        interface PartialDeviceObject extends Partial<Pick<DeviceObject, "_id" | "native" | "enums" | "type" | "acl">> {
            common?: Partial<DeviceCommon>;
        }

        interface OtherObject extends BaseObject {
            type: "adapter" | "config" | "enum" | "group" | "host" | "info" | "instance" | "meta" | "script" | "user";
            common: OtherCommon;
        }
        interface PartialOtherObject extends Partial<Pick<OtherObject, "_id" | "native" | "enums" | "type" | "acl">> {
            common?: Partial<ObjectCommon>;
        }

        type Object = StateObject | ChannelObject | DeviceObject | OtherObject;

        type SettableObjectWorker<T extends ioBroker.Object> =
            Pick<T, Exclude<keyof T, "_id" | "acl">> & {
                _id?: T["_id"];
                acl?: T["acl"];
            };

        // In set[Foreign]Object[NotExists] methods, the ID and acl of the object is optional
        type SettableObject = SettableObjectWorker<ioBroker.Object>;
        type PartialObject = PartialStateObject | PartialChannelObject | PartialDeviceObject | PartialOtherObject;

        /** Defines access rights for a single file */
        interface FileACL {
            /** Full name of the user who owns this file, e.g. "system.user.admin" */
            owner: string;
            /** Full name of the group who owns this file, e.g. "system.group.administrator" */
            ownerGroup: string;
            /** Linux-type permissions defining access to this file */
            permissions: number;
        }
        /** Defines access rights for a single file, applied to a user or group */
        interface EvaluatedFileACL extends FileACL {
            /** Whether the user may read the file */
            read: boolean;
            /** Whether the user may write the file */
            write: boolean;
        }

        /** Defines access rights for a single object */
        interface ObjectACL {
            /** Full name of the user who owns this object, e.g. "system.user.admin" */
            owner: string;
            /** Full name of the group who owns this object, e.g. "system.group.administrator" */
            ownerGroup: string;
            /** Linux-type permissions defining access to this object */
            object: number;
        }
        /** Defines access rights for a single state object */
        interface StateACL extends ObjectACL {
            /** Linux-type permissions defining access to this state */
            state: number;
        }

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
            "delete": boolean;
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
                execute: boolean,
                http: boolean,
                sendto: boolean,
            };
        }

        interface Permission {
            /** The type of the permission */
            type: string;
            /** Which kind of operation is required */
            operation: string;
        }
        interface ObjectOrStatePermission extends Permission {
            type: "object" | "file" | "users" | "state";
            operation: "list" | "read" | "write" | "create" | "delete";
        }
        interface OtherPermission extends Permission {
            type: "other";
            operation: "execute" | "http" | "sendto";
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

        /** Parameters for @link{Objects.getObjectView} */
        interface GetObjectViewParams {
            /** First id to include in the return list */
            startkey: string;
            /** Last id to include in the return list */
            endkey: string;
        }

        /** Parameters for @link{Objects.getObjectList} */
        interface GetObjectListParams extends GetObjectViewParams {
            /** Whether docs should be included in the return list */ // TODO: What are docs?
            include_docs: boolean;
        }

        /** Provides low-level access to the ioBroker objects db */
        interface Objects {
            /**
             * For a given user, returns the groups they belong to, and their access rights
             * @param user Name of the user. Has to start with "system.user."
             * @param callback The callback function to be invoked with the return values
             */
            getUserGroup(user: string, callback: GetUserGroupCallback): void;

            /**
             * Determines the mime type for a given file extension
             * @param ext File extension, including the leading dot, e.g. ".zip"
             */
            getMimeType(ext: string): { mimeType: string, isBinary: boolean };

            /**
             * Writes a file.
             * @param id Name of the root directory. This should be the adapter instance, e.g. "admin.0"
             * @param name File name
             * @param data Contents of the file
             * @param options (optional) MIME type of the file (string). Or some internal options.
             * @param callback Is called when the operation has finished (successfully or not)
             */
            writeFile(id: string, name: string, data: Buffer | string, callback: ErrorCallback): void;
            writeFile(id: string, name: string, data: Buffer | string, options: string | unknown, callback: ErrorCallback): void;

            /**
             * Reads a file.
             * @param id Name of the root directory. This should be the adapter instance, e.g. "admin.0"
             * @param name File name
             * @param options (optional) Some internal options.
             * @param callback Is called when the operation has finished (successfully or not)
             */
            readFile(id: string, name: string, callback: ReadFileCallback): void;
            readFile(id: string, name: string, options: unknown, callback: ReadFileCallback): void;

            /**
             * Deletes a file.
             * @param id Name of the root directory. This should be the adapter instance, e.g. "admin.0"
             * @param name File name
             * @param options (optional) Some internal options.
             * @param callback Is called when the operation has finished (successfully or not)
             */
            unlink(id: string, name: string, callback: ErrorCallback): void;
            unlink(id: string, name: string, options: unknown, callback: ErrorCallback): void;
            /**
             * Deletes a file.
             * @param id Name of the root directory. This should be the adapter instance, e.g. "admin.0"
             * @param name File name
             * @param options (optional) Some internal options.
             * @param callback Is called when the operation has finished (successfully or not)
             */
            delFile(id: string, name: string, callback: ErrorCallback): void;
            delFile(id: string, name: string, options: unknown, callback: ErrorCallback): void;

            /**
             * Finds all files and directories starting with <name>
             * @param id Name of the root directory. This should be the adapter instance, e.g. "admin.0"
             * @param name File or directory name
             * @param options (optional) Some internal options.
             * @param callback Is called when the operation has finished (successfully or not)
             */
            readDir(id: string, name: string, callback: ReadDirCallback): void;
            readDir(id: string, name: string, options: unknown, callback: ReadDirCallback): void;

            /**
             * Renames a file or directory
             * @param id Name of the root directory. This should be the adapter instance, e.g. "admin.0"
             * @param oldName Old file or directory name
             * @param newName Name to rename to
             * @param options (optional) Some internal options.
             * @param callback Is called when the operation has finished (successfully or not)
             */
            rename(id: string, oldName: string, newName: string, callback: ErrorCallback): void;
            rename(id: string, oldName: string, newName: string, options: unknown, callback: ErrorCallback): void;

            /**
             * Creates an empty file with the given name
             * @param id Name of the root directory. This should be the adapter instance, e.g. "admin.0"
             * @param name File name
             * @param options (optional) Some internal options.
             * @param callback Is called when the operation has finished (successfully or not)
             */
            touch(id: string, name: string, callback: ErrorCallback): void;
            touch(id: string, name: string, options: unknown, callback: ErrorCallback): void;

            /**
             * Deletes all files in the root directory matching <name>
             * @param id Name of the root directory. This should be the adapter instance, e.g. "admin.0"
             * @param name Pattern to match against
             * @param options (optional) Some internal options.
             * @param callback Is called when the operation has finished (successfully or not)
             */
            rm(id: string, name: string, callback: RmCallback): void;
            rm(id: string, name: string, options: unknown, callback: RmCallback): void;

            /**
             * Creates an empty directory with the given name
             * @param id Name of the root directory. This should be the adapter instance, e.g. "admin.0"
             * @param name Directory name
             * @param options (optional) Some internal options.
             * @param callback Is called when the operation has finished (successfully or not)
             */
            mkDir(id: string, name: string, callback: ErrorCallback): void;
            mkDir(id: string, name: string, options: unknown, callback: ErrorCallback): void;

            /**
             * Takes possession all files in the root directory matching <name>
             * @param id Name of the root directory. This should be the adapter instance, e.g. "admin.0"
             * @param name Pattern to match against
             * @param options (optional) Some internal options.
             * @param callback Is called when the operation has finished (successfully or not)
             */
            chownFile(id: string, name: string, callback: ChownFileCallback): void;
            chownFile(id: string, name: string, options: unknown, callback: ChownFileCallback): void;

            /**
             * Changes access rights of all files in the root directory matching <name>
             * @param id Name of the root directory. This should be the adapter instance, e.g. "admin.0"
             * @param name Pattern to match against
             * @param options Mode of the access change as a number or hexadecimal string
             * @param callback Is called when the operation has finished (successfully or not)
             */
            chmodFile(id: string, name: string, options: { mode: number | string } | Record<string, any>, callback: ChownFileCallback): void;

            // not documented. enabled = true seems to disable the cache
            // enableFileCache(enabled, options, callback)

            /**
             * Subscribe to object changes
             * @param pattern The pattern to match against
             */
            subscribeConfig(pattern: string, callback: EmptyCallback): void;
            subscribeConfig(pattern: string, options: unknown, callback: EmptyCallback): void;
            /**
             * Subscribe to object changes
             * @param pattern The pattern to match against
             */
            subscribe(pattern: string, callback: EmptyCallback): void;
            subscribe(pattern: string, options: unknown, callback: EmptyCallback): void;

            /**
             * Unsubscribe from object changes
             * @param pattern The pattern to match against
             */
            unsubscribeConfig(pattern: string, callback: EmptyCallback): void;
            unsubscribeConfig(pattern: string, options: unknown, callback: EmptyCallback): void;
            /**
             * Unsubscribe from object changes
             * @param pattern The pattern to match against
             */
            unsubscribe(pattern: string, callback: EmptyCallback): void;
            unsubscribe(pattern: string, options: unknown, callback: EmptyCallback): void;

            /**
             * Takes possession of all objects matching <pattern>
             * @param pattern Pattern to match against
             * @param options (optional) Some internal options.
             * @param callback Is called when the operation has finished (successfully or not)
             */
            chownObject(pattern: string, callback: ChownObjectCallback): void;
            chownObject(pattern: string, options: unknown, callback: ChownObjectCallback): void;

            /**
             * Changes access rights of all objects matching <pattern>
             * @param pattern Pattern to match against
             * @param options Mode of the access change as a number or hexadecimal string
             * @param callback Is called when the operation has finished (successfully or not)
             */
            chmodObject(pattern: string, callback: ChownObjectCallback): void;
            chmodObject(pattern: string, options: unknown, callback: ChownObjectCallback): void;

            /**
             * Retrieves a copy of the object with the given ID
             * @param id Id of the object to find
             * @param options (optional) Some internal options.
             * @param callback Is called when the operation has finished (successfully or not)
             */
            getObject(id: string, callback: GetObjectCallback): void;
            getObject(id: string, options: unknown, callback: GetObjectCallback): void;
            /**
             * Retrieves a copy of the object with the given ID
             * @param id Id of the object to find
             * @param options (optional) Some internal options.
             * @param callback Is called when the operation has finished (successfully or not)
             */
            getConfig(id: string, callback: GetObjectCallback): void;
            getConfig(id: string, options: unknown, callback: GetObjectCallback): void;

            /**
             * Returns a list of config keys matching <pattern>
             * @param pattern Pattern to match against
             * @param options (optional) Some internal options.
             * @param callback Is called when the operation has finished (successfully or not)
             * @param dontModify unused
             */
            getConfigKeys(pattern: string, callback: GetConfigKeysCallback, dontModify?: any): void;
            getConfigKeys(pattern: string, options: unknown, callback: GetConfigKeysCallback, dontModify?: any): void;

            /**
             * Returns a list of objects with the given ids
             * @param keys IDs of the objects to be retrieved
             * @param options (optional) Some internal options.
             * @param callback Is called when the operation has finished (successfully or not)
             * @param dontModify unused
             */
            getObjects(keys: string[], callback: GetObjectsCallback2, dontModify?: any): void;
            getObjects(keys: string[], options: unknown, callback: GetObjectsCallback2, dontModify?: any): void;
            /**
             * Returns a list of objects with the given ids
             * @param keys IDs of the objects to be retrieved
             * @param options (optional) Some internal options.
             * @param callback Is called when the operation has finished (successfully or not)
             * @param dontModify unused
             */
            getConfigs(keys: string[], callback: GetObjectsCallback2, dontModify?: any): void;
            getConfigs(keys: string[], options: unknown, callback: GetObjectsCallback2, dontModify?: any): void;

            /**
             * Creates or overwrites an object in the object db
             * @param id ID of the object
             * @param obj Object to store
             * @param options (optional) Some internal options.
             * @param callback Is called when the operation has finished (successfully or not)
             */
            setObject(id: string, obj: ioBroker.SettableObject, callback: SetObjectCallback): void;
            setObject(id: string, obj: ioBroker.SettableObject, options: unknown, callback: SetObjectCallback): void;
            /**
             * Creates or overwrites an object in the object db
             * @param id ID of the object
             * @param obj Object to store
             * @param options (optional) Some internal options.
             * @param callback Is called when the operation has finished (successfully or not)
             */
            setConfig(id: string, obj: ioBroker.SettableObject, callback: SetObjectCallback): void;
            setConfig(id: string, obj: ioBroker.SettableObject, options: unknown, callback: SetObjectCallback): void;

            /**
             * Deletes an object in the object db
             * @param id ID of the object
             * @param options (optional) Some internal options.
             * @param callback Is called when the operation has finished (successfully or not)
             */
            delObject(id: string, callback: ErrorCallback): void;
            delObject(id: string, options: unknown, callback: ErrorCallback): void;
            /**
             * Deletes an object in the object db
             * @param id ID of the object
             * @param options (optional) Some internal options.
             * @param callback Is called when the operation has finished (successfully or not)
             */
            delConfig(id: string, callback: ErrorCallback): void;
            delConfig(id: string, options: unknown, callback: ErrorCallback): void;

            /**
             * Returns a list of objects with id between params.startkey and params.endkey
             * @param params Parameters determining the objects included in the return list. Null to include all objects
             * @param options (optional) If the returned list should be sorted. And some internal options.
             * @param callback Is called when the operation has finished (successfully or not)
             */
            getObjectList(params: GetObjectListParams | null, callback: GetObjectListCallback): void;
            getObjectList(params: GetObjectListParams | null, options: { sorted?: boolean } | Record<string, any>, callback: GetObjectListCallback): void;

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
            getObjectView(design: string, search: string, params: GetObjectViewParams | null, callback: GetObjectViewCallback): void;
            getObjectView(design: string, search: string, params: GetObjectViewParams | null, options: unknown, callback: GetObjectViewCallback): void;

            /**
             * Extends an object in the object db with new properties
             * @param id ID of the object
             * @param obj Object to extend the original one with. May be just parts of an object.
             * @param options (optional) Some internal options.
             * @param callback Is called when the operation has finished (successfully or not)
             */
            extendObject(id: string, obj: PartialObject, callback: ExtendObjectCallback): void;
            extendObject(id: string, obj: PartialObject, options: unknown, callback: ExtendObjectCallback): void;

            /**
             * Finds an object by ID or name. If multiple objects were found, return the first one
             * @param idOrName ID or name of the object
             * @param type If != null, only return an object with a common.type equal to this
             * @param options (optional) Some internal options.
             * @param callback Is called when the operation has finished (successfully or not)
             */
            findObject(idOrName: string, type: CommonType | null, callback: FindObjectCallback): void;
            findObject(idOrName: string, type: CommonType | null, options: unknown, callback: FindObjectCallback): void;

            // I'd rather not document a function with the name "destroyDB"

            /** Destructor of the class. Call this before shutting down. */
            destroy(): void;
        } // end interface Objects

        type LogLevel = "silly" | "debug" | "info" | "warn" | "error";
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
            aggregate?: "minmax" | "min" | "max" | "average" | "total" | "count" | "none";
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

            /** if true, stateChange will be called with an id that has no namespace, e.g. "state" instead of "adapter.0.state". Default: false */
            noNamespace?: boolean;
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
            /** Namespace of adapter objects: "<name>.<instance>" */
            readonly namespace: string;
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
            states: States;
            objects: Objects;
            /** if the adapter is connected to the host */
            connected: boolean;

            /*	===============================
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

            /** Validates username and password */
            checkPassword(user: string, password: string, callback: (result: boolean) => void): void;
            checkPassword(user: string, password: string, options: unknown, callback: (result: boolean) => void): void;
            /** Validates username and password */
            checkPasswordAsync(user: string, password: string, options?: unknown): Promise<boolean>;
            /** Sets a new password for the given user */
            setPassword(user: string, password: string, callback?: (err?: any) => void): void;
            setPassword(user: string, password: string, options: unknown, callback?: (err?: any) => void): void;
            /** Sets a new password for the given user */
            setPasswordAsync(user: string, password: string, options?: unknown): Promise<void>;
            /** <INTERNAL> Checks if a user exists and is in the given group. */
            checkGroup(user: string, group: string, callback: (result: boolean) => void): void;
            checkGroup(user: string, group: string, options: unknown, callback: (result: boolean) => void): void;
            /** <INTERNAL> Checks if a user exists and is in the given group. */
            checkGroupAsync(user: string, group: string, options?: unknown): Promise<boolean>;
            /** <INTERNAL> Determines the users permissions */
            calculatePermissions(user: string, commandsPermissions: CommandsPermissions, callback: (result: PermissionSet) => void): void;
            calculatePermissions(user: string, commandsPermissions: CommandsPermissions, options: unknown, callback: (result: PermissionSet) => void): void;
            /** <INTERNAL> Determines the users permissions */
            calculatePermissionsAsync(user: string, commandsPermissions: CommandsPermissions, options?: unknown): Promise<PermissionSet>;
            /** Returns SSL certificates by name (private key, public cert and chained certificate) for creation of HTTPS servers */
            getCertificates(publicName: string, privateName: string, chainedName: string, callback: (err: string | null, certs?: Certificates, useLetsEncryptCert?: boolean) => void): void;
            // TODO: getCertificates cannot be represented with promises right now

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
            sendTo(instanceName: string, message: MessagePayload, callback?: MessageCallback | MessageCallbackInfo): void;
            sendTo(instanceName: string, command: string, message: MessagePayload, callback?: MessageCallback | MessageCallbackInfo): void;
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
            sendToHost(hostName: string, message: MessagePayload, callback?: MessageCallback | MessageCallbackInfo): void;
            sendToHost(hostName: string, command: string, message: MessagePayload, callback?: MessageCallback | MessageCallbackInfo): void;
            /**
             * Sends a message to a specific host or all hosts.
             */
            sendToHostAsync(hostName: string, message: MessagePayload): Promise<Message | undefined>;
            sendToHostAsync(hostName: string, command: string, message: MessagePayload): Promise<Message | undefined>;

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
            getObjectAsync(id: string, options?: unknown): Promise<CallbackReturnTypeOf<GetObjectCallback>>;
            /** Creates or overwrites an object in the object db */
            setObject(id: string, obj: ioBroker.SettableObject, callback?: SetObjectCallback): void;
            setObject(id: string, obj: ioBroker.SettableObject, options: unknown, callback?: SetObjectCallback): void;
            /** Creates or overwrites an object in the object db */
            setObjectAsync(id: string, obj: ioBroker.SettableObject, options?: unknown): Promise<NonNullCallbackReturnTypeOf<SetObjectCallback>>;
            /** Creates an object in the object db. Existing objects are not overwritten. */
            setObjectNotExists(id: string, obj: ioBroker.SettableObject, callback?: SetObjectCallback): void;
            setObjectNotExists(id: string, obj: ioBroker.SettableObject, options: unknown, callback?: SetObjectCallback): void;
            /** Creates an object in the object db. Existing objects are not overwritten. */
            setObjectNotExistsAsync(id: string, obj: ioBroker.SettableObject, options?: unknown): Promise<NonNullCallbackReturnTypeOf<SetObjectCallback>>;
            /** Get all states, channels and devices of this adapter */
            getAdapterObjects(callback: (objects: Record<string, ioBroker.Object>) => void): void;
            /** Get all states, channels and devices of this adapter */
            getAdapterObjectsAsync(): Promise<Record<string, ioBroker.Object>>;
            /** Extend an object and create it if it might not exist */
            extendObject(id: string, objPart: PartialObject, callback?: SetObjectCallback): void;
            extendObject(id: string, objPart: PartialObject, options: unknown, callback?: SetObjectCallback): void;
            /** Extend an object and create it if it might not exist */
            extendObjectAsync(id: string, objPart: PartialObject, options?: unknown): Promise<NonNullCallbackReturnTypeOf<SetObjectCallback>>;
            /**
             * Deletes an object from the object db
             * @param id - The id of the object without namespace
             */
            delObject(id: string, callback?: ErrorCallback): void;
            delObject(id: string, options: unknown, callback?: ErrorCallback): void;
            /**
             * Deletes an object from the object db
             * @param id - The id of the object without namespace
             */
            delObjectAsync(id: string, options?: unknown): Promise<void>;

            // ==============================
            // foreign objects

            /** Reads an object (which might not belong to this adapter) from the object db */
            getForeignObject(id: string, callback: GetObjectCallback): void;
            getForeignObject(id: string, options: unknown, callback: GetObjectCallback): void;
            /** Reads an object (which might not belong to this adapter) from the object db */
            getForeignObjectAsync(id: string, options?: unknown): Promise<CallbackReturnTypeOf<GetObjectCallback>>;
            /** Get foreign objects by pattern, by specific type and resolve their enums. */
            // tslint:disable:unified-signatures
            getForeignObjects(pattern: string, callback: GetObjectsCallback): void;
            getForeignObjects(pattern: string, options: unknown, callback: GetObjectsCallback): void;
            getForeignObjects(pattern: string, type: ObjectType, callback: GetObjectsCallback): void;
            getForeignObjects(pattern: string, type: ObjectType, enums: EnumList, callback: GetObjectsCallback): void;
            getForeignObjects(pattern: string, type: ObjectType, options: unknown, callback: GetObjectsCallback): void;
            getForeignObjects(pattern: string, type: ObjectType, enums: EnumList, options: unknown, callback: GetObjectsCallback): void;
            // tslint:enable:unified-signatures
            /** Get foreign objects by pattern, by specific type and resolve their enums. */
            getForeignObjectsAsync(pattern: string, options?: unknown): Promise<CallbackReturnTypeOf<GetObjectsCallback>>;
            getForeignObjectsAsync(pattern: string, type: ObjectType, options?: unknown): Promise<CallbackReturnTypeOf<GetObjectsCallback>>;
            getForeignObjectsAsync(pattern: string, type: ObjectType, enums: EnumList, options?: unknown): Promise<CallbackReturnTypeOf<GetObjectsCallback>>;
            /** Creates or overwrites an object (which might not belong to this adapter) in the object db */
            setForeignObject(id: string, obj: ioBroker.SettableObject, callback?: SetObjectCallback): void;
            setForeignObject(id: string, obj: ioBroker.SettableObject, options: unknown, callback?: SetObjectCallback): void;
            /** Creates or overwrites an object (which might not belong to this adapter) in the object db */
            setForeignObjectAsync(id: string, obj: ioBroker.SettableObject, options?: unknown): Promise<NonNullCallbackReturnTypeOf<SetObjectCallback>>;
            /** Creates an object (which might not belong to this adapter) in the object db. Existing objects are not overwritten. */
            setForeignObjectNotExists(id: string, obj: ioBroker.SettableObject, callback?: SetObjectCallback): void;
            setForeignObjectNotExists(id: string, obj: ioBroker.SettableObject, options: unknown, callback?: SetObjectCallback): void;
            /** Creates an object (which might not belong to this adapter) in the object db. Existing objects are not overwritten. */
            setForeignObjectNotExistsAsync(id: string, obj: ioBroker.SettableObject, options?: unknown): Promise<NonNullCallbackReturnTypeOf<SetObjectCallback>>;
            /** Extend an object (which might not belong to this adapter) and create it if it might not exist */
            extendForeignObject(id: string, objPart: PartialObject, callback?: SetObjectCallback): void;
            extendForeignObject(id: string, objPart: PartialObject, options: unknown, callback?: SetObjectCallback): void;
            /** Extend an object (which might not belong to this adapter) and create it if it might not exist */
            extendForeignObjectAsync(id: string, objPart: PartialObject, options?: unknown): Promise<NonNullCallbackReturnTypeOf<SetObjectCallback>>;
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
            findForeignObjectAsync(idOrName: string, type: string): Promise<{ id: string, name: string }>;
            /**
             * Deletes an object (which might not belong to this adapter) from the object db
             * @param id - The id of the object including namespace
             */
            delForeignObject(id: string, callback?: ErrorCallback): void;
            delForeignObject(id: string, options: unknown, callback?: ErrorCallback): void;
            /**
             * Deletes an object (which might not belong to this adapter) from the object db
             * @param id - The id of the object including namespace
             */
            delForeignObjectAsync(id: string, options?: unknown): Promise<void>;

            // ==============================
            // states

            // Multiple signatures help understanding what the parameters are about
            /** Writes a value into the states DB. */
            // tslint:disable:unified-signatures
            setState(id: string, state: string | number | boolean | State | Partial<State>, callback?: SetStateCallback): void;
            setState(id: string, state: string | number | boolean | State | Partial<State>, ack: boolean, callback?: SetStateCallback): void;
            setState(id: string, state: string | number | boolean | State | Partial<State>, options: unknown, callback?: SetStateCallback): void;
            setState(id: string, state: string | number | boolean | State | Partial<State>, ack: boolean, options: unknown, callback?: SetStateCallback): void;
            /** Writes a value into the states DB. */
            setStateAsync(id: string, state: string | number | boolean | State | Partial<State>, ack?: boolean): Promise<NonNullCallbackReturnTypeOf<SetStateCallback>>;
            setStateAsync(id: string, state: string | number | boolean | State | Partial<State>, options?: unknown): Promise<NonNullCallbackReturnTypeOf<SetStateCallback>>;
            setStateAsync(id: string, state: string | number | boolean | State | Partial<State>, ack: boolean, options: unknown): Promise<NonNullCallbackReturnTypeOf<SetStateCallback>>;
            /** Writes a value into the states DB only if it has changed. */
            setStateChanged(id: string, state: string | number | boolean | State | Partial<State>, callback?: SetStateChangedCallback): void;
            setStateChanged(id: string, state: string | number | boolean | State | Partial<State>, ack: boolean, callback?: SetStateChangedCallback): void;
            setStateChanged(id: string, state: string | number | boolean | State | Partial<State>, options: unknown, callback?: SetStateChangedCallback): void;
            setStateChanged(id: string, state: string | number | boolean | State | Partial<State>, ack: boolean, options: unknown, callback?: SetStateChangedCallback): void;
            /** Writes a value into the states DB only if it has changed. */
            setStateChangedAsync(id: string, state: string | number | boolean | State | Partial<State>, ack?: boolean): Promise<NonNullCallbackReturnTypeOf<SetStateChangedCallback>>;
            setStateChangedAsync(id: string, state: string | number | boolean | State | Partial<State>, options?: unknown): Promise<NonNullCallbackReturnTypeOf<SetStateChangedCallback>>;
            setStateChangedAsync(id: string, state: string | number | boolean | State | Partial<State>, ack: boolean, options: unknown): Promise<NonNullCallbackReturnTypeOf<SetStateChangedCallback>>;
            /** Writes a value (which might not belong to this adapter) into the states DB. */
            setForeignState(id: string, state: string | number | boolean | State | Partial<State>, callback?: SetStateCallback): void;
            setForeignState(id: string, state: string | number | boolean | State | Partial<State>, ack: boolean, callback?: SetStateCallback): void;
            setForeignState(id: string, state: string | number | boolean | State | Partial<State>, options: unknown, callback?: SetStateCallback): void;
            setForeignState(id: string, state: string | number | boolean | State | Partial<State>, ack: boolean, options: unknown, callback?: SetStateCallback): void;
            /** Writes a value (which might not belong to this adapter) into the states DB. */
            setForeignStateAsync(id: string, state: string | number | boolean | State | Partial<State>, ack?: boolean): Promise<NonNullCallbackReturnTypeOf<SetStateCallback>>;
            setForeignStateAsync(id: string, state: string | number | boolean | State | Partial<State>, options?: unknown): Promise<NonNullCallbackReturnTypeOf<SetStateCallback>>;
            setForeignStateAsync(id: string, state: string | number | boolean | State | Partial<State>, ack: boolean, options: unknown): Promise<NonNullCallbackReturnTypeOf<SetStateCallback>>;
            /** Writes a value (which might not belong to this adapter) into the states DB only if it has changed. */
            setForeignStateChanged(id: string, state: string | number | boolean | State | Partial<State>, callback?: SetStateChangedCallback): void;
            setForeignStateChanged(id: string, state: string | number | boolean | State | Partial<State>, ack: boolean, callback?: SetStateChangedCallback): void;
            setForeignStateChanged(id: string, state: string | number | boolean | State | Partial<State>, options: unknown, callback?: SetStateChangedCallback): void;
            setForeignStateChanged(id: string, state: string | number | boolean | State | Partial<State>, ack: boolean, options: unknown, callback?: SetStateChangedCallback): void;
            /** Writes a value (which might not belong to this adapter) into the states DB only if it has changed. */
            setForeignStateChangedAsync(
                id: string, state: string | number | boolean | State | Partial<State>, ack?: boolean
            ): Promise<NonNullCallbackReturnTypeOf<SetStateChangedCallback>>;
            setForeignStateChangedAsync(
                id: string, state: string | number | boolean | State | Partial<State>, options?: unknown
            ): Promise<NonNullCallbackReturnTypeOf<SetStateChangedCallback>>;
            setForeignStateChangedAsync(
                id: string, state: string | number | boolean | State | Partial<State>, ack: boolean, options: unknown
            ): Promise<NonNullCallbackReturnTypeOf<SetStateChangedCallback>>;
            // tslint:enable:unified-signatures

            /** Read a value from the states DB. */
            getState(id: string, callback: GetStateCallback): void;
            getState(id: string, options: unknown, callback: GetStateCallback): void;
            /** Read a value from the states DB. */
            getStateAsync(id: string, options?: unknown): Promise<CallbackReturnTypeOf<GetStateCallback>>;
            /** Read a value (which might not belong to this adapter) from the states DB. */
            getForeignState(id: string, callback: GetStateCallback): void;
            getForeignState(id: string, options: unknown, callback: GetStateCallback): void;
            /** Read a value (which might not belong to this adapter) from the states DB. */
            getForeignStateAsync(id: string, options?: unknown): Promise<CallbackReturnTypeOf<GetStateCallback>>;
            /** Read all states of this adapter which match the given pattern */
            getStates(pattern: string, callback: GetStatesCallback): void;
            getStates(pattern: string, options: unknown, callback: GetStatesCallback): void;
            /** Read all states of this adapter which match the given pattern */
            getStatesAsync(pattern: string, options?: unknown): Promise<CallbackReturnTypeOf<GetStatesCallback>>;
            /** Read all states (which might not belong to this adapter) which match the given pattern */
            getForeignStates(pattern: string, callback: GetStatesCallback): void;
            getForeignStates(pattern: string, options: unknown, callback: GetStatesCallback): void;
            /** Read all states (which might not belong to this adapter) which match the given pattern */
            getForeignStatesAsync(pattern: string, options?: unknown): Promise<CallbackReturnTypeOf<GetStatesCallback>>;

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
            // pushFifo and similar https://github.com/ioBroker/ioBroker.js-controller/blob/master/lib/adapter.js#L4105
            // logRedirect https://github.com/ioBroker/ioBroker.js-controller/blob/master/lib/adapter.js#L4294
            // requireLog https://github.com/ioBroker/ioBroker.js-controller/blob/master/lib/adapter.js#L4336
            // processLog https://github.com/ioBroker/ioBroker.js-controller/blob/master/lib/adapter.js#L4360

            /**
             * Writes a binary state into Redis
             * @param id The id of the state
             * @param binary The data to be written
             * @param options (optional) Some internal options.
             * @param callback Is called when the operation has finished (successfully or not)
             */
            setBinaryState(id: string, binary: Buffer, callback: SetStateCallback): void;
            setBinaryState(id: string, binary: Buffer, options: unknown, callback: SetStateCallback): void;
            /**
             * Writes a binary state into Redis
             * @param id The id of the state
             * @param binary The data to be written
             * @param options (optional) Some internal options.
             */
            setBinaryStateAsync(id: string, binary: Buffer, options?: unknown): Promise<NonNullCallbackReturnTypeOf<SetStateCallback>>;
            /**
             * Reads a binary state from Redis
             * @param id The id of the state
             * @param options (optional) Some internal options.
             * @param callback Is called when the operation has finished (successfully or not)
             */
            getBinaryState(id: string, callback: GetBinaryStateCallback): void;
            getBinaryState(id: string, options: unknown, callback: GetBinaryStateCallback): void;
            /**
             * Reads a binary state from Redis
             * @param id The id of the state
             * @param options (optional) Some internal options.
             */
            getBinaryStateAsync(id: string, options?: unknown): Promise<CallbackReturnTypeOf<GetBinaryStateCallback>>;

            // ==============================
            // enums

            /** Returns the enum tree, filtered by the optional enum name */
            getEnum(callback: GetEnumCallback): void;
            getEnum(name: string, callback: GetEnumCallback): void;
            getEnum(name: string, options: unknown, callback: GetEnumCallback): void;
            /** Returns the enum tree, filtered by the optional enum name */
            getEnumAsync(name: string, options?: unknown): Promise<{ result: Record<string, any>, requestEnum: string }>;
            /** Returns the enum tree, filtered by the optional enum name */
            getEnums(callback: GetEnumsCallback): void;
            getEnums(enumList: EnumList, callback: GetEnumsCallback): void;
            getEnums(enumList: EnumList, options: unknown, callback: GetEnumsCallback): void;
            /** Returns the enum tree, filtered by the optional enum name */
            getEnumsAsync(enumList: EnumList, options?: unknown): Promise<NonNullCallbackReturnTypeOf<GetEnumsCallback>>;

            addChannelToEnum(enumName: string, addTo: string, parentDevice: string, channelName: string, callback?: ErrorCallback): void;
            addChannelToEnum(enumName: string, addTo: string, parentDevice: string, channelName: string, options: unknown, callback?: ErrorCallback): void;
            addChannelToEnumAsync(enumName: string, addTo: string, parentDevice: string, channelName: string, options?: unknown): Promise<void>;

            deleteChannelFromEnum(enumName: string, parentDevice: string, channelName: string, callback?: ErrorCallback): void;
            deleteChannelFromEnum(enumName: string, parentDevice: string, channelName: string, options: unknown, callback?: ErrorCallback): void;
            deleteChannelFromEnumAsync(enumName: string, parentDevice: string, channelName: string, options?: unknown): Promise<void>;

            addStateToEnum(enumName: string, addTo: string, parentDevice: string, parentChannel: string, stateName: string, callback?: ErrorCallback): void;
            addStateToEnum(enumName: string, addTo: string, parentDevice: string, parentChannel: string, stateName: string, options: unknown, callback?: ErrorCallback): void;
            addStateToEnumAsync(enumName: string, addTo: string, parentDevice: string, parentChannel: string, stateName: string, options?: unknown): Promise<void>;

            deleteStateFromEnum(enumName: string, parentDevice: string, parentChannel: string, stateName: string, callback?: ErrorCallback): void;
            deleteStateFromEnum(enumName: string, parentDevice: string, parentChannel: string, stateName: string, options: unknown, callback?: ErrorCallback): void;
            deleteStateFromEnumAsync(enumName: string, parentDevice: string, parentChannel: string, stateName: string, options?: unknown): Promise<void>;

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
            createDevice(deviceName: string, common: Partial<ioBroker.ObjectCommon>, callback?: SetObjectCallback): void;
            createDevice(deviceName: string, common: Partial<ioBroker.ObjectCommon>, native: Record<string, any>, callback?: SetObjectCallback): void;
            createDevice(deviceName: string, common: Partial<ioBroker.ObjectCommon>, native: Record<string, any>, options: unknown, callback?: SetObjectCallback): void;
            /** creates an object with type device */
            createDeviceAsync(deviceName: string, common?: Partial<ioBroker.ObjectCommon>): Promise<NonNullCallbackReturnTypeOf<SetObjectCallback>>;
            createDeviceAsync(deviceName: string, common: Partial<ioBroker.ObjectCommon>, native?: Record<string, any>): Promise<NonNullCallbackReturnTypeOf<SetObjectCallback>>;
            createDeviceAsync(deviceName: string, common: Partial<ioBroker.ObjectCommon>, native: Record<string, any>, options?: unknown): Promise<NonNullCallbackReturnTypeOf<SetObjectCallback>>;
            /** deletes a device, its channels and states */
            deleteDevice(deviceName: string, callback?: ErrorCallback): void;
            deleteDevice(deviceName: string, options: unknown, callback?: ErrorCallback): void;
            /** deletes a device, its channels and states */
            deleteDeviceAsync(deviceName: string, options?: unknown): Promise<void>;

            /** Creates an object with type channel. It must be located under a device */
            createChannel(parentDevice: string, channelName: string, callback?: SetObjectCallback): void;
            createChannel(parentDevice: string, channelName: string, roleOrCommon: string | Partial<ioBroker.ChannelCommon>, callback?: SetObjectCallback): void;
            createChannel(parentDevice: string, channelName: string, roleOrCommon: string | Partial<ioBroker.ChannelCommon>, native: Record<string, any>, callback?: SetObjectCallback): void;
            createChannel(
                parentDevice: string, channelName: string, roleOrCommon: string | Partial<ioBroker.ChannelCommon>,
                native: Record<string, any>, options: unknown, callback?: SetObjectCallback
            ): void;
            /** Creates an object with type channel. It must be located under a device */
            createChannelAsync(parentDevice: string, channelName: string, roleOrCommon?: string | Partial<ioBroker.ChannelCommon>): Promise<NonNullCallbackReturnTypeOf<SetObjectCallback>>;
            createChannelAsync(
                parentDevice: string, channelName: string, roleOrCommon: string | Partial<ioBroker.ChannelCommon>, native?: Record<string, any>
            ): Promise<NonNullCallbackReturnTypeOf<SetObjectCallback>>;
            createChannelAsync(
                parentDevice: string, channelName: string, roleOrCommon: string | Partial<ioBroker.ChannelCommon>, native: Record<string, any>,
                options?: unknown
            ): Promise<NonNullCallbackReturnTypeOf<SetObjectCallback>>;
            /** Deletes a channel and its states. It must have been created with `createChannel` */
            deleteChannel(channelName: string, options?: unknown, callback?: ErrorCallback): void;
            deleteChannel(parentDevice: string, channelName: string, options?: unknown, callback?: ErrorCallback): void;
            /** Deletes a channel and its states. It must have been created with `createChannel` */
            deleteChannelAsync(channelName: string, options?: unknown): Promise<void>;
            deleteChannelAsync(parentDevice: string, channelName: string, options?: unknown): Promise<void>;

            /**
             * Creates a state and the corresponding object. It must be located in a channel under a device
             */
            createState(parentDevice: string, parentChannel: string, stateName: string, callback?: SetObjectCallback): void;
            createState(parentDevice: string, parentChannel: string, stateName: string, roleOrCommon: string | Partial<ioBroker.StateCommon>, callback?: SetObjectCallback): void;
            createState(
                parentDevice: string, parentChannel: string, stateName: string, roleOrCommon: string | Partial<ioBroker.StateCommon>,
                native: Record<string, any>, callback?: SetObjectCallback
            ): void;
            createState(
                parentDevice: string, parentChannel: string, stateName: string, roleOrCommon: string | Partial<ioBroker.StateCommon>,
                native: Record<string, any>, options: unknown, callback?: SetObjectCallback
            ): void;
            /**
             * Creates a state and the corresponding object. It must be located in a channel under a device
             */
            createStateAsync(
                parentDevice: string, parentChannel: string, stateName: string, roleOrCommon?: string | Partial<ioBroker.StateCommon>
            ): Promise<NonNullCallbackReturnTypeOf<SetObjectCallback>>;
            createStateAsync(
                parentDevice: string, parentChannel: string, stateName: string, roleOrCommon: string | Partial<ioBroker.StateCommon>,
                native?: Record<string, any>
            ): Promise<NonNullCallbackReturnTypeOf<SetObjectCallback>>;
            createStateAsync(
                parentDevice: string, parentChannel: string, stateName: string, roleOrCommon: string | Partial<ioBroker.StateCommon>,
                native: Record<string, any>, options?: unknown
            ): Promise<NonNullCallbackReturnTypeOf<SetObjectCallback>>;
            /** Deletes a state. It must have been created with `createState` */
            deleteState(stateName: string, options?: unknown, callback?: ErrorCallback): void;
            deleteState(parentChannel: string, stateName: string, options?: unknown, callback?: ErrorCallback): void;
            deleteState(parentDevice: string, parentChannel: string, stateName: string, options?: unknown, callback?: ErrorCallback): void;
            /** Deletes a state. It must have been created with `createState` */
            deleteStateAsync(stateName: string, options?: unknown): Promise<void>;
            deleteStateAsync(parentChannel: string, stateName: string, options?: unknown): Promise<void>;
            deleteStateAsync(parentDevice: string, parentChannel: string, stateName: string, options?: unknown): Promise<void>;
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
            getStatesOf(parentDevice: string, parentChannel: string, options: unknown, callback: GetObjectsCallback3<StateObject>): void;
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
            readDirAsync(adapterName: string | null, path: string, options?: unknown): Promise<NonNullCallbackReturnTypeOf<ReadDirCallback>>;

            mkDir(adapterName: string | null, path: string, callback: ErrorCallback): void;
            mkDir(adapterName: string | null, path: string, options: unknown, callback: ErrorCallback): void;
            mkDirAsync(adapterName: string | null, path: string, options?: unknown): Promise<void>;

            readFile(adapterName: string | null, path: string, callback: ReadFileCallback): void;
            readFile(adapterName: string | null, path: string, options: unknown, callback: ReadFileCallback): void;
            readFileAsync(adapterName: string | null, path: string, options?: unknown): Promise<{ file: string | Buffer, mimeType: string }>;

            writeFile(adapterName: string | null, path: string, data: Buffer | string, callback: ErrorCallback): void;
            // options see https://github.com/ioBroker/ioBroker.js-controller/blob/master/lib/objects/objectsInMemServer.js#L599
            writeFile(adapterName: string | null, path: string, data: Buffer | string, options: unknown, callback: ErrorCallback): void;
            writeFileAsync(adapterName: string | null, path: string, data: Buffer | string, options?: unknown): Promise<void>;

            /**
             * Deletes a given file
             * @param adapterName - adapter name. If adapter name is null, default will be the name of the current adapter.
             * @param path - path to directory without adapter name. E.g. If you want to delete "/vis.0/main/views.json", here must be "/main/views.json" and _adapter must be equal to "vis.0".
             */
            delFile(adapterName: string | null, path: string, callback: ErrorCallback): void;
            delFile(adapterName: string | null, path: string, options: unknown, callback: ErrorCallback): void;
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
            unlink(adapterName: string | null, path: string, callback: ErrorCallback): void;
            unlink(adapterName: string | null, path: string, options: unknown, callback: ErrorCallback): void;
            /**
             * Deletes a given file
             * @param adapterName - adapter name. If adapter name is null, default will be the name of the current adapter.
             * @param path - path to directory without adapter name. E.g. If you want to delete "/vis.0/main/views.json", here must be "/main/views.json" and _adapter must be equal to "vis.0".
             */
            unlinkAsync(adapterName: string | null, path: string, options?: unknown): Promise<void>;

            rename(adapterName: string | null, oldName: string, newName: string, callback: ErrorCallback): void;
            rename(adapterName: string | null, oldName: string, newName: string, options: unknown, callback: ErrorCallback): void;
            renameAsync(adapterName: string | null, oldName: string, newName: string, options?: unknown): Promise<void>;

            /**
             * Changes access rights of all files in the adapter directory
             * @param adapter Name of the adapter instance, e.g. "admin.0". Defaults to the namespace of this adapter.
             * @param path Pattern to match the file path against
             * @param options Mode of the access change as a number or hexadecimal string
             * @param callback Is called when the operation has finished (successfully or not)
             */
            chmodFile(adapter: string | null, path: string, options: { mode: number | string } | Record<string, any>, callback: ChownFileCallback): void;
            chmodFileAsync(adapter: string | null, path: string, options: { mode: number | string } | Record<string, any>): Promise<{ entries: ChownFileResult[], id: string }>;

            // ==============================
            // formatting

            formatValue(value: number | string, format: any): string;
            formatValue(value: number | string, decimals: number, format: any): string;
            formatDate(dateObj: string | Date | number, format: string): string;
            formatDate(dateObj: string | Date | number, isDuration: boolean | string, format: string): string;

            // =============================================
            // Events exposed through EventEmitter interface
            // =============================================
            on(event: "ready", handler: ReadyHandler): this;
            on(event: "unload", handler: UnloadHandler): this;
            on(event: "stateChange", handler: StateChangeHandler): this;
            on(event: "objectChange", handler: ObjectChangeHandler): this;
            on(event: "message", handler: MessageHandler): this;

            removeListener(event: "ready", handler: ReadyHandler): this;
            removeListener(event: "unload", handler: UnloadHandler): this;
            removeListener(event: "stateChange", handler: StateChangeHandler): this;
            removeListener(event: "objectChange", handler: ObjectChangeHandler): this;
            removeListener(event: "message", handler: MessageHandler): this;

            removeAllListeners(event?: "ready" | "unload" | "stateChange" | "objectChange" | "message"): this;
        } // end interface Adapter

        type ReadyHandler = () => void | Promise<void>;
        type ObjectChangeHandler = (id: string, obj: ioBroker.Object | null | undefined) => void | Promise<void>;
        type StateChangeHandler = (id: string, obj: State | null | undefined) => void | Promise<void>;
        type MessageHandler = (obj: Message) => void | Promise<void>;
        type UnloadHandler = (callback: EmptyCallback) => void | Promise<void>;

        type EmptyCallback = () => void;
        type ErrorCallback = (err?: string) => void;
        // TODO: Redefine callbacks as subclass of GenericCallback
        type GenericCallback<T> = (err: string | null, result?: T) => void;

        type MessageCallback = (response?: Message) => void;

        type SetObjectCallback = (err: string | null, obj: { id: string }) => void;
        type GetObjectCallback = (err: string | null, obj: ioBroker.Object | null | undefined) => void;
        type GetEnumCallback = (err: string | null, enums: Record<string, Enum>, requestedEnum: string) => void;
        type GetEnumsCallback = (
            err: string | null,
            result: {
                [groupName: string]: Record<string, Enum>,
            },
        ) => void;
        type GetObjectsCallback = (err: string | null, objects: Record<string, ioBroker.Object>) => void;

        type FindObjectCallback = (
            /** If an error happened, this contains the message */
            err: string | null,
            /** If an object was found, this contains the ID */
            id?: string,
            /** If an object was found, this contains the common.name */
            name?: string,
        ) => void;

        interface GetObjectsItem<T extends BaseObject> {
            /** The ID of this object */
            id: string;
            /** A copy of the object from the DB */
            value: T;
        }
        // This is a version used by GetDevices/GetChannelsOf/GetStatesOf
        type GetObjectsCallback3<T extends BaseObject> = (err: string | null, result?: T[]) => void;

        type SecondParameterOf<T extends (...args: any[]) => any> = T extends (arg0: any, arg1: infer R, ...args: any[]) => any ? R : never;
        /** Infers the return type from a callback-style API and strips out null and undefined */
        type NonNullCallbackReturnTypeOf<T extends (...args: any[]) => any> = Exclude<SecondParameterOf<T>, null | undefined>;
        /** Infers the return type from a callback-style API and and leaves null and undefined in */
        type CallbackReturnTypeOf<T extends (...args: any[]) => any> = SecondParameterOf<T>;
        type GetStateCallback = (err: string | null, state: State | null | undefined) => void;
        type GetStatesCallback = (err: string | null, states: Record<string, State>) => void;
        /** Version of the callback used by States.getStates */
        type GetStatesCallback2 = (err: string | null, states: State[]) => void;
        type GetBinaryStateCallback = (err: string | null, state?: Buffer) => void;
        type SetStateCallback = (err: string | null, id?: string) => void;
        type SetStateChangedCallback = (err: string | null, id: string, notChanged: boolean) => void;
        type DeleteStateCallback = (err: string | null, id?: string) => void;
        type GetHistoryResult = Array<(State & { id?: string })>;
        type GetHistoryCallback = (err: string | null, result: GetHistoryResult, step: number, sessionId?: string) => void;

        /** Contains the return values of readDir */
        interface ReadDirResult {
            /** Name of the file or directory */
            file: string;
            /** File system stats */
            stats: fs.Stats;
            /** Whether this is a directory or a file */
            isDir: boolean;
            /** Access rights */
            acl: EvaluatedFileACL;
            /** Date of last modification */
            modifiedAt: number;
            /** Date of creation */
            createdAt: number;
        }
        type ReadDirCallback = (err: string | null, entries?: ReadDirResult[]) => void;
        type ReadFileCallback = (err: string | null, file?: Buffer | string, mimeType?: string) => void;

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
        type ChownFileCallback = (err: string | null, entries?: ChownFileResult[], id?: string) => void;

        /** Contains the return values of rm */
        interface RmResult {
            /** The parent directory of the deleted file or directory */
            path: string;
            /** The name of the deleted file or directory */
            file: string;
            /** Whether the deleted object was a directory or a file */
            isDir: boolean;
        }
        type RmCallback = (err: string | null, entries?: RmResult[]) => void;

        type GetUserGroupCallback = (objectsInstance: Objects, user: User, groups: UserGroup[], acl: ObjectPermissions) => void;

        type ChownObjectCallback = (err: string | null, list?: ioBroker.Object[]) => void;

        type GetConfigKeysCallback = (err: string | null, list?: string[]) => void;
        // this is a version of the callback used by Objects.getObjects
        type GetObjectsCallback2 = (err: string | null, objects?: Array<(ioBroker.Object | { err: string })>) => void;

        interface GetObjectViewItem {
            /** The ID of this object */
            id: string;
            /** A copy of the object from the DB or some aggregation result */
            value: ioBroker.Object | unknown; // TODO: find out how the non-Object return result looks like
        }
        type GetObjectViewCallback = (err: string | null, result?: { rows: GetObjectViewItem[] }) => void;

        interface GetObjectListItem extends GetObjectViewItem {
            /** A copy of the object */
            value: ioBroker.Object;
            /** The same as @link{value} */
            doc: ioBroker.Object;
        }
        type GetObjectListCallback = (err: string | null, result?: { rows: GetObjectListItem[] }) => void;

        type ExtendObjectCallback = (err: string | null, result?: { id: string, value: ioBroker.Object }, id?: string) => void;

        type GetSessionCallback = (session: Session) => void;
    } // end namespace ioBroker
} // end declare global
