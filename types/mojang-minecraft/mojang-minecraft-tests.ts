import * as mc from 'mojang-minecraft';

const overworld = mc.world.getDimension('overworld');

export function createExplosion(log: (message: string, status?: number) => void, targetLocation: mc.Location) {
    overworld.createExplosion(targetLocation, 10, new mc.ExplosionOptions());
}

export function createNoBlockExplosion(log: (message: string, status?: number) => void, targetLocation: mc.Location) {
    const explosionOptions = new mc.ExplosionOptions();

    // Start by exploding without breaking blocks
    explosionOptions.breaksBlocks = false;

    const explodeNoBlocksLoc = new mc.Location(
        Math.floor(targetLocation.x + 1),
        Math.floor(targetLocation.y + 2),
        Math.floor(targetLocation.z + 1),
    );

    overworld.createExplosion(explodeNoBlocksLoc, 15, explosionOptions);
}

export function createFireAndWaterExplosions(
    log: (message: string, status?: number) => void,
    targetLocation: mc.Location,
) {
    const explosionLoc = new mc.Location(targetLocation.x + 0.5, targetLocation.y + 0.5, targetLocation.z + 0.5);

    const fireExplosionOptions = new mc.ExplosionOptions();

    // Explode with fire
    fireExplosionOptions.causesFire = true;

    overworld.createExplosion(explosionLoc, 15, fireExplosionOptions);
    const waterExplosionOptions = new mc.ExplosionOptions();

    // Explode in water
    waterExplosionOptions.allowUnderwater = true;

    const belowWaterLoc = new mc.Location(targetLocation.x + 3, targetLocation.y + 1, targetLocation.z + 3);

    overworld.createExplosion(belowWaterLoc, 10, waterExplosionOptions);
}

export function itemStacks(log: (message: string, status?: number) => void, targetLocation: mc.Location) {
    const oneItemLoc = new mc.BlockLocation(3, 2, 1);
    const fiveItemsLoc = new mc.BlockLocation(1, 2, 1);
    const diamondPickaxeLoc = new mc.BlockLocation(2, 2, 4);

    const oneEmerald = new mc.ItemStack(mc.MinecraftItemTypes.emerald, 1, 0);
    const onePickaxe = new mc.ItemStack(mc.MinecraftItemTypes.diamondPickaxe, 1, 0);
    const fiveEmeralds = new mc.ItemStack(mc.MinecraftItemTypes.emerald, 5, 0);

    overworld.spawnItem(oneEmerald, oneItemLoc);
    overworld.spawnItem(fiveEmeralds, fiveItemsLoc);
    overworld.spawnItem(onePickaxe, diamondPickaxeLoc);
}

export function quickFoxLazyDog(log: (message: string, status?: number) => void, targetLocation: mc.Location) {
    const fox = overworld.spawnEntity(
        'minecraft:fox',
        new mc.BlockLocation(targetLocation.x + 1, targetLocation.y + 2, targetLocation.z + 3),
    );
    fox.addEffect(mc.MinecraftEffectTypes.speed, 10, 20);
    log('Created a fox.');

    const wolf = overworld.spawnEntity(
        'minecraft:wolf',
        new mc.BlockLocation(targetLocation.x + 4, targetLocation.y + 2, targetLocation.z + 3),
    );
    wolf.addEffect(mc.MinecraftEffectTypes.slowness, 10, 20);
    wolf.isSneaking = true;
    log('Created a sneaking wolf.', 1);
}

export function runEntityCreatedEvent(log: (message: string, status?: number) => void, targetLocation: mc.Location) {
    // register a new function that is called when a new entity is created.
    const entityCreatedCallback = mc.world.events.entityCreate.subscribe((entityEvent: mc.EntityCreateEvent) => {
        if (entityEvent && entityEvent.entity) {
            log(`New entity of type '${entityEvent.entity}' created!`, 1);
        } else {
            log(`The entity event didn't work as expected.`, -1);
        }
    });
}

export function createOldHorse(log: (message: string, status?: number) => void, targetLocation: mc.Location) {
    // create a horse and trigger the 'ageable_grow_up' event, ensuring the horse is created as an adult
    overworld.spawnEntity('minecraft:horse<minecraft:ageable_grow_up>', targetLocation);
}

export function pistonEvent(log: (message: string, status?: number) => void, targetLocation: mc.Location) {
    let canceled = false;

    const pistonLoc = new mc.BlockLocation(
        Math.floor(targetLocation.x) + 1,
        Math.floor(targetLocation.y) + 2,
        Math.floor(targetLocation.z) + 1,
    );

    const pistonCallback = mc.world.events.beforePistonActivate.subscribe(
        (pistonEvent: mc.BeforePistonActivateEvent) => {
            if (pistonEvent.piston.location.equals(pistonLoc)) {
                log('Cancelling piston event');
                pistonEvent.cancel = true;
                canceled = true;
            }
        },
    );
}

export function spawnItem(log: (message: string, status?: number) => void, targetLocation: mc.Location) {
    const featherItem = new mc.ItemStack(mc.MinecraftItemTypes.feather, 1, 0);

    overworld.spawnItem(featherItem, targetLocation);
    log('New feather created!');
}

export function testThatEntityIsFeatherItem(
    log: (message: string, status?: number) => void,
    targetLocation: mc.Location,
) {
    const items = overworld.getEntities();

    for (const item of items) {
        const itemComp = item.getComponent('item') as any;

        if (itemComp) {
            if (itemComp.itemStack.id.endsWith('feather')) {
                log('Success! Found a feather', 1);
            }
        }
    }
}

export function trapTick() {
    let ticks = 0;

    mc.world.events.tick.subscribe((event: mc.TickEvent) => {
        ticks++;

        // Minecraft runs at 20 ticks per second
        if (ticks % 1200 === 0) {
            overworld.runCommand('say Another minute passes...');
        }
    });
}

export default class SampleManager {
    tickCount = 0;

    _availableFuncs: {
        [name: string]: Array<(log: (message: string, status?: number) => void, location: mc.Location) => void>;
    };

    pendingFuncs: Array<{
        name: string;
        func: (log: (message: string, status?: number) => void, location: mc.Location) => void;
        location: mc.Location;
    }> = [];

    gameplayLogger(message: string, status?: number) {
        if (status !== undefined && status > 0) {
            message = 'SUCCESS: ' + message;
        } else if (status !== undefined && status < 0) {
            message = 'FAIL: ' + message;
        }

        this.say(message);
    }
    say(message: string) {
        mc.world.getDimension('overworld').runCommand('say ' + message);
    }

    newChatMessage(chatEvent: mc.ChatEvent) {
        const message = chatEvent.message.toLowerCase();

        if (message.startsWith('howto') && chatEvent.sender) {
            const nearbyBlock = chatEvent.sender.getBlockFromViewVector();
            if (!nearbyBlock) {
                this.gameplayLogger('Please look at the block where you want me to run this.');
                return;
            }

            const nearbyBlockLoc = nearbyBlock.location;
            const nearbyLoc = new mc.Location(nearbyBlockLoc.x, nearbyBlockLoc.y + 1, nearbyBlockLoc.z);

            const sampleId = message.substring(5).trim();

            if (sampleId.length < 2) {
                let availableFuncStr = 'Here is my list of available samples:';

                for (const sampleFuncKey in this._availableFuncs) {
                    availableFuncStr += ' ' + sampleFuncKey;
                }

                this.say(availableFuncStr);
            } else {
                for (const sampleFuncKey in this._availableFuncs) {
                    if (sampleFuncKey.toLowerCase() === sampleId) {
                        const sampleFunc = this._availableFuncs[sampleFuncKey];

                        this.runSample(sampleFuncKey + this.tickCount, sampleFunc, nearbyLoc);

                        return;
                    }
                }

                this.say(`I couldn't find the sample '${sampleId}"'`);
            }
        }
    }

    runSample(
        sampleId: string,
        snippetFunctions: Array<(log: (message: string, status?: number) => void, location: mc.Location) => void>,
        targetLocation: mc.Location,
    ) {
        for (let i = snippetFunctions.length - 1; i >= 0; i--) {
            this.pendingFuncs.push({ name: sampleId, func: snippetFunctions[i], location: targetLocation });
        }
    }

    worldTick() {
        if (this.tickCount % 10 === 0) {
            if (this.pendingFuncs.length > 0) {
                const funcSet = this.pendingFuncs.pop();

                if (funcSet) {
                    funcSet.func(this.gameplayLogger, funcSet.location);
                }
            }
        }

        this.tickCount++;
    }

    constructor() {
        this._availableFuncs = {};

        this.gameplayLogger = this.gameplayLogger.bind(this);

        mc.world.events.tick.subscribe(this.worldTick.bind(this));
        mc.world.events.chat.subscribe(this.newChatMessage.bind(this));
    }

    registerSamples(sampleSet: {
        [name: string]: Array<(log: (message: string, status?: number) => void, location: mc.Location) => void>;
    }) {
        for (const sampleKey in sampleSet) {
            if (sampleKey.length > 1 && sampleSet[sampleKey]) {
                this._availableFuncs[sampleKey] = sampleSet[sampleKey];
            }
        }
    }
}

const mojangMinecraftFuncs: {
    [name: string]: Array<(log: (message: string, status?: number) => void, location: mc.Location) => void>;
} = {
    runEntityCreatedEvent: [runEntityCreatedEvent, createOldHorse],
    createOldHorse: [createOldHorse],
    spawnItem: [spawnItem, testThatEntityIsFeatherItem],
    createNoBlockExplosion: [createExplosion],
    createFireAndWaterExplosions: [createFireAndWaterExplosions],
    createExplosion: [createExplosion],
    itemStacks: [itemStacks],
    quickFoxLazyDog: [quickFoxLazyDog],
    pistonEvent: [pistonEvent],
    trapTick: [trapTick],
};

export function register(sampleManager: SampleManager) {
    sampleManager.registerSamples(mojangMinecraftFuncs);
}
