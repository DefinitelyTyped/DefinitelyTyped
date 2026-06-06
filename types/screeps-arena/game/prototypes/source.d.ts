declare module "game/prototypes" {
    import { WORK } from "game/constants"; // eslint-disable-line @typescript-eslint/no-unused-vars

    /** An energy source object. Can be harvested by creeps with a {@link WORK} body part */
    export class Source extends GameObject {
        /** Current amount of energy in the source */
        energy: number;

        /** The maximum amount of energy in the source */
        energyCapacity: number;
    }
}
