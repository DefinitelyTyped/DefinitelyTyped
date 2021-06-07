/**
 * @author Mugen87 / https://github.com/Mugen87
 */
import { GameEntity, MeshGeometry } from "yuka";

class Ground extends GameEntity {
    geometry: MeshGeometry;

    constructor(geometry: MeshGeometry) {
        super();
        this.geometry = geometry;
    }

    handleMessage() {
        // do nothing
        return true;
    }
}

export { Ground };
