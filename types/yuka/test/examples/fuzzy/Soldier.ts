/**
 * @author Mugen87 / https://github.com/Mugen87
 * @author robp94 / https://github.com/robp94
 */

import {
    FuzzyAND,
    FuzzyModule,
    FuzzyRule,
    FuzzyVariable,
    GameEntity,
    LeftShoulderFuzzySet,
    RightShoulderFuzzySet,
    TriangularFuzzySet,
} from "yuka";

export class Soldier extends GameEntity {
    private readonly assaultRifle: { visible: boolean };
    private readonly shotgun: { visible: boolean };
    private ammoShotgun: number;
    private ammoAssaultRifle: number;
    private zombie: GameEntity | null;
    private readonly fuzzyModuleShotGun: FuzzyModule;
    private readonly fuzzyModuleAssaultRifle: FuzzyModule;

    constructor() {
        super();
        this.assaultRifle = { visible: true };
        this.shotgun = { visible: true };
        this.ammoShotgun = 12;
        this.ammoAssaultRifle = 30;
        this.zombie = null;
        this.fuzzyModuleShotGun = new FuzzyModule();
        this.fuzzyModuleAssaultRifle = new FuzzyModule();

        this._initFuzzyModule();
    }

    shoot(): void {
        if (this.assaultRifle.visible) {
            this.ammoAssaultRifle -= 1;
        } else if (this.shotgun.visible) {
            this.ammoShotgun -= 12;
        }
    }

    start(): this {
        if (this.manager) {
            this.zombie = this.manager.getEntityByName("zombie");
        }

        return this;
    }

    update(delta: number): this {
        super.update(delta);

        this.selectWeapon();

        return this;
    }

    selectWeapon(): void {
        const fuzzyModuleShotGun = this.fuzzyModuleShotGun;
        const fuzzyModuleAssaultRifle = this.fuzzyModuleAssaultRifle;

        if (this.zombie) {
            const distance = this.position.distanceTo(this.zombie.position);

            fuzzyModuleShotGun.fuzzify("distanceToTarget", distance);
            fuzzyModuleAssaultRifle.fuzzify("distanceToTarget", distance);
        }

        fuzzyModuleShotGun.fuzzify("ammoStatus", this.ammoShotgun);
        fuzzyModuleAssaultRifle.fuzzify("ammoStatus", this.ammoAssaultRifle);

        const desirabilityShotgun = (this.ammoShotgun === 0) ? 0 : fuzzyModuleShotGun.defuzzify("desirability");
        const desirabilityAssaultRifle = (this.ammoAssaultRifle === 0)
            ? 0
            : fuzzyModuleAssaultRifle.defuzzify("desirability");

        if (desirabilityShotgun > desirabilityAssaultRifle) {
            this.assaultRifle.visible = false;
            this.shotgun.visible = true;
        } else {
            this.assaultRifle.visible = true;
            this.shotgun.visible = false;
        }
    }

    _initFuzzyModule() {
        const fuzzyModuleShotGun = this.fuzzyModuleShotGun;
        const fuzzyModuleAssaultRifle = this.fuzzyModuleAssaultRifle;

        // FLV distance to target

        const distanceToTarget = new FuzzyVariable();

        const targetClose = new LeftShoulderFuzzySet(0, 5, 10);
        const targetMedium = new TriangularFuzzySet(5, 10, 15);
        const targetFar = new RightShoulderFuzzySet(10, 15, 20);

        distanceToTarget.add(targetClose);
        distanceToTarget.add(targetMedium);
        distanceToTarget.add(targetFar);

        fuzzyModuleShotGun.addFLV("distanceToTarget", distanceToTarget);
        fuzzyModuleAssaultRifle.addFLV("distanceToTarget", distanceToTarget);

        // FLV desirability

        const desirability = new FuzzyVariable();

        const undesirable = new LeftShoulderFuzzySet(0, 25, 50);
        const desirable = new TriangularFuzzySet(25, 50, 75);
        const veryDesirable = new RightShoulderFuzzySet(50, 75, 100);

        desirability.add(undesirable);
        desirability.add(desirable);
        desirability.add(veryDesirable);

        fuzzyModuleShotGun.addFLV("desirability", desirability);
        fuzzyModuleAssaultRifle.addFLV("desirability", desirability);

        // FLV ammo status shotgun

        const ammoStatusShotgun = new FuzzyVariable();

        const lowShot = new LeftShoulderFuzzySet(0, 2, 4);
        const okayShot = new TriangularFuzzySet(2, 7, 10);
        const loadsShot = new RightShoulderFuzzySet(7, 10, 12);

        ammoStatusShotgun.add(lowShot);
        ammoStatusShotgun.add(okayShot);
        ammoStatusShotgun.add(loadsShot);

        fuzzyModuleShotGun.addFLV("ammoStatus", ammoStatusShotgun);

        // FLV ammo status assault rifle

        const ammoStatusAssaultRifle = new FuzzyVariable();

        const lowAssault = new LeftShoulderFuzzySet(0, 2, 8);
        const okayAssault = new TriangularFuzzySet(2, 10, 20);
        const loadsAssault = new RightShoulderFuzzySet(10, 20, 30);

        ammoStatusAssaultRifle.add(lowAssault);
        ammoStatusAssaultRifle.add(okayAssault);
        ammoStatusAssaultRifle.add(loadsAssault);

        fuzzyModuleAssaultRifle.addFLV("ammoStatus", ammoStatusAssaultRifle);

        // rules shotgun

        fuzzyModuleShotGun.addRule(new FuzzyRule(new FuzzyAND(targetClose, lowShot), desirable));
        fuzzyModuleShotGun.addRule(new FuzzyRule(new FuzzyAND(targetClose, okayShot), veryDesirable));
        fuzzyModuleShotGun.addRule(new FuzzyRule(new FuzzyAND(targetClose, loadsShot), veryDesirable));

        fuzzyModuleShotGun.addRule(new FuzzyRule(new FuzzyAND(targetMedium, lowShot), desirable));
        fuzzyModuleShotGun.addRule(new FuzzyRule(new FuzzyAND(targetMedium, okayShot), veryDesirable));
        fuzzyModuleShotGun.addRule(new FuzzyRule(new FuzzyAND(targetMedium, loadsShot), veryDesirable));

        fuzzyModuleShotGun.addRule(new FuzzyRule(new FuzzyAND(targetFar, lowShot), undesirable));
        fuzzyModuleShotGun.addRule(new FuzzyRule(new FuzzyAND(targetFar, okayShot), undesirable));
        fuzzyModuleShotGun.addRule(new FuzzyRule(new FuzzyAND(targetFar, loadsShot), undesirable));

        // rules assault rifle

        fuzzyModuleAssaultRifle.addRule(new FuzzyRule(new FuzzyAND(targetClose, lowAssault), undesirable));
        fuzzyModuleAssaultRifle.addRule(new FuzzyRule(new FuzzyAND(targetClose, okayAssault), desirable));
        fuzzyModuleAssaultRifle.addRule(new FuzzyRule(new FuzzyAND(targetClose, loadsAssault), desirable));

        fuzzyModuleAssaultRifle.addRule(new FuzzyRule(new FuzzyAND(targetMedium, lowAssault), desirable));
        fuzzyModuleAssaultRifle.addRule(new FuzzyRule(new FuzzyAND(targetMedium, okayAssault), desirable));
        fuzzyModuleAssaultRifle.addRule(new FuzzyRule(new FuzzyAND(targetMedium, loadsAssault), veryDesirable));

        fuzzyModuleAssaultRifle.addRule(new FuzzyRule(new FuzzyAND(targetFar, lowAssault), desirable));
        fuzzyModuleAssaultRifle.addRule(new FuzzyRule(new FuzzyAND(targetFar, okayAssault), veryDesirable));
        fuzzyModuleAssaultRifle.addRule(new FuzzyRule(new FuzzyAND(targetFar, loadsAssault), veryDesirable));
    }
}
