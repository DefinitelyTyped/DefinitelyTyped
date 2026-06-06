declare module "game/prototypes" {
    /**
     * A site of a structure which is currently under construction
     */
    export class ConstructionSite extends GameObject {
        /** The current construction progress */
        readonly progress?: number;

        /** The total construction progress needed for the structure to be built */
        readonly progressTotal?: number;

        /** The structure that will be built (when the construction site is completed) */
        readonly structure?: Structure;

        /** Whether it is your construction site */
        readonly my?: boolean;

        /**
         * Remove this construction site
         */
        remove(): void;
    }
}
