// Type definitions for non-npm package flashpoint-launcher 10.1
// Project: Flashpoint Launcher https://github.com/FlashpointProject/launcher
// Definitions by: Colin Berry <https://github.com/colin969>
//                 Joel Puig Rubio <https://github.com/XXLuigiMario>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * Based off Microsoft VSCode's extension system (MIT Licensed) https://github.com/Microsoft/vscode
 * Module is created during runtime and injected. Please read the documentation below to understand how to use these types.
 * See https://github.com/FlashpointProject/launcher/blob/develop/docs/extensions.md for Extension documentation.
 * See https://flashpointproject.github.io/launcher_ApiDocs/ (or /docs/api in the repo) for API documentation.
 */

// The types match the ones used internally. Will make it easier to maintain.
// tslint:disable:interface-over-type-literal

// This gets changed manually during development in the project, rule would require changes when updating DT's definitions since resolution is different.
// tslint:disable:no-single-declare-module
// tslint:disable:no-declare-current-package

declare module 'flashpoint-launcher' {
    /** Version of the Flashpoint Launcher */
    const version: string;

    /** Data Version of the Flashpoint Launcher */
    const dataVersion: string | undefined;

    /** Path to own extension */
    const extensionPath: string;

    /** Config Data */
    const config: AppConfigData;

    /** Returns most up to date Preferences Data */
    function getPreferences(): AppPreferencesData;
    /**
     * Updates the Preferences data with a partial change.
     * @param data Partial data to apply
     * @param onError Callback for error handling
     * @returns Updated Preferences data
     */
    function overwritePreferenceData(
        data: DeepPartial<AppPreferencesData>,
        onError?: (error: string) => void,
    ): Promise<AppPreferencesData>;

    /** Unload own extension */
    function unload(): Promise<void>;

    /**
     * Get a URL for an extensions file
     * @param filePath Relative path to file from extension path
     */
    function getExtensionFileURL(filePath: string): string;

    /**
     * Unzips a file into a given directory (7zip)
     * @param filePath Path to archive
     * @param outDir Directory to output into
     * @param onProgress Function called whenever a new file is extracted
     */
    function unzipFile(filePath: string, outDir: string, opts: ZipExtractOptions): Promise<void>;

    /**
     * Gets an extension configuration value given its key
     */
    function getExtConfigValue(key: string): any;
    /**
     * Gets an extension configuration value given its key and a new value
     */
    function setExtConfigValue(key: string, value: any): Promise<void>;
    /**
     * Fires when an extension configuration value changes
     */
    const onExtConfigChange: Event<{key: string, value: any}>;

    /**
     * Log functions to properly pass messages to the Logs Page.
     */
    namespace log {
        const trace: (message: string) => void;
        const debug: (message: string) => void;
        const info: (message: string) => void;
        const warn: (message: string) => void;
        const error: (message: string) => void;
        const onLog: Event<ILogEntry>;
    }

    /** Collection of Command related API functions */
    namespace commands {
        /**
         * Register a command to be called by name later
         * @param command Name of the command
         * @param callback Function to run when called
         * @returns Disposable to register to context.subscriptions
         */
        function registerCommand(command: string, callback: (...args: any[]) => any): Disposable;
    }

    /** Collection of Game related API functions */
    namespace games {
        // Playlist
        /**
         * Finds a playlist given its ID
         * @param playlistId ID of the Playlist
         * @param join Whether to include Playlist Games in the result
         */
        function findPlaylist(playlistId: string, join?: boolean): Promise<Playlist | undefined>;
        /**
         * Finds a playlist given its name
         * @param playlistName Name of the Playlist
         * @param join Whether to include Playlist Games in the result
         */
        function findPlaylistByName(playlistName: string, join?: boolean): Promise<Playlist | undefined>;
        /** Find all Playlists in the database (Playlist Games not returned) */
        function findPlaylists(showExtreme: boolean): Promise<Playlist[]>;
        /**
         * Updates / Creates a Playlist
         * @param playlist Playlist data to save
         */
        function updatePlaylist(playlist: Playlist): Promise<Playlist>;
        /**
         * Removes a playlist
         * @param playlist Playlist ID to remove
         * @returns Playlist that was removed
         */
        function removePlaylist(playlistId: string): Promise<Playlist | undefined>;

        // Playlist Game
        /**
         * Finds a Playlist Game entry in a Playlist
         * @param playlistId Playlist to search
         * @param gameId Game to find
         */
        function findPlaylistGame(playlistId: string, gameId: string): Promise<PlaylistGame | undefined>;
        /**
         * Removes a Playlist Game entry from a Playlist
         * @param playlistId Playlist to search
         * @param gameId Game to remove
         */
        function removePlaylistGame(playlistId: string, gameId: string): Promise<PlaylistGame | undefined>;
        /**
         * Update / Create a Playlist Game entry
         * @param playlistGame Playlist Game entry to save
         */
        function updatePlaylistGame(playlistGame: PlaylistGame): Promise<PlaylistGame>;
        /**
         * Update / Create many Playlist Game entries in a transaction
         * @param playlistGames Playlist Game entries to save
         */
        function updatePlaylistGames(playlistGames: PlaylistGame[]): Promise<void>;
        /**
         * Adds a Game to a Playlist
         * @param playlistId Playlist to add the Game to
         * @param gameId ID of the Game to add
         */
        function addPlaylistGame(playlistId: string, gameId: string): Promise<void>;

        // Games
        /** Returns the total number of games in the database */
        function countGames(): Promise<number>;
        /**
         * Finds a Game given its ID
         * @param id ID of the Game
         */
        function findGame(id: string): Promise<Game | undefined>;
        /**
         * Finds a selection of Games given filter options
         * @param opts Filter options
         * @param shallow Whether to return ViewGame or Game objects
         */
        function findGames<T extends boolean>(opts: FindGamesOpts, shallow: T): Promise<Array<ResponseGameRange<T>>>;
        /**
         * Finds all Games using a Tag
         * @param tag Tag to filter for
         */
        function findGamesWithTag(tag: Tag): Promise<Game[]>;
        /**
         * Updates / Creates a Game
         * @param game Game data to save
         */
        function updateGame(game: Game): Promise<Game>;
        /**
         * Updates / Creates many Games in a transaction
         * @param games Game data to save
         */
        function updateGames(games: Game[]): Promise<void>;
        /**
         * Removes a Game and all its AddApps
         * @param gameId ID of Game to remove
         */
        function removeGameAndAddApps(gameId: string): Promise<Game | undefined>;

        // Misc
        /**
         * Returns all unique Platform strings in a library
         * @param library Library to search
         */
        function findPlatforms(library: string): Promise<string[]>;
        /**
         * Parses a Playlist JSON file and returns an object you can save later.
         * @param jsonData Raw JSON data of the Playlist file
         * @param library Library to use instead of Playlist defined library
         */
        function createPlaylistFromJson(jsonData: any, library?: string): Playlist;
        /**
         * Returns whether a game is extreme based on its tags.
         * @param game Game to check
         */
        function isGameExtreme(game: Game): boolean;

        // Events
        const onWillLaunchGame: Event<GameLaunchInfo>;
        const onWillLaunchAddApp: Event<AdditionalApp>;
        const onWillLaunchCurationGame: Event<GameLaunchInfo>;
        const onWillLaunchCurationAddApp: Event<AdditionalApp>;
        const onWillUninstallGameData: Event<GameData>;
        const onDidLaunchGame: Event<Game>;
        const onDidLaunchAddApp: Event<AdditionalApp>;
        const onDidLaunchCurationGame: Event<Game>;
        const onDidLaunchCurationAddApp: Event<AdditionalApp>;
        const onDidInstallGameData: Event<GameData>;
        const onDidUninstallGameData: Event<GameData>;

        const onDidUpdateGame: Event<{ oldGame: Game; newGame: Game }>;
        const onDidRemoveGame: Event<Game>;

        const onDidUpdatePlaylist: Event<{ oldPlaylist: Playlist; newPlaylist: Playlist }>;
        const onDidUpdatePlaylistGame: Event<{ oldGame: PlaylistGame; newGame: PlaylistGame }>;
        const onDidRemovePlaylistGame: Event<PlaylistGame>;

        const onWillImportGame: Event<CurationImportState>;
    }

    /** Collection of Game Data related API functions */
    namespace gameData {
        function findOne(id: number): Promise<GameData | undefined>;
        function findGameData(gameId: string): Promise<GameData[]>;
        function findSourceDataForHashes(hashes: string[]): Promise<SourceData[]>;
        function save(gameData: GameData): Promise<GameData>;
        function importGameData(gameId: string, filePath: string): Promise<GameData>;
        function downloadGameData(gameDataId: number): Promise<void>;
        const onDidImportGameData: Event<GameData>;
    }

    namespace sources {
        function findOne(sourceId: number): Promise<Source | undefined>;
    }

    /** Collection of Tag related API functions */
    namespace tags {
        // Tags
        /**
         * Finds a tag given it's ID
         * @param tagId ID of the Tag
         */
        function getTagById(tagId: number): Promise<Tag | undefined>;
        /**
         * Finds a tag given an alias name
         * @param name Name of the Tag (any matching alias)
         */
        function findTag(name: string): Promise<Tag | undefined>;
        /**
         * Finds a list of tags that begins with a name (if given)
         * @param name Partial name that a tag starts with
         */
        function findTags(name?: string): Promise<Tag[]>;
        /**
         * Creates a new Tag
         * @param name Name of the primary alias
         * @param categoryName Name of the category to use, Default if none given
         * @param aliases List of extra aliases to register
         */
        function createTag(name: string, categoryName?: string, aliases?: string[]): Promise<Tag | undefined>;
        /**
         * Updates a Tag
         * @param tag Tag data to save
         */
        function saveTag(tag: Tag): Promise<Tag>;
        /**
         * Removes a Tag (from all Games)
         * @param tagId ID of Tag to remove
         * @param skipWarn If true, warn user before deleting tag from games.
         */
        function deleteTag(tagId: number, skipWarn?: boolean): Promise<boolean>;
        /**
         * Finds all the Tags a Game is tagged with
         * @param gameId ID of the Game to find
         */
        function findGameTags(gameId: string): Promise<Tag[] | undefined>;

        // Tag Categories
        /**
         * Find a Tag Category by it's ID. (Useful when a Tag doesn't populate it)
         * @param categoryId ID of the Tag Category
         */
        function getTagCategoryById(categoryId: number): Promise<TagCategory | undefined>;
        /**
         * Find all Tag Categories
         */
        function findTagCategories(): Promise<TagCategory[]>;
        /**
         * Create a new Tag Category
         * @param name Name of the Tag Category
         * @param color Color to give the Tag Category
         */
        function createTagCategory(name: string, color: string): Promise<TagCategory | undefined>;
        /**
         * Update a Tag Category
         * @param tagCategory Tag Category data to save
         */
        function saveTagCategory(tagCategory: TagCategory): Promise<TagCategory>;
        /**
         * Removes a Tag Category. All owned Tags are moved to the first available Tag Category.
         * @param tagCategoryId ID of the Tag Category to remove
         */
        function deleteTagCategory(tagCategoryId: number): Promise<boolean>;

        // Tag Suggestions
        /**
         * Finds a list of Tag Suggestions given a string they start with
         * @param name Partial name that a tag starts with
         */
        function findTagSuggestions(name: string): Promise<TagSuggestion[]>;

        // Misc
        /**
         * Merges 2 tags into a single tag.
         * @param mergeData Required data to merge.
         */
        function mergeTags(mergeData: MergeTagData): Promise<Tag | undefined>;
    }

    /** Collection of Status related API functions */
    namespace status {
        /**
         * Update any status in the Status State
         * @param key Element to update
         * @param val Value to update element with
         */
        function setStatus<T extends keyof StatusState>(key: T, val: StatusState[T]): void;
        /**
         * Gets the status in any Status State
         * @param key Element to view
         */
        function getStatus<T extends keyof StatusState>(key: T): StatusState[T];
    }

    /** Collection of Service related API function */
    namespace services {
        /**
         * Runs a managed service given info, will die when the launcher exits.
         * @param name Name of the service
         * @param info Service info to run.
         * @param basePath Override for directory to start in (info is relative to this), Extension path if none given
         * @returns A managed process. Can be passed to removeService.
         */
        function runService(name: string, info: ProcessInfo, opts: ProcessOpts, basePath?: string): ManagedChildProcess;
        /**
         * Creates a managed process given info, will die when disposed. (Does not start it)
         * @param name Name of the process
         * @param info Process info to run.
         * @param basePath Override for directory to start in (info is relative to this), Extension path if none given
         * @returns A managed process.
         */
        function createProcess(name: string, info: ProcessInfo, opts: ProcessOpts, basePath?: string): DisposableChildProcess;
        /**
         * Kills and removes a service process started by runService
         * @param process Service process to remove
         */
        function removeService(process: ManagedChildProcess): Promise<void>;
        /**
         * Returns the service info of all running services
         */
        function getServices(): ManagedChildProcess[];

        // Events
        const onServiceNew: Event<ManagedChildProcess>;
        const onServiceRemove: Event<ManagedChildProcess>;
        const onServiceChange: Event<ServiceChange>;
    }

    /** Front facing dialogs */
    namespace dialogs {
        /**
         * Opens a message box on the client. Buttons can be provided in options.
         * @param options Message box options
         * @returns Button index pressed (0 or cancelId if exited)
         */
        function showMessageBox(options: ShowMessageBoxOptions): Promise<number>;
        /**
         * Opens a save dialog on the client. They can select a file to save to.
         * @param options Save dialog options
         * @returns Path to file chosen, if any
         */
        function showSaveDialog(options: ShowSaveDialogOptions): Promise<string | undefined>;
        /**
         * Opens an open dialog on the client. They can select a file for you to open.
         * @param options Open dialog options
         * @returns Path to file(s) chosen, if any
         */
        function showOpenDialog(options: ShowOpenDialogOptions): Promise<string[] | undefined>;
    }

    // Events
    /** Called when the backend has fully initialized. Extension activation is earlier. */
    const onDidInit: Event<void>;

    /** Called when a client connects to the backend */
    const onDidConnect: Event<void>;

    /** See Electron docs for explanations. https://www.electronjs.org/docs/api/dialog */
    type ShowMessageBoxOptions = {
        title?: string | undefined;
        message: string;
        buttons?: string[] | undefined;
        cancelId?: number | undefined;
    };

    /** See Electron docs for explanations. http://electronjs.org/docs/api/structures/file-filter */
    interface FileFilter {
        extensions: string[];
        name: string;
    }

    /** See Electron docs for explanations. https://www.electronjs.org/docs/api/dialog */
    type ShowSaveDialogOptions = {
        title?: string | undefined;
        defaultPath?: string | undefined;
        buttonLabel?: string | undefined;
        filters?: FileFilter[] | undefined;
        message?: string | undefined;
        nameFieldLabel?: string | undefined;
    };

    /** See Electron docs for explanations. https://www.electronjs.org/docs/api/dialog */
    type ShowOpenDialogOptions = {
        title?: string | undefined;
        defaultPath?: string | undefined;
        buttonLabel?: string | undefined;
        filters: FileFilter[];
        properties?: Array<
            | 'openFile'
            | 'openDirectory'
            | 'multiSelections'
            | 'showHiddenFiles'
            | 'createDirectory'
            | 'promptToCreate'
            | 'noResolveAliases'
            | 'treatPackageAsDirectory'
            | 'dontAddToRecent'
        > | undefined;
        message?: string | undefined;
    };

    type Game = {
        /** ID of the game (unique identifier) */
        id: string;
        /** ID of the game which owns this game */
        parentGameId?: string | undefined;
        /** Full title of the game */
        title: string;
        /** Any alternate titles to match against search */
        alternateTitles: string;
        /** Game series the game belongs to (empty string if none) */
        series: string;
        /** Name of the developer(s) of the game (developer names are separated by ',') */
        developer: string;
        /** Name of the publisher of the game */
        publisher: string;
        /** Date-time of when the game was added to collection */
        dateAdded: string;
        /** Date-time of when the game was added to collection */
        dateModified: string;
        /** Platform the game runs on (Flash, HTML5, Shockwave etc.) */
        platform: string;
        /** If the game is "broken" or not */
        broken: boolean;
        /** Game is not suitable for children */
        extreme: boolean;
        /** If the game is single player or multiplayer, and if the multiplayer is cooperative or not */
        playMode: string;
        /** How playable the game is */
        status: string;
        /** Information that could be useful for the player (of varying importance) */
        notes: string;
        /** List of tags attached to the game */
        tags: Tag[];
        /** List of tags attached to the game in a string format */
        tagsStr: string;
        /** Source if the game files, either full URL or the name of the website */
        source: string;
        /** Path to the application that runs the game */
        applicationPath: string;
        /** Command line argument(s) passed to the application to launch the game */
        launchCommand: string;
        /** Date of when the game was released */
        releaseDate: string;
        /** Version of the game */
        version: string;
        /** Original description of the game (probably given by the game's creator or publisher) */
        originalDescription: string;
        /** The language(s) the game is in */
        language: string;
        /** Library this game belongs to */
        library: string;
        /** All attached Additional Apps of a game */
        addApps: AdditionalApp[];
        /** Unused */
        orderTitle: string;
        /** If the game is a placeholder (and can therefore not be saved) */
        placeholder: boolean;
        /** ID of the active data */
        activeDataId?: number | undefined;
        /** Whether the data is present on disk */
        activeDataOnDisk: boolean;
        data?: GameData[] | undefined;
        updateTagsStr: () => void;
    };

    type GameData = {
        id: number;
        /** ID of the related game */
        game?: Game | undefined;
        gameId: string;
        /** Title of this data pack */
        title: string;
        /** Date this data pack was added on */
        dateAdded: Date;
        /** Expected SHA256 hash of this data pack */
        sha256: string;
        /** Expected CRC32 of this data pack */
        crc32: number;
        /** Is the data pack present on disk */
        presentOnDisk: boolean;
        /** Path this data pack should reside at, if present on disk */
        path?: string | undefined;
        /** Size of this data pack */
        size: number;
        /** Parameters passed to the mounter */
        parameters?: string;
    };

    type SourceData = {
        id: number;
        /** Source providing the download */
        source?: Source | undefined;
        sourceId: number;
        /** SHA256 hash of this download */
        sha256: string;
        urlPath: string;
    };

    type Source = {
        id: number;
        /** Name of the Source */
        name: string;
        /** Base URL of the Source */
        sourceFileUrl: string;
        /** Base URL of the Source */
        baseUrl: string;
        /** File Count provided as SourceData */
        count: number;
        /** When this Source was added */
        dateAdded: Date;
        /** Last time this Source was updated */
        lastUpdated: Date;
        /** Any data provided by this Source */
        data?: SourceData[] | undefined;
    };

    type AdditionalApp = {
        /** ID of the additional application (unique identifier) */
        id: string;
        /** Path to the application that runs the additional application */
        applicationPath: string;
        /**
         * If the additional application should run before the game.
         * (If true, this will always run when the game is launched)
         * (If false, this will only run when specifically launched)
         */
        autoRunBefore: boolean;
        /** Command line argument(s) passed to the application to launch the game */
        launchCommand: string;
        /** Name of the additional application */
        name: string;
        /** Wait for this to exit before the Game will launch (if starting before launch) */
        waitForExit: boolean;
        /** Parent of this add app */
        parentGame: Game;
    };

    type Tag = {
        /** ID of the tag (unique identifier) */
        id?: number | undefined;
        /** Date when this tag was last modified */
        dateModified: string;
        /** ID of Primary Alias */
        primaryAliasId: number;
        /** Primary Alias */
        primaryAlias: TagAlias;
        /** Aliases / Names of the tag */
        aliases: TagAlias[];
        /** Category this tag is a part of (either ID or TagCategory will exist) */
        categoryId?: number | undefined;
        /** Category this tag is a part of (either ID or TagCategory will exist) */
        category?: TagCategory | undefined;
        /** Description of the tag */
        description?: string | undefined;
        /** Games which are marked with this Tag */
        gamesUsing?: Game[] | undefined;
        /** Number of games this tag belongs to */
        count?: number | undefined;
    };

    type TagAlias = {
        /** ID of the tag alias (unique identifier) */
        id: number;
        /** Tag this alias belongs to (either ID or Tag will exist) */
        tagId?: number | undefined;
        /** Tag this alias belongs to (either ID or Tag will exist) */
        tag?: Tag | undefined;
        /** The name this alias represents */
        name: string;
    };

    type TagSuggestion = {
        /** Alias found, only present if not the same as the primary alias */
        alias?: string | undefined;
        /** Primary alias of the tag suggestion */
        primaryAlias: string;
        /** Tag suggested */
        tag: Tag;
    };

    type TagCategory = {
        /** ID of the tag category (unique identifier) */
        id: number;
        /** Category Name */
        name: string;
        /** Category Color */
        color: string;
        /** Description of the Tag Category */
        description?: string | undefined;
        /** Tags using this Tag Category */
        tags: Tag[];
    };

    type Playlist = {
        /** ID of the playlist (unique identifier) */
        id: string;
        /** Games in this playlist */
        games: PlaylistGame[];
        /** Title of the playlist. */
        title: string;
        /** Description of the playlist. */
        description: string;
        /** Author of the playlist. */
        author: string;
        /** Icon of the playlist (Base64 encoded image). */
        icon: string;
        /** Route of the library this playlist is for. */
        library: string;
        /** Attribute for if playlist contains games not suitable for children */
        extreme: boolean;
    };

    type PlaylistGame = {
        /** Internal ID of the playlist game entry */
        id?: string | undefined;
        /** Playlist which owns this game (either ID or Playlist will exist) */
        playlistId?: string | undefined;
        /** Playlist which owns this game (either ID or Playlist will exist) */
        playlist?: Playlist | undefined;
        /** Order priority of the game in the playlist */
        order: number;
        /** Notes for the game inside the playlist specifically */
        notes: string;
        /** Game this represents (either ID or Game will exist) */
        gameId?: string | undefined;
        /** Game this represents (either ID or Game will exist) */
        game?: Game | undefined;
    };

    /**
     * Data passed to merge tags together
     * @param toMerge Tag to merge from
     * @param mergeInto Tag to merge into
     * @param makeAlias Whether to move all aliases from toMerge into mergeInto as well
     */
    type MergeTagData = {
        toMerge: string;
        mergeInto: string;
        makeAlias: boolean;
    };

    type FindGamesOpts = {
        /** Ranges of games to fetch (all games are fetched if undefined). */
        ranges?: RequestGameRange[] | undefined;
        filter?: FilterGameOpts | undefined;
        orderBy?: GameOrderBy | undefined;
        direction?: GameOrderDirection | undefined;
        getTotal?: boolean | undefined;
    };

    /** Game field to order the results by */
    type GameOrderBy = keyof Game;
    /** Direction to return the results in (ascending or descending) */
    type GameOrderDirection = 'ASC' | 'DESC';

    type RequestGameRange = {
        /** Index of the first game. */
        start: number;
        /** Number of games to request (if undefined, all games until the end of the query will be included). */
        length: number | undefined;
        /**
         * Tuple of the last game of the previous page.
         * If this is set then "start" must be the index of the game after this (since this will be used instead of
         * "start" when selecting the games).
         */
        index?: PageTuple | undefined;
    };

    /** Tuple of values from the last game of a previous page (look up "keyset pagination"). */
    type PageTuple = {
        /** Primary order value. */
        orderVal: any;
        /** Title of the game (secondary order value). */
        title: string;
        /** ID of the game (unique value). */
        id: string;
    };

    /** Options for ordering games. */
    type FilterGameOpts = {
        /** Search query to filter by */
        searchQuery?: ParsedSearch | undefined;
        /** Playlist to limit the results to (no playlist limit will be applied if undefined). */
        playlistId?: string | undefined;
    };

    /** Object representation of a parsed search query. */
    type ParsedSearch = {
        /** Generic filter to blacklist some predetermined field(s). */
        genericBlacklist: string[];
        /** Generic filter to whitelist some predetermined field(s). */
        genericWhitelist: string[];
        /** Whitelists to apply */
        blacklist: FieldFilter[];
        /** Blacklists to apply */
        whitelist: FieldFilter[];
    };

    /** A search filter that applies to a specific field. */
    type FieldFilter = {
        /** The field the filter applies to. */
        field: string;
        /** Value to search for in the field. */
        value: any;
    };

    type ResponseGameRange<T extends boolean> = {
        /** Index of the first game. */
        start: number;
        /** Number of games requested. */
        length?: number | undefined;
        /** Games found within the range. */
        games: T extends true ? ViewGame[] : Game[];
    };

    /** Shortend version of {@link Game} returned in searches, makes for better performance. */
    type ViewGame = {
        id: string;
        title: string;
        platform: string;
        tagsStr: string;
        developer: string;
        publisher: string;
    };

    /** Data contained in the Config file */
    type AppConfigData = {
        /** Path to the FlashPoint root folder (relative or absolute) */
        flashpointPath: string;
        /** If the custom title bar should be used in MainWindow */
        useCustomTitlebar: boolean;
        /**
         * If the Server should be started, and closed, together with this application.
         * The "server" is defined in "services.json".
         */
        startServer: boolean;
        // Name of the Server process to run
        server: string;
        /** Lower limit of the range of ports that the back should listen on. */
        backPortMin: number;
        /** Upper limit of the range of ports that the back should listen on. */
        backPortMax: number;
        /** Lower limit of the range of ports that the back image server should listen on. */
        imagesPortMin: number;
        /** Upper limit of the range of ports that the back image server should listen on. */
        imagesPortMax: number;
        /** Base URL of the server to do pastes of the Logs to. */
        logsBaseUrl: string;
        /** Whether to notify that launcher updates are available */
        updatesEnabled: boolean;
    };

    type TagFilterGroup = {
        name: string;
        description: string;
        /** Enabled */
        enabled: boolean;
        /** Tags to filter */
        tags: TagFilter;
        /** Tag categories to filter */
        categories: TagFilter;
        /** Filters to auto apply when this is applied */
        childFilters: string[];
        /** Are these tags considered Extreme? */
        extreme: boolean;
    };

    type TagFilter = string[];

    /**
     * Contains state of all non-config settings the user can change in the application.
     * This is the data contained in the Preferences file.
     */
    type AppPreferencesData = {
        [key: string]: any;
        /** Path to the image folder (relative to the flashpoint path) */
        imageFolderPath: string;
        /** Path to the logo folder (relative to the flashpoint path) */
        logoFolderPath: string;
        /** Path to the playlist folder (relative to the flashpoint path) */
        playlistFolderPath: string;
        /** Path to the json folder (relative to the flashpoint path) */
        jsonFolderPath: string;
        /** Path to the htdocs folder (relative to the flashpoint path) */
        htdocsFolderPath: string;
        /** Path to the platform folder (relative to the flashpoint path) */
        platformFolderPath: string;
        /** Path to the theme folder (relative to the flashpoint path) */
        themeFolderPath: string;
        /** Path to the logo sets folder (relative to the flashpoint path) */
        logoSetsFolderPath: string;
        /** Path of the meta edits folder (relative to the flashpoint path) */
        metaEditsFolderPath: string;
        /** Path to load User extensions from (relative to the flashpoint path) */
        extensionsPath: string;
        /** Path to store Game Data packs */
        dataPacksFolderPath: string;
        /** Scale of the games at the BrowsePage. */
        browsePageGameScale: number;
        /** If "Extreme" games should be shown at the BrowsePage. */
        browsePageShowExtreme: boolean;
        /** If editing games, additional applications and playlists should be allowed. */
        enableEditing: boolean;
        /** Default language used for fallback */
        fallbackLanguage: string;
        /** Current language */
        currentLanguage: string;
        /** Layout of game collection at BrowsePage. */
        browsePageLayout: BrowsePageLayout;
        /** If the left sidebar at the BrowsePage should be visible. */
        browsePageShowLeftSidebar: boolean;
        /** If the right sidebar at the BrowsePage should be visible. */
        browsePageShowRightSidebar: boolean;
        /** Width of the left sidebar. (Browse Page) */
        browsePageLeftSidebarWidth: number;
        /** Width of the right sidebar. (Browse Page) */
        browsePageRightSidebarWidth: number;
        /** Width of the left sidebar. (Curate Page) */
        curatePageLeftSidebarWidth: number;
        /** If the "Developer" tab should be visible in the header. */
        showDeveloperTab: boolean;
        /** Filename of the current theme. */
        currentTheme: string | undefined;
        /** Filename of the current logo set */
        currentLogoSet: string | undefined;
        /** The "route" of the last selected library (empty string selects the default). */
        lastSelectedLibrary: string;
        /** What property to order the games by. */
        gamesOrderBy: GameOrderBy;
        /** What order the games should appear in. */
        gamesOrder: GameOrderDirection;
        /** Position and size of the main window. */
        mainWindow: AppPreferencesDataMainWindow;
        /** Default Library for new games etc. */
        defaultLibrary: string;
        /** Save curations after importing */
        saveImportedCurations: boolean;
        /** Assign the same UUID to imported games as in the curation archive */
        keepArchiveKey: boolean;
        /** Whether to symlink or copy curation content when running (Symlink required for MAD4FP) */
        symlinkCurationContent: boolean;
        /** Download missing thumbnails/screenshots from a remote server. */
        onDemandImages: boolean;
        /** Base URL of the server to download missing thumbnails/screenshots from. */
        onDemandBaseUrl: string;
        /** Proxy server to use during Browser Mode */
        browserModeProxy: string;
        /** Sources to show/hide in the log page. */
        showLogSource: {
          [key: string]: boolean;
        }
        /** Levels to show/hide in the log page. */
        showLogLevel: {
          [key in LogLevel]: boolean;
        }
        /** Libraries that should be excluded from random picks. */
        excludedRandomLibraries: string[];
        /** Application path overrides to check during app launches */
        appPathOverrides: AppPathOverride[];
        /** Tag filter groups */
        tagFilters: TagFilterGroup[];
        /** Use Tag Filters in the Curate suggestions */
        tagFiltersInCurate: boolean;
        /** Array of native locked platforms */
        nativePlatforms: string[];
        /** If games flagged as "extreme" should be hidden (mainly for parental control) */
        disableExtremeGames: boolean;
        /** If games flagged as "broken" should be hidden */
        showBrokenGames: boolean;
    };

    type AppPathOverride = {
        path: string;
        override: string;
        enabled: boolean;
    };

    type AppPreferencesDataMainWindow = {
        x?: number | undefined;
        y?: number | undefined;
        width?: number | undefined;
        height?: number | undefined;
        maximized: boolean;
    };
    type ProcessInfo = {
        /** Path of the file (relative to the Flashpoint root) */
        path: string;
        /** Name of the file to execute */
        filename: string;
        /** Arguments to pass to the process */
        arguments: string[];
    };

    type CurationImportState = {
        /** Game being imported */
        game: Game;
        /** Files / Folders being copied, and to where */
        contentToMove: string[][];
        /** Path of the curation */
        curationPath: string;
    };

    type StatusState = {
        devConsole: string;
    };

    class DisposableChildProcess extends ManagedChildProcess implements Disposable {
        toDispose: Disposable[];
        isDisposed: boolean;
        onDispose?: () => void | undefined;
    }

    type ProcessOpts = {
        detached?: boolean | undefined;
        autoRestart?: boolean | undefined;
        shell?: boolean | undefined;
    };

    type ServiceChange = {
        process: ManagedChildProcess;
        oldState: ProcessState;
        newState: ProcessState;
    };

    interface ManagedChildProcess {
        /** Fires whenever the status of a process changes. */
        on(event: 'change', listener: (newState: ProcessState) => void): this;
        /** Fires whenever the process exits */
        on(event: 'exit', listener: (code: number | null, signal: string | null) => void): this;
        emit(event: 'change', newState: ProcessState): boolean;
        emit(event: 'exit', code: number | null, signal: string | null): boolean;
    }

    class ManagedChildProcess {
        /** ID of the process */
        id: string;
        /** Info this process was created with */
        info: ProcessInfo;
        /** Display name of the service. */
        readonly name: string;

        constructor(id: string, name: string, cwd: string, opts: ProcessOpts, info: ProcessInfo);

        /** Get the process ID (or -1 if the process is not running). */
        getPid(): number;

        /** Get the state of the process. */
        getState(): ProcessState;

        /** Get the time timestamp of when the process was started. */
        getStartTime(): number;

        /** Spawn process and keep track on it. */
        spawn(auto?: boolean): void;

        /** Politely ask the child process to exit (if it is running). */
        kill(): void;

        /** Restart the managed child process (by killing the current, and spawning a new). */
        restart(): void;
    }

    /** State of a managed process. */
    enum ProcessState {
        /** The process is not running. */
        STOPPED = 0,
        /** The process is running. */
        RUNNING = 1,
        /** The process is being killed (it has been requested to terminate, but it hasn't been terminated yet). */
        KILLING = 2,
    }

    /** Info type passed to onWillLaunch events */
    type GameLaunchInfo = {
        game: Game;
        activeData?: GameData | undefined;
        launchInfo: LaunchInfo;
    };

    type LaunchInfo = {
        gamePath: string;
        gameArgs: string | string[];
        useWine: boolean;
        env: ProcessEnv;
    };

    /** Options expected for 'browser' mode application return */
    type BrowserApplicationOpts = {
        url: string;
        proxy?: string | undefined;
    };

    type ZipExtractOptions = {
        onData?: ((data: ZipData) => void) | undefined;
        onProgress?: ((progress: ZipProgress) => void) | undefined;
    };

    interface ZipData {
        file: string;
        status: string;
        attributes?: string | undefined;
        size?: number | undefined;
        sizeCompressed?: number | undefined;
        hash?: string | undefined;
    }

    interface ZipProgress {
        percent: number;
        fileCount: number;
        file: string;
    }

    interface ProcessEnv {
        [key: string]: string | undefined;
    }

    /** Modes for displaying the game collection at the BrowsePage */
    enum BrowsePageLayout {
        /** Games are in a vertical list, one game per row */
        list = 0,
        /** Games are in a table-like grid, each cell is a game */
        grid = 1,
    }

    /** Severity level of a Log */
    enum LogLevel {
        TRACE = 0,
        DEBUG = 1,
        INFO = 2,
        WARN = 3,
        ERROR = 4,
        SILENT = 5,
    }

    /** A self-nesting type that allows one time disposable with an optional callback */
    type Disposable = {
        /** Children to dispose of in the future. Add with {@link registerDisposable} to maintain safety. */
        toDispose: Disposable[];
        /** Whether this is already disposed */
        isDisposed: boolean;
        /** Callback to use when disposed */
        onDispose?: (() => void) | undefined;
    };

    /** Dispose of a disposable and all its children */
    function dispose(disposable: Disposable): void;
    /** Dispose of all a disposable;s children but not itself */
    function clearDisposable(disposable: Disposable): void;
    /**
     * Register a disposable to its parent. They must not be the same.
     * @param parent Parent to register to
     * @param child Child to register
     */
    function registerDisposable(parent: Disposable, child: Disposable): void;
    /**
     * Creates Disposable data to fill a newly created Disposable type object
     * @param callback Callback to run when disposed
     */
    function newDisposable(callback?: () => void): Disposable;

    type ExtensionContext = {
        /** Put all extension disposables on here with registerDisposable */
        subscriptions: Disposable;
    };

    interface Event<T> {
        /**
         * A function that represents an event to which you subscribe by calling it with
         * a listener function as argument.
         *
         * @param listener The listener function will be called when the event happens.
         * @param thisArgs The `this` argument which will be used when calling the event listener. (rarely used)
         * @param disposables An array to which a disposable will be added.
         * @return A disposable which unsubscribes the event listener.
         */
        (listener: (e: T) => any, thisArgs?: any, disposables?: Disposable): Disposable;
    }

    /** Replacement of "object" type. Note: I'm not sure how effective it is though //obelisk */
    type ObjectLike = Record<string, unknown> | Record<number, unknown>;

    /** Utility type. Recursively set all properties as optional. */
    type DeepPartial<T> = {
        [K in keyof T]?: T[K] extends ObjectLike ? DeepPartial<T[K]> : T[K];
    };

    /** A log entry _before_ it is added to the main log */
    type ILogPreEntry = {
        /** Name of the source of the log entry (name of what added the log entry) */
        source: string;
        /** Content of the log entry */
        content: string;
    };

    /** A log entry from the main log */
    type ILogEntry = ILogPreEntry & {
        /** Timestamp of when the entry was added to the main's log */
        timestamp: number;
        /** Level of the log, 0-5, Trace, Info, Warn, Error, Fatal, Silent */
        logLevel: number;
    };
}
