/**
 * @author Mugen87 / https://github.com/Mugen87
 */

import { State } from "yuka";
import { Girl } from "./Girl";

const IDLE = "IDLE";
const WALK = "WALK";

export class IdleState extends State<Girl> {
    enter(girl: Girl) {
    }

    execute(girl: Girl) {
        girl.stateMachine.changeTo(WALK);
    }

    exit(girl: Girl) {
    }
}

export class WalkState extends State<Girl> {
    enter(girl: Girl) {
    }

    execute(girl: Girl) {
        girl.stateMachine.changeTo(IDLE);
    }

    exit(girl: Girl) {
    }
}
