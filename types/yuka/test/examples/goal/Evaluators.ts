/**
 * @author Mugen87 / https://github.com/Mugen87
 */

import { GoalEvaluator } from "yuka";
import { Girl } from "./Girl";
import { GatherGoal, RestGoal } from "./Goals";

export class RestEvaluator extends GoalEvaluator<Girl> {
    calculateDesirability(girl: Girl): number {
        return girl.tired() ? 1 : 0;
    }

    setGoal(girl: Girl): void {
        const currentSubgoal = girl.brain.currentSubgoal();
        if (!(currentSubgoal instanceof RestGoal)) {
            girl.brain.clearSubgoals();
            girl.brain.addSubgoal(new RestGoal(girl));
        }
    }
}

export class GatherEvaluator extends GoalEvaluator<Girl> {
    calculateDesirability(): number {
        return 0.5;
    }

    setGoal(girl: Girl): void {
        const currentSubgoal = girl.brain.currentSubgoal();

        if (!(currentSubgoal instanceof GatherGoal)) {
            girl.brain.clearSubgoals();

            girl.brain.addSubgoal(new GatherGoal(girl));
        }
    }
}
