/**
 * @author Mugen87 / https://github.com/Mugen87
 */

import { Vector3, Vehicle } from "yuka";

import { HideBehavior } from "./HideBehavior";
import { Player } from "./Player";
import world from "./World";

export class Enemy extends Vehicle {
    geometry: {};
    deathAnimDuration: number;
    currentTime: number;
    dead: boolean;
    notifiedWorld: boolean;
    spawningPoint: Vector3 | null;

    constructor(geometry: {}) {
        super();

        this.geometry = geometry;
        this.maxSpeed = 5;
        this.dead = false;
        this.notifiedWorld = false;
        this.spawningPoint = null;
    }

    start(): this {
        if (!this.manager) {
            return this;
        }
        const player = this.manager.getEntityByName("player");
        if (!(player instanceof Player)) {
            throw new Error();
        }

        const hideBehavior = new HideBehavior(this.manager, player);
        this.steering.add(hideBehavior);

        return this;
    }

    update(delta: number): this {
        super.update(delta);

        if (this.dead) {
            if (!this.notifiedWorld) {
                this.notifiedWorld = true;
                world.hits++;
            }

            world.remove(this);
        }

        return this;
    }

    handleMessage() {
        this.dead = true;

        return true;
    }
}
