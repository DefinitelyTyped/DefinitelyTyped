/**
 * Typings for the realm.io database that can be used with React-Native.
 * Definitions for Realm.io v0.12.0
 * See https://realm.io/docs/react-native/latest/api/Realm.html
 * Alternatively also see https://realm.io/docs/react-native/latest/
 *
 * Definitions by: Syed Atif Ali (https://github.com/atifsyedali/)
 */

/* tslint:disable */

/**
 * A Realm instance represents a Realm database.
 */
declare module Realm {

    export interface ObjectSchema {
        /**
         * Represents the object type.
         */
        name: string;

        /**
         * The name of a "string" or "int" property that must be unique across all objects of this type within the same Realm.
         */
        primaryKey?: string;

        /**
         * An object where the keys are property names and the values represent the property type.
         */
        properties: ObjectSchemaProperties;
    }

    export interface ObjectSchemaProperties {
        [key: string]: PropertyType | ObjectSchemaProperty;
    }

    export interface ObjectSchemaProperty {
        /**
         * The type of this property.
         */
        type: PropertyType;

        /**
         * Required when type is "list", and must match the type of an object in the same schema.
         */
        objectType?: string;

        /**
         * The default value for this property on creation when not otherwise specified.
         */
        default?: any;

        /**
         * Signals if this property may be assigned null or undefined.
         */
        optional?: boolean;

        /**
         * Signals if this property should be indexed. Only supported for "string", "int", and "bool" properties.
         */
        indexed?: boolean;
    }

    /**
     * Realm objects will inherit methods, getters, and setters from the prototype of this constructor.
     * It is highly recommended that this constructor inherit from Realm.Object.
     */
    export interface ObjectClass {
        schema: ObjectSchema;
    }

    /**
     * The type of an object may either be specified as a string equal to the name in a ObjectSchema definition,
     * or a constructor that was specified in the configuration schema.
     */
    export type ObjectType = string | ObjectClass;

    /**
     * "bool"
     * Type: boolean
     * Property value may either be true or false.
     *
     * "int"
     * Type: number
     * Property may be assigned any number, but will be stored as a round integer, meaning anything after the decimal
     * will be truncated.
     *
     * "float"
     * Type: number
     * Property may be assigned any number, but will be stored as a float, which may result in a loss of precision.
     *
     * "double"
     * Type: number
     * Property may be assigned any number, and will have no loss of precision.
     *
     * "string"
     * Type: string
     * Property value may be any arbitrary string.
     *
     * "date"
     * Type: Date
     * Property may be assigned any Date instance, but will be stored with second-level precision (a fix for this is
     * in progress).
     *
     * "data"
     * Type: ArrayBuffer
     * Property may either be assigned an ArrayBuffer or ArrayBufferView (e.g. DataView, Int8Array, Float32Array, etc.)
     * instance, but will always be returned as an ArrayBuffer.
     *
     * "list"
     * Type: Realm.List
     * Property may be assigned any ordered collection (e.g. Array, Realm.List, Realm.Results) of objects all matching
     * the objectType specified in the ObjectSchemaProperty.
     *
     * "<ObjectType>"
     * Type: Realm.Object
     * A string that matches the name of an object in the same schema (see ObjectSchema) – this property may be assigned
     * any object of this type from inside the same Realm, and will always be optional (meaning it may also be assigned
     * null or undefined).
     */
    export type PropertyType = "bool" | "int" | "float" | "double" | "string" | "date" | "data" | "list" | string;

    /**
     * This describes the different options used to create a Realm instance.
     *
     */
    export interface Configuration {
        /**
         * The 512-bit (64-byte) encryption key used to encrypt and decrypt all data in the Realm.
         */
        encryptionKey?: ArrayBuffer | ArrayBufferView;

        /**
         * The function to run if a migration is needed. This function should provide all the logic for converting data
         * models from previous schemas to the new schema. This function takes two arguments:
         *
         * @param oldRealm The Realm before migration is performed.
         * @param newRealm The Realm that uses the latest schema, which should be modified as necessary.
         */
        migration?: (oldRealm: Realm, newRealm: Realm) => void;

        /**
         * The path to the file where the Realm database should be stored.
         *
         * Default: Realm.defaultPath
         */
        path?: string;

        /**
         * Specifies if this Realm should be opened as read-only.
         *
         * Default: false
         */
        readOnly?: boolean;

        /**
         * Specifies all the object types in this Realm. Required when first creating a Realm at this path.
         */
        schema?: ObjectSchema[];

        /**
         * Required (and must be incremented) after changing the schema.
         */
        schemaVersion?: number;
    }

    /**
     * Realm objects will automatically inherit from this class unless a
     * Realm~ObjectClass was specified that does not inherit from this class.
     */
    export interface Object {

        /**
         * Checks if this object has not been deleted and is part of a valid Realm.
         *
         * Returns: boolean indicating if the object can be safely accessed.
         */
        isValid(): boolean;
    }

    /**
     * The sort descriptors may either just be a string representing the property name,
     * or an array with two items: [propertyName: string, reverse: boolean]
     */
    export type SortDescriptor = string | [string, boolean];

    /**
     * Abstract base class containing methods shared by Realm.List and Realm.Results.
     */
    export interface Collection<T> extends Array<T & Realm.Object> {

        /**
         * Returns new Results that represent this collection being filtered by the provided query.
         *
         * @param query Query used to filter objects from the collection.
         * @param arg Each subsequent argument is used by the placeholders (e.g. $0, $1, $2, …) in the query.
         *
         * Throws Error If the query or any other argument passed into this method is invalid.
         *
         * Returns: Realm.Results filtered according to the provided query.
         *
         * Example:
         * let merlots = wines.filtered('variety == "Merlot" && vintage <= $0', maxYear);
         */
        filtered(query: string, ...arg: any[]): Realm.Results<T>;

        /**
         * Create a frozen snapshot of the collection. This means objects added to and removed from the original
         * collection will not be reflected in the Results returned by this method. However, objects deleted from the
         * Realm will become null at their respective indices. This is not a deep snapshot, meaning the objects
         * contained in this snapshot will continue to update as changes are made to them.
         *
         * Returns: Realm.Results which will not live update.
         */
        snapshot(): Realm.Results<T>;

        /**
         * Returns new Results that represent this collection being sorted by the provided property (or properties) of each object.
         *
         * @param descriptor The property name(s) to sort the objects in the collection.
         * @param reverse May only be provided if descriptor is a string.
         *
         * Throws Error If a specified property does not exist.
         *
         * Returns: Realm.Results sorted according to the arguments passed in
         */
        sorted(descriptor: string | Realm.SortDescriptor, reverse?: boolean): Realm.Results<T>;
    }

    /**
     * Instances of this class will be returned when accessing object properties whose type is "list"
     * (see ObjectSchemaProperty). The objects contained in a list are accessible through its index properties and
     * may only be modified inside a write transaction.
     */
    export interface List<T> extends Realm.Collection<T> {
        // nothing
    }

    /**
     * Instances of this class are typically live collections returned by objects() that will update as new objects are
     * either added to or deleted from the Realm that match the underlying query. Results returned by snapshot(),
     * however, are will not live update.
     */
    export interface Results<T> extends Realm.Collection<T> {
        // nothing
    }
}

/**
 * A Realm instance represents a Realm database.
 */
declare class Realm {

    /**
     * The default path where to create and access the Realm file.
     */
    static defaultPath: string;

    /**
     * The path to the file where this Realm is stored.
     *
     * Read-only.
     */
    path: string;

    /**
     * Indicates if this Realm was opened as read-only.
     *
     * Read-only.
     */
    readOnly: boolean;

    /**
     * A normalized representation of the schema provided in the Configuration when this Realm was constructed.
     *
     * Read-only.
     */
    schema: Realm.ObjectSchema[];

    /**
     * The current schema version of this Realm.
     *
     * Read-only.
     */
    schemaVersion: number;

    /**
     * Get the current schema version of the Realm at the given path.
     *
     * @param path The path to the file where the Realm database is stored.
     * @param encryptionKey Required only when accessing encrypted Realms.
     *
     * Throws Error When passing an invalid or non-matching encryption key.
     *
     * Returns number version of the schema, or -1 if no Realm exists at path.
     */
    static schemaVersion(path: string, encryptionKey?: ArrayBuffer | ArrayBufferView): number;

    /**
     * Create a new Realm instance using the provided config. If a Realm does not yet exist at config.path
     * (or Realm.defaultPath if not provided), then this constructor will create it with the provided config.schema
     * (which is required in this case). Otherwise, the instance will access the existing Realm from the file at that
     * path. In this case, config.schema is optional or not have changed, unless config.schemaVersion is incremented,
     * in which case the Realm will be automatically migrated to use the new schema.
     *
     * @param config Required when first creating the Realm.
     */
    constructor(config?: Realm.Configuration);

    /**
     * Add a listener callback for the specified event name.
     *
     * @param name The name of event that should cause the callback to be called. Currently, only the "change" event supported.
     * @param callback Function to be called when the event occurs. Each callback will only be called once per event,
     * regardless of the number of times it was added.
     *
     * Throws Error If an invalid event name is supplied, or if callback is not a function.
     */
    addListener(name: string, callback: Function): void;

    /**
     * Closes this Realm so it may be re-opened with a newer schema version. All objects and collections from this Realm
     * are no longer valid after calling this method.
     */
    close(): void;

    /**
     * Create a new Realm object of the given type and with the specified properties.
     *
     * @param type The type of Realm object to create.
     * @param properties Property values for all required properties without a default value.
     * @param update Signals that an existing object with matching primary key should be updated. Only the primary key
     * property and properties which should be updated need to be specified. All missing property values will remain unchanged.
     * Default: false
     */
    create<T>(type: Realm.ObjectType, properties: T, update?: boolean): T & Realm.Object;

    /**
     *
     * @param object
     */
    delete(object: Realm.Object | Realm.Object[] | Realm.List<any> | Realm.Results<any>): void;

    /**
     * WARNING: This will delete all objects in the Realm!
     */
    deleteAll(): void;

    /**
     * Returns all objects of the given type in the Realm.
     *
     * @param type The type of Realm objects to retrieve.
     *
     * Throws Error If type passed into this method is invalid.
     *
     * Returns Realm.Results that will live-update as objects are created and destroyed.
     */
    objects<T>(type: Realm.ObjectType): Realm.Results<T>;

    /**
     * Remove all event listeners (restricted to the event name, if provided).
     *
     * @param name The name of the event whose listeners should be removed. Currently, only the "change" event supported.
     *
     * Throws Error When invalid event name is supplied
     */
    removeAllListeners(name?: string): void;

    /**
     * Remove the listener callback for the specfied event name.
     *
     * @param name The event name. Currently, only the "change" event supported.
     * @param callback Function that was previously added as a listener for this event through the addListener method.
     *
     * Throws Error If an invalid event name is supplied, or if callback is not a function.
     */
    removeListener(name: string, callback: Function): void;

    /**
     * Synchronously call the provided callback inside a write transaction.
     *
     * @param callback
     */
    write(callback: Function): void;
}

declare module "realm" {

    export = Realm;
}

/* tslint:enable */
