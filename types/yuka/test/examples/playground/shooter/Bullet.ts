/**
 * @author Mugen87 / https://github.com/Mugen87
 */

import { MovingEntity, Ray, Vector3 } from "yuka";
import { Player } from "./Player";
import world from "./World";

const intersectionPoint = new Vector3();
const normal = new Vector3();
const ray = new Ray();

export class Bullet extends MovingEntity {
    owner: Player;
    ray: Ray;
    lifetime: number;
    currentTime: number;

    constructor(owner: Player, ray = new Ray()) {
        super();

        this.owner = owner;
        this.ray = ray;

        this.maxSpeed = 400; // 400 m/s

        this.position.copy(ray.origin);
        this.velocity.copy(ray.direction).multiplyScalar(this.maxSpeed);

        const s = 1 + (Math.random() * 3); // scale the shot line a bit

        this.scale.set(s, s, s);

        this.lifetime = 1;
        this.currentTime = 0;
    }

    update(delta: number): this {
        this.currentTime += delta;

        if (this.currentTime > this.lifetime) {
            world.remove(this);
        } else {
            ray.copy(this.ray);
            ray.origin.copy(this.position);

            super.update(delta);

            const entity = world.intersectRay(ray, intersectionPoint, normal);

            if (entity !== null) {
                // calculate distance from origin to intersection point
                const distanceToIntersection = ray.origin.squaredDistanceTo(intersectionPoint);
                const validDistance = ray.origin.squaredDistanceTo(this.position);

                if (distanceToIntersection <= validDistance) {
                    // inform game entity about hit
                    this.owner.sendMessage(entity, "hit");

                    // remove bullet from world
                    world.remove(this);
                }
            }
        }

        return this;
    }
}
