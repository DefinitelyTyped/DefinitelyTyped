// Type definitions for non-npm package zedit__upf 2.0
// Project: https://github.com/zedit/zedit-unified-patching-framework
// Definitions by: Alex Layton <https://github.com/awlayton>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 3.8

import type { XELib, GameMode, RecordHandle, FileHandle } from 'xelib';

import type { FSJetpack } from 'fs-jetpack/types';
import type { FileFilter } from 'electron';

/**
 * UPF modules have these variables exposed globally:
 *
 * registerPatcher, fh, info, patcherPath, patcherUrl, xelib
 * @see {@link https://z-edit.github.io#/docs?t=Modules%2FPatcher_Modules}
 */
declare global {
    /**
     * @deprecated The Patcher used in this call contains deprecated option types
     * @see LegacyPatcher
     */
    // tslint:disable-next-line no-unnecessary-generics
    function registerPatcher<L extends {} = {}, S extends {} = {}>(patcher: LegacyPatcher<S, L>): void;
    /**
     * Function for registering a patcher with UPF
     *
     * Generics are needed for inference within Patcher interface to work
     */
    // tslint:disable-next-line no-unnecessary-generics unified-signatures
    function registerPatcher<L extends {} = {}, S extends {} = {}>(patcher: Patcher<S, L>): void;

    /**
     * @see FileHelpers
     */
    const fh: FileHelpers;

    /**
     * Object containing information about your module.
     * Basically just your module.json.
     */
    const info: ModuleInfo;

    /**
     * Absolute path for the folder where your patcher module is installed on the user's machine.
     * Should be prepended to paths when loading/saving files.
     */
    const patcherPath: string;

    /**
     * `file://` URL for the folder where your patcher module is installed on the user's machine.
     * Should be prepended to any HTML template/resource URLs.
     */
    const patcherUrl: string;

    /**
     * xelib wrapper instance exposed to zEdit modules
     *
     * @see XELib
     */
    const xelib: XELibModule;

    /**
     * The zEdit angular application.
     *
     * @see {@link https://docs.angularjs.org/api/ng/type/angular.Module}
     * @see {@link https://docs.angularjs.org/guide/di}
     */
    const ngapp: object;
}

/**
 * Modify XELib interface before exposing to module.
 *
 * Some xelib functions should not be used by zEdit modules.
 */
export interface XELibModule extends XELib {
    /**
     * This function should never be called from zEdit modules.
     * @internal
     * @see XELib.Initialize
     */
    Initialize: never;
    /**
     * This function should never be called from zEdit modules.
     * @internal
     * @see XELib.Finalize
     */
    Finalize: never;
    /**
     * This function should never be called from zEdit modules.
     * @internal
     * @see XELib.SetSortMode
     */
    SetSortMode: never;

    /**
     * This function should never be called from zEdit modules.
     * @internal
     * @see XELib.ClearMessages
     */
    ClearMessages: never;
    /**
     * This function should never be called from zEdit modules.
     * @internal
     * @see XELib.GetExceptionMessage
     */
    GetExceptionMessage: never;

    /**
     * This function should never be called from zEdit modules.
     * @internal
     * @see XELib.SetGamePath
     */
    SetGamePath: never;
    /**
     * This function should never be called from zEdit modules.
     * @internal
     * @see XELib.SetLanguage
     */
    SetLanguage: never;
    /**
     * This function should never be called from zEdit modules.
     * @internal
     * @see XELib.SetGameMode
     */
    SetGameMode: never;
    /**
     * This function should never be called from zEdit modules.
     * @internal
     * @see XELib.GetLoadOrder
     */
    GetLoadOrder: never;
    /**
     * This function should never be called from zEdit modules.
     * @internal
     * @see XELib.GetActivePlugins
     */
    GetActivePlugins: never;
    /**
     * This function should never be called from zEdit modules.
     * @internal
     * @see XELib.LoadPlugins
     */
    LoadPlugins: never;
}

/**
 * [patchFile, helpers, settings, locals]
 */
export type ExectuteCTX<S, L> = [FileHandle, Helpers, S, L];

export type ProcessBlock<S, L> = (
    | {
          /**
           * Loaded records which pass filter will be copied to the patch plugin,
           * and then passed to the patch function.
           */
          load: {
              /**
               * Record signature to load.
               * You can view record signatures by top level group names
               * on the tree view and in record headers.
               */
              signature: string;
              /**
               * Pass true to include override records.
               *
               * @default false
               */
              overrides?: boolean | undefined;
              /**
               * Filter function. Called for each loaded record.
               * Return false to skip patching a record.
               */
              filter?: ((record: RecordHandle) => boolean) | undefined;
          };
      }
    | {
          /**
           * A function which can be used instead of load.
           * The records function allows you to return a custom array of records to patch.
           */
          records: (filesToPatch: FileHandle[], helpers: Helpers, settings: S, locals: L) => RecordHandle[];
      }
) & {
    /**
     * Called for each record copied to the patch plugin.
     * This is the step where you set values on the record.
     */
    patch?: ((record: RecordHandle, helpers: Helpers, settings: S, locals: L) => void) | undefined;
};

/**
 * @typeParam S Type for the Patcher's settings
 * @typeParam L Type for the Patcher's local variables
 *
 * @see {@link https://z-edit.github.io#/docs?t=Development%2FAPIs%2FUPF_Patcher_API}
 * @see registerPatcher
 */
export interface Patcher<S extends {}, L extends {}> {
    /**
     * Your patcher module information.
     * You should use the `info` variable as the value here.
     */
    info: ModuleInfo;
    /**
     * Array of the game modes your patcher works with
     */
    gameModes: GameMode[];
    settings: {
        /**
         * The label is what gets displayed as the settings tab's label
         */
        label: string;
        /**
         * If you set hide to true the settings tab will not be displayed
         *
         * @default false
         */
        hide?: boolean | undefined;
        /**
         * URL to the HTML template to use for the settings tab.
         * You'll want to use the `patcherUrl` global in this URL.
         *
         * @example `${patcherUrl}/partials/settings.html`
         */
        templateUrl: string;
        /**
         * controller function for your patcher's settings tab.
         * This is where you put any extra data binding/functions
         * that you need to access through angular on the settings tab.
         *
         * @todo what is $scope?
         */
        controller?: (($scope: unknown) => void) | undefined;
        /**
         * Default settings for your patcher.
         */
        defaultSettings: {
            /**
             * Use the patchFileName setting if you want to use a unique patch file
             * for your patcher instead of the default zPatch.esp plugin file.
             * (using zPatch.esp is recommended)
             *
             * @default zPatch.esp
             */
            patchFileName?: string | undefined;
        } & S;
    };
    /**
     * Optional array of required filenames.
     * Can omit if empty.
     *
     * @default []
     */
    requiredFiles?: (() => string[]) | string[] | undefined;
    /**
     * You can program strict exclusions here.
     * These exclusions cannot be overridden by the user.
     * This function can be removed if you don't want to hard-exclude any files.
     */
    getFilesToPatch?: ((filenames: string[]) => string[]) | undefined;
    /**
     * This function gets called when your patcher is executed.
     *
     * @param patchFile Handle to patch file
     * @param settings @see defaultSettings
     * @param locals Store values to refer to them later in the patching process.
     */
    execute: ((...args: ExectuteCTX<S, L>) => Executor<S, L>) | Executor<S, L>;
}

/**
 * Type for Patcher containing deprecated option types.
 *
 * @see Patcher
 */
export type LegacyPatcher<S extends {}, L extends {}> = Patcher<S, L> &
    (
        | {
              /**
               * @deprecated Use function version
               * @see Patcher.requiredFiles
               */
              requiredFiles: string[];
          }
        | {
              /**
               * @deprecated Use function version
               * @see Patcher.execute
               */
              execute: Executor<S, L>;
          }
    );

/**
 * @see Patcher.execute
 */
export interface Executor<S, L> {
    /**
     * Perform anything that needs to be done once at the beginning of the
     * patcher's execution here.
     * This can be used to cache records which don't need to be patched,
     * but need to be referred to later on.  Store values
     */
    initialize?: ((...args: ExectuteCTX<S, L>) => void) | undefined;
    /**
     * Array of process blocks.
     *
     * The blocks are run sequentially
     */
    process: Array<ProcessBlock<S, L>>;
    /**
     * Called after processing.
     * Can be used to perform any cleanup/final steps
     * once your patcher has finished executing.
     *
     * Note that UPF automatically removes ITPO records and unused masters,
     * so you don't need to do that here.
     */
    finalize?: ((...args: ExectuteCTX<S, L>) => void) | undefined;
}

/**
 * @see {@link https://z-edit.github.io#/docs?t=Modules}
 */
export interface ModuleInfo {
    /**
     * The module's unique identifier.
     */
    id: string;
    /**
     * The module's display name.
     * This is the name displayed in the Manage Extensions Modal.
     */
    name: string;
    /**
     * The author(s) of the module.
     */
    author: string;
    /**
     * Version string for the module.
     */
    version: string;
    /**
     * `MM/DD/YYYY` date string corresponding to when the module was initially released.
     */
    released: string;
    /**
     * `MM/DD/YYYY` date string corresponding to when the module was last updated.
     */
    updated: string;
    /**
     * Short description of the module.
     */
    description: string;
    /**
     * array of the module id strings which your module requires to function properly.
     *
     * @default []
     */
    requires?: string[] | undefined;
    /**
     * string specifying the module loader your module should be loaded with.
     *
     * @default default
     */
    moduleLoader?: string | undefined;
    /**
     * boolean specifying whether or not the module can be hot loaded.
     * Hot loading is when a module is loaded after zEdit has started.
     * Modules cannot be hot loaded if they use `ngapp`.
     *
     * @default false
     */
    canHotLoad?: boolean | undefined;
}

/**
 * Helpers which you can use at any point in your patcher's execution.
 *
 * @see {@link https://z-edit.github.io#/docs?t=Development%2FAPIs%2FUPF_Patcher_API}
 */
export interface Helpers {
    /**
     * Load records from the files your patcher is targeting.
     */
    loadRecords(
        search: string,
        /**
         * @default false
         */
        includeOverride?: boolean,
    ): RecordHandle[];
    /**
     * Call this function to print a message to the progress modal's log.
     */
    logMessage(message: string): void;
    /**
     * Uses record consistency caching to make certain the input record
     * stays at the same Form ID when the patch gets regenerated.
     * This function should be used on all records created by UPF patchers,
     * excluding overrides.
     * The id should be a unique string value for the record.
     * It is recommended to use a unique prefix for id to avoid collisions
     * with other patchers.
     * The record's editor ID will be set to id if the record
     * has an Editor ID field.
     */
    cacheRecord(record: RecordHandle, id: string): RecordHandle;
}

/**
 * object/array representable in JSON
 * @internal
 */
export type JSONAble = number | boolean | string | null | JSONAble[] | { [k: string]: JSONAble };

/**
 * This API provides functions for interfacing with the user's file system through
 * `fs-jetpack`, `extract-zip`, and `shell`.
 *
 * Unless otherwise specified, all paths passed to functions can be a path relative to the application root folder or an absolute path.
 * @see {@link https://z-edit.github.io#/docs?t=Development%2FAPIs%2FFile_Helpers}
 */
export interface FileHelpers {
    /**
     * `fs-jetpack` instance with current working directroy set to the application root directory.
     */
    jetpack: FSJetpack;

    /**
     * Path to the application resource directory.
     * In a development environment this is just `.\app`,
     * but in production it is `.\resources\app.asar\app`.
     */
    appPath: string;

    /**
     * Path to the application user data directory.
     * In a development environment this is located at `%appdata%\zEdit (Development)`,
     * and in production this is `%appdata%\zEdit`.
     */
    userPath: string;

    /**
     * `fs-jetpack` instance with current working directory set to `appPath`.
     */
    appDir: FSJetpack;

    /**
     * `fs-jetpack` instance with current working directory set to `userPath`.
     */
    userDir: FSJetpack;

    /**
     * If a file exists at `filePath`, it's read into memory and deserialized into a JavaScript object or array, which is then returned.
     * If a file does not exist at the specified path the `defaultValue` is returned.
     */
    loadJsonFile<T>(filePath: string, defaultValue: T): JSONAble | T;

    /**
     * If a file exists at `filePath`, its contents are read into memory as a UTF8 string and returned.
     * If a file does not exist at the specified path the `defaultValue` is returned.
     */
    loadTextFile<T>(filePath: string, defaultValue: T): string | T;

    /**
     * Serializes the object passed through `value` to the file at `filePath`.
     * Creates the file if missing, else overwrites it.
     */
    saveJsonFile(
        filePath: string,
        value: JSONAble,
        /**
         * @default false
         */
        minify?: boolean,
    ): void;

    /**
     * Writes the text value to the file at `filePath`.
     * Creates the file if missing, else overwrites it.
     */
    saveTextFile(
        filePath: string,
        value: string,
        /**
         * @default utf8
         */
        encoding?: string,
    ): void;

    /**
     * Opens the file at `filePath` with the default program configured to open it.
     */
    openFile(filePath: string): void;

    /**
     * Opens `url` in the user's web browser.
     * The URI protocol must be included in the URL. (e.g. `https://...`)
     */
    openUrl(url: string): void;

    /**
     * Converts the input `path` to a `file://` URL.
     */
    pathToFileUrl(path: string): string;

    /**
     * Converts the input the `file://`` URL to a path.
     */
    fileUrlToPath(fileUrl: string): string;

    /**
     * Extracts the ZIP archive at `filePath` to `destDir`.
     */
    extractArchive(
        filePath: string,
        destDir: string,
        /**
         * @default false
         */
        empty?: boolean,
    ): void;

    getFileBase(filePath: string): string | undefined;

    /**
     * Extracts and returns the file extension from `filePath`.
     * Returns undefined if the path does not end with a file extension.
     */
    getFileExt(filePath: string): string | undefined;

    /**
     * Extracts and returns the filename from `filePath`.
     */
    getFileName(filePath: string): string | undefined;

    /**
     * Extracts and returns the parent directory path from `filePath`.
     */
    getDirectory(filePath: string): string | undefined;

    /**
     * @returns Date modified for the file at `filePath`.
     */
    getDateModified(filePath: string): Date;

    /**
     * @returns array of paths for all directories in the folder at `path`.
     */
    getDirectories(path: string): string[];

    /**
     * @returns path to the directory selected by the user.
     * @returns undefined if the user didn't select a directory.
     */
    selectDirectory(title: string, defaultPath?: string): string | undefined;

    /**
     * @returns path to the file selected by the user.
     * @returns undefined if the user didn't select a file.
     *
     * @see {@link https://github.com/electron/electron/blob/master/docs/api/dialog.md#dialogshowopendialogbrowserwindow-options-callback}
     */
    selectFile(
        title: string,
        defaultPath: string,
        /**
         * @default []
         */
        filters?: FileFilter[],
    ): string | undefined;

    /**
     * @returns path to the file saved by the user.
     * @returns undefined if the user didn't choose to save a file.
     *
     * @see {@link https://github.com/electron/electron/blob/master/docs/api/dialog.md#dialogshowsavedialogbrowserwindow-options-callback}
     */
    saveFile(
        title: string,
        defaultPath: string,
        /**
         * @default []
         */
        filters?: FileFilter[],
    ): string | undefined;
}
