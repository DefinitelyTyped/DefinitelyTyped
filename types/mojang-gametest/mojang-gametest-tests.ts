/* *****************************************************************************
   Copyright (c) Microsoft Corporation.
   ***************************************************************************** */

import * as mc from "mojang-minecraft";
import * as gt from "mojang-gametest";

gt.register("StarterTests", "simpleMobTest", (test: gt.Test) => {
  const attackerId = "fox";
  const victimId = "chicken";

  test.spawn(attackerId, new mc.BlockLocation(5, 2, 5));
  test.spawn(victimId, new mc.BlockLocation(2, 2, 2));

  test.assertEntityPresentInArea(victimId, true);

  test.succeedWhen(() => {
    test.assertEntityPresentInArea(victimId, false);
  });
}).maxTicks(400).structureName("startertests:mediumglass");

function phantomsShouldFlyFromCats(test: gt.Test) {
  const catEntityType = "cat";
  const phantomEntityType = "phantom";

  test.spawn(catEntityType, new mc.BlockLocation(4, 3, 3));
  test.spawn(phantomEntityType, new mc.BlockLocation(4, 3, 3));

  test.succeedWhenEntityPresent(phantomEntityType, new mc.BlockLocation(4, 6, 3), true);
}
gt.register("MobBehaviorTests", "phantoms_should_fly_from_cats", phantomsShouldFlyFromCats)
  .structureName("gametests:glass_cells")
  .tag("suite:broken");

function minibiomes(test: gt.Test) {
  const minecartEntityType = "minecart";
  const pigEntityType = "pig";

  const minecart = test.spawn(minecartEntityType, new mc.BlockLocation(9, 7, 7));
  const pig = test.spawn(pigEntityType, new mc.BlockLocation(9, 7, 7));

  test.setBlockType(mc.MinecraftBlockTypes.cobblestone, new mc.BlockLocation(10, 7, 7));

  const minecartRideableComp = minecart.getComponent("minecraft:rideable");

  minecartRideableComp.addRider(pig);

  test.succeedWhenEntityPresent(pigEntityType, new mc.BlockLocation(8, 3, 1), true);
}
gt.register("ChallengeTests", "minibiomes", minibiomes).structureName("gametests:minibiomes").maxTicks(160);

function collapsing(test: gt.Test) {
  const zoglinEntityType = "zoglin";
  const shulkerEntityType = "shulker";

  for (let i = 0; i < 3; i++) {
    test.spawn(zoglinEntityType, new mc.BlockLocation(i + 2, 2, 3));
    test.spawn(shulkerEntityType, new mc.BlockLocation(4, 2, i + 2));
  }

  test.pressButton(new mc.BlockLocation(6, 8, 5));

  test.succeedWhen(() => {
    Utilities.assertEntityInSpecificArea(test, zoglinEntityType, 0, 8, 0, 12, 12, 12);
  });
}

gt.register("ChallengeTests", "collapsing", collapsing).structureName("gametests:collapsing_space").maxTicks(160);

// tslint:disable-next-line:no-unnecessary-class
export class Utilities {
  static fillBlock(test: gt.Test, blockType: mc.BlockType, xFrom: number, yFrom: number, zFrom: number, xTo: number, yTo: number, zTo: number) {
    for (let i = xFrom; i <= xTo; i++) {
      for (let j = yFrom; j <= yTo; j++) {
        for (let k = zFrom; k <= zTo; k++) {
          test.setBlockType(blockType, new mc.BlockLocation(i, j, k));
        }
      }
    }
  }

  static assertEntityInSpecificArea(test: gt.Test, entityType: string, xFrom: number, yFrom: number, zFrom: number, xTo: number, yTo: number, zTo: number) {
    let count = 0;

    for (let i = xFrom; i <= xTo; i++) {
      for (let j = yFrom; j <= yTo; j++) {
        for (let k = zFrom; k <= zTo; k++) {
          try {
            test.assertEntityPresent(entityType, new mc.BlockLocation(i, j, k), false);
          } catch (Exception) {
            count++;
          }
        }
      }
    }

    if (count === 0) {
      throw Error("Entity type was not found.");
    }
  }
}
