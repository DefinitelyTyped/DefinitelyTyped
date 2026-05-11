/**
 * @author Mugen87 / https://github.com/Mugen87
 */

import { GameEntity, MemoryRecord, MemorySystem, Vision } from "yuka";

export class CustomEntity extends GameEntity {
    memorySystem: MemorySystem;
    vision: Vision;
    currentTime: number;
    memoryRecords: MemoryRecord[];
    target: GameEntity | null;

    constructor() {
        super();

        this.memorySystem = new MemorySystem();
        this.memorySystem.memorySpan = 3;

        this.vision = new Vision(this);
        this.vision.range = 5;
        this.vision.fieldOfView = Math.PI * 0.5;

        this.maxTurnRate = Math.PI * 0.5;

        this.currentTime = 0;
        this.memoryRecords = [];

        this.target = null;
    }

    start(): this {
        if (!this.manager) {
            return this;
        }
        const target = this.manager.getEntityByName("target");
        const obstacle = this.manager.getEntityByName("obstacle");

        this.target = target;
        if (obstacle) {
            this.vision.addObstacle(obstacle);
        }

        return this;
    }

    update(delta: number): this {
        this.currentTime += delta;

        // In many scenarios it is not necessary to update the vision in each
        // simulation step. A regulator could be used to restrict the update rate.

        this.updateVision();

        // get a list of all recently sensed game entities

        this.memorySystem.getValidMemoryRecords(this.currentTime, this.memoryRecords);

        if (this.memoryRecords.length > 0) {
            // Pick the first one. It's highly application specific what record is chosen
            // for further processing.

            const record = this.memoryRecords[0];
            const entity = record.entity;
            if (!entity) {
                return this;
            }

            // if the game entity is visible, directly rotate towards it. Otherwise, focus
            // the last known position

            if (record.visible) {
                this.rotateTo(entity.position, delta);
            } else {
                // only rotate to the last sensed position if the entity was seen at least once
                if (record.timeLastSensed !== -1) {
                    this.rotateTo(record.lastSensedPosition, delta);
                }
            }
        } else {
            // rotate back to default
            this.rotateTo(this.forward, delta);
        }

        return this;
    }

    updateVision() {
        const memorySystem = this.memorySystem;
        const vision = this.vision;
        const target = this.target;
        if (!target) {
            return;
        }

        if (!memorySystem.hasRecord(target)) {
            memorySystem.createRecord(target);
        }

        const record = memorySystem.getRecord(target);
        if (!record) {
            return;
        }

        if (vision.visible(target.position)) {
            record.timeLastSensed = this.currentTime;
            record.lastSensedPosition.copy(target.position);
            record.visible = true;
        } else {
            record.visible = false;
        }
    }
}
