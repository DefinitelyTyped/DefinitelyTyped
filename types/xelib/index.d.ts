// Type definitions for non-npm package xelib 0.6
// Project: https://github.com/z-edit/xelib
// Definitions by: Alex Layton <https://github.com/awlayton>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 3.4

/**
 * xelib instance
 */
export const wrapper: XELib;

/**
 * Handles are distinguished from `number`.
 *
 * They are only meaninful to xelib and one should not pass arbitrary numbers.
 */
export type Handle = number & { __xelib_handle__: never };
/**
 * A type which can either be a `Handle` type or `0`.
 *
 * In most cases `0` means "all files", "not found", etc.
 */
export type Zeroable<H extends Handle> = H | 0;
// Distinguish types of handles
/**
 * Handle to an Element
 */
export type ElementHandle = Handle & { __xelib_element__: never };
/**
 * Handle to a Container
 */
export type ContainerHandle = Handle & { __xelib_container__: never };
/**
 * Handle to a file
 */
export type FileHandle = ContainerHandle & { __xelib_file__: never };
/**
 * Handle to a Record
 */
export type RecordHandle = ElementHandle & { __xelib_record__: never };
/**
 * Handle to node tree
 * @see GetNodes
 */
export type NodeTreeHandle = Handle & { __xelib_nodetree__: never };

/**
 * Sort modes that can be used with SetSortMode.
 * @see SetSortMode
 */
export enum SortMode {
    /**
     * No sorting.
     * Elements will be in native order corresponding to the order in which they were found in the plugin file they were loaded from.
     */
    None = 0,
    /**
     * Files are sorted by load order,
     * groups are sorted by signature,
     * and records are sorted by FormID
     */
    FormID = 1,
    /**
     * Files are sorted by filename,
     * groups are sorted by display name,
     * and record are sorted by their EditorID.
     */
    EditorID = 2,
    /**
     * Files are sorted by filename,
     * groups are sorted by display name,
     * and records are sorted by their FULL name.
     */
    Name = 3,
}

/**
 * States returned by GetLoaderStatus.
 * @see GetLoaderStatus
 */
export enum LoaderState {
    /**
     * Indicates the loader hasn't been run and isn't running.
     */
    IsInactive = 0,
    /**
     * Indicates the loader is currently active.
     */
    IsActive = 1,
    /**
     * Indicates the loader is done.
     */
    IsDone = 2,
    /**
     * Indicates the loader encountered an error.
     */
    IsError = 3,
}

/**
 * Game modes for use with SetGameMode.
 * @see SetGameMode
 */
export enum GameMode {
    /**
     * Fallout: New Vegas
     */
    gmFNV = 0,
    /**
     * Fallout 3
     */
    gmFO3 = 1,
    /**
     * The Elder Scrolls IV: Oblivion
     */
    gmTES4 = 2,
    /**
     * The Elder Scrolls V: Skyrim
     */
    gmTES5 = 3,
    /**
     * Skyrim: Special Edition
     */
    gmSSE = 4,
    /**
     * Fallout 4
     */
    gmFO4 = 5,
}

/**
 * Object corresponding to a supported game mode.
 */
export interface Game {
    /**
     * The name of the game used for display purposes.
     */
    name: string;
    /**
     * The name of the game used to find the correct Hardcoded.dat file.
     */
    shortName: string;
    /**
     * The game mode for the game.
     */
    mode: GameMode;
    /**
     * The filename of the game executable.
     */
    exeName: string;
}

/**
 * @see BuildArchive
 */
export enum ArchiveType {
    /**
     * Unused.
     */
    baNone = 0,
    /**
     * Used for Morrowind archives.
     */
    baTES3 = 1,
    /**
     * Used for Fallout 3, Oblivion, and Skyrim Classic archives.
     */
    baFO3 = 2,
    /**
     * Used for Skyrim: Special Edition archives.
     */
    baSSE = 3,
    /**
     * Used for Fallout 4 archives.
     */
    baFO4 = 4,
    /**
     * Used for Fallout 4 texture archives.
     */
    baFO4dds = 5,
}

/**
 * @see XELib.ElementType
 */
export enum ElementType {
    etFile = 0,
    etMainRecord = 1,
    etGroupRecord = 2,
    etSubRecord = 3,
    etSubRecordStruct = 4,
    etSubRecordArray = 5,
    etSubRecordUnion = 6,
    etArray = 7,
    etStruct = 8,
    etValue = 9,
    etFlag = 10,
    etStringListTerminator = 11,
    etUnion = 12,
    etStructChapter = 13,
}

/**
 * @see XELib.DefType
 */
export enum DefType {
    dtSubRecord = 1,
    dtSubRecordArray = 2,
    dtSubRecordStruct = 3,
    dtSubRecordUnion = 4,
    dtString = 5,
    dtLString = 6,
    dtLenString = 7,
    dtByteArray = 8,
    dtInteger = 9,
    dtIntegerFormater = 10,
    dtIntegerFormaterUnion = 11,
    dtFlag = 12,
    dtFloat = 13,
    dtArray = 14,
    dtStruct = 15,
    dtUnion = 16,
    dtEmpty = 17,
    dtStructChapter = 18,
}

/**
 * Used by Smash.
 * @see XELib.SmashType
 */
export enum SmashType {
    stUnknown = 0,
    stRecord = 1,
    stString = 2,
    stInteger = 3,
    stFlag = 4,
    stFloat = 5,
    stStruct = 6,
    stUnsortedArray = 7,
    stUnsortedStructArray = 8,
    stSortedArray = 9,
    stSortedStructArray = 10,
    stByteArray = 11,
    stUnion = 12,
}

/**
 * Used to determine what form to use when the user is editing values.
 * @see XELib.ValueType
 */
export enum ValueType {
    vtUnknown = 0,
    vtBytes = 1,
    vtNumber = 2,
    vtString = 3,
    vtText = 4,
    vtReference = 5,
    vtFlags = 6,
    vtEnum = 7,
    vtColor = 8,
    vtArray = 9,
    vtStruct = 10,
}

/**
 * Corresponds to the conflict status of an individual element.
 * @see XELib.ConflictThis
 */
export enum ConflictThis {
    ctUnknown = 0,
    ctIgnored = 1,
    ctNotDefined = 2,
    ctIdenticalToMaster = 3,
    ctOnlyOne = 4,
    ctHiddenByModGroup = 5,
    ctMaster = 6,
    ctConflictBenign = 7,
    ctOverride = 8,
    ctIdenticalToMasterWinsConflict = 9,
    ctConflictWins = 10,
    ctConflictLoses = 11,
}

/**
 * Corresponds to the overall conflict status of an element.
 * @see XELib.ConflictAll
 */
export enum ConflictAll {
    caUnknown = 0,
    caOnlyOne = 1,
    caNoConflict = 2,
    caConflictBenign = 3,
    caOverride = 4,
    caConflict = 5,
    caConflictCritical = 6,
}

/**
 * Options that can be passed to GetREFRs.
 * @see GetREFRs
 */
export interface GetREFRsOptions {
    /**
     * Pass true to exclude deleted REFRs.
     * @default false
     */
    excludeDeleted?: boolean;
    /**
     * Pass true to exclude disabled REFRs.
     * @default false
     */
    excludeDisabled?: boolean;
    /**
     * Pass true to exclude REFRs which have an XESP element.
     * @default false
     */
    excludeXESP?: boolean;
}

export interface Vector {
    X?: number;
    Y?: number;
    Z?: number;
}

/**
 * Identity utility type
 *
 * So I can "extend" the typeof an enum
 * @internal
 */
export type I<T> = T;

/**
 * API for xelib wrapper
 */
export interface XELib
    extends I<typeof LoaderState>,
        I<typeof GameMode>,
        I<typeof ArchiveType>,
        I<typeof ElementType>,
        I<typeof DefType>,
        I<typeof SmashType>,
        I<typeof ValueType>,
        I<typeof ConflictThis>,
        I<typeof ConflictAll> {
    /**
     * Meta functions
     * @see {@link https://z-edit.github.io#/docs?t=Development%2FAPIs%2Fxelib%2FMeta}
     */
    /**
     * @see SortMode
     */
    sortBy: typeof SortMode;
    /**
     * Initializes XEditLib.
     * This should be called after the DLL loaded to prepare the library for future function calls.
     *
     * @param dllPath Path to XEditLib.dll
     */
    Initialize(dllPath: string): void;
    /**
     * Finalizes XEditLib.
     * This should be called just before the DLL is unloaded to rename saved files, save logs, and free all memory used by the library.
     */
    Finalize(): void;
    /**
     * Gets the value of a global from the library. Supported globals include:
     *
     * - ProgramPath: The path to the folder containing XEditLib.dll.
     * - Version: The version of XEditLib.dll.
     * - GameName: The short game name associated with the current game mode.
     * - AppName: The abbreviated game name associated with the current game mode.
     * - LongGameName: The full game name associated with the current game mode.
     * - DataPath: The game data path associated with the current game mode.
     * - AppDataPath: The game application data path associated with the current game mode.
     * - MyGamesPath: The my games folder path associated with the current game mode.
     * - GameIniPath: The path to the INI file associated with the current game mode.
     */
    GetGlobal(key: string): string;
    /**
     * Returns a list of name value pairs for all globals.
     * Entries are separated by \r\n, and name value pairs are separated by =.
     */
    GetGlobals(): string;
    /**
     * Sets the sort mode to be used by GetElements when the sort argument is set to true.
     * @see GetElements
     * @see SortMode
     */
    SetSortMode(mode: keyof typeof SortMode, reverse: boolean): void;
    /**
     * Releases the input handle if it is allocated.
     */
    Release(id: Handle): void;
    /**
     * Releases the input handle if it is allocated.
     * For use with handles returned by GetNodes.
     * @see GetNodes
     */
    ReleaseNodes(id: Handle): void;
    /**
     * Finds other handles to a particular interface.
     */
    GetDuplicateHandles(id: Handle): Handle[];

    /**
     * Message functions
     * @see {@link https://z-edit.github.io#/docs?t=Development%2FAPIs%2Fxelib%2FMessages}
     */
    /**
     * Gets any messages that have been added to XEditLib's internal log
     * since the last time this function was called.
     */
    GetMessages(): string;
    /**
     * Clears all messages from the XEditLib's internal log.
     */
    ClearMessages(): void;
    /**
     * Returns a message corresponding to the last exception that occurred.
     * Returns an empty string if no exception has occurred since the last time this function was called.
     */
    GetExceptionMessage(): string;

    /**
     * Setup functions
     * @see {@link https://z-edit.github.io#/docs?t=Development%2FAPIs%2Fxelib%2FSetup}
     */
    /**
     * @see LoaderState
     */
    loaderStates: typeof LoaderState;
    /**
     * @see GameMode
     */
    gameModes: typeof GameMode;
    /**
     * Array of game objects corresponding to each supported game mode.
     */
    games: readonly Game[];
    /**
     * Retrieves the path to the game corresponding to gameMode from the registry.
     * Returns an empty string if the game path cannot be found.
     * @see GameMode
     */
    GetGamePath(gameMode: GameMode): string;
    /**
     * Sets the game path to be used when loading plugin and resource files to gamePath.
     */
    SetGamePath(gamePath: string): void;
    /**
     * Retrieves the the language used for gameMode from the game INI file.
     * Returns an empty string if the game INI file cannot be found.
     * @see GameMode
     */
    GetGameLanguage(gameMode: GameMode): string;
    /**
     * Sets the language to be used when loading string files to language.
     */
    SetLanguage(language: string): void;
    /**
     * Sets the game mode to gameMode.
     * @see GameMode
     */
    SetGameMode(gameMode: GameMode): void;
    /**
     * Returns the user's load order determined from loadorder.txt, plugins.txt, or plugin dates depending on the game and available files.
     * The load order is returned as a list of filenames separated by \r\n.
     */
    GetLoadOrder(): string;
    /**
     * Returns the user's active plugins determined from plugins.txt.
     * Active plugins are returned as a list of filenames separated by \r\n.
     */
    GetActivePlugins(): string;
    /**
     * Loads plugin files in loadOrder.
     * If smartLoad is set to true, master files required by files in loadOrder will be automatically loaded as necessary.
     * Plugin loading is performed in a background thread, use GetLoaderStatus to track the loader and determine when it is done.
     * @see GetLoaderStatus
     */
    LoadPlugins(
        loadOrder: string,
        /**
         * @default true
         */
        smartLoad?: boolean,
    ): void;
    /**
     * Loads the plugin file filename at the next available load order position after currently loaded plugins files.
     * Plugin loading is performed in a background thread, use GetLoaderStatus to track the loader and determine when it is done.
     * @see GetLoaderStatus
     */
    LoadPlugin(filename: string): void;
    /**
     * Loads the header of plugin file filename and returns a handle to it.
     * This plugin should be unloaded with UnloadPlugin once you're done with it.
     * Note: Unlike LoadPlugin, this function does not use a background thread.
     * @see UnloadPlugin
     */
    LoadPluginHeader(filename: string): FileHandle;
    /**
     * Builds referenced by information for the plugin file id.
     * If id is 0 reference information will be built for all loaded plugins.
     */
    BuildReferences(id: Zeroable<FileHandle>, sync: boolean): void;
    /**
     * Unloads the plugin file id.
     * Only plugins at the end of the active load order which have not have references built can be unloaded.
     * Plugin headers loaded with LoadPluginHeader can also be unloaded.
     */
    UnloadPlugin(id: FileHandle): void;
    /**
     * Returns the status of the loader.
     * @see LoaderState
     */
    GetLoaderStatus(): LoaderState;
    /**
     * Returns an array of all loaded filenames.
     * Excludes hardcoded files if excludeHardcoded is true.
     */
    GetLoadedFileNames(excludeHardcoded: boolean): string[];

    /**
     * Resource functions
     * @see {@link https://z-edit.github.io#/docs?t=Development%2FAPIs%2Fxelib%2FResources}
     */
    /**
     * @see ArchiveType
     */
    archiveTypes: typeof ArchiveType;
    /**
     * Extracts container name to destination, replacing existing files if replace is true.
     * Returns true if the container is extracted successfully.
     */
    ExtractContainer(name: string, destination: string, replace: boolean): boolean;
    /**
     * Extracts file source from container name to destination.
     * Returns true if the file is extracted successfully.
     */
    ExtractFile(name: string, source: string, destination: string): boolean;
    /**
     * Returns an array of the file paths in container name in folder.
     */
    GetContainerFiles(name: string, folder: string): string[];
    /**
     * Returns the name of the container where the winning version of the file path is stored.
     */
    GetFileContainer(path: string): string;
    /**
     * Returns an array of the names of the currently loaded containers.
     */
    GetLoadedContainers(): string[];
    /**
     * Loads the container at filePath.
     * Returns true if the container is loaded succesfully.
     */
    LoadContainer(filePath: string): boolean;
    /**
     * Creates a new archive name in folder containing files at the filePaths relative to folder.
     * Uses archive type archiveType.
     * Compresses the archive if compress is true and packs data if share is true.
     * Pass a hexadecimal integer as a string to af or ff to set custom archive flags or file flags, respectively.
     * @see ArchiveType
     */
    BuildArchive(
        name: string,
        folder: string,
        filePaths: string,
        archiveType: ArchiveType,
        compress: boolean,
        share: boolean,
        af: string,
        ff: string,
    ): void;
    /**
     * Return the pixel image data for the texture resource resourceName.
     */
    GetTextureData(resourceName: string): ImageData;

    /**
     * Element functions
     * @see {@link https://z-edit.github.io#/docs?t=Development%2FAPIs%2Fxelib%2FElements}
     */
    /**
     * @see ElementType
     */
    elementTypes: typeof ElementType;
    /**
     * @see DefType
     */
    defTypes: typeof DefType;
    /**
     * @see SmashType
     */
    smashTypes: typeof SmashType;
    /**
     * @see ValueType
     */
    valueTypes: typeof ValueType;
    /**
     * Returns true if an element exists at the given path.
     */
    HasElement(id: Zeroable<Handle>, path: string): boolean;
    /**
     * Resolves the element at path and returns a handle to it.
     * Returns 0 if the element is not found.
     */
    GetElement(id: Zeroable<Handle>, path: string): Zeroable<ElementHandle>;
    /**
     * Traverses path, creating any elements that are not found.
     * Returns a handle to the element at the end of the path.
     */
    AddElement(id: Zeroable<Handle>, path: string): ElementHandle;
    /**
     * Traverses path, creating any elements that are not found.
     * Sets the value of the element at the end of the path to value, and returns a handle to it.
     */
    AddElementValue(id: Zeroable<Handle>, path: string, value: string): ElementHandle;
    /**
     * Removes the element at path if it exists.
     */
    RemoveElement(id: Zeroable<Handle>, path: string): void;
    /**
     * Removes the element id.
     * If the element cannot be removed it gets its parent container and attempts to remove it.
     * This repeats until the container can be removed or the code reaches a main record.
     */
    RemoveElementOrParent(id: ElementHandle): void;
    /**
     * Assigns id2 to id.
     * This is equivalent to drag and drop.
     */
    SetElement(id: ElementHandle, id2: ElementHandle): void;
    /**
     * Returns an array of handles for all of the elements found in the container at path.
     */
    GetElements(id: Zeroable<ContainerHandle>, path: string): ElementHandle[];
    /**
     * Returns an array of the names of all elements that can exist at path.
     */
    GetDefNames(id: Zeroable<Handle>, path: string): string[];
    /**
     * Returns an array of the signatures that can be added to id.
     */
    GetAddList(id: Handle): string[];
    /**
     * Returns the record referenced by the element at path.
     * Note: this returns the master of the record, not the winning override.
     */
    GetLinksTo(id: Zeroable<Handle>, path: string): RecordHandle;
    /**
     * Sets the record referenced by the element at path to id2.
     */
    SetLinksTo(id: Handle, id2: Zeroable<RecordHandle>, path: string): void;
    /**
     * Returns a handle to the container of id.
     * Returns 0 on failure.
     */
    GetContainer(id: Handle): Zeroable<ContainerHandle>;
    /**
     * Returns a handle to the file id belongs to.
     */
    GetElementFile(id: ElementHandle): FileHandle;
    /**
     * Returns the number of element children id has.
     */
    ElementCount(id: Handle): number;
    /**
     * Returns true if id and id2 refer to the same element.
     */
    ElementEquals(id: ElementHandle, id2: ElementHandle): boolean;
    /**
     * Returns true if the value at path matches value.
     * When the element at path contains a reference, value can be a Form ID, Editor ID, or FULL Name.
     * FULL Names passed to this function must be surrounded by double quotes.
     */
    ElementMatches(id: Zeroable<Handle>, path: string, value: string): boolean;
    /**
     * Returns true if the array at path contains an item which matches value at subpath.
     */
    HasArrayItem(id: Zeroable<Handle>, path: string, subpath: string, value: string): boolean;
    /**
     * Returns the first item in the array at path which matches value at subpath.
     * Returns 0 if no matching element is found.
     */
    GetArrayItem(id: Zeroable<Handle>, path: string, subpath: string, value: string): Zeroable<ElementHandle>;
    /**
     * Adds an item to the array at path and sets value at subpath.
     * @returns Handle to the added array item.
     */
    AddArrayItem(id: Zeroable<Handle>, path: string, subpath: string, value: string): ElementHandle;
    /**
     * Removes the first item in the array at path which matches value at subpath.
     */
    RemoveArrayItem(id: Zeroable<Handle>, path: string, subpath: string, value: string): void;
    /**
     * Moves the array item id to position index.
     */
    MoveArrayItem(id: ElementHandle, index: number): void;
    /**
     * Copies element id into id2.
     * Records are copied as overrides if asNew is false.
     * @returns Handle to the copied element.
     */
    CopyElement(id: ElementHandle, id2: ContainerHandle, asNew: boolean): ElementHandle;
    /**
     * @returns true if id is allowed to reference signature.
     */
    GetSignatureAllowed(id: Handle, signature: string): boolean;
    /**
     * @returns Array of all signatures id is allowed to reference.
     */
    GetAllowedSignatures(id: Handle): string[];
    /**
     * @returns true if id has been modified during the current session.
     */
    GetIsModified(id: Handle): boolean;
    /**
     * @returns true if id has can be edited.
     */
    GetIsEditable(id: Handle): boolean;
    /**
     * @returns true if id can be removed.
     */
    GetIsRemoveable(id: Handle): boolean;
    /**
     * @returns true if elements can be added to id.
     */
    GetCanAdd(id: Handle): boolean;
    /**
     * @returns the elementType of id.
     */
    ElementType(id: ElementHandle): ElementType;
    /**
     * @returns id's element type.
     */
    DefType(id: ElementHandle): DefType;
    /**
     * @returns id's definition type.
     */
    SmashType(id: ElementHandle): SmashType;
    /**
     * @returns id's value type.
     */
    ValueType(id: ElementHandle): ValueType;
    /**
     * @returns true if id is a sorted array.
     */
    IsSorted(id: ElementHandle): boolean;
    /**
     * @returns true if id contains flags.
     */
    IsFlags(id: ElementHandle): boolean;

    /**
     * Element value functions
     * @see {@link https://z-edit.github.io#/docs?t=Development%2FAPIs%2Fxelib%2FElement_Values}
     */
    /**
     * Note: This is not the same as XEdit's Name function - LongName is.
     * @returns The name of id.
     */
    Name(id: Handle): string;
    /**
     * Identical to the Name function from XEdit scripting.
     */
    LongName(id: Handle): string;
    /**
     * @returns the name of id used for display purposes in ZEdit's user interface.
     */
    DisplayName(id: Handle): string;
    /**
     * All paths returned from this function can be used with GetElement.
     * @returns The path to id.
     * @see GetElement
     */
    Path(id: Handle): string;
    /**
     * All paths returned from this function can be used with GetElement.
     * @returns Fully qualified path to id.
     * @see GetElement
     */
    LongPath(id: Handle): string;
    /**
     * All paths returned from this function can be used with GetElement.
     * @returns Path of id within its parent record.
     * @see GetElement
     */
    LocalPath(id: Handle): string;
    /**
     * @returns The signature of id.
     */
    Signature(id: Handle): string;
    /**
     * @returns The sort key of id.
     */
    SortKey(id: Handle): string;
    /**
     * This is the same value displayed in the record view.
     * @returns the editor value at path.
     * @returns an empty string if path does not exist.
     */
    GetValue(id: Zeroable<Handle>, path: string): string;
    /**
     * Sets the editor value at path to value.
     * This is the same value displayed in the record view.
     */
    SetValue(id: Zeroable<Handle>, path: string, value: string): void;
    /**
     * @returns The native integer value at path.
     * @returns 0 if path does not exist.
     */
    GetIntValye(id: Zeroable<Handle>, path: string): number;
    /**
     * Sets the native integer value at path to value.
     */
    SetIntValue(id: Zeroable<Handle>, path: string, value: number): void;
    /**
     * @returns The native unsigned integer value at path.
     * @returns 0 if path does not exist.
     */
    GetUIntValue(id: Zeroable<Handle>, path: string): number;
    /**
     * Sets the native unsigned integer value at path to value.
     */
    SetUIntValue(id: Zeroable<Handle>, path: string, value: number): void;
    /**
     * @returns The native float value at path.
     * @returns 0.0 if path does not exist.
     */
    GetFloatValue(id: Zeroable<Handle>, path: string): number;
    /**
     * Sets the native float value at path to value.
     */
    SetFloatValue(id: Zeroable<Handle>, path: string, value: number): void;
    /**
     * Resolves the flags element at path, and sets flag name to state.
     */
    SetFlag(id: Zeroable<Handle>, path: string, name: string, state: boolean): void;
    /**
     * Resolves the flags element at path, and gets the state of flag name.
     */
    GetFlag(id: Zeroable<Handle>, path: string, name: string): boolean;
    /**
     * Resolves the flags element at path and returns an array of the names of the enabled flags on it.
     */
    GetEnabledFlags(id: Zeroable<Handle>, path: string): string[];
    /**
     * Resolves the flags element at path and sets the enabled flags to flags.
     * Note: This disables any active flags that are not in flags.
     */
    SetEnabledFlags(id: Zeroable<Handle>, path: string, flags: readonly string[]): void;
    /**
     * Resolves the flags element at path and returns an array of the names of all of the flags it supports.
     * Flag positions in the array indicate the binary bits they corresponds to.
     */
    GetAllFlags(id: Zeroable<Handle>, path: string): string[];
    /**
     * Resolves the enumeration element at path and returns an array of the options it supports.
     * Enumeration positions in the array indicate the binary bits they corresponds to.
     */
    GetEnumOptions(id: Zeroable<Handle>, path: string): string[];

    /**
     * File functions
     * @see {@link https://z-edit.github.io#/docs?t=Development%2FAPIs%2Fxelib%2FFiles}
     */
    /**
     * Creates a new file filename.
     * @returns Handle to the file
     */
    AddFile(filename: string): FileHandle;
    /**
     * Resolves the file with load order loadOrder and returns a handle to it.
     * Returns 0 if a matching file is not found.
     */
    FileByLoadOrder(loadOrder: number): Zeroable<FileHandle>;
    /**
     * Resolves the file with name equal to filename and returns a handle to it.
     * Returns 0 if a matching file is not found.
     */
    FileByName(filename: string): Zeroable<FileHandle>;
    /**
     * Resolves the file with author equal to author and returns a handle to it.
     * Returns 0 if a matching file is not found.
     */
    FileByAuthor(author: string): Zeroable<FileHandle>;
    /**
     * Removes all records and groups in file id.
     */
    NukeFile(id: FileHandle): void;
    /**
     * Renames file id to newFileName.
     */
    RenameFile(id: FileHandle): void;
    /**
     * Saves file to filePath.
     * Passing an empty string for filePath indicates the file should be saved in the game data folder to {filename}.esp.
     */
    SaveFile(id: FileHandle, filePath: string): void;
    /**
     * @returns Number of records in file id.
     */
    GetRecordCount(id: FileHandle): number;
    /**
     * @returns Number of override records in file id.
     */
    GetOverrideRecordCount(id: FileHandle): number;
    /**
     * @returns MD5 Hash of file id.
     */
    MD5Hash(id: FileHandle): string;
    /**
     * @returns CRC Hash of file id.
     */
    CRCHash(id: FileHandle): string;
    /**
     * @returns Load order of file id.
     */
    GetFileLoadOrder(id: FileHandle): number;
    /**
     * @returns Handle to the file header of file id.
     */
    GetFileHeader(id: FileHandle): Handle;

    /**
     * File value functions
     * @see {@link https://z-edit.github.io#/docs?t=Development%2FAPIs%2Fxelib%2FFile_Values}
     */
    /**
     * @returns Next Object ID of file id.
     */
    GetNextObjecID(id: FileHandle): number;
    /**
     * Sets the Next Object ID of file id to nextObjectID.
     */
    SetNextObjectID(id: FileHandle, nextObjectID: number): void;
    /**
     * This is equivalent to calling Name(id).
     * @returns File name of file id.
     */
    GetFileName(id: FileHandle): string;
    /**
     * @returns Author of file id.
     */
    GetFileAuthor(id: FileHandle): string;
    /**
     * Sets the author of file id to author.
     */
    SetFileAuthor(id: FileHandle, author: string): void;
    /**
     * @returns Description of file id.
     */
    GetFileDescription(id: FileHandle): string;
    /**
     * Sets the description of file id to description.
     */
    SetFileDescription(id: FileHandle, description: string): void;
    /**
     * @returns State of the ESM flag on file id.
     */
    GetIsESM(id: FileHandle): boolean;
    /**
     * Sets the the state of the ESM flag on file id to state.
     */
    SetIsESM(id: FileHandle, state: boolean): void;

    /**
     * Record functions
     * @see {@link https://z-edit.github.io#/docs?t=Development%2FAPIs%2Fxelib%2FRecords}
     */
    /**
     * @see ConflictThis
     */
    conflictThis: typeof ConflictThis;
    /**
     * @see ConflictAll
     */
    conflictAll: typeof ConflictAll;
    /**
     * @returns Form ID of the record id.
     */
    GetFormID(id: RecordHandle, native?: boolean, local?: boolean): number;
    /**
     * @returns Form ID of the record id as a hexadecimal string.
     */
    GetHexFormID(id: RecordHandle, native?: boolean, local?: boolean): string;
    /**
     * Set the form ID of the record id.
     * @returns Form ID of the record id as a hexadecimal string.
     */
    SetFormID(id: RecordHandle, newFormID: number, native?: boolean, fixReferences?: boolean): string;
    /**
     * Pass 0 as id and a load order formID to perform a lookup by load order form ID.
     * Pass a file handle as id and a file formID to perform a lookup by native (file) form ID.
     * @returns Handle to the record matching formID in id.
     */
    GetRecord(id: Zeroable<FileHandle>, formID: number): RecordHandle;
    /**
     * Pass 0 for id to search all loaded files.
     * @returns Array of all records matching search found in id.
     */
    GetRecords(
        id: Zeroable<FileHandle>,
        search: string,
        /**
         * @default false
         */
        includeOverrides?: boolean,
    ): RecordHandle[];
    /**
     * @returns Array of all REFR records referencing base records with signatures in search found within id.
     * @see GetREFRsOptions
     */
    GetREFRs(id: Handle, search: string, opts?: GetREFRsOptions): RecordHandle[];
    /**
     * @returns Array of handles corresponding to the overrides of record id.
     */
    GetOverrides(id: RecordHandle): RecordHandle[];
    /**
     * @returns Handle for the master record of id.
     * @returns New handle to record id if it is a master record.
     */
    GetMasterRecord(id: RecordHandle): RecordHandle;
    /**
     * @returns Handle for the winning override of record id in the masters of file id2.
     */
    GetPreviousOverride(id: RecordHandle, id2: FileHandle): RecordHandle;
    /**
     * @returns Handle for the winning override of record id.
     */
    GetWinningOverride(id: RecordHandle): RecordHandle;
    /**
     * @returns Handle for the file that record id is injected into.
     */
    GetInjectionTarget(id: RecordHandle): FileHandle;
    /**
     * @returns Next record after id which matches search.
     * @returns 0 if no match is found.
     */
    FindNextRecord(id: Handle, search: string, byEdid: boolean, byName: boolean): Zeroable<RecordHandle>;
    /**
     * @returns Previous record after id which matches search.
     * @returns 0 if no match is found.
     */
    FindPreviousRecord(id: Handle, search: string, byEdid: boolean, byName: boolean): Zeroable<RecordHandle>;
    /**
     * Excludes results which do not contain search in their LongName.
     * @returns Up to limitTo records matching signature which can be referenced by the file containing id.
     */
    FindValidReferences(id: FileHandle, signature: string, search: string, limitTo: number): string[];
    /**
     * References must be built with xelib.BuildReferences to be returned.
     * @returns Array of the records that reference record id.
     */
    GetReferencedBy(id: RecordHandle): RecordHandle[];
    /**
     * Exchanges all references to oldFormID with references to newFormID on record id.
     */
    ExchangeReferences(id: RecordHandle, oldFormID: number, newFormID: number): void;
    /**
     * @returns true if record id is a master record.
     */
    IsMaster(id: RecordHandle): boolean;
    /**
     * @returns true if record id is an injected record.
     */
    IsInjected(id: RecordHandle): boolean;
    /**
     * @returns true if record id is an override record.
     */
    IsOverride(id: RecordHandle): boolean;
    /**
     * @returns true if record id is a winning override record.
     */
    IsWinningOverride(id: RecordHandle): boolean;
    /**
     * The handle returned by this function must be freed with xelib.ReleaseNodes.
     * NOTE: Can be slow for very large records like NAVI.
     * @returns Handle pointing to a node tree for rec.
     * @see ReleaseNodes
     */
    GetNodes(rec: RecordHandle): NodeTreeHandle;
    /**
     * Pass a handle for a node tree retrieved using GetNodes for nodes if you plan on calling this function for more than one element from the same record.
     * NOTE: Can be slow for very large records like NAVI.
     * @returns ConflictAll and ConflictThis values for element.
     */
    GetConflictData(
        nodes: Zeroable<NodeTreeHandle>,
        element: ElementHandle,
        asString: true,
    ): [keyof typeof ConflictAll, keyof typeof ConflictThis];
    GetConflictData(
        nodes: Zeroable<NodeTreeHandle>,
        element: ElementHandle,
        asString?: false,
    ): [ConflictAll, ConflictThis];
    /**
     * You must pass a handle for a node tree retrieved using GetNodes to nodes.
     * Note that this is different from xelib.GetElements in that it returns an array with null handles in it as placeholders for unassigned elements.
     * @returns Handles for the element children of element.
     * @see GetNodes
     * @see GetElements
     */
    GetNodeElements(nodes: NodeTreeHandle, element: ElementHandle): Array<Zeroable<ElementHandle>>;

    /**
     * Record value functions
     * @see {@link https://z-edit.github.io#/docs?t=Development%2FAPIs%2Fxelib%2FRecord_Values}
     */
    /**
     * @returns Editor ID of record id.
     * @returns Empty string if the record does not have an editor ID.
     */
    EditorID(id: RecordHandle): string;
    /**
     * @returns FULL name of record id.
     * @returns Empty string if the record does not have an FULL name.
     */
    FullName(id: RecordHandle): string;
    /**
     * Translates record id by vector.
     */
    Translate(id: RecordHandle, vector: Vector): void;
    /**
     * Rotates record id by vector degrees.
     */
    Rotate(id: RecordHandle, vector: Vector): void;
    /**
     * Gets the state of record flag name on record id.
     */
    GetRecordFlag(id: RecordHandle, name: string): boolean;
    /**
     * Sets record flag name on record id to state.
     */
    SetRecordFlag(id: RecordHandle, name: string, state: boolean): void;
    /**
     * @returns true if the `Keywords` array on `record` has an element matching `value`.
     */
    HasKeyword(record: RecordHandle, value: string): boolean;
    /**
     * Finds the first item in the `Keywords` array on `record` matching `value`.
     * @returns Handle to the element if found, else returns 0.
     */
    GetKeyword(record: RecordHandle, value: string): Zeroable<ElementHandle>;
    /**
     * Adds an item to the `Keywords` array on `record`.
     * @returns Handle to the added Keyword element.
     */
    AddKeyword(record: RecordHandle, value: string): ElementHandle;
    /**
     * Removes the first item in the `Keywords` array on `record` matching `value`.
     */
    RemoveKeyword(record: RecordHandle, value: string): void;
    /**
     * @returns true if the `FormIDs` array on `record` has an element matching `value`.
     */
    HasFormID(record: RecordHandle, value: string): boolean;
    /**
     * Finds the first item in the `FormIDs` array on `record` matching `value`.
     * @returns Handle to the element if found, else returns 0.
     */
    // tslint:disable-next-line adjacent-overload-signatures
    GetFormID(record: RecordHandle, value: string): Zeroable<ElementHandle>;
    /**
     * Adds an item to the `FormIDs` array on `record`.
     * @returns Handle to the added Form ID element.
     */
    AddFormID(record: RecordHandle, value: string): ElementHandle;
    /**
     * Removes the first item in the `FormIDs` array on `record` matching `value`.
     */
    RemoveFormID(record: RecordHandle, value: string): void;
    /**
     * @returns true if the `Music Tracks` array on `record` has an element matching `value`.
     */
    HasMusicTrack(record: RecordHandle, value: string): boolean;
    /**
     * Finds the first item in the `Music Tracks` array on `record` matching `value`.
     * @returns Handle to the element if found, else returns 0.
     */
    GetMusicTrack(record: RecordHandle, value: string): Zeroable<ElementHandle>;
    /**
     * Adds an item to the `Music Tracks` array on `record`.
     * @returns Handle to the added Music Track element.
     */
    AddMusicTrack(record: RecordHandle, value: string): ElementHandle;
    /**
     * Removes the first item in the `Music Tracks` array on `record` matching `value`.
     */
    RemoveMusicTrack(record: RecordHandle, value: string): void;
    /**
     * @returns true if the `Footstep Sets` array on `record` has an element matching `value`.
     */
    HasFootstep(record: RecordHandle, value: string): boolean;
    /**
     * Finds the first item in the `Footstep Sets` array on `record` matching `value`.
     * @returns Handle to the element if found, else returns 0.
     */
    GetFootstep(record: RecordHandle, value: string): Zeroable<ElementHandle>;
    /**
     * Adds an item to the `Footstep Sets` array on `record`.
     * @returns Handle to the added Footstep element.
     */
    AddFootstep(record: Handle, value: string): ElementHandle;
    /**
     * Removes the first item in the `Footstep Sets` array on `record` matching `value`.
     */
    RemoveFootstep(record: RecordHandle, value: string): void;
    /**
     * @returns true if the `Additional Races` array on `record` has an element matching `value`.
     */
    HasAdditionalRace(record: RecordHandle, value: string): boolean;
    /**
     * Finds the first item in the `Additional Races` array on `record` matching `value`.
     * @returns Handle to the element if found, else returns 0.
     */
    GetAdditionalRace(record: RecordHandle, value: string): Zeroable<ElementHandle>;
    /**
     * Adds an value the `Additional Races` array on `record`.
     * @returns Handle to the added Additional Race element.
     */
    AddAdditionalRace(record: RecordHandle, value: string): ElementHandle;
    /**
     * Removes the first item in the `Additional Races` array on `record` matching `value`.
     */
    RemoveAdditionalRace(record: RecordHandle, value: string): void;
    /**
     * @returns true if the `Perks` array on `record` has an element matching `value` at path `Perk`.
     */
    HasPerk(record: RecordHandle, value: string): boolean;
    /**
     * Finds the first item in the `Perks` array on `record` matching `value` at path `Perk`.
     * @returns Handle to the element if found, else returns 0.
     */
    GetPerk(record: RecordHandle, value: string): Zeroable<ElementHandle>;
    /**
     * Adds an value the `Perks` array on `record`,
     * setting `Perk` to `value` and `rank` if provided.
     * @returns Handle to the added Perk element.
     */
    AddPerk(record: RecordHandle, value: string, rank?: string): ElementHandle;
    /**
     * Removes the first item in the `Perks` array on `record` matching `value` at `Perk`.
     */
    RemovePerk(record: RecordHandle, value: string): void;
    /**
     * @returns true if the `Effects` array on `record` has an element matching `value` at `EFID - Base Effect`.
     */
    HasEffect(record: RecordHandle, value: string): boolean;
    /**
     * Finds the first item in the `Effects` array on `record` matching `value` at `EFID - Base Effect`.
     * @returns Handle to the element if found, else returns 0.
     */
    GetEffect(record: RecordHandle, value: string): Zeroable<ElementHandle>;
    /**
     * Adds an item to the `Effects` array on `record`,
     * setting `EFID - Base Effect` to `value`,
     * `EFIT\Magnitude` to `value2`,
     * `EFIT\Area` to `value3`,
     * and `EFIT\Duration` to `value4`.
     * @returns Handle to the added Effect element.
     */
    AddEffect(record: RecordHandle, value: string, value2: string, value3: string, value4: string): ElementHandle;
    /**
     * Removes the first item in the `Effects` array on `record` matching `value` at `EFID - Base Effect`.
     */
    RemoveEffect(record: RecordHandle, value: string): void;
    /**
     * @returns true if the `Items` array on `record` has an element matching `value` at `CNTO\Item`.
     */
    HasItem(record: RecordHandle, value: string): boolean;
    /**
     * Finds the first item in the `Items` array on `record` matching `value` at `CNTO\Item`.
     * @returns Handle to the element if found, else returns 0.
     */
    GetItem(record: RecordHandle, value: string): Zeroable<ElementHandle>;
    /**
     * Adds an item to the `Items` array on `record`,
     * setting `CNTO\Item` to `value`, and `CNTO\Count` to `value2`.
     * @returns Handle to the added Item element.
     */
    AddItem(record: RecordHandle, value: string, value2: string): ElementHandle;
    /**
     * Removes the first item in the `Items` array on `record` matching `value` at `CNTO\Item`.
     */
    RemoveItem(record: RecordHandle, value: string): void;
    /**
     * @returns true if the `Leveled List Entries` array on `record` has an element matching `value` at `LVLO\Reference`.
     */
    HasLeveledEntry(record: RecordHandle, value: string): boolean;
    /**
     * Finds the first item in the `Leveled List Entries` array on `record` matching `value` at `LVLO\Reference`.
     * @returns Handle to the element if found, else returns 0.
     */
    GetLeveledEntry(record: RecordHandle, value: string): Zeroable<ElementHandle>;
    /**
     * Adds an item to the `Leveled List Entries` array on `record`,
     * setting `LVLO\Reference` to `value`, `LVLO\Level` to `value2`, and `LVLO\Count` to `value3`.
     * @returns Handle to the added LeveledEntry element.
     */
    AddLeveledEntry(record: RecordHandle, value: string, value2: string, value3: string): ElementHandle;
    /**
     * Removes the first item in the `Leveled List Entries` array on `record`
     * matching `value` at `LVLO\Reference`.
     */
    RemoveLeveledEntry(record: RecordHandle, value: string): void;
    /**
     * @returns true if the `VMAD\Scripts` array on `record` has an element matching `value` at `scriptName`.
     */
    HasScript(record: RecordHandle, value: string): boolean;
    /**
     * Finds the first item in the `VMAD\Scripts` array on `record` matching `value` at `scriptName`.
     * @returns Handle to the element if found, else returns 0.
     */
    GetScript(record: RecordHandle, value: string): Zeroable<ElementHandle>;
    /**
     * Adds an item to the `VMAD\Scripts` array on `record`,
     * setting `scriptName` to `value`, and `Flags` to `value2`.
     * @returns Handle to the added Script element.
     */
    AddScript(record: RecordHandle, value: string, value2: string): ElementHandle;
    /**
     * Removes the first item in the `VMAD\Scripts` array on `record` matching `value` at `scriptName`.
     */
    RemoveScript(record: RecordHandle, value: string): void;
    /**
     * @returns true if the `Properties` array on `scriptElement` has an element matching `value` at `propertyName`.
     */
    HasScriptProperty(scriptElement: ElementHandle, value: string): boolean;
    /**
     * Finds the first item in the `Properties` array on `scriptElement` matching `value` at `propertyName`.
     * @returns Handle to the element if found, else returns 0.
     */
    GetScriptProperty(scriptElement: ElementHandle, value: string): Zeroable<ElementHandle>;
    /**
     * Adds an item to the `Properties` array on `scriptElement`,
     * setting `propertyName` to `value`, and `CNTO\Count` to `value2`.
     * @returns Handle to the added ScriptProperty element.
     */
    AddScriptProperty(scriptElement: ElementHandle, value: string, value2: string): ElementHandle;
    /**
     * Removes the first item in the `Properties` array on `scriptElement` matching `value` at `propertyName`.
     */
    RemoveScriptProperty(scriptElement: ElementHandle, value: string): void;
    /**
     * @returns true if the `Conditions` array on `record` has an element matching `value` at `CTDA\Function`.
     */
    HasCondition(record: RecordHandle, value: string): boolean;
    /**
     * Finds the first item in the `Conditions` array on `record` matching `value` at `CTDA\Function`.
     * @returns Handle to the element if found, else returns 0.
     */
    GetCondition(record: RecordHandle, value: string): Zeroable<ElementHandle>;
    /**
     * Adds an item to the `Conditions` array on `record`,
     * setting `CTDA\Function` to `value`,
     * `CTDA\Type` to `value2`,
     * `CTDA\Comparison Value` to `value3`,
     * and `CTDA\Parameter #1` to `value4`.
     * @returns Handle to the added Condition element.
     */
    AddCondition(record: RecordHandle, value: string, value2: string, value3: string, value4: string): ElementHandle;
    /**
     * Removes the first item in the `Conditions` array on `record` matching `value` at `CTDA\Function`.
     */
    RemoveCondition(record: RecordHandle, value: string): void;
    /**
     * @returns Value at `DATA\Value` on `record`.
     */
    GetGoldValue(record: RecordHandle): number;
    /**
     * Sets the value at `DATA\Value` on `record` to `value`.
     */
    SetGoldValue(record: RecordHandle, value: number): void;
    /**
     * @returns Value at `DATA\Weight` on `record`.
     */
    GetWeight(record: RecordHandle): number;
    /**
     * Sets the value at `DATA\Weight` on `record` to `value`.
     */
    SetWeight(record: RecordHandle, value: number): void;
    /**
     * @returns Value at `DATA\Damage` on `record`.
     */
    GetDamage(record: RecordHandle): number;
    /**
     * Sets the value at `DATA\Damage` on `record` to `value`.
     */
    SetDamage(record: RecordHandle, value: number): void;
    /**
     * @returns Value at `DNAM` on `record`.
     */
    GetArmorRating(record: RecordHandle): number;
    /**
     * Sets the value at `DNAM` on `record` to `value`.
     */
    SetArmorRating(record: RecordHandle, value: number): void;
    /**
     * @returns Value at `[BODT|BOD2]\Armor Type` on `record`.
     */
    GetArmorType(record: RecordHandle): string;
    /**
     * Sets the value at `[BODT|BOD2]\Armor Type` on `record` to `armorType`.
     */
    SetArmorType(record: RecordHandle, armorType: string): void;
    /**
     * @returns State of flag Female at `ACBS\Flags` on `record`.
     */
    GetIsFemale(record: RecordHandle): boolean;
    /**
     * Sets flag Female at `ACBS\Flags` on `record` to `state`.
     */
    SetIsFemale(record: RecordHandle, state: boolean): void;
    /**
     * @returns State of flag Essential at `ACBS\Flags` on `record`.
     */
    GetIsEssential(record: RecordHandle): boolean;
    /**
     * Sets flag Essential at `ACBS\Flags` on `record` to `state`.
     */
    SetIsEssential(record: RecordHandle, state: boolean): void;
    /**
     * @returns State of flag Unique at `ACBS\Flags` on `record`.
     */
    GetIsUnique(record: RecordHandle): boolean;
    /**
     * Sets flag Unique at `ACBS\Flags` on `record` to `state`.
     */
    SetIsUnique(record: RecordHandle, state: boolean): void;

    /**
     * Masters functions
     * @see {@link https://z-edit.github.io#/docs?t=Development%2FAPIs%2Fxelib%2FMasters}
     */
    /**
     * Removes unnecessary masters from file `id`.
     */
    CleanMasters(id: FileHandle): void;
    /**
     * Orders the masters in file `id` based on the order in which they are loaded.
     */
    SortMasters(id: FileHandle): void;
    /**
     * Adds master `filename` to file `id` if missing.
     */
    AddMaster(id: FileHandle, filename: string): void;
    /**
     * Adds masters to file `id2` which are required when copying element `id` to it.
     * Set `asNew` to true when copying `id` as a new record.
     */
    AddRequiredMasters(
        id: ElementHandle,
        id2: FileHandle,
        /**
         * @default false
         */
        asNew?: boolean,
    ): void;
    /**
     * @returns Array of handles for the master files of file `id`.
     */
    GetMasters(id: FileHandle): FileHandle[];
    /**
     * @returns Array of the master filenames of the file `id`.
     */
    GetMasterNames(id: FileHandle): string[];
    /**
     * Adds all files loaded before file `id` as masters to it.
     */
    AddAllMasters(id: FileHandle): void;
    /**
     * @returns Array of the filenames of files loaded before file `id` that aren't already masters for it.
     */
    GetAvailableMasters(id: FileHandle): string[];

    /**
     * Group functions
     * @see {@link https://z-edit.github.io#/docs?t=Development%2FAPIs%2Fxelib%2FGroups}
     */
    /**
     * @returns true if group `signature` is present in file `id`.
     */
    HasGroup(id: FileHandle, signature: string): boolean;
    /**
     * Adds the group `signature` to file `id` if missing and returns a handle to it.
     */
    AddGroup(id: FileHandle, signature: string): Handle;
    /**
     * @returns Handle to the child group of id.
     * @returns 0 if id does not have a child group.
     */
    GetChildGroup(id: Handle): Zeroable<Handle>;

    /**
     * Serialization functions
     * @see {@link https://z-edit.github.io#/docs?t=Development%2FAPIs%2Fxelib%2FSerialization}
     */
    /**
     * @returns Element `id` as a JSON string.
     */
    ElementToJSON(id: ElementHandle): string;
    /**
     * @returns Element `id` as a JavaScript object.
     */
    ElementToObject(id: ElementHandle): object;
    /**
     * Creates elements by deserializing `json` in the context of `id` at `path`.
     */
    ElementFromJSON(id: Zeroable<Handle>, path: string, json: string): void;
    /**
     * Creates elements from `obj` in the context of `id` at `path`.
     */
    ElementFromObject(id: Zeroable<Handle>, path: string, obj: object): void;

    /**
     * Plugin Error functions
     */
    /**
     * Starts a background thread which checks for errors in `id`.
     */
    CheckForErrors(id: FileHandle): void;
    /**
     * @returns true if the error thread started by `CheckForErrors` is done.
     * @see CheckForErrors
     */
    GetErrorThreadDone(): boolean;
    /**
     * @returns Errors found by `CheckForErrors` as an array of error objects.
     * @see CheckForErrors
     */
    GetErrors(): Array<{
        group: number;
        handle: Handle;
        signature: string;
        form_id: number;
        path: string;
        data: string;
    }>;

    /**
     * Utils functions
     * @see {@link https://z-edit.github.io#/docs?t=Development%2FAPIs%2Fxelib%2FUtils}
     */
    /**
     * Converts `n` to a hexadecimal string and pads it with zeros until it has a length equal to `padding`.
     * @param n unsigned integer
     * @param padding integer
     */
    Hex(n: number, padding: number): string;
    /**
     * Passes `handle` to `callback`, executes it, and then releases `handle`.
     * Uses a try-finally to ensure the handle gets released
     * regardless of any exceptions that occur in `callback`.
     */
    WithHandle(handle: Handle, callback: (handle: Handle) => void): void;
    /**
     * Passes `handles` to `callback`, executes it, and then releases `handles`.
     * Uses a try-finally to ensure the handles get released
     * regardless of any exceptions that occur in `callback`.
     */
    WithHandles(handles: Handle[], callback: (handle: Handle[]) => void): void;
    /**
     * Creates an array in xelib at `xelib.HandleGroup`.
     * All handles retrieved from `xelib` functions will be appended to this array.
     * @see HandleGroup
     */
    CreateHandleGroup(): void;
    /**
     * @see CreateHandleGroup
     */
    HandleGroup?: Handle[];
    /**
     * Releases all handles in `xelib.HandleGroup`.
     * After calling this, handles retrieved from xelib
     * will no longer be appended to the `xelib.HandleGroup` array.
     * @see HandleGroup
     */
    FreeHandleGroup(): void;
    /**
     * Executes `callback`.
     * Any handles retrieved from `xelib` in `callback` will not be added to the active handle group.
     */
    OutsideHandleGroup(callback: () => void): void;
    /**
     * Executes `callback` in a handle group.
     * Any handles retrieved from `xelib` in `callback` will be automatically released
     * once it finishes executing.
     */
    WithHandleGroup(callback: () => void): void;
    /**
     * Extracts a signature from a string.
     * E.g. extracts `ARMO`, from `ArmorIronCuirass "Iron Armor" [ARMO:00012E49]`.
     */
    ExtractSignature(str: string): string;
    /**
     * Gets all records matching `search` found in `id`
     * and returns an object with properties corresponding to each record found.
     * The object's properties have keys produced by calling `keyFn` on the record
     * and values produced by calling `valueFn` on the record.
     * If `valueFn` is falsy, the record's handle is used as the value.
     */
    BuildReferenceMap<V = RecordHandle>(
        id: Handle,
        /**
         * @default ''
         */
        search?: string,
        /**
         * @default xelib.EditorID
         * @see EditorID
         */
        keyFn?: (rec: RecordHandle) => string,
        /**
         * @default null
         */
        valueFn?: (rec: RecordHandle) => V,
    ): { [k: string]: V };
    /**
     * @returns object constructed by mapping each value in the `paths` object
     * to an element resolved relative to `id`.
     */
    ResolveElements<P extends { [k: string]: string }>(
        id: Handle,
        paths: P,
    ): {
        [K in keyof P]: Zeroable<ElementHandle>;
    };
    /**
     * Raises an exception if any element fails to resolve.
     * @returns object constructed by mapping each value in the `paths` object
     * to an element resolved relative to `id`.
     */
    ResolveElementsEx<P extends { [k: string]: string }>(
        id: Handle,
        paths: P,
    ): {
        [K in keyof P]: ElementHandle;
    };
}
