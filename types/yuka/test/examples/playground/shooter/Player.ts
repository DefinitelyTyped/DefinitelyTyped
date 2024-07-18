/**
 * @author Mugen87 / https://github.com/Mugen87
 */

import { GameEntity, MovingEntity, Quaternion, Vector3 } from "yuka";
import { Blaster } from "./Blaster";

const q = new Quaternion();

export class Player extends MovingEntity {
    headContainer: GameEntity;
    head: GameEntity;
    weaponContainer: GameEntity;
    weapon: Blaster;

    constructor() {
        super();
        this.headContainer = new GameEntity();
        this.add(this.headContainer);

        this.head = new GameEntity();
        this.head.position.set(0, 2, 0);
        this.headContainer.add(this.head);

        this.weaponContainer = new GameEntity();
        this.head.add(this.weaponContainer);

        this.weapon = new Blaster(this);
        this.weapon.position.set(0.3, -0.3, -1);
        this.weaponContainer.add(this.weapon);

        //

        this.forward.set(0, 0, -1);
        this.maxSpeed = 10;
        this.updateOrientation = false;
    }

    getDirection(result: Vector3): Vector3 {
        q.multiplyQuaternions(this.rotation, this.head.rotation);

        return result.copy(this.forward).applyRotation(q).normalize();
    }
}
