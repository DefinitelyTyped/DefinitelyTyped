/**
 * @author Mugen87 / https://github.com/Mugen87
 */

import { GameEntity, SeekBehavior, Vehicle } from "yuka";

import { CustomEntity } from "./CustomEntity";

export class CustomVehicle extends Vehicle {
    target: CustomEntity | string | null;

    constructor() {
        super();
        this.name = "vehicle";
        this.target = null;
    }

    update(delta: number): this {
        const seekBehavior = this.steering.behaviors[0];
        if (seekBehavior instanceof SeekBehavior && this.target instanceof CustomEntity) {
            seekBehavior.target.copy(this.target.position);
        }

        return super.update(delta);
    }

    toJSON(): { [s: string]: any } {
        const json = super.toJSON();
        if (this.target instanceof CustomEntity) {
            json.target = this.target.uuid;
        }

        return json;
    }

    fromJSON(json: { [s: string]: any }): this {
        super.fromJSON(json);
        this.target = json.target;

        return this;
    }

    resolveReferences(entities: Map<string, GameEntity>) {
        super.resolveReferences(entities);

        if (typeof this.target === "string") {
            const entity = entities.get(this.target);
            if (entity instanceof CustomEntity) {
                this.target = entity;
            }
        }

        return this;
    }
}
