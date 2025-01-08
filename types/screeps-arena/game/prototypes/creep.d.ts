declare module "game/prototypes" {
    import { Direction, findPath, FindPathOptions } from "game/utils";
    import {
        ATTACK,
        CARRY,
        ERR_FULL,
        ERR_INVALID_ARGS,
        ERR_INVALID_TARGET,
        ERR_NO_BODYPART,
        ERR_NOT_ENOUGH_RESOURCES,
        ERR_NOT_IN_RANGE,
        ERR_NOT_OWNER,
        ERR_TIRED,
        HEAL,
        MOVE,
        OK,
        RANGED_ATTACK,
        TOUGH,
        WORK,
    } from "game/constants";

    type BodyPartType =
        | typeof ATTACK
        | typeof CARRY
        | typeof HEAL
        | typeof MOVE
        | typeof RANGED_ATTACK
        | typeof TOUGH
        | typeof WORK;

    type CreepAttackResult =
        | typeof OK
        | typeof ERR_NOT_OWNER
        | typeof ERR_NO_BODYPART
        | typeof ERR_INVALID_TARGET
        | typeof ERR_NOT_IN_RANGE;

    type CreepBuildResult =
        | typeof OK
        | typeof ERR_NOT_OWNER
        | typeof ERR_NO_BODYPART
        | typeof ERR_NOT_ENOUGH_RESOURCES
        | typeof ERR_INVALID_TARGET
        | typeof ERR_NOT_IN_RANGE;

    type CreepDropResult =
        | typeof OK
        | typeof ERR_NOT_OWNER
        | typeof ERR_INVALID_ARGS
        | typeof ERR_NOT_ENOUGH_RESOURCES;

    type CreepHarvestResult =
        | typeof OK
        | typeof ERR_NOT_OWNER
        | typeof ERR_NO_BODYPART
        | typeof ERR_INVALID_TARGET
        | typeof ERR_NOT_ENOUGH_RESOURCES
        | typeof ERR_NOT_IN_RANGE;

    type CreepHealResult =
        | typeof OK
        | typeof ERR_NOT_OWNER
        | typeof ERR_NO_BODYPART
        | typeof ERR_INVALID_TARGET
        | typeof ERR_NOT_IN_RANGE;

    type CreepMoveResult =
        | typeof OK
        | typeof ERR_NOT_OWNER
        | typeof ERR_NO_BODYPART
        | typeof ERR_TIRED
        | typeof ERR_INVALID_ARGS;

    type CreepPickupResult =
        | typeof OK
        | typeof ERR_NOT_OWNER
        | typeof ERR_INVALID_TARGET
        | typeof ERR_FULL
        | typeof ERR_NOT_IN_RANGE;

    type CreepPullResult =
        | typeof OK
        | typeof ERR_NOT_OWNER
        | typeof ERR_NO_BODYPART
        | typeof ERR_TIRED
        | typeof ERR_INVALID_TARGET
        | typeof ERR_NOT_IN_RANGE;

    type CreepRangedAttackResult =
        | typeof OK
        | typeof ERR_NOT_OWNER
        | typeof ERR_NO_BODYPART
        | typeof ERR_INVALID_TARGET
        | typeof ERR_NOT_IN_RANGE;

    type CreepRangedHealResult =
        | typeof OK
        | typeof ERR_NOT_OWNER
        | typeof ERR_NO_BODYPART
        | typeof ERR_INVALID_TARGET
        | typeof ERR_NOT_IN_RANGE;

    type CreepRangedMassAttackResult =
        | typeof OK
        | typeof ERR_NOT_OWNER
        | typeof ERR_NO_BODYPART;

    type CreepTransferResult =
        | typeof OK
        | typeof ERR_NOT_OWNER
        | typeof ERR_INVALID_ARGS
        | typeof ERR_INVALID_TARGET
        | typeof ERR_NOT_IN_RANGE
        | typeof ERR_FULL
        | typeof ERR_NOT_ENOUGH_RESOURCES;

    type CreepWithdrawResult =
        | typeof OK
        | typeof ERR_NOT_OWNER
        | typeof ERR_INVALID_ARGS
        | typeof ERR_INVALID_TARGET
        | typeof ERR_NOT_IN_RANGE
        | typeof ERR_FULL
        | typeof ERR_NOT_ENOUGH_RESOURCES;

    /**
     * Creeps are units that can move, harvest energy, construct structures, attack another creeps, and perform other actions.
     */
    export class Creep extends GameObject {
        /** An array describing the creep’s body */
        body: Array<{ type: BodyPartType; hits: number }>;

        /** The movement fatigue indicator. If it is greater than zero, the creep cannot move */
        fatigue: number;

        /** The current amount of hit points of the creep */
        hits: number;

        /** The maximum amount of hit points of the creep */
        hitsMax: number;

        /** Whether it is your creep */
        my: boolean;

        /** A {@link Store} object that contains cargo of this creep */
        store: Store;

        /** Whether this creep is still being spawned */
        spawning: boolean;

        /**
         * Attack another creep or structure in a short-ranged attack. Requires the {@link ATTACK} body part
         * @param target The target object
         * @returns Either {@link OK} or one of ERR_* error codes
         */
        attack(target: Creep | Structure): CreepAttackResult;

        /**
         * Build a structure at the target construction site using carried energy.
         * Requires {@link WORK} and {@link CARRY} body parts
         * @param target The target construction site to be built
         * @returns Either {@link OK} or one of ERR_* error codes
         */
        build(target: ConstructionSite): CreepBuildResult;

        /**
         * Drop a resource on the ground
         * @param resource One of the RESOURCE_* constants
         * @param amount The amount of resource units to be dropped. If omitted, all the available carried amount is used
         * @returns Either {@link OK} or one of ERR_* error codes
         */
        drop(resource: ResourceType, amount?: number): CreepDropResult;

        /**
         * Harvest energy from the source. Requires the {@link WORK} body part
         * @param target The object to be harvested
         * @returns Either {@link OK} or one of ERR_* error codes
         */
        harvest(target: Source): CreepHarvestResult;

        /**
         * Heal self or another creep nearby. Requires the {@link HEAL} body part.
         * @param target The target creep object
         * @returns Either {@link OK} or one of ERR_* error codes
         */
        heal(target: Creep): CreepHealResult;

        /**
         * Move the creep one square in the specified direction. Requires the {@link MOVE} body part
         * @param direction The direction to move
         * @returns Either {@link OK} or one of ERR_* error codes
         */
        move(direction: Direction): CreepMoveResult;

        /**
         * Find the optimal path to the target and move to it. Requires the {@link MOVE} body part
         * @param target The target to move to. Can be a {@link GameObject} or any object containing x and y properties.
         * @param options An object with additional options that are passed to {@link findPath}
         * @returns Either {@link OK} or one of ERR_* error codes
         */
        moveTo(target: Position, options?: FindPathOptions): CreepMoveResult;

        /**
         * Pick up an item (a dropped piece of resource). Requires the {@link CARRY} body part.
         * @param target The target object to be picked up
         * @returns Either {@link OK} or one of ERR_* error codes
         */
        pickup(target: Resource): CreepPickupResult;

        /**
         * Help another creep to follow this creep. Requires the {@link MOVE} body part
         * @param target The target creep
         * @returns Either {@link OK} or one of ERR_* error codes
         */
        pull(target: Creep): CreepPullResult;

        /**
         * A ranged attack against another creep or structure. Requires the {@link RANGED_ATTACK} body part
         * @param target The target object to be attacked
         * @returns Either {@link OK} or one of ERR_* error codes
         */
        rangedAttack(target: Creep | Structure): CreepRangedAttackResult;

        /**
         * Heal another creep at a distance. Requires the {@link HEAL} body part
         * @param target The target creep object
         * @returns Either {@link OK} or one of ERR_* error codes
         */
        rangedHeal(target: Creep): CreepRangedHealResult;

        /**
         * A ranged attack against all hostile creeps or structures within 3 squares range.  Requires the {@link RANGED_ATTACK} body part
         * @returns Either {@link OK} or one of ERR_* error codes
         */
        rangedMassAttack(): CreepRangedMassAttackResult;

        /**
         * Transfer resource from the creep to another object
         * @param target The target object
         * @param resource One of the RESOURCE_* constants
         * @param amount The amount of resources to be transferred. If omitted, all the available carried amount is used
         */
        transfer(target: Structure | Creep, resource: ResourceType, amount?: number): CreepTransferResult;

        /**
         * Withdraw resources from a structure
         * @param target The target structure
         * @param resource One of the RESOURCE_* constants
         * @param amount The amount of resources to be transferred. If omitted, all the available carried amount is used
         * @returns Either {@link OK} or one of ERR_* error codes
         */
        withdraw(target: Structure, resource: ResourceType, amount?: number): CreepWithdrawResult;
    }
}
