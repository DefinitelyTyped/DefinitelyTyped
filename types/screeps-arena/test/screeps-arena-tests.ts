import { Flag } from "arena/season_alpha/capture_the_flag/advanced";
import { ATTACK, RESOURCE_ENERGY } from "game/constants";
import { CostMatrix } from "game/path-finder";
import { Creep, Structure, StructureRampart, StructureTower } from "game/prototypes";
import { createConstructionSite, findClosestByPath, findInRange, findPath, getObjectsByPrototype } from "game/utils";
import { Visual } from "game/visual";

export function loop(): void {
    const attack = ATTACK;

    const costMatrix = new CostMatrix();

    const noUtilsCreeps = getObjectsByPrototype(Creep).filter(i => i.my);

    // $ExpectType Creep[]
    const myCreeps = getObjectsByPrototype(Creep).filter(i => i.my);

    // $ExpectType Creep[]
    const enemyCreeps = getObjectsByPrototype(Creep).filter(i => !i.my);
    const enemyFlag = getObjectsByPrototype(Flag).find(i => !i.my); // $ExpectType Flag | undefined

    const structures = getObjectsByPrototype(Structure); //// $ExpectType Structure[]
    // const ownedStructures = getObjectsByPrototype(OwnedStructure); //// $ExpectType OwnedStructure[]

    const noUtilStructures = getObjectsByPrototype(Structure); //// $ExpectType Structure[]
    // const noUtilOwnedStructures = getObjectsByPrototype(OwnedStructure); //// $ExpectType OwnedStructure[]

    // verification that getObjectById works.
    const creepForId = myCreeps[0];
    if (creepForId) {
        // not sure what happend to GameObject.id, it was supposed to be a string
        // const creepFromGetObjectById = getObjectById(creepForId.id);
    }
    // TODO: creep actions

    // verification of Store object
    const myTower = getObjectsByPrototype(StructureTower).find(i => i.my);
    if (myTower) {
        const energyStored = myTower.store[RESOURCE_ENERGY];
        const maxCapacity = myTower.store.getCapacity(RESOURCE_ENERGY);

        // $ExpectType Creep
        const findClosestByRange = myTower.findClosestByRange(
            getObjectsByPrototype(Creep).filter(i => !i.my),
        );

        const findInRangeResult = myTower.findInRange(enemyCreeps, 1); // $ExpectType Creep[]
        const findPathToResult = myTower.findPathTo(findInRangeResult[0]); // $ExpectType Position[]
        // TODO: findPathTo with options
        const findClosestByPathResult = myTower.findClosestByPath(enemyCreeps); // $ExpectType Creep
        // TODO: findClosestByPath with options

        // testing utils
        const utilsFindInRangeResult = findInRange(myTower, enemyCreeps, 1); // $ExpectType Creep[]
        const utilsFindPathToResult = findPath(myTower, utilsFindInRangeResult[0]); // $ExpectType Position[]
        // TODO: findPathTo with options
        // $ExpectType Creep
        const utilsFindClosestByPathResult = findClosestByPath(
            myTower,
            enemyCreeps,
        );
        // TODO: findClosestByPath with options

        if (enemyFlag) {
            const positions: Array<Creep | Flag> = [...enemyCreeps, enemyFlag];
            // $ExpectType (Creep | Flag)[]
            const findInRangeMultipleTypesOfPositions = myTower.findInRange(
                positions,
                1,
            );
        }
    }

    // build a rampart
    createConstructionSite({ x: 10, y: 10 }, StructureRampart);
    // TODO: verify all buildable structure types
    // TODO: cSites .structure property.

    // TODO: test utils findXXX methods, theese methods are used by other metods.

    // draw a circle around the rampart
    const visual = new Visual();
    visual.circle({ x: 10, y: 10 }); // $ExpectType Visual
}
