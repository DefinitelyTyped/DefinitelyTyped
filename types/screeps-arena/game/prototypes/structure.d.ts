declare module "game/prototypes" {
    /** The base prototype object of all structures. */
    export class Structure extends GameObject {
        /** The current amount of hit points of the structure */
        readonly hits?: number;

        /** The maximum amount of hit points of the structure */
        readonly hitsMax?: number;
    }
}