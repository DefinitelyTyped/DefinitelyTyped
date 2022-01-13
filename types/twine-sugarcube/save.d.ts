export interface SavedMoment {
    /** The title of the associated passage. */
    title: string;
    /** The current variable store object, which contains sigil - less name ⇒ value pairs(e.g.$foo exists as foo). */
    variables: {[x: string]: any};
    /** The current pull count of SugarCube's seedable PRNG, exists only if enabled. */
    pull?: number | undefined;
}

export interface SavedState {
    /** The array of moment objects. */
    history: SavedMoment[];
    /** The index of the active moment. */
    index: number;
    /** The array of expired moment passage titles, exists only if any moments have expired. */
    expired?: string[] | undefined;
    /** The seed of SugarCube's seedable PRNG, exists only if enabled. */
    seed?: string | undefined;
}

export interface SaveObject {
    /** The story's save ID. */
    id: string;
    /** The marshaled story history(see below for details). */
    state: SavedState;
    /** The title of the save. */
    title: string;
    /** The date when the save was created(in milliseconds elapsed since epoch). */
    date: number;
    /** Save metadata(end - user specified; must be JSON - serializable). */
    metadata?: any;
    /** Save version(end - user specified via Config.saves.version). */
    version?: any;
}

export interface SaveDetails {
    /**
     * A string representing how the save operation came about — i.e., what caused it.
     */
    type: 'autosave' | 'disk' | 'serialize' | 'slot';
}

type SaveHandler = (save: SaveObject, details: SaveDetails) => void;
type LoadHandler = (save: SaveObject) => void;

interface SaveEventAPI<HandlerType> {
    /**
     * Add new handler
     * @param handler
     */
    add(handler: HandlerType): void;
    /**
     * Deletes all currently registered handlers.
     */
    clear(): void;
    /**
     * Deletes the specified handler.
     * @param handler The handler function to be deleted.
     * @returns `true` if the handler existed or `false` if not.
     * @example
     * // Given:
     * // let myOnLoadHandler = function (save) {
     * //    // code to process the save object before it's loaded
     * // };
     * // Save.onLoad.add(myOnLoadHandler);
     *
     * Save.onLoad.delete(myOnLoadHandler);
     */
    delete(handler: HandlerType): boolean;
    /**
     * Returns the number of currently registered handlers.
     */
    size: number;
}
export interface SaveAPI {
    /**
     * Deletes all slot saves and the autosave, if it's enabled.
     * @since 2.0.0
     */
    clear(): void;

    /**
     * Returns the saves object.
     * @since 2.0.0
     */
    get(): object;

    /**
     * Returns whether both the slot saves and autosave are available and ready.
     * @since 2.0.0
     */
    ok(): boolean;

    /**
     * Performs any required processing before the save data is loaded — e.g., upgrading
     * out-of-date save data. The handler is passed one parameter, the save object to be
     * processed. If it encounters an unrecoverable problem during its processing, it may
     * throw an exception containing an error message; the message will be displayed to
     * the player and loading of the save will be terminated.
     * @since 2.36.0
     */
    onLoad: SaveEventAPI<LoadHandler>;
    /**
     * Performs any required processing before the save data is saved. The handlers is passed
     * two parameters, the save object to be processed and save operation details object.
     * @since 2.36.0
     */
    onSave: SaveEventAPI<SaveHandler>;

    slots: {
        /**
         * Returns the total number of available slots.
         * @since 2.0.0
         */
        length: number;

        /**
         * Returns the total number of filled slots.
         * @since 2.0.0
         */
        count(): number;

        /**
         * Deletes a save from the given slot.
         * @param slot Save slot index (0-based).
         * @since 2.0.0
         */
        delete(slot: number): void;

        /**
         * Returns a save object from the given slot or null, if there was no save in the given slot.
         * @param slot Save slot index (0-based).
         * @since 2.0.0
         */
        get(slot: number): SaveObject;

        /**
         * Returns whether the given slot is filled.
         * @param slot Save slot index (0-based).
         * @since 2.0.0
         */
        has(slot: number): boolean;

        /**
         * Returns whether there are any filled slots.
         * @since 2.0.0
         */
        isEmpty(): boolean;

        /**
         * Loads a save from the given slot.
         * @param slot
         */
        load(slot: number): void;

        /**
         * Returns whether the slot saves are available and ready.
         * @since 2.0.0
         */
        ok(): boolean;

        /**
         * Saves to the given slot.
         * @param slot Save slot index (0-based).
         * @param title The title of the save. If omitted or null, defaults to the passage's description.
         * @param metadata The data to be stored in the save object's metadata property. Must be JSON-serializable.
         * @since 2.0.0
         */
        save(slot: number, title?: string, metadata?: any): void;
    };

    autosave: {
        /**
         * Deletes the autosave.
         * @since 2.0.0
         */
        delete(): void;

        /**
         * Returns the save object from the autosave or null, if there was no autosave.
         * @since 2.0.0
         */
        get(): SaveObject;

        /**
         * Returns whether the autosave is filled.
         * @since 2.0.0
         */
        has(): boolean;

        /**
         * Loads the autosave.
         * @since 2.0.0
         */
        load(): void;

        /**
         * Returns whether the autosave is available and ready.
         * @since 2.0.0
         */
        ok(): boolean;

        /**
         * Saves to the autosave.
         * @param title The title of the save. If omitted or null, defaults to the passage's description.
         * @param metadata The data to be stored in the save object's metadata property. Must be JSON-serializable.
         * @since 2.0.0
         */
        save(title?: string, metadata?: any): void;
    };

    /**
     * Saves to disk.
     * @param filename The base filename of the save, which gets slugified to remove most symbols. Appended to this is a datestamp
     * (format: YYYMMDD-hhmmss) and the file extension .save. (e.g. "The Scooby Chronicles" would result in the full filename:
     * the-scooby-chronicles-{datestamp}.save). If omitted or null, defaults to the story's title.
     * @param metadata The data to be stored in the save object's metadata property. Must be JSON-serializable.
     * @since 2.8.0
     */
    export(filename?: string, metadata?: any): void;

    /**
     * Loads a save from disk.
     *
     * NOTE: You do not call this manually, it must be called by the change event handler of an <input type="file"> element.
     * @param event The event object which was passed to the change event handler of the associated <input type="file"> element.
     * @since 2.0.0
     * @example
     * // Add file input
     * var input  = document.createElement('input');
     * input.type = 'file';
     * input.id   = 'saves-import-file';
     * input.name = 'saves-import-file';
     * // Set up Save.import() as the event handler for when a file has been chosen
     * jQuery(input).on('change', Save.import);
     */
    import(event: Event): void;

    /**
     * Returns a save as a serialized string, or null if saving is not allowed within the current context.
     * @param metadata The data to be stored as metadata. Must be JSON-serializable.
     * @since 2.21.0
     */
    serialize(metadata?: any): string;

    /**
     * Deserializes the given save string, created via Save.serialize(), and loads the save. Returns the bundled metadata, if any,
     * or null if the given save could not be deserialized and loaded.
     * @param saveStr The serialized save string.
     * @since 2.21.0
     */
    deserialize(saveStr: string): any;
}

export {};
