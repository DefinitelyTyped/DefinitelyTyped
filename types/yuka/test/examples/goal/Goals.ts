/**
 * @author Mugen87 / https://github.com/Mugen87
 */

import { ArriveBehavior, CompositeGoal, Goal, Matrix4, Vector3 } from "yuka";
import { Collectible } from "./Collectible";
import { Girl } from "./Girl";

const RIGHT_TURN = "RIGHT_TURN";
const LEFT_TURN = "LEFT_TURN";

const inverseMatrix = new Matrix4();
const localPosition = new Vector3();

export class RestGoal extends Goal<Girl> {
    constructor(owner: Girl) {
        super(owner);
    }

    activate(): void {
    }

    execute(): void {
        if (!this.owner) {
            return;
        }

        const owner = this.owner;
        owner.currentTime += owner.deltaTime;
        if (owner.currentTime >= owner.restDuration) {
            this.status = Goal.STATUS.COMPLETED;
        }
    }

    terminate() {
        if (!this.owner) {
            return;
        }

        const owner = this.owner;
        owner.currentTime = 0;
        owner.fatigueLevel = 0;
    }
}

//

export class GatherGoal extends CompositeGoal<Girl> {
    constructor(owner: Girl) {
        super(owner);
    }

    activate(): void {
        this.clearSubgoals();

        if (!this.owner) {
            return;
        }
        const owner = this.owner;

        this.addSubgoal(new FindNextCollectibleGoal(owner));
        this.addSubgoal(new SeekToCollectibleGoal(owner));
        this.addSubgoal(new PickUpCollectibleGoal(owner));
    }

    execute(): void {
        this.status = this.executeSubgoals();

        this.replanIfFailed();
    }
}

//

class FindNextCollectibleGoal extends Goal<Girl> {
    animationId: string | null;

    constructor(owner: Girl) {
        super(owner);
        this.animationId = null;
    }

    activate(): void {
        if (!this.owner) {
            return;
        }
        const owner = this.owner;
        if (!owner.manager) {
            return;
        }
        // select closest collectible
        const entities = owner.manager.entities;
        let minDistance = Infinity;
        for (let i = 0, l = entities.length; i < l; i++) {
            const entity = entities[i];
            if (entity !== owner && entity instanceof Collectible) {
                const squaredDistance = owner.position.squaredDistanceTo(entity.position);
                if (squaredDistance < minDistance) {
                    minDistance = squaredDistance;
                    owner.currentTarget = entity;
                }
            }
        }

        // determine if the girl should perform a left or right turn in order to face
        // the collectible
        if (owner.currentTarget === null) {
            return;
        }
        owner.worldMatrix.getInverse(inverseMatrix);
        localPosition.copy(owner.currentTarget.position).applyMatrix4(inverseMatrix);

        this.animationId = (localPosition.x >= 0) ? LEFT_TURN : RIGHT_TURN;
    }

    execute(): void {
        if (!this.owner) {
            return;
        }
        const owner = this.owner;
        if (owner.currentTarget !== null) {
            if (owner.rotateTo(owner.currentTarget.position, owner.deltaTime)) {
                this.status = Goal.STATUS.COMPLETED;
            }
        } else {
            this.status = Goal.STATUS.FAILED;
        }
    }

    terminate(): void {
    }
}

//

class SeekToCollectibleGoal extends Goal<Girl> {
    constructor(owner: Girl) {
        super(owner);
    }

    activate(): void {
        if (!this.owner) {
            return;
        }
        const owner = this.owner;
        //
        if (owner.currentTarget !== null) {
            const arriveBehavior = owner.steering.behaviors[0];
            if (!(arriveBehavior instanceof ArriveBehavior)) {
                return;
            }
            arriveBehavior.target = owner.currentTarget.position;
            arriveBehavior.active = true;
        } else {
            this.status = Goal.STATUS.FAILED;
        }
    }

    execute(): void {
        if (this.active()) {
            if (!this.owner) {
                return;
            }
            const owner = this.owner;
            if (owner.currentTarget === null) {
                return;
            }
            const squaredDistance = owner.position.squaredDistanceTo(owner.currentTarget.position);
            if (squaredDistance < 0.25) {
                this.status = Goal.STATUS.COMPLETED;
            }
        }
    }

    terminate(): void {
        if (!this.owner) {
            return;
        }
        const arriveBehavior = this.owner.steering.behaviors[0];
        arriveBehavior.active = false;
        this.owner.velocity.set(0, 0, 0);
    }
}

//

class PickUpCollectibleGoal extends Goal<Girl> {
    private readonly collectibleRemoveTimeout: number;

    constructor(owner: Girl) {
        super(owner);
        this.collectibleRemoveTimeout = 3; // the time in seconds after a collectible is removed
    }

    activate(): void {
    }

    execute(): void {
        if (!this.owner) {
            return;
        }
        const owner = this.owner;
        owner.currentTime += owner.deltaTime;
        if (owner.currentTime >= owner.pickUpDuration) {
            this.status = Goal.STATUS.COMPLETED;
        } else if (owner.currentTime >= this.collectibleRemoveTimeout) {
            if (owner.currentTarget !== null) {
                owner.sendMessage(owner.currentTarget, "PickedUp");
                owner.currentTarget = null;
            }
        }
    }

    terminate(): void {
        if (!this.owner) {
            return;
        }
        const owner = this.owner;
        owner.currentTime = 0;
        owner.fatigueLevel++;
    }
}
