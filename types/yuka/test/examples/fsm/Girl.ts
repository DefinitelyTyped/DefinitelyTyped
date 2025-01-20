/**
 * @author Mugen87 / https://github.com/Mugen87
 */

import { GameEntity, StateMachine } from "yuka";
import { IdleState, WalkState } from "./States";

export class Girl extends GameEntity {
    readonly stateMachine: StateMachine<Girl>;

    constructor() {
        super();

        this.stateMachine = new StateMachine(this);

        this.stateMachine.add("IDLE", new IdleState());
        this.stateMachine.add("WALK", new WalkState());

        this.stateMachine.changeTo("IDLE");
    }

    update(delta: number): this {
        this.stateMachine.update();

        return this;
    }
}
