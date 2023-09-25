/**
 * @author Mugen87 / https://github.com/Mugen87
 */

import { EventDispatcher, Logger, Vector3 } from "yuka";
import { Player } from "./Player";

const PI05 = Math.PI / 2;
const direction = new Vector3();
const velocity = new Vector3();

let currentSign = 1;
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
        this.acceleration = 80;
        this.brakingPower = 10;
        this.lookingSpeed = 1;
        this.headMovement = 0.8;

        this.input = {
            forward: false,
            backward: false,
            right: false,
            left: false,
        };
    }

    connect(): void {
        document.body.requestPointerLock();
    }

    disconnect(): void {
    }

    exit(): void {
        document.exitPointerLock();

        this.input.forward = false;
        this.input.backward = false;
        this.input.right = false;
        this.input.left = false;

        this.owner.velocity.set(0, 0, 0);
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

        //

        const speed = owner.getSpeed();
        elapsedTime += delta * speed; // scale delta with movement speed

        const motion = Math.sin(elapsedTime * this.headMovement);

        this._updateHead(motion);
        this._updateWeapon(motion);
    }

    setRotation(yaw: number, pitch: number): void {
        this.movementX = yaw;
        this.movementY = pitch;

        this.owner.rotation.fromEuler(0, this.movementX, 0);
        this.owner.head.rotation.fromEuler(this.movementY, 0, 0);
    }

    _updateHead(motion: number) {
        const owner = this.owner;
        const headContainer = owner.headContainer;

        // some simple head bobbing

        headContainer.position.x = motion * 0.14;
        headContainer.position.y = Math.abs(motion) * 0.12;

        //

        const sign = Math.sign(Math.cos(elapsedTime * this.headMovement));

        if (sign < currentSign) {
            currentSign = sign;
        }

        if (sign > currentSign) {
            currentSign = sign;
        }
    }

    _updateWeapon(motion: number) {
        const owner = this.owner;
        const weaponContainer = owner.weaponContainer;

        weaponContainer.position.x = motion * 0.005;
        weaponContainer.position.y = Math.abs(motion) * 0.002;
    }

    _mouseDownHandler(event: MouseEvent) {
        if (event.which === 1) {
            this.owner.weapon.shoot();
        }
    }

    _mouseMoveHandler(event: MouseEvent) {
        this.movementX -= event.movementX * 0.001 * this.lookingSpeed;
        this.movementY -= event.movementY * 0.001 * this.lookingSpeed;

        this.movementY = Math.max(-PI05, Math.min(PI05, this.movementY));

        this.owner.rotation.fromEuler(0, this.movementX, 0); // yaw
        this.owner.head.rotation.fromEuler(this.movementY, 0, 0); // pitch
    }

    _pointerlockChangeHandler() {
        if (document.pointerLockElement === document.body) {
            this.dispatchEvent({ type: "lock" });
        } else {
            this.disconnect();

            this.dispatchEvent({ type: "unlock" });
        }
    }

    _pointerlockErrorHandler() {
        Logger.warn("YUKA.Player: Unable to use Pointer Lock API.");
    }

    _keyDownHandler(event: KeyboardEvent) {
        switch (event.keyCode) {
            case 38: // up
            case 87: // w
                this.input.forward = true;
                break;

            case 37: // left
            case 65: // a
                this.input.left = true;
                break;

            case 40: // down
            case 83: // s
                this.input.backward = true;
                break;

            case 39: // right
            case 68: // d
                this.input.right = true;
                break;

            case 82: // r
                this.owner.weapon.reload();
                break;
        }
    }

    _keyUpHandler(event: KeyboardEvent) {
        switch (event.keyCode) {
            case 38: // up
            case 87: // w
                this.input.forward = false;
                break;

            case 37: // left
            case 65: // a
                this.input.left = false;
                break;

            case 40: // down
            case 83: // s
                this.input.backward = false;
                break;

            case 39: // right
            case 68: // d
                this.input.right = false;
                break;
        }
    }
}
