// Type definitions for leaflet-freedraw 2.13
// Project: https://github.com/Wildhoney/Leaflet.FreeDraw
// Definitions by: Jean-Baptiste Zeller <https://github.com/Esurnir>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { FeatureGroup, LatLng, Polygon, LeafletEvent } from 'leaflet';

export as namespace LeafletFreeDraw;

/**
 * Deactivate FreeDraw
 */
export const NONE: number;

/**
 * Create polygons
 */
export const CREATE: number;

/**
 * Edit existing polygons
 */
export const EDIT: number;

/**
 * Delete polygons
 */
export const DELETE: number;

/**
 * Append points to an existing polygon
 */
export const APPEND: number;

/**
 * Edit polygons and can append new points to an existing polygon
 */
export const EDIT_APPEND: number;

/**
 * Create edit delete and append polygons
 */
export const ALL: number;

/**
 * Initialize a new FreeDraw instance
 * @param options FreeDraw option for the new instance
 */
export function freeDraw(options?: FreeDrawOptions): FreeDraw;

/**
 * FreeDraw class
 */
declare class FreeDraw extends FeatureGroup {
    /**
     * Instantiate a new FreeDraw instance, don't forget to add it to leaflet with addLayer
     * @param options Instance options
     */
    constructor(options?: FreeDrawOptions);

    /**
     *
     * @param latlngs Pre-made polygon to add to the map
     * @param [options={concavePolgygons: false}] FreeDraw options, by default concavePolygons : false
     * @returns Polygon added to the FreeDraw instance
     */
    create(latlngs: ReadonlyArray<LatLng>, options?: FreeDrawOptions): Polygon;

    /**
     * Removes the layer from the map it is currently active on.
     */
    remove(): this;

    /**
     * Remove polygon from the FreeDraw instance
     * @param polygon Polygon to remove from the map
     */
    remove(polygon: Polygon): void;

    /**
     * Clear all polygons from FreeDraw
     */
    clear(): void;

    /**
     * Set or retrieve the mode used by FreeDraw
     * @param mode new Mode to use, if not passed, will return the current mode
     */
    mode(mode?: number): number;

    /**
     * Cancel the current action creation in progress
     */
    cancel(): void;

    /**
     * Returns the current amount of polygons stored in FreeDraw
     */
    size(): number;

    /**
     * Array of all polygons stored in the instance
     */
    all(): Polygon[];
}

export default FreeDraw;

/**
 * Option object accepted by the FreeDraw constructor
 */
export interface FreeDrawOptions {
    /**
     * Modifies the default mode.
     * @default ALL
     */
    mode?: number;

    /**
     * By how much to smooth the polygons.
     * @default 0.3
     */
    smoothFactor?: number;

    /**
     * Factor to determine when to delete or when to append an edge.
     * @default 10
     */
    elbowDistance?: number;

    /**
     * By how much to simplify the polygon.
     * @default 1.1
     */
    simplifyFactor?: number;

    /**
     * Whether to attempt merging of polygons that intersect.
     * @default true
     */
    mergePolygons?: boolean;

    /**
     * Whether to apply the concaving algorithm to the polygons.
     * @default true
     */
    concavePolygon?: boolean;

    /**
     * Maximum number of polygons to be added to the map layer.
     * @default Infinity
     */
    maximumPolygons?: number;

    /**
     * Whether to defer markers event until after exiting EDIT mode.
     * @default false
     */
    notifyAfterEditExit?: boolean;

    /**
     * Whether to exit CREATE mode after each polygon creation.
     * @default false
     */
    leaveModeAfterCreate?: boolean;

    /**
     * Size of the stroke when drawing.
     * @default 2
     */
    strokeWidth?: number;
}

/**
 * Event payload sent by markers
 */
export interface MarkerEvent extends LeafletEvent {
    type: 'markers';

    /**
     * Polygons currently stored in the FreeDraw Instance being listened to
     */
    latLngs: LatLng[][];
}

/**
 * Handler type for the "markers" event
 */
export type MarkerEventHandler = (event: MarkerEvent) => void;

declare module "leaflet" {
    interface Evented {
        on(type: 'markers', fn: MarkerEventHandler, context?: any): this;
        off(type: 'markers', fn?: MarkerEventHandler, context?: any): this;
    }
}

type localCreate = typeof CREATE;
type localEdit = typeof EDIT;
type localDelete = typeof DELETE;
type localAppend = typeof APPEND;
type localEditAppend = typeof EDIT_APPEND;
type localNone = typeof NONE;
type localAll = typeof ALL;

declare namespace FreeDraw {
    /**
     * Create polygons
     */
    const CREATE: localCreate;

    /**
     * Edit existing polygons
     */
    const EDIT: localEdit;

    /**
     * Delete polygons
     */
    const DELETE: localDelete;

    /**
     * Append points to an existing polygon
     */
    const APPEND: localAppend;

    /**
     * Edit polygons and can append new points to an existing polygon
     */
    const EDIT_APPEND: localEditAppend;

    /**
     * Deactivate FreeDraw
     */
    const NONE: localNone;

    /**
     * Create edit delete and append polygons
     */
    const ALL: localAll;
}

declare global {
    interface Window {
        /**
         * FreeDraw class
         */
        FreeDraw: typeof FreeDraw;
    }
}
