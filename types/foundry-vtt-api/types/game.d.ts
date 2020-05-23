// @TODO: Add types

declare let socket: any, canvas: any, keyboard: any, game: Game, ui: any;

declare const vtt: string;

/**
 * The core Game instance which encapsulates the data, settings, and states relevant for managing the game experience.
 * The singleton instance of the Game class is available as the global variable ``game``.
 *
 * @param worldData    An object of all the World data vended by the server when the client first connects
 * @param userId    The ID of the currently active user, retrieved from their session cookie
 * @param socket    The open web-socket which should be used to transact game-state data
 */
declare class Game {
    /** The object of world data passed from the server */
    data: any;

    /** Localization support */
    i18n: Localization;

    /** The Keyboard Manager */
    keyboard: KeyboardManager;

    /** A mapping of installed modules */
    modules: Map<any, any>;

    /** The user role permissions setting */
    permissions: any;

    /** The client session id which is currently active */
    sessionId: string;

    /** Client settings which are used to configure application behavior */
    settings: ClientSettings;

    /** A reference to the open Socket.io connection */
    socket: WebSocket;

    /** The id of the active game user */
    userId: string;

    /** A singleton instance of the Audio Helper class */
    audio: AudioHelper;

    /** A singleton instance of the Video Helper class */
    video: VideoHelper;

    /** Whether the Game is running in debug mode */
    debug: boolean;

    /**
     * A flag for whether texture assets for the game canvas are currently loading
     */
    loading: boolean;

    /** A flag for whether the Game has successfully reached the "ready" hook */
    ready: boolean;

    /* -------------------------------------------- */
    /*  Entities
    /* -------------------------------------------- */

    users: Users;
    messages: Messages;
    scenes: Scenes;
    actors: Actors;
    items: Items;
    journal: Journal;
    macros: Macros;
    playlists: Playlists;
    combats: CombatEncounters;
    tables: RollTables;
    folders: Folders;
    packs: Collection<any>;

    constructor(worldData: object, userId: string, socket: SocketIO.Socket);

    /**
     * Fetch World data and return a Game instance
     * @return {Promise}  A Promise which resolves to the created Game instance
     */
    static create(): Promise<Game>;

    /**
     * Request World data from server and return it
     */
    static getWorldData(socket: SocketIO.Socket): Promise<any>;

    /**
     * Request setup data from server and return it
     */
    static getSetupData(socket: SocketIO.Socket): Promise<any>;

    /**
     * Initialize the Game for the current window location
     */
    initialize(): Promise<void>;

    /**
     * Fully set up the game state, initializing Entities, UI applications, and the Canvas
     */
    setupGame(): Promise<void>;

    /**
     * Initialize game state data by creating Collections for all Entity types
     */
    initializeEntities(): void;

    /**
     * Initialization actions for compendium packs
     */
    initializePacks(config: any): Promise<void>;

    /**
     * Initialize the WebRTC implementation
     */
    initializeRTC(): void;

    /**
     * Initialize core UI elements
     */
    initializeUI(): void;

    /**
     * Initialize the game Canvas
     */
    initializeCanvas(): Promise<void>;

    /**
     * Initialize Keyboard and Mouse controls
     */
    initializeKeyboard(): void;

    /**
     * Register core game settings
     */
    registerSettings(): void;

    /**
     * The currently connected User
     */
    get user(): User;

    /**
     * Metadata regarding the current game World
     */
    get world(): any;

    /**
     * Metadata regarding the game System which powers this World
     */
    get system(): any;

    /**
     * A convenience accessor for the currently active Combat encounter
     */
    get combat(): Combat;

    /**
     * A state variable which tracks whether or not the game session is currently paused
     */
    get paused(): boolean;

    /**
     * A convenient reference to the currently active canvas tool
     */
    get activeTool(): string;

    /**
     * Toggle the pause state of the game
     * Trigger the `pauseGame` Hook when the paused state changes
     * @param pause    The new pause state
     * @param push    Push the pause state change to other connected clients?
     */
    togglePause(pause: boolean, push?: boolean): void;

    static getCookies(): object;

    static clearCookies(): boolean;

    /**
     * Open socket listeners which transact game state data
     */
    openSockets(): void;

    /**
     * General game-state socket listeners and event handlers
     */
    static socketListeners(socket: SocketIO.Socket): void;

    /**
     * Activate Event Listeners which apply to every Game View
     */
    activateListeners(): void;
}
