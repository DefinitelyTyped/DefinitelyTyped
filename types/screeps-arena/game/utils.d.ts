declare module "game/utils" {
  import { SearchPathOptions } from "game/path-finder";
  import { Position, GameObject, Structure, ConstructionSite } from "game/prototypes";
  import {
    ERR_INVALID_ARGS, ERR_INVALID_TARGET, ERR_FULL,
    TOP, TOP_RIGHT, RIGHT, BOTTOM_RIGHT, BOTTOM, BOTTOM_LEFT, LEFT, TOP_LEFT,
    TERRAIN_PLAIN, TERRAIN_WALL, TERRAIN_SWAMP
  } from "game/constants";

  import { searchPath } from "game/path-finder"; // eslint-disable-line @typescript-eslint/no-unused-vars

  export type Direction =
      typeof TOP |
      typeof TOP_RIGHT |
      typeof RIGHT |
      typeof BOTTOM_RIGHT |
      typeof BOTTOM |
      typeof BOTTOM_LEFT |
      typeof LEFT |
      typeof TOP_LEFT;
  export type Terrain =
      typeof TERRAIN_WALL |
      typeof TERRAIN_SWAMP |
      typeof TERRAIN_PLAIN;

  export type DoesZapCodeSpaceFlag = 0 | 1;
  export interface HeapInfo {
    total_heap_size: number;
    total_heap_size_executable: number;
    total_physical_size: number;
    total_available_size: number;
    used_heap_size: number;
    heap_size_limit: number;
    malloced_memory: number;
    peak_malloced_memory: number;
    does_zap_garbage: DoesZapCodeSpaceFlag;
    number_of_native_contexts: number;
    number_of_detached_contexts: number;
    externally_allocated_size: number;
  }

  export type FindPathOptions = SearchPathOptions & { ignore?: GameObject[] };

  /** {@link createConstructionSite} call result*/
  export interface CreateConstructionSiteResult {
    /** the instance of {@link ConstructionSite} created by this call */
    object?: ConstructionSite | undefined;

    /** the error code */
    error?: typeof ERR_INVALID_ARGS | typeof ERR_INVALID_TARGET | typeof ERR_FULL | undefined;
  }

  /**
   * Create new {@link ConstructionSite} at the specified location.
   * @param pos The location as an object with x and y properties.
   * @param structurePrototype A prototype that extends {@link GameObject}
   * @returns a {@link CreateConstructionSiteResult} object with the call result
   */
  export function createConstructionSite<T extends Structure>(pos: Position, structurePrototype: { new(): T }): CreateConstructionSiteResult;

  /**
   * Find a position with the shortest path from the given position
   * @param fromPos The position to search from. May be {@link GameObject} or any object containing x and y properties
   * @param positions The positions to search among. An array of {@link GameObject} or any objects containing x and y properties
   * @param options An object containing additional pathfinding flags
   * @param options.costMatrix Custom navigation cost data
   * @param options.plainCost Cost for walking on plain positions. The default is 2
   * @param options.swampCost Cost for walking on swamp positions. The default is 10
   * @param options.flee Instead of searching for a path to the goals this will search for a path away from the goals. The default is false
   * @param options.maxOps The maximum allowed pathfinding operations. The default value is 50000
   * @param options.maxCost The maximum allowed cost of the path returned. The default is Infinity
   * @param options.heuristicWeight Weight from 1 to 9 to apply to the heuristic in the A* formula F = G + weight * H. The default value is 1.2
   * @param options.ignore objects which should not be treated as obstacles during the search
   * @returns the closest object from {@link positions}, or null if there was no valid positions
   */
  export function findClosestByPath<T extends Position>(fromPos: Position, positions: T[], options?: FindPathOptions): T;

  /**
   * Find a position with the shortest linear distance from the given position
   * @param fromPos The position to search from. May be {@link GameObject} or any object containing x and y properties
   * @param positions The positions to search among. An array of {@link GameObject} or any objects containing x and y properties
   * @returns the closest object from {@link positions}
   */
  export function findClosestByRange<T extends Position>(fromPos: Position, positions: T[]): T;

  /**
   * Find all objects in the specified linear range
   * @param fromPos The origin position. May be {@link GameObject} or any object containing x and y properties
   * @param positions The positions to search. An array of {@link GameObject} or any objects containing x and y properties
   * @param range The range distance
   * @returns an array with the objects found
   */
  export function findInRange<T extends Position>(fromPos: Position, positions: T[], range: number): T[];

  /**
   * Find an optimal path between fromPos and toPos.
   * Unlike {@link searchPath}, findPath avoid all obstacles by default (unless costMatrix is specified).
   * @param fromPos The start position. May be {@link GameObject} or any object containing x and y properties.
   * @param toPos The target position. May be {@link GameObject} or any object containing x and y properties.
   * @param options An object containing additional pathfinding flags
   * @param options.costMatrix Custom navigation cost data
   * @param options.plainCost Cost for walking on plain positions. The default is 2
   * @param options.swampCost Cost for walking on swamp positions. The default is 10
   * @param options.flee Instead of searching for a path to the goals this will search for a path away from the goals. The default is false
   * @param options.maxOps The maximum allowed pathfinding operations. The default value is 50000
   * @param options.maxCost The maximum allowed cost of the path returned. The default is Infinity
   * @param options.heuristicWeight Weight from 1 to 9 to apply to the heuristic in the A* formula F = G + weight * H. The default value is 1.2
   * @param options.ignore objects which should not be treated as obstacles during the search
   * @returns the path found as an array of objects containing x and y properties
   */
  export function findPath(fromPos: Position, toPos: Position, options?: FindPathOptions): Position[];

  /**
   * @returns CPU wall time elapsed in the current tick in nanoseconds
   */
  export function getCpuTime(): number;

  /**
   * Get linear direction by differences of x and y.
   * @param dx The difference of X coordinate.
   * @param dy The difference of Y coordinate.
   * @returns a number representing one of the direction constants.
   */
  export function getDirection(dx: number, dy: number): Direction;

  /**
   * Use this method to get heap statistics for your virtual machine.
   */
  export function getHeapStatistics(): HeapInfo;

  /**
   * Get an object with the specified unique ID
   * @param id The id property of the needed object. See {@link GameObject} prototype.
   */
  export function getObjectById(id: string): GameObject;

  /**
   * Get all game objects in the game
   */
  export function getObjects(): GameObject[];

  /**
   * Get all objects in the game with the specified prototype, for example, all creeps
   * @param prototype A prototype that extends {@link GameObject}
   * @returns Array of objects with the specified prototype
   */
  export function getObjectsByPrototype<T extends GameObject>(prototype: { new(): T }): T[];

  /**
   * Get linear range between two objects. a and b may be {@link GameObject} or any object containing x and y properties
   * @param a The first of two objects. May be {@link GameObject} or any object containing x and y properties.
   * @param b The second of two objects. May be {@link GameObject} or any object containing x and y properties.
   * @returns a number of squares between two objects
   */
  export function getRange(a: Position, b: Position): number;

  /**
   * Get an integer representation of the terrain at the given position.
   * @param pos The position as an object containing x and y properties.
   * @returns either {@link TERRAIN_PLAIN}, {@link TERRAIN_WALL}, or {@link TERRAIN_SWAMP}
   */
  export function getTerrainAt(pos: Position): Terrain;

  /**
   * @returns the number of ticks passed from the start of the current game.
   */
  export function getTicks(): number;
}
