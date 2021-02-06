interface VariablesMapBase {
    [x: string]: any;
}

/**
 * This is a dummy interface for the 'setup' object. Its sole purpose is to be merged
 * with user declarations that provide its real game content.
 *
 * @example
 * a_project_file.d.ts:
 * declare module "twine-sugarcube" {
 *     export interface SugarCubeSetupObject {
 *         player: App.Entity.Player;
 *         loot: App.LootManager;
 * }
 *
 * export { };
 */
// tslint:disable-next-line:no-empty-interface
export interface SugarCubeSetupObject {
}

/**
 * This is a dummy interface for the story variables object. Its sole purpose is to be merged
 * with user declarations that provide its real game content.
 *
 * @example
 * a_project_file.d.ts:
 * declare module "twine-sugarcube" {
 *     export interface SugarCubeStoryVariables {
 *         location: string;
 *         hasKey: boolean;
 * }
 *
 * export { };
 */
// tslint:disable-next-line:no-empty-interface
export interface SugarCubeStoryVariables {
}

// tslint:disable-next-line:no-empty-interface
export interface SugarCubeTemporaryVariables extends VariablesMapBase {
}

/**
 * This is a dummy interface for the game settings object. Its sole purpose is to be merged
 * with user declarations that provide its real game content.
 *
 * @example
 * a_project_file.d.ts:
 * declare module "twine-sugarcube" {
 *     export interface SugarCubeSettingVariables {
 *         backgroundMusicVolume: number;
 *         showHints: boolean;
 * }
 *
 * export { };
 */
// tslint:disable-next-line:no-empty-interface
export interface SugarCubeSettingVariables {
}

export {};
