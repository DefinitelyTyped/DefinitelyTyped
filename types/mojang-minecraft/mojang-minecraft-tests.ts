/* *****************************************************************************
   Copyright (c) Microsoft Corporation.
   ***************************************************************************** */

import * as mc from 'mojang-minecraft';

function quickFoxLazyDog() {
    const overworld = mc.world.getDimension('overworld');

    const fox = overworld.spawnEntity('minecraft:fox', new mc.BlockLocation(1, 2, 3));
    fox.addEffect(mc.MinecraftEffectTypes.speed, 10, 20);

    const wolf = overworld.spawnEntity('minecraft:wolf', new mc.BlockLocation(4, 2, 3));
    wolf.addEffect(mc.MinecraftEffectTypes.slowness, 10, 20);
    wolf.isSneaking = true;
}

function trapTick() {
    let ticks = 0;
    const overworld = mc.world.getDimension('overworld');

    mc.world.events.tick.subscribe((event: mc.TickEvent) => {
        ticks++;

        if (ticks % 1800 === 0) {
            overworld.runCommand('say Another minute passes...');
        }
    });
}

function itemStacks() {
    const oneItemLoc = new mc.BlockLocation(3, 2, 1);
    const fiveItemsLoc = new mc.BlockLocation(1, 2, 1);
    const noItemsLoc = new mc.BlockLocation(2, 2, 1);
    const diamondPickaxeLoc = new mc.BlockLocation(2, 2, 4);

    const overworld = mc.world.getDimension('overworld');

    const oneEmerald = new mc.ItemStack(mc.MinecraftItemTypes.emerald, 1, 0);
    const onePickaxe = new mc.ItemStack(mc.MinecraftItemTypes.diamondPickaxe, 1, 0);
    const fiveEmeralds = new mc.ItemStack(mc.MinecraftItemTypes.emerald, 5, 0);
}

function explosionTesting() {
    const overworld = mc.world.getDimension('overworld');
    const center = new mc.BlockLocation(3, 3, 3);

    const pigId = 'minecraft:pig<minecraft:ageable_grow_up>';
    const pigLoc = new mc.BlockLocation(3, 4, 3);

    overworld.spawnEntity(pigId, pigLoc);

    const loc = new mc.Location(4, 5, 3);
    const explosionLoc = new mc.Location(loc.x + 0.5, loc.y + 0.5, loc.z + 0.5);
    let explosionOptions = new mc.ExplosionOptions();

    explosionOptions.breaksBlocks = false;

    const creeper = overworld.spawnEntity('minecraft:creeper', new mc.BlockLocation(1, 2, 1));
    explosionOptions.source = creeper;

    overworld.createExplosion(explosionLoc, 10, explosionOptions);
    creeper.kill();

    explosionOptions = new mc.ExplosionOptions();
    explosionOptions.causesFire = true;

    overworld.createExplosion(explosionLoc, 15, explosionOptions);

    explosionOptions.allowUnderwater = true;
    const belowWaterLoc = new mc.BlockLocation(3, 1, 3);

    overworld.createExplosion(explosionLoc, 10, explosionOptions);
}

function chatEvent() {
    const chatCallback = mc.world.events.beforeChat.subscribe((eventData: mc.BeforeChatEvent) => {
        const overworld = mc.world.getDimension('overworld');

        if (eventData.message === '!stopme') {
            eventData.sender.kill();
            eventData.cancel = true;
        } else if (eventData.message === '!players') {
            overworld.runCommand(`say There are " + ${eventData.targets.length} players in the server.`);
            for (const target of eventData.targets) {
                overworld.runCommand('say Player: ' + target.name);
            }
        } else {
            eventData.message = `Modified '${eventData.message}'`;
        }
    });
}

function pistonEvent() {
    let canceled = false;
    const redstoneLoc = new mc.BlockLocation(1, 2, 0);
    const pistonLoc = new mc.BlockLocation(1, 2, 1);
    const planksLoc = new mc.BlockLocation(2, 2, 1);

    const pistonCallback = mc.world.events.beforePistonActivate.subscribe(
        (pistonEvent: mc.BeforePistonActivateEvent) => {
            if (pistonEvent.piston.location.equals(pistonLoc)) {
                pistonEvent.cancel = true;
                canceled = true;
            }
        },
    );
}
