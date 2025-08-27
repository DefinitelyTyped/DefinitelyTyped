/**
 * @author Mugen87 / https://github.com/Mugen87
 */

import { GameEntity, MeshGeometry } from "yuka";

export class Ground extends GameEntity {
    geometry: MeshGeometry;

    constructor(geometry: MeshGeometry) {
        super();

        this.geometry = geometry;
    }

    handleMessage(): boolean {
        // do nothing

        return true;
    }
}
