declare module "game/prototypes" {
    import {
        AnyCreep,
        BodyPartConstant,
        CreepActionReturnCode,
        CreepMoveReturnCode,
        DirectionConstant,
        ERR_BUSY,
        ERR_FULL,
        ERR_INVALID_TARGET,
        ERR_NO_BODYPART,
        ERR_NO_PATH,
        ERR_NOT_ENOUGH_RESOURCES,
        ERR_NOT_FOUND,
        ERR_NOT_IN_RANGE,
        ERR_NOT_OWNER,
        ERR_RCL_NOT_ENOUGH,
        OK,
        ResourceConstant,
        ScreepsReturnCode,
    } from "game/constants";
    import { MoveToOpts } from "game/path-finder";
    export interface Creep extends GameObject {
        readonly prototype: Creep;
        /**
         * The current amount of hit points of the creep.
         */
        hits: number;
        /**
         * The maximum amount of hit points of the creep.
         */
        hitsMax: number;
        /**
         * Whether it is your creep.
         */
        my: boolean;
        /**
         * Fatigue indicator of the creep. It can move only when fatigue equals to 0.
         */
        fatigue: number;
        /**
         * An array describing the creep’s body. Each element contains the following properties:
         *     type: string (One of the body part types constants)
         *     hits: number (The remaining amount of hit points of this body part)
         */
        body: Array<{ type: BodyPartConstant; hits: number }>;
        /**
         * A Store object that contains cargo of this creep.
         */
        store: Store<ResourceConstant>;
        /**
         * Move the creep one square in the specified direction. direction must be one of the following constants:
         */
        move(direction: DirectionConstant): CreepMoveReturnCode | undefined;
        /**
         * Find the optimal path to the target within the same room and move to it.
         * A shorthand to consequent calls of findPathTo() and move() methods.
         * @param target target can be any object containing x and y properties.
         * @param opts opts is an optional object containing additional options. See /game/utils::findPath for details.
         */
        moveTo(
            target: RoomPosition,
            opts?: MoveToOpts,
        ): CreepMoveReturnCode | ERR_NO_PATH | ERR_INVALID_TARGET | undefined;
        /**
         * A ranged attack against another creep or structure. Requires the RANGED_ATTACK body part.
         * The target has to be within 3 squares range of the creep.
         */
        rangedAttack(target: AnyCreep | Structure): CreepActionReturnCode;
        /**
         * A ranged attack against all hostile creeps or structures within 3 squares range.
         * Requires the RANGED_ATTACK body part.
         * The attack power depends on the range of each target.
         * Friendly units are not affected.
         */
        rangedMassAttack(): OK | ERR_NOT_OWNER | ERR_BUSY | ERR_NO_BODYPART;
        /**
         * Attack another creep or structure in a short-ranged attack.
         * Requires the ATTACK body part.
         * The target has to be at an adjacent square to the creep.
         */
        attack(target: AnyCreep | Structure): CreepActionReturnCode;
        /**
         * Heal self or another creep.
         * It will restore the target creep’s damaged body parts function and increase the hits counter.
         * Requires the HEAL body part.
         * The target has to be at an adjacent square to the creep.
         */
        heal(target: AnyCreep): CreepActionReturnCode;
        /**
         * Heal another creep at a distance.
         * It will restore the target creep’s damaged body parts function and increase the hits counter.
         * Requires the HEAL body part.
         * The target has to be within 3 squares range of the creep.
         */
        rangedHeal(target: AnyCreep): CreepActionReturnCode;

        /**
         * Harvest energy from the source or resource from minerals or deposits.
         *
         * Needs the WORK body part.
         *
         * If the creep has an empty CARRY body part, the harvested resource is put into it; otherwise it is dropped on the ground.
         *
         * The target has to be at an adjacent square to the creep.
         * @param target The source object to be harvested.
         */
        harvest(
            target: Source, /* | Mineral | Deposit*/
        ): CreepActionReturnCode | ERR_NOT_FOUND | ERR_NOT_ENOUGH_RESOURCES;

        /**
         * Allow another creep to follow this creep. The fatigue generated for the target's move will be added to the creep instead of the target.
         *
         * Requires the MOVE body part. The target must be adjacent to the creep. The creep must move elsewhere, and the target must move towards the creep.
         * @param target The target creep to be pulled.
         */
        pull(target: Creep): OK | ERR_NOT_OWNER | ERR_BUSY | ERR_INVALID_TARGET | ERR_NOT_IN_RANGE | ERR_NO_BODYPART;

        /**
         * Transfer resource from the creep to another object. The target has to be at adjacent square to the creep.
         * @param target The target object.
         * @param resourceType One of the RESOURCE_* constants
         * @param amount The amount of resources to be transferred. If omitted, all the available carried amount is used.
         */
        transfer(target: AnyCreep | Structure, resourceType: ResourceConstant, amount?: number): ScreepsReturnCode;

        /**
         * Withdraw resources from a structure, a tombstone or a ruin.
         *
         * The target has to be at adjacent square to the creep.
         *
         * Multiple creeps can withdraw from the same structure in the same tick.
         *
         * Your creeps can withdraw resources from hostile structures as well, in case if there is no hostile rampart on top of it.
         * @param target The target object.
         * @param resourceType The target One of the RESOURCE_* constants..
         * @param amount The amount of resources to be transferred. If omitted, all the available amount is used.
         */
        withdraw(
            target: Structure, /* | Tombstone | Ruin*/
            resourceType: ResourceConstant,
            amount?: number,
        ): ScreepsReturnCode;

        /**
         * Drop this resource on the ground.
         * @param resourceType One of the RESOURCE_* constants.
         * @param amount The amount of resource units to be dropped. If omitted, all the available carried amount is used.
         */
        drop(resourceType: ResourceConstant, amount?: number): OK | ERR_NOT_OWNER | ERR_BUSY | ERR_NOT_ENOUGH_RESOURCES;

        /**
         * Pick up an item (a dropped piece of energy). Needs the CARRY body part. The target has to be at adjacent square to the creep or at the same square.
         * @param target The target object to be picked up.
         */
        pickup(target: Resource): CreepActionReturnCode | ERR_FULL;

        /**
         * Build a structure at the target construction site using carried energy.
         * Needs WORK and CARRY body parts.
         *
         * The target has to be within 3 squares range of the creep.
         *
         * @param target The target construction site to be built.
         * @returns Result Code: OK, ERR_NOT_OWNER, ERR_BUSY, ERR_NOT_ENOUGH_RESOURCES, ERR_INVALID_TARGET, ERR_NOT_IN_RANGE, ERR_NO_BODYPART, ERR_RCL_NOT_ENOUGH
         */
        build(target: ConstructionSite): CreepActionReturnCode | ERR_NOT_ENOUGH_RESOURCES;
    }

    interface CreepConstructor extends _Constructor<Creep>, _ConstructorById<Creep> {}

    export const Creep: CreepConstructor;
}
