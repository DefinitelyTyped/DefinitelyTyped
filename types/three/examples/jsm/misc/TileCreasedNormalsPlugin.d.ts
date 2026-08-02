import { Object3D } from "../../../src/core/Object3D.js";

export interface TileCreasedNormalsPluginOptions {
    creaseAngle?: number | undefined;
}

/**
 * A plugin for `3d-tiles-renderer` that computes creased vertex normals for the
 * geometry of each loaded tile: smooth normals everywhere except where faces meet
 * at an angle greater than the crease angle. Useful for photogrammetry tile sets
 * like Google Photorealistic 3D Tiles which come without vertex normals.
 *
 * The normals are computed in a Web Worker so tile processing doesn't block the
 * main thread. Tiles are displayed once their normals are ready.
 *
 * ```js
 * tiles.registerPlugin( new TileCreasedNormalsPlugin( { creaseAngle: Math.PI / 6 } ) );
 * ```
 *
 * @three_import import { TileCreasedNormalsPlugin } from 'three/addons/misc/TileCreasedNormalsPlugin.js';
 */
export class TileCreasedNormalsPlugin {
    /**
     * Constructs a new plugin.
     *
     * @param {Object} [options] - The configuration options.
     * @param {number} [options.creaseAngle=Math.PI/3] - The crease angle in radians.
     */
    constructor({ creaseAngle }?: TileCreasedNormalsPluginOptions);
    /**
     * The crease angle in radians.
     *
     * @type {number}
     */
    creaseAngle: number;
    /**
     * Called by the tiles renderer for each loaded tile model. The tile is
     * displayed once the returned promise resolves.
     *
     * @param {Object3D} scene - The tile model.
     * @return {Promise} A promise that resolves when all geometries have creased normals.
     */
    processTileModel(scene: Object3D): Promise<void>;
    /**
     * Called by the tiles renderer when the plugin is unregistered or the
     * tiles renderer is disposed.
     */
    dispose(): void;
}
