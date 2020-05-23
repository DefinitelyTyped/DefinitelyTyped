/**
 * An iterable container of Entity objects within the Foundry Virtual Tabletop framework.
 * Each Entity type has it's own subclass of Collection, which defines the abstract interface.
 * @abstract
 *
 * @param data    An Array of Entity data from which to create instances
 * @param apps    An Array of Application instances which the Collection modifies
 */
declare class Collection<T extends Entity> extends Map {
    /**
     * A reference to the original source data provided by the server
     */
    protected _source: any;

    /**
     * An array of all the Entities in the Collection. Since Collection is now a Map, it would be preferred to use Collection#values directly to obtain an iterator
     */
    entities: T[];

    /**
     * An Array of application references which will be automatically updated when the collection content changes
     */
    apps: Application[];

    constructor(data: any[], apps: any[]);

    values(): IterableIterator<T>;

    /**
     * Initialize the Collection instance by preparing all of it's contained Entities
     * @return A reference to the initialized Collection
     */
    initialize(): Collection<T>;

    /**
     * Re-render any currently visible applications associated with this Collection
     */
    render(...args: any): void;

    /* -------------------------------------------- */
    /*  Collection Properties                       */
    /* -------------------------------------------- */

    /**
     * The Collection name
     */
    get name(): string;

    /**
     * Return a reference to the singleton instance of this Collection
     * By default, a Collection is located in `game[Collection.name]`, for example `game.actors`
     */
    static get instance(): Collection<Entity>;

    /**
     * Return a reference to the SidebarDirectory application for this Collection
     */
    get directory(): any;

    /**
     * Return a reference to the Entity subclass which should be used when creating elements of this Collection
     *
     * This should always be an explicit reference to the class which is used in this game to represent the entity,
     * and not the base implementation of that entity type.
     * For example :class:`Actor5e` not :class:`Actor`
     */
    get object(): T;

    /**
     * Return the base Entity name which this collection manages.
     *
     * This should always be the primitive name of the entity type, not the name of a specific subclass implementation
     * For example "Actor", not "Actor5e"
     */
    get entity(): string;

    /* -------------------------------------------- */
    /*  Collection Management Methods               */
    /* -------------------------------------------- */

    /**
     * Add a new Entity to the Collection, asserting that they are of the correct type
     *
     * @param entity    The entity instance to add to the collection
     */
    insert(entity: T): void;

    /**
     * Remove an Entity from the Collection by its ID.
     *
     * @param id {String}   The entity ID which should be removed
     */
    remove(id: string): void;

    /**
     * Get an element from the collection by ID.
     * @param id        The entity ID to retrieve from the collection
     * @param strict    Throw an Error if the requested id does not exist, otherwise return null. Default false.
     * @return            The retrieved Entity, if the ID was found, otherwise null;
     *
     * @example
     * let c = new Collection([["a", "A"], ["b", "B"], ["c", "C"]]);
     * c.get("a"); // "A"
     * c.get("d"); // null
     * c.get("d", {strict: true}); // throws Error
     */
    get(id: string, { strict }?: { strict?: boolean }): T;

    /**
     * Retrieve the index of an entity within the collection by its ID
     *
     * @param id    The entity ID to retrieve from the collection
     * @return        The index of the Entity within the collection, if found, otherwise -1;
     */
    index(id: string): number;

    /**
     * Filter the Collection, returning an Array of entries which match a functional condition.
     * @param condition     The functional condition to test
     *
     * @example
     * let c = new Collection([["a", "AA"], ["b", "AB"], ["c", "CC"]]);
     * let hasA = c.filters(entry => entry.slice(0) === "A");
     */
    filter(condition: any): any[];
    /**
     * Find an entry in the Map using an functional condition.
     * @param condition     The functional condition to test
     */
    find(condition: any): any | null;

    /**
     * Transform each element of the Collection into a new form, returning an Array of transformed values
     * @param {Function} transformer  The transformation function to apply to each entry value
     */
    map(transformer: any): any[];

    /**
     * Reduce the Collection by applying an evaluator function and accumulating entries
     * @param evaluator A function which mutates the accumulator each iteration
     * @param initial     An initial value which accumulates with each iteration
     *
     * @example
     * let c = new Collection([["a", "A"], ["b", "B"], ["c", "C"]]);
     * let letters = c.reduce((s, l) => {
     *   return s + l;
     * }, ""); // "ABC"
     */
    reduce(evaluator: any, initial: any): any;

    /**
     * Import an Entity from a compendium collection, adding it to the current World
     * @param collection    The name of the pack from which to import
     * @param entryId        The ID of the compendium entry to import
     * @param updateData    Data used to update the imported Entity before it is created in the World
     * @return                A Promise containing the imported Entity
     */

    importFromCollection(collection: string, entryId: string, updateData?: object, options?: object): Promise<T>;

    /* -------------------------------------------- */
    /*  Socket Listeners and Handlers               */
    /* -------------------------------------------- */

    /**
     * Activate socket listeners related to this particular Entity type
     * @param socket    The open game socket
     */
    protected static socketListeners(socket: SocketIO.Socket): void;

    /**
     * Handle Entity creation workflow using the server response from the create<Entity> socket
     *
     * @param created    The created Entity data
     * @param options    Additional options which describe the creation request
     * @param userId    The ID of the triggering User
     *
     * @return            The created Entity instance
     */
    protected _createEntity({ created, options, userId }: { created: object; options: object; userId: string }): T;

    /**
     * Handle creation of multiple Entities using data provided from a server response.
     *
     * @param data        An Array of created Entity data
     * @param options    Additional options which describe the creation request
     * @param userId    The ID of the triggering User
     *
     * @return             The created Entity instances
     */
    protected _createManyEntities({ data, options, userId }: { data: object[]; options: object; userId: string }): T[];

    /**
     * Handle Entity update workflow using the server response from the update<Entity> socket
     *
     * @param updated    The updated Entity data
     * @param options    Additional options which describe the update request
     * @param userId    The ID of the triggering User
     *
     * @return            The updated Entity instance
     */
    protected _updateEntity({ updated, options, userId }: { updated: object; options: object; userId: string }): T;

    /**
     * Handle updates to multiple Entities using data provided from a server response.
     *
     * @param data        An Array of incremental Entity update data
     * @param options    Additional options which describe the update request
     * @param userId    The ID of the triggering User
     *
     * @return            The updated Entity instances
     */
    protected _updateManyEntities({ data, options, userId }: { data: object[]; options: object; userId: string }): T[];

    /**
     * Handle Entity deletion workflow using the server response from the delete<Entity> socket
     *
     * @param deleted    The ID of the deleted Entity
     * @param options    Additional options which describe the deletion request
     * @param userId    The ID of the triggering User
     *
     * @return            The deleted Entity instance
     */
    protected _deleteEntity({ deleted, options, userId }: { deleted: object; options: object; userId: string }): T;

    /**
     * Handle deletion of multiple Entities using an Array of ids provided from a server response.
     *
     * @param data        An Array of Entity ids to delete
     * @param options    Additional options which describe the deletion request
     * @param userId    The ID of the triggering User
     *
     * @return            The deleted Entity instances
     */
    protected _deleteManyEntities({ data, options, userId }: { data: object[]; options: object; userId: string }): T[];

    /**
     * Handle the creation of a new Embedded Entity within a parent Entity in response to server-side socket broadcast.
     *
     * @param parentId    The parent Entity ID
     * @param created    The created Embedded Entity data
     * @param options    Additional options which modify the creation request
     * @param userId    The id of the requesting user
     *
     * @return            The created Embedded Entity data
     */
    protected _createEmbeddedEntity({
        parentId,
        created,
        options,
        userId,
    }: {
        parentId: string;
        created: object;
        options: object;
        userId: string;
    }): T;

    /**
     * Handle creation of multiple Embedded Entities within a parent Entity in response to server-side socket broadcast.
     *
     * @param parentId    The parent Entity ID
     * @param data        An Array of created Embedded Entity data
     * @param options    Additional options which modify the creation request
     * @param userId    The id of the requesting user
     *
     * @return            The created Embedded Entity Array
     */
    protected _createManyEmbeddedEntities({
        parentId,
        data,
        options,
        userId,
    }: {
        parentId: string;
        data: object[];
        options: object;
        userId: string;
    }): T[];

    /**
     * Handle updates to an Embedded Entity within a parent Entity in response to server-side socket broadcast.
     *
     * @param parentId    The parent Entity ID
     * @param data        The updated Embedded Entity data
     * @param options    Additional options which modify the update request
     * @param userId    The id of the requesting user
     *
     * @return            The updated Embedded Entity data
     */
    protected _updateEmbeddedEntity({
        parentId,
        data,
        options,
        userId,
    }: {
        parentId: string;
        data: object;
        options: object;
        userId: string;
    }): T;

    /**
     * Handle updates to a multiple Embedded Entities within a parent Entity in response to server-side socket broadcast.
     *
     * @param parentId    The parent Entity ID
     * @param data        An Array of embedded entity data updates
     * @param options    Additional options which modify the update request
     * @param userId    The id of the requesting user
     *
     * @return            The updated Embedded Entity Array
     */
    protected _updateManyEmbeddedEntities({
        parentId,
        data,
        options,
        userId,
    }: {
        parentId: string;
        data: object[];
        options: object;
        userId: string;
    }): T[];

    /**
     * Handle deletion of an Embedded Entity within a parent Entity in response to server-side socket broadcast.
     *
     * @param parentId    The parent Entity ID
     * @param deleted    The Embedded Entity id to delete from the parent
     * @param options    Additional options which modify the deletion request
     * @param userId    The id of the requesting user
     *
     * @return            The deleted Embedded Entity data
     */
    protected _deleteEmbeddedEntity({
        parentId,
        deleted,
        options,
        userId,
    }: {
        parentId: string;
        deleted: string;
        options: object;
        userId: string;
    }): T;

    /**
     * Handle deletion of multiple Embedded Entities within a parent Entity in response to server-side socket broadcast.
     *
     * @param parentId    The parent Entity ID
     * @param data        An Array of Embedded Entity ids to delete
     * @param options    Additional options which modify the update request
     * @param userId    The id of the requesting user
     *
     * @return            The deleted Embedded Entity Array
     */
    protected _deleteManyEmbeddedEntities({
        parentId,
        data,
        options,
        userId,
    }: {
        parentId: string;
        data: string[];
        options: object;
        userId: string;
    }): T[];

    /**
     * Get an Entity from the Collection by name
     * @param name The name of the Entity to retrieve
     * @param strict Throw an Error if the requested id does not exist, otherwise return null. Default false.
     */
    getName(name: string, strict?: boolean): T | null;
}
