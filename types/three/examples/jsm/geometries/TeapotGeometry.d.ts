import { BufferGeometry } from "three";

/**
 * TeapotGeometry tessellates the famous Utah teapot database by Martin Newell.
 *
 * TeapotGeometry is an add-on, and must be imported explicitly. See
 * [Installation / Addons]{@link https://threejs.org/docs/#manual/en/introduction/Installation}.
 *
 * @example
 * import { TeapotGeometry } from 'three/addons/geometries/TeapotGeometry.js';
 *
 * const geometry = new TeapotGeometry( 50, 18 );
 * const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
 * const teapot = new THREE.Mesh( geometry, material );
 * scene.add( teapot );
 */
export class TeapotGeometry extends BufferGeometry {
    /**
     * @param size Relative scale of the teapot. Optional; Defaults to `50`.
     * @param segments Number of line segments to subdivide each patch edge. Optional; Defaults to `10`.
     * @param bottom Whether the bottom of the teapot is generated or not. Optional; Defaults to `true`.
     * @param lid Whether the lid is generated or not. Optional; Defaults to `true`.
     * @param body Whether the body is generated or not. Optional; Defaults to `true`.
     * @param fitLid Whether the lid is slightly stretched to prevent gaps between the body and lid or not. Optional;
     * Defaults to `true`.
     * @param blinn Whether the teapot is scaled vertically for better aesthetics or not. Optional; Defaults to `true`.
     */
    constructor(
        size?: number,
        segments?: number,
        bottom?: boolean,
        lid?: boolean,
        body?: boolean,
        fitLid?: boolean,
        blinn?: boolean,
    );
}
