// Type definitions for non-npm package OpenRCT2 0.3
// Project: https://openrct2.io/
// Definitions by: OpenRCT2 <https://github.com/OpenRCT2>
//                 Ted John <https://github.com/IntelOrca>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export type PluginType = "local" | "remote";

declare global {
    /**
     * Global context for accessing all other APIs.
     */
    /** APIs for cheats. */
    var cheats: Cheats;
    /** APIs for interacting with the stdout console. */
    var console: Console;
    /** Core APIs for plugins. */
    var context: Context;
    /** APIs for getting or setting the in-game date. */
    var date: GameDate;
    /** APIs for manipulating the map. */
    var map: GameMap;
    /** APIs for managing the server or interacting with the server or clients. */
    var network: Network;
    /** APIs for the park and management of it. */
    var park: Park;
    /** APIs for the current scenario. */
    var scenario: Scenario;
    /**
     * APIs for creating and editing title sequences.
     * These will only be available to clients that are not running headless mode.
     */
    var titleSequenceManager: TitleSequenceManager;
    /**
     * APIs for controlling the user interface.
     * These will only be available to servers and clients that are not running headless mode.
     * Plugin writers should check if ui is available using `typeof ui !== 'undefined'`.
     */
    var ui: Ui;

    /**
     * Registers the plugin. This may only be called once.
     * @param metadata Information about the plugin and the entry point.
     */
    function registerPlugin(metadata: PluginMetadata): void;

    /**
     * Represents a JavaScript object that can or should be disposed when no longer needed.
     */
    interface IDisposable {
        dispose(): void;
    }

    /**
     * A coordinate within the game's client screen in pixels.
     */
    interface ScreenCoordsXY {
        x: number;
        y: number;
    }

    /**
     * Represents the width and height in pixels.
     */
    interface ScreenSize {
        width: number;
        height: number;
    }

    /**
     * A coordinate within the game.
     * Each in-game tile is a size of 32x32.
     */
    interface CoordsXY {
        x: number;
        y: number;
    }

    /**
     * A coordinate within the game.
     * Each in-game tile is a size of 32x32.
     * The z-coordinate raises 16 per land increment. A full-height wall is 32 in height.
     */
    interface CoordsXYZ extends CoordsXY {
        z: number;
    }

    /**
     * A coordinate within the game.
     * Each in-game tile is a size of 32x32.
     * The z-coordinate raises 16 per land increment. A full-height wall is 32 in height.
     * The direction is between 0 and 3.
     */
    interface CoordsXYZD extends CoordsXYZ {
        direction: number;
    }

    /**
     * A rectangular area specified using two coordinates.
     */
    interface MapRange {
        leftTop: CoordsXY;
        rightBottom: CoordsXY;
    }

    /**
     * Represents information about the plugin such as type, name, author and version.
     * It also includes the entry point.
     */
    interface PluginMetadata {
        name: string;
        version: string;
        authors: string | string[];
        type: PluginType;
        licence: string;
        minApiVersion?: number;
        main: () => void;
    }

    /**
     * Console APIs
     * Currently interact with stdout.
     */
    interface Console {
        clear(): void;
        log(message?: any, ...optionalParams: any[]): void;

        /**
         * Executes a command using the legacy console REPL. This should not be used
         * by plugins, and exists only for servers to continue using old commands until
         * all functionality can be accomplished with this scripting API.
         *
         * @deprecated
         * @param command The command and arguments to execute.
         */
        executeLegacy(command: string): void;
    }

    /**
     * Core APIs for storage and subscriptions.
     */
    interface Context {
        /**
         * The user's current configuration.
         */
        configuration: Configuration;

        /**
         * Shared generic storage for all plugins. Data is persistent across instances
         * of OpenRCT2 and is stored externally as a single JSON file in the OpenRCT2
         * user directory. Internally it is a JavaScript object. Objects and arrays
         * are only copied by reference. The external file is only written when using
         * the `set` method, do not rely on the file being saved by modifying your own
         * objects. Functions and other internal structures will not be persisted.
         */
        sharedStorage: Configuration;

        /**
         * Render the current state of the map and save to disc.
         * Useful for server administration and timelapse creation.
         * @param options Options that control the capture and output file.
         */
        captureImage(options: CaptureOptions): void;

        /**
         * Gets the loaded object at the given index.
         * @param type The object type.
         * @param index The index.
         */
        getObject(type: ObjectType, index: number): Object;
        getObject(type: "ride", index: number): RideObject;
        getObject(type: "small_scenery", index: number): SmallSceneryObject;

        getAllObjects(type: ObjectType): Object[];
        getAllObjects(type: "ride"): RideObject[];

        /**
         * Gets a random integer within the specified range using the game's pseudo-
         * random number generator. This is part of the game state and shared across
         * all clients, you therefore must be in a context that can mutate the game
         * state. Use this to generate random numbers instead of Math.Random during
         * game logic routines such as hooks and game actions.
         * @param min The minimum value inclusive.
         * @param max The maximum value exclusive.
         */
        getRandom(min: number, max: number): number;

        /**
         * Formats a new string using the given format string and the arguments.
         * @param fmt The format string, e.g. "Guests: {COMMA16}"
         * @param args The arguments to insert into the string.
         */
        formatString(fmt: string, ...args: any[]): string;

        /**
         * Registers a new game action that allows clients to interact with the game.
         * @param action The unique name of the action.
         * @param query Logic for validating and returning a price for an action.
         * @param execute Logic for validating and executing the action.
         * @throws An error if the action has already been registered by this or another plugin.
         */
        registerAction(
            action: string,
            query: (args: object) => GameActionResult,
            execute: (args: object) => GameActionResult): void;

        /**
         * Query the result of running a game action. This allows you to check the outcome and validity of
         * an action without actually executing it.
         * @param action The name of the action.
         * @param args The action parameters.
         * @param callback The function to be called with the result of the action.
         */
        queryAction(action: ActionType, args: object, callback: (result: GameActionResult) => void): void;
        queryAction(action: string, args: object, callback: (result: GameActionResult) => void): void;

        /**
         * Executes a game action. In a network game, this will send a request to the server and wait
         * for the server to reply.
         * @param action The name of the action.
         * @param args The action parameters.
         * @param callback The function to be called with the result of the action.
         */
        executeAction(action: ActionType, args: object, callback: (result: GameActionResult) => void): void;
        executeAction(action: string, args: object, callback: (result: GameActionResult) => void): void;

        /**
         * Subscribes to the given hook.
         */
        subscribe(hook: HookType, callback: Function): IDisposable;

        subscribe(hook: "action.query", callback: (e: GameActionEventArgs) => void): IDisposable;
        subscribe(hook: "action.execute", callback: (e: GameActionEventArgs) => void): IDisposable;
        subscribe(hook: "interval.tick", callback: () => void): IDisposable;
        subscribe(hook: "interval.day", callback: () => void): IDisposable;
        subscribe(hook: "network.chat", callback: (e: NetworkChatEventArgs) => void): IDisposable;
        subscribe(hook: "network.authenticate", callback: (e: NetworkAuthenticateEventArgs) => void): IDisposable;
        subscribe(hook: "network.join", callback: (e: NetworkEventArgs) => void): IDisposable;
        subscribe(hook: "network.leave", callback: (e: NetworkEventArgs) => void): IDisposable;
        subscribe(hook: "ride.ratings.calculate", callback: (e: RideRatingsCalculateArgs) => void): IDisposable;
        subscribe(hook: "action.location", callback: (e: ActionLocationArgs) => void): IDisposable;

        /**
         * Registers a function to be called every so often in realtime, specified by the given delay.
         * @param callback The function to call every time the delay has elapsed.
         * @param delay The number of milliseconds to wait between each call to the given function.
         */
        setInterval(callback: Function, delay: number): number;

        /**
         * Like `setInterval`, except the callback will only execute once after the given delay.
         * @param callback The function to call after the given delay has elapsed.
         * @param delay The number of milliseconds to wait for before calling the given function.
         */
        setTimeout(callback: Function, delay: number): number;

        /**
         * Removes the registered interval specified by the numeric handle. The handles
         * are shared with `setTimeout`.
         * @param handle
         */
        clearInterval(handle: number): void;

        /**
         * Removes the registered timeout specified by the numeric handle. The handles
         * are shared with `setInterval`.
         * @param handle The numerical handle of the registered timeout to remove.
         */
        clearTimeout(handle: number): void;
    }

    interface Configuration {
        getAll(namespace: string): { [name: string]: any };
        get<T>(key: string): T | undefined;
        get<T>(key: string, defaultValue: T): T;
        set<T>(key: string, value: T): void;
        has(key: string): boolean;
    }

    interface CaptureOptions {
        /**
         * A relative filename from the screenshot directory to save the capture as.
         * By default, the filename will be automatically generated using the system date and time.
         */
        filename?: string;

        /**
         * Width of the capture in pixels.
         * Do not set if you would like a giant screenshot.
         */
        width?: number;

        /**
         * Height of the capture in pixels.
         * Do not set if you would like a giant screenshot.
         */
        height?: number;

        /**
         * Map position to centre the view on in map units.
         * Do not set if you would like a giant screenshot.
         */
        position?: CoordsXY;

        /**
         * The zoom level, 0 is 1:1, 1 is 2:1, 2 is 4:1 etc.
         */
        zoom: number;

        /**
         * Rotation of the camera from 0 to 3.
         */
        rotation: number;

        /**
         * Whether to enable transparency in the screenshot.
         */
        transparent?: boolean;
    }

    type ObjectType =
        "ride" |
        "small_scenery" |
        "large_scenery" |
        "wall" |
        "banner" |
        "footpath" |
        "footpath_addition" |
        "scenery_group" |
        "park_entrance" |
        "water" |
        "terrain_surface" |
        "terrain_edge" |
        "station" |
        "music";

    type HookType =
        "interval.tick" | "interval.day" |
        "network.chat" | "network.action" | "network.join" | "network.leave" |
        "ride.ratings.calculate" | "action.location";

    type ExpenditureType =
        "ride_construction" |
        "ride_runningcosts" |
        "land_purchase" |
        "landscaping" |
        "park_entrance_tickets" |
        "park_ride_tickets" |
        "shop_sales" |
        "shop_stock" |
        "food_drink_sales" |
        "food_drink_stock" |
        "wages" |
        "marketing" |
        "research" |
        "interest";

    type ActionType =
        "balloonpress" |
        "bannerplace" |
        "bannerremove" |
        "bannersetcolour" |
        "bannersetname" |
        "bannersetstyle" |
        "clearscenery" |
        "climateset" |
        "footpathplace" |
        "footpathplacefromtrack" |
        "footpathremove" |
        "footpathadditionplace" |
        "footpathadditionremove" |
        "guestsetflags" |
        "guestsetname" |
        "landbuyrights" |
        "landlower" |
        "landraise" |
        "landsetheight" |
        "landsetrights" |
        "landsmoothaction" |
        "largesceneryplace" |
        "largesceneryremove" |
        "largescenerysetcolour" |
        "loadorquit" |
        "mazeplacetrack" |
        "mazesettrack" |
        "networkmodifygroup" |
        "parkentranceremove" |
        "parkmarketing" |
        "parksetdate" |
        "parksetloan" |
        "parksetname" |
        "parksetparameter" |
        "parksetresearchfunding" |
        "pausetoggle" |
        "peeppickup" |
        "placeparkentrance" |
        "placepeepspawn" |
        "playerkick" |
        "playersetgroup" |
        "ridecreate" |
        "ridedemolish" |
        "rideentranceexitplace" |
        "rideentranceexitremove" |
        "ridesetappearance" |
        "ridesetcolourscheme" |
        "ridesetname" |
        "ridesetprice" |
        "ridesetsetting" |
        "ridesetstatus" |
        "ridesetvehicles" |
        "scenariosetsetting" |
        "setcheataction" |
        "setparkentrancefee" |
        "signsetname" |
        "smallsceneryplace" |
        "smallsceneryremove" |
        "stafffire" |
        "staffhire" |
        "staffsetcolour" |
        "staffsetcostume" |
        "staffsetname" |
        "staffsetorders" |
        "staffsetpatrolarea" |
        "surfacesetstyle" |
        "tilemodify" |
        "trackdesign" |
        "trackplace" |
        "trackremove" |
        "tracksetbrakespeed" |
        "wallplace" |
        "wallremove" |
        "wallsetcolour" |
        "waterlower" |
        "waterraise" |
        "watersetheight";

    interface GameActionEventArgs {
        readonly player: number;
        readonly type: number;
        readonly action: string;
        readonly isClientOnly: boolean;
        readonly args: object;
        result: GameActionResult;
    }

    interface GameActionResult {
        error?: number;
        errorTitle?: string;
        errorMessage?: string;
        position?: CoordsXYZ;
        cost?: number;
        expenditureType?: ExpenditureType;
    }

    interface RideCreateGameActionResult extends GameActionResult {
        readonly ride: number;
    }

    interface NetworkEventArgs {
        readonly player: number;
    }

    interface NetworkChatEventArgs extends NetworkEventArgs {
        message: string;
    }

    interface NetworkAuthenticateEventArgs {
        readonly name: number;
        readonly ipAddress: string;
        readonly publicKeyHash: string;
        cancel: boolean;
    }

    interface RideRatingsCalculateArgs {
        readonly rideId: number;
        excitement: number;
        intensity: number;
        nausea: number;
    }

    interface ActionLocationArgs {
        readonly x: number;
        readonly y: number;
        readonly player: number;
        readonly type: number;
        readonly isClientOnly: boolean;
        result: boolean;
    }

    /**
     * APIs for the in-game date.
     */
    interface GameDate {
        /**
         * The total number of ticks that have elapsed since the beginning of the game / scenario. This
         * should never reset.
         */
        readonly ticksElapsed: number;
        /**
         * The total number of months that have elapsed. This will equate to 0 in March, Year 1 and
         * increase by 1 every month, i.e. by 8 every year.
         * Note: this represents the current date and may be reset by cheats or scripts.
         */
        monthsElapsed: number;
        /**
         * The total number of years that have elapsed. This always equates to (monthsElapsed / 8).
         */
        readonly yearsElapsed: number;

        /**
         * How far through the month we are between 0 and 65536. This is incremented by 4 each tick, so
         * every month takes ~6.8 minutes to complete making a year take just under an hour.
         */
        monthProgress: number;

        /** The day of the month from 1 to 31. */
        readonly day: number;
        /** The current month of the year from 0 to 7, where 0 is March and 7 is October. */
        readonly month: number;
        /** The current year starting from 1. */
        readonly year: number;
    }

    /**
     * APIs for the map.
     */
    interface GameMap {
        readonly size: CoordsXY;
        readonly numRides: number;
        readonly numEntities: number;
        readonly rides: Ride[];

        getRide(id: number): Ride;
        getTile(x: number, y: number): Tile;
        getEntity(id: number): Entity;
        getAllEntities(type: EntityType): Entity[];
        getAllEntities(type: "peep"): Peep[];
    }

    type TileElementType =
        "surface" | "footpath" | "track" | "small_scenery" | "wall" | "entrance" | "large_scenery" | "banner"
        /** This only exist to retrieve the types for existing corrupt elements. For hiding elements, use the isHidden field instead. */
        | "openrct2_corrupt_deprecated";

    type Direction = 0 | 1 | 2 | 3;

    interface BaseTileElement {
        type: TileElementType;
        baseHeight: number;
        baseZ: number;
        clearanceHeight: number;
        clearanceZ: number;
        occupiedQuadrants: number;
        isGhost: boolean;
        isHidden: boolean; /** Take caution when changing this field, it may invalidate TileElements you have stored in your script. */
    }

    interface SurfaceElement extends BaseTileElement {
        slope: number;
        surfaceStyle: number;
        edgeStyle: number;
        waterHeight: number;
        grassLength: number;
        ownership: number;
        parkFences: number;

        readonly hasOwnership: boolean;
        readonly hasConstructionRights: boolean;
    }

    interface FootpathElement extends BaseTileElement {
        object: number;

        edges: number;
        corners: number;
        slopeDirection: number | null;
        isBlockedByVehicle: boolean;
        isWide: boolean;

        isQueue: boolean;
        queueBannerDirection: number | null;
        ride: number | null;
        station: number | null;

        addition: number | null;
        additionStatus: number | null;
        isAdditionBroken: boolean | null;
        isAdditionGhost: boolean | null;
    }

    interface TrackElement extends BaseTileElement {
        direction: Direction;
        trackType: number;
        sequence: number | null;
        mazeEntry: number | null;

        colourScheme: number | null;
        seatRotation: number | null;

        ride: number;
        station: number | null;

        brakeBoosterSpeed: number | null;
        hasChainLift: boolean;
        isInverted: boolean;
        hasCableLift: boolean;
    }

    interface SmallSceneryElement extends BaseTileElement {
        direction: Direction;
        object: number;
        primaryColour: number;
        secondaryColour: number;
        quadrant: number;
        age: number;
    }

    interface WallElement extends BaseTileElement {
        direction: Direction;
        object: number;
        primaryColour: number;
        secondaryColour: number;
        tertiaryColour: number;
        bannerIndex: number | null;
        slope: Direction;
    }

    interface EntranceElement extends BaseTileElement {
        direction: Direction;
        object: number;
        ride: number;
        station: number;
        sequence: number;
        footpathObject: number;
    }

    interface LargeSceneryElement extends BaseTileElement {
        direction: Direction;
        object: number;
        primaryColour: number;
        secondaryColour: number;
        bannerIndex: number | null;
        sequence: number;
    }

    interface BannerElement extends BaseTileElement {
        direction: Direction;
        bannerIndex: number;
    }

    interface CorruptElement extends BaseTileElement {
    }

    /**
     * Represents a tile containing tile elements on the map. This is a fixed handle
     * for a given tile position. It can be re-used safely between game ticks.
     */
    interface Tile {
        /** The x position in tiles. */
        readonly x: number;
        /** The y position in tiles. */
        readonly y: number;
        /** Gets an array of all the tile elements on this tile. */
        readonly elements: BaseTileElement[];
        /** Gets the number of tile elements on this tile. */
        readonly numElements: number;
        /**
         * Gets or sets the raw data for this tile.
         * This can provide more control and efficiency for tile manipulation but requires
         * knowledge of tile element structures and may change between versions of OpenRCT2.
         */
        data: Uint8Array;

        /** Gets the tile element at the given index on this tile. */
        getElement(index: number): BaseTileElement;
        /** Gets the tile element at the given index on this tile. */
        getElement<T extends BaseTileElement>(index: number): T;
        /** Inserts a new tile element at the given index on this tile. */
        insertElement(index: number): BaseTileElement;
        /** Removes the tile element at the given index from this tile. */
        removeElement(index: number): void;
    }

    /**
     * Represents the definition of a loaded object (.DAT or .json) such a ride type or scenery item.
     */
    interface Object {
        /**
         * The object type.
         */
        readonly type: ObjectType;

        /**
         * The index of the loaded object for the object type.
         */
        readonly index: number;

        /**
         * The unique identifier of the object, e.g. "rct2.burgb".
         * Only JSON objects will have an identifier.
         */
        readonly identifier: string;

        /**
         * The original unique identifier of the object, e.g. "BURGB   ".
         * This may have trailing spaces if the name is shorter than 8 characters.
         * Only .DAT objects or JSON objects based on .DAT objects will have legacy identifiers.
         */
        readonly legacyIdentifier: string;

        /**
         * The name in the user's current language.
         */
        readonly name: string;
    }

    /**
     * Represents the object definition of a ride or stall.
     */
    interface RideObject extends Object {
        /**
         * The description of the ride / stall in the player's current language.
         */
        readonly description: string;
        /**
         * A text description describing the capacity of the ride in the player's current language.
         */
        readonly capacity: string;

        readonly flags: number;
        readonly rideType: number[];
        readonly minCarsInTrain: number;
        readonly maxCarsInTrain: number;
        readonly carsPerFlatRide: number;
        readonly zeroCars: number;
        readonly tabVehicle: number;
        readonly defaultVehicle: number;
        readonly frontVehicle: number;
        readonly secondVehicle: number;
        readonly rearVehicle: number;
        readonly thirdVehicle: number;
        readonly vehicles: RideObjectVehicle[];
        readonly excitementMultiplier: number;
        readonly intensityMultiplier: number;
        readonly nauseaMultiplier: number;
        readonly maxHeight: number;
        readonly shopItem: number;
        readonly shopItemSecondary: number;
    }

    /**
     * Represents a defined vehicle within a Ride object definition.
     */
    interface RideObjectVehicle {
        readonly rotationFrameMask: number;
        readonly numVerticalFrames: number;
        readonly numHorizontalFrames: number;
        readonly spacing: number;
        readonly carMass: number;
        readonly tabHeight: number;
        readonly numSeats: number;
        readonly spriteFlags: number;
        readonly spriteWidth: number;
        readonly spriteHeightNegative: number;
        readonly spriteHeightPositive: number;
        readonly animation: number;
        readonly flags: number;
        readonly baseNumFrames: number;
        readonly baseImageId: number;
        readonly restraintImageId: number;
        readonly gentleSlopeImageId: number;
        readonly steepSlopeImageId: number;
        readonly verticalSlopeImageId: number;
        readonly diagonalSlopeImageId: number;
        readonly bankedImageId: number;
        readonly inlineTwistImageId: number;
        readonly flatToGentleBankImageId: number;
        readonly diagonalToGentleSlopeBankImageId: number;
        readonly gentleSlopeToBankImageId: number;
        readonly gentleSlopeBankTurnImageId: number;
        readonly flatBankToGentleSlopeImageId: number;
        readonly curvedLiftHillImageId: number;
        readonly corkscrewImageId: number;
        readonly noVehicleImages: number;
        readonly noSeatingRows: number;
        readonly spinningInertia: number;
        readonly spinningFriction: number;
        readonly frictionSoundId: number;
        readonly logFlumeReverserVehicleType: number;
        readonly soundRange: number;
        readonly doubleSoundFrequency: number;
        readonly poweredAcceleration: number;
        readonly poweredMaxSpeed: number;
        readonly carVisual: number;
        readonly effectVisual: number;
        readonly drawOrder: number;
        readonly numVerticalFramesOverride: number;
    }

    /**
     * Represents the object definition of a small scenery item such a tree.
     */
    interface SmallSceneryObject extends Object {
        /**
         * Raw bit flags that describe characteristics of the scenery item.
         */
        readonly flags: number;

        /**
         * The default clearance height of the scenery item.
         */
        readonly height: number;

        /**
         * How much the scenery item costs to build.
         */
        readonly price: number;

        /**
         * How much the scenery item costs to remove.
         */
        readonly removalPrice: number;
    }

    /**
     * Represents a ride or stall within the park.
     */
    interface Ride {
        /**
         * The object metadata for this ride.
         */
        readonly object: RideObject;

        /**
         * The unique ID / index of the ride.
         */
        readonly id: number;

        /**
         * The type of the ride represented as the internal built-in ride type ID.
         */
        type: number;

        /**
         * Whether the ride is a ride, shop or facility.
         */
        readonly classification: RideClassification;

        /**
         * The generated or custom name of the ride.
         */
        name: string;

        /**
         * Whether the ride is open, closed or testing.
         */
        readonly status: RideStatus;

        /**
         * Various flags related to the operation of the ride.
         */
        lifecycleFlags: number;

        /**
         * The operation mode.
         */
        mode: number;

        /**
         * Flags related to how trains depart.
         */
        departFlags: number;

        /**
         * The minimum time a train will wait at the station before departing.
         */
        minimumWaitingTime: number;

        /**
         * The maximum time a train will wait at the station before departing.
         */
        maximumWaitingTime: number;

        /**
         * The head vehicle IDs associated with the ride, one for each train.
         */
        readonly vehicles: number[];

        /**
         * The colour for each vehicle when the ride opens. Modifying this directly will not
         * change the colour of any currently running trains nor will it reflect them if they
         * have been modified.
         */
        vehicleColours: VehicleColour[];

        /**
         * The track colour schemes for the ride.
         */
        colourSchemes: TrackColour[];

        /**
         * The style used for the station, entrance, and exit building.
         */
        stationStyle: number;

        /**
         * The music track to play at each station.
         */
        music: number;

        /**
         * Information about each station.
         */
        readonly stations: RideStation[];

        /**
         * The admission price for the ride and the price of the on-ride photo, or the cost of each item of the stall.
         */
        price: number[];

        /**
         * The excitement metric of the ride represented as a 2 decimal point fixed integer.
         * For example, `652` equates to `6.52`.
         */
        excitement: number;

        /**
         * The intensity metric of the ride represented as a 2 decimal point fixed integer.
         * For example, `652` equates to `6.52`.
         */
        intensity: number;

        /**
         * The nausea metric of the ride represented as a 2 decimal point fixed integer.
         * For example, `652` equates to `6.52`.
         */
        nausea: number;

        /**
         * The total number of customers the ride has served since it was built.
         */
        totalCustomers: number;

        /**
         * The date in months when the ride was built.
         * Subtract this from `date.monthsElapsed` to get the age.
         */
        buildDate: number;

        /**
         * How old the ride is in months.
         */
        readonly age: number;

        /**
         * The running cost of the ride billed every fortnight. Multiply this by 16 to get the cost per hour (~ 1 year).
         */
        runningCost: number;

        /**
         * The total profit of the ride over the course of its lifetime.
         */
        totalProfit: number;

        /**
         * How often the ride should be inspected by a mechanic.
         */
        inspectionInterval: number;

        /**
         * The value of the ride.
         */
        value: number;
    }

    type RideClassification = "ride" | "stall" | "facility";

    type RideStatus = "closed" | "open" | "testing" | "simulating";

    interface TrackColour {
        main: number;
        additional: number;
        supports: number;
    }

    interface VehicleColour {
        body: number;
        trim: number;
        ternary: number;
    }

    interface RideStation {
        start: CoordsXYZ;
        length: number;
        entrance: CoordsXYZD;
        exit: CoordsXYZD;
    }

    type EntityType =
        "balloon" |
        "car" |
        "crash_splash" |
        "crashed_vehicle_particle" |
        "duck" |
        "explosion_cloud" |
        "explosion_flare" |
        "jumping_fountain_snow" |
        "jumping_fountain_water" |
        "litter" |
        "money_effect" |
        "peep" |
        "steam_particle";

    /**
     * Represents an object "entity" on the map that can typically moves and has a sub-tile coordinate.
     */
    interface Entity {
        /**
         * The entity index within the entity list.
         */
        readonly id: number;
        /**
         * The type of entity, e.g. car, duck, litter, or peep.
         */
        readonly type: EntityType;
        /**
         * The x-coordinate of the entity in game units.
         */
        x: number;
        /**
         * The y-coordinate of the entity in game units.
         */
        y: number;
        /**
         * The z-coordinate of the entity in game units.
         */
        z: number;

        /**
         * Removes the entity from the map.
         * Note: removing vehicles and peeps that are on rides is currently unsupported.
         */
        remove(): void;
    }

    /**
     * Represents a single car on a ride. A train is made up of multiple cars, but
     * something like boat hire will be one car per boat.
     */
    interface Car extends Entity {
        /**
         * The ride this car belongs to.
         */
        ride: number;

        /**
         * The ride object for this car, e.g. the ladybird trains object.
         */
        rideObject: number;

        /**
         * The vehicle type for the ride object used. This is a local index
         * into the ride object list of vehicle types.
         */
        vehicleObject: number;

        spriteType: number;

        /**
         * How many seats the car has, i.e. the capacity.
         */
        numSeats: number;

        /**
         * The next car on the same train. If this is the last or only car on the train,
         * this will return null.
         */
        nextCarOnTrain: number | null;

        /**
         * The previous car on the ride. This may be the on the same train or the previous
         * train. This will point to the last car if this is the first car on the ride.
         */
        previousCarOnRide: number;

        /**
         * The next car on the ride. This may be the on the same train or the next
         * train. This will point to the first car if this is the last car on the ride.
         */
        nextCarOnRide: number;

        /**
         * The current station the train is in or departing.
         */
        currentStation: number;

        /**
         * How heavy the car is. This is the sum of the mass of the empty car and the
         * mass of each guest that is riding it.
         */
        mass: number;

        /**
         * How much the car's velocity changes per tick.
         */
        acceleration: number;

        /**
         * How fast the car is moving.
         */
        velocity: number;

        /**
         * The current tilt of the car in the X/Y axis.
         */
        bankRotation: number;

        /**
         * The colour of the car.
         */
        colours: VehicleColour;

        /**
         * The acceleration for vehicles with constant power, e.g.
         * transport rides and boats.
         */
        poweredAcceleration: number;

        /**
         * The maximum speed for vehicles with constant power, e.g.
         * transport rides and boats.
         */
        poweredMaxSpeed: number;

        /**
         * Current status of the car or train.
         */
        status: VehicleStatus;

        /**
         * The location and direction of where the car is on the track.
         */
        trackLocation: CoordsXYZD;

        /**
         * The progress on the current track piece, in steps.
         */
        readonly trackProgress: number;

        /**
         * The currently projected remaining distance the car will travel.
         */
        readonly remainingDistance: number;

        /**
         * List of peep IDs ordered by seat.
         */
        peeps: Array<number | null>;

        /**
         * Moves the vehicle forward or backwards along the track, relative to its current
         * position. A single visible step is about 8.000 to 14.000 in distance depending
         * on the direction its moving in.
         */
        travelBy(distance: number): void;
    }

    type VehicleStatus =
        "arriving" |
        "crashed" |
        "crashing" |
        "crooked_house_operating" |
        "departing" |
        "doing_circus_show" |
        "ferris_wheel_rotating" |
        "haunted_house_operating" |
        "moving_to_end_of_station" |
        "operating_1a" |
        "rotating" |
        "showing_film" |
        "simulator_operating" |
        "space_rings_operating" |
        "starting" |
        "stopped_by_block_brake" |
        "stopping_1b" |
        "stopping" |
        "swinging" |
        "top_spin_operating" |
        "travelling_boat" |
        "travelling_cable_lift" |
        "travelling_dodgems" |
        "travelling" |
        "unloading_passengers_1c" |
        "unloading_passengers" |
        "waiting_for_cable_lift" |
        "waiting_for_passengers_17" |
        "waiting_for_passengers" |
        "waiting_to_depart" |
        "waiting_to_start";

    /**
     * Represents a guest or staff member.
     */
    interface Peep extends Entity {
        /**
         * Whether the peep is a guest or staff member.
         */
        peepType: PeepType;

        /**
         * Name of the peep.
         */
        name: string;

        /**
         * The peep's direct destination.
         */
        destination: CoordsXY;

        /**
         * How tired the guest is between 32 and 128 where lower is more tired.
         */
        energy: number;

        /**
         * The target energy value. Energy will increase / decrease slowly towards this value.
         */
        energyTarget: number;

        /**
         * Gets whether a given flag is set or not.
         * @param key The flag to test.
         */
        getFlag(key: PeepFlags): boolean;

        /**
         * Sets the given flag to the given value.
         * @param key The flag to set.
         * @param value Whether to set or clear the flag.
         */
        setFlag(key: PeepFlags, value: boolean): void;
    }

    type PeepFlags =
        "leavingPark" |
        "slowWalk" |
        "tracking" |
        "waving" |
        "hasPaidForParkEntry" |
        "photo" |
        "painting" |
        "wow" |
        "litter" |
        "lost" |
        "hunger" |
        "toilet" |
        "crowded" |
        "happiness" |
        "nausea" |
        "purple" |
        "pizza" |
        "explode" |
        "rideShouldBeMarkedAsFavourite" |
        "parkEntranceChosen" |
        "contagious" |
        "joy" |
        "angry" |
        "iceCream" |
        "hereWeAre";

    type PeepType = "guest" | "staff";

    /**
     * Represents a guest.
     */
    interface Guest extends Peep {
        /**
         * Colour of the guest's t-shirt.
         */
        tshirtColour: number;

        /**
         * Colour of the guest's trousers.
         */
        trousersColour: number;

        /**
         * Colour of the guest's balloon.
         */
        balloonColour: number;

        /**
         * Colour of the guest's hat.
         */
        hatColour: number;

        /**
         * Colour of the guest's umbrella.
         */
        umbrellaColour: number;

        /**
         * How happy the guest is between 0 and 255.
         */
        happiness: number;

        /**
         * The target happiness value. Happiness will increase / decrease slowly towards this value.
         */
        happinessTarget: number;

        /**
         * How nauseated the guest is between 0 and 255.
         */
        nausea: number;

        /**
         * The target nausea value. Nausea will increase / decrease slowly towards this value.
         */
        nauseaTarget: number;

        /**
         * How hungry the guest is between 0 and 255. Lower is more hungry.
         */
        hunger: number;

        /**
         * How thirsty the guest is between 0 and 255. Lower is more thirsty.
         */
        thirst: number;

        /**
         * How much the guest requires the need to go to the toilet between 0 and 255.
         */
        toilet: number;

        /**
         * The mass of the guest. Affects vehicle mass.
         */
        mass: number;

        /**
         * The guest's minimum preferred intensity between 0 and 15.
         */
        minIntensity: number;

        /**
         * The guest's maximum preferred intensity between 0 and 15.
         */
        maxIntensity: number;

        /**
         * The guest's tolerance to nauseating rides between 0 and 3.
         */
        nauseaTolerance: number;

        /**
         * Amount of cash in the guest's pocket.
         */
        cash: number;
    }

    /**
     * Represents a staff member.
     */
    interface Staff extends Peep {
        /**
         * The type of staff member, e.g. handyman, mechanic.
         */
        staffType: StaffType;

        /**
         * Colour of the staff member. Not applicable for entertainers.
         */
        colour: number;

        /**
         * The entertainer's costume, only applicable for entertainers.
         */
        costume: number;

        /**
         * The enabled jobs the staff can do, e.g. sweep litter, water plants, inspect rides etc.
         */
        orders: number;
    }

    type StaffType = "handyman" | "mechanic" | "security" | "entertainer";

    /**
     * Network APIs
     * Use `network.status` to determine whether the current game is a client, server or in single player mode.
     */
    interface Network {
        readonly mode: NetworkMode;
        readonly numGroups: number;
        readonly numPlayers: number;
        readonly groups: PlayerGroup[];
        readonly players: Player[];
        readonly currentPlayer: Player;
        defaultGroup: number;
        readonly stats: NetworkStats;

        getServerInfo(): ServerInfo;
        addGroup(): void;
        getGroup(index: number): PlayerGroup;
        removeGroup(index: number): void;
        getPlayer(index: number): Player;
        kickPlayer(index: number): void;
        sendMessage(message: string): void;
        sendMessage(message: string, players: number[]): void;

        createListener(): Listener;
        createSocket(): Socket;
    }

    type NetworkMode = "none" | "server" | "client";

    /**
     * Represents a player within a network game.
     */
    interface Player {
        readonly id: number;
        readonly name: string;
        group: number;
        readonly ping: number;
        readonly commandsRan: number;
        readonly moneySpent: number;
        readonly ipAddress: string;
        readonly publicKeyHash: string;
    }

    interface PlayerGroup {
        readonly id: number;
        name: string;
        permissions: PermissionType[];
    }

    interface ServerInfo {
        readonly name: string;
        readonly description: string;
        readonly greeting: string;
        readonly providerName: string;
        readonly providerEmail: string;
        readonly providerWebsite: string;
    }

    interface NetworkStats {
        bytesReceived: number[];
        bytesSent: number[];
    }

    type PermissionType =
        "chat" |
        "terraform" |
        "set_water_level" |
        "toggle_pause" |
        "create_ride" |
        "remove_ride" |
        "build_ride" |
        "ride_properties" |
        "scenery" |
        "path" |
        "clear_landscape" |
        "guest" |
        "staff" |
        "park_properties" |
        "park_funding" |
        "kick_player" |
        "modify_groups" |
        "set_player_group" |
        "cheat" |
        "toggle_scenery_cluster" |
        "passwordless_login" |
        "modify_tile" |
        "edit_scenario_options";

    /**
     * Park APIs
     */

    /**
     * The type of park message, including icon and behaviour.
     */
    type ParkMessageType =
        "attraction" | "peep_on_attraction" | "peep" | "money" | "blank" | "research" | "guests" | "award" | "chart";

    interface ParkMessage {
        /**
         * Whether the message has been shown and archived.
         */
        readonly isArchived: boolean;

        /**
         * The date this message was posted in total elapsed months.
         */
        month: number;

        /**
         * The day of the month this message was posted.
         */
        day: number;

        /**
         * How old the message is in number of ticks.
         */
        tickCount: number;

        /**
         * The format of the message such as the icon and whether location is enabled.
         */
        type: ParkMessageType;

        /**
         * The actual message content.
         */
        text: string;

        /**
         * Ride ID for attraction.
         * Entity ID for peep_on_attraction or peep.
         * Researched item for research.
         */
        subject?: number;

        /**
         * Removes the message.
         */
        remove(): void;
    }

    interface ParkMessageDesc {
        type: ParkMessageType;
        text: string;
        subject?: number;
    }

    type ParkFlags =
        "difficultGuestGeneration" |
        "difficultParkRating" |
        "forbidHighConstruction" |
        "forbidLandscapeChanges" |
        "forbidMarketingCampaigns" |
        "forbidTreeRemoval" |
        "freeParkEntry" |
        "noMoney" |
        "open" |
        "preferLessIntenseRides" |
        "preferMoreIntenseRides" |
        "scenarioCompleteNameInput" |
        "unlockAllPrices";

    interface Park {
        cash: number;
        rating: number;
        bankLoan: number;
        maxBankLoan: number;

        /**
         * The current entrance fee for the park.
         */
        entranceFee: number;

        /**
         * The number of guests within the park, not including any outside the park but still
         * on the map.
         */
        readonly guests: number;

        /**
         * The park value, will be updated every 512 ticks.
         */
        value: number;

        /**
         * The company value, will be updated every 512 ticks.
         * Calculation is: `park.value + park.cash - park.bankLoan`
         */
        companyValue: number;

        /**
         * The total number of guests that have entered the park.
         */
        totalAdmissions: number;

        /**
         * The total amount of income gained from admissions into the park.
         */
        totalIncomeFromAdmissions: number;

        /**
         * The purchase price of one tile for park ownership.
         */
        landPrice: number;

        /**
         * The purchase price of one tile for construction rights.
         */
        constructionRightsPrice: number;

        /**
         * The number of tiles on the map with park ownership or construction rights.
         * Updated every 4096 ticks.
         */
        readonly parkSize: number;

        name: string;
        messages: ParkMessage[];

        /**
         * Gets whether a given flag is set or not.
         * @param key The flag to test.
         */
        getFlag(flag: ParkFlags): boolean;

        /**
         * Sets the given flag to the given value.
         * @param key The flag to set.
         * @param value Whether to set or clear the flag.
         */
        setFlag(flag: ParkFlags, value: boolean): void;

        postMessage(message: string): void;
        postMessage(message: ParkMessageDesc): void;
    }

    type ScenarioObjectiveType =
        "none" |
        "guestsBy" |
        "parkValueBy" |
        "haveFun" |
        "buildTheBest" |
        "10Rollercoasters" |
        "guestsAndRating" |
        "monthlyRideIncome" |
        "10RollercoastersLength" |
        "finish5Rollercoasters" |
        "repayLoanAndParkValue" |
        "monthlyFoodIncome";

    interface ScenarioObjective {
        /**
         * The objective type.
         */
        type: ScenarioObjective;

        /**
         * The required number of guests.
         */
        guests: number;

        /**
         * The year the objective must be completed by the end of.
         */
        year: number;

        /**
         * The minimum length required for each rollercoaster.
         */
        length: number;

        /**
         * The minimum excitement rating required for each rollercoaster.
         */
        excitement: number;

        /**
         * The minimum park value required.
         */
        parkValue: number;

        /**
         * The minimum monthly income from rides / food.
         */
        monthlyIncome: number;
    }

    type ScenarioStatus = "inProgress" | "completed" | "failed";

    interface Scenario {
        /**
         * The name of the scenario. This is not necessarily the name of the park.
         */
        name: string;

        /**
         * The description of the scenario, shown above the scenario objective.
         */
        details: string;

        /**
         * The entered player name if the scenario is complete.
         */
        completedBy: string;

        /**
         * The filename of the scenario that is being played. Used to match the
         * completion score with the scenario file.
         */
        filename: string;

        /**
         * The criteria required to complete the scenario.
         */
        objective: ScenarioObjective;

        /**
         * The number of consecutive days the park rating has been under the threshold for.
         * This is reset when the park rating rises above the threshold again.
         * Also used to post warning messages.
         */
        parkRatingWarningDays: number;

        /**
         * The company value when the scenario was completed.
         */
        completedCompanyValue?: number;

        /**
         * The current status of the scenario.
         */
        status: ScenarioStatus;

        /**
         * The current highest recorded company value.
         */
        companyValueRecord: number;
    }

    interface Cheats {
        allowArbitraryRideTypeChanges: boolean;
        allowTrackPlaceInvalidHeights: boolean;
        buildInPauseMode: boolean;
        disableAllBreakdowns: boolean;
        disableBrakesFailure: boolean;
        disableClearanceChecks: boolean;
        disableLittering: boolean;
        disablePlantAging: boolean;
        disableRideValueAging: boolean;
        disableSupportLimits: boolean;
        disableTrainLengthLimit: boolean;
        disableVandalism: boolean;
        enableAllDrawableTrackPieces: boolean;
        enableChainLiftOnAllTrack: boolean;
        fastLiftHill: boolean;
        freezeWeather: boolean;
        ignoreResearchStatus: boolean;
        ignoreRideIntensity: boolean;
        neverendingMarketing: boolean;
        sandboxMode: boolean;
        showAllOperatingModes: boolean;
        showVehiclesFromOtherTrackTypes: boolean;
    }

    /**
     * User Interface APIs
     * These will only be available to servers and clients that are not running headless mode.
     * Plugin writers should check if ui is available using `typeof ui !== 'undefined'`.
     */
    interface Ui {
        readonly width: number;
        readonly height: number;
        readonly windows: number;
        readonly mainViewport: Viewport;
        readonly tileSelection: TileSelection;
        readonly tool: Tool | null;

        getWindow(id: number): Window;
        getWindow(classification: string): Window;
        openWindow(desc: WindowDesc): Window;
        closeWindows(classification: string, id?: number): void;
        closeAllWindows(): void;

        /**
         * Show a red error box.
         * @param title The title / first line of the box.
         * @param message The message / second line of the box.
         */
        showError(title: string, message: string): void;

        /**
         * Shows a text input prompt and calls the given callback when entered.
         * @param desc The parameters for the text input window.
         */
        showTextInput(desc: TextInputDesc): void;

        /**
         * Shows the window for loading or saving a file and calls the given callback when a file
         * is selected.
         * @param desc The parameters for the file browse window.
         */
        showFileBrowse(desc: FileBrowseDesc): void;

        /**
         * Shows the scenario select window and calls the given callback when a scenario is
         * selected.
         */
        showScenarioSelect(desc: ScenarioSelectDesc): void;

        /**
         * Begins a new tool session. The cursor will change to the style specified by the
         * given tool descriptor and cursor events will be provided.
         * @param tool The properties and event handlers for the tool.
         */
        activateTool(tool: ToolDesc): void;

        registerMenuItem(text: string, callback: () => void): void;

        registerShortcut(desc: ShortcutDesc): void;
    }

    /**
     * Parameters for the text input window.
     */
    interface TextInputDesc {
        /**
         * The title of the text input window.
         */
        title: string;

        /**
         * The description to show above the text box.
         */
        description: string;

        /**
         * The current value of the text box.
         */
        initialValue?: string;

        /**
         * The maximum length the value can be.
         */
        maxLength?: number;

        /**
         * The function to call when the user has entered a new value and pressed OK.
         */
        callback: (value: string) => void;
    }

    /**
     * Parameters for the file browse window.
     */
    interface FileBrowseDesc {
        /**
         * Whether to browse a file for loading or saving. Saving will prompt the user
         * before overwriting a file.
         */
        type: 'load';

        /**
         * The type of file to browse for.
         */
        fileType: 'game' | 'heightmap';

        /**
         * The pre-selected file to load by default if the user clicks OK.
         */
        defaultPath?: string;

        /**
         * The function to call when the user has selected a file.
         */
        callback: (path: string) => void;
    }

    /**
     * Parameters for the scenario select window.
     */
    interface ScenarioSelectDesc {
        /**
         * The function to call when the user has selected a scenario.
         */
        callback: (scenario: ScenarioFile) => void;
    }

    /**
     * Represents an installed scenario's path and metadata.
     */
    interface ScenarioFile {
        id: number;
        category: 'beginner' | 'challenging' | 'expert' | 'real' | 'other' | 'dlc' | 'build_your_own';
        sourceGame: 'rct1' | 'rct1_aa' | 'rct1_ll' | 'rct2' | 'rct2_ww' | 'rct2_tt' | 'real' | 'other';
        path: string;
        internalName: string;
        name: string;
        details: string;
        highscore: {
            name: string;
            companyValue: number;
        };
    }

    interface TileSelection {
        range: MapRange;
        tiles: CoordsXY[];
    }

    interface Tool {
        id: string;
        cursor: CursorType;

        cancel: () => void;
    }

    interface ToolEventArgs {
        readonly isDown: boolean;
        readonly screenCoords: ScreenCoordsXY;
        readonly mapCoords?: CoordsXYZ;
        readonly tileElementIndex?: number;
        readonly entityId?: number;
    }

    /**
     * Describes the properties and event handlers for a custom tool.
     */
    interface ToolDesc {
        id: string;
        cursor?: CursorType;

        /**
         * What types of object in the game can be selected with the tool.
         * E.g. only specify terrain if you only want a tile selection.
         */
        filter?: ToolFilter[];

        onStart?: () => void;
        onDown?: (e: ToolEventArgs) => void;
        onMove?: (e: ToolEventArgs) => void;
        onUp?: (e: ToolEventArgs) => void;
        onFinish?: () => void;
    }

    type CursorType =
        "arrow" |
        "bench_down" |
        "bin_down" |
        "blank" |
        "cross_hair" |
        "diagonal_arrows" |
        "dig_down" |
        "entrance_down" |
        "fence_down" |
        "flower_down" |
        "fountain_down" |
        "hand_closed" |
        "hand_open" |
        "hand_point" |
        "house_down" |
        "lamppost_down" |
        "paint_down" |
        "path_down" |
        "picker" |
        "statue_down" |
        "tree_down" |
        "up_arrow" |
        "up_down_arrow" |
        "volcano_down" |
        "walk_down" |
        "water_down" |
        "zzz";

    type ToolFilter =
        "terrain" |
        "entity" |
        "ride" |
        "water" |
        "scenery" |
        "footpath" |
        "footpath_item" |
        "park_entrance" |
        "wall" |
        "large_scenery" |
        "label" |
        "banner";

    interface ShortcutDesc {
        /**
         * The unique identifier for the shortcut.
         * If the identifier already exists, the shortcut will not be registered.
         * Use full stops to group shortcuts together, e.g. `yourplugin.somewindow.apply`.
         */
        id: string;

        /**
         * The display text for the shortcut.
         */
        text: string;

        /**
         * Default bindings for the shortcut.
         * E.g. `["CTRL+SHIFT+L", "MOUSE 3"]`
         */
        bindings?: string[];

        /**
         * Function to call when the shortcut is invoked.
         */
        callback: () => void;
    }

    /**
     * Represents the type of a widget, e.g. button or label.
     */
    type WidgetType =
        "button" | "checkbox" | "colourpicker" | "custom" | "dropdown" | "groupbox" |
        "label" | "listview" | "spinner" | "textbox" | "viewport";

    type Widget =
        ButtonWidget | CheckboxWidget | ColourPickerWidget | CustomWidget | DropdownWidget | GroupBoxWidget |
        LabelWidget | ListView | SpinnerWidget | TextBoxWidget | ViewportWidget;

    interface WidgetBase {
        readonly window?: Window;
        x: number;
        y: number;
        width: number;
        height: number;
        name?: string;
        tooltip?: string;
        isDisabled?: boolean;
        isVisible?: boolean;
    }

    interface ButtonWidget extends WidgetBase {
        type: 'button';
        /**
         * Whether the button has a 3D border.
         * By default, text buttons have borders and image buttons do not but it can be overridden.
         */
        border?: boolean;
        image?: number;
        isPressed?: boolean;
        text?: string;
        onClick?: () => void;
    }

    interface CheckboxWidget extends WidgetBase {
        type: 'checkbox';
        text?: string;
        isChecked?: boolean;
        onChange?: (isChecked: boolean) => void;
    }

    interface ColourPickerWidget extends WidgetBase {
        type: 'colourpicker';
        colour?: number;
        onChange?: (colour: number) => void;
    }

    interface CustomWidget extends WidgetBase {
        type: 'custom';
        onDraw?: (this: CustomWidget, g: GraphicsContext) => void;
    }

    interface DropdownWidget extends WidgetBase {
        type: 'dropdown';
        items?: string[];
        selectedIndex?: number;
        onChange?: (index: number) => void;
    }

    interface GroupBoxWidget extends WidgetBase {
        type: 'groupbox';
    }

    interface LabelWidget extends WidgetBase {
        type: 'label';
        text?: string;
        textAlign?: TextAlignment;
        onChange?: (index: number) => void;
    }

    type TextAlignment = "left" | "centred";

    type SortOrder = "none" | "ascending" | "descending";

    type ScrollbarType = "none" | "horizontal" | "vertical" | "both";

    interface ListViewColumn {
        canSort?: boolean;
        sortOrder?: SortOrder;
        header?: string;
        headerTooltip?: string;
        width?: number;
        ratioWidth?: number;
        minWidth?: number;
        maxWidth?: number;
    }

    interface ListViewItemSeperator {
        type: 'seperator';
        text?: string;
    }

    type ListViewItem = ListViewItemSeperator | string[];

    interface RowColumn {
        row: number;
        column: number;
    }

    interface ListView extends WidgetBase {
        type: 'listview';
        scrollbars?: ScrollbarType;
        isStriped?: boolean;
        showColumnHeaders?: boolean;
        columns?: ListViewColumn[];
        items?: string[] | ListViewItem[];
        selectedCell?: RowColumn;
        readonly highlightedCell?: RowColumn;
        canSelect?: boolean;

        onHighlight?: (item: number, column: number) => void;
        onClick?: (item: number, column: number) => void;
    }

    interface SpinnerWidget extends WidgetBase {
        type: 'spinner';
        text?: string;

        onDecrement?: () => void;
        onIncrement?: () => void;
        onClick?: () => void;
    }

    interface TextBoxWidget extends WidgetBase {
        type: 'textbox';
        text?: string;
        maxLength?: number;
        onChange?: (text: string) => void;
    }

    interface ViewportWidget extends WidgetBase {
        type: 'viewport';
        viewport?: Viewport;
    }

    interface Window {
        classification: number;
        number: number;
        x: number;
        y: number;
        width: number;
        height: number;
        minWidth: number;
        maxWidth: number;
        minHeight: number;
        maxHeight: number;
        isSticky: boolean;
        colours: number[];
        title: string;
        widgets: Widget[];
        tabIndex: number;

        close(): void;
        bringToFront(): void;
        findWidget<T extends Widget>(name: string): T;
    }

    interface WindowDesc {
        classification: string;
        x?: number;
        y?: number;
        width: number;
        height: number;
        title: string;
        id?: number;
        minWidth?: number;
        minHeight?: number;
        maxWidth?: number;
        maxHeight?: number;
        widgets?: Widget[];
        colours?: number[];
        tabs?: WindowTabDesc[];
        tabIndex?: number;

        onClose?: () => void;
        onUpdate?: () => void;
        onTabChange?: () => void;
    }

    interface ImageAnimation {
        frameBase: number;
        frameCount?: number;
        frameDuration?: number;
        offset?: ScreenCoordsXY;
    }

    interface WindowTabDesc {
        image: number | ImageAnimation;
        widgets?: Widget[];
    }

    interface Viewport {
        left: number;
        top: number;
        right: number;
        bottom: number;
        rotation: number;
        zoom: number;
        visibilityFlags: number;

        getCentrePosition(): CoordsXY;
        moveTo(position: CoordsXY | CoordsXYZ): void;
        scrollTo(position: CoordsXY | CoordsXYZ): void;
    }

    /**
     * API for drawing graphics.
     */
    interface GraphicsContext {
        colour: number | undefined;
        secondaryColour: number | undefined;
        ternaryColour: number | undefined;
        stroke: number;
        fill: number;
        paletteId: number | undefined;
        readonly width: number;
        readonly height: number;

        getImage(id: number): ImageInfo | undefined;
        measureText(text: string): ScreenSize;

        clear(): void;
        clip(x: number, y: number, width: number, height: number): void;
        box(x: number, y: number, width: number, height: number): void;
        image(id: number, x: number, y: number): void;
        line(x1: number, y1: number, x2: number, y2: number): void;
        rect(x: number, y: number, width: number, height: number): void;
        text(text: string, x: number, y: number): void;
        well(x: number, y: number, width: number, height: number): void;
    }

    interface ImageInfo {
        readonly id: number;
        readonly offset: ScreenCoordsXY;
        readonly width: number;
        readonly height: number;
        readonly isBMP: boolean;
        readonly isRLE: boolean;
        readonly isPalette: boolean;
        readonly noZoom: boolean;
        readonly nextZoomId: number | undefined;
    }

    /**
     * Listens for incoming connections.
     * Based on node.js net.Server, see https://nodejs.org/api/net.html for more information.
     */
    interface Listener {
        readonly listening: boolean;

        listen(port: number, host?: string): Listener;
        close(): Listener;

        on(event: 'connection', callback: (socket: Socket) => void): Listener;

        off(event: 'connection', callback: (socket: Socket) => void): Listener;
    }

    /**
     * Represents a socket such as a TCP connection.
     * Based on node.js net.Socket, see https://nodejs.org/api/net.html for more information.
     */
    interface Socket {
        connect(port: number, host: string, callback: Function): Socket;
        destroy(error: object): Socket;
        setNoDelay(noDelay: boolean): Socket;
        end(data?: string): Socket;
        write(data: string): boolean;

        on(event: 'close', callback: (hadError: boolean) => void): Socket;
        on(event: 'error', callback: (hadError: boolean) => void): Socket;
        on(event: 'data', callback: (data: string) => void): Socket;

        off(event: 'close', callback: (hadError: boolean) => void): Socket;
        off(event: 'error', callback: (hadError: boolean) => void): Socket;
        off(event: 'data', callback: (data: string) => void): Socket;
    }

    interface TitleSequence {
        /**
         * The name of the title sequence.
         */
        name: string;

        /**
         * The full path of the title sequence.
         */
        readonly path: string;

        /**
         * Whether the title sequence is a single file or directory.
         */
        readonly isDirectory: boolean;

        /**
         * Whether or not the title sequence is read-only (e.g. a pre-installed sequence).
         */
        readonly isReadOnly: boolean;

        /**
         * The parks stored within this title sequence.
         */
        readonly parks: TitleSequencePark[];

        /**
         * The commands that describe how to play the title sequence.
         */
        commands: TitleSequenceCommand[];

        /**
         * Whether the title sequence is currently playing.
         */
        readonly isPlaying: boolean;

        /**
         * The current command the title sequence is on if playing.
         */
        readonly position: number | null;

        addPark(path: string, fileName: string): void;

        /**
         * Creates a new title sequence identical to this one.
         * @param name The name of the new title sequence.
         */
        clone(name: string): TitleSequence;

        /**
         * Deletes this title sequence from disc.
         */
        delete(): void;

        /**
         * Play the title sequence.
         */
        play(): void;

        /**
         * Seek to a specific command in the sequence.
         * @param position The index of the command to seek to.
         */
        seek(position: number): void;

        /**
         * Stops playing the title sequence.
         */
        stop(): void;
    }

    interface TitleSequencePark {
        /**
         * The file name of the park.
         */
        fileName: string;

        /**
         * Deletes this park from the title sequence.
         */
        delete(): void;

        /**
         * Loads this park.
         */
        load(): void;
    }

    type TitleSequenceCommandType =
        'load' |
        'loadsc' |
        'location' |
        'rotate' |
        'zoom' |
        'speed' |
        'follow' |
        'wait' |
        'restart' |
        'end';

    interface LoadTitleSequenceCommand {
        type: 'load';
        index: number;
    }

    interface LocationTitleSequenceCommand {
        type: 'location';
        x: number;
        y: number;
    }

    interface RotateTitleSequenceCommand {
        type: 'rotate';
        rotations: number;
    }

    interface ZoomTitleSequenceCommand {
        type: 'zoom';
        zoom: number;
    }

    interface FollowTitleSequenceCommand {
        type: 'follow';
        id: number | null;
    }

    interface SpeedTitleSequenceCommand {
        type: 'speed';
        speed: number;
    }

    interface WaitTitleSequenceCommand {
        type: 'wait';
        duration: number;
    }

    interface LoadScenarioTitleSequenceCommand {
        type: 'loadsc';
        scenario: string;
    }

    interface RestartTitleSequenceCommand {
        type: 'restart';
    }

    interface EndTitleSequenceCommand {
        type: 'end';
    }

    type TitleSequenceCommand =
        LoadTitleSequenceCommand |
        LocationTitleSequenceCommand |
        RotateTitleSequenceCommand |
        ZoomTitleSequenceCommand |
        FollowTitleSequenceCommand |
        SpeedTitleSequenceCommand |
        WaitTitleSequenceCommand |
        LoadScenarioTitleSequenceCommand |
        RestartTitleSequenceCommand |
        EndTitleSequenceCommand;

    interface TitleSequenceManager {
        /**
         * Gets all the available title sequences.
         */
        readonly titleSequences: TitleSequence[];

        /**
         * Creates a new blank title sequence.
         * @param name The name of the title sequence.
         */
        create(name: string): TitleSequence;
    }
}
