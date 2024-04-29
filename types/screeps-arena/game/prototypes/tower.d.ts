declare module "game/prototypes" {
    import { OK, ERR_NOT_OWNER, ERR_TIRED, ERR_INVALID_TARGET, ERR_NOT_ENOUGH_ENERGY } from "game/constants";
    type TowerAttackResult = typeof OK |
        typeof ERR_NOT_OWNER |
        typeof ERR_TIRED |
        typeof ERR_INVALID_TARGET |
        typeof ERR_NOT_ENOUGH_ENERGY;
    type TowerHealResult = typeof OK |
        typeof ERR_NOT_OWNER |
        typeof ERR_TIRED |
        typeof ERR_INVALID_TARGET |
        typeof ERR_NOT_ENOUGH_ENERGY;

    /** Remotely attacks game objects or heals creeps within its range */
    export class StructureTower extends OwnedStructure {
        /** A {@link Store} object that contains cargo of this structure. */
        store: Store;

        /** The remaining amount of ticks while this tower cannot be used */
        cooldown: number;

        /**
         * Remotely attack any creep or structure in range
         * @param target The target object
         */
        attack(target: Creep|Structure): TowerAttackResult;

        /**
         * Remotely heal any creep in range
         * @param target The target creep
         */
        heal(target: Creep): TowerHealResult;
    }
}
