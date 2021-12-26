/**
 * @author Mugen87 / https://github.com/Mugen87
 */

import { GameEntity, MeshGeometry } from "yuka";

export class Target extends GameEntity {
    endTime: number;
    currentTime: number;
    duration: number;
    geometry: MeshGeometry;

    constructor(geometry: MeshGeometry) {
        super();
        this.endTime = Infinity;
        this.currentTime = 0;
        this.duration = 1; // 1 second
        this.geometry = geometry;
    }

    update(delta: number): this {
        this.currentTime += delta;

        if (this.currentTime >= this.endTime) {
            this.endTime = Infinity;
        }

        return this;
    }

    handleMessage() {
        this.endTime = this.currentTime + this.duration;
        return true;
    }
}
