/**
 * @author Mugen87 / https://github.com/Mugen87
 */

import { GameEntity, MovingEntity, NavMesh, Polygon, Vector3 } from "yuka";

const startPosition = new Vector3();
const endPosition = new Vector3();

export class Player extends MovingEntity {
    height: number;
    head: GameEntity;
    navMesh: NavMesh | null;
    currentRegion: Polygon | null;

    constructor() {
        super();
        this.maxSpeed = 4;
        this.height = 2;
        this.head = new GameEntity();
        this.add(this.head);
        this.updateOrientation = false;
        this.navMesh = null;
        this.currentRegion = null;
    }

    update(delta: number): this {
        startPosition.copy(this.position);

        super.update(delta);

        endPosition.copy(this.position);
        if (!(this.navMesh && this.currentRegion)) {
            return this;
        }
        // ensure the entity stays inside its navmesh
        this.currentRegion = this.navMesh.clampMovement(
            this.currentRegion,
            startPosition,
            endPosition,
            this.position,
        );
        // adjust height of player according to the ground
        const distance = this.currentRegion.distanceToPoint(this.position);
        this.position.y -= distance * 0.2; // smooth transition

        return this;
    }
}
