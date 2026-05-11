/// <reference path="../../../../../game/prototypes/game-object.d.ts" />
/// <reference path="../../../../../game/prototypes/store.d.ts" />

declare module "arena/season_alpha/collect_and_control/basic/prototypes" {
    import { GameObject, ResourceType } from "game/prototypes";

    /** Key game object for this arena. Transfer the corresponding resource to the collector to win the game */
    export class ScoreCollector extends GameObject {
        /** Whether you have control over this collector */
        my?: boolean;

        /**The type of the resource this collector accepts */
        resourceType: ResourceType;

        /** Current collected score number of the owner */
        score: number;

        /** Total number of score needed to win instantly */
        scoreTotal: number;
    }
}
