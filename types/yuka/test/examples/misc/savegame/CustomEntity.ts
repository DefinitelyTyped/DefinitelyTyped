/**
 * @author Mugen87 / https://github.com/Mugen87
 */

import { GameEntity } from "yuka";

export class CustomEntity extends GameEntity {
    private currentTime: number;
    private endTime: number;

    constructor() {
        super();
        this.name = "target";
        this.currentTime = 0;
        this.endTime = 0;
    }

    update(delta: number): this {
        this.currentTime += delta;
        if (this.currentTime >= this.endTime) {
            this.generatePosition();
        }

        return this;
    }

    generatePosition(): void {
        const radius = 2;
        const phi = Math.acos((2 * Math.random()) - 1);
        const theta = Math.random() * Math.PI * 2;

        this.position.fromSpherical(radius, phi, theta);

        this.endTime += 3; // 3s
    }

    toJSON(): { [s: string]: any } {
        const json = super.toJSON();
        json.currentTime = this.currentTime;
        json.endTime = this.endTime;
        return json;
    }

    fromJSON(json: { [s: string]: any }): this {
        super.fromJSON(json);
        this.currentTime = json.currentTime;
        this.endTime = json.endTime;
        return this;
    }
}
