import { GameEntity, MeshGeometry, Ray, Vector3 } from "yuka";

/**
 * @author robp94 / https://github.com/robp94
 */
class Obstacle extends GameEntity {
    geometry: MeshGeometry;

    constructor(geometry: MeshGeometry = new MeshGeometry()) {
        super();
        this.geometry = geometry;
    }

    lineOfSightTest(ray: Ray, intersectionPoint: Vector3) {
        return this.geometry.intersectRay(ray, this.worldMatrix, true, intersectionPoint);
    }
}

export { Obstacle };
