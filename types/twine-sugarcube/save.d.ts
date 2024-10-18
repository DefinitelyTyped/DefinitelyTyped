export enum SaveType {
    Unknown,
    Auto,
    Slot,
    Disk,
    Base64,
}

/** @deprecated 2.37.0 */
export interface SaveDetails {
    /**
     * A string representing how the save operation came about — i.e., what caused it.
     */
    type: "autosave" | "disk" | "serialize" | "slot";
}

export interface SavedMoment {
    /** The title of the associated passage. */
    title: string;
    /** The current variable store object, which contains sigil - less name ⇒ value pairs(e.g.$foo exists as foo). */
    variables: { [x: string]: any };
    /** The current pull count of SugarCube's seedable PRNG, exists only if enabled. */
    pull?: number | undefined;
}

export interface SavedState {
    /** The array of expired moment passage titles, exists only if any moments have expired. */
    expired?: string[] | undefined;
    /** The array of moment objects. */
    history: SavedMoment[];
    /** The index of the active moment. */
    index: number;
    /** The seed of SugarCube's seedable PRNG, exists only if enabled. */
    seed?: string | undefined;
}

export interface SaveDescriptor {
    /** The date when the save was created(in milliseconds elapsed since epoch). */
    date: number;
    /** The save's description. */
    desc: string;
    /** The story's save ID. */
    id: string;

    /** Save metadata(end - user specified; must be JSON - serializable). */
    metadata?: any;
    /** The save's type. */
    type: SaveType;
    /** Save version(end - user specified via Config.saves.version). */
    version?: any;
}

export interface SaveObject extends SaveDescriptor {
    /** The marshaled story history(see below for details). */
    state: SavedState;
}

type SaveHandler = (save: SaveObject) => void;
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

interface BrowserSavesSet {
    /**
     * The total number of existing browser saves in the set.
     * @since 2.37.0
     */
    size: number;

    /**
     * Deletes all existing set saves.
     * @since 2.37.0
     */
    clear(): void;

    /**
     * Deletes the save at the given index.
     * @param index Auto save index (0-based). Must be in the range 0 – Config.saves.max(Auto|Slot)Saves.
     * @since 2.37.0
     */
    delete(index: number): void;

    /**
     * Provides an array of details about all set saves.
     * @since 2.37.0
     */
    entries(): Array<{ index: number; info: SaveDescriptor }>;

    /**
     * Details the save at the given index.
     * @param index 0-based save index
     * @returns The descriptor object for the auto save if it exists, elsewise null.
     * @since 2.37.0
     */
    get(index: number): SaveDescriptor | null;

    /**
     * Determines whether the save at the given index exists.
     * @param index 0-based save index
     * @returns Boolean true if the auto save exists, elsewise false.
     * @since 2.37.0
     */
    has(index: number): boolean;

    /**
     * Determines whether this set of saves saves is enabled.
     * @since 2.37.0
     */
    isEnabled(): boolean;

    /**
     * Loads the save at the given index.
     * @param index 0-based save index
     * @since 2.37.0
     *
     * @example
     * // Load the auto save at the given index. This should be sufficient in the majority of cases.
     *
     * Save.browser.auto.load(index)
     * 	.then(() => {
     * 		Engine.show();
     * 	})
     * 	.catch(error => {
     * 		// Failure.  Handle the error.
     * 		console.error(error);
     * 		UI.alert(error);
     * 	});
     */
    load(index: number): Promise<void>;
}

interface BrowserAutoSavesSet extends BrowserSavesSet {
    /**
     * Saves an auto save. If all auto save positions are full, replaces the oldest auto save.
     * @param desc The description of the auto save. If omitted or null, defaults to the active passage's description.
     * @param metadata The data to be stored in the save object's metadata property. Must be JSON-serializable.
     * @since 2.37.0
     * @example
     * // Basic usage
     * // Save an auto save with the default description and no metadata, handling failure.
     * try {
     * 	Save.browser.auto.save();
     * }
     * catch (error) {
     * 	// Failure.  Handle the error.
     * 	console.error(error);
     * 	UI.alert(error);
     * }
     *
     * // Save an auto save with a description and metadata, handling failure.
     * try {
     * 	const saveMetadata = {
     * 		chars : ['Celes', 'Locke', 'Edward'],
     * 		gold  : 2345
     * 	};
     * 	Save.browser.auto.save("In the wilds", saveMetadata);
     * }
     * catch (error) {
     * 	// Failure. Handle the error.
     * 	console.error(error);
     * 	UI.alert(error);
     * }
     */
    save(desc?: string, metadata?: any): void;
}

interface BrowserSlotsSavesSet extends BrowserSavesSet {
    /**
     * Saves a slot save to the given index.
     * @param index Slot save index (0-based). Must be in the range 0–Config.saves.maxSlotSaves.
     * @param desc The description of the slot save. If omitted or null, defaults to the active passage's description.
     * @param metadata The data to be stored in the save object's metadata property. Must be JSON-serializable.
     * @since 2.37.0
     * @example
     * // Basic usage
     * // Save to slot save index 0 with the default description and no metadata, handling failure.
     *
     * try {
     * 	Save.browser.slot.save(0);
     * }
     * catch (error) {
     * 	// Failure. Handle the error.
     * 	console.error(error);
     * 	UI.alert(error);
     * }
     *
     * // Save to slot save index 0 with a description and metadata, handling failure.
     * try {
     * 	const saveMetadata = {
     * 		chars : ['Celes', 'Locke', 'Edward'],
     * 		gold  : 2345
     * 	};
     * 	Save.browser.slot.save(0, "In the wilds", saveMetadata);
     * }
     * catch (error) {
     * 	// Failure. Handle the error.
     * 	console.error(error);
     * 	UI.alert(error);
     * }
     */
    save(index: number, desc?: string, metadata?: any): void;
}

export interface SaveAPI {
    /**
     * Save types pseudo-enumeration. Used to denote the type of save.
     * @since 2.37.0
     */
    Type: { readonly [P in keyof typeof SaveType]: SaveType };

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

    /**
     * @since 2.37.0
     */
    browser: {
        /**
         * The total number of existing browser saves, both auto and slot.
         * @since 2.37.0
         * @example
         * console.log(`There are currently ${Save.browser.size} browser saves`);
         *
         * if (Save.browser.size > 0) {
         *  // Browser saves exist.
         * }
         * if (Save.browser.size === 0) {
         *  // No browser saves exist.
         * }
         */
        size: number;

        /**
         * Deletes all existing browser saves, both auto and slot.
         * @since 2.37.0
         */
        clear(): void;

        /**
         * Loads the most recent browser save, either auto or slot.
         * @since 2.37.0
         *
         * NOTE: The default UI includes a Continue button that makes use of this API. Thus,
         * unless you disable or replace the default UI, players already have access to this functionality.
         *
         * WARNING: Saves cannot be loaded during startup and any attempt to do so will cause an error.
         *
         * @example
         * // Basic usage
         * // Load the most recent browser save, only handling failure. This should be sufficient in the majority of cases.
         * if (Save.browser.size > 0) {
         * 	Save.browser.continue()
         * 		.catch(error => {
         * 			// Failure.  Handle the error.
         * 			console.error(error);
         * 			UI.alert(error);
         * 		});
         * }
         * else {
         * 	// No browser saves exist.
         * }
         *
         * // Load the most recent browser save, handling both success and failure.
         * if (Save.browser.size > 0) {
         * 	Save.browser.continue()
         * 		.then(() => {
         * 			// Success.  Do something special.
         * 		})
         * 		.catch(error => {
         * 			// Failure.  Handle the error.
         * 			console.error(error);
         * 			UI.alert(error);
         * 		});
         * }
         * else {
         * 	// No browser saves exist.
         * }
         */
        continue(): Promise<void>;

        /**
         * Determines whether any browser saves are enabled, either auto, slot, or both.
         * @since 2.37.0
         */
        isEnabled(): boolean;

        /**
         * @since 2.37.0
         */
        auto: BrowserAutoSavesSet;

        /**
         * @since 2.37.0
         */
        slots: BrowserSlotsSavesSet;
    };

    /**
     * Disk saves
     * @since 2.37.0
     */
    disk: {
        /**
         * Exports all existing browser saves as a bundle to disk, which may be restored via Save.disk.import().
         * @param filename
         * @since 2.37.0
         * @example
         * Export all saves as a bundle with a base filename, handling failure.
         * try {
         * 	Save.disk.export('The 6th Fantasy');
         * }
         * catch (error) {
         * 	// Failure.  Handle the error.
         * 	console.error(error);
         * 	UI.alert(error);
         * }
         */
        export(filename: string): void;

        /**
         * Imports a saves bundle from disk, created via Save.disk.export().
         * NOTE: This method must be used as, or be called by, the change event handler of an <input type="file"> element.
         * WARNING: All existing browser saves will be deleted as part of restoring the exported save bundle.
         * @param event The event object that was passed to the change event handler of the associated <input type="file"> element.
         * @since 2.37.0
         * @example
         * // Import the saves bundle from disk, only handling failure. This should be sufficient in the majority of cases.
         * jQuery(document.createElement('input'))
         * 	.prop({
         * 		id   : 'saves-import-file',
         * 		name : 'saves-import-file',
         * 		type : 'file'
         * 	})
         * 	.on('change', ev => {
         * 		// You must provide the event to Save.disk.import()
         * 		Save.disk.import(ev)
         * 			.catch(error => {
         * 				// Failure.  Handle the error.
         * 				console.error(error);
         * 				UI.alert(error);
         * 			});
         * 	});
         *
         * // Import the saves bundle from disk, handling both success and failure.
         * jQuery(document.createElement('input'))
         * 	.prop({
         * 		id   : 'saves-import-file',
         * 		name : 'saves-import-file',
         * 		type : 'file'
         * 	})
         * 	.on('change', function (ev) {
         * 		// You must provide the event to Save.browser.import()
         * 		Save.disk.import(ev)
         * 			.then(() => {
         * 				// Success. Do something special.
         * 			})
         * 			.catch(error => {
         * 				// Failure.  Handle the error.
         * 				console.error(error);
         * 				UI.alert(error);
         * 			});
         * 	});
         */
        import(event: InputEvent): Promise<void>;

        /**
         * Loads the given save from disk, created via Save.disk.save().
         * NOTE: This method must be used as, or be called by, the change event handler of an <input type="file"> element.
         * WARNING: Saves cannot be loaded during startup and any attempt to do so will cause an error.
         * @param event The event object that was passed to the change event handler of the associated <input type="file"> element.
         * @since 2.37.0
         * @example
         * // Load the disk save. This should be sufficient in the majority of cases.
         * jQuery(document.createElement('input'))
         * 	.prop({
         * 		id   : 'saves-disk-load-file',
         * 		name : 'saves-disk-load-file',
         * 		type : 'file'
         * 	})
         * 	.on('change', ev => {
         * 		// You must provide the event to Save.disk.load()
         * 		Save.disk.load(ev)
         * 			.then(metadata => {
         * 				Engine.show();
         * 			})
         * 			.catch(error => {
         * 				// Failure.  Handle the error.
         * 				console.error(error);
         * 				UI.alert(error);
         * 			});
         * 	});
         *
         * // As a self-contained button using macros
         * <<button "Load From Disk">>
         * 	<<script>>
         * 	jQuery(document.createElement('input'))
         * 		.prop('type', 'file')
         * 		.on('change', ev => {
         * 			// You must provide the event to Save.disk.load()
         * 			Save.disk.load(ev)
         * 				.then(metadata => {
         * 					Engine.show();
         * 				})
         * 				.catch(error => {
         * 					// Failure.  Handle the error.
         * 					console.error(error);
         * 					UI.alert(error);
         * 				});
         * 		})
         * 		.trigger('click');
         * 	<</script>>
         * <</button>>
         */
        load(event: InputEvent): Promise<void>;

        /**
         * Saves the current story state to disk, which may be restored via Save.disk.load().
         * @since 2.37.0
         * @param filename The base filename of the disk save, which gets slugified to remove most symbols. Appended to this is a datestamp (format:
         * YYYMMDD-hhmmss) and the file extension .save—e.g., "The Scooby Chronicles" would result in the full filename: the-scooby-chronicles-{datestamp}.save.
         * @param metadata The data to be stored in the save object's metadata property. Must be JSON-serializable.
         * @example
         * // Save with a base filename and no metadata, handling failure.
         * try {
         * 	Save.disk.save("The 6th Fantasy");
         * }
         * catch (error) {
         * 	// Failure.  Handle the error.
         * 	console.error(error);
         * 	UI.alert(error);
         * }
         *
         * // Save with a base filename and metadata, handling failure.
         * try {
         * 	const saveMetadata = {
         * 		chars : ['Celes', 'Locke', 'Edward'],
         * 		gold  : 2345
         * 	};
         * 	Save.disk.save("The 6th Fantasy", saveMetadata);
         * }
         * catch (error) {
         * 	// Failure.  Handle the error.
         * 	console.error(error);
         * 	UI.alert(error);
         * }
         */
        save(filename: string, metadata?: any): void;
    };

    /**
     * Base64 saves
     * @since 2.37.0
     */
    base64: {
        /**
         * Exports all existing browser saves as a bundle to a Base64 string, which may be restored via Save.base64.import().
         * @since 2.37.0
         * @throws An Error instance.
         * @example
         * // Export all saves as a bundle, handling failure.
         * try {
         * 	const base64Save = Save.base64.export();
         * 	// Do something with the saves bundle.
         * }
         * catch (error) {
         * 	// Failure.  Handle the error.
         * 	console.error(error);
         * 	UI.alert(error);
         * }
         */
        export(): string;

        /**
         * Imports the given Base64 saves bundle string, created via Save.base64.export().
         * WARNING: All existing browser saves will be deleted as part of restoring the exported save bundle.
         * @since 2.37.0
         * @param bundle The Base64 saves bundle string.
         * @example
         * // Import the saves bundle, only handling failure. This should be sufficient in the majority of cases.
         * Save.base64.import(base64Bundle)
         * 	.catch(error => {
         * 		// Failure.  Handle the error.
         * 		console.error(error);
         * 		UI.alert(error);
         * 	});
         *
         * // Import the saves bundle, handling both success and failure.
         * Save.base64.import(base64Bundle)
         * 	.then(() => {
         * 		// Success.  Do something special.
         * 	})
         * 	.catch(error => {
         * 		// Failure.  Handle the error.
         * 		console.error(error);
         * 		UI.alert(error);
         * 	});
         */
        import(bundle: string): Promise<void>;

        /**
         * Loads the given Base64 save string, created via Save.base64.save().
         * WARNING: Saves cannot be loaded during startup and any attempt to do so will cause an error.
         * @param save The Base64 save string.
         * @since 2.37.0
         * @example
         * // Load the save string. This should be sufficient in the majority of cases.
         * Save.base64.load(base64Save)
         * 	.then(metadata => {
         * 		Engine.show();
         * 	})
         * 	.catch(error => {
         * 		// Failure.  Handle the error.
         * 		console.error(error);
         * 		UI.alert(error);
         * 	});
         */
        load(save: string): Promise<void>;

        /**
         * Saves the current story state as a Base64 string.
         * @param metadata The data to be stored in the save object's metadata property. Must be JSON-serializable.
         * @returns A Base64 save string.
         * @example
         * // Save without metadata, handling failure.
         * try {
         * 	const base64Save = Save.base64.save();
         * 	// Do something with the save.
         * }
         * catch (error) {
         * 	// Failure.  Handle the error.
         * 	console.error(error);
         * 	UI.alert(error);
         * }
         *
         * // Save with metadata, handling failure.
         * try {
         * 	const saveMetadata = {
         * 		chars : ['Celes', 'Locke', 'Edward'],
         * 		gold  : 2345
         * 	};
         * 	const base64Save = Save.base64.save(saveMetadata);
         * 	// Do something with the save.
         * }
         * catch (error) {
         * 	// Failure.  Handle the error.
         * 	console.error(error);
         * 	UI.alert(error);
         * }
         */
        save(metadata?: any): string;
    };

    // #region Deprected methods

    /**
     * @since 2.0.0
     * @deprecated in 2.37.0 in favor of Save.browser.clear()
     */
    clear(): void;

    /**
     * @since 2.0.0
     * @deprecated 2.37.0
     */
    get(): SaveObject;

    /**
     * @since 2.0.0
     * @deprecated 2.37.0 in favor of Save.browser.isEnabled()
     */
    ok(): boolean;

    /**
     * @since 2.8.0
     * @deprecated 2.37.0 in favor of Save.disk.save()
     */
    export(filename?: string, metadata?: any): void;

    /**
     * @since 2.21.0
     * @deprecated 2.37.0 in favor of Save.base64.load()
     */
    deserialize(saveStr: string): any;

    /**
     * @since 2.0.0
     * @deprecated 2.37.0 in favor of Save.disk.load()
     */
    import(event: Event): void;

    /**
     * @since 2.21.0
     * @deprecated 2.37.0 in favor of Save.base64.save()
     */
    serialize(metadata?: any): string;

    /** @deprecated 2.37.0 */
    autosave: {
        /**
         * @since 2.0.0
         * @deprecated 2.37.0 in favor of Save.browser.auto.delete()
         */
        delete(index: number): void;
        /**
         * @since 2.0.0
         * @deprecated 2.37.0 in favor of Save.browser.auto.delete()
         */
        get(): SaveObject;
        /**
         * @since 2.0.0
         * @deprecated 2.37.0 in favor of  Save.browser.auto.has()
         */
        has(): boolean;
        /**
         * @since 2.0.0
         * @deprecated 2.37.0 in favor of Save.browser.auto.load()
         */
        load(): void;
        /**
         * @since 2.0.0
         * @deprecated 2.37.0 in favor of Save.browser.auto.isEnabled()
         */
        ok(): boolean;
        /**
         * @since 2.0.0
         * @deprecated 2.37.0 in favor of Save.browser.auto.save(
         */
        save(title?: string, metadata?: any): void;
    };

    /** @deprecated 2.37.0 */
    slots: {
        /**
         * @since 2.0.0
         * @deprecated 2.37.0 in favor of Save.browser.slot.size
         */
        length: number;
        /**
         * @since 2.0.0
         * @deprecated 2.37.0
         */
        count(): number;
        /**
         * @since 2.0.0
         * @deprecated 2.37.0 in favor of Save.browser.slot.delete()
         */
        delete(slot: number): void;
        /**
         * @since 2.0.0
         * @deprecated 2.37.0 in favor of Save.browser.slot.get()
         */
        get(slot: number): SaveObject;
        /**
         * @since 2.0.0
         * @deprecated 2.37.0 in favor of Save.browser.slot.has()
         */
        has(slot: number): boolean;
        /**
         * @since 2.0.0
         * @deprecated 2.37.0
         */
        isEmpty(): boolean;
        /**
         * @since 2.0.0
         * @deprecated 2.37.0 in favor of Save.browser.slot.load()
         */
        load(slot: number): Promise<void>;
        /**
         * @since 2.0.0
         * @deprecated 2.37.0 in favor of Save.browser.slot.isEnabled()
         */
        ok(): boolean;
        /**
         * @since 2.0.0
         * @deprecated 2.37.0 in favor of Save.browser.slot.save()
         */
        save(slot: number, title?: string, metadata?: any): void;
    };

    // #endregion
}

export {};
