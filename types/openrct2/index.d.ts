/*****************************************************************************
 * Copyright (c) 2014-2024 OpenRCT2 developers
 *
 * For a complete list of all authors, please refer to contributors.md
 * Interested in contributing? Visit https://github.com/OpenRCT2/OpenRCT2
 *
 * OpenRCT2 is licensed under the GNU General Public License version 3.
 *****************************************************************************/

// OpenRCT2 Scripting API definition file

// To enable IntelliSense for your scripts in Visual Studio or Visual Studio Code,
// add the following line to the top of your script and change the path appropriately.
//
//   /// <reference path="/path/to/openrct2.d.ts" />
//

export type PluginType = "local" | "remote" | "intransient";

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
    /** APIs for the climate and weather. */
    var climate: Climate;
    /** APIs for performance profiling. */
    var profiler: Profiler;
    /**
     * APIs for getting, loading, and unloading objects.
     */
    var objectManager: ObjectManager;
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
     * APIs for managing the installed plugins
     */
    var pluginManager: PluginManager;
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
        direction: Direction;
    }

    /**
     * A track piece coordinate and type within the game.
     */
    interface CarTrackLocation extends CoordsXYZD {
        trackType: number;
    }

    /**
     * A rectangular area specified using two coordinates.
     */
    interface MapRange {
        leftTop: CoordsXY;
        rightBottom: CoordsXY;
    }

    /**
     * Represents lateral and vertical g-forces.
     */
    interface GForces {
        lateralG: number;
        verticalG: number;
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
        /**
         * The Plug-in API version the current plug-in is designed for. This is used for backwards compatibility.
         * E.g.: 66
         */
        targetApiVersion: number;
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
         * Gets the current version of the plugin api. This is an integer that increments
         * by 1 every time a change to the plugin api is made.
         */
        readonly apiVersion: number;

        /**
         * The user's current configuration.
         */
        readonly configuration: Configuration;

        /**
         * Shared generic storage for all plugins. Data is persistent across instances
         * of OpenRCT2 and is stored externally as a single JSON file in the OpenRCT2
         * user directory. Internally it is a JavaScript object. Objects and arrays
         * are only copied by reference. The external file is only written when using
         * the `set` method, do not rely on the file being saved by modifying your own
         * objects. Functions and other internal structures will not be persisted.
         */
        readonly sharedStorage: Configuration;

        /**
         * Gets the storage for the current plugin if no name is specified.
         * If a plugin name is specified, the storage for the plugin with that name will be returned.
         * Data is persisted for the current loaded park, and is stored inside the .park file.
         * Any references to objects, or arrays are copied by reference. If these arrays, objects,
         * or any other arrays, or objects that they reference change without a subsequent call to
         * the `set` method, their new state will still be serialised.
         * Keep in mind that all data here will be serialised every time the park is
         * saved, including when the park is periodically saved automatically.
         * @param pluginName The name of the plugin to get a store for. If undefined, the
         *                   current plugin's name will be used. Plugin names are case sensitive.
         */
        getParkStorage(pluginName?: string): Configuration;

        /**
         * The current mode / screen the game is in. Can be used for example to check
         * whether the game is currently on the title screen or in the scenario editor.
         */
        readonly mode: GameMode;

        /**
         * Whether the game is currently paused or not. Readonly in network mode.
         */
        paused: boolean;

        /**
         * Render the current state of the map and save to disc.
         * Useful for server administration and timelapse creation.
         * @param options Options that control the capture and output file.
         */
        captureImage(options: CaptureOptions): void;

        /**
         * @deprecated Use {@link ObjectManager.getObject} instead.
         */
        getObject(type: ObjectType, index: number): LoadedImageObject;

        /**
         * @deprecated Use {@link ObjectManager.getObject} instead.
         */
        getObject(type: "ride", index: number): RideObject;

        /**
         * @deprecated Use {@link ObjectManager.getObject} instead.
         */
        getObject(type: "small_scenery", index: number): SmallSceneryObject;

        /**
         * @deprecated Use {@link ObjectManager.getObject} instead.
         */
        getObject(type: "music", index: number): LoadedObject;

        /**
         * @deprecated Use {@link ObjectManager.getAllObjects} instead.
         */
        getAllObjects(type: ObjectType): LoadedImageObject[];

        /**
         * @deprecated Use {@link ObjectManager.getAllObjects} instead.
         */
        getAllObjects(type: "ride"): RideObject[];

        /**
         * @deprecated Use {@link ObjectManager.getAllObjects} instead.
         */
        getAllObjects(type: "music"): LoadedObject[];

        /**
         * Gets the {@link TrackSegment} for the given type.
         * @param type The track segment type.
         */
        getTrackSegment(type: number): TrackSegment | null;

        getAllTrackSegments(): TrackSegment[];

        /**
         * Gets the image number for the given icon.
         * @param iconName The name of the icon.
         */
        getIcon(iconName: IconName): number;

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
        registerAction<T = object>(
            action: string,
            query: (args: GameActionEventArgs<T>) => GameActionResult,
            execute: (args: GameActionEventArgs<T>) => GameActionResult,
        ): void;

        /**
         * Query the result of running a game action. This allows you to check the outcome and validity of
         * an action without actually executing it.
         * @param action The name of the action.
         * @param args The action parameters.
         * @param callback The function to be called with the result of the action.
         */
        queryAction(action: string, args: object, callback?: (result: GameActionResult) => void): void;
        queryAction(action: ActionType, args: object, callback?: (result: GameActionResult) => void): void;
        queryAction(
            action: "balloonpress",
            args: BalloonPressArgs,
            callback?: (result: GameActionResult) => void,
        ): void;
        queryAction(
            action: "bannerplace",
            args: BannerPlaceArgs,
            callback?: (result: BannerCreateActionResult) => void,
        ): void;
        queryAction(
            action: "bannerremove",
            args: BannerRemoveArgs,
            callback?: (result: GameActionResult) => void,
        ): void;
        queryAction(
            action: "bannersetcolour",
            args: BannerSetColourArgs,
            callback?: (result: GameActionResult) => void,
        ): void;
        queryAction(
            action: "bannersetname",
            args: BannerSetNameArgs,
            callback?: (result: GameActionResult) => void,
        ): void;
        queryAction(
            action: "bannersetstyle",
            args: BannerSetStyleArgs,
            callback?: (result: GameActionResult) => void,
        ): void;
        queryAction(action: "cheatset", args: CheatSetArgs, callback?: (result: GameActionResult) => void): void;
        queryAction(
            action: "clearscenery",
            args: ClearSceneryArgs,
            callback?: (result: GameActionResult) => void,
        ): void;
        queryAction(action: "climateset", args: ClimateSetArgs, callback?: (result: GameActionResult) => void): void;
        queryAction(
            action: "footpathadditionplace",
            args: FootpathAdditionPlaceArgs,
            callback?: (result: GameActionResult) => void,
        ): void;
        queryAction(
            action: "footpathadditionremove",
            args: FootpathAdditionRemoveArgs,
            callback?: (result: GameActionResult) => void,
        ): void;
        queryAction(
            action: "footpathplace",
            args: FootpathPlaceArgs,
            callback?: (result: GameActionResult) => void,
        ): void;
        queryAction(
            action: "footpathlayoutplace",
            args: FootpathLayoutPlaceArgs,
            callback?: (result: GameActionResult) => void,
        ): void;
        queryAction(
            action: "footpathremove",
            args: FootpathRemoveArgs,
            callback?: (result: GameActionResult) => void,
        ): void;
        queryAction(
            action: "gamesetspeed",
            args: GameSetSpeedArgs,
            callback?: (result: GameActionResult) => void,
        ): void;
        queryAction(
            action: "guestsetflags",
            args: GuestSetFlagsArgs,
            callback?: (result: GameActionResult) => void,
        ): void;
        queryAction(
            action: "guestsetname",
            args: GuestSetNameArgs,
            callback?: (result: GameActionResult) => void,
        ): void;
        queryAction(
            action: "landbuyrights",
            args: LandBuyRightsArgs,
            callback?: (result: GameActionResult) => void,
        ): void;
        queryAction(action: "landlower", args: LandLowerArgs, callback?: (result: GameActionResult) => void): void;
        queryAction(action: "landraise", args: LandRaiseArgs, callback?: (result: GameActionResult) => void): void;
        queryAction(
            action: "landsetheight",
            args: LandSetHeightArgs,
            callback?: (result: GameActionResult) => void,
        ): void;
        queryAction(
            action: "landsetrights",
            args: LandSetRightsArgs,
            callback?: (result: GameActionResult) => void,
        ): void;
        queryAction(action: "landsmooth", args: LandSmoothArgs, callback?: (result: GameActionResult) => void): void;
        queryAction(
            action: "largesceneryplace",
            args: LargeSceneryPlaceArgs,
            callback?: (result: BannerCreateActionResult) => void,
        ): void;
        queryAction(
            action: "largesceneryremove",
            args: LargeSceneryRemoveArgs,
            callback?: (result: GameActionResult) => void,
        ): void;
        queryAction(
            action: "largescenerysetcolour",
            args: LargeScenerySetColourArgs,
            callback?: (result: GameActionResult) => void,
        ): void;
        queryAction(action: "loadorquit", args: LoadOrQuitArgs, callback?: (result: GameActionResult) => void): void;
        queryAction(
            action: "mapchangesize",
            args: MapChangeSizeArgs,
            callback?: (result: GameActionResult) => void,
        ): void;
        queryAction(
            action: "mazeplacetrack",
            args: MazePlaceTrackArgs,
            callback?: (result: GameActionResult) => void,
        ): void;
        queryAction(
            action: "mazesettrack",
            args: MazeSetTrackArgs,
            callback?: (result: GameActionResult) => void,
        ): void;
        queryAction(
            action: "networkmodifygroup",
            args: NetworkModifyGroupArgs,
            callback?: (result: GameActionResult) => void,
        ): void;
        queryAction(
            action: "parkentranceplace",
            args: ParkEntrancePlaceArgs,
            callback?: (result: GameActionResult) => void,
        ): void;
        queryAction(
            action: "parkentranceremove",
            args: ParkEntranceRemoveArgs,
            callback?: (result: GameActionResult) => void,
        ): void;
        queryAction(
            action: "parkmarketing",
            args: ParkMarketingArgs,
            callback?: (result: GameActionResult) => void,
        ): void;
        queryAction(action: "parksetdate", args: ParkSetDateArgs, callback?: (result: GameActionResult) => void): void;
        queryAction(
            action: "parksetentrancefee",
            args: ParkSetEntranceFeeArgs,
            callback?: (result: GameActionResult) => void,
        ): void;
        queryAction(action: "parksetloan", args: ParkSetLoanArgs, callback?: (result: GameActionResult) => void): void;
        queryAction(action: "parksetname", args: ParkSetNameArgs, callback?: (result: GameActionResult) => void): void;
        queryAction(
            action: "parksetparameter",
            args: ParkSetParameterArgs,
            callback?: (result: GameActionResult) => void,
        ): void;
        queryAction(
            action: "parksetresearchfunding",
            args: ParkSetResearchFundingArgs,
            callback?: (result: GameActionResult) => void,
        ): void;
        queryAction(action: "pausetoggle", args: PauseToggleArgs, callback?: (result: GameActionResult) => void): void;
        queryAction(action: "peeppickup", args: PeepPickupArgs, callback?: (result: GameActionResult) => void): void;
        queryAction(
            action: "peepspawnplace",
            args: PeepSpawnPlaceArgs,
            callback?: (result: GameActionResult) => void,
        ): void;
        queryAction(action: "playerkick", args: PlayerKickArgs, callback?: (result: GameActionResult) => void): void;
        queryAction(
            action: "playersetgroup",
            args: PlayerSetGroupArgs,
            callback?: (result: GameActionResult) => void,
        ): void;
        queryAction(
            action: "ridecreate",
            args: RideCreateArgs,
            callback?: (result: RideCreateActionResult) => void,
        ): void;
        queryAction(
            action: "ridedemolish",
            args: RideDemolishArgs,
            callback?: (result: GameActionResult) => void,
        ): void;
        queryAction(
            action: "rideentranceexitplace",
            args: RideEntranceExitPlaceArgs,
            callback?: (result: GameActionResult) => void,
        ): void;
        queryAction(
            action: "rideentranceexitremove",
            args: RideEntranceExitRemoveArgs,
            callback?: (result: GameActionResult) => void,
        ): void;
        queryAction(
            action: "ridefreezerating",
            args: RideFreezeRatingArgs,
            callback?: (result: GameActionResult) => void,
        ): void;
        queryAction(
            action: "ridesetappearance",
            args: RideSetAppearanceArgs,
            callback?: (result: GameActionResult) => void,
        ): void;
        queryAction(
            action: "ridesetcolourscheme",
            args: RideSetColourSchemeArgs,
            callback?: (result: GameActionResult) => void,
        ): void;
        queryAction(action: "ridesetname", args: RideSetNameArgs, callback?: (result: GameActionResult) => void): void;
        queryAction(
            action: "ridesetprice",
            args: RideSetPriceArgs,
            callback?: (result: GameActionResult) => void,
        ): void;
        queryAction(
            action: "ridesetsetting",
            args: RideSetSettingArgs,
            callback?: (result: GameActionResult) => void,
        ): void;
        queryAction(
            action: "ridesetstatus",
            args: RideSetStatusArgs,
            callback?: (result: GameActionResult) => void,
        ): void;
        queryAction(
            action: "ridesetvehicle",
            args: RideSetVehicleArgs,
            callback?: (result: GameActionResult) => void,
        ): void;
        queryAction(
            action: "scenariosetsetting",
            args: ScenarioSetSettingArgs,
            callback?: (result: GameActionResult) => void,
        ): void;
        queryAction(action: "signsetname", args: SignSetNameArgs, callback?: (result: GameActionResult) => void): void;
        queryAction(
            action: "signsetstyle",
            args: SignSetStyleArgs,
            callback?: (result: GameActionResult) => void,
        ): void;
        queryAction(
            action: "smallsceneryplace",
            args: SmallSceneryPlaceArgs,
            callback?: (result: GameActionResult) => void,
        ): void;
        queryAction(
            action: "smallsceneryremove",
            args: SmallSceneryRemoveArgs,
            callback?: (result: GameActionResult) => void,
        ): void;
        queryAction(
            action: "smallscenerysetcolour",
            args: SmallScenerySetColourArgs,
            callback?: (result: GameActionResult) => void,
        ): void;
        queryAction(action: "stafffire", args: StaffFireArgs, callback?: (result: GameActionResult) => void): void;
        queryAction(
            action: "staffhire",
            args: StaffHireArgs,
            callback?: (result: StaffHireNewActionResult) => void,
        ): void;
        queryAction(
            action: "staffsetcolour",
            args: StaffSetColourArgs,
            callback?: (result: GameActionResult) => void,
        ): void;
        queryAction(
            action: "staffsetcostume",
            args: StaffSetCostumeArgs,
            callback?: (result: GameActionResult) => void,
        ): void;
        queryAction(
            action: "staffsetname",
            args: StaffSetNameArgs,
            callback?: (result: GameActionResult) => void,
        ): void;
        queryAction(
            action: "staffsetorders",
            args: StaffSetOrdersArgs,
            callback?: (result: GameActionResult) => void,
        ): void;
        queryAction(
            action: "staffsetpatrolarea",
            args: StaffSetPatrolAreaArgs,
            callback?: (result: GameActionResult) => void,
        ): void;
        queryAction(
            action: "surfacesetstyle",
            args: SurfaceSetStyleArgs,
            callback?: (result: GameActionResult) => void,
        ): void;
        queryAction(action: "tilemodify", args: TileModifyArgs, callback?: (result: GameActionResult) => void): void;
        queryAction(action: "trackdesign", args: TrackDesignArgs, callback?: (result: GameActionResult) => void): void;
        queryAction(action: "trackplace", args: TrackPlaceArgs, callback?: (result: GameActionResult) => void): void;
        queryAction(action: "trackremove", args: TrackRemoveArgs, callback?: (result: GameActionResult) => void): void;
        queryAction(
            action: "tracksetbrakespeed",
            args: TrackSetBrakeSpeedArgs,
            callback?: (result: GameActionResult) => void,
        ): void;
        queryAction(
            action: "wallplace",
            args: WallPlaceArgs,
            callback?: (result: BannerCreateActionResult) => void,
        ): void;
        queryAction(action: "wallremove", args: WallRemoveArgs, callback?: (result: GameActionResult) => void): void;
        queryAction(
            action: "wallsetcolour",
            args: WallSetColourArgs,
            callback?: (result: GameActionResult) => void,
        ): void;
        queryAction(action: "waterlower", args: WaterLowerArgs, callback?: (result: GameActionResult) => void): void;
        queryAction(action: "waterraise", args: WaterRaiseArgs, callback?: (result: GameActionResult) => void): void;
        queryAction(
            action: "watersetheight",
            args: WaterSetHeightArgs,
            callback?: (result: GameActionResult) => void,
        ): void;

        /**
         * Executes a game action. In a network game, this will send a request to the server and wait
         * for the server to reply.
         * @param action The name of the action.
         * @param args The action parameters.
         * @param callback The function to be called with the result of the action.
         */
        executeAction(action: string, args: object, callback?: (result: GameActionResult) => void): void;
        executeAction(action: ActionType, args: object, callback?: (result: GameActionResult) => void): void;
        executeAction(
            action: "balloonpress",
            args: BalloonPressArgs,
            callback?: (result: GameActionResult) => void,
        ): void;
        executeAction(
            action: "bannerplace",
            args: BannerPlaceArgs,
            callback?: (result: BannerCreateActionResult) => void,
        ): void;
        executeAction(
            action: "bannerremove",
            args: BannerRemoveArgs,
            callback?: (result: GameActionResult) => void,
        ): void;
        executeAction(
            action: "bannersetcolour",
            args: BannerSetColourArgs,
            callback?: (result: GameActionResult) => void,
        ): void;
        executeAction(
            action: "bannersetname",
            args: BannerSetNameArgs,
            callback?: (result: GameActionResult) => void,
        ): void;
        executeAction(
            action: "bannersetstyle",
            args: BannerSetStyleArgs,
            callback?: (result: GameActionResult) => void,
        ): void;
        executeAction(action: "cheatset", args: CheatSetArgs, callback?: (result: GameActionResult) => void): void;
        executeAction(
            action: "clearscenery",
            args: ClearSceneryArgs,
            callback?: (result: GameActionResult) => void,
        ): void;
        executeAction(action: "climateset", args: ClimateSetArgs, callback?: (result: GameActionResult) => void): void;
        executeAction(
            action: "footpathadditionplace",
            args: FootpathAdditionPlaceArgs,
            callback?: (result: GameActionResult) => void,
        ): void;
        executeAction(
            action: "footpathadditionremove",
            args: FootpathAdditionRemoveArgs,
            callback?: (result: GameActionResult) => void,
        ): void;
        executeAction(
            action: "footpathplace",
            args: FootpathPlaceArgs,
            callback?: (result: GameActionResult) => void,
        ): void;
        executeAction(
            action: "footpathlayoutplace",
            args: FootpathLayoutPlaceArgs,
            callback?: (result: GameActionResult) => void,
        ): void;
        executeAction(
            action: "footpathremove",
            args: FootpathRemoveArgs,
            callback?: (result: GameActionResult) => void,
        ): void;
        executeAction(
            action: "gamesetspeed",
            args: GameSetSpeedArgs,
            callback?: (result: GameActionResult) => void,
        ): void;
        executeAction(
            action: "guestsetflags",
            args: GuestSetFlagsArgs,
            callback?: (result: GameActionResult) => void,
        ): void;
        executeAction(
            action: "guestsetname",
            args: GuestSetNameArgs,
            callback?: (result: GameActionResult) => void,
        ): void;
        executeAction(
            action: "landbuyrights",
            args: LandBuyRightsArgs,
            callback?: (result: GameActionResult) => void,
        ): void;
        executeAction(action: "landlower", args: LandLowerArgs, callback?: (result: GameActionResult) => void): void;
        executeAction(action: "landraise", args: LandRaiseArgs, callback?: (result: GameActionResult) => void): void;
        executeAction(
            action: "landsetheight",
            args: LandSetHeightArgs,
            callback?: (result: GameActionResult) => void,
        ): void;
        executeAction(
            action: "landsetrights",
            args: LandSetRightsArgs,
            callback?: (result: GameActionResult) => void,
        ): void;
        executeAction(action: "landsmooth", args: LandSmoothArgs, callback?: (result: GameActionResult) => void): void;
        executeAction(
            action: "largesceneryplace",
            args: LargeSceneryPlaceArgs,
            callback?: (result: BannerCreateActionResult) => void,
        ): void;
        executeAction(
            action: "largesceneryremove",
            args: LargeSceneryRemoveArgs,
            callback?: (result: GameActionResult) => void,
        ): void;
        executeAction(
            action: "largescenerysetcolour",
            args: LargeScenerySetColourArgs,
            callback?: (result: GameActionResult) => void,
        ): void;
        executeAction(action: "loadorquit", args: LoadOrQuitArgs, callback?: (result: GameActionResult) => void): void;
        executeAction(
            action: "mapchangesize",
            args: MapChangeSizeArgs,
            callback?: (result: GameActionResult) => void,
        ): void;
        executeAction(
            action: "mazeplacetrack",
            args: MazePlaceTrackArgs,
            callback?: (result: GameActionResult) => void,
        ): void;
        executeAction(
            action: "mazesettrack",
            args: MazeSetTrackArgs,
            callback?: (result: GameActionResult) => void,
        ): void;
        executeAction(
            action: "networkmodifygroup",
            args: NetworkModifyGroupArgs,
            callback?: (result: GameActionResult) => void,
        ): void;
        executeAction(
            action: "parkentranceplace",
            args: ParkEntrancePlaceArgs,
            callback?: (result: GameActionResult) => void,
        ): void;
        executeAction(
            action: "parkentranceremove",
            args: ParkEntranceRemoveArgs,
            callback?: (result: GameActionResult) => void,
        ): void;
        executeAction(
            action: "parkmarketing",
            args: ParkMarketingArgs,
            callback?: (result: GameActionResult) => void,
        ): void;
        executeAction(
            action: "parksetdate",
            args: ParkSetDateArgs,
            callback?: (result: GameActionResult) => void,
        ): void;
        executeAction(
            action: "parksetentrancefee",
            args: ParkSetEntranceFeeArgs,
            callback?: (result: GameActionResult) => void,
        ): void;
        executeAction(
            action: "parksetloan",
            args: ParkSetLoanArgs,
            callback?: (result: GameActionResult) => void,
        ): void;
        executeAction(
            action: "parksetname",
            args: ParkSetNameArgs,
            callback?: (result: GameActionResult) => void,
        ): void;
        executeAction(
            action: "parksetparameter",
            args: ParkSetParameterArgs,
            callback?: (result: GameActionResult) => void,
        ): void;
        executeAction(
            action: "parksetresearchfunding",
            args: ParkSetResearchFundingArgs,
            callback?: (result: GameActionResult) => void,
        ): void;
        executeAction(
            action: "pausetoggle",
            args: PauseToggleArgs,
            callback?: (result: GameActionResult) => void,
        ): void;
        executeAction(action: "peeppickup", args: PeepPickupArgs, callback?: (result: GameActionResult) => void): void;
        executeAction(
            action: "peepspawnplace",
            args: PeepSpawnPlaceArgs,
            callback?: (result: GameActionResult) => void,
        ): void;
        executeAction(action: "playerkick", args: PlayerKickArgs, callback?: (result: GameActionResult) => void): void;
        executeAction(
            action: "playersetgroup",
            args: PlayerSetGroupArgs,
            callback?: (result: GameActionResult) => void,
        ): void;
        executeAction(
            action: "ridecreate",
            args: RideCreateArgs,
            callback?: (result: RideCreateActionResult) => void,
        ): void;
        executeAction(
            action: "ridedemolish",
            args: RideDemolishArgs,
            callback?: (result: GameActionResult) => void,
        ): void;
        executeAction(
            action: "rideentranceexitplace",
            args: RideEntranceExitPlaceArgs,
            callback?: (result: GameActionResult) => void,
        ): void;
        executeAction(
            action: "rideentranceexitremove",
            args: RideEntranceExitRemoveArgs,
            callback?: (result: GameActionResult) => void,
        ): void;
        executeAction(
            action: "ridefreezerating",
            args: RideFreezeRatingArgs,
            callback?: (result: GameActionResult) => void,
        ): void;
        executeAction(
            action: "ridesetappearance",
            args: RideSetAppearanceArgs,
            callback?: (result: GameActionResult) => void,
        ): void;
        executeAction(
            action: "ridesetcolourscheme",
            args: RideSetColourSchemeArgs,
            callback?: (result: GameActionResult) => void,
        ): void;
        executeAction(
            action: "ridesetname",
            args: RideSetNameArgs,
            callback?: (result: GameActionResult) => void,
        ): void;
        executeAction(
            action: "ridesetprice",
            args: RideSetPriceArgs,
            callback?: (result: GameActionResult) => void,
        ): void;
        executeAction(
            action: "ridesetsetting",
            args: RideSetSettingArgs,
            callback?: (result: GameActionResult) => void,
        ): void;
        executeAction(
            action: "ridesetstatus",
            args: RideSetStatusArgs,
            callback?: (result: GameActionResult) => void,
        ): void;
        executeAction(
            action: "ridesetvehicle",
            args: RideSetVehicleArgs,
            callback?: (result: GameActionResult) => void,
        ): void;
        executeAction(
            action: "scenariosetsetting",
            args: ScenarioSetSettingArgs,
            callback?: (result: GameActionResult) => void,
        ): void;
        executeAction(
            action: "signsetname",
            args: SignSetNameArgs,
            callback?: (result: GameActionResult) => void,
        ): void;
        executeAction(
            action: "signsetstyle",
            args: SignSetStyleArgs,
            callback?: (result: GameActionResult) => void,
        ): void;
        executeAction(
            action: "smallsceneryplace",
            args: SmallSceneryPlaceArgs,
            callback?: (result: GameActionResult) => void,
        ): void;
        executeAction(
            action: "smallsceneryremove",
            args: SmallSceneryRemoveArgs,
            callback?: (result: GameActionResult) => void,
        ): void;
        executeAction(
            action: "smallscenerysetcolour",
            args: SmallScenerySetColourArgs,
            callback?: (result: GameActionResult) => void,
        ): void;
        executeAction(action: "stafffire", args: StaffFireArgs, callback?: (result: GameActionResult) => void): void;
        executeAction(
            action: "staffhire",
            args: StaffHireArgs,
            callback?: (result: StaffHireNewActionResult) => void,
        ): void;
        executeAction(
            action: "staffsetcolour",
            args: StaffSetColourArgs,
            callback?: (result: GameActionResult) => void,
        ): void;
        executeAction(
            action: "staffsetcostume",
            args: StaffSetCostumeArgs,
            callback?: (result: GameActionResult) => void,
        ): void;
        executeAction(
            action: "staffsetname",
            args: StaffSetNameArgs,
            callback?: (result: GameActionResult) => void,
        ): void;
        executeAction(
            action: "staffsetorders",
            args: StaffSetOrdersArgs,
            callback?: (result: GameActionResult) => void,
        ): void;
        executeAction(
            action: "staffsetpatrolarea",
            args: StaffSetPatrolAreaArgs,
            callback?: (result: GameActionResult) => void,
        ): void;
        executeAction(
            action: "surfacesetstyle",
            args: SurfaceSetStyleArgs,
            callback?: (result: GameActionResult) => void,
        ): void;
        executeAction(action: "tilemodify", args: TileModifyArgs, callback?: (result: GameActionResult) => void): void;
        executeAction(
            action: "trackdesign",
            args: TrackDesignArgs,
            callback?: (result: GameActionResult) => void,
        ): void;
        executeAction(action: "trackplace", args: TrackPlaceArgs, callback?: (result: GameActionResult) => void): void;
        executeAction(
            action: "trackremove",
            args: TrackRemoveArgs,
            callback?: (result: GameActionResult) => void,
        ): void;
        executeAction(
            action: "tracksetbrakespeed",
            args: TrackSetBrakeSpeedArgs,
            callback?: (result: GameActionResult) => void,
        ): void;
        executeAction(
            action: "wallplace",
            args: WallPlaceArgs,
            callback?: (result: BannerCreateActionResult) => void,
        ): void;
        executeAction(action: "wallremove", args: WallRemoveArgs, callback?: (result: GameActionResult) => void): void;
        executeAction(
            action: "wallsetcolour",
            args: WallSetColourArgs,
            callback?: (result: GameActionResult) => void,
        ): void;
        executeAction(action: "waterlower", args: WaterLowerArgs, callback?: (result: GameActionResult) => void): void;
        executeAction(action: "waterraise", args: WaterRaiseArgs, callback?: (result: GameActionResult) => void): void;
        executeAction(
            action: "watersetheight",
            args: WaterSetHeightArgs,
            callback?: (result: GameActionResult) => void,
        ): void;

        /**
         * Subscribes to the given hook.
         */
        subscribe(hook: HookType, callback: Function): IDisposable;

        subscribe(hook: "action.execute", callback: (e: GameActionEventArgs) => void): IDisposable;
        subscribe(hook: "action.location", callback: (e: ActionLocationArgs) => void): IDisposable;
        subscribe(hook: "action.query", callback: (e: GameActionEventArgs) => void): IDisposable;
        subscribe(hook: "guest.generation", callback: (e: GuestGenerationArgs) => void): IDisposable;
        subscribe(hook: "interval.day", callback: () => void): IDisposable;
        subscribe(hook: "interval.tick", callback: () => void): IDisposable;
        subscribe(hook: "map.change", callback: () => void): IDisposable;
        subscribe(hook: "map.save", callback: () => void): IDisposable;
        subscribe(hook: "network.authenticate", callback: (e: NetworkAuthenticateEventArgs) => void): IDisposable;
        subscribe(hook: "network.chat", callback: (e: NetworkChatEventArgs) => void): IDisposable;
        subscribe(hook: "network.join", callback: (e: NetworkEventArgs) => void): IDisposable;
        subscribe(hook: "network.leave", callback: (e: NetworkEventArgs) => void): IDisposable;
        subscribe(hook: "park.guest.softcap.calculate", callback: (e: ParkCalculateGuestCapArgs) => void): IDisposable;
        subscribe(hook: "ride.ratings.calculate", callback: (e: RideRatingsCalculateArgs) => void): IDisposable;
        subscribe(hook: "vehicle.crash", callback: (e: VehicleCrashArgs) => void): IDisposable;

        /**
         * Can only be used in intransient plugins.
         */
        subscribe(hook: "map.changed", callback: () => void): IDisposable;

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
        getAll(namespace?: string): { [name: string]: any };
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

    type GameMode =
        | "normal"
        | "title"
        | "scenario_editor"
        | "track_designer"
        | "track_manager";

    type ObjectType =
        | "ride"
        | "small_scenery"
        | "large_scenery"
        | "wall"
        | "banner"
        | "footpath"
        | "footpath_addition"
        | "scenery_group"
        | "park_entrance"
        | "water"
        | "terrain_surface"
        | "terrain_edge"
        | "station"
        | "music"
        | "footpath_surface"
        | "footpath_railings";

    type HookType =
        | "action.execute"
        | "action.location"
        | "action.query"
        | "guest.generation"
        | "interval.day"
        | "interval.tick"
        | "map.change"
        | "map.changed"
        | "map.save"
        | "network.authenticate"
        | "network.chat"
        | "network.join"
        | "network.leave"
        | "park.guest.softcap.calculate"
        | "ride.ratings.calculate"
        | "vehicle.crash";

    type ExpenditureType =
        | "ride_construction"
        | "ride_runningcosts"
        | "land_purchase"
        | "landscaping"
        | "park_entrance_tickets"
        | "park_ride_tickets"
        | "shop_sales"
        | "shop_stock"
        | "food_drink_sales"
        | "food_drink_stock"
        | "wages"
        | "marketing"
        | "research"
        | "interest";

    type ActionType =
        | "balloonpress"
        | "bannerplace"
        | "bannerremove"
        | "bannersetcolour"
        | "bannersetname"
        | "bannersetstyle"
        | "cheatset"
        | "clearscenery"
        | "climateset"
        | "footpathadditionplace"
        | "footpathadditionremove"
        | "footpathplace"
        | "footpathlayoutplace"
        | "footpathremove"
        | "gamesetspeed"
        | "guestsetflags"
        | "guestsetname"
        | "landbuyrights"
        | "landlower"
        | "landraise"
        | "landsetheight"
        | "landsetrights"
        | "landsmooth"
        | "largesceneryplace"
        | "largesceneryremove"
        | "largescenerysetcolour"
        | "loadorquit"
        | "mapchangesize"
        | "mazeplacetrack"
        | "mazesettrack"
        | "networkmodifygroup"
        | "parkentranceplace"
        | "parkentranceremove"
        | "parkmarketing"
        | "parksetdate"
        | "parksetentrancefee"
        | "parksetloan"
        | "parksetname"
        | "parksetparameter"
        | "parksetresearchfunding"
        | "pausetoggle"
        | "peeppickup"
        | "peepspawnplace"
        | "playerkick"
        | "playersetgroup"
        | "ridecreate"
        | "ridedemolish"
        | "rideentranceexitplace"
        | "rideentranceexitremove"
        | "ridefreezerating"
        | "ridesetappearance"
        | "ridesetcolourscheme"
        | "ridesetname"
        | "ridesetprice"
        | "ridesetsetting"
        | "ridesetstatus"
        | "ridesetvehicle"
        | "scenariosetsetting"
        | "signsetname"
        | "signsetstyle"
        | "smallsceneryplace"
        | "smallsceneryremove"
        | "smallscenerysetcolour"
        | "stafffire"
        | "staffhire"
        | "staffsetcolour"
        | "staffsetcostume"
        | "staffsetname"
        | "staffsetorders"
        | "staffsetpatrolarea"
        | "surfacesetstyle"
        | "tilemodify"
        | "trackdesign"
        | "trackplace"
        | "trackremove"
        | "tracksetbrakespeed"
        | "wallplace"
        | "wallremove"
        | "wallsetcolour"
        | "waterlower"
        | "waterraise"
        | "watersetheight";

    interface GameActionArgs {
        flags?: number; // see GAME_COMMAND in openrct2/Game.h
    }

    interface BalloonPressArgs extends GameActionArgs {
        id: number;
    }

    interface BannerPlaceArgs extends GameActionArgs {
        x: number;
        y: number;
        z: number;
        direction: number;
        object: number;
        primaryColour: number;
    }

    interface BannerRemoveArgs extends GameActionArgs {
        x: number;
        y: number;
        z: number;
        direction: number;
    }

    interface BannerSetColourArgs extends GameActionArgs {
        x: number;
        y: number;
        z: number;
        direction: number;
        primaryColour: number;
    }

    interface BannerSetNameArgs extends GameActionArgs {
        id: number;
        name: string;
    }

    interface BannerSetStyleArgs extends GameActionArgs {
        id: number;
        type: number; // 0: primary colour, 1: secondary colour: 2: no entry
        parameter: number; // primary colour | secondary colour | 0: disable, 1: enable
    }

    interface CheatSetArgs extends GameActionArgs {
        type: number; // see CheatType in openrct2/Cheats.h
        param1: number; // see openrct2/actions/CheatSetAction.cpp
        param2: number; // see openrct2/actions/CheatSetAction.cpp
    }

    interface ClearSceneryArgs extends GameActionArgs {
        itemsToClear: number; // Bit mask. 1: small scenery and walls, 2: large scenery, 4: footpaths.
    }

    interface ClimateSetArgs extends GameActionArgs {
        climate: number; // 0: cool and wet, 1: warm, 2: hot and dry, 3: cold
    }

    interface FootpathAdditionPlaceArgs extends GameActionArgs {
        x: number;
        y: number;
        z: number;
        object: number;
    }

    interface FootpathAdditionRemoveArgs extends GameActionArgs {
        x: number;
        y: number;
        z: number;
    }

    interface FootpathPlaceArgs extends GameActionArgs {
        x: number;
        y: number;
        z: number;
        direction: number; // direction or 0xFF
        object: number; // surface object
        railingsObject: number;
        slope: number; // 0: flat, 4,5,6,7: slope direction + 4
        constructFlags: number;
    }

    // see openrct2/actions/FootpathPlaceFromTrackAction
    interface FootpathLayoutPlaceArgs extends GameActionArgs {
        x: number;
        y: number;
        z: number;
        edges: number; // bit mask
        object: number;
        railingsObject: number;
        slope: number; // 0: flat, 4,5,6,7: slope direction + 4
        constructFlags: number;
    }

    interface FootpathRemoveArgs extends GameActionArgs {
        x: number;
        y: number;
        z: number;
    }

    interface GameSetSpeedArgs extends GameActionArgs {
        speed: number;
    }

    // recommendation: use Peep.setFlag instead of the GuestSetFlag action
    interface GuestSetFlagsArgs extends GameActionArgs {
        peep: number;
        guestFlags: number; // see PEEP_FLAGS in openrct2/entity/Peep.h
    }

    interface GuestSetNameArgs extends GameActionArgs {
        peep: number;
        name: string;
    }

    interface LandBuyRightsArgs extends GameActionArgs {
        x1: number;
        y1: number;
        x2: number;
        y2: number;
        setting: number; // 0: buy land, 1: buy construction rights
    }

    // x, y specify the centre. Only used for GameActionResult and 3D audio position.
    // x1, y1, x2, y2 specify a map range
    interface LandLowerArgs extends GameActionArgs {
        x: number;
        y: number;
        x1: number;
        y1: number;
        x2: number;
        y2: number;
        selectionType: number; // see MAP_SELECT_TYPE in openrct2/world/Map.h
    }

    // x, y specify the centre. Only used for GameActionResult and 3D audio position.
    // x1, y1, x2, y2 specify a map range
    interface LandRaiseArgs extends GameActionArgs {
        x: number;
        y: number;
        x1: number;
        y1: number;
        x2: number;
        y2: number;
        selectionType: number; // see MAP_SELECT_TYPE in openrct2/world/Map.h
    }

    interface LandSetHeightArgs extends GameActionArgs {
        x: number;
        y: number;
        height: number;
        style: number; // see openrct2/world/tile_element/Slope.h
    }

    interface LandSetRightsArgs extends GameActionArgs {
        x1: number;
        y1: number;
        x2: number;
        y2: number;
        setting: number; // 0: unown land, 1: unown construction rights, 2: set for sale, 3: set construction rights for sale, 4: set ownership
        ownership: number; // only used if setting = 4 (set ownership). See OWNERSHIP in openrct2/world/Surface.h
    }

    // x, y specify the centre. Only used for GameActionResult and 3D audio position.
    // x1, y1, x2, y2 specify a map range
    interface LandSmoothArgs extends GameActionArgs {
        x: number;
        y: number;
        x1: number;
        y1: number;
        x2: number;
        y2: number;
        selectionType: number; // see MAP_SELECT_TYPE in openrct2/world/Map.h
        isLowering: boolean;
    }

    interface LargeSceneryPlaceArgs extends GameActionArgs {
        x: number;
        y: number;
        z: number;
        direction: number;
        object: number;
        primaryColour: number;
        secondaryColour: number;
        tertiaryColour: number;
    }

    interface LargeSceneryRemoveArgs extends GameActionArgs {
        x: number;
        y: number;
        z: number;
        direction: number;
        tileIndex: number;
    }

    interface LargeScenerySetColourArgs extends GameActionArgs {
        x: number;
        y: number;
        z: number;
        direction: number;
        tileIndex: number;
        primaryColour: number;
        secondaryColour: number;
        tertiaryColour: number;
    }

    interface LoadOrQuitArgs extends GameActionArgs {
        mode: number; // 0: open save prompt, 1: close save prompt
        savePromptMode: number; // 0: save before load, 1: save before quit. Only used if mode = 0 (open save prompt).
    }

    interface MapChangeSizeArgs extends GameActionArgs {
        targetSizeX: number;
        targetSizeY: number;
        shiftX: number;
        shiftY: number;
    }

    interface MazePlaceTrackArgs extends GameActionArgs {
        x: number;
        y: number;
        z: number;
        ride: number;
        mazeEntry: number;
    }

    interface MazeSetTrackArgs extends GameActionArgs {
        x: number;
        y: number;
        z: number;
        direction: number;
        ride: number;
        mode: number; // 0: build, 1: move, 2: fill
        isInitialPlacement: boolean;
    }

    interface NetworkModifyGroupArgs extends GameActionArgs {
        type: number; // 0: add group, 1: remove group, 2: set permissions, 3: set name, 4: set default
        groupId: number; // ignored if type = 0 (add group)
        name: string; // only used if type = 3 (set name)
        permissionIndex: number; // only used if type = 2 (set permissions). See NetworkPermission in openrct2/network/NetworkAction.h
        permissionState: number; // only used if type = 2 (set permissions). 0: toggle, 1: set all, 2: clear all
    }

    interface ParkEntrancePlaceArgs extends GameActionArgs {
        x: number;
        y: number;
        z: number;
        direction: number;
        footpathSurfaceObject: number;
    }

    interface ParkEntranceRemoveArgs extends GameActionArgs {
        x: number;
        y: number;
        z: number;
    }

    interface ParkMarketingArgs extends GameActionArgs {
        type: number; // see ADVERTISING_CAMPAIGN in openrct2/management/Marketing.h
        item: number; // ride id or shop item. See ShopItem in openrct2/ride/ShopItem.h
        numweeks: number;
    }

    interface ParkSetDateArgs extends GameActionArgs {
        year: number;
        month: number;
        day: number;
    }

    interface ParkSetEntranceFeeArgs extends GameActionArgs {
        value: number;
    }

    interface ParkSetLoanArgs extends GameActionArgs {
        value: number;
    }

    interface ParkSetNameArgs extends GameActionArgs {
        name: string;
    }

    interface ParkSetParameterArgs extends GameActionArgs {
        parameter: number; // 0: close park, 1: open park, 2: set same price in park
        value: number; // only used if parameter = 2 (set same price in park). Bit mask. See ShopItem in openrct2/ride/ShopItem.h
    }

    interface ParkSetResearchFundingArgs extends GameActionArgs {
        priorities: number; // bit mask. See ResearchCategory in openrct2/management/Research.h
        fundingAmount: number; // 0: none, 1: minimal, 2: normal, 3: maximum
    }

    interface PauseToggleArgs extends GameActionArgs {
    }

    interface PeepPickupArgs extends GameActionArgs {
        type: number; // 0: pickup, 1: cancel, 2: place
        id: number;
        x: number; // unused if type = 0. If type = 1 (cancel), this needs to be the peep's x position BEFORE pickup
        y: number; // only used if type = 2 (place)
        z: number; // only used if type = 2 (place)
        playerId: number; // 0 in single player
    }

    interface PeepSpawnPlaceArgs extends GameActionArgs {
        x: number;
        y: number;
        z: number;
        direction: number;
    }

    interface PlayerKickArgs extends GameActionArgs {
        playerId: number;
    }

    interface PlayerSetGroupArgs extends GameActionArgs {
        playerId: number;
        groupId: number;
    }

    interface RideCreateArgs extends GameActionArgs {
        rideType: number;
        rideObject: number;
        entranceObject: number;
        colour1: number;
        colour2: number;
    }

    interface RideDemolishArgs extends GameActionArgs {
        ride: number;
        modifyType: number; // 0: demolish, 1: renew
    }

    interface RideEntranceExitPlaceArgs extends GameActionArgs {
        x: number;
        y: number;
        direction: number;
        ride: number;
        station: number;
        isExit: boolean;
    }

    interface RideEntranceExitRemoveArgs extends GameActionArgs {
        x: number;
        y: number;
        ride: number;
        station: number;
        isExit: boolean;
    }

    interface RideFreezeRatingArgs extends GameActionArgs {
        ride: number;
        type: number; // 0: excitement, 1: intensity, 2: nausea
        value: number;
    }

    interface RideSetAppearanceArgs extends GameActionArgs {
        ride: number;
        type: number; // see RideSetAppearanceType in openrct2/actions/RideSetAppearanceAction.h
        // value:
        // - if type is one of the track or vehicle colours: colour
        // - if type is VehicleColourScheme: 0: all same, 1: per train, 2: per car
        // - if type is EntranceStyle: entrance style
        // - if type is SellingItemColourIsRandom: 0: disabled, 1: enabled
        value: number;
        index: number; // colour scheme index, only used if type is one of the track or vehicle colours
    }

    interface RideSetColourSchemeArgs extends GameActionArgs {
        x: number;
        y: number;
        z: number;
        direction: number;
        trackType: number;
        colourScheme: number;
    }

    interface RideSetNameArgs extends GameActionArgs {
        ride: number;
        name: string;
    }

    interface RideSetPriceArgs extends GameActionArgs {
        ride: number;
        price: number;
        isPrimaryPrice: boolean;
    }

    interface RideSetSettingArgs extends GameActionArgs {
        ride: number;
        setting: number; // see RideSetSetting in openrct2/actions/RideSetSettingAction.h
        value: number;
    }

    interface RideSetStatusArgs extends GameActionArgs {
        ride: number;
        status: number; // 0: closed, 1: open, 2: testing, 3: simulating
    }

    interface RideSetVehicleArgs extends GameActionArgs {
        ride: number;
        type: number; // 0: number of trains, 1: number of cars per train, 2: ride entry
        value: number; // number value or sub type
        colour: number; // only used if type is ride entry
    }

    interface ScenarioSetSettingArgs extends GameActionArgs {
        setting: number; // see ScenarioSetSetting in openrct2/actions/ScenarioSetSettingAction.h
        value: number;
    }

    interface SignSetNameArgs extends GameActionArgs {
        id: number;
        name: string;
    }

    interface SignSetStyleArgs extends GameActionArgs {
        id: number;
        mainColour: number;
        textColour: number;
        isLarge: boolean;
    }

    interface SmallSceneryPlaceArgs extends GameActionArgs {
        x: number;
        y: number;
        z: number;
        direction: number;
        object: number;
        quadrant: number;
        primaryColour: number;
        secondaryColour: number;
        tertiaryColour: number;
    }

    interface SmallSceneryRemoveArgs extends GameActionArgs {
        x: number;
        y: number;
        z: number;
        object: number;
        quadrant: number;
    }

    interface SmallScenerySetColourArgs extends GameActionArgs {
        x: number;
        y: number;
        z: number;
        quadrant: number;
        sceneryType: number;
        primaryColour: number;
        secondaryColour: number;
        tertiaryColour: number;
    }

    interface StaffFireArgs extends GameActionArgs {
        id: number;
    }

    interface StaffHireArgs extends GameActionArgs {
        autoPosition: boolean;
        staffType: number; // 0: handyman, 1: mechanic, 2: security, 3: entertainer
        entertainerType: number; // see EntertainerCostume in openrct2/entity/Staff.h
        staffOrders: number; // bit mask. See STAFF_ORDERS in openrct2/entity/Staff.h
    }

    interface StaffSetColourArgs extends GameActionArgs {
        staffType: number; // 0: handyman, 1: mechanic, 2: security, 3: entertainer
        colour: number;
    }

    interface StaffSetCostumeArgs extends GameActionArgs {
        id: number;
        costume: number; // see EntertainerCostume in openrct2/entity/Staff.h
    }

    interface StaffSetNameArgs extends GameActionArgs {
        id: number;
        name: string;
    }

    interface StaffSetOrdersArgs extends GameActionArgs {
        id: number;
        staffOrders: number; // bit mask. See STAFF_ORDERS in openrct2/entity/Staff.h
    }

    interface StaffSetPatrolAreaArgs extends GameActionArgs {
        id: number;
        x1: number;
        y1: number;
        x2: number;
        y2: number;
        mode: number; // 0: set, 1: unset, 2: clear all
    }

    interface SurfaceSetStyleArgs extends GameActionArgs {
        x1: number;
        y1: number;
        x2: number;
        y2: number;
        surfaceStyle: number;
        edgeStyle: number;
    }

    // does not support TileModifyType::AnyPaste
    interface TileModifyArgs extends GameActionArgs {
        x: number;
        y: number;
        setting: number; // see TileModifyType in openrct2/actions/TileModifyAction.h
        value1: number;
        value2: number; // see openrct2/actions/TileModifyAction.cpp
    }

    // currently unsupported
    interface TrackDesignArgs extends GameActionArgs {
        x: number;
        y: number;
        z: number;
        direction: number;
    }

    interface TrackPlaceArgs extends GameActionArgs {
        x: number;
        y: number;
        z: number;
        direction: number;
        ride: number;
        trackType: number;
        rideType: number;
        brakeSpeed: number;
        colour: number;
        seatRotation: number;
        trackPlaceFlags: number;
        isFromTrackDesign: boolean;
    }

    interface TrackRemoveArgs extends GameActionArgs {
        x: number;
        y: number;
        z: number;
        direction: number;
        trackType: number;
        sequence: number;
    }

    interface TrackSetBrakeSpeedArgs extends GameActionArgs {
        x: number;
        y: number;
        z: number;
        trackType: number;
        brakeSpeed: number;
    }

    interface WallPlaceArgs extends GameActionArgs {
        x: number;
        y: number;
        z: number;
        object: number;
        edge: number; // = direction
        primaryColour: number;
        secondaryColour: number;
        tertiaryColour: number;
    }

    interface WallRemoveArgs extends GameActionArgs {
        x: number;
        y: number;
        z: number;
        direction: number;
    }

    interface WallSetColourArgs extends GameActionArgs {
        x: number;
        y: number;
        z: number;
        direction: number;
        primaryColour: number;
        secondaryColour: number;
        tertiaryColour: number;
    }

    interface WaterLowerArgs extends GameActionArgs {
        x1: number;
        y1: number;
        x2: number;
        y2: number;
    }

    interface WaterRaiseArgs extends GameActionArgs {
        x1: number;
        y1: number;
        x2: number;
        y2: number;
    }

    interface WaterSetHeightArgs extends GameActionArgs {
        x: number;
        y: number;
        height: number;
    }

    interface GameActionEventArgs<T = object> {
        readonly player: number;
        readonly type: number;
        readonly action: string;
        readonly isClientOnly: boolean;
        readonly args: T;
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

    interface BannerCreateActionResult extends GameActionResult {
        readonly bannerIndex?: number;
    }

    interface RideCreateActionResult extends GameActionResult {
        readonly ride?: number;
    }

    interface StaffHireNewActionResult extends GameActionResult {
        readonly peep?: number;
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

    interface GuestGenerationArgs {
        readonly id: number;
    }

    type VehicleCrashIntoType = "another_vehicle" | "land" | "water";

    interface VehicleCrashArgs {
        readonly id: number;
        readonly crashIntoType: VehicleCrashIntoType;
    }

    /**
     * The 'suggestedGuestMaximum' field in this interface can be used to override
     * the park's suggested guest cap.
     */
    interface ParkCalculateGuestCapArgs {
        suggestedGuestMaximum: number;
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
        /**
         * @deprecated since version 34, use guest or staff instead.
         */
        getAllEntities(type: "peep"): Peep[];
        getAllEntities(type: "guest"): Guest[];
        getAllEntities(type: "staff"): Staff[];
        getAllEntities(type: "car"): Car[];
        getAllEntities(type: "litter"): Litter[];
        getAllEntitiesOnTile(type: EntityType, tilePos: CoordsXY): Entity[];
        getAllEntitiesOnTile(type: "guest", tilePos: CoordsXY): Guest[];
        getAllEntitiesOnTile(type: "staff", tilePos: CoordsXY): Staff[];
        getAllEntitiesOnTile(type: "car", tilePos: CoordsXY): Car[];
        getAllEntitiesOnTile(type: "litter", tilePos: CoordsXY): Litter[];
        createEntity(type: EntityType, initializer: object): Entity;

        /**
         * Gets a {@link TrackIterator} for the given track element. This can be used to
         * iterate through a ride's circuit, segment by segment.
         * @param location The tile coordinates.
         * @param elementIndex The index of the track element on the tile.
         */
        getTrackIterator(location: CoordsXY, elementIndex: number): TrackIterator | null;
    }

    type TileElementType =
        | "surface"
        | "footpath"
        | "track"
        | "small_scenery"
        | "wall"
        | "entrance"
        | "large_scenery"
        | "banner";

    type Direction = 0 | 1 | 2 | 3;
    type Direction8 = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;

    type TileElement =
        | SurfaceElement
        | FootpathElement
        | TrackElement
        | SmallSceneryElement
        | WallElement
        | EntranceElement
        | LargeSceneryElement
        | BannerElement;

    interface BaseTileElement {
        type: TileElementType;
        baseHeight: number;
        baseZ: number;
        clearanceHeight: number;
        clearanceZ: number;
        occupiedQuadrants: number;
        isGhost: boolean;
        isHidden:
            boolean; /** Take caution when changing this field, it may invalidate TileElements you have stored in your script. */
    }

    interface SurfaceElement extends BaseTileElement {
        type: "surface";

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
        type: "footpath";

        object: number | null; /** Legacy footpaths, still in use. */
        surfaceObject: number | null; /** NSF footpaths */
        railingsObject: number | null; /** NSF footpaths */

        edges: number;
        corners: number;
        slopeDirection: Direction | null;
        isBlockedByVehicle: boolean;
        isWide: boolean;

        isQueue: boolean;
        queueBannerDirection: Direction | null;
        ride: number | null;
        station: number | null;

        addition: number | null;
        additionStatus: number | null;
        isAdditionBroken: boolean | null;
        isAdditionGhost: boolean | null;
    }

    interface TrackElement extends BaseTileElement {
        type: "track";

        direction: Direction;
        trackType: number;
        rideType: number;
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
        isHighlighted: boolean;
    }

    interface SmallSceneryElement extends BaseTileElement {
        type: "small_scenery";

        direction: Direction;
        object: number;
        primaryColour: number;
        secondaryColour: number;
        tertiaryColour: number;
        quadrant: number;
        age: number;
    }

    interface WallElement extends BaseTileElement {
        type: "wall";

        direction: Direction;
        object: number;
        primaryColour: number;
        /** If the element is a banner, this is the text colour. */
        secondaryColour: number;
        tertiaryColour: number;
        slope: Direction;
        /** Writing to bannerIndex is deprecated and may result in uncontrolled behaviour. */
        readonly bannerIndex: number | null;
        /** If the element is a banner, this is its text. */
        bannerText: string | null;
    }

    interface EntranceElement extends BaseTileElement {
        type: "entrance";

        direction: Direction;
        object: number;
        ride: number;
        station: number;
        sequence: number;
        footpathObject: number | null;
        footpathSurfaceObject: number | null;
    }

    interface LargeSceneryElement extends BaseTileElement {
        type: "large_scenery";

        direction: Direction;
        object: number;
        primaryColour: number;
        /** If the element is a banner, this is the text colour. */
        secondaryColour: number;
        tertiaryColour: number;
        sequence: number;
        /** Writing to bannerIndex is deprecated and may result in uncontrolled behaviour. */
        readonly bannerIndex: number | null;
        /** If the element is a banner, this is its text. */
        bannerText: string | null;
    }

    interface BannerElement extends BaseTileElement {
        type: "banner";

        direction: Direction;
        object: number;
        primaryColour: number;
        /** This is the text colour. */
        secondaryColour: number;
        /** Writing to bannerIndex is deprecated and may result in uncontrolled behaviour. */
        readonly bannerIndex: number;
        bannerText: string;
        isNoEntry: boolean;
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
        readonly elements: TileElement[];
        /** Gets the number of tile elements on this tile. */
        readonly numElements: number;
        /**
         * Gets or sets the raw data for this tile.
         * This can provide more control and efficiency for tile manipulation but requires
         * knowledge of tile element structures and may change between versions of OpenRCT2.
         */
        data: Uint8Array;

        /** Gets the tile element at the given index on this tile. */
        getElement(index: number): TileElement;
        /** Gets the tile element at the given index on this tile. */
        getElement<T extends TileElement>(index: number): T;
        /** Inserts a new tile element at the given index on this tile. */
        insertElement(index: number): TileElement;
        /** Removes the tile element at the given index from this tile. */
        removeElement(index: number): void;
    }

    type ObjectSourceGame =
        | "rct1"
        | "added_attractions"
        | "loopy_landscapes"
        | "rct2"
        | "wacky_worlds"
        | "time_twister"
        | "custom"
        | "openrct2_official";

    type ObjectGeneration = "dat" | "json";

    /**
     * Represents an installed OpenRCT2 object which may or may not be currently loaded into the park.
     */
    interface InstalledObject {
        /**
         * The full path of the object file.
         */
        readonly path: string;

        /**
         * Whether the object is an original .DAT file, or a .parkobj / .json file.
         */
        readonly generation: ObjectGeneration;

        /**
         * The object type.
         */
        readonly type: ObjectType;

        /**
         * The original game or expansion pack this object first appeared in.
         */
        readonly sourceGames: ObjectSourceGame[];

        /**
         * The unique identifier of the object, e.g. "rct2.burgb".
         * For legacy DAT objects, the identifier will be in a format similar to "09F55405|DirtGras|B9B19A7F".
         */
        readonly identifier: string;

        /**
         * The original unique identifier of the object, e.g. "BURGB   ".
         * This may have trailing spaces if the name is shorter than 8 characters.
         * Only .DAT objects or JSON objects based on .DAT objects will have legacy identifiers.
         */
        readonly legacyIdentifier: string | null;

        /**
         * The object version, e.g. "1.5.2-pre".
         */
        readonly version: string;

        /**
         * Gets the list of authors for the object.
         */
        readonly authors: string[];

        /**
         * The name in the user's current language.
         */
        readonly name: string;
    }

    /**
     * Represents the definition of a loaded object (.DAT or .json) such as ride type or scenery item.
     */
    interface LoadedObject {
        /**
         * Gets a reference to the installed object.
         */
        readonly installedObject: InstalledObject;

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
         * For legacy DAT objects, the identifier will be in a format similar to "09F55405|DirtGras|B9B19A7F".
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
     * Represents the definition of a loaded object that has one or more associated images.
     */
    interface LoadedImageObject extends LoadedObject {
        /**
         * Id of the objects base image. This is also known as the preview image.
         */
        readonly baseImageId: number;

        /**
         * The number of images for this object.
         * Use this in conjunction with the baseImageId to iterate over an objects images.
         */
        readonly numImages: number;
    }

    /**
     * Represents the object definition of a ride or stall.
     */
    interface RideObject extends LoadedImageObject {
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
     * Represents a VehicleSpriteGroup
     */
    interface SpriteGroup {
        readonly imageId: number;
        readonly spriteNumImages: number;
    }

    /**
     * Represents the sprite groups of a vehicle
     */
    interface SpriteGroups {
        readonly slopeFlat?: SpriteGroup;
        readonly slopes12?: SpriteGroup;
        readonly slopes25?: SpriteGroup;
        readonly slopes42?: SpriteGroup;
        readonly slopes60?: SpriteGroup;
        readonly slopes75?: SpriteGroup;
        readonly slopes90?: SpriteGroup;
        readonly slopesLoop?: SpriteGroup;
        readonly slopeInverted?: SpriteGroup;
        readonly slopes8?: SpriteGroup;
        readonly slopes16?: SpriteGroup;
        readonly slopes50?: SpriteGroup;
        readonly flatBanked22?: SpriteGroup;
        readonly flatBanked45?: SpriteGroup;
        readonly flatBanked67?: SpriteGroup;
        readonly flatBanked90?: SpriteGroup;
        readonly inlineTwists?: SpriteGroup;
        readonly slopes12Banked22?: SpriteGroup;
        readonly slopes8Banked22?: SpriteGroup;
        readonly slopes25Banked22?: SpriteGroup;
        readonly slopes8Banked45?: SpriteGroup;
        readonly slopes16Banked22?: SpriteGroup;
        readonly slopes16Banked45?: SpriteGroup;
        readonly slopes25Banked45?: SpriteGroup;
        readonly slopes12Banked45?: SpriteGroup;
        readonly slopes25Banked67?: SpriteGroup;
        readonly slopes25InlineTwists?: SpriteGroup;
        readonly slopes42Banked22?: SpriteGroup;
        readonly slopes42Banked45?: SpriteGroup;
        readonly slopes42Banked90?: SpriteGroup;
        readonly slopes60Banked22?: SpriteGroup;
        readonly corkscrews?: SpriteGroup;
        readonly restraintAnimation?: SpriteGroup;
        readonly curvedLiftHillUp?: SpriteGroup;
        readonly curvedLiftHillDown?: SpriteGroup;
    }

    /**
     * Represents a defined vehicle within a Ride object definition.
     */
    interface RideObjectVehicle {
        readonly rotationFrameMask: number;
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
        readonly spriteGroups: SpriteGroups;
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

    interface SceneryObject extends LoadedImageObject {
        /**
         * A list of scenery groups this object belongs to. This may not contain any
         * scenery groups that contain this object by default. This is typically
         * used for custom objects to be part of existing scenery groups.
         */
        readonly sceneryGroups: string[];
    }

    /**
     * Represents the object definition of a small scenery item such a tree.
     */
    interface SmallSceneryObject extends SceneryObject {
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

    interface LargeSceneryObject extends SceneryObject {
    }

    interface WallObject extends SceneryObject {
    }

    interface FootpathAdditionObject extends SceneryObject {
    }

    interface BannerObject extends SceneryObject {
    }

    /**
     * Represents the object definition of a scenery group.
     */
    interface SceneryGroupObject extends LoadedImageObject {
        /**
         * The scenery items that belong to this scenery group.
         */
        readonly items: string[];
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

        /**
         * The percentage of downtime for this ride from 0 to 100.
         */
        readonly downtime: number;

        /**
         * The currently set chain lift speed in miles per hour.
         */
        liftHillSpeed: number;

        /**
         * The max chain lift speed for this ride in miles per hour.
         */
        readonly maxLiftHillSpeed: number;

        /**
         * The min chain lift speed for this ride in miles per hour.
         */
        readonly minLiftHillSpeed: number;

        /**
         * The satisfaction rating of the ride from 0 to 100.
         */
        readonly satisfaction: number;
    }

    type RideClassification = "ride" | "stall" | "facility";

    type RideStatus = "closed" | "open" | "testing" | "simulating";

    interface TrackColour {
        main: number;
        additional: number;
        supports: number;
    }

    interface CrashedVehicleColour {
        body: number;
        trim: number;
    }

    interface VehicleColour {
        body: number;
        trim: number;
        tertiary: number;
    }

    interface RideStation {
        start: CoordsXYZ;
        length: number;
        entrance: CoordsXYZD;
        exit: CoordsXYZD;
    }

    interface TrackSegment {
        /**
         * The track segment type.
         */
        readonly type: number;

        /**
         * Gets the localised description of the track segment.
         */
        readonly description: string;

        /**
         * The relative starting Z position from the base of the first track sequence block.
         */
        readonly beginZ: number;

        /**
         * The relative ending Z position from the base of the first track sequence block.
         */
        readonly endZ: number;

        /**
         * The relative ending X position. BeginX is always 0.
         */
        readonly endX: number;

        /**
         * The relative ending Y position. BeginY is always 0.
         */
        readonly endY: number;

        /**
         * The relative starting direction. Usually 0, but will be 4
         * for diagonal segments.
         */
        readonly beginDirection: Direction8;

        /**
         * The relative ending direction.
         */
        readonly endDirection: Direction8;

        /**
         * The slope angle the segment starts with.
         */
        readonly beginSlope: TrackSlope;

        /**
         * The slope angle the segment ends with.
         */
        readonly endSlope: TrackSlope;

        /**
         * The kind of banking the segment starts with.
         */
        readonly beginBank: TrackBanking;

        /**
         * The kind of banking the segment ends with.
         */
        readonly endBank: TrackBanking;

        /**
         * The rough length of the segment.
         */
        readonly length: number;

        /**
         * Gets a list of the elements that make up the track segment.
         */
        readonly elements: TrackSegmentElement[];

        /**
         * The curve direction of the suggested following piece, or track segment if it is specified.
         */
        readonly nextSuggestedSegment: TrackCurveType | number;

        /**
         * The curve direction of the suggested preceding piece, or track segment if it is specified.
         */
        readonly previousSuggestedSegment: TrackCurveType | number;

        /**
         * The base price of the track segment.
         */
        readonly priceModifier: number;

        /**
         * Track segment representing the mirror image of the track segment.
         */
        readonly mirrorSegment: number | null;

        /**
         * Track segment representing the covered/flume variant of the track segment.
         */
        readonly alternateTypeSegment: number | null;

        /**
         * The group the track element belongs to. Ride types allow or disallow track groups to limit the
         * buildable track segments.
         */
        readonly trackGroup: number;

        /**
         * Which direction the track curves towards.
         */
        readonly turnDirection: TrackCurveType;

        /**
         * Which direction the track slopes towards.
         */
        readonly slopeDirection: TrackSlopeType;

        readonly onlyAllowedUnderwater: boolean;
        readonly onlyAllowedAboveGround: boolean;
        readonly allowsChainLift: boolean;

        /**
         * The track segment counts as banked for vehicles with "no banked track" behaviour.
         */
        readonly isBanked: boolean;

        /**
         * The track segment counts as an inversion for vehicles with "no inversions" behaviour.
         */
        readonly isInversion: boolean;

        /**
         * Pevents steep forward chainlifts but allows steep reverse chainlifts for reverse incline
         * shuttle mode for ride types which do not normally allow steep chainlifts.
         */
        readonly isSteepUp: boolean;

        /**
         * The track segment begins one height unit above normal track height units.
         */
        readonly startsHalfHeightUp: boolean;

        /**
         * The track segment adds to golf hole counter.
         */
        readonly countsAsGolfHole: boolean;

        /**
         * The track segment adds to banked turn counter.
         */
        readonly isBankedTurn: boolean;

        /**
         * The track segment adds to sloped turn counter.
         */
        readonly isSlopedTurn: boolean;

        /**
         * The track segment adds to helix counter.
         */
        readonly isHelix: boolean;

        /**
         * The track segment adds to inversion counter. Usually applied to the first half of inversions.
         */
        readonly countsAsInversion: boolean;

        /**
         * Gets a length of the subpositions list for this track segment.
         */
        getSubpositionLength(subpositionType: number, direction: Direction): number;

        /**
         * Gets all of the subpositions for this track segment. These subpositions are used for the
         * pathing of vehicles when moving along the track.
         */
        getSubpositions(subpositionType: number, direction: Direction): TrackSubposition[];
    }

    enum TrackSlope {
        None = 0,
        Up25 = 2,
        Up60 = 4,
        Down25 = 6,
        Down60 = 8,
        Up90 = 10,
        Down90 = 18,
    }

    enum TrackBanking {
        None = 0,
        Left = 2,
        Right = 4,
        UpsideDown = 15,
    }

    type TrackCurveType = "straight" | "left" | "right";
    type TrackSlopeType = "flat" | "up" | "down";

    interface TrackSegmentElement extends Readonly<CoordsXYZ> {
    }

    /**
     * A single subposition on a track piece. These subpositions are used for the pathing of vehicles
     * when moving along the track.
     */
    interface TrackSubposition extends Readonly<CoordsXYZ> {
        readonly yaw: number;
        readonly pitch: TrackSlope;
        readonly roll: TrackBanking;
    }

    interface TrackIterator {
        /**
         * The position and direction of the current track segment. Usually this is the position of the
         * first element of the segment, however for some segments, it may be offset.
         */
        readonly position: CoordsXYZD;

        /**
         * The current track segment.
         */
        readonly segment: TrackSegment | null;

        /**
         * Gets the position of where the previous track element should start.
         */
        readonly previousPosition: CoordsXYZD | null;

        /**
         * Gets the position of where the next track element should start.
         */
        readonly nextPosition: CoordsXYZD | null;

        /**
         * Moves the iterator to the previous track segment.
         * @returns true if there is a previous segment, otherwise false.
         */
        previous(): boolean;

        /**
         * Moves the iterator to the next track segment.
         * @returns true if there is a next segment, otherwise false.
         */
        next(): boolean;
    }

    type EntityType =
        | "balloon"
        | "car"
        | "crash_splash"
        | "crashed_vehicle_particle"
        | "duck"
        | "explosion_cloud"
        | "explosion_flare"
        | "jumping_fountain_snow"
        | "jumping_fountain_water"
        | "litter"
        | "money_effect"
        | "guest"
        | "staff"
        | "steam_particle"
        | /**
         * @deprecated since version 34, use guest or staff instead.
         */ "peep";

    /**
     * Represents an object "entity" on the map that can typically moves and has a sub-tile coordinate.
     */
    interface Entity {
        /**
         * The entity index within the entity list. Returns null for invalid entities.
         */
        readonly id: number | null;
        /**
         * The type of entity, e.g. guest, vehicle, etc.
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
         * train. This will return null if there is no previous car.
         */
        previousCarOnRide: number | null;

        /**
         * The next car on the ride. This may be the on the same train or the next
         * train. This will return null if there is no next car.
         */
        nextCarOnRide: number | null;

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
         * Whether the car sprite is reversed or not.
         */
        isReversed: boolean;

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
         * Current vehicle spin rotation.
         * Values are 0-255. The game actually only considers the higher
         * 5 bits when rendering.
         */
        spin: number;

        /**
         * The location and direction of where the car is on the track.
         */
        trackLocation: CarTrackLocation;

        /**
         * The current g-forces of this car.
         */
        readonly gForces: GForces;

        /**
         * The progress on the current track piece, in steps.
         */
        readonly trackProgress: number;

        /**
         * The currently projected remaining distance the car will travel.
         */
        readonly remainingDistance: number;

        /**
         * The type of subposition coordinates that this vehicle is using to find its
         * position on the track.
         */
        readonly subposition: number;

        /**
         * List of guest IDs ordered by seat.
         * @deprecated since version 34, use guests instead.
         */
        peeps: Array<number | null>;

        /**
         * List of guest IDs ordered by seat.
         */
        guests: Array<number | null>;

        /**
         * Moves the vehicle forward or backwards along the track, relative to its current
         * position. A single visible step is about 8.000 to 14.000 in distance depending
         * on the direction its moving in.
         */
        travelBy(distance: number): void;
    }

    type VehicleStatus =
        | "arriving"
        | "crashed"
        | "crashing"
        | "crooked_house_operating"
        | "departing"
        | "doing_circus_show"
        | "ferris_wheel_rotating"
        | "haunted_house_operating"
        | "moving_to_end_of_station"
        | "operating_1a"
        | "rotating"
        | "showing_film"
        | "simulator_operating"
        | "space_rings_operating"
        | "starting"
        | "stopped_by_block_brake"
        | "stopping_1b"
        | "stopping"
        | "swinging"
        | "top_spin_operating"
        | "travelling_boat"
        | "travelling_cable_lift"
        | "travelling_dodgems"
        | "travelling"
        | "unloading_passengers_1c"
        | "unloading_passengers"
        | "waiting_for_cable_lift"
        | "waiting_for_passengers_17"
        | "waiting_for_passengers"
        | "waiting_to_depart"
        | "waiting_to_start";

    type CrashParticleType = "corner" | "rod" | "wheel" | "panel" | "seat";

    /**
     * Override properties for launch data. All properties except colour are randomly
     * chosen if not overridden, using the same algorithm as regular crashed particles.
     */
    interface CrashParticleLaunchData {
        colours?: CrashedVehicleColour;
        timeToLive?: number;
        velocity?: CoordsXYZ;
        crashParticleType?: CrashParticleType;
        frame?: number;
    }

    /**
     * Represents a vehicle explosion particle. They are emitted during a vehicle
     * crash and will bounce until their timer expires and they are automatically
     * removed.
     */
    interface CrashedVehicleParticle extends Entity {
        /**
         * The colour of the particle.
         */
        colours: CrashedVehicleColour;

        /**
         * The lifetime of the particle in ticks. Default value 65535. Entity is
         * automatically removed at 0.
         */
        timeToLive: number;

        /**
         * The particle velocity.
         */
        velocity: CoordsXYZ;

        /**
         * The acceleration of the particle in the x, y, and z directions.
         */
        acceleration: CoordsXYZ;

        /**
         * The type of crash particle.
         */
        crashParticleType: CrashParticleType;

        /**
         * The current frame of the crash particle.
         */
        frame: number;

        /**
         * Sets the sprite bounds and launches the particle.
         */
        launch(launchData?: CrashParticleLaunchData): void;
    }

    /**
     * Represents a guest or staff member.
     * @deprecated since version 34, use guest or staff instead.
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
         * The peep's orthogonal direction, from 0 to 3.
         */
        direction: Direction;

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
        | "leavingPark"
        | "slowWalk"
        | "tracking"
        | "waving"
        | "hasPaidForParkEntry"
        | "photo"
        | "painting"
        | "wow"
        | "litter"
        | "lost"
        | "hunger"
        | "toilet"
        | "crowded"
        | "happiness"
        | "nausea"
        | "purple"
        | "pizza"
        | "explode"
        | "rideShouldBeMarkedAsFavourite"
        | "parkEntranceChosen"
        | "contagious"
        | "joy"
        | "angry"
        | "iceCream"
        | "hereWeAre"
        | "positionFrozen"
        | "animationFrozen";

    /**
     * @deprecated since version 34, use EntityType instead.
     */
    type PeepType = "guest" | "staff";

    type GuestAnimation =
        | "walking"
        | "checkTime"
        | "watchRide"
        | "eatFood"
        | "shakeHead"
        | "emptyPockets"
        | "holdMat"
        | "sittingIdle"
        | "sittingEatFood"
        | "sittingLookAroundLeft"
        | "sittingLookAroundRight"
        | "hanging"
        | "wow"
        | "throwUp"
        | "jump"
        | "drowning"
        | "joy"
        | "readMap"
        | "wave"
        | "wave2"
        | "takePhoto"
        | "clap"
        | "disgust"
        | "drawPicture"
        | "beingWatched"
        | "withdrawMoney";

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

        /**
         * Whether the guest is within the boundaries of the park.
         */
        readonly isInPark: boolean;

        /**
         * Whether the guest is lost or not. The guest is lost when the countdown is below 90.
         */
        readonly isLost: boolean;

        /**
         * Countdown between 0 and 255 that keeps track of how long the guest has been looking for its current destination.
         */
        lostCountdown: number;

        /**
         * The list of thoughts this guest has.
         */
        readonly thoughts: Thought[];

        /**
         * The list of items this guest has.
         */
        readonly items: GuestItem[];

        /**
         * Checks whether this guest has a certain item.
         * @param item The item to check.
         */
        hasItem(item: GuestItem): boolean;

        /**
         * Gives an item to the guest. Guests can only have one item of a given type.
         * If this guest already has an item of the same type, this will override the current item.
         * @param item The item to give.
         */
        giveItem(item: GuestItem): void;

        /**
         * Removes an item from the guest's possession.
         * @param item The item to remove.
         */
        removeItem(item: GuestItem): void;

        /**
         * Removes all items from the guest's possession.
         */
        removeAllItems(): void;

        /**
         * The animations available to this guest.
         */
        readonly availableAnimations: GuestAnimation[];

        /**
         * Gets an array of sprite ids representing a particular guest animation.
         */
        getAnimationSpriteIds(animation: GuestAnimation, rotation: number): number[];

        /**
         * The animation the guest is currently exhibiting.
         */
        animation: GuestAnimation;

        /**
         * The frame offset in the current animation.
         */
        animationOffset: number;

        /**
         * The total number of frames in the current animation.
         */
        readonly animationLength: number;

        /**
         * The ride ID of the guest's favourite ride.
         */
        favouriteRide: number | null;
    }

    /**
     * Represents a guest's thought. This is a copy of a thought at a given time
     * and its values will not update.
     */
    interface Thought {
        /**
         * The type of thought.
         */
        readonly type: ThoughtType;

        /**
         * The thought argument.
         */
        readonly item: number;

        /**
         * The freshness of the thought - the larger the number, the less fresh
         * the thought.
         */
        readonly freshness: number;

        /**
         * The freshness timeout.
         */
        readonly freshTimeout: number;

        /**
         * Get the string for this thought.
         * The result contains Unicode quotes on either end, e.g. “I feel sick”
         */
        toString(): string;
    }

    type ThoughtType =
        | "cant_afford_ride"
        | "spent_money"
        | "sick"
        | "very_sick"
        | "more_thrilling"
        | "intense"
        | "havent_finished"
        | "sickening"
        | "bad_value"
        | "go_home"
        | "good_value"
        | "already_got"
        | "cant_afford_item"
        | "not_hungry"
        | "not_thirsty"
        | "drowning"
        | "lost"
        | "was_great"
        | "queuing_ages"
        | "tired"
        | "hungry"
        | "thirsty"
        | "toilet"
        | "cant_find"
        | "not_paying"
        | "not_while_raining"
        | "bad_litter"
        | "cant_find_exit"
        | "get_off"
        | "get_out"
        | "not_safe"
        | "path_disgusting"
        | "crowded"
        | "vandalism"
        | "scenery"
        | "very_clean"
        | "fountains"
        | "music"
        | "balloon"
        | "toy"
        | "map"
        | "photo"
        | "umbrella"
        | "drink"
        | "burger"
        | "chips"
        | "ice_cream"
        | "candyfloss"
        | "pizza"
        | "popcorn"
        | "hot_dog"
        | "tentacle"
        | "hat"
        | "toffee_apple"
        | "tshirt"
        | "doughnut"
        | "coffee"
        | "chicken"
        | "lemonade"
        | "wow"
        | "wow2"
        | "watched"
        | "balloon_much"
        | "toy_much"
        | "map_much"
        | "photo_much"
        | "umbrella_much"
        | "drink_much"
        | "burger_much"
        | "chips_much"
        | "ice_cream_much"
        | "candyfloss_much"
        | "pizza_much"
        | "popcorn_much"
        | "hot_dog_much"
        | "tentacle_much"
        | "hat_much"
        | "toffee_apple_much"
        | "tshirt_much"
        | "doughnut_much"
        | "coffee_much"
        | "chicken_much"
        | "lemonade_much"
        | "photo2"
        | "photo3"
        | "photo4"
        | "pretzel"
        | "hot_chocolate"
        | "iced_tea"
        | "funnel_cake"
        | "sunglasses"
        | "beef_noodles"
        | "fried_rice_noodles"
        | "wonton_soup"
        | "meatball_soup"
        | "fruit_juice"
        | "soybean_milk"
        | "sujongkwa"
        | "sub_sandwich"
        | "cookie"
        | "roast_sausage"
        | "photo2_much"
        | "photo3_much"
        | "photo4_much"
        | "pretzel_much"
        | "hot_chocolate_much"
        | "iced_tea_much"
        | "funnel_cake_much"
        | "sunglasses_much"
        | "beef_noodles_much"
        | "fried_rice_noodles_much"
        | "wonton_soup_much"
        | "meatball_soup_much"
        | "fruit_juice_much"
        | "soybean_milk_much"
        | "sujongkwa_much"
        | "sub_sandwich_much"
        | "cookie_much"
        | "roast_sausage_much"
        | "help"
        | "running_out"
        | "new_ride"
        | "nice_ride_deprecated"
        | "excited_deprecated"
        | "here_we_are";

    type GuestItemType =
        | "balloon"
        | "hat"
        | "map"
        | "sunglasses"
        | "toy"
        | "tshirt"
        | "umbrella"
        | "photo1"
        | "photo2"
        | "photo3"
        | "photo4"
        | "voucher"
        | "beef_noodles"
        | "burger"
        | "candyfloss"
        | "chicken"
        | "chips"
        | "chocolate"
        | "cookie"
        | "doughnut"
        | "hot_dog"
        | "fried_rice_noodles"
        | "funnel_cake"
        | "ice_cream"
        | "meatball_soup"
        | "pizza"
        | "popcorn"
        | "pretzel"
        | "roast_sausage"
        | "sub_sandwich"
        | "tentacle"
        | "toffee_apple"
        | "wonton_soup"
        | "coffee"
        | "drink"
        | "fruit_juice"
        | "iced_tea"
        | "lemonade"
        | "soybean_milk"
        | "sujeonggwa"
        | "empty_bottle"
        | "empty_bowl_blue"
        | "empty_bowl_red"
        | "empty_box"
        | "empty_burger_box"
        | "empty_can"
        | "empty_cup"
        | "empty_drink_carton"
        | "empty_juice_cup"
        | "rubbish";

    type VoucherType =
        | "entry_free"
        | "entry_half_price"
        | "ride_free"
        | "food_drink_free";

    /**
     * Represents an item in a guest's possession.
     * If giving a guest a photo or voucher, use the other interfaces instead.
     */
    interface GuestItem {
        /**
         * The type of item.
         */
        readonly type: GuestItemType;
    }

    /**
     * Represents an on-ride photo in a guest's possession.
     */
    interface GuestPhoto extends GuestItem {
        readonly type: "photo1" | "photo2" | "photo3" | "photo4";
        /**
         * The id of the ride the on-ride photo is for.
         */
        readonly rideId: number;
    }

    /**
     * Represents a voucher in a guest's possession. If giving a guest a voucher for free rides
     * or free food/drink, use the other interfaces instead.
     */
    interface Voucher extends GuestItem {
        readonly type: "voucher";
        /**
         * The type of voucher.
         */
        readonly voucherType: VoucherType;
    }

    /**
     * Represents a voucher for a free ride in a guest's possession.
     */
    interface RideVoucher extends Voucher {
        readonly voucherType: "ride_free";
        /**
         * The id of the ride the voucher is for.
         */
        readonly rideId: number;
    }

    /**
     * Represents a voucher for free food or drink in a guest's possession.
     */
    interface FoodDrinkVoucher extends Voucher {
        readonly voucherType: "food_drink_free";
        /**
         * The type of food or drink the voucher is for.
         */
        readonly item: GuestItemType;
    }

    type StaffCostume =
        | "none"
        | "handyman"
        | "mechanic"
        | "security1"
        | "security2"
        | "panda"
        | "tiger"
        | "elephant"
        | "roman"
        | "gorilla"
        | "snowman"
        | "knight"
        | "astronaut"
        | "bandit"
        | "sheriff"
        | "pirate";

    type StaffAnimation =
        | "walking"
        | "watchRide"
        | "wave"
        | "hanging"
        | "staffMower"
        | "staffSweep"
        | "drowning"
        | "staffAnswerCall"
        | "staffAnswerCall2"
        | "staffCheckBoard"
        | "staffFix"
        | "staffFix2"
        | "staffFixGround"
        | "staffFix3"
        | "staffWatering"
        | "joy"
        | "staffEmptyBin"
        | "wave2";

    /**
     * Represents a staff member.
     */
    interface BaseStaff extends Peep {
        /**
         * The type of staff member, e.g. handyman, mechanic.
         */
        staffType: StaffType;

        /**
         * Colour of the staff member. Not applicable to entertainers.
         */
        colour: number;

        /**
         * Array of costumes available to this particular staff member.
         */
        readonly availableCostumes: StaffCostume[];

        /**
         * The staff member's costume.
         */
        costume: StaffCostume | string | number;

        /**
         * The enabled jobs the staff can do, e.g. sweep litter, water plants, inspect rides etc.
         */
        orders: number;

        /**
         * Gets the patrol area for the staff member.
         */
        readonly patrolArea: PatrolArea;

        /**
         * The animations available to this staff member.
         */
        readonly availableAnimations: StaffAnimation[];

        /**
         * Gets an array of sprite ids representing a particular staff animation.
         */
        getAnimationSpriteIds(animation: StaffAnimation, rotation: number): number[];

        /**
         * The animation the staff member is currently exhibiting.
         */
        animation: StaffAnimation;

        /**
         * The frame offset in the current animation.
         */
        animationOffset: number;

        /**
         * The total number of frames in the current animation.
         */
        readonly animationLength: number;
    }

    type StaffType = "handyman" | "mechanic" | "security" | "entertainer";

    type Staff = Handyman | Mechanic | Security | Entertainer;

    /**
     * Represents a handyman.
     */
    interface Handyman extends BaseStaff {
        staffType: "handyman";

        /**
         * The number of lawns mown by the handyman.
         */
        readonly lawnsMown: number;

        /**
         * The number of gardens watered by the handyman.
         */
        readonly gardensWatered: number;

        /**
         * The number of litter swept by the handyman.
         */
        readonly litterSwept: number;

        /**
         * The number of bins emptied by the handyman.
         */
        readonly binsEmptied: number;
    }

    /**
     * Represents a mechanic.
     */
    interface Mechanic extends BaseStaff {
        staffType: "mechanic";

        /**
         * The number of rides fixed by the mechanic.
         */
        readonly ridesFixed: number;

        /**
         * The number of inspections performed by the mechanic.
         */
        readonly ridesInspected: number;
    }

    /**
     * Represents a security guard.
     */
    interface Security extends BaseStaff {
        staffType: "security";

        /**
         * The number of vandals stopped by the security guard.
         */
        readonly vandalsStopped: number;
    }

    interface Entertainer extends BaseStaff {
        staffType: "entertainer";
    }

    interface PatrolArea {
        /**
         * Gets or sets the map coodinates for all individual tiles in the staff member's patrol area.
         *
         * Note: fetching all the staff member's patrol area tiles can degrade performance.
         */
        tiles: CoordsXY[];

        /**
         * Clears all tiles from the staff member's patrol area.
         */
        clear(): void;

        /**
         * Adds the given array of coordinates or a map range to the staff member's patrol area.
         * @param coords An array of map coordinates, or a map range.
         */
        add(coords: CoordsXY[] | MapRange): void;

        /**
         * Removes the given array of coordinates or a map range from the staff member's patrol area.
         * @param coords An array of map coordinates, or a map range.
         */
        remove(coords: CoordsXY[] | MapRange): void;

        /**
         * Checks whether a single coordinate is within the staff member's patrol area.
         * @param coords An map coordinate.
         */
        contains(coord: CoordsXY): boolean;
    }

    /**
     * Represents litter entity.
     */
    interface Litter extends Entity {
        /**
         * The type of the litter.
         */
        litterType: LitterType;

        /**
         * The tick number this entity was created.
         */
        creationTick: number;
    }

    type LitterType =
        | "vomit"
        | "vomit_alt"
        | "empty_can"
        | "rubbish"
        | "burger_box"
        | "empty_cup"
        | "empty_box"
        | "empty_bottle"
        | "empty_bowl_red"
        | "empty_drink_carton"
        | "empty_juice_cup"
        | "empty_bowl_blue";

    /**
     * Network APIs
     * Use `network.mode` to determine whether the current game is a client, server or in single player mode.
     */
    interface Network {
        /**
         * The current network mode. This can be used to determine whether the current
         * session is single player, a multiplayer server, or a multiplayer client.
         */
        readonly mode: NetworkMode;

        /**
         * The number of multiplayer groups there are in the server.
         */
        readonly numGroups: number;

        /**
         * The number of players there are in the server.
         */
        readonly numPlayers: number;

        /**
         * Gets all the multiplayer groups within the server. Groups are used to give individual
         * players roles and permissions.
         */
        readonly groups: PlayerGroup[];

        /**
         * Gets all the players that are currently in the server.
         */
        readonly players: Player[];

        /**
         * The player this instance of the game is controlling.
         */
        readonly currentPlayer: Player;

        /**
         * Gets or sets the default group ID that new players joining the server should be assigned to.
         */
        defaultGroup: number;

        /**
         * Various statistics related to networking.
         */
        readonly stats: NetworkStats;

        /**
         * Creates a new multiplayer group for managing player permissions.
         */
        addGroup(): void;

        /**
         * Gets the player group with the specified ID.
         * @param id The group ID. Prior to API version 77, this is the group index.
         */
        getGroup(id: number): PlayerGroup;

        /**
         * Removes the player group with the specified ID.
         * @param id The group ID. Prior to API version 77, this is the group index.
         */
        removeGroup(id: number): void;

        /*
         * Gets the player with the specified ID.
         * @param id The player ID. Prior to API version 77, this is the player index.
         */
        getPlayer(id: number): Player;

        /*
         * Kicks the player with the specified ID from the server.
         * @param id The player ID. Prior to API version 77, this is the player index.
         */
        kickPlayer(id: number): void;

        /**
         * Sends a chat message to all players.
         * @param message The message text.
         */
        sendMessage(message: string): void;

        /**
         * Sends a chat message to only the specified players.
         * @param message The message text.
         * @param players A list of player IDs that should receive the chat message.
         *                Note: the message will be internally transmitted to players via
         *                      the server, even if the server is not a recipient.
         */
        sendMessage(message: string, players: number[]): void;

        /**
         * Creates a new listener that can accept TCP connections on a given port.
         */
        createListener(): Listener;

        /**
         * Creates a new TCP client that can connect to a server.
         */
        createSocket(): Socket;
    }

    type NetworkMode = "none" | "server" | "client";

    /**
     * Represents a player within a network game.
     */
    interface Player {
        /**
         * The unique ID for the player.
         */
        readonly id: number;

        /**
         * The name of the player.
         */
        readonly name: string;

        /**
         * The group ID the player is a member of.
         */
        group: number;

        /**
         * The latest measured ping in milliseconds for the player.
         */
        readonly ping: number;

        /**
         * The number of actions the player has successfully executed.
         */
        readonly commandsRan: number;

        /**
         * The total amount of cash spent from actions performed by the player.
         */
        readonly moneySpent: number;

        /**
         * The player's IP address.
         */
        readonly ipAddress: string;

        /**
         * A hash of the player's public key used to authenticate with the server.
         */
        readonly publicKeyHash: string;
    }

    /**
     * Represents a group in a network game for assigning roles and permissions
     * to one or more players.
     */
    interface PlayerGroup {
        /**
         * The unique ID for the group.
         */
        readonly id: number;

        /**
         * The name of the group.
         */
        name: string;

        /**
         * The permissions granted to each player belonging to the group.
         */
        permissions: PermissionType[];
    }

    /**
     * Represents various network statistics.
     */
    interface NetworkStats {
        /**
         * The number of bytes received for each category.
         */
        readonly bytesReceived: number[];

        /**
         * The number of bytes sent for each category.
         */
        readonly bytesSent: number[];
    }

    type PermissionType =
        | "chat"
        | "terraform"
        | "set_water_level"
        | "toggle_pause"
        | "create_ride"
        | "remove_ride"
        | "build_ride"
        | "ride_properties"
        | "scenery"
        | "path"
        | "clear_landscape"
        | "guest"
        | "staff"
        | "park_properties"
        | "park_funding"
        | "kick_player"
        | "modify_groups"
        | "set_player_group"
        | "cheat"
        | "toggle_scenery_cluster"
        | "passwordless_login"
        | "modify_tile"
        | "edit_scenario_options";

    /**
     * Park APIs
     */

    /**
     * The type of park message, including icon and behaviour.
     */
    type ParkMessageType =
        | "attraction"
        | "peep_on_attraction"
        | "peep"
        | "money"
        | "blank"
        | "research"
        | "guests"
        | "award"
        | "chart"
        | "campaign";

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
        | "difficultGuestGeneration"
        | "difficultParkRating"
        | "forbidHighConstruction"
        | "forbidLandscapeChanges"
        | "forbidMarketingCampaigns"
        | "forbidTreeRemoval"
        | "freeParkEntry"
        | "noMoney"
        | "open"
        | "preferLessIntenseRides"
        | "preferMoreIntenseRides"
        | "scenarioCompleteNameInput"
        | "unlockAllPrices";

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
         * The maximum number of guests that will spawn naturally (soft guest cap).
         * In scenarios with difficult guest generation, guests will not spawn above
         * this value without advertisements.
         */
        readonly suggestedGuestMaximum: number;

        /**
         * The probability out of 65535 that guests will spawn per tick.
         * The number of guest spawns per second is equal to
         * guests per second = 40 * (guestGenerationProbability / 65535)
         */
        readonly guestGenerationProbability: number;

        /**
         * The average amount of cash guests will spawn with.
         */
        readonly guestInitialCash: number;

        /**
         * The average happiness guests will spawn at out of 255.
         */
        readonly guestInitialHappiness: number;

        /**
         * The average hunger guests will spawn at out of 255.
         */
        readonly guestInitialHunger: number;

        /**
         * The average thirst guests will spawn at out of 255.
         */
        readonly guestInitialThirst: number;

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
         * The sum of ride values, used to determine the most guests will
         * pay to enter the park and for some awards.
         * Calculated as the sum of (ride value - ride price) * 2.
         */
        readonly totalRideValueForMoney: number;

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
         * The amount of penalty points currentlty applied to the park rating for
         * drowned guests and crashed coaster cars.
         */
        casualtyPenalty: number;

        /**
         * The number of tiles on the map with park ownership or construction rights.
         * Updated every 4096 ticks.
         */
        readonly parkSize: number;

        /**
         * The name of the park, shown on the park entrance.
         * Not the name of the scenario.
         */
        name: string;

        /**
         * The current research status, and what
         * has and hasn't yet been researched.
         */
        readonly research: Research;

        /**
         * The park message / notification queue, and historical messages.
         */
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

        /**
         * Gets the monthly expenditure history for a given type.
         * Index 0 represents the current month, index 1 the previous month, etc.
         * The maximum length of the array is 16.
         * @param type The type of expenditure to get.
         */
        getMonthlyExpenditure(type: ExpenditureType): number[];
    }

    interface Research {
        /**
         * The list of rides and scenery sets that have already been researched.
         */
        inventedItems: ResearchItem[];

        /**
         * The order of rides and scenery sets to be researched.
         */
        uninventedItems: ResearchItem[];

        /**
         * The last item that was researched, or null if no
         * item has been researched yet.
         */
        readonly lastResearchedItem: ResearchItem | null;

        /**
         * The item currently being researched, or null if
         * research is complete.
         */
        readonly expectedItem: ResearchItem | null;

        /**
         * The amount of funding currently spent on research.
         * 0: none, 1: minimum, 2: normal, 3: maximum
         */
        funding: number;

        /**
         * The categories of research which should be prioritised.
         */
        priorities: ResearchCategory[];

        /**
         * The current stage for the ride or scenery set being researched.
         */
        stage: ResearchFundingStage;

        /**
         * The progress for the current stage between 0 and 65535.
         * This will increment more quickly the higher the research funding.
         */
        progress: number;

        /**
         * The expected month the current item being researched will complete.
         * Value is between 0 and 7, 0 being March and 7 being October.
         * Value is null if there is not yet an expected month.
         */
        readonly expectedMonth: number | null;

        /**
         * The expected day of the month the current item being researched will complete.
         * Value is between 1 and 31.
         * Value is null if there is not yet an expected month.
         */
        readonly expectedDay: number | null;

        /**
         * Gets whether a particular object has been researched and is available to construct.
         * @param type The type of object, e.g. ride, scenery group, or small scenery.
         * @param index The object index.
         */
        isObjectResearched(type: ObjectType, index: number): boolean;
    }

    type ResearchItem = RideResearchItem | SceneryResearchItem;

    interface RideResearchItem {
        readonly type: "ride";

        /**
         * The research category this item belongs in.
         * E.g. gentle rides, thrill rides, shops etc.
         * Note: Any updates to this field are ignored by OpenRCT2, the category will be derived from the ride type.
         */
        readonly category: RideResearchCategory;

        /**
         * The ride type. Each vehicle can have a seperate invention for each ride type.
         */
        readonly rideType: number;

        /**
         * The ride (vehicle) object index.
         */
        readonly object: number;
    }

    interface SceneryResearchItem {
        readonly category: "scenery";
        readonly type: "scenery";

        /**
         * The scenery set object index.
         */
        readonly object: number;
    }

    type RideResearchCategory =
        | "transport"
        | "gentle"
        | "rollercoaster"
        | "thrill"
        | "water"
        | "shop";

    type ResearchCategory = RideResearchCategory | "scenery";

    type ResearchFundingStage =
        | "initial_research"
        | "designing"
        | "completing_design"
        | "unknown"
        | "finished_all";

    type ScenarioObjectiveType =
        | "none"
        | "guestsBy"
        | "parkValueBy"
        | "haveFun"
        | "buildTheBest"
        | "10Rollercoasters"
        | "guestsAndRating"
        | "monthlyRideIncome"
        | "10RollercoastersLength"
        | "finish5Rollercoasters"
        | "repayLoanAndParkValue"
        | "monthlyFoodIncome";

    interface ScenarioObjective {
        /**
         * The objective type.
         */
        type: ScenarioObjectiveType;

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

    type ClimateType =
        | "coolAndWet"
        | "warm"
        | "hotAndDry"
        | "cold";

    type WeatherType =
        | "sunny"
        | "partiallyCloudy"
        | "cloudy"
        | "rain"
        | "heavyRain"
        | "thunder"
        | "snow"
        | "heavySnow"
        | "blizzard";

    interface ClimateState {
        readonly weather: WeatherType;
        readonly temperature: number;
    }

    interface Climate {
        /**
         * The climate of the park.
         */
        readonly type: ClimateType;

        /**
         * The current weather in the park.
         */
        readonly current: ClimateState;

        /**
         * The next weather the park will experience.
         */
        readonly future: ClimateState;
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
        allowRegularPathAsQueue: boolean;
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
        readonly imageManager: ImageManager;

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

        /**
         * Registers a new item in the toolbox menu on the title screen.
         * Only available to intransient plugins.
         * @param text The menu item text.
         * @param callback The function to call when the menu item is clicked.
         */
        registerToolboxMenuItem(text: string, callback: () => void): void;

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
        type: "load";

        /**
         * The type of file to browse for.
         */
        fileType: "game" | "heightmap";

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
        category: "beginner" | "challenging" | "expert" | "real" | "other" | "dlc" | "build_your_own" | "competitions";
        sourceGame: "rct1" | "rct1_aa" | "rct1_ll" | "rct2" | "rct2_ww" | "rct2_tt" | "real" | "extras" | "other";
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
        range: MapRange | null;
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
        readonly mapCoords?: CoordsXY;
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
        | "arrow"
        | "bench_down"
        | "bin_down"
        | "blank"
        | "cross_hair"
        | "diagonal_arrows"
        | "dig_down"
        | "entrance_down"
        | "fence_down"
        | "flower_down"
        | "fountain_down"
        | "hand_closed"
        | "hand_open"
        | "hand_point"
        | "house_down"
        | "lamppost_down"
        | "paint_down"
        | "path_down"
        | "picker"
        | "statue_down"
        | "tree_down"
        | "up_arrow"
        | "up_down_arrow"
        | "volcano_down"
        | "walk_down"
        | "water_down"
        | "zzz";

    type ToolFilter =
        | "terrain"
        | "entity"
        | "ride"
        | "water"
        | "scenery"
        | "footpath"
        | "footpath_item"
        | "park_entrance"
        | "wall"
        | "large_scenery"
        | "label"
        | "banner";

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
        | "button"
        | "checkbox"
        | "colourpicker"
        | "custom"
        | "dropdown"
        | "groupbox"
        | "label"
        | "listview"
        | "spinner"
        | "textbox"
        | "viewport";

    type Widget =
        | ButtonWidget
        | CheckboxWidget
        | ColourPickerWidget
        | CustomWidget
        | DropdownWidget
        | GroupBoxWidget
        | LabelWidget
        | ListViewWidget
        | SpinnerWidget
        | TextBoxWidget
        | ViewportWidget;

    type IconName =
        | "arrow_down"
        | "arrow_up"
        | "award"
        | "awards"
        | "chain_lift"
        | "chat"
        | "cheats"
        | "closed"
        | "construction"
        | "copy"
        | "demolish"
        | "empty"
        | "eyedropper"
        | "fast_forward"
        | "finance"
        | "floppy_disk"
        | "game_speed_indicator"
        | "game_speed_indicator_double"
        | "glassy_recolourable"
        | "graph"
        | "guest_inventory"
        | "guests"
        | "hearing"
        | "hide_full"
        | "hide_partial"
        | "hide_scenery"
        | "hide_supports"
        | "hide_vegetation"
        | "hide_vehicles"
        | "kiosks_and_facilities"
        | "large_scenery"
        | "legacy_paths"
        | "link_chain"
        | "locate"
        | "logo"
        | "logo_text"
        | "map"
        | "map_east"
        | "map_east_pressed"
        | "map_gen_land"
        | "map_gen_noise"
        | "map_gen_trees"
        | "map_north"
        | "map_north_pressed"
        | "map_south"
        | "map_south_pressed"
        | "map_west"
        | "map_west_pressed"
        | "mechanic"
        | "mirror_arrow"
        | "mountain_tool_even"
        | "mountain_tool_odd"
        | "multiplayer"
        | "multiplayer_desync"
        | "multiplayer_sync"
        | "multiplayer_toolbar"
        | "multiplayer_toolbar_pressed"
        | "music"
        | "mute"
        | "mute_pressed"
        | "news_messages"
        | "new_ride"
        | "next"
        | "no_entry"
        | "open"
        | "paintbrush"
        | "palette_invisible"
        | "palette_invisible_pressed"
        | "park"
        | "paste"
        | "path_railings"
        | "path_surfaces"
        | "paths"
        | "patrol"
        | "pause"
        | "pickup"
        | "placeholder"
        | "previous"
        | "question"
        | "rct1_close_off"
        | "rct1_close_off_pressed"
        | "rct1_close_on"
        | "rct1_close_on_pressed"
        | "rct1_open_off"
        | "rct1_open_off_pressed"
        | "rct1_open_on"
        | "rct1_open_on_pressed"
        | "rct1_simulate_off"
        | "rct1_simulate_off_pressed"
        | "rct1_simulate_on"
        | "rct1_simulate_on_pressed"
        | "rct1_test_off"
        | "rct1_test_off_pressed"
        | "rct1_test_on"
        | "rct1_test_on_pressed"
        | "reload"
        | "rename"
        | "research"
        | "ride"
        | "ride_stations"
        | "rides_gentle"
        | "rides_rollercoasters"
        | "rides_shop"
        | "rides_thrill"
        | "rides_transport"
        | "rides_water"
        | "rotate_arrow"
        | "scenery"
        | "scenery_cluster"
        | "scenery_paths"
        | "scenery_paths_items"
        | "scenery_scatter_high"
        | "scenery_scatter_low"
        | "scenery_scatter_medium"
        | "scenery_signage"
        | "scenery_statues"
        | "scenery_trees"
        | "scenery_urban"
        | "scenery_walls"
        | "search"
        | "selection_edge_ne"
        | "selection_edge_nw"
        | "selection_edge_se"
        | "selection_edge_sw"
        | "server_password"
        | "shops_and_stalls"
        | "sideways_tab"
        | "sideways_tab_active"
        | "simulate"
        | "small_scenery"
        | "sort"
        | "stats"
        | "testing"
        | "terrain_edges"
        | "title_play"
        | "title_restart"
        | "title_skip"
        | "title_stop"
        | "unmute"
        | "unmute_pressed"
        | "view"
        | "water"
        | "zoom_in"
        | "zoom_in_background"
        | "zoom_out"
        | "zoom_out_background";

    interface WidgetBase {
        readonly window: Window;
        readonly type: WidgetType;
        x: number;
        y: number;
        width: number;
        height: number;
        name: string;
        tooltip: string;
        isDisabled: boolean;
        isVisible: boolean;
    }

    interface ButtonWidget extends WidgetBase {
        type: "button";
        /**
         * Whether the button has a 3D border.
         * By default, text buttons have borders and image buttons do not but it can be overridden.
         */
        border: boolean;
        image: number | IconName;
        isPressed: boolean;
        text: string;
    }

    interface CheckboxWidget extends WidgetBase {
        type: "checkbox";
        text: string;
        isChecked: boolean;
    }

    interface ColourPickerWidget extends WidgetBase {
        type: "colourpicker";
        colour: number;
    }

    interface CustomWidget extends WidgetBase {
        type: "custom";
    }

    interface DropdownWidget extends WidgetBase {
        type: "dropdown";
        items: string[];
        selectedIndex: number;
        text: string;
    }

    interface GroupBoxWidget extends WidgetBase {
        type: "groupbox";
        text: string;
    }

    type TextAlignment = "left" | "centred";

    interface LabelWidget extends WidgetBase {
        type: "label";
        text: string;
        textAlign: TextAlignment;
    }

    type SortOrder = "none" | "ascending" | "descending";

    type ScrollbarType = "none" | "horizontal" | "vertical" | "both";

    interface ListViewColumn {
        canSort: boolean;
        sortOrder: SortOrder;
        header: string;
        headerTooltip: string;
        width: number;
        ratioWidth: number;
        minWidth: number;
        maxWidth: number;
    }

    interface RowColumn {
        row: number;
        column: number;
    }

    type ListViewItem = ListViewItemSeperator | string[] | string;

    interface ListViewWidget extends WidgetBase {
        type: "listview";
        scrollbars: ScrollbarType;
        isStriped: boolean;
        showColumnHeaders: boolean;
        columns: ListViewColumn[];
        items: ListViewItem[];
        selectedCell: RowColumn | null;
        readonly highlightedCell: RowColumn;
        canSelect: boolean;
    }

    interface SpinnerWidget extends WidgetBase {
        type: "spinner";
        text: string;
    }

    interface TextBoxWidget extends WidgetBase {
        type: "textbox";
        text: string;
        maxLength: number;
        focus(): void;
    }

    interface ViewportWidget extends WidgetBase {
        type: "viewport";
        readonly viewport: Viewport;
    }

    interface Window {
        readonly classification: number;
        readonly number: number;
        x: number;
        y: number;
        /**
         * The window is resizable (by the user) if and only if minWidth !== maxWidth or minHeight !== maxHeight.
         * In that case, the window displays a small widget in the lower right corner that the user can use to resize the window by clicking and dragging.
         *
         * When writing to width (or height), if the window is resizable, the new value will be clamped to fit the corresponding min/max values.
         * Otherwise, if the window is not resizable, both the width (or height) and the corresponding min/max values are set to the new value.
         *
         * For the default min/max values, see {@link WindowDesc}.
         */
        width: number;
        height: number;
        minWidth: number;
        maxWidth: number;
        minHeight: number;
        maxHeight: number;
        readonly isSticky: boolean;
        colours: number[];
        title: string;
        readonly widgets: Widget[];
        tabIndex: number;

        close(): void;
        bringToFront(): void;
        findWidget<T extends Widget>(name: string): T;
    }

    type WidgetDesc =
        | ButtonDesc
        | CheckboxDesc
        | ColourPickerDesc
        | CustomDesc
        | DropdownDesc
        | GroupBoxDesc
        | LabelDesc
        | ListViewDesc
        | SpinnerDesc
        | TextBoxDesc
        | ViewportDesc;

    interface WidgetBaseDesc {
        type: WidgetType;
        x: number;
        y: number;
        width: number;
        height: number;
        name?: string;
        tooltip?: string;
        isDisabled?: boolean;
        isVisible?: boolean;
    }

    interface ButtonDesc extends WidgetBaseDesc {
        type: "button";
        /**
         * Whether the button has a 3D border.
         * By default, text buttons have borders and image buttons do not but it can be overridden.
         */
        border?: boolean;
        image?: number | IconName;
        isPressed?: boolean;
        text?: string;
        onClick?: () => void;
    }

    interface CheckboxDesc extends WidgetBaseDesc {
        type: "checkbox";
        text?: string;
        isChecked?: boolean;
        onChange?: (isChecked: boolean) => void;
    }

    interface ColourPickerDesc extends WidgetBaseDesc {
        type: "colourpicker";
        colour?: number;
        onChange?: (colour: number) => void;
    }

    interface CustomDesc extends WidgetBaseDesc {
        type: "custom";
        onDraw?: (this: CustomWidget, g: GraphicsContext) => void;
    }

    interface DropdownDesc extends WidgetBaseDesc {
        type: "dropdown";
        items?: string[];
        selectedIndex?: number;
        onChange?: (index: number) => void;
    }

    interface GroupBoxDesc extends WidgetBaseDesc {
        type: "groupbox";
        text?: string;
    }

    interface LabelDesc extends WidgetBaseDesc {
        type: "label";
        text?: string;
        textAlign?: TextAlignment;
    }

    interface ListViewItemSeperator {
        type: "seperator";
        text?: string;
    }

    interface RowColumn {
        row: number;
        column: number;
    }

    interface ListViewDesc extends WidgetBaseDesc {
        type: "listview";
        scrollbars?: ScrollbarType;
        isStriped?: boolean;
        showColumnHeaders?: boolean;
        columns?: Partial<ListViewColumn>[];
        items?: ListViewItem[];
        selectedCell?: RowColumn;
        canSelect?: boolean;
        onHighlight?: (item: number, column: number) => void;
        onClick?: (item: number, column: number) => void;
    }

    interface SpinnerDesc extends WidgetBaseDesc {
        type: "spinner";
        text?: string;
        onDecrement?: () => void;
        onIncrement?: () => void;
        onClick?: () => void;
    }

    interface TextBoxDesc extends WidgetBaseDesc {
        type: "textbox";
        text?: string;
        maxLength?: number;
        onChange?: (text: string) => void;
    }

    interface ViewportDesc extends WidgetBaseDesc {
        type: "viewport";
    }

    interface WindowDesc {
        classification: string;
        x?: number;
        y?: number;
        width: number;
        height: number;
        title: string;
        id?: number;
        /**
         * See {@link Window} for information about the behaviour of min/max width/height after window creation.
         *
         * Behaviour during window creation:
         * If at least one of the parameters min/max width/height is present, the window is considered to be resizable.
         * In that case, the min values default to zero (if unspecified) and the max values default to 0xFFFF (if unspecified).
         * Otherwise, the min/max width values default to width and the min/max height values default to height.
         */
        minWidth?: number;
        minHeight?: number;
        maxWidth?: number;
        maxHeight?: number;
        widgets?: WidgetDesc[];
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
        image: number | ImageAnimation | IconName;
        widgets?: WidgetDesc[];
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
        tertiaryColour: number | undefined;
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

        on(event: "connection", callback: (socket: Socket) => void): Listener;

        off(event: "connection", callback: (socket: Socket) => void): Listener;
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

        on(event: "close", callback: (hadError: boolean) => void): Socket;
        on(event: "error", callback: (hadError: boolean) => void): Socket;
        on(event: "data", callback: (data: string) => void): Socket;

        off(event: "close", callback: (hadError: boolean) => void): Socket;
        off(event: "error", callback: (hadError: boolean) => void): Socket;
        off(event: "data", callback: (data: string) => void): Socket;
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
        | "load"
        | "loadsc"
        | "location"
        | "rotate"
        | "zoom"
        | "speed"
        | "follow"
        | "wait"
        | "restart"
        | "end";

    interface LoadTitleSequenceCommand {
        type: "load";
        index: number;
    }

    interface LocationTitleSequenceCommand {
        type: "location";
        x: number;
        y: number;
    }

    interface RotateTitleSequenceCommand {
        type: "rotate";
        rotations: number;
    }

    interface ZoomTitleSequenceCommand {
        type: "zoom";
        zoom: number;
    }

    interface FollowTitleSequenceCommand {
        type: "follow";
        id: number | null;
    }

    interface SpeedTitleSequenceCommand {
        type: "speed";
        speed: number;
    }

    interface WaitTitleSequenceCommand {
        type: "wait";
        duration: number;
    }

    interface LoadScenarioTitleSequenceCommand {
        type: "loadsc";
        scenario: string;
    }

    interface RestartTitleSequenceCommand {
        type: "restart";
    }

    interface EndTitleSequenceCommand {
        type: "end";
    }

    type TitleSequenceCommand =
        | LoadTitleSequenceCommand
        | LocationTitleSequenceCommand
        | RotateTitleSequenceCommand
        | ZoomTitleSequenceCommand
        | FollowTitleSequenceCommand
        | SpeedTitleSequenceCommand
        | WaitTitleSequenceCommand
        | LoadScenarioTitleSequenceCommand
        | RestartTitleSequenceCommand
        | EndTitleSequenceCommand;

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

    interface ImageManager {
        /**
         * Gets the image index range for a predefined set of images.
         * @param name The name of the image set.
         */
        getPredefinedRange(name: string): ImageIndexRange | null;

        /**
         * Gets the list of available ranges of unallocated images.
         * Useful for displaying how fragmented the allocated image list is.
         */
        getAvailableAllocationRanges(): ImageIndexRange[];

        /**
         * Allocates one or more contigous image IDs.
         * @param count The number of image IDs to allocate.
         * @returns the range of allocated image IDs or null if the range could not be allocated.
         */
        allocate(count: number): ImageIndexRange | null;

        /**
         * Frees one or more contigous image IDs.
         * An error will occur if attempting the given range contains an ID not owned by the plugin.
         * @param range The range of images to free.
         */
        free(range: ImageIndexRange): void;

        /**
         * Gets the metadata for a given image.
         */
        getImageInfo(id: number): ImageInfo | undefined;

        /**
         * Gets the pixel data for a given image ID.
         */
        getPixelData(id: number): PixelData | undefined;

        /**
         * Sets the pixel data for a given image ID.
         *
         * Will error if given an ID of an image not owned by this plugin.
         * @param id The id of the image to set the pixels of.
         * @param data The pixel data.
         */
        setPixelData(id: number, data: PixelData): void;

        /**
         * Calls the given function with a {@link GraphicsContext} for the given image, allowing the
         * ability to draw directly to it.
         *
         * Allocates or reallocates the image if not previously allocated or if the size is changed.
         * The pixels of the image will persist between calls, so you can draw over the top of what
         * is currently there. The default pixel colour will be 0 (transparent).
         *
         * Drawing a large number of pixels each frame can be expensive, so caching as many as you
         * can in images is a good way to improve performance.
         *
         * Will error if given an ID of an image not owned by this plugin.
         * @param id The id of the image to draw to.
         * @param size The size the image that should be allocated.
         * @param callback The function that will draw to the image.
         */
        draw(id: number, size: ScreenSize, callback: (g: GraphicsContext) => void): void;
    }

    type PixelData = RawPixelData | RlePixelData | PngPixelData;

    /**
     * Raw pixel data that is not encoded. A contiguous sequence of bytes
     * representing the 8bpp pixel values with a optional padding between
     * each horizontal row.
     */
    interface RawPixelData {
        type: "raw";
        width: number;
        height: number;

        /**
         * The length of each horizontal row in bytes.
         */
        stride?: number;

        /**
         * Data can either by a:
         * - A base64 string.
         * - An array of bytes
         * - A {@link Uint8Array} of bytes
         */
        data: string | number[] | Uint8Array;
    }

    /**
     * Pixel data that is encoded as RCT run-length encoded data.
     */
    interface RlePixelData {
        type: "rle";
        width: number;
        height: number;

        /**
         * Data can either by a:
         * - A base64 string.
         * - An array of bytes
         * - A {@link Uint8Array} of bytes
         */
        data: string | number[] | Uint8Array;
    }

    /**
     * Pixel data that is encoded as a .png file.
     */
    interface PngPixelData {
        type: "png";

        /**
         * How the colours of the .png file are converted to the OpenRCT2 palette.
         * If keep is specified for palette, the raw 8bpp .png bytes will be loaded. The palette
         * in the .png will not be read. This will improve load performance.
         * Closest will find the closest matching colour from the OpenRCT2 palette.
         * Dither will add noise to reduce colour banding for images rich in colour.
         * If undefined, only colours that are in OpenRCT2 palette will be imported.
         */
        palette?: "keep" | "closest" | "dither";

        /**
         * Data can either by a:
         * - A base64 string.
         * - An array of bytes
         * - A {@link Uint8Array} of bytes
         */
        data: string | number[] | Uint8Array;
    }

    interface ImageIndexRange {
        start: number;
        count: number;
    }

    interface Profiler {
        getData(): ProfiledFunction[];
        start(): void;
        stop(): void;
        reset(): void;
        readonly enabled: boolean;
    }

    interface ProfiledFunction {
        readonly name: string;
        readonly callCount: number;
        readonly minTime: number;
        readonly maxTime: number;
        readonly totalTime: number;
        readonly parents: number[];
        readonly children: number[];
    }

    interface ObjectManager {
        /**
         * Gets all the objects that are installed and can be loaded into the park.
         */
        readonly installedObjects: InstalledObject[];

        /**
         * Gets the installed object with the given identifier, or null
         * if the object was not found.
         * @param identifier The object identifier.
         */
        getInstalledObject(identifier: string): InstalledObject | null;

        /**
         * Attempt to load the object into the current park at the given index for the object type.
         * If an object already exists at the given index, that object will be unloaded and this object
         * will replace it, providing the object type is the same.
         * @param identifier The object identifier.
         * @param index The index to load the object to. If not provided, an empty slot will be used.
         * @returns The index of the loaded object.
         */
        load(identifier: string, index?: number): LoadedObject | null;

        /**
         * Attempt to load the given objects into the current park, given they are not already loaded.
         */
        load(identifiers: string[]): (LoadedObject | null)[];

        /**
         * Unloads the object, if loaded.
         * @param identifier The object identifier to unload.
         */
        unload(identifier: string): void;

        /**
         * Unloads the specified objects, if loaded.
         * @param identifiers The object identifiers to unload.
         */
        unload(identifiers: string[]): void;

        /**
         * Unloads the specified object, if loaded.
         * @param type The object type.
         * @param index The index of the slot to unload for the given type.
         */
        unload(type: ObjectType, index: number): void;

        /**
         * Gets the loaded object at the given index.
         * @param type The object type.
         * @param index The index.
         */
        getObject(type: ObjectType, index: number): LoadedObject;
        getObject(type: "ride", index: number): RideObject;
        getObject(type: "small_scenery", index: number): SmallSceneryObject;
        getObject(type: "large_scenery", index: number): LargeSceneryObject;
        getObject(type: "wall", index: number): WallObject;
        getObject(type: "footpath_addition", index: number): FootpathAdditionObject;
        getObject(type: "banner", index: number): BannerObject;
        getObject(type: "scenery_group", index: number): SceneryGroupObject;
        getObject(type: "music", index: number): LoadedObject;

        /**
         * Gets all the currently loaded objects for a given object type.
         * @param type The object type.
         */
        getAllObjects(type: ObjectType): LoadedObject[];
        getAllObjects(type: "ride"): RideObject[];
        getAllObjects(type: "small_scenery"): SmallSceneryObject[];
        getAllObjects(type: "large_scenery"): LargeSceneryObject[];
        getAllObjects(type: "wall"): WallObject[];
        getAllObjects(type: "footpath_addition"): FootpathAdditionObject[];
        getAllObjects(type: "banner"): BannerObject[];
        getAllObjects(type: "scenery_group"): SceneryGroupObject[];
        getAllObjects(type: "music"): LoadedObject[];
    }

    /**
     * Interface to handle the plugin manager
     */
    interface PluginManager {
        readonly plugins: PluginMetadata[];
    }
}
