import { BufferGeometry } from "three";

/**
 * {@link EdgeSplitModifier} is intended to modify the geometry "dissolving" the edges to give a smoother look.
 *
 * @example
 * const geometry = new THREE.IcosahedronGeometry( 10, 3 );
 * const modifier = new EdgeSplitModifier();
 * const cutOffAngle = 0.5;
 * const tryKeepNormals = false;
 *
 * modifier.modify( geometry, cutOffAngle, tryKeepNormals );
 */
export class EdgeSplitModifier {
    /**
     * Create a new {@link EdgeSplitModifier} object.
     */
    constructor();

    /**
     * Using interpolated vertex normals, the mesh faces will blur at the edges and appear smooth.
     * You can control the smoothness by setting the `cutOffAngle`.
     * To try to keep the original normals, set `tryKeepNormals` to `true`.
     */
    modify(geometry: BufferGeometry, cutOffPoint: number, tryKeepNormals: boolean): BufferGeometry;
}
