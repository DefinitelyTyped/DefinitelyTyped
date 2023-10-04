declare module "game/prototypes" {
    import { ERR_NOT_OWNER, OK, STRUCTURE_PROTOTYPES } from "game/constants";
    export interface ConstructionSite extends GameObject {
        readonly prototype: ConstructionSite;

        /**
         * The current construction progress.
         */
        progress: number;
        /**
         * The total construction progress needed for the structure to be built.
         */
        progressTotal: number;

        /**
         * One of the STRUCTURE_PROTOTYPES entries
         */
        structurePrototypeName: string;

        // TODO: ConstructionSite object now has a new property structure that links to the corresponding Structure object.
        // It will be the live object instance that will appear when the construction site is completed. You can check what structure is being constructed using the instanceof operator:

        /**
         * Whether it is your construction site.
         */
        my: boolean;

        remove(): ERR_NOT_OWNER | OK;
    }

    interface ConstructionSiteConstructor extends _Constructor<ConstructionSite>, _ConstructorById<ConstructionSite> {}

    export const ConstructionSite: ConstructionSiteConstructor;
}
