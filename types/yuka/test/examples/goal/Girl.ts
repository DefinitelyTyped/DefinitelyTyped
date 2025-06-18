/**
 * @author Mugen87 / https://github.com/Mugen87
 */

import { ArriveBehavior, Think, Vehicle } from "yuka";
import { Collectible } from "./Collectible";
import { GatherEvaluator, RestEvaluator } from "./Evaluators";

export class Girl extends Vehicle {
    readonly brain: Think<Girl>;

    fatigueLevel: number;
    restDuration: number;
    pickUpDuration: number;
    crossFadeDuration: number;
    currentTarget: Collectible | null;
    currentTime: number;
    deltaTime: number;
    MAX_FATIGUE: number;

    constructor() {
        super();

        this.maxTurnRate = Math.PI * 0.5;
        this.maxSpeed = 1.5;

        // goal-driven agent design
        this.brain = new Think<Girl>(this);
        this.brain.addEvaluator(new RestEvaluator());
        this.brain.addEvaluator(new GatherEvaluator());

        // steering

        const arriveBehavior = new ArriveBehavior();
        arriveBehavior.deceleration = 1.5;
        this.steering.add(arriveBehavior);

        //

        this.fatigueLevel = 0; // current level of fatigue
        this.restDuration = 5; //  duration of a rest phase in seconds
        this.pickUpDuration = 6; //  duration of a pick phase in seconds
        this.crossFadeDuration = 0.5; // duration of a crossfade in seconds
        this.currentTarget = null; // current collectible

        this.currentTime = 0; // tracks the current time of an action
        this.deltaTime = 0; // the current time delta value

        this.MAX_FATIGUE = 3; // the girl needs to rest if this amount of fatigue is reached
    }

    update(delta: number): this {
        super.update(delta);
        this.deltaTime = delta;
        this.brain.execute();
        this.brain.arbitrate();

        return this;
    }

    tired(): boolean {
        return (this.fatigueLevel >= this.MAX_FATIGUE);
    }
}
