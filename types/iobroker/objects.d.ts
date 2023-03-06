import * as os from "os";

declare global {
    namespace ioBroker {
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

        /** Defines the existing object types in ioBroker */
        type ObjectType =
            | 'state'
            | 'channel'
            | 'device'
            | 'folder'
            | 'enum'
            | 'adapter'
            | 'config'
            | 'group'
            | 'host'
            | 'instance'
            | 'meta'
            | 'script'
            | 'user'
            | 'chart';

        // Define the naming schemes for objects so we can provide more specific types for get/setObject

        namespace ObjectIDs {
            // Guaranteed meta objects
            type Meta =
                | `${string}.${number}`
                | `${string}.${"meta" | "admin"}`
                | `${string}.meta.${string}`
                | `${string}.${number}.meta.${string}`;

            // Unsure, can be folder, device, channel or state
            // --> We need this match to avoid matching the more specific types below
            type Misc =
                | `system.host.${string}.${string}`
                | `0_userdata.0.${string}`;

            // Guaranteed channel objects
            type Channel =
                | `script.js.${"common" | "global"}`
                | `${string}.${number}.info`;
            // Either script or channel object
            type ScriptOrChannel = `script.js.${string}`;
            // Guaranteed state objects
            type State =
                | `system.adapter.${string}.${number}.${string}`;
            // Guaranteed enum objects
            type Enum = `enum.${string}`;
            // Guaranteed instance objects
            type Instance = `system.adapter.${string}.${number}`;
            // Guaranteed adapter objects
            type Adapter = `system.adapter.${string}`;
            // Guaranteed group objects
            type Group = `system.group.${string}`;
            // Guaranteed user objects
            type User = `system.user.${string}`;
            // Guaranteed host objects
            type Host = `system.host.${string}`;
            // Guaranteed config objects
            type Config = `system.${"certificates" | "config" | "repositories"}`;

            // Unsure, can be folder, device, channel or state (or whatever an adapter does)
            type AdapterScoped =
                | `${string}.${number}.${string}`;

            /** All possible typed object IDs */
            type Any =
                | Meta
                | Misc
                | Channel
                | ScriptOrChannel
                | State
                | Enum
                | Instance
                | Adapter
                | Group
                | User
                | Host
                | Config
                | AdapterScoped;
        }

        type ObjectIdToObjectType<T extends string, Read extends "read" | "write" = "read"> =
            // State must come before Adapter or system.adapter.admin.0.foobar will resolve to AdapterObject
            T extends ObjectIDs.State ? StateObject :
            // Instance and Adapter must come before meta or `system.adapter.admin` will resolve to MetaObject
            T extends ObjectIDs.Instance ? InstanceObject :
            T extends ObjectIDs.Adapter ? AdapterObject :
            T extends ObjectIDs.Channel ? ChannelObject :
            T extends ObjectIDs.Meta ? MetaObject :
            T extends ObjectIDs.Misc ? AdapterScopedObject :
            T extends ObjectIDs.ScriptOrChannel ? (ScriptObject | ChannelObject) :
            T extends ObjectIDs.Enum ? EnumObject :
            T extends ObjectIDs.Group ? GroupObject :
            T extends ObjectIDs.User ? UserObject :
            T extends ObjectIDs.Host ? HostObject :
            T extends ObjectIDs.Config ? OtherObject & { type: "config" } :
            T extends ObjectIDs.AdapterScoped ? AdapterScopedObject :
            Read extends "read" ? ioBroker.Object : AnyObject;

        type Languages = 'en' | 'de' | 'ru' | 'pt' | 'nl' | 'fr' | 'it' | 'es' | 'pl' | 'uk' | 'zh-cn';
        type StringOrTranslated = string | {
            // The "en" property is required when an object is used for the languages
            [lang in Languages as lang extends "en" ? lang : never]: string;
        } & {
            [lang in Languages as lang extends "en" ? never : lang]?: string;
        };

        type CommonType = 'number' | 'string' | 'boolean' | 'array' | 'object' | 'mixed' | 'file';

        interface ObjectCommon {
            /** The name of this object as a simple string or an object with translations */
            name: StringOrTranslated;

            /** When set to true, this object may not be deleted */
            dontDelete?: true;

            /** When set to true, this object is only visible when expert mode is turned on in admin */
            expert?: true;

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
            /** allowed interval for numeric values */
            step?: number;
            /** unit of the value */
            unit?: string;
            /** description of this state */
            desc?: StringOrTranslated;

            /** if this state is readable */
            read: boolean;
            /** if this state is writable */
            write: boolean;
            /** role of the state (used in user interfaces to indicate which widget to choose) */
            role: string;

            /** the default value */
            def?: any;
            /** the default status of the ack flag */
            defAck?: boolean;

            /** Configures this state as an alias for another state */
            alias?: {
                /** The target state id */
                id: string | {
                    read: string;
                    write: string;
                };
                /** An optional conversion function when reading, e.g. `"(val − 32) * 5/9"` */
                read?: string;
                /** An optional conversion function when reading, e.g. `"(val * 9/5) + 32"` */
                write?: string;
            } ;

            /**
             * Dictionary of possible values for this state in the form
             * ```jsonc
             * {
             *     "internal value 1": "displayed value 1",
             *     "internal value 2": "displayed value 2",
             *     // ...
             * }
             * ```
             *
             * or as an array:
             * ```jsonc
             * [ "value 1", "value 2", // ... ]
             * ```
             *
             * In old ioBroker versions, this could also be a string of the form
             * `"val1:text1;val2:text2"` (now deprecated)
             */
            states?: Record<string, string> | string[] | string;

            /** ID of a helper state indicating if the handler of this state is working */
            workingID?: string;

            /** attached history information */
            history?: any;

            /** Custom settings for this state */
            custom?: Record<string, any>;

            /**
             * Settings for IOT adapters and how the state should be named in e.g. Alexa.
             * The string "ignore" is a special case, causing the state to be ignored.
             */
            smartName?: string | ({ [lang in Languages]?: string; } & {
                /** Which kind of device this is */
                smartType?: string | null;
                /** Which value to set when the ON command is issued */
                byOn?: string | null;
            });
        }
        interface ChannelCommon extends ObjectCommon {
            /** description of this channel */
            desc?: string;

            // Make it possible to narrow the object type using the custom property
            custom?: undefined;
        }
        interface DeviceCommon extends ObjectCommon {
            // TODO: any other definition for device?

            // Make it possible to narrow the object type using the custom property
            custom?: undefined;
        }
        interface EnumCommon extends ObjectCommon {
            /** The IDs of the enum members */
            members?: string[];

            // Make it possible to narrow the object type using the custom property
            custom?: undefined;
        }

        interface MetaCommon extends ObjectCommon {
            // Meta objects have to additional CommonTypes
            type: CommonType | "meta.user" | "meta.folder";

            // Make it possible to narrow the object type using the custom property
            custom?: undefined;
        }

        type InstanceMode = 'none' | 'daemon' | 'subscribe' | 'schedule' | 'once' | 'extension';
        interface InstanceCommon extends ObjectCommon {
            /** The name of the host where this instance is running */
            host: string;
            enabled: boolean;
            /** How and when this instance should be started */
            mode: InstanceMode;
            /**
             * The starting priority of this adapter:
             * - **1:** Logic adapters
             * - **2:** Data providers
             * - **3:** All other adapters
             */
            tier?: 1 | 2 | 3;

            // Make it possible to narrow the object type using the custom property
            custom?: undefined;
        }

        interface HostCommon extends ObjectCommon {
            /** The display name of this host */
            name: string;
            title: string;
            installedVersion: string; // e.g. 1.2.3 (following semver)
            /** The command line of the executable */
            cmd: string;
            hostname: string;
            /** An array of IP addresses this host exposes */
            address: string[]; // IPv4 or IPv6

            type: 'js-controller';
            platform: 'Javascript/Node.js';

            // Make it possible to narrow the object type using the custom property
            custom?: undefined;
        }

        interface HostNative {
            process: {
                title: string;
                versions: NodeJS.ProcessVersions;
                env: Record<string, string>;
            };
            os: {
                hostname: string,
                type: ReturnType<typeof os["type"]>;
                platform: ReturnType<typeof os["platform"]>;
                arch: ReturnType<typeof os["arch"]>;
                release: ReturnType<typeof os["release"]>;
                endianness: ReturnType<typeof os["endianness"]>;
                tmpdir: ReturnType<typeof os["tmpdir"]>;
            };
            hardware: {
                cpus: ReturnType<typeof os["cpus"]>;
                totalmem: ReturnType<typeof os["totalmem"]>;
                networkInterfaces: ReturnType<typeof os["networkInterfaces"]>;
            };
        }

        interface UserCommon extends ObjectCommon {
            /** The username */
            name: string;
            /** The hashed password */
            password: string;
            /** Whether this user is enabled */
            enabled: boolean;

            // Make it possible to narrow the object type using the custom property
            custom?: undefined;
        }

        interface GroupCommon extends ObjectCommon {
            /** The name of this group */
            name: string;
            /** The users of this group */
            members: string[]; // system.user.name, ...
            /** The default permissions of this group */
            acl: Omit<PermissionSet, "user" | "groups">;

            // Make it possible to narrow the object type using the custom property
            custom?: undefined;
        }

        interface ScriptCommon extends ObjectCommon {
            name: string;
            /** Defines the type of the script, e.g. TypeScript/ts, JavaScript/js or Blockly */
            engineType: string;
            /** The instance id of the instance which executes this script */
            engine: string;
            /** The source code of this script */
            source: string;
            debug: boolean;
            verbose: boolean;
            /** Whether this script should be executed */
            enabled: boolean;
            /** Is used to determine whether a script has changed and needs to be recompiled */
            sourceHash?: string;
            /** If the script uses a compiled language like TypeScript, this contains the compilation output */
            compiled?: string;
            /** If the script uses a compiled language like TypeScript, this contains the generated declarations (global scripts only) */
            declarations?: string;

            // Make it possible to narrow the object type using the custom property
            custom?: undefined;
        }

        type WelcomeScreenEntry = string | {
            link: string;
            name: string;
            img: string;
            color: string;
        };

        interface AdapterCommon extends ObjectCommon {
            /** Custom attributes to be shown in admin in the object browser */
            adminColumns?: any[];
            /** Settings for custom Admin Tabs */
            adminTab?: {
                name?: string;
                /** Icon name for FontAwesome */
                "fa-icon"?: string;
                /** If true, the Tab is not reloaded when the configuration changes */
                ignoreConfigUpdate?: boolean;
                /** Which URL should be loaded in the tab. Supports placeholders like http://%ip%:%port% */
                link?: string;
                /** If true, only one instance of this tab will be created for all instances */
                singleton?: boolean;
            };
            allowInit?: boolean;
            /** Possible values for the instance mode (if more than one is possible) */
            availableModes?: InstanceMode[];
            /** Whether this adapter includes custom blocks for Blockly. If true, `admin/blockly.js` must exist. */
            blockly?: boolean;
            /** Where the adapter will get its data from. Set this together with @see dataSource */
            connectionType?: "local" | "cloud";
            /** If true, this adapter can be started in compact mode (in the same process as other adpaters) */
            compact?: boolean;
            /** The directory relative to iobroker-data where the adapter stores the data. Supports the placeholder `%INSTANCE%`. This folder will be backed up and restored automatically. */
            dataFolder?: string;
            /** How the adapter will mainly receive its data. Set this together with @see connectionType */
            dataSource?: "poll" | "push" | "assumption";
            /** A record of ioBroker adapters (including "js-controller") and version ranges which are required for this adapter. */
            dependencies?: Array<Record<string, string>>;
            /** Which files outside of the README.md have documentation for the adapter */
            docs?: Partial<Record<Languages, string | string[]>>;
            /** Whether new instances should be enabled by default. *Should* be `false`! */
            enabled: boolean;
            /** If true, all previous data in the target directory (web) should be deleted before uploading */
            eraseOnUpload?: boolean;
            /** URL of an external icon that is shown for adapters that are not installed */
            extIcon?: string;
            /** Whether this adapter responds to `getHistory` messages */
            getHistory?: boolean;
            /** Filename of the local icon which is shown for installed adapters. Should be located in the `admin` directory */
            icon?: string;
            /** Which version of this adapter is installed */
            installedVersion: string;
            keywords?: string[];
            /** A dictionary of links to web services this adapter provides */
            localLinks?: Record<string, string>;
            /** @deprecated Use @see localLinks */
            localLink?: string;
            logLevel?: LogLevel;
            /** Whether this adapter receives logs from other hosts and adapters (e.g. to strore them somewhere) */
            logTransporter?: boolean;
            /** Path to the start file of the adapter. Should be the same as in `package.json` */
            main?: string;
            /** Whether the admin tab is written in materialize style. Required for Admin 3+ */
            materializeTab: boolean;
            /** Whether the admin configuration dialog is written in materialize style. Required for Admin 3+ */
            materialize: boolean;
            /** If `true`, the object `system.adapter.<adaptername>.<adapterinstance>.messagebox will be created to send messages to the adapter (used for email, pushover, etc...) */
            messagebox?: true;
            mode: InstanceMode;
            /** Name of the adapter (without leading `ioBroker.`) */
            name: string;
            /** If `true`, no configuration dialog will be shown */
            noConfig?: true;
            /** If `true`, this adapter's instances will not be shown in the admin overview screen. Useful for icon sets and widgets... */
            noIntro?: true;
            /** Set to `true` if the adapter is not available in the official ioBroker repositories. */
            noRepository?: true;
            /** If `true`, manual installation from GitHub is not possible */
            nogit?: true;
            /** If `true`, this adapter cannot be deleted or updated manually. */
            nondeletable?: true;
            /** If `true`, this "adapter" only contains HTML files and no main executable */
            onlyWWW?: boolean;
            /** Used to configure native (OS) dependencies of this adapter that need to be installed with system package manager before installing the adapter */
            osDependencies?: {
                /** For OSX */
                darwin: string[];
                /** For Linux */
                linux: string[];
                /** For Windows */
                win32: string[];
            };
            /** Which OSes this adapter supports */
            os?: "linux" | "darwin" | "win32" | Array<("linux" | "darwin" | "win32")>;
            platform: "Javascript/Node.js";
            /** The keys of common attributes (e.g. `history`) which are not deleted in a `setObject` call even if they are not present. Deletion must be done explicitly by setting them to `null`. */
            preserveSettings?: string | string[];
            /** Which adapters must be restarted after installing or updating this adapter. */
            restartAdapters?: string[];
            /** If the adapter runs in `schedule` mode, this contains the CRON */
            schedule?: string;
            serviceStates?: boolean | string;
            /** Whether this adapter may only be installed once per host */
            singletonHost?: boolean;
            /** Whether this adapter may only be installed once in the whole system */
            singleton?: boolean;
            /** Whether the adapter must be stopped before an update */
            stopBeforeUpdate?: boolean;
            /** Overrides the default timeout that ioBroker will wait before force-stopping the adapter */
            stopTimeout?: number;
            subscribable?: boolean;
            subscribe?: any; // ?
            /** If `true`, this adapter provides custom per-state settings. Requires a `custom_m.html` file in the `admin` directory. */
            supportCustoms?: boolean;
            /** Whether the adapter supports the signal stopInstance via messagebox */
            supportStopInstance?: boolean;
            /** The translated names of this adapter to be shown in the admin UI */
            titleLang?: Record<Languages, string>;
            /** @deprecated The name of this adapter to be shown in the admin UI. Use @see titleLang instead. */
            title?: string;
            /** The type of this adapter */
            type?: string;
            /** If `true`, the `npm` package must be installed with the `--unsafe-perm` flag */
            unsafePerm?: true;
            /** The available version in the ioBroker repo. */
            version: string;
            /** If `true`, the adapter will be started if any value is written into `system.adapter.<name>.<instance>.wakeup. Normally the adapter should stop after processing the event. */
            wakeup?: boolean;
            /** Include the adapter version in the URL of the web adapter, e.g. `http://ip:port/1.2.3/material` instead of `http://ip:port/material` */
            webByVersion?: boolean;
            /** Whether the web server in this adapter can be extended with plugin/extensions */
            webExtendable?: boolean;
            /** Relative path to a module that contains an extension for the web adapter. Use together with @see native.webInstance to configure which instances this affects */
            webExtension?: string;
            webPreSettings?: any; // ?
            webservers?: any; // ?
            /** A list of pages that should be shown on the "web" index page */
            welcomeScreen?: WelcomeScreenEntry[];
            /** A list of pages that should be shown on the ioBroker cloud index page */
            welcomeScreenPro?: WelcomeScreenEntry[];
            wwwDontUpload?: boolean;

            // Make it possible to narrow the object type using the custom property
            custom?: undefined;
        }

        interface OtherCommon extends ObjectCommon {
            [propName: string]: any;

            // Make it possible to narrow the object type using the custom property
            custom?: undefined;
        }

        /* Base type for Objects. Should not be used directly */
        interface BaseObject {
            /** The ID of this object */
            _id: string;
            type: ObjectType; // specified in the derived interfaces
            // Ideally we would limit this to JSON-serializable objects, but TypeScript doesn't allow this
            // without bugging users to change their code --> https://github.com/microsoft/TypeScript/issues/15300
            native: Record<string, any>;
            common: Record<string, any>;
            enums?: Record<string, string>;
            acl?: ObjectACL;
            from?: string;
            /** The user who created or updated this object */
            user?: string;
            ts?: number;
        }

        interface StateObject extends BaseObject {
            type: 'state';
            common: StateCommon;
            acl?: StateACL;
        }
        interface PartialStateObject extends Partial<Omit<StateObject, 'common' | 'acl'>> {
            common?: Partial<StateCommon>;
            acl?: Partial<StateACL>;
        }

        interface ChannelObject extends BaseObject {
            type: 'channel';
            common: ChannelCommon;
        }
        interface PartialChannelObject
            extends Partial<Omit<ChannelObject, 'common'>> {
            common?: Partial<ChannelCommon>;
        }

        interface DeviceObject extends BaseObject {
            type: 'device';
            common: DeviceCommon;
        }
        interface PartialDeviceObject extends Partial<Omit<DeviceObject, 'common'>> {
            common?: Partial<DeviceCommon>;
        }

        interface FolderObject extends BaseObject {
            type: 'folder';
            // Nothing is set in stone here, so start with allowing every property
            common: OtherCommon;
        }
        interface PartialFolderObject extends Partial<Omit<FolderObject, 'common'>> {
            common?: Partial<OtherCommon>;
        }

        interface EnumObject extends BaseObject {
            type: 'enum';
            common: EnumCommon;
        }
        interface PartialEnumObject extends Partial<Omit<EnumObject, 'common'>> {
            common?: Partial<EnumCommon>;
        }

        interface MetaObject extends BaseObject {
            type: 'meta';
            common: MetaCommon;
        }
        interface PartialMetaObject extends Partial<Omit<MetaObject, 'common'>> {
            common?: Partial<MetaCommon>;
        }

        interface InstanceObject extends BaseObject {
            type: 'instance';
            common: InstanceCommon;
        }
        interface PartialInstanceObject extends Partial<Omit<InstanceObject, 'common'>> {
            common?: Partial<InstanceCommon>;
        }

        interface AdapterObject extends BaseObject {
            type: 'adapter';
            common: AdapterCommon;
            /** An array of `native` properties which cannot be accessed from outside the defining adapter */
            protectedNative?: string[];
            /** Like protectedNative, but the properties are also encrypted and decrypted automatically */
            encryptedNative?: string[];
        }
        interface PartialAdapterObject extends Partial<Omit<AdapterObject, 'common'>> {
            common?: Partial<AdapterCommon>;
        }

        interface HostObject extends BaseObject {
            type: 'host';
            common: HostCommon;
            native: HostNative;
        }
        interface PartialHostObject extends Partial<Omit<HostObject, 'common' | 'native'>> {
            common?: Partial<HostCommon>;
            native?: Partial<HostNative>;
        }

        interface UserObject extends BaseObject {
            type: 'user';
            common: UserCommon;
        }
        interface PartialUserObject extends Partial<Omit<UserObject, 'common'>> {
            common?: Partial<UserCommon>;
        }

        interface GroupObject extends BaseObject {
            type: 'group';
            common: GroupCommon;
        }
        interface PartialGroupObject extends Partial<Omit<GroupObject, 'common'>> {
            common?: Partial<GroupCommon>;
        }

        interface ScriptObject extends BaseObject {
            type: 'script';
            common: ScriptCommon;
        }
        interface PartialScriptObject extends Partial<Omit<ScriptObject, 'common'>> {
            common?: Partial<ScriptCommon>;
        }

        interface OtherObject extends BaseObject {
            type: 'config' | 'chart';
            common: OtherCommon;
        }
        interface PartialOtherObject extends Partial<Omit<OtherObject, 'common'>> {
            common?: Partial<OtherCommon>;
        }

        type AnyObject =
            | StateObject
            | ChannelObject
            | DeviceObject
            | FolderObject
            | EnumObject
            | MetaObject
            | HostObject
            | AdapterObject
            | InstanceObject
            | UserObject
            | GroupObject
            | ScriptObject
            | OtherObject;

        type AnyPartialObject =
            | PartialStateObject
            | PartialChannelObject
            | PartialDeviceObject
            | PartialFolderObject
            | PartialEnumObject
            | PartialMetaObject
            | PartialHostObject
            | PartialAdapterObject
            | PartialInstanceObject
            | PartialUserObject
            | PartialGroupObject
            | PartialScriptObject
            | PartialOtherObject;

        /** All objects that usually appear in an adapter scope */
        type AdapterScopedObject = FolderObject | DeviceObject | ChannelObject | StateObject;

        // For all objects that are exposed to the user we need to tone the strictness down.
        // Otherwise, every operation on objects becomes a pain to work with
        type Object = AnyObject & {
            common: Record<string, any>;
            native: Record<string, any>;
        };

        // In set[Foreign]Object[NotExists] methods, the ID and acl of the object is optional
        type SettableObjectWorker<T> = T extends AnyObject ? Omit<T, '_id' | 'acl'> & {
            _id?: T['_id'];
            acl?: T['acl'];
        } : never;
        // in extend[Foreign]Object, most properties are optional
        type PartialObjectWorker<T> = T extends AnyObject ? AnyPartialObject & { type?: T["type"] } : never;

        type PartialObject<T extends AnyObject = AnyObject> = PartialObjectWorker<T>;

        // Convenient definitions for manually specifying settable object types
        type SettableObject<T extends AnyObject = AnyObject> = SettableObjectWorker<T>;
        type SettableStateObject = SettableObject<StateObject>;
        type SettableChannelObject = SettableObject<ChannelObject>;
        type SettableDeviceObject = SettableObject<DeviceObject>;
        type SettableFolderObject = SettableObject<FolderObject>;
        type SettableEnumObject = SettableObject<EnumObject>;
        type SettableMetaObject = SettableObject<MetaObject>;
        type SettableHostObject = SettableObject<HostObject>;
        type SettableAdapterObject = SettableObject<AdapterObject>;
        type SettableInstanceObject = SettableObject<InstanceObject>;
        type SettableUserObject = SettableObject<UserObject>;
        type SettableGroupObject = SettableObject<GroupObject>;
        type SettableScriptObject = SettableObject<ScriptObject>;
        type SettableOtherObject = SettableObject<OtherObject>;

        // Used to infer the return type of GetObjectView
        type InferGetObjectViewItemType<Design extends string, View extends string> =
            Design extends 'system' ? (
                View extends "host" ? HostObject :
                View extends "adapter" ? AdapterObject :
                View extends "instance" ? InstanceObject :
                View extends "meta" ? MetaObject :
                View extends "device" ? DeviceObject :
                View extends "channel" ? ChannelObject :
                View extends "state" ? StateObject :
                View extends "folder" ? FolderObject :
                View extends "enum" ? EnumObject :
                View extends "script" ? ScriptObject :
                View extends "group" ? GroupObject :
                View extends "user" ? UserObject :
                View extends "config" ? OtherObject & { type: "config" } :
                View extends "custom" ? NonNullable<StateObject["common"]["custom"]> :
                ioBroker.Object
            ) : any;
    }
}
