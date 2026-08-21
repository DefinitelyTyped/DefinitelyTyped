import { BufferGeometry, Vector3 } from "three";

export interface LoftGeometryOptions {
    closed?: boolean | undefined;
    capStart?: boolean | undefined;
    capEnd?: boolean | undefined;
}

export interface LoftGeometryParameters {
    sections: Vector3[][];
    closed: boolean;
    capStart: boolean;
    capEnd: boolean;
}

/**
 * This class can be used to generate a geometry by lofting (skinning) a surface
 * through a series of cross sections. Each section is an array of points in 3D
 * space and all sections must have the same number of points.
 *
 * `LoftGeometry` is the general case of geometries like {@link LatheGeometry}
 * (which revolves a fixed profile around an axis) or {@link TubeGeometry}
 * (which sweeps a circular section along a path): the sections can have any
 * shape, and can change shape, size, position and orientation from one
 * section to the next.
 *
 * Sections wind around the loft so the resulting face normals point outwards
 * when each section is ordered counterclockwise as seen from the end of the
 * loft, looking back towards the start. If the surface appears inside out,
 * reverse the point order of each section.
 *
 * ```js
 * const sections = [];
 *
 * for ( let i = 0; i <= 10; i ++ ) {
 *
 * 	const points = [];
 * 	const radius = 2 + Math.sin( i * 0.8 );
 *
 * 	for ( let j = 0; j < 32; j ++ ) {
 *
 * 		const angle = j / 32 * Math.PI * 2;
 * 		points.push( new THREE.Vector3( Math.sin( angle ) * radius, i, Math.cos( angle ) * radius ) );
 *
 * 	}
 *
 * 	sections.push( points );
 *
 * }
 *
 * const geometry = new LoftGeometry( sections, { capStart: true, capEnd: true } );
 * const material = new THREE.MeshStandardMaterial( { color: 0x00ff00 } );
 * const mesh = new THREE.Mesh( geometry, material );
 * scene.add( mesh );
 * ```
 *
 * @augments BufferGeometry
 * @three_import import { LoftGeometry } from 'three/addons/geometries/LoftGeometry.js';
 */
export class LoftGeometry extends BufferGeometry {
    /**
     * Constructs a new loft geometry.
     *
     * @param {Array<Array<Vector3>>} sections - The cross sections to skin. At least
     * two sections are required and all sections must have the same number of points.
     * @param {Object} [options={}] - The loft options.
     * @param {boolean} [options.closed=true] - Whether each section is treated as a
     * closed ring (e.g. a fuselage) or an open strip (e.g. a ribbon).
     * @param {boolean} [options.capStart=false] - Whether the first section is closed
     * with a cap or not.
     * @param {boolean} [options.capEnd=false] - Whether the last section is closed
     * with a cap or not.
     */
    constructor(sections?: Vector3[][], options?: LoftGeometryOptions);
    /**
     * Holds the constructor parameters that have been
     * used to generate the geometry. Any modification
     * after instantiation does not change the geometry.
     *
     * @type {Object}
     */
    parameters: LoftGeometryParameters;
}
