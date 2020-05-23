declare interface BaseEntityData {
    name: string;
    type: string;
    flags: any;
    data: any;
}

/**
 * An abstract class pattern for all primary data entities within the Foundry VTT Framework
 * An entity represents a primary data concept, for example: Actor, Item, Scene, or ChatMessage.
 * Employing this abstraction layer ensures similar behavior and workflow for all entity types.
 *
 * Documentation for this class is provided for reference, but developers should not extend this class directly,
 * instead work with or extend the Entity implementations that are referenced in this section of the API documentation.
 *
 * Entities are instantiated by providing their base data, and an optional Array of Application instances which should
 * be automatically refreshed when the Entity experiences an update.
 *
 * @param data		The data Object with which to create the Entity
 * @param options	Additional options which modify the created Entity behavior
 *
 * @example
 * let actorData = {name: "John Doe", type: "character", img: "icons/mystery-man.png"};
 * let actor = new Actor(actorData);
 */
declare class Entity {
    /** The Entity references the raw source data for the object provided through game.data */
    data: BaseEntityData;

    /** Additional options which were used to configure the Entity */
    options: any;

    /**
     * A collection of Application instances which should be re-rendered whenever this Entity experiences an update to
     * its data. The keys of this object are the application ids and the values are Application instances. Each
     * Application in this object will have its render method called by {@link Entity#render}.
     */
    apps: Application;

    /**
     * The Entity may optionally belong to a parent Compendium pack. If so this attribute will contain a reference
     * to that Compendium object. Otherwise null.
     */
    compendium: Compendium;

    constructor(data: BaseEntityData, options: any);

    /**
     * Configure the attributes of this Entity class
     * @property {Entity} baseEntity       The parent class which directly inherits from the Entity interface.
     * @property {Collection} collection   The Collection instance to which Entities of this type belong.
     * @property {Array} embeddedEntities  The names of any Embedded Entities within the Entity data structure.
     */
    static get config(): {
        baseEntity: Entity;
        collection: Collection<Entity>;
        embeddedEntities: any;
    };

    /**
     * A Universally Unique Identifier (uuid) for this Entity instance
     */
    get uuid(): string;

    /**
     * Initialize data structure for the Entity.
     * First initialize any Embedded Entities and prepare their data.
     * Next prepare data for the Entity itself, which may depend on Embedded Entities.
     */
    initialize(): void;

    /**
     * Prepare data for the Entity whenever the instance is first created or later updated.
     * This method can be used to derive any internal attributes which are computed in a formulaic manner.
     * For example, in a d20 system - computing an ability modifier based on the value of that ability score.
     */
    prepareData(): BaseEntityData | void;

    /**
     * Prepare Embedded Entities which exist within this parent Entity.
     * For example, in the case of an Actor, this method is responsible for preparing the Owned Items the Actor contains.
     */
    prepareEmbeddedEntities(): void;

    /**
     * Prepare data for a single Embedded Entity which exists within the parent Entity.
     * @param embeddedName	The name of the Embedded Entity type
     * @param data			The data used to initialize it
     * @returns				The Embedded Entity object
     */
    private _constructEmbeddedEntity(embeddedName: string, data: object): void;

    /**
     * Obtain a reference to the Array of source data within the data object for a certain Embedded Entity name
     * @param embeddedName	The name of the Embedded Entity type
     * @return				The Array of source data where Embedded Entities of this type are stored
     */
    getEmbeddedCollection(embeddedName: string): Array<any>;

    /* -------------------------------------------- */
    /*  Properties
	/* -------------------------------------------- */

    /**
     * Return a reference to the Collection instance which stores Entity instances of this type. This property is
     * available as both a static and instance method and should be overridden by subclass Entity implementations.
     */
    static get collection(): Collection<Entity>;

    /** @alias Entity.collection */
    get collection(): Collection<Entity>;

    /**
     * The class name of the base Entity type, for example "Actor". This is useful in cases where there is an inheritance
     * chain. Many places throughout the framework rely upon the canonical entity name which may not always be equal
     * to the class name. This property is available as both a static and instance method.
     *
     * @example
     * class Actor2ndGen extends Actor {...}
     * Actor2ndGen.entity // "Actor"
     */
    static get entity(): string;

    /** @alias Entity.entity */
    get entity(): Entity;

    /**
     * A convenience accessor for the _id attribute of the Entity data object
     */
    get id(): string;

    /** @alias Entity.id */
    get _id(): string;

    /**
     * A convenience accessor for the name attribute of the Entity data object
     */
    get name(): string;

    /**
     * A property which gets or creates a singleton instance of the sheet class used to render and edit data for this
     * particular entity type.
     *
     * @example <caption>A subclass of the Actor entity</caption>
     * let actor = game.entities.actors[0];
     * actor.sheet; // ActorSheet
     */
    get sheet(): BaseEntitySheet;

    /**
     * Obtain a reference to the BaseEntitySheet implementation which should be used to render the Entity instance
     * configuration sheet.
     */
    protected get _sheetClass(): any;

    /**
     * Return a reference to the Folder which this Entity belongs to, if any.
     *
     * @example <caption>Entities may belong to Folders</caption>
     * let folder = game.folders.entities[0];
     * let actor = await Actor.create({name: "New Actor", folder: folder.id});
     * console.log(actor.data.folder); // folder.id;
     * console.log(actor.folder); // folder;
     */
    get folder(): Folder | null;

    /**
     * Return the permission level that the current game User has over this Entity.
     * See the CONST.ENTITY_PERMISSIONS object for an enumeration of these levels.
     *
     * @example
     * game.user.id; // "dkasjkkj23kjf"
     * entity.data.permission; // {default: 1, "dkasjkkj23kjf": 2};
     * entity.permission; // 2
     */
    get permission(): number;

    /**
     * A boolean indicator for whether or not the current game User has ownership rights for this Entity
     * This property has a setter which allows for ownership rights to be overridden specifically on a per-instance basis
     */
    set owner(isOwner: boolean);

    get owner(): boolean;

    /**
     * A boolean indicator for whether or not the current game User has at least limited visibility for this Entity.
     */
    get visible(): boolean;

    /**
     * A boolean indicator for whether the current game user has ONLY limited visibility for this Entity.
     * Note that a GM user's perspective of an Entity is never limited.
     */
    get limited(): boolean;

    /* -------------------------------------------- */
    /* Methods
	/* -------------------------------------------- */

    /**
     * Render all of the Application instances which are connected to this Entity by calling their respective
     * {@link Application#render} methods.
     * @param {...*} args      Variable arguments which are forwarded to each Application's render call
     */
    render(...args: any): void;

    /**
     * Test whether a provided User a specific permission level (or greater) over the Entity instance
     * @param user			The user to test for permission
     * @param permission	The permission level or level name to test
     * @param exact			Tests for an exact permission level match, by default this method tests for
     *						an equal or greater permission level.
     * @return				Whether or not the user has the permission for this Entity.
     *
     * @example <caption>Test whether a specific user has a certain permission</caption>
     * // These two are equivalent
     * entity.hasPerm(game.user, "OWNER");
     * entity.owner;
     * // These two are also equivalent
     * entity.hasPerm(game.user, "LIMITED", true);
     * entity.limited;
     */
    hasPerm(user: User, permission: string | number, exact?: boolean): boolean;

    /* -------------------------------------------- */
    /*  Entity Management Methods                   */
    /* -------------------------------------------- */

    /**
     * Create a new entity using provided input data
     * The data for entity creation is typically provided from the server through the 'create<Entity>' socket
     * Alternatively, the creation event may originate locally and the new entity can be pushed back to the server.
     *
     * @param data					The data with which to create the entity
     * @param options				Additional options which customize the creation workflow
     * @param options.temporary		Create a temporary entity which is not saved to the world database.
     *								Default is false.
     * @param options.renderSheet	Display the sheet for the created entity once it is created. Default is false.
     *
     * @return						A Promise which resolves to contain the created Entity
     *
     * @example
     * const createData = {name: "New Entity", img: "path/to/profile.jpg"};
     * const created = await Entity.create(createData); // Saved to the database
     * const temp = await Entity.create(createData, {temporary: true}); // Not saved to the database
     */
    static create(data: object, options?: object): Promise<Entity>;

    /**
     * Create multiple new Entities using provided input data Array, containing one Object per created Entity.
     *
     * @param data					The data with which to create the entity
     * @param options				Additional options which customize the creation workflow
     * @param options.temporary		Created entities are temporary and not saved to the database. Default false.
     * @param options.renderSheet	Display sheets for each created entities. Default false.
     *
     * @return						A Promise which resolves to contain the created Entities
     *
     * @example
     * const dataArray = [{name: "Entry 1"}, {name: "Entry 2"}, {name: "Entry 3"}];
     * const entries = await Entity.createMany(dataArray); // Saved to the database
     * const temps = await Entity.createMany(dataArray, {temporary: true}); // Not saved to the database
     */
    static createMany(data: object[], options?: object): Promise<Entity[]>;

    /**
     * Update the current entity using new data
     * This new data is typically provided from the server through the 'update<Entity>' socket
     * Alternatively, the update may originate locally, in which case it can be pushed back to the server
     *
     * @param data			The data with which to update the entity
     * @param options		Additional options which customize the update workflow
     * @param options.diff	Diff the provided data against existing entity data, only submitting the
     * 						difference to the server. Default is true.
     *
     * @return				A Promise which resolves to the updated Entity
     *
     * @example
     * const updateData = {name: "New Name"};
     * const updated = await entity.update(updateData);
     */
    update(data: object, options?: object): Promise<Entity>;

    /**
     * Update multiple Entities using an Array of provided update Objects which define incremental data for each Entity.
     *
     * @param data		Data with which to update each Entity. Each Object must include the _id
     * @param options	Additional options which customize the update workflow
     *
     * @return			A Promise which resolves to contain the updated Entities
     *
     * @example
     * const updateArray = [{_id: "dgfkjt34kjdgfkjt34", name: "Name 1"}, {_id: "dfskjkj2r3kjdvkj2", name: "Name 2"}];
     * const updated = await Entity.updateMany(updateArray);
     */
    static updateMany(data: object[], options?: object): Promise<Entity[]>;

    /**
     * Delete the entity, removing it from its collection and deleting its data record
     * @param options	Additional options which customize the deletion workflow
     * @return			A Promise which resolves to the ID of the deleted Entity once handled by the server
     *
     * @example
     * const deleted = await entity.delete();
     */
    delete(options?: object): Promise<string>;

    /**
     * Delete multiple Entities using a provided Array of ids, one per Entity.
     *
     * @param ids				The data with which to create the entity
     * @param options			Additional options which customize the deletion workflow
     * @param options.deleteAll	An optional flag which specifies that all Entities should be deleted
     * @return					A Promise which resolves to contain the created Entities
     *
     * @example
     * const deleteIds = ["dskjfk23jf23kdjs", "g90klju9yujl9hj2", "23hjdfewh23rgf3"];
     * const deleted = await Entity.deleteMany(deleteIds);
     */
    static deleteMany(ids: string[], options: object): Promise<string[]>;

    /**
     * Entity-specific actions that should occur when the Entity is first created
     */
    protected _onCreate(data: object, options: object, userId: string, context: object): void;

    /**
     * Entity-specific actions that should occur when the Entity is updated
     */
    protected _onUpdate(data: object, options: object, userId: string, context: object): void;

    /**
     * Entity-specific actions that should occur when the Entity is deleted
     */
    protected _onDelete(id: string, options: object, userId: string, context: any): void;

    /* -------------------------------------------- */
    /*  Embedded Entity Management                  */
    /* -------------------------------------------- */

    /**
     * Get an Embedded Entity by it's ID from a named collection in the parent
     * @param collection	The named collection of embedded entities
     * @param id			The numeric ID of the child to retrieve
     * @return				Retrieved data for the requested child, or null
     */
    getEmbeddedEntity(collection: string, id: number, { strict }: { strict?: boolean }): any;

    /**
     * Remove an Embedded Entity from the parent Entity data by it's id.
     *
     * @param embeddedName	The name of the Embedded Entity type to retrieve
     * @param id			The numeric ID of the child to retrieve
     * @return				The embedded entity data that was removed
     */
    removeEmbeddedEntity(embeddedName: string, id: number): any;

    /**
     * Create one EmbeddedEntity within this parent Entity.
     * Dispatch the creation request to the server for handling.
     * The result will be acknowledged to this client, and broadcast to other connected clients.
     *
     * @param embeddedName	The name of the Embedded Entity class to create
     * @param createData	An object of initial data from which to create the Embedded Entity
     * @param options		Additional creation options which modify the request
     * @return				A Promise which resolves to this Entity once the creation request is successful
     */
    createEmbeddedEntity(embeddedName: string, createData: object | object[], options?: object): Promise<Entity>;

    /**
     * @deprecated
     * Create multiple Embedded Entities within this parent Entity using an Array of creation data.
     * Dispatch the update request to the server for handling.
     * The result will be acknowledged to this client, and broadcast to other connected clients.
     *
     * @param embeddedName	The name of the Embedded Entity class to update
     * @param createData	An Array of initial data objects from which to create the Embedded Entities.
     * @param options		Additional update options which modify the request
     * @return				A Promise which resolves to this Entity once the creation request is successful
     */
    createManyEmbeddedEntities(embeddedName: string, createData: object[], options?: object): Promise<Entity[]>;

    /**
     * Update one EmbeddedEntity within this parent Entity using incremental data.
     * Dispatch the update request to the server for handling.
     * The result will be acknowledged to this client, and broadcast to other connected clients.
     *
     * @param embeddedName	The name of the Embedded Entity class to update
     * @param updateData	An object of incremental data from which to update the Embedded Entity
     * @param options		Additional update options which modify the request
     * @return				A Promise which resolves to this Entity once the update request is successful
     */
    updateEmbeddedEntity(embeddedName: string, updateData: object | object[], options?: object): Promise<Entity>;

    /**
     * @deprecated
     * Update multiple Embedded Entities within this parent Entity using incremental data.
     * Dispatch the update request to the server for handling.
     * The result will be acknowledged to this client, and broadcast to other connected clients.
     *
     * @param embeddedName	The name of the Embedded Entity class to update
     * @param updateData	An Array of incremental data, one per Embedded Entity, with which to update the Entity
     * @param options		Additional update options which modify the request
     * @return				A Promise which resolves to this Entity once the update request is successful
     */
    updateManyEmbeddedEntities(embeddedName: string, updateData: object[], options?: object): Promise<Entity[]>;

    /**
     * Delete one EmbeddedEntity within this parent Entity.
     * Dispatch the deletion request to the server for handling.
     * The result will be acknowledged to this client, and broadcast to other connected clients.
     *
     * @param embeddedName	The name of the Embedded Entity class to delete
     * @param childId		The id of the existing Embedded Entity child to delete
     * @param options		Additional deletion options which modify the request
     * @return				A Promise which resolves to this Entity once the deletion request is successful
     */
    deleteEmbeddedEntity(embeddedName: string, childId: string | string[], options?: object): Promise<Entity>;

    /**
     * @deprecated
     * Delete multiple Embedded Entities within this parent Entity by an Array of child ids.
     * Dispatch the update request to the server for handling.
     * The result will be acknowledged to this client, and broadcast to other connected clients.
     *
     * @param embeddedName	The name of the Embedded Entity class to update
     * @param deleteIds		An Array of Embedded Entity ids to delete from the parent Entity
     * @param options		Additional update options which modify the request
     * @return				A Promise which resolves to this Entity once the update request is successful
     */
    deleteManyEmbeddedEntities(embeddedName: string, deleteIds: string[], options?: object): Promise<Entity>;

    /**
     * Handle Embedded Entity creation within this Entity with specific callback steps.
     * This callback function is triggered by Collection._createEmbeddedEntity once the source data is updated.
     */
    protected _onCreateEmbeddedEntity(response: any): void;

    /**
     * Handle Embedded Entity update within this Entity with specific callback steps.
     * This callback function is triggered by Collection._updateEmbeddedEntity once the source data is updated.
     */
    protected _onUpdateEmbeddedEntity(response: any): void;

    /**
     * Handle Embedded Entity deletion within this Entity with specific callback steps.
     * This callback function is triggered by Collection._deleteEmbeddedEntity once the source data is updated.
     */
    protected _onDeleteEmbeddedEntity(response: any): void;

    /**
     * A generic helper since we take the same actions for every type of Embedded Entity update
     */
    protected _onModifyEmbeddedEntity({
        embeddedName,
        renderContext,
    }: {
        embeddedName: string;
        renderContext: object;
    }): void;

    /* -------------------------------------------- */
    /*  Data Flags                                  */
    /* -------------------------------------------- */

    /**
     * Get the value of a "flag" for this Entity
     * See the setFlag method for more details on flags
     *
     * @param scope	The flag scope which namespaces the key
     * @param key	The flag key
     * @return		The flag value
     */
    getFlag(scope: string, key: string): any;

    /**
     * Assign a "flag" to this Entity.
     * Flags represent key-value type data which can be used to store flexible or arbitrary data required by either
     * the core software, game systems, or user-created modules.
     *
     * Each flag should be set using a scope which provides a namespace for the flag to help prevent collisions.
     *
     * Flags set by the core software use the "core" scope.
     * Flags set by game systems or modules should use the canonical name attribute for the module
     * Flags set by an individual world should "world" as the scope.
     *
     * Flag values can assume almost any data type. Setting a flag value to null will delete that flag.
     *
     * @param scope	The flag scope which namespaces the key
     * @param key	The flag key
     * @param value	The flag value
     *
     * @return		A Promise resolving to the updated Entity
     */
    setFlag(scope: string, key: string, value: any): Promise<Entity>;

    /**
     * Remove a flag assigned to the Entity
     * @param scope	The flag scope which namespaces the key
     * @param key	The flag key
     * @return		A Promise resolving to the updated Entity
     */
    unsetFlag(scope: string, key: string): Promise<Entity>;

    /* -------------------------------------------- */
    /*  Sorting                                     */
    /* -------------------------------------------- */

    /**
     * Sort this Entity relative a target by providing the target, an Array of siblings and other options.
     * See SortingHelper.performIntegerSort for more details
     */
    sortRelative({
        target,
        siblings,
        sortKey,
        sortBefore,
        updateData,
    }: {
        target?: any;
        siblings?: any[];
        sortKey?: string;
        sortBefore?: boolean;
        updateData?: any;
    }): void;

    /* -------------------------------------------- */
    /*  Saving and Loading
	/* -------------------------------------------- */

    /**
     * Clone an Entity, creating a new Entity using the current data as well as provided creation overrides.
     *
     * @param createData	Additional data which overrides current Entity data at the time of creation
     * @param options		Additional creation options passed to the Entity.create method
     * @returns				A Promise which resolves to the created clone Entity
     */
    clone(createData?: object, options?: object): Promise<Entity>;

    /**
     * Export entity data to a JSON file which can be saved by the client and later imported into a different session
     */
    exportToJSON(): any;

    /**
     * Import data and update this entity
     * @param json	JSON data string
     * @return		The updated Entity
     */
    importFromJSON(json: string): Promise<Entity>;

    /**
     * Render an import dialog for updating the data related to this Entity through an exported JSON file
     */
    importFromJSONDialog(): Promise<void>;

    /**
     * Serializing an Entity should simply serialize it's inner data, not the entire instance
     */
    toJSON(): BaseEntityData;
}
