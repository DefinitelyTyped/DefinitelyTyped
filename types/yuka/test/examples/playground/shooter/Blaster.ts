/**
 * @author Mugen87 / https://github.com/Mugen87
 */

import { GameEntity, Ray, Vector3 } from "yuka";
import { Player } from "./Player";
import world from "./World";

const intersectionPoint = new Vector3();
const target = new Vector3();

export class Blaster extends GameEntity {
    owner: Player;
    status: string;
    roundsLeft: number;
    roundsPerClip: number;
    ammo: number;
    maxAmmo: number;
    shotTime: number;
    reloadTime: number;
    muzzleFireTime: number;
    currentTime: number;
    endTimeShot: number;
    endTimeReload: number;
    endTimeMuzzleFire: number;

    constructor(owner: Player) {
        super();

        this.owner = owner;
        this.status = STATUS.READY;
        this.roundsLeft = 12;
        this.roundsPerClip = 12;
        this.ammo = 48;
        this.maxAmmo = 96;
        // times are in seconds
        this.shotTime = 0.2;
        this.reloadTime = 1.5;
        this.muzzleFireTime = 0.1;
        this.currentTime = 0;
        this.endTimeShot = Infinity;
        this.endTimeReload = Infinity;
        this.endTimeMuzzleFire = Infinity;
    }

    update(delta: number): this {
        this.currentTime += delta;
        // check reload
        if (this.currentTime >= this.endTimeReload) {
            const toReload = this.roundsPerClip - this.roundsLeft;
            if (this.ammo >= toReload) {
                this.roundsLeft = this.roundsPerClip;
                this.ammo -= toReload;
            } else {
                this.roundsLeft += this.ammo;
                this.ammo = 0;
            }

            this.status = STATUS.READY;

            this.endTimeReload = Infinity;
        }

        // check muzzle fire

        if (this.currentTime >= this.endTimeMuzzleFire) {
            this.endTimeMuzzleFire = Infinity;
        }

        // check shoot

        if (this.currentTime >= this.endTimeShot) {
            this.status = (this.roundsLeft === 0) ? STATUS.EMPTY : STATUS.READY;
            this.endTimeShot = Infinity;
        }

        return this;
    }

    reload() {
        if ((this.status === STATUS.READY || this.status === STATUS.EMPTY) && this.ammo > 0) {
            this.status = STATUS.RELOAD;
            this.endTimeReload = this.currentTime + this.reloadTime;
        }

        return this;
    }

    shoot() {
        if (this.status === STATUS.READY) {
            this.status = STATUS.SHOT;
            this.endTimeMuzzleFire = this.currentTime + this.muzzleFireTime;

            // create bullet

            const owner = this.owner;
            const head = owner.head;

            const ray = new Ray();

            // first calculate a ray that represents the actual look direction from the head position

            ray.origin.extractPositionFromMatrix(head.worldMatrix);
            owner.getDirection(ray.direction);

            // determine closest intersection point with world object

            const result = world.intersectRay(ray, intersectionPoint);

            // now calculate the distance to the closest intersection point. if no point was found,
            // choose a point on the ray far away from the origin

            const distance = (result === null) ? 1000 : ray.origin.distanceTo(intersectionPoint);

            // now let's change the origin to the weapon's position.

            target.copy(ray.origin).add(ray.direction.multiplyScalar(distance));
            ray.origin.extractPositionFromMatrix(this.worldMatrix);
            ray.direction.subVectors(target, ray.origin).normalize();
            world.addBullet(owner, ray);

            // adjust ammo

            this.roundsLeft--;

            this.endTimeShot = this.currentTime + this.shotTime;
        }

        return this;
    }
}

const STATUS = Object.freeze({
    READY: "ready", // the blaster is ready for the next action
    SHOT: "shot", // the blaster is firing
    RELOAD: "reload", // the blaster is reloading
    EMPTY: "empty", // the blaster is empty
});
