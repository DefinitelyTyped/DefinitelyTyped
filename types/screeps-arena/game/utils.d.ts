/* eslint-disable camelcase */
declare module "game/utils" {
    import {
        BuildableStructure,
        DirectionConstant,
        ERR_FULL,
        ERR_INVALID_ARGS,
        ERR_INVALID_TARGET,
        TERRAIN_SWAMP,
        TERRAIN_WALL,
    } from "game/constants";
    import { _Constructor, ConstructionSite, GameObject, Id, RoomPosition } from "game/prototypes";
    import { FindPathOpts, PathStep } from "game/path-finder";

    /**
     * Get count of game ticks passed since the start of the game
     */
    export function getTime(): number;
    /**
     * Get an object with the specified unique ID.
     */
    export function getObjectById<T>(id: Id<T>): T | null;
    /**
     * Get all objects in the game.
     */
    export function getObjects(): GameObject[];
    /**
     * Get all objects in the game with the specified prototype, for example, all creeps
     */
    export function getObjectsByPrototype<T>(prototype: _Constructor<T>): T[];
    /**
     * Use this method to get heap statistics for your virtual machine
     */
    export function getHeapStatistics(): HeapStatistics;
    /**
     * Get linear direction by differences of x and y
     */
    export function getDirection(dx: number, dy: number): DirectionConstant;

    /**
     * Find an optimal path between fromPos and toPos. Unlike searchPath,
     * findPath avoid all obstacles by default (unless costMatrix is specified).
     * @param opts object containing additional options:
     * ignore: array (objects which should be treated as obstacles during the search)
     * Any options supported by searchPath method
     */
    export function findPath(
        fromPos: RoomPosition,
        toPos: RoomPosition,
        opts?: FindPathOpts,
    ): PathStep[];

    /**
     * Get linear range between two objects. a and b may be any object containing x and y properties.
     * @deprecated alias for getRange
     */
    export function getDistance(a: RoomPosition, b: RoomPosition): number;

    /**
     * Get linear range between two objects. a and b may be any object containing x and y properties.
     */
    export function getRange(a: RoomPosition, b: RoomPosition): number;

    /**
     * Get an integer representation of the terrain at the given position.
     * Returns TERRAIN_WALL, TERRAIN_SWAMP, or 0.
     * @param pos pos should be an object containing x and y properties
     */
    export function getTerrainAt(
        pos: RoomPosition,
    ): TERRAIN_WALL | TERRAIN_SWAMP | 0;

    /**
     * Find all positions from the given positions array within the specified linear range.
     */
    export function findInRange<T extends RoomPosition>(
        fromPos: RoomPosition,
        positions: T[],
        range: number,
    ): T[];

    /**
     * Find a position with the shortest linear distance from the given position, or null otherwise.
     */
    export function findClosestByRange<T extends RoomPosition>(
        fromPos: RoomPosition,
        positions: T[],
    ): T;

    /**
     * Find a position with the shortest path from the given position, or null otherwise.
     * @param opts object containing additional options:
     * ignore: array (objects which should be treated as obstacles during the search)
     * Any options supported by searchPath method
     */
    export function findClosestByPath<T extends RoomPosition>(
        fromPos: RoomPosition,
        positions: T[],
        opts?: FindPathOpts,
    ): T;

    /**
     * Create new ConstructionSite at the specified location.
     * @param x The X position.
     * @param y The Y position.
     * @param structurePrototype One of the following constants: StuctureExtension, StructureTower
     * @returns Result Code: OK, ERR_INVALID_TARGET, ERR_INVALID_ARGS, ERR_RCL_NOT_ENOUGH
     */
    export function createConstructionSite(
        x: number,
        y: number,
        structureType: _Constructor<BuildableStructure>,
    ): {
        object?: ConstructionSite | undefined;
        error?: ERR_INVALID_ARGS | ERR_INVALID_TARGET | ERR_FULL | undefined;
    };

    export interface HeapStatistics {
        total_heap_size: number;
        total_heap_size_executable: number;
        total_physical_size: number;
        total_available_size: number;
        used_heap_size: number;
        heap_size_limit: number;
        malloced_memory: number;
        peak_malloced_memory: number;
        does_zap_garbage: 0 | 1;
        externally_allocated_size: number;
    }
}
