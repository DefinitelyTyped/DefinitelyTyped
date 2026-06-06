/**
 * @author Mugen87 / https://github.com/Mugen87
 */

import { EventDispatcher, Logger, Vector3 } from "yuka";

import { Player } from "./Player";

const PI05 = Math.PI / 2;
const direction = new Vector3();
const velocity = new Vector3();

let elapsedTime = 0;

export class FirstPersonControls extends EventDispatcher {
    owner: Player;
    movementX: number;
    movementY: number;
    acceleration: number;
    brakingPower: number;
    lookingSpeed: number;
    headMovement: number;
    input: {
        forward: boolean;
        backward: boolean;
        right: boolean;
        left: boolean;
    };

    constructor(owner: Player) {
        super();
        this.owner = owner;
        this.movementX = 0; // mouse left/right
        this.movementY = 0; // mouse up/down
        this.acceleration = 40;
        this.brakingPower = 10;
        this.lookingSpeed = 1;
        this.headMovement = 1.5;
        this.input = {
            forward: false,
            backward: false,
            right: false,
            left: false,
        };
        const _mouseMoveHandler = (event: MouseEvent) => {
            this.movementX -= event.movementX * 0.001 * this.lookingSpeed;
            this.movementY -= event.movementY * 0.001 * this.lookingSpeed;
            this.movementY = Math.max(-PI05, Math.min(PI05, this.movementY));
            this.owner.rotation.fromEuler(0, this.movementX, 0); // yaw
            this.owner.head.rotation.fromEuler(this.movementY, 0, 0); // pitch
        };

        const _pointerlockChangeHandler = () => {
            if (document.pointerLockElement === document.body) {
                this.dispatchEvent({ type: "lock" });
            } else {
                this.dispatchEvent({ type: "unlock" });
            }
        };
        const _pointerlockErrorHandler = () => {
            Logger.warn("YUKA.Player: Unable to use Pointer Lock API.");
        };
    }

    update(delta: number): void {
        const input = this.input;
        const owner = this.owner;

        velocity.x -= velocity.x * this.brakingPower * delta;
        velocity.z -= velocity.z * this.brakingPower * delta;

        direction.z = Number(input.forward) - Number(input.backward);
        direction.x = Number(input.left) - Number(input.right);
        direction.normalize();

        if (input.forward || input.backward) velocity.z -= direction.z * this.acceleration * delta;
        if (input.left || input.right) velocity.x -= direction.x * this.acceleration * delta;

        owner.velocity.copy(velocity).applyRotation(owner.rotation);

        this._updateHead(delta);
    }

    setRotation(yaw: number, pitch: number): void {
        this.movementX = yaw;
        this.movementY = pitch;

        this.owner.rotation.fromEuler(0, this.movementX, 0);
        this.owner.head.rotation.fromEuler(this.movementY, 0, 0);
    }

    _updateHead(delta: number): void {
        const owner = this.owner;
        const head = owner.head;

        // some simple head bobbing
        const speed = owner.getSpeed();

        elapsedTime += delta * speed; // scale delta with movement speed

        const motion = Math.sin(elapsedTime * this.headMovement);

        head.position.y = Math.abs(motion) * 0.06;
        head.position.x = motion * 0.08;

        //

        head.position.y += owner.height;
    }
}
