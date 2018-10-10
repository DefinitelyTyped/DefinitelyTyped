// Type definitions for Screeps 2.5
// Project: https://github.com/screeps/screeps
// Definitions by: Marko Sulamägi <https://github.com/MarkoSulamagi>
//                 Nhan Ho <https://github.com/NhanHo>
//                 Bryan <https://github.com/bryanbecker>
//                 Resi Respati <https://github.com/resir014>
//                 Adam Laycock <https://github.com/Arcath>
//                 Dominic Marcuse <https://github.com/dmarcuse>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.6

// Game Constants

declare const OK: 0;
declare const ERR_NOT_OWNER: -1;
declare const ERR_NO_PATH: -2;
declare const ERR_NAME_EXISTS: -3;
declare const ERR_BUSY: -4;
declare const ERR_NOT_FOUND: -5;
declare const ERR_NOT_ENOUGH_RESOURCES: -6;
declare const ERR_NOT_ENOUGH_ENERGY: -6;
declare const ERR_INVALID_TARGET: -7;
declare const ERR_FULL: -8;
declare const ERR_NOT_IN_RANGE: -9;
declare const ERR_INVALID_ARGS: -10;
declare const ERR_TIRED: -11;
declare const ERR_NO_BODYPART: -12;
declare const ERR_NOT_ENOUGH_EXTENSIONS: -6;
declare const ERR_RCL_NOT_ENOUGH: -14;
declare const ERR_GCL_NOT_ENOUGH: -15;

declare const FIND_EXIT_TOP: 1;
declare const FIND_EXIT_RIGHT: 3;
declare const FIND_EXIT_BOTTOM: 5;
declare const FIND_EXIT_LEFT: 7;
declare const FIND_EXIT: 10;
declare const FIND_CREEPS: 101;
declare const FIND_MY_CREEPS: 102;
declare const FIND_HOSTILE_CREEPS: 103;
declare const FIND_SOURCES_ACTIVE: 104;
declare const FIND_SOURCES: 105;
/** `FIND_DROPPED_ENERGY` is deprecated the return value is the same as `FIND_DROPPED_RESOURCES` */
declare const FIND_DROPPED_ENERGY: -106;
declare const FIND_DROPPED_RESOURCES: 106;
declare const FIND_STRUCTURES: 107;
declare const FIND_MY_STRUCTURES: 108;
declare const FIND_HOSTILE_STRUCTURES: 109;
declare const FIND_FLAGS: 110;
declare const FIND_CONSTRUCTION_SITES: 111;
declare const FIND_MY_SPAWNS: 112;
declare const FIND_HOSTILE_SPAWNS: 113;
declare const FIND_MY_CONSTRUCTION_SITES: 114;
declare const FIND_HOSTILE_CONSTRUCTION_SITES: 115;
declare const FIND_MINERALS: 116;
declare const FIND_NUKES: 117;
declare const FIND_TOMBSTONES: 118;

declare const TOP: 1;
declare const TOP_RIGHT: 2;
declare const RIGHT: 3;
declare const BOTTOM_RIGHT: 4;
declare const BOTTOM: 5;
declare const BOTTOM_LEFT: 6;
declare const LEFT: 7;
declare const TOP_LEFT: 8;

declare const COLOR_RED: 1;
declare const COLOR_PURPLE: 2;
declare const COLOR_BLUE: 3;
declare const COLOR_CYAN: 4;
declare const COLOR_GREEN: 5;
declare const COLOR_YELLOW: 6;
declare const COLOR_ORANGE: 7;
declare const COLOR_BROWN: 8;
declare const COLOR_GREY: 9;
declare const COLOR_WHITE: 10;
declare const COLORS_ALL: ColorConstant[];

declare const CREEP_SPAWN_TIME: 3;
declare const CREEP_LIFE_TIME: 1500;
declare const CREEP_CLAIM_LIFE_TIME: 600;
declare const CREEP_CORPSE_RATE: 0.2;

declare const OBSTACLE_OBJECT_TYPES: [
    "spawn",
    "creep",
    "wall",
    "source",
    "constructedWall",
    "extension",
    "link",
    "storage",
    "tower",
    "observer",
    "powerSpawn",
    "powerBank",
    "lab",
    "terminal",
    "nuker"
];

declare const ENERGY_REGEN_TIME: 300;
declare const ENERGY_DECAY: 1000;

declare const REPAIR_COST: 0.01;

declare const RAMPART_DECAY_AMOUNT: 300;
declare const RAMPART_DECAY_TIME: 100;
declare const RAMPART_HITS: 1;
declare const RAMPART_HITS_MAX: {
    [rcl: number]: number;
    2: 300000;
    3: 1000000;
    4: 3000000;
    5: 10000000;
    6: 30000000;
    7: 100000000;
    8: 300000000;
};

declare const SPAWN_HITS: 5000;
declare const SPAWN_ENERGY_START: 300;
declare const SPAWN_ENERGY_CAPACITY: 300;

declare const SOURCE_ENERGY_CAPACITY: 3000;
declare const SOURCE_ENERGY_NEUTRAL_CAPACITY: 1500;
declare const SOURCE_ENERGY_KEEPER_CAPACITY: 4000;

declare const WALL_HITS: 1;
declare const WALL_HITS_MAX: 300000000;

declare const EXTENSION_HITS: 1000;
declare const EXTENSION_ENERGY_CAPACITY: {
    [rcl: number]: number;
    0: 50;
    1: 50;
    2: 50;
    3: 50;
    4: 50;
    5: 50;
    6: 50;
    7: 100;
    8: 200;
};

declare const ROAD_HITS: 5000;
declare const ROAD_WEAROUT: 1;
declare const ROAD_DECAY_AMOUNT: 100;
declare const ROAD_DECAY_TIME: 1000;

declare const LINK_HITS: 1000;
declare const LINK_HITS_MAX: 1000;
declare const LINK_CAPACITY: 800;
declare const LINK_COOLDOWN: 1;
declare const LINK_LOSS_RATIO: 0.03;

declare const STORAGE_CAPACITY: 1000000;
declare const STORAGE_HITS: 10000;

declare const BODYPART_COST: Record<BodyPartConstant, number>;

declare const BODYPARTS_ALL: BodyPartConstant[];

declare const CARRY_CAPACITY: 50;
declare const HARVEST_POWER: 2;
declare const HARVEST_MINERAL_POWER: 1;
declare const REPAIR_POWER: 100;
declare const DISMANTLE_POWER: 50;
declare const BUILD_POWER: 5;
declare const ATTACK_POWER: 30;
declare const UPGRADE_CONTROLLER_POWER: 1;
declare const RANGED_ATTACK_POWER: 10;
declare const HEAL_POWER: 12;
declare const RANGED_HEAL_POWER: 4;
declare const DISMANTLE_COST: 0.005;

declare const MOVE: "move";
declare const WORK: "work";
declare const CARRY: "carry";
declare const ATTACK: "attack";
declare const RANGED_ATTACK: "ranged_attack";
declare const TOUGH: "tough";
declare const HEAL: "heal";
declare const CLAIM: "claim";

declare const CONSTRUCTION_COST: Record<BuildableStructureConstant, number>;

declare const CONSTRUCTION_COST_ROAD_SWAMP_RATIO: 5;

declare const STRUCTURE_EXTENSION: "extension";
declare const STRUCTURE_RAMPART: "rampart";
declare const STRUCTURE_ROAD: "road";
declare const STRUCTURE_SPAWN: "spawn";
declare const STRUCTURE_LINK: "link";
declare const STRUCTURE_WALL: "constructedWall";
declare const STRUCTURE_KEEPER_LAIR: "keeperLair";
declare const STRUCTURE_CONTROLLER: "controller";
declare const STRUCTURE_STORAGE: "storage";
declare const STRUCTURE_TOWER: "tower";
declare const STRUCTURE_OBSERVER: "observer";
declare const STRUCTURE_POWER_BANK: "powerBank";
declare const STRUCTURE_POWER_SPAWN: "powerSpawn";
declare const STRUCTURE_EXTRACTOR: "extractor";
declare const STRUCTURE_LAB: "lab";
declare const STRUCTURE_TERMINAL: "terminal";
declare const STRUCTURE_CONTAINER: "container";
declare const STRUCTURE_NUKER: "nuker";
declare const STRUCTURE_PORTAL: "portal";

declare const RESOURCE_ENERGY: "energy";
declare const RESOURCE_POWER: "power";
declare const RESOURCE_UTRIUM: "U";
declare const RESOURCE_LEMERGIUM: "L";
declare const RESOURCE_KEANIUM: "K";
declare const RESOURCE_GHODIUM: "G";
declare const RESOURCE_ZYNTHIUM: "Z";
declare const RESOURCE_OXYGEN: "O";
declare const RESOURCE_HYDROGEN: "H";
declare const RESOURCE_CATALYST: "X";
declare const RESOURCE_HYDROXIDE: "OH";
declare const RESOURCE_ZYNTHIUM_KEANITE: "ZK";
declare const RESOURCE_UTRIUM_LEMERGITE: "UL";
declare const RESOURCE_UTRIUM_HYDRIDE: "UH";
declare const RESOURCE_UTRIUM_OXIDE: "UO";
declare const RESOURCE_KEANIUM_HYDRIDE: "KH";
declare const RESOURCE_KEANIUM_OXIDE: "KO";
declare const RESOURCE_LEMERGIUM_HYDRIDE: "LH";
declare const RESOURCE_LEMERGIUM_OXIDE: "LO";
declare const RESOURCE_ZYNTHIUM_HYDRIDE: "ZH";
declare const RESOURCE_ZYNTHIUM_OXIDE: "ZO";
declare const RESOURCE_GHODIUM_HYDRIDE: "GH";
declare const RESOURCE_GHODIUM_OXIDE: "GO";
declare const RESOURCE_UTRIUM_ACID: "UH2O";
declare const RESOURCE_UTRIUM_ALKALIDE: "UHO2";
declare const RESOURCE_KEANIUM_ACID: "KH2O";
declare const RESOURCE_KEANIUM_ALKALIDE: "KHO2";
declare const RESOURCE_LEMERGIUM_ACID: "LH2O";
declare const RESOURCE_LEMERGIUM_ALKALIDE: "LHO2";
declare const RESOURCE_ZYNTHIUM_ACID: "ZH2O";
declare const RESOURCE_ZYNTHIUM_ALKALIDE: "ZHO2";
declare const RESOURCE_GHODIUM_ACID: "GH2O";
declare const RESOURCE_GHODIUM_ALKALIDE: "GHO2";
declare const RESOURCE_CATALYZED_UTRIUM_ACID: "XUH2O";
declare const RESOURCE_CATALYZED_UTRIUM_ALKALIDE: "XUHO2";
declare const RESOURCE_CATALYZED_KEANIUM_ACID: "XKH2O";
declare const RESOURCE_CATALYZED_KEANIUM_ALKALIDE: "XKHO2";
declare const RESOURCE_CATALYZED_LEMERGIUM_ACID: "XLH2O";
declare const RESOURCE_CATALYZED_LEMERGIUM_ALKALIDE: "XLHO2";
declare const RESOURCE_CATALYZED_ZYNTHIUM_ACID: "XZH2O";
declare const RESOURCE_CATALYZED_ZYNTHIUM_ALKALIDE: "XZHO2";
declare const RESOURCE_CATALYZED_GHODIUM_ACID: "XGH2O";
declare const RESOURCE_CATALYZED_GHODIUM_ALKALIDE: "XGHO2";
declare const RESOURCES_ALL: ResourceConstant[];

declare const SUBSCRIPTION_TOKEN: "token";

declare const CONTROLLER_LEVELS: { [level: number]: number };
declare const CONTROLLER_STRUCTURES: Record<BuildableStructureConstant, { [level: number]: number }>;

declare const CONTROLLER_DOWNGRADE: { [level: number]: number };
declare const CONTROLLER_DOWNGRADE_RESTORE: number;
declare const CONTROLLER_DOWNGRADE_SAFEMODE_THRESHOLD: number;
declare const CONTROLLER_CLAIM_DOWNGRADE: number;
declare const CONTROLLER_RESERVE: number;
declare const CONTROLLER_RESERVE_MAX: number;
declare const CONTROLLER_MAX_UPGRADE_PER_TICK: number;
declare const CONTROLLER_ATTACK_BLOCKED_UPGRADE: number;
declare const CONTROLLER_NUKE_BLOCKED_UPGRADE: number;

declare const SAFE_MODE_DURATION: 20000;
declare const SAFE_MODE_COOLDOWN: 50000;
declare const SAFE_MODE_COST: 1000;

declare const TOWER_HITS: number;
declare const TOWER_CAPACITY: number;
declare const TOWER_ENERGY_COST: number;
declare const TOWER_POWER_ATTACK: number;
declare const TOWER_POWER_HEAL: number;
declare const TOWER_POWER_REPAIR: number;
declare const TOWER_OPTIMAL_RANGE: number;
declare const TOWER_FALLOFF_RANGE: number;
declare const TOWER_FALLOFF: number;

declare const OBSERVER_HITS: number;
declare const OBSERVER_RANGE: number;

declare const POWER_BANK_HITS: number;
declare const POWER_BANK_CAPACITY_MAX: number;
declare const POWER_BANK_CAPACITY_MIN: number;
declare const POWER_BANK_CAPACITY_CRIT: number;
declare const POWER_BANK_DECAY: number;
declare const POWER_BANK_HIT_BACK: number;

declare const POWER_SPAWN_HITS: number;
declare const POWER_SPAWN_ENERGY_CAPACITY: number;
declare const POWER_SPAWN_POWER_CAPACITY: number;
declare const POWER_SPAWN_ENERGY_RATIO: number;

declare const EXTRACTOR_HITS: number;
declare const EXTRACTOR_COOLDOWN: number;

declare const LAB_HITS: number;
declare const LAB_MINERAL_CAPACITY: number;
declare const LAB_ENERGY_CAPACITY: number;
declare const LAB_BOOST_ENERGY: number;
declare const LAB_BOOST_MINERAL: number;
declare const LAB_COOLDOWN: number;
declare const LAB_REACTION_AMOUNT: number;

declare const GCL_POW: number;
declare const GCL_MULTIPLY: number;
declare const GCL_NOVICE: number;

declare const MODE_SIMULATION: string;
declare const MODE_SURVIVAL: string;
declare const MODE_WORLD: string;
declare const MODE_ARENA: string;

declare const TERRAIN_MASK_WALL: number;
declare const TERRAIN_MASK_SWAMP: number;
declare const TERRAIN_MASK_LAVA: number;

declare const MAX_CONSTRUCTION_SITES: number;
declare const MAX_CREEP_SIZE: number;

declare const MINERAL_REGEN_TIME: number;
declare const MINERAL_MIN_AMOUNT: Record<MineralConstant, number>;
declare const MINERAL_RANDOM_FACTOR: number;

declare const MINERAL_DENSITY: {
    [level: number]: number;
    1: number;
    2: number;
    3: number;
    4: number;
};

declare const MINERAL_DENSITY_PROBABILITY: {
    [level: number]: number;
    1: number;
    2: number;
    3: number;
    4: number;
};

declare const MINERAL_DENSITY_CHANGE: number;

declare const DENSITY_LOW: number;
declare const DENSITY_MODERATE: number;
declare const DENSITY_HIGH: number;
declare const DENSITY_ULTRA: number;

declare const TERMINAL_CAPACITY: number;
declare const TERMINAL_COOLDOWN: number;
declare const TERMINAL_HITS: number;
declare const TERMINAL_SEND_COST: number;
declare const TERMINAL_MIN_SEND: number;

declare const CONTAINER_HITS: number;
declare const CONTAINER_CAPACITY: number;
declare const CONTAINER_DECAY: number;
declare const CONTAINER_DECAY_TIME: number;
declare const CONTAINER_DECAY_TIME_OWNED: number;

declare const NUKER_HITS: number;
declare const NUKER_COOLDOWN: number;
declare const NUKER_ENERGY_CAPACITY: number;
declare const NUKER_GHODIUM_CAPACITY: number;
declare const NUKE_LAND_TIME: number;
declare const NUKE_RANGE: number;
declare const NUKE_DAMAGE: {
    [range: number]: number;
    0: number;
    1: number;
    4: number;
};

declare const REACTIONS: {
    [resource: string]: { [resource: string]: string };
    H: {
        O: "OH";
        L: "LH";
        K: "KH";
        U: "UH";
        Z: "ZH";
        G: "GH";
    };
    O: {
        H: "OH";
        L: "LO";
        K: "KO";
        U: "UO";
        Z: "ZO";
        G: "GO";
    };
    Z: {
        K: "ZK";
        H: "ZH";
        O: "ZO";
    };
    L: {
        U: "UL";
        H: "LH";
        O: "LO";
    };
    K: {
        Z: "ZK";
        H: "KH";
        O: "KO";
    };
    G: {
        H: "GH";
        O: "GO";
    };
    U: {
        L: "UL";
        H: "UH";
        O: "UO";
    };
    OH: {
        UH: "UH2O";
        UO: "UHO2";
        ZH: "ZH2O";
        ZO: "ZHO2";
        KH: "KH2O";
        KO: "KHO2";
        LH: "LH2O";
        LO: "LHO2";
        GH: "GH2O";
        GO: "GHO2";
    };
    X: {
        UH2O: "XUH2O";
        UHO2: "XUHO2";
        LH2O: "XLH2O";
        LHO2: "XLHO2";
        KH2O: "XKH2O";
        KHO2: "XKHO2";
        ZH2O: "XZH2O";
        ZHO2: "XZHO2";
        GH2O: "XGH2O";
        GHO2: "XGHO2";
    };
    ZK: {
        UL: "G";
    };
    UL: {
        ZK: "G";
    };
    LH: {
        OH: "LH2O";
    };
    ZH: {
        OH: "ZH2O";
    };
    GH: {
        OH: "GH2O";
    };
    KH: {
        OH: "KH2O";
    };
    UH: {
        OH: "UH2O";
    };
    LO: {
        OH: "LHO2";
    };
    ZO: {
        OH: "ZHO2";
    };
    KO: {
        OH: "KHO2";
    };
    UO: {
        OH: "UHO2";
    };
    GO: {
        OH: "GHO2";
    };
    LH2O: {
        X: "XLH2O";
    };
    KH2O: {
        X: "XKH2O";
    };
    ZH2O: {
        X: "XZH2O";
    };
    UH2O: {
        X: "XUH2O";
    };
    GH2O: {
        X: "XGH2O";
    };
    LHO2: {
        X: "XLHO2";
    };
    UHO2: {
        X: "XUHO2";
    };
    KHO2: {
        X: "XKHO2";
    };
    ZHO2: {
        X: "XZHO2";
    };
    GHO2: {
        X: "XGHO2";
    };
};

declare const BOOSTS: {
    [part: string]: { [boost: string]: { [action: string]: number } };
    work: {
        UO: {
            harvest: 3;
        };
        UHO2: {
            harvest: 5;
        };
        XUHO2: {
            harvest: 7;
        };
        LH: {
            build: 1.5;
            repair: 1.5;
        };
        LH2O: {
            build: 1.8;
            repair: 1.8;
        };
        XLH2O: {
            build: 2;
            repair: 2;
        };
        ZH: {
            dismantle: 2;
        };
        ZH2O: {
            dismantle: 3;
        };
        XZH2O: {
            dismantle: 4;
        };
        GH: {
            upgradeController: 1.5;
        };
        GH2O: {
            upgradeController: 1.8;
        };
        XGH2O: {
            upgradeController: 2;
        };
    };
    attack: {
        UH: {
            attack: 2;
        };
        UH2O: {
            attack: 3;
        };
        XUH2O: {
            attack: 4;
        };
    };
    ranged_attack: {
        KO: {
            rangedAttack: 2;
            rangedMassAttack: 2;
        };
        KHO2: {
            rangedAttack: 3;
            rangedMassAttack: 3;
        };
        XKHO2: {
            rangedAttack: 4;
            rangedMassAttack: 4;
        };
    };
    heal: {
        LO: {
            heal: 2;
            rangedHeal: 2;
        };
        LHO2: {
            heal: 3;
            rangedHeal: 3;
        };
        XLHO2: {
            heal: 4;
            rangedHeal: 4;
        };
    };
    carry: {
        KH: {
            capacity: 2;
        };
        KH2O: {
            capacity: 3;
        };
        XKH2O: {
            capacity: 4;
        };
    };
    move: {
        ZO: {
            fatigue: 2;
        };
        ZHO2: {
            fatigue: 3;
        };
        XZHO2: {
            fatigue: 4;
        };
    };
    tough: {
        GO: {
            damage: 0.7;
        };
        GHO2: {
            damage: 0.5;
        };
        XGHO2: {
            damage: 0.3;
        };
    };
};

declare const LOOK_CREEPS: "creep";
declare const LOOK_ENERGY: "energy";
declare const LOOK_RESOURCES: "resource";
declare const LOOK_SOURCES: "source";
declare const LOOK_MINERALS: "mineral";
declare const LOOK_STRUCTURES: "structure";
declare const LOOK_FLAGS: "flag";
declare const LOOK_CONSTRUCTION_SITES: "constructionSite";
declare const LOOK_NUKES: "nuke";
declare const LOOK_TERRAIN: "terrain";
declare const LOOK_TOMBSTONES: "tombstone";

declare const ORDER_SELL: "sell";
declare const ORDER_BUY: "buy";

declare const INVADERS_ENERGY_GOAL: number;

declare const SYSTEM_USERNAME: string;

declare const TOMBSTONE_DECAY_PER_PART: 5;

declare const EVENT_ATTACK: 1;
declare const EVENT_OBJECT_DESTROYED: 2;
declare const EVENT_ATTACK_CONTROLLER: 3;
declare const EVENT_BUILD: 4;
declare const EVENT_HARVEST: 5;
declare const EVENT_HEAL: 6;
declare const EVENT_REPAIR: 7;
declare const EVENT_RESERVE_CONTROLLER: 8;
declare const EVENT_UPGRADE_CONTROLLER: 9;
declare const EVENT_EXIT: 10;

declare const EVENT_ATTACK_TYPE_MELEE: 1;
declare const EVENT_ATTACK_TYPE_RANGED: 2;
declare const EVENT_ATTACK_TYPE_RANGED_MASS: 3;
declare const EVENT_ATTACK_TYPE_DISMANTLE: 4;
declare const EVENT_ATTACK_TYPE_HIT_BACK: 5;
declare const EVENT_ATTACK_TYPE_NUKE: 6;

declare const EVENT_HEAL_TYPE_MELEE: 1;
declare const EVENT_HEAL_TYPE_RANGED: 2;
/**
 * A site of a structure which is currently under construction.
 */
interface ConstructionSite<T extends BuildableStructureConstant = BuildableStructureConstant> extends RoomObject {
    readonly prototype: ConstructionSite;
    /**
     * A unique object identifier. You can use `Game.getObjectById` method to retrieve an object instance by its `id`.
     */
    id: string;
    /**
     * Whether this is your own construction site.
     */
    my: boolean;
    /**
     * An object with the structure’s owner info.
     */
    owner: Owner;
    /**
     * The current construction progress.
     */
    progress: number;
    /**
     * The total construction progress needed for the structure to be built.
     */
    progressTotal: number;
    /**
     * One of the `STRUCTURE_*` constants.
     */
    structureType: T;
    /**
     * Remove the construction site.
     * @returns Result Code: OK, ERR_NOT_OWNER
     */
    remove(): number;
}

interface ConstructionSiteConstructor extends _Constructor<ConstructionSite>, _ConstructorById<ConstructionSite> {}

declare const ConstructionSite: ConstructionSiteConstructor;
/**
 * Creeps are your units.
 * Creeps can move, harvest energy, construct structures, attack another creeps, and perform other actions.
 * Each creep consists of up to 50 body parts with the following possible types:
 */
interface Creep extends RoomObject {
    readonly prototype: Creep;

    /**
     * An array describing the creep's body.
     */
    body: BodyPartDefinition[];
    /**
     * An object with the creep's cargo contents.
     */
    carry: StoreDefinition;
    /**
     * The total amount of resources the creep can carry.
     */
    carryCapacity: number;
    /**
     * The movement fatigue indicator. If it is greater than zero, the creep cannot move.
     */
    fatigue: number;
    /**
     * The current amount of hit points of the creep.
     */
    hits: number;
    /**
     * The maximum amount of hit points of the creep.
     */
    hitsMax: number;
    /**
     * A unique object identifier. You can use `Game.getObjectById` method to retrieve an object instance by its `id`.
     */
    id: string;
    /**
     * A shorthand to `Memory.creeps[creep.name]`. You can use it for quick access the creep’s specific memory data object.
     */
    memory: CreepMemory;
    /**
     * Whether it is your creep or foe.
     */
    my: boolean;
    /**
     * Creep’s name. You can choose the name while creating a new creep, and it cannot be changed later. This name is a hash key to access the creep via the `Game.creeps` object.
     */
    name: string;
    /**
     * An object with the creep’s owner info.
     */
    owner: Owner;
    /**
     * The link to the Room object. Always defined because creeps give visibility into the room they're in.
     */
    room: Room;
    /**
     * Whether this creep is still being spawned.
     */
    spawning: boolean;
    /**
     * The text message that the creep was saying at the last tick.
     */
    saying: string;
    /**
     * The remaining amount of game ticks after which the creep will die.
     *
     * Will be `undefined` if the creep is still spawning.
     */
    ticksToLive: number | undefined;
    /**
     * Attack another creep or structure in a short-ranged attack. Needs the
     * ATTACK body part. If the target is inside a rampart, then the rampart is
     * attacked instead.
     *
     * The target has to be at adjacent square to the creep. If the target is a
     * creep with ATTACK body parts and is not inside a rampart, it will
     * automatically hit back at the attacker.
     *
     * @returns Result Code: OK, ERR_NOT_OWNER, ERR_BUSY, ERR_INVALID_TARGET, ERR_NOT_IN_RANGE, ERR_NO_BODYPART
     */
    attack(target: Creep | Structure): CreepActionReturnCode;
    /**
     * Decreases the controller's downgrade or reservation timer for 1 tick per
     * every 5 `CLAIM` body parts (so the creep must have at least 5x`CLAIM`).
     *
     * The controller under attack cannot be upgraded for the next 1,000 ticks.
     * The target has to be at adjacent square to the creep.
     *
     * @returns Result Code: OK, ERR_NOT_OWNER, ERR_BUSY, ERR_INVALID_TARGET, ERR_NOT_IN_RANGE, ERR_NO_BODYPART, ERR_TIRED
     */
    attackController(target: StructureController): CreepActionReturnCode;
    /**
     * Build a structure at the target construction site using carried energy.
     * Needs WORK and CARRY body parts.
     *
     * The target has to be within 3 squares range of the creep.
     *
     * @param target The target object to be attacked.
     * @returns Result Code: OK, ERR_NOT_OWNER, ERR_BUSY, ERR_NOT_ENOUGH_RESOURCES, ERR_INVALID_TARGET, ERR_NOT_IN_RANGE, ERR_NO_BODYPART, ERR_RCL_NOT_ENOUGH
     */
    build(target: ConstructionSite): CreepActionReturnCode | ERR_NOT_ENOUGH_RESOURCES | ERR_RCL_NOT_ENOUGH;
    /**
     * Cancel the order given during the current game tick.
     * @param methodName The name of a creep's method to be cancelled.
     * @returns Result Code: OK, ERR_NOT_FOUND
     */
    cancelOrder(methodName: string): OK | ERR_NOT_FOUND;
    /**
     * Requires the CLAIM body part.
     *
     * If applied to a neutral controller, claims it under your control.
     * If applied to a hostile controller, decreases its downgrade or reservation timer depending on the CLAIM body parts count.
     *
     * The target has to be at adjacent square to the creep.
     * @param target The target controller object.
     * @returns Result Code: OK, ERR_NOT_OWNER, ERR_BUSY, ERR_INVALID_TARGET, ERR_FULL, ERR_NOT_IN_RANGE, ERR_NO_BODYPART, ERR_GCL_NOT_ENOUGH
     */
    claimController(target: StructureController): CreepActionReturnCode | ERR_FULL | ERR_GCL_NOT_ENOUGH;
    /**
     * Dismantles any (even hostile) structure returning 50% of the energy spent on its repair.
     *
     * Requires the WORK body part. If the creep has an empty CARRY body part, the energy is put into it; otherwise it is dropped on the ground.
     *
     * The target has to be at adjacent square to the creep.
     * @param target The target structure.
     */
    dismantle(target: Structure): CreepActionReturnCode;
    /**
     * Drop this resource on the ground.
     * @param resourceType One of the RESOURCE_* constants.
     * @param amount The amount of resource units to be dropped. If omitted, all the available carried amount is used.
     */
    drop(resourceType: ResourceConstant, amount?: number): OK | ERR_NOT_OWNER | ERR_BUSY | ERR_NOT_ENOUGH_RESOURCES;
    /**
     * Add one more available safe mode activation to a room controller. The creep has to be at adjacent square to the target room controller and have 1000 ghodium resource.
     * @param target The target room controller.
     * @returns Result Code: OK, ERR_NOT_OWNER, ERR_BUSY, ERR_NOT_ENOUGH_RESOURCES, ERR_INVALID_TARGET, ERR_NOT_IN_RANGE
     */
    generateSafeMode(target: StructureController): CreepActionReturnCode;
    /**
     * Get the quantity of live body parts of the given type. Fully damaged parts do not count.
     * @param type A body part type, one of the following body part constants: MOVE, WORK, CARRY, ATTACK, RANGED_ATTACK, HEAL, TOUGH, CLAIM
     */
    getActiveBodyparts(type: BodyPartConstant): number;
    /**
     * Harvest energy from the source.
     *
     * Needs the WORK body part.
     *
     * If the creep has an empty CARRY body part, the harvested energy is put into it; otherwise it is dropped on the ground.
     *
     * The target has to be at an adjacent square to the creep.
     * @param target The source object to be harvested.
     */
    harvest(target: Source | Mineral): CreepActionReturnCode | ERR_NOT_FOUND | ERR_NOT_ENOUGH_RESOURCES;
    /**
     * Heal self or another creep. It will restore the target creep’s damaged body parts function and increase the hits counter.
     *
     * Needs the HEAL body part.
     *
     * The target has to be at adjacent square to the creep.
     * @param target The target creep object.
     */
    heal(target: Creep): CreepActionReturnCode;
    /**
     * Move the creep one square in the specified direction. Needs the MOVE body part.
     * @param direction
     */
    move(direction: DirectionConstant): CreepMoveReturnCode;
    /**
     * Move the creep using the specified predefined path. Needs the MOVE body part.
     * @param path A path value as returned from Room.findPath or RoomPosition.findPathTo methods. Both array form and serialized string form are accepted.
     */
    moveByPath(path: PathStep[] | RoomPosition[] | string): CreepMoveReturnCode | ERR_NOT_FOUND | ERR_INVALID_ARGS;
    /**
     * Find the optimal path to the target within the same room and move to it.
     * A shorthand to consequent calls of pos.findPathTo() and move() methods.
     * If the target is in another room, then the corresponding exit will be used as a target.
     *
     * Needs the MOVE body part.
     * @param x X position of the target in the room.
     * @param y Y position of the target in the room.
     * @param opts An object containing pathfinding options flags (see Room.findPath for more info) or one of the following: reusePath, serializeMemory, noPathFinding
     */
    moveTo(x: number, y: number, opts?: MoveToOpts): CreepMoveReturnCode | ERR_NO_PATH | ERR_INVALID_TARGET;
    /**
     * Find the optimal path to the target within the same room and move to it.
     * A shorthand to consequent calls of pos.findPathTo() and move() methods.
     * If the target is in another room, then the corresponding exit will be used as a target.
     *
     * Needs the MOVE body part.
     * @param target Can be a RoomPosition object or any object containing RoomPosition.
     * @param opts An object containing pathfinding options flags (see Room.findPath for more info) or one of the following: reusePath, serializeMemory, noPathFinding
     */
    moveTo(
        target: RoomPosition | { pos: RoomPosition },
        opts?: MoveToOpts,
    ): CreepMoveReturnCode | ERR_NO_PATH | ERR_INVALID_TARGET | ERR_NOT_FOUND;
    /**
     * Toggle auto notification when the creep is under attack. The notification will be sent to your account email. Turned on by default.
     * @param enabled Whether to enable notification or disable.
     */
    notifyWhenAttacked(enabled: boolean): OK | ERR_NOT_OWNER | ERR_BUSY | ERR_INVALID_ARGS;
    /**
     * Pick up an item (a dropped piece of energy). Needs the CARRY body part. The target has to be at adjacent square to the creep or at the same square.
     * @param target The target object to be picked up.
     */
    pickup(target: Resource): CreepActionReturnCode | ERR_FULL;
    /**
     * A ranged attack against another creep or structure.
     *
     * Needs the RANGED_ATTACK body part. If the target is inside a rampart, the rampart is attacked instead.
     *
     * The target has to be within 3 squares range of the creep.
     * @param target The target object to be attacked.
     */
    rangedAttack(target: Creep | Structure): CreepActionReturnCode;
    /**
     * Heal another creep at a distance.
     *
     * It will restore the target creep’s damaged body parts function and increase the hits counter.
     *
     * Needs the HEAL body part. The target has to be within 3 squares range of the creep.
     * @param target The target creep object.
     */
    rangedHeal(target: Creep): CreepActionReturnCode;
    /**
     * A ranged attack against all hostile creeps or structures within 3 squares range.
     *
     * Needs the RANGED_ATTACK body part.
     *
     * The attack power depends on the range to each target. Friendly units are not affected.
     */
    rangedMassAttack(): OK | ERR_NOT_OWNER | ERR_BUSY | ERR_NO_BODYPART;
    /**
     * Repair a damaged structure using carried energy. Needs the WORK and CARRY body parts. The target has to be within 3 squares range of the creep.
     * @param target he target structure to be repaired.
     */
    repair(target: Structure): CreepActionReturnCode | ERR_NOT_ENOUGH_RESOURCES;
    /**
     * Temporarily block a neutral controller from claiming by other players.
     *
     * Each tick, this command increases the counter of the period during which the controller is unavailable by 1 tick per each CLAIM body part.
     *
     * The maximum reservation period to maintain is 5,000 ticks.
     *
     * The target has to be at adjacent square to the creep....
     * @param target The target controller object to be reserved.
     * @return Result code: OK, ERR_NOT_OWNER, ERR_BUSY, ERR_INVALID_TARGET, ERR_NOT_IN_RANGE, ERR_NO_BODYPART
     */
    reserveController(target: StructureController): CreepActionReturnCode;
    /**
     * Display a visual speech balloon above the creep with the specified message.
     *
     * The message will disappear after a few seconds. Useful for debugging purposes.
     *
     * Only the creep's owner can see the speech message unless toPublic is true.
     * @param message The message to be displayed. Maximum length is 10 characters.
     * @param set to 'true' to allow other players to see this message. Default is 'false'.
     */
    say(message: string, toPublic?: boolean): OK | ERR_NOT_OWNER | ERR_BUSY;
    /**
     * Sign a controller with a random text visible to all players. This text will appear in the room UI, in the world map, and can be accessed via the API.
     * You can sign unowned and hostile controllers. The target has to be at adjacent square to the creep. Pass an empty string to remove the sign.
     * @param target The target controller object to be signed.
     * @param text The sign text. The maximum text length is 100 characters.
     * @returns Result Code: OK, ERR_BUSY, ERR_INVALID_TARGET, ERR_NOT_IN_RANGE
     */
    signController(target: StructureController, text: string): OK | ERR_BUSY | ERR_INVALID_TARGET | ERR_NOT_IN_RANGE;
    /**
     * Kill the creep immediately.
     */
    suicide(): OK | ERR_NOT_OWNER | ERR_BUSY;
    /**
     * Transfer resource from the creep to another object. The target has to be at adjacent square to the creep.
     * @param target The target object.
     * @param resourceType One of the RESOURCE_* constants
     * @param amount The amount of resources to be transferred. If omitted, all the available carried amount is used.
     */
    transfer(target: Creep | Structure, resourceType: ResourceConstant, amount?: number): ScreepsReturnCode;
    /**
     * Upgrade your controller to the next level using carried energy.
     *
     * Upgrading controllers raises your Global Control Level in parallel.
     *
     * Needs WORK and CARRY body parts.
     *
     * The target has to be at adjacent square to the creep.
     *
     * A fully upgraded level 8 controller can't be upgraded with the power over 15 energy units per tick regardless of creeps power.
     *
     * The cumulative effect of all the creeps performing upgradeController in the current tick is taken into account.
     * @param target The target controller object to be upgraded.
     */
    upgradeController(target: StructureController): ScreepsReturnCode;
    /**
     * Withdraw resources from a structure.
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
    withdraw(target: Structure | Tombstone, resourceType: ResourceConstant, amount?: number): ScreepsReturnCode;
}

interface CreepConstructor extends _Constructor<Creep>, _ConstructorById<Creep> {}

declare const Creep: CreepConstructor;
/**
 * A flag. Flags can be used to mark particular spots in a room. Flags are visible to their owners only.
 */
interface Flag extends RoomObject {
    readonly prototype: Flag;

    /**
     * Flag color. One of the `COLOR_*` constants.
     */
    color: ColorConstant;
    /**
     * A shorthand to Memory.flags[flag.name]. You can use it for quick access the flag's specific memory data object.
     */
    memory: FlagMemory;
    /**
     * Flag’s name.
     *
     * You can choose the name while creating a new flag, and it cannot be changed later.
     *
     * This name is a hash key to access the spawn via the `Game.flags` object. The maximum name length is 60 characters.
     */
    name: string;
    /**
     * Flag secondary color. One of the `COLOR_*` constants.
     */
    secondaryColor: ColorConstant;
    /**
     * Remove the flag.
     * @returns Result Code: OK
     */
    remove(): OK;
    /**
     * Set new color of the flag.
     * @param color One of the following constants: COLOR_WHITE, COLOR_GREY, COLOR_RED, COLOR_PURPLE, COLOR_BLUE, COLOR_CYAN, COLOR_GREEN, COLOR_YELLOW, COLOR_ORANGE, COLOR_BROWN
     * @parma secondaryColor Secondary color of the flag. One of the COLOR_* constants.
     * @returns Result Code: OK, ERR_INVALID_ARGS
     */
    setColor(color: ColorConstant, secondaryColor?: ColorConstant): OK | ERR_INVALID_ARGS;
    /**
     * Set new position of the flag.
     * @param x The X position in the room.
     * @param y The Y position in the room.
     * @returns Result Code: OK, ERR_INVALID_TARGET
     */
    setPosition(x: number, y: number): OK | ERR_INVALID_ARGS;
    /**
     * Set new position of the flag.
     * @param pos Can be a RoomPosition object or any object containing RoomPosition.
     * @returns Result Code: OK, ERR_INVALID_TARGET
     */
    setPosition(pos: RoomPosition | { pos: RoomPosition }): OK | ERR_INVALID_ARGS;
}

interface FlagConstructor extends _Constructor<Flag> {
    new (name: string, color: ColorConstant, secondaryColor: ColorConstant, roomName: string, x: number, y: number): Flag;
    (name: string, color: ColorConstant, secondaryColor: ColorConstant, roomName: string, x: number, y: number): Flag;
}

declare const Flag: FlagConstructor;
/**
 * The main global game object containing all the gameplay information.
 */
interface Game {
    /**
     * An object containing information about your CPU usage.
     */
    cpu: CPU;
    /**
     * A hash containing all your creeps with creep names as hash keys.
     */
    creeps: { [creepName: string]: Creep };
    /**
     * A hash containing all your flags with flag names as hash keys.
     */
    flags: { [flagName: string]: Flag };
    /**
     * Your Global Control Level.
     */
    gcl: GlobalControlLevel;
    /**
     * A global object representing world GameMap.
     */
    map: GameMap;
    /**
     * A global object representing the in-game market.
     */
    market: Market;
    /**
     * An object with your global resources that are bound to the account, like subscription tokens. Each object key is a resource constant, values are resources amounts.
     */
    resources: { [key: string]: any };
    /**
     * A hash containing all the rooms available to you with room names as hash keys.
     * A room is visible if you have a creep or an owned structure in it.
     */
    rooms: { [roomName: string]: Room };
    /**
     * A hash containing all your spawns with spawn names as hash keys.
     */
    spawns: { [spawnName: string]: StructureSpawn };
    /**
     * A hash containing all your structures with structure id as hash keys.
     */
    structures: { [structureId: string]: Structure };

    /**
     * A hash containing all your construction sites with their id as hash keys.
     */
    constructionSites: { [constructionSiteId: string]: ConstructionSite };

    /**
     * An object describing the world shard where your script is currently being executed in.
     */
    shard: Shard;

    /**
     * System game tick counter. It is automatically incremented on every tick.
     */
    time: number;

    /**
     * Get an object with the specified unique ID. It may be a game object of any type. Only objects from the rooms which are visible to you can be accessed.
     * @param id The unique identifier.
     * @returns an object instance or null if it cannot be found.
     */
    getObjectById<T>(id: string | undefined): T | null;
    /**
     * Send a custom message at your profile email.
     *
     * This way, you can set up notifications to yourself on any occasion within the game.
     *
     * You can schedule up to 20 notifications during one game tick. Not available in the Simulation Room.
     * @param message Custom text which will be sent in the message. Maximum length is 1000 characters.
     * @param groupInterval If set to 0 (default), the notification will be scheduled immediately.
     * Otherwise, it will be grouped with other notifications and mailed out later using the specified time in minutes.
     */
    notify(message: string, groupInterval?: number): undefined;
}

declare var Game: Game;
interface _HasRoomPosition {
    pos: RoomPosition;
}

interface GlobalControlLevel {
    /**
     * The current level.
     */
    level: number;
    /**
     * The current progress to the next level.
     */
    progress: number;
    /**
     * The progress required to reach the next level.
     */
    progressTotal: number;
}

interface Shard {
    /**
     * The name of the shard.
     */
    name: string;
    /**
     * Currently always equals to normal.
     */
    type: "normal";
    /**
     * Whether this shard belongs to the PTR.
     */
    ptr: boolean;
}

interface CPU {
    /**
     * Your assigned CPU limit for the current shard.
     */
    limit: number;
    /**
     * An amount of available CPU time at the current game tick. Usually it is higher than `Game.cpu.limit`.
     */
    tickLimit: number;
    /**
     * An amount of unused CPU accumulated in your bucket.
     * @see http://docs.screeps.com/cpu-limit.html#Bucket
     */
    bucket: number;
    /**
     * An object with limits for each shard with shard names as keys. You can use `setShardLimits` method to re-assign them.
     */
    shardLimits: CPUShardLimits;

    /**
     * Get amount of CPU time used from the beginning of the current game tick. Always returns 0 in the Simulation mode.
     */
    getUsed(): number;
    /**
     * Allocate CPU limits to different shards. Total amount of CPU should remain equal to `Game.cpu.shardLimits`.
     * This method can be used only once per 12 hours.
     *
     * @param {CPUShardLimits} limits An object with CPU values for each shard in the same format as `Game.cpu.shardLimits`.
     * @returns {(OK | ERR_BUSY | ERR_INVALID_ARGS)} One of the following codes: `OK | ERR_BUSY | ERR_INVALID_ARGS`
     * @memberof CPU
     */
    setShardLimits(limits: CPUShardLimits): OK | ERR_BUSY | ERR_INVALID_ARGS;

    /**
     * Use this method to get heap statistics for your virtual machine.
     *
     * This method will be undefined if you are not using IVM.
     *
     * The return value is almost identical to the Node.js function v8.getHeapStatistics().
     * This function returns one additional property: externally_allocated_size which is the total amount of currently
     * allocated memory which is not included in the v8 heap but counts against this isolate's memory limit.
     * ArrayBuffer instances over a certain size are externally allocated and will be counted here.
     */
    getHeapStatistics?(): HeapStatistics;
}

interface HeapStatistics {
    total_heap_size: number;
    total_heap_size_executable: number;
    total_physical_size: number;
    total_available_size: number;
    used_heap_size: number;
    heap_size_limit: number;
    malloced_memory: number;
    peak_malloced_memory: number;
    does_zap_garbage: 0 | 1;
    externally_allocated_size: number;
}

/**
 * An array describing the creep’s body. Each element contains the following properties:
 */
interface BodyPartDefinition {
    /**
     * One of the `RESOURCE_*` constants.
     *
     * If the body part is boosted, this property specifies the mineral type which is used for boosting.
     */
    boost?: ResourceConstant;
    /**
     * One of the body part types constants.
     */
    type: BodyPartConstant;
    /**
     * The remaining amount of hit points of this body part.
     */
    hits: number;
}
interface Owner {
    /**
     * The name of the owner user.
     */
    username: string;
}
interface ReservationDefinition {
    username: string;
    ticksToEnd: number;
}
interface SignDefinition {
    username: string;
    text: string;
    time: number;
    datetime: Date;
}

interface CPUShardLimits {
    [shard: string]: number;
}

type StoreDefinition = Partial<Record<_ResourceConstantSansEnergy, number>> & { energy: number };
// type SD<K extends ResourceConstant> = {
//   [P in K]: number;
//   energy: number;
// }

type ExitsInformation = Partial<Record<ExitKey, string>>;

interface AllLookAtTypes {
    constructionSite: ConstructionSite;
    creep: Creep;
    energy: Resource<RESOURCE_ENERGY>;
    exit: any; // TODO what type is this?
    flag: Flag;
    mineral: Mineral;
    nuke: Nuke;
    resource: Resource;
    source: Source;
    structure: Structure;
    terrain: Terrain;
    tombstone: Tombstone;
}

type LookAtTypes = Partial<AllLookAtTypes>;

type LookAtResult<K extends LookConstant = LookConstant> = Pick<LookAtTypes, K> & { type: K };

type LookAtResultWithPos<K extends LookConstant = LookConstant> = LookAtResult<K> & {
    x: number;
    y: number;
};

interface LookAtResultMatrix<K extends LookConstant = LookConstant> {
    [y: number]: {
        [x: number]: Array<LookAtResult<K>>;
    };
}

interface LookForAtAreaResultMatrix<T, K extends keyof LookAtTypes = keyof LookAtTypes> {
    [y: number]: {
        [x: number]: Array<LookForAtAreaResult<T, K>>;
    };
}

type LookForAtAreaResult<T, K extends keyof LookAtTypes = keyof LookAtTypes> = { type: K } & { [P in K]: T };

type LookForAtAreaResultWithPos<T, K extends keyof LookAtTypes = keyof LookAtTypes> = LookForAtAreaResult<T, K> & { x: number; y: number };

type LookForAtAreaResultArray<T, K extends keyof LookAtTypes = keyof LookAtTypes> = Array<LookForAtAreaResultWithPos<T, K>>;

interface FindTypes {
    [key: number]: RoomPosition | Creep | Source | Resource | Structure | Flag | ConstructionSite | Mineral | Nuke | Tombstone;
    1: RoomPosition; // FIND_EXIT_TOP
    3: RoomPosition; // FIND_EXIT_RIGHT
    5: RoomPosition; // FIND_EXIT_BOTTOM
    7: RoomPosition; // FIND_EXIT_LEFT
    10: RoomPosition; // FIND_EXIT
    101: Creep; // FIND_CREEPS
    102: Creep; // FIND_MY_CREEPS
    103: Creep; // FIND_HOSTILE_CREEPS
    104: Source; // FIND_SOURCES_ACTIVE
    105: Source; // FIND_SOURCES
    106: Resource; // FIND_DROPPED_RESOURCES
    107: AnyStructure; // FIND_STRUCTURES
    108: AnyOwnedStructure; // FIND_MY_STRUCTURES
    109: AnyOwnedStructure; // FIND_HOSTILE_STRUCTURES
    110: Flag; // FIND_FLAGS
    111: ConstructionSite; // FIND_CONSTRUCTION_SITES
    112: StructureSpawn; // FIND_MY_SPAWNS
    113: StructureSpawn; // FIND_HOSTILE_SPAWNS
    114: ConstructionSite; // FIND_MY_CONSTRUCTION_SITES
    115: ConstructionSite; // FIND_HOSTILE_CONSTRUCTION_SITES
    116: Mineral; // FIND_MINERALS
    117: Nuke; // FIND_NUKES
    118: Tombstone; // FIND_TOMBSTONES
}

interface FindPathOpts {
    /**
     * Treat squares with creeps as walkable. Can be useful with too many moving creeps around or in some other cases. The default
     * value is false.
     */
    ignoreCreeps?: boolean;

    /**
     * Treat squares with destructible structures (constructed walls, ramparts, spawns, extensions) as walkable. Use this flag when
     * you need to move through a territory blocked by hostile structures. If a creep with an ATTACK body part steps on such a square,
     * it automatically attacks the structure. The default value is false.
     */
    ignoreDestructibleStructures?: boolean;

    /**
     * Ignore road structures. Enabling this option can speed up the search. The default value is false. This is only used when the
     * new PathFinder is enabled.
     */
    ignoreRoads?: boolean;

    /**
     * You can use this callback to modify a CostMatrix for any room during the search. The callback accepts two arguments, roomName
     * and costMatrix. Use the costMatrix instance to make changes to the positions costs. If you return a new matrix from this callback,
     * it will be used instead of the built-in cached one. This option is only used when the new PathFinder is enabled.
     *
     * @param roomName The name of the room.
     * @param costMatrix The current CostMatrix
     * @returns The new CostMatrix to use
     */
    costCallback?(roomName: string, costMatrix: CostMatrix): boolean | CostMatrix;

    /**
     * An array of the room's objects or RoomPosition objects which should be treated as walkable tiles during the search. This option
     * cannot be used when the new PathFinder is enabled (use costCallback option instead).
     */
    ignore?: any[] | RoomPosition[];

    /**
     * An array of the room's objects or RoomPosition objects which should be treated as obstacles during the search. This option cannot
     * be used when the new PathFinder is enabled (use costCallback option instead).
     */
    avoid?: any[] | RoomPosition[];

    /**
     * The maximum limit of possible pathfinding operations. You can limit CPU time used for the search based on ratio 1 op ~ 0.001 CPU.
     * The default value is 2000.
     */
    maxOps?: number;

    /**
     * Weight to apply to the heuristic in the A* formula F = G + weight * H. Use this option only if you understand the underlying
     * A* algorithm mechanics! The default value is 1.2.
     */
    heuristicWeight?: number;

    /**
     * If true, the result path will be serialized using Room.serializePath. The default is false.
     */
    serialize?: boolean;

    /**
     * The maximum allowed rooms to search. The default (and maximum) is 16. This is only used when the new PathFinder is enabled.
     */
    maxRooms?: number;

    /**
     * Path to within (range) tiles of target tile. The default is to path to the tile that the target is on (0).
     */
    range?: number;
}

interface MoveToOpts extends FindPathOpts {
    /**
     * This option enables reusing the path found along multiple game ticks. It allows to save CPU time, but can result in a slightly
     * slower creep reaction behavior. The path is stored into the creep's memory to the `_move` property. The `reusePath` value defines
     * the amount of ticks which the path should be reused for. The default value is 5. Increase the amount to save more CPU, decrease
     * to make the movement more consistent. Set to 0 if you want to disable path reusing.
     */
    reusePath?: number;

    /**
     * If `reusePath` is enabled and this option is set to true, the path will be stored in memory in the short serialized form using
     * `Room.serializePath`. The default value is true.
     */
    serializeMemory?: boolean;

    /**
     * If this option is set to true, `moveTo` method will return `ERR_NOT_FOUND` if there is no memorized path to reuse. This can
     * significantly save CPU time in some cases. The default value is false.
     */
    noPathFinding?: boolean;

    /**
     * Draw a line along the creep’s path using `RoomVisual.poly`. You can provide either an empty object or custom style parameters.
     */
    visualizePathStyle?: PolyStyle;
}

interface PathStep {
    x: number;
    dx: number;
    y: number;
    dy: number;
    direction: DirectionConstant;
}

/**
 * An object with survival game info
 */
interface SurvivalGameInfo {
    /**
     * Current score.
     */
    score: number;
    /**
     * Time to the next wave of invaders.
     */
    timeToWave: number;
    /**
     * The number of the next wave.
     */
    wave: number;
}

interface _Constructor<T> {
    readonly prototype: T;
}

interface _ConstructorById<T> extends _Constructor<T> {
    new (id: string): T;
    (id: string): T;
}
/*
 * This file creates literal versions of many of the constants
 * It should be kept in sync with constants.ts
 */

// Extras

type Terrain = "plain" | "swamp" | "wall";

type ExitKey = "1" | "3" | "5" | "7";

// Return Codes

type ScreepsReturnCode =
    | OK
    | ERR_NOT_OWNER
    | ERR_NO_PATH
    | ERR_BUSY
    | ERR_NAME_EXISTS
    | ERR_NOT_FOUND
    | ERR_NOT_ENOUGH_RESOURCES
    | ERR_NOT_ENOUGH_ENERGY
    | ERR_INVALID_TARGET
    | ERR_FULL
    | ERR_NOT_IN_RANGE
    | ERR_INVALID_ARGS
    | ERR_TIRED
    | ERR_NO_BODYPART
    | ERR_NOT_ENOUGH_EXTENSIONS
    | ERR_RCL_NOT_ENOUGH
    | ERR_GCL_NOT_ENOUGH;

type OK = 0;
type ERR_NOT_OWNER = -1;
type ERR_NO_PATH = -2;
type ERR_NAME_EXISTS = -3;
type ERR_BUSY = -4;
type ERR_NOT_FOUND = -5;
type ERR_NOT_ENOUGH_RESOURCES = -6;
type ERR_NOT_ENOUGH_ENERGY = -6;
type ERR_INVALID_TARGET = -7;
type ERR_FULL = -8;
type ERR_NOT_IN_RANGE = -9;
type ERR_INVALID_ARGS = -10;
type ERR_TIRED = -11;
type ERR_NO_BODYPART = -12;
type ERR_NOT_ENOUGH_EXTENSIONS = -6;
type ERR_RCL_NOT_ENOUGH = -14;
type ERR_GCL_NOT_ENOUGH = -15;

type CreepActionReturnCode = OK | ERR_NOT_OWNER | ERR_BUSY | ERR_INVALID_TARGET | ERR_NOT_IN_RANGE | ERR_NO_BODYPART | ERR_TIRED;

type CreepMoveReturnCode = OK | ERR_NOT_OWNER | ERR_BUSY | ERR_TIRED | ERR_NO_BODYPART;

// Find Constants

type ExitConstant = FIND_EXIT_TOP | FIND_EXIT_RIGHT | FIND_EXIT_BOTTOM | FIND_EXIT_LEFT;

type FindConstant =
    | FIND_EXIT_TOP
    | FIND_EXIT_RIGHT
    | FIND_EXIT_BOTTOM
    | FIND_EXIT_LEFT
    | FIND_EXIT
    | FIND_CREEPS
    | FIND_MY_CREEPS
    | FIND_HOSTILE_CREEPS
    | FIND_SOURCES_ACTIVE
    | FIND_SOURCES
    | FIND_DROPPED_RESOURCES
    | FIND_STRUCTURES
    | FIND_MY_STRUCTURES
    | FIND_HOSTILE_STRUCTURES
    | FIND_FLAGS
    | FIND_CONSTRUCTION_SITES
    | FIND_MY_SPAWNS
    | FIND_HOSTILE_SPAWNS
    | FIND_MY_CONSTRUCTION_SITES
    | FIND_HOSTILE_CONSTRUCTION_SITES
    | FIND_MINERALS
    | FIND_NUKES
    | FIND_TOMBSTONES;

type FIND_EXIT_TOP = 1;
type FIND_EXIT_RIGHT = 3;
type FIND_EXIT_BOTTOM = 5;
type FIND_EXIT_LEFT = 7;
type FIND_EXIT = 10;
type FIND_CREEPS = 101;
type FIND_MY_CREEPS = 102;
type FIND_HOSTILE_CREEPS = 103;
type FIND_SOURCES_ACTIVE = 104;
type FIND_SOURCES = 105;
type FIND_DROPPED_ENERGY = -106;
type FIND_DROPPED_RESOURCES = 106;
type FIND_STRUCTURES = 107;
type FIND_MY_STRUCTURES = 108;
type FIND_HOSTILE_STRUCTURES = 109;
type FIND_FLAGS = 110;
type FIND_CONSTRUCTION_SITES = 111;
type FIND_MY_SPAWNS = 112;
type FIND_HOSTILE_SPAWNS = 113;
type FIND_MY_CONSTRUCTION_SITES = 114;
type FIND_HOSTILE_CONSTRUCTION_SITES = 115;
type FIND_MINERALS = 116;
type FIND_NUKES = 117;
type FIND_TOMBSTONES = 118;

// Filter Options

interface FilterOptions<T extends FindConstant> {
    filter: FilterFunction<T> | FilterObject | string;
}
type FilterFunction<T extends FindConstant> = (object: FindTypes[T]) => boolean;
interface FilterObject {
    [key: string]: any;
}

// Body Part Constants

type BodyPartConstant = MOVE | WORK | CARRY | ATTACK | RANGED_ATTACK | TOUGH | HEAL | CLAIM;

type MOVE = "move";
type WORK = "work";
type CARRY = "carry";
type ATTACK = "attack";
type RANGED_ATTACK = "ranged_attack";
type TOUGH = "tough";
type HEAL = "heal";
type CLAIM = "claim";

// Look Constants

type LookConstant =
    | LOOK_CREEPS
    | LOOK_ENERGY
    | LOOK_RESOURCES
    | LOOK_SOURCES
    | LOOK_MINERALS
    | LOOK_STRUCTURES
    | LOOK_FLAGS
    | LOOK_CONSTRUCTION_SITES
    | LOOK_NUKES
    | LOOK_TERRAIN
    | LOOK_TOMBSTONES;

type LOOK_CONSTRUCTION_SITES = "constructionSite";
type LOOK_CREEPS = "creep";
type LOOK_ENERGY = "energy";
type LOOK_FLAGS = "flag";
type LOOK_MINERALS = "mineral";
type LOOK_NUKES = "nuke";
type LOOK_RESOURCES = "resource";
type LOOK_SOURCES = "source";
type LOOK_STRUCTURES = "structure";
type LOOK_TERRAIN = "terrain";
type LOOK_TOMBSTONES = "tombstone";

// Direction Constants

type DirectionConstant = TOP | TOP_RIGHT | RIGHT | BOTTOM_RIGHT | BOTTOM | BOTTOM_LEFT | LEFT | TOP_LEFT;

type TOP = 1;
type TOP_RIGHT = 2;
type RIGHT = 3;
type BOTTOM_RIGHT = 4;
type BOTTOM = 5;
type BOTTOM_LEFT = 6;
type LEFT = 7;
type TOP_LEFT = 8;

// Color Constants

type ColorConstant =
    | COLOR_RED
    | COLOR_PURPLE
    | COLOR_BLUE
    | COLOR_CYAN
    | COLOR_GREEN
    | COLOR_YELLOW
    | COLOR_ORANGE
    | COLOR_BROWN
    | COLOR_GREY
    | COLOR_WHITE;

type COLOR_RED = 1;
type COLOR_PURPLE = 2;
type COLOR_BLUE = 3;
type COLOR_CYAN = 4;
type COLOR_GREEN = 5;
type COLOR_YELLOW = 6;
type COLOR_ORANGE = 7;
type COLOR_BROWN = 8;
type COLOR_GREY = 9;
type COLOR_WHITE = 10;

// Structure Constants

type BuildableStructureConstant =
    | STRUCTURE_EXTENSION
    | STRUCTURE_RAMPART
    | STRUCTURE_ROAD
    | STRUCTURE_SPAWN
    | STRUCTURE_LINK
    | STRUCTURE_WALL
    | STRUCTURE_STORAGE
    | STRUCTURE_TOWER
    | STRUCTURE_OBSERVER
    | STRUCTURE_POWER_SPAWN
    | STRUCTURE_EXTRACTOR
    | STRUCTURE_LAB
    | STRUCTURE_TERMINAL
    | STRUCTURE_CONTAINER
    | STRUCTURE_NUKER;

type StructureConstant =
    | BuildableStructureConstant
    | STRUCTURE_KEEPER_LAIR
    | STRUCTURE_CONTROLLER
    | STRUCTURE_POWER_BANK
    | STRUCTURE_PORTAL;

type STRUCTURE_EXTENSION = "extension";
type STRUCTURE_RAMPART = "rampart";
type STRUCTURE_ROAD = "road";
type STRUCTURE_SPAWN = "spawn";
type STRUCTURE_LINK = "link";
type STRUCTURE_WALL = "constructedWall";
type STRUCTURE_KEEPER_LAIR = "keeperLair";
type STRUCTURE_CONTROLLER = "controller";
type STRUCTURE_STORAGE = "storage";
type STRUCTURE_TOWER = "tower";
type STRUCTURE_OBSERVER = "observer";
type STRUCTURE_POWER_BANK = "powerBank";
type STRUCTURE_POWER_SPAWN = "powerSpawn";
type STRUCTURE_EXTRACTOR = "extractor";
type STRUCTURE_LAB = "lab";
type STRUCTURE_TERMINAL = "terminal";
type STRUCTURE_CONTAINER = "container";
type STRUCTURE_NUKER = "nuker";
type STRUCTURE_PORTAL = "portal";

// Resource Constants

type ResourceConstant =
    | RESOURCE_ENERGY
    | RESOURCE_POWER
    | RESOURCE_UTRIUM
    | RESOURCE_LEMERGIUM
    | RESOURCE_KEANIUM
    | RESOURCE_GHODIUM
    | RESOURCE_ZYNTHIUM
    | RESOURCE_OXYGEN
    | RESOURCE_HYDROGEN
    | RESOURCE_CATALYST
    | RESOURCE_HYDROXIDE
    | RESOURCE_ZYNTHIUM_KEANITE
    | RESOURCE_UTRIUM_LEMERGITE
    | RESOURCE_UTRIUM_HYDRIDE
    | RESOURCE_UTRIUM_OXIDE
    | RESOURCE_KEANIUM_HYDRIDE
    | RESOURCE_KEANIUM_OXIDE
    | RESOURCE_LEMERGIUM_HYDRIDE
    | RESOURCE_LEMERGIUM_OXIDE
    | RESOURCE_ZYNTHIUM_HYDRIDE
    | RESOURCE_ZYNTHIUM_OXIDE
    | RESOURCE_GHODIUM_HYDRIDE
    | RESOURCE_GHODIUM_OXIDE
    | RESOURCE_UTRIUM_ACID
    | RESOURCE_UTRIUM_ALKALIDE
    | RESOURCE_KEANIUM_ACID
    | RESOURCE_KEANIUM_ALKALIDE
    | RESOURCE_LEMERGIUM_ACID
    | RESOURCE_LEMERGIUM_ALKALIDE
    | RESOURCE_ZYNTHIUM_ACID
    | RESOURCE_ZYNTHIUM_ALKALIDE
    | RESOURCE_GHODIUM_ACID
    | RESOURCE_GHODIUM_ALKALIDE
    | RESOURCE_CATALYZED_UTRIUM_ACID
    | RESOURCE_CATALYZED_UTRIUM_ALKALIDE
    | RESOURCE_CATALYZED_KEANIUM_ACID
    | RESOURCE_CATALYZED_KEANIUM_ALKALIDE
    | RESOURCE_CATALYZED_LEMERGIUM_ACID
    | RESOURCE_CATALYZED_LEMERGIUM_ALKALIDE
    | RESOURCE_CATALYZED_ZYNTHIUM_ACID
    | RESOURCE_CATALYZED_ZYNTHIUM_ALKALIDE
    | RESOURCE_CATALYZED_GHODIUM_ACID
    | RESOURCE_CATALYZED_GHODIUM_ALKALIDE;

type _ResourceConstantSansEnergy =
    | RESOURCE_POWER
    | RESOURCE_UTRIUM
    | RESOURCE_LEMERGIUM
    | RESOURCE_KEANIUM
    | RESOURCE_GHODIUM
    | RESOURCE_ZYNTHIUM
    | RESOURCE_OXYGEN
    | RESOURCE_HYDROGEN
    | RESOURCE_CATALYST
    | RESOURCE_HYDROXIDE
    | RESOURCE_ZYNTHIUM_KEANITE
    | RESOURCE_UTRIUM_LEMERGITE
    | RESOURCE_UTRIUM_HYDRIDE
    | RESOURCE_UTRIUM_OXIDE
    | RESOURCE_KEANIUM_HYDRIDE
    | RESOURCE_KEANIUM_OXIDE
    | RESOURCE_LEMERGIUM_HYDRIDE
    | RESOURCE_LEMERGIUM_OXIDE
    | RESOURCE_ZYNTHIUM_HYDRIDE
    | RESOURCE_ZYNTHIUM_OXIDE
    | RESOURCE_GHODIUM_HYDRIDE
    | RESOURCE_GHODIUM_OXIDE
    | RESOURCE_UTRIUM_ACID
    | RESOURCE_UTRIUM_ALKALIDE
    | RESOURCE_KEANIUM_ACID
    | RESOURCE_KEANIUM_ALKALIDE
    | RESOURCE_LEMERGIUM_ACID
    | RESOURCE_LEMERGIUM_ALKALIDE
    | RESOURCE_ZYNTHIUM_ACID
    | RESOURCE_ZYNTHIUM_ALKALIDE
    | RESOURCE_GHODIUM_ACID
    | RESOURCE_GHODIUM_ALKALIDE
    | RESOURCE_CATALYZED_UTRIUM_ACID
    | RESOURCE_CATALYZED_UTRIUM_ALKALIDE
    | RESOURCE_CATALYZED_KEANIUM_ACID
    | RESOURCE_CATALYZED_KEANIUM_ALKALIDE
    | RESOURCE_CATALYZED_LEMERGIUM_ACID
    | RESOURCE_CATALYZED_LEMERGIUM_ALKALIDE
    | RESOURCE_CATALYZED_ZYNTHIUM_ACID
    | RESOURCE_CATALYZED_ZYNTHIUM_ALKALIDE
    | RESOURCE_CATALYZED_GHODIUM_ACID
    | RESOURCE_CATALYZED_GHODIUM_ALKALIDE;

type MineralConstant =
    | RESOURCE_UTRIUM
    | RESOURCE_LEMERGIUM
    | RESOURCE_KEANIUM
    | RESOURCE_GHODIUM
    | RESOURCE_ZYNTHIUM
    | RESOURCE_OXYGEN
    | RESOURCE_HYDROGEN
    | RESOURCE_CATALYST;

type MarketResourceConstant = ResourceConstant | SUBSCRIPTION_TOKEN;

type RESOURCE_ENERGY = "energy";
type RESOURCE_POWER = "power";

type RESOURCE_UTRIUM = "U";
type RESOURCE_LEMERGIUM = "L";
type RESOURCE_KEANIUM = "K";
type RESOURCE_GHODIUM = "G";
type RESOURCE_ZYNTHIUM = "Z";
type RESOURCE_OXYGEN = "O";
type RESOURCE_HYDROGEN = "H";
type RESOURCE_CATALYST = "X";

type RESOURCE_HYDROXIDE = "OH";
type RESOURCE_ZYNTHIUM_KEANITE = "ZK";
type RESOURCE_UTRIUM_LEMERGITE = "UL";
type RESOURCE_UTRIUM_HYDRIDE = "UH";
type RESOURCE_UTRIUM_OXIDE = "UO";
type RESOURCE_KEANIUM_HYDRIDE = "KH";
type RESOURCE_KEANIUM_OXIDE = "KO";
type RESOURCE_LEMERGIUM_HYDRIDE = "LH";
type RESOURCE_LEMERGIUM_OXIDE = "LO";
type RESOURCE_ZYNTHIUM_HYDRIDE = "ZH";
type RESOURCE_ZYNTHIUM_OXIDE = "ZO";
type RESOURCE_GHODIUM_HYDRIDE = "GH";
type RESOURCE_GHODIUM_OXIDE = "GO";

type RESOURCE_UTRIUM_ACID = "UH2O";
type RESOURCE_UTRIUM_ALKALIDE = "UHO2";
type RESOURCE_KEANIUM_ACID = "KH2O";
type RESOURCE_KEANIUM_ALKALIDE = "KHO2";
type RESOURCE_LEMERGIUM_ACID = "LH2O";
type RESOURCE_LEMERGIUM_ALKALIDE = "LHO2";
type RESOURCE_ZYNTHIUM_ACID = "ZH2O";
type RESOURCE_ZYNTHIUM_ALKALIDE = "ZHO2";
type RESOURCE_GHODIUM_ACID = "GH2O";
type RESOURCE_GHODIUM_ALKALIDE = "GHO2";

type RESOURCE_CATALYZED_UTRIUM_ACID = "XUH2O";
type RESOURCE_CATALYZED_UTRIUM_ALKALIDE = "XUHO2";
type RESOURCE_CATALYZED_KEANIUM_ACID = "XKH2O";
type RESOURCE_CATALYZED_KEANIUM_ALKALIDE = "XKHO2";
type RESOURCE_CATALYZED_LEMERGIUM_ACID = "XLH2O";
type RESOURCE_CATALYZED_LEMERGIUM_ALKALIDE = "XLHO2";
type RESOURCE_CATALYZED_ZYNTHIUM_ACID = "XZH2O";
type RESOURCE_CATALYZED_ZYNTHIUM_ALKALIDE = "XZHO2";
type RESOURCE_CATALYZED_GHODIUM_ACID = "XGH2O";
type RESOURCE_CATALYZED_GHODIUM_ALKALIDE = "XGHO2";

type SUBSCRIPTION_TOKEN = "token";

type TOMBSTONE_DECAY_PER_PART = 5;

type EventConstant =
    | EVENT_ATTACK
    | EVENT_OBJECT_DESTROYED
    | EVENT_ATTACK_CONTROLLER
    | EVENT_BUILD
    | EVENT_HARVEST
    | EVENT_HEAL
    | EVENT_REPAIR
    | EVENT_RESERVE_CONTROLLER
    | EVENT_UPGRADE_CONTROLLER
    | EVENT_EXIT;

type EVENT_ATTACK = 1;
type EVENT_OBJECT_DESTROYED = 2;
type EVENT_ATTACK_CONTROLLER = 3;
type EVENT_BUILD = 4;
type EVENT_HARVEST = 5;
type EVENT_HEAL = 6;
type EVENT_REPAIR = 7;
type EVENT_RESERVE_CONTROLLER = 8;
type EVENT_UPGRADE_CONTROLLER = 9;
type EVENT_EXIT = 10;

type EventAttackType =
    | EVENT_ATTACK_TYPE_MELEE
    | EVENT_ATTACK_TYPE_RANGED
    | EVENT_ATTACK_TYPE_RANGED_MASS
    | EVENT_ATTACK_TYPE_DISMANTLE
    | EVENT_ATTACK_TYPE_HIT_BACK
    | EVENT_ATTACK_TYPE_NUKE;

type EVENT_ATTACK_TYPE_MELEE = 1;
type EVENT_ATTACK_TYPE_RANGED = 2;
type EVENT_ATTACK_TYPE_RANGED_MASS = 3;
type EVENT_ATTACK_TYPE_DISMANTLE = 4;
type EVENT_ATTACK_TYPE_HIT_BACK = 5;
type EVENT_ATTACK_TYPE_NUKE = 6;

type EventHealType = EVENT_HEAL_TYPE_MELEE | EVENT_HEAL_TYPE_RANGED;

type EVENT_HEAL_TYPE_MELEE = 1;
type EVENT_HEAL_TYPE_RANGED = 2;

type EventDestroyType = "creep" | StructureConstant;

type EventItem =
    | {
          type: EVENT_ATTACK;
          objectId: string;
          data: {
              targetId: string;
              damage: number;
              attackType: EventAttackType;
          };
      }
    | {
          type: EVENT_OBJECT_DESTROYED;
          objectId: string;
          data: {
              type: EventDestroyType;
          };
      }
    | {
          type: EVENT_ATTACK_CONTROLLER;
          objectId: string;
      }
    | {
          type: EVENT_BUILD;
          objectId: string;
          data: {
              targetId: string;
              amount: number;
              energySpent: number;
          };
      }
    | {
          type: EVENT_HARVEST;
          objectId: string;
          data: {
              targetId: string;
              amount: number;
          };
      }
    | {
          type: EVENT_HEAL;
          objectId: string;
          data: {
              targetId: string;
              amount: number;
              healType: EventHealType;
          };
      }
    | {
          type: EVENT_REPAIR;
          objectId: string;
          data: {
              targetId: string;
              amount: number;
              energySpent: number;
          };
      }
    | {
          type: EVENT_RESERVE_CONTROLLER;
          objectId: string;
          data: {
              amount: number;
          };
      }
    | {
          type: EVENT_UPGRADE_CONTROLLER;
          objectId: string;
          data:
              | {
                    amount: number;
                    energySpent: number;
                }
              | {
                    type: EVENT_EXIT;
                    objectId: string;
                    data: {
                        room: string;
                        x: number;
                        y: number;
                    };
                };
      };
/**
 * The options that can be accepted by `findRoute()` and friends.
 */
interface RouteOptions {
    routeCallback: (roomName: string, fromRoomName: string) => any;
}

/**
 * A global object representing world map. Use it to navigate between rooms. The object is accessible via Game.map property.
 */
interface GameMap {
    /**
     * List all exits available from the room with the given name.
     * @param roomName The room name.
     * @returns The exits information or null if the room not found.
     */
    describeExits(roomName: string): ExitsInformation;
    /**
     * Find the exit direction from the given room en route to another room.
     * @param fromRoom Start room name or room object.
     * @param toRoom Finish room name or room object.
     * @param opts (optional) An object with the pathfinding options.
     * @returns The room direction constant, one of the following:
     * FIND_EXIT_TOP, FIND_EXIT_RIGHT, FIND_EXIT_BOTTOM, FIND_EXIT_LEFT
     * Or one of the following Result codes:
     * ERR_NO_PATH, ERR_INVALID_ARGS
     */
    findExit(fromRoom: string | Room, toRoom: string | Room, opts?: RouteOptions): ExitConstant | ERR_NO_PATH | ERR_INVALID_ARGS;
    /**
     * Find route from the given room to another room.
     * @param fromRoom Start room name or room object.
     * @param toRoom Finish room name or room object.
     * @param opts (optional) An object with the pathfinding options.
     * @returns the route array or ERR_NO_PATH code
     */
    findRoute(
        fromRoom: string | Room,
        toRoom: string | Room,
        opts?: RouteOptions,
    ):
        | Array<{
              exit: ExitConstant;
              room: string;
          }>
        | ERR_NO_PATH;
    /**
     * Get the linear distance (in rooms) between two rooms. You can use this function to estimate the energy cost of
     * sending resources through terminals, or using observers and nukes.
     * @param roomName1 The name of the first room.
     * @param roomName2 The name of the second room.
     * @param continuous Whether to treat the world map continuous on borders. Set to true if you
     *                   want to calculate the trade or terminal send cost. Default is false.
     */
    getRoomLinearDistance(roomName1: string, roomName2: string, continuous?: boolean): number;
    /**
     * Get terrain type at the specified room position. This method works for any room in the world even if you have no access to it.
     * @param x X position in the room.
     * @param y Y position in the room.
     * @param roomName The room name.
     */
    getTerrainAt(x: number, y: number, roomName: string): Terrain;
    /**
     * Get terrain type at the specified room position. This method works for any room in the world even if you have no access to it.
     * @param pos The position object.
     */
    getTerrainAt(pos: RoomPosition): Terrain;
    /**
     * Get room terrain for the specified room. This method works for any room in the world even if you have no access to it.
     * @param roomName String name of the room.
     */
    getRoomTerrain(roomName: string): RoomTerrain;
    /**
     * Returns the world size as a number of rooms between world corners. For example, for a world with rooms from W50N50 to E50S50 this method will return 102.
     */
    getWorldSize(): number;

    /**
     * Check if the room is available to move into.
     * @param roomName The room name.
     * @returns A boolean value.
     */
    isRoomAvailable(roomName: string): boolean;
}

// No static is available
/**
 * A global object representing the in-game market. You can use this object to track resource transactions to/from your
 * terminals, and your buy/sell orders. The object is accessible via the singleton Game.market property.
 */
interface Market {
    /**
     * Your current credits balance.
     */
    credits: number;
    /**
     * An array of the last 100 incoming transactions to your terminals
     */
    incomingTransactions: Transaction[];
    /**
     * An object with your active and inactive buy/sell orders on the market.
     */
    orders: { [key: string]: Order };
    /**
     * An array of the last 100 outgoing transactions from your terminals
     */
    outgoingTransactions: Transaction[];
    /**
     * Estimate the energy transaction cost of StructureTerminal.send and Market.deal methods. The formula:
     *
     * ```
     * Math.ceil( amount * (Math.log(0.1*linearDistanceBetweenRooms + 0.9) + 0.1) )
     * ```
     *
     * @param amount Amount of resources to be sent.
     * @param roomName1 The name of the first room.
     * @param roomName2 The name of the second room.
     * @returns The amount of energy required to perform the transaction.
     */
    calcTransactionCost(amount: number, roomName1: string, roomName2: string): number;
    /**
     * Cancel a previously created order. The 5% fee is not returned.
     * @param orderId The order ID as provided in Game.market.orders
     * @returns Result Code: OK, ERR_INVALID_ARGS
     */
    cancelOrder(orderId: string): ScreepsReturnCode;
    /**
     * Change the price of an existing order. If `newPrice` is greater than old price, you will be charged `(newPrice-oldPrice)*remainingAmount*0.05` credits.
     * @param orderId The order ID as provided in Game.market.orders
     * @param newPrice The new order price.
     * @returns Result Code: OK, ERR_NOT_OWNER, ERR_NOT_ENOUGH_RESOURCES, ERR_INVALID_ARGS
     */
    changeOrderPrice(orderId: string, newPrice: number): ScreepsReturnCode;
    /**
     * Create a market order in your terminal. You will be charged `price*amount*0.05` credits when the order is placed.
     *
     * The maximum orders count is 50 per player. You can create an order at any time with any amount,
     * it will be automatically activated and deactivated depending on the resource/credits availability.
     */
    createOrder(
        type: string,
        resourceType: MarketResourceConstant,
        price: number,
        totalAmount: number,
        roomName?: string,
    ): ScreepsReturnCode;
    /**
     * Execute a trade deal from your Terminal to another player's Terminal using the specified buy/sell order.
     *
     * Your Terminal will be charged energy units of transfer cost regardless of the order resource type.
     * You can use Game.market.calcTransactionCost method to estimate it.
     *
     * When multiple players try to execute the same deal, the one with the shortest distance takes precedence.
     */
    deal(orderId: string, amount: number, targetRoomName?: string): ScreepsReturnCode;
    /**
     * Add more capacity to an existing order. It will affect `remainingAmount` and `totalAmount` properties. You will be charged `price*addAmount*0.05` credits.
     * @param orderId The order ID as provided in Game.market.orders
     * @param addAmount How much capacity to add. Cannot be a negative value.
     * @returns One of the following codes: `OK`, `ERR_NOT_ENOUGH_RESOURCES`, `ERR_INVALID_ARGS`
     */
    extendOrder(orderId: string, addAmount: number): ScreepsReturnCode;
    /**
     * Get other players' orders currently active on the market.
     * @param filter (optional) An object or function that will filter the resulting list using the lodash.filter method.
     * @returns An array of objects containing order information.
     */
    getAllOrders(filter?: OrderFilter | ((o: Order) => boolean)): Order[];
    /**
     * Retrieve info for specific market order.
     * @param orderId The order ID.
     * @returns An object with the order info. See `getAllOrders` for properties explanation.
     */
    getOrderById(id: string): Order | null;
}

// No static is available

interface Transaction {
    transactionId: string;
    time: number;
    sender?: { username: string };
    recipient?: { username: string };
    resourceType: MarketResourceConstant;
    amount: number;
    from: string;
    to: string;
    description: string;
    order?: TransactionOrder;
}

interface Order {
    id: string;
    created: number;
    active?: boolean;
    type: string;
    resourceType: MarketResourceConstant;
    roomName?: string;
    amount: number;
    remainingAmount: number;
    totalAmount?: number;
    price: number;
}

interface TransactionOrder {
    id: string;
    type: string;
    price: number;
}

interface OrderFilter {
    id?: string;
    created?: number;
    type?: string;
    resourceType?: MarketResourceConstant;
    roomName?: string;
    amount?: number;
    remainingAmount?: number;
    price?: number;
}
interface Memory {
    [name: string]: any;
    creeps: { [name: string]: CreepMemory };
    flags: { [name: string]: FlagMemory };
    rooms: { [name: string]: RoomMemory };
    spawns: { [name: string]: SpawnMemory };
}

interface CreepMemory {}
interface FlagMemory {}
interface RoomMemory {}
interface SpawnMemory {}

declare const Memory: Memory;
/**
 * A mineral deposit object. Can be harvested by creeps with a WORK body part using the extractor structure.
 * @see http://docs.screeps.com/api/#Mineral
 */
interface Mineral<T extends MineralConstant = MineralConstant> extends RoomObject {
    /**
     * The prototype is stored in the Mineral.prototype global object. You can use it to extend game objects behaviour globally.
     */
    readonly prototype: Mineral;
    /**
     * The density of this mineral deposit, one of the `DENSITY_*` constants.
     */
    density: number;
    /**
     * The remaining amount of resources.
     */
    mineralAmount: number;
    /**
     * The resource type, one of the `RESOURCE_*` constants.
     */
    mineralType: T;
    /**
     * A unique object identifier. You can use `Game.getObjectById` method to retrieve an object instance by its `id`.
     */
    id: string;
    /**
     * The remaining time after which the deposit will be refilled.
     */
    ticksToRegeneration: number;
}

interface MineralConstructor extends _Constructor<Mineral>, _ConstructorById<Mineral> {}

declare const Mineral: MineralConstructor;
/**
 * A nuke landing position. This object cannot be removed or modified. You can find incoming nukes in the room using the FIND_NUKES constant.
 */
interface Nuke extends RoomObject {
    readonly prototype: Nuke;

    /**
     * A unique object identifier. You can use Game.getObjectById method to retrieve an object instance by its id.
     */
    id: string;
    /**
     * The name of the room where this nuke has been launched from.
     */
    launchRoomName: string;
    /**
     * The remaining landing time.
     */
    timeToLand: number;
}

interface NukeConstructor extends _Constructor<Nuke>, _ConstructorById<Nuke> {
    new (id: string): Nuke;
}

declare const Nuke: NukeConstructor;
/**
 * Contains powerful methods for pathfinding in the game world. Support exists for custom navigation costs and paths which span multiple rooms.
 * Additionally PathFinder can search for paths through rooms you can't see, although you won't be able to detect any dynamic obstacles like creeps or buildings.
 */
interface PathFinder {
    /**
     * Container for custom navigation cost data.
     */
    CostMatrix: CostMatrix;

    /**
     * Find an optimal path between origin and goal.
     *
     * @param origin The start position.
     * @param goal goal A RoomPosition, an object containing a RoomPosition and range or an array of either.
     * @param opts An object containing additional pathfinding flags.
     */
    search(
        origin: RoomPosition,
        goal: RoomPosition | { pos: RoomPosition; range: number } | Array<RoomPosition | { pos: RoomPosition; range: number }>,
        opts?: PathFinderOpts,
    ): PathFinderPath;
    /**
     * Specify whether to use this new experimental pathfinder in game objects methods.
     * This method should be invoked every tick. It affects the following methods behavior:
     * * `Room.findPath`
     * * `RoomPosition.findPathTo`
     * * `RoomPosition.findClosestByPath`
     * * `Creep.moveTo`
     *
     * @deprecated This method is deprecated and will be removed soon.
     * @param isEnabled Whether to activate the new pathfinder or deactivate.
     */
    use(isEnabled: boolean): undefined;
}

/**
 * An object containing:
 * path - An array of RoomPosition objects.
 * ops - Total number of operations performed before this path was calculated.
 * cost - The total cost of the path as derived from `plainCost`, `swampCost` and any given CostMatrix instances.
 * incomplete - If the pathfinder fails to find a complete path, this will be true.
 *   Note that `path` will still be populated with a partial path which represents the closest path it could find given the search parameters.
 */
interface PathFinderPath {
    /**
     * An array of RoomPosition objects.
     */
    path: RoomPosition[];
    /**
     * Total number of operations performed before this path was calculated.
     */
    ops: number;
    /**
     * The total cost of the path as derived from `plainCost`, `swampCost` and any given CostMatrix instances.
     */
    cost: number;
    /**
     * If the pathfinder fails to find a complete path, this will be true.
     *
     * Note that `path` will still be populated with a partial path which represents the closest path it could find given the search parameters.
     */
    incomplete: boolean;
}

/**
 * An object containing additional pathfinding flags.
 */
interface PathFinderOpts {
    /**
     * Cost for walking on plain positions. The default is 1.
     */
    plainCost?: number;
    /**
     * Cost for walking on swamp positions. The default is 5.
     */
    swampCost?: number;
    /**
     * Instead of searching for a path to the goals this will search for a path away from the goals.
     * The cheapest path that is out of range of every goal will be returned. The default is false.
     */
    flee?: boolean;
    /**
     * The maximum allowed pathfinding operations. You can limit CPU time used for the search based on ratio 1 op ~ 0.001 CPU. The default value is 2000.
     */
    maxOps?: number;
    /**
     * The maximum allowed rooms to search. The default (and maximum) is 16.
     */
    maxRooms?: number;
    /**
     * The maximum allowed cost of the path returned. If at any point the pathfinder detects that it is impossible to find
     * a path with a cost less than or equal to maxCost it will immediately halt the search. The default is Infinity.
     */
    maxCost?: number;
    /**
     * Weight to apply to the heuristic in the A* formula F = G + weight * H. Use this option only if you understand
     * the underlying A* algorithm mechanics! The default value is 1.
     */
    heuristicWeight?: number;

    /**
     * Request from the pathfinder to generate a CostMatrix for a certain room. The callback accepts one argument, roomName.
     * This callback will only be called once per room per search. If you are running multiple pathfinding operations in a
     * single room and in a single tick you may consider caching your CostMatrix to speed up your code. Please read the
     * CostMatrix documentation below for more information on CostMatrix.
     *
     * @param roomName
     */
    roomCallback?(roomName: string): boolean | CostMatrix;
}

/**
 * Container for custom navigation cost data.
 */
interface CostMatrix {
    /**
     * Creates a new CostMatrix containing 0's for all positions.
     * @constructor
     */
    new (): CostMatrix;
    /**
     * Set the cost of a position in this CostMatrix.
     * @param x X position in the room.
     * @param y Y position in the room.
     * @param cost Cost of this position. Must be a whole number. A cost of 0 will use the terrain cost for that tile. A cost greater than or equal to 255 will be treated as unwalkable.
     */
    set(x: number, y: number, cost: number): undefined;
    /**
     * Get the cost of a position in this CostMatrix.
     * @param x X position in the room.
     * @param y Y position in the room.
     */
    get(x: number, y: number): number;
    /**
     * Copy this CostMatrix into a new CostMatrix with the same data.
     */
    clone(): CostMatrix;
    /**
     * Returns a compact representation of this CostMatrix which can be stored via JSON.stringify.
     */
    serialize(): number[];
    /**
     * Static method which deserializes a new CostMatrix using the return value of serialize.
     * @param val Whatever serialize returned
     */
    deserialize(val: number[]): CostMatrix;
}

declare const PathFinder: PathFinder;
/**
 * RawMemory object allows to implement your own memory stringifier instead of built-in serializer based on JSON.stringify.
 */
interface RawMemory {
    /**
     * An object with asynchronous memory segments available on this tick. Each object key is the segment ID with data in string values.
     * Use RawMemory.setActiveSegments to fetch segments on the next tick. Segments data is saved automatically in the end of the tick.
     */
    segments: { [segmentId: number]: string };

    /**
     * An object with a memory segment of another player available on this tick. Use `setActiveForeignSegment` to fetch segments on the next tick.
     */
    foreignSegment: {
        username: string;
        id: number;
        data: string;
    };

    /**
     * A string with a shared memory segment available on every world shard. Maximum string length is 100 KB.
     *
     * **Warning:** this segment is not safe for concurrent usage! All shards have shared access to the same instance of
     * data. When the segment contents is changed by two shards simultaneously, you may lose some data, since the segment
     * string value is written all at once atomically. You must implement your own system to determine when each shard is
     * allowed to rewrite the inter-shard memory, e.g. based on mutual exclusions.
     */
    interShardSegment: string;

    /**
     * Get a raw string representation of the Memory object.
     */
    get(): string;
    /**
     * Set new memory value.
     * @param value New memory value as a string.
     */
    set(value: string): undefined;
    /**
     * Request memory segments using the list of their IDs. Memory segments will become available on the next tick in RawMemory.segments object.
     * @param ids An array of segment IDs. Each ID should be a number from 0 to 99. Maximum 10 segments can be active at the same time. Subsequent calls of setActiveSegments override previous ones.
     */
    setActiveSegments(ids: number[]): undefined;
    /**
     * Request a memory segment of another user.
     *
     * The segment should be marked by its owner as public using `setPublicSegments`.
     *
     * The segment data will become available on the next tick in `foreignSegment` object.
     *
     * You can only have access to one foreign segment at the same time.
     *
     * @param username The name of another user. Pass `null` to clear the foreign segment.
     * @param id The ID of the requested segment from 0 to 99. If undefined, the user's default public segment is requested as set by `setDefaultPublicSegment`.
     */
    setActiveForeignSegment(username: string | null, id?: number): undefined;
    /**
     * Set the specified segment as your default public segment. It will be returned if no id parameter is passed to `setActiveForeignSegment` by another user.
     *
     * @param id The ID of the requested segment from 0 to 99. Pass `null` to clear the foreign segment.
     */
    setDefaultPublicSegment(id: number | null): undefined;
    /**
     * Set specified segments as public. Other users will be able to request access to them using `setActiveForeignSegment`.
     *
     * @param ids An array of segment IDs. Each ID should be a number from 0 to 99. Subsequent calls of `setPublicSegments` override previous ones.
     */
    setPublicSegments(ids: number[]): undefined;
}

declare const RawMemory: RawMemory;
/**
 * A dropped piece of resource. It will decay after a while if not picked up. Dropped resource pile decays for ceil(amount/1000) units per tick.
 */

interface Resource<T extends ResourceConstant = ResourceConstant> extends RoomObject {
    readonly prototype: Resource;

    /**
     * The amount of resource units containing.
     */
    amount: number;
    /**
     * A unique object identifier. You can use `Game.getObjectById` method to retrieve an object instance by its `id`.
     */
    id: string;
    /**
     * One of the `RESOURCE_*` constants.
     */
    resourceType: T;
}

interface ResourceConstructor extends _Constructor<Resource>, _ConstructorById<Resource> {
    new (id: string): Resource;
}

declare const Resource: ResourceConstructor;
/**
 * Any object with a position in a room. Almost all game objects prototypes
 * are derived from RoomObject.
 */

interface RoomObject {
    readonly prototype: RoomObject;
    /**
     * An object representing the position of this object in the room.
     */
    pos: RoomPosition;
    /**
     * The link to the Room object. May be undefined in case if an object is a
     * flag or a construction site and is placed in a room that is not visible
     * to you.
     */
    room: Room | undefined;
}

interface RoomObjectConstructor extends _Constructor<RoomObject> {
    new (x: number, y: number, roomName: string): RoomObject;
    (x: number, y: number, roomName: string): RoomObject;
}

declare const RoomObject: RoomObjectConstructor;
/**
 * An object representing the specified position in the room.
 *
 * Every object in the room contains RoomPosition as the pos property.
 *
 * The position object of a custom location can be obtained using the Room.getPositionAt() method or using the constructor.
 */
interface RoomPosition {
    readonly prototype: RoomPosition;

    /**
     * The name of the room.
     */
    roomName: string;
    /**
     * X position in the room.
     */
    x: number;
    /**
     * Y position in the room.
     */
    y: number;
    /**
     * Create new ConstructionSite at the specified location.
     * @param structureType One of the following constants:
     *  * STRUCTURE_EXTENSION
     *  * STRUCTURE_RAMPART
     *  * STRUCTURE_ROAD
     *  * STRUCTURE_SPAWN
     *  * STRUCTURE_WALL
     *  * STRUCTURE_LINK
     */
    createConstructionSite(structureType: BuildableStructureConstant): ScreepsReturnCode;
    /**
     * Create new ConstructionSite at the specified location.
     * @param structureType One of the following constants:
     *  * STRUCTURE_EXTENSION
     *  * STRUCTURE_RAMPART
     *  * STRUCTURE_ROAD
     *  * STRUCTURE_SPAWN
     *  * STRUCTURE_WALL
     *  * STRUCTURE_LINK
     * @param name The name of the structure, for structures that support it (currently only spawns).
     */
    createConstructionSite(structureType: STRUCTURE_SPAWN, name?: string): ScreepsReturnCode;
    /**
     * Create new Flag at the specified location.
     * @param name The name of a new flag.
     * It should be unique, i.e. the Game.flags object should not contain another flag with the same name (hash key).
     * If not defined, a random name will be generated.
     * @param color The color of a new flag. Should be one of the COLOR_* constants
     * @param secondaryColor The secondary color of a new flag. Should be one of the COLOR_* constants. The default value is equal to color.
     */
    createFlag(name?: string, color?: ColorConstant, secondaryColor?: ColorConstant): ScreepsReturnCode;
    /**
     * Find the object with the shortest path from the given position. Uses A* search algorithm and Dijkstra's algorithm.
     * @param type Any of the FIND_* constants.
     * @param opts An object containing pathfinding options (see Room.findPath), or one of the following: filter, algorithm
     * @returns An instance of a RoomObject.
     */
    findClosestByPath<K extends FindConstant>(
        type: K,
        opts?: FindPathOpts & FilterOptions<K> & { algorithm?: string },
    ): FindTypes[K] | null;
    findClosestByPath<T extends Structure>(
        type: FIND_STRUCTURES | FIND_MY_STRUCTURES | FIND_HOSTILE_STRUCTURES,
        opts?: FindPathOpts & FilterOptions<FIND_STRUCTURES> & { algorithm?: string },
    ): T | null;
    /**
     * Find the object with the shortest path from the given position. Uses A* search algorithm and Dijkstra's algorithm.
     * @param objects An array of RoomPositions or objects with a RoomPosition
     * @param opts An object containing pathfinding options (see Room.findPath), or one of the following: filter, algorithm
     * @returns One of the supplied objects
     */
    findClosestByPath<T extends _HasRoomPosition | RoomPosition>(
        objects: T[],
        opts?: FindPathOpts & { filter?: any | string; algorithm?: string },
    ): T | null;
    /**
     * Find the object with the shortest linear distance from the given position.
     * @param type Any of the FIND_* constants.
     * @param opts An object containing pathfinding options (see Room.findPath), or one of the following: filter, algorithm
     */
    findClosestByRange<K extends FindConstant>(type: K, opts?: FilterOptions<K>): FindTypes[K] | null;
    findClosestByRange<T extends Structure>(
        type: FIND_STRUCTURES | FIND_MY_STRUCTURES | FIND_HOSTILE_STRUCTURES,
        opts?: FilterOptions<FIND_STRUCTURES>,
    ): T | null;
    /**
     * Find the object with the shortest linear distance from the given position.
     * @param objects An array of RoomPositions or objects with a RoomPosition.
     * @param opts An object containing pathfinding options (see Room.findPath), or one of the following: filter, algorithm
     */
    findClosestByRange<T extends _HasRoomPosition | RoomPosition>(objects: T[], opts?: { filter: any | string }): T | null;
    /**
     * Find all objects in the specified linear range.
     * @param type Any of the FIND_* constants.
     * @param range The range distance.
     * @param opts See Room.find.
     */
    findInRange<K extends FindConstant>(type: K, range: number, opts?: FilterOptions<K>): Array<FindTypes[K]>;
    findInRange<T extends Structure>(
        type: FIND_STRUCTURES | FIND_MY_STRUCTURES | FIND_HOSTILE_STRUCTURES,
        range: number,
        opts?: FilterOptions<FIND_STRUCTURES>,
    ): T[];
    /**
     * Find all objects in the specified linear range.
     * @param objects An array of room's objects or RoomPosition objects that the search should be executed against.
     * @param range The range distance.
     * @param opts See Room.find.
     */
    findInRange<T extends _HasRoomPosition | RoomPosition>(objects: T[], range: number, opts?: { filter?: any | string }): T[];
    /**
     * Find an optimal path to the specified position using A* search algorithm.
     *
     * This method is a shorthand for Room.findPath. If the target is in another room, then the corresponding exit will be used as a target.
     * @param x X position in the room.
     * @param y Y position in the room.
     * @param opts An object containing pathfinding options flags (see Room.findPath for more details).
     */
    findPathTo(x: number, y: number, opts?: FindPathOpts): PathStep[];
    /**
     * Find an optimal path to the specified position using A* search algorithm.
     *
     * This method is a shorthand for Room.findPath. If the target is in another room, then the corresponding exit will be used as a target.
     * @param target Can be a RoomPosition object or any object containing RoomPosition.
     * @param opts An object containing pathfinding options flags (see Room.findPath for more details).
     */
    findPathTo(target: RoomPosition | _HasRoomPosition, opts?: FindPathOpts): PathStep[];
    /**
     * Get linear direction to the specified position.
     * @param x X position in the room.
     * @param y Y position in the room.
     */
    getDirectionTo(x: number, y: number): DirectionConstant;
    /**
     * Get linear direction to the specified position.
     * @param target Can be a RoomPosition object or any object containing RoomPosition.
     */
    getDirectionTo(target: RoomPosition | _HasRoomPosition): DirectionConstant;
    /**
     * Get linear range to the specified position.
     * @param x X position in the room.
     * @param y Y position in the room.
     */
    getRangeTo(x: number, y: number): number;
    /**
     * Get linear range to the specified position.
     * @param target Can be a RoomPosition object or any object containing RoomPosition.
     */
    getRangeTo(target: RoomPosition | { pos: RoomPosition }): number;
    /**
     * Check whether this position is in the given range of another position.
     * @param x X position in the room.
     * @param y Y position in the room.
     * @param range The range distance.
     */
    inRangeTo(x: number, y: number, range: number): boolean;
    /**
     * Check whether this position is in the given range of another position.
     * @param toPos The target position.
     * @param range The range distance.
     */
    inRangeTo(target: RoomPosition | { pos: RoomPosition }, range: number): boolean;
    /**
     * Check whether this position is the same as the specified position.
     * @param x X position in the room.
     * @param y Y position in the room.
     */
    isEqualTo(x: number, y: number): boolean;
    /**
     * Check whether this position is the same as the specified position.
     * @param target Can be a RoomPosition object or any object containing RoomPosition.
     */
    isEqualTo(target: RoomPosition | { pos: RoomPosition }): boolean;
    /**
     * Check whether this position is on the adjacent square to the specified position. The same as inRangeTo(target, 1).
     * @param x X position in the room.
     * @param y Y position in the room.
     */
    isNearTo(x: number, y: number): boolean;
    /**
     * Check whether this position is on the adjacent square to the specified position. The same as inRangeTo(target, 1).
     * @param target Can be a RoomPosition object or any object containing RoomPosition.
     */
    isNearTo(target: RoomPosition | { pos: RoomPosition }): boolean;
    /**
     * Get the list of objects at the specified room position.
     */
    look(): LookAtResult[];
    /**
     * Get an object with the given type at the specified room position.
     * @param type One of the following string constants: constructionSite, creep, exit, flag, resource, source, structure, terrain
     */
    lookFor<T extends keyof AllLookAtTypes>(type: T): Array<AllLookAtTypes[T]>;
}

interface RoomPositionConstructor extends _Constructor<RoomPosition> {
    /**
     * You can create new RoomPosition object using its constructor.
     * @param x X position in the room.
     * @param y Y position in the room.
     * @param roomName The room name.
     */
    new (x: number, y: number, roomName: string): RoomPosition;
    (x: number, y: number, roomName: string): RoomPosition;
}

declare const RoomPosition: RoomPositionConstructor;
/**
 * Result of Object that contains all terrain for a room
 */
interface RoomTerrain {
    /**
     * Get terrain type at the specified room position. This method works for any room in the world even if you have no access to it.
     * @param x X position in the room.
     * @param y Y position in the room.
     * @return number Number of terrain mask like: TERRAIN_MASK_SWAMP | TERRAIN_MASK_WALL
     */
    get(x: number, y: number): number;
}
declare class RoomVisual {
    /**
     * You can create new RoomVisual object using its constructor.
     * @param roomName The room name. If undefined, visuals will be posted to all rooms simultaneously.
     */
    constructor(roomName?: string);

    /**
     * The name of the room.
     */
    roomName: string;

    /**
     * Draw a line.
     * @param x1 The start X coordinate.
     * @param y1 The start Y coordinate.
     * @param x2 The finish X coordinate.
     * @param y2 The finish Y coordinate.
     * @param style The (optional) style.
     * @returns The RoomVisual object, for chaining.
     */
    line(x1: number, y1: number, x2: number, y2: number, style?: LineStyle): RoomVisual;

    /**
     * Draw a line.
     * @param pos1 The start position object.
     * @param pos2 The finish position object.
     * @param style The (optional) style.
     * @returns The RoomVisual object, for chaining.
     */
    line(pos1: RoomPosition, pos2: RoomPosition, style?: LineStyle): RoomVisual;

    /**
     * Draw a circle.
     * @param x The X coordinate of the center.
     * @param y The Y coordinate of the center.
     * @param style The (optional) style.
     * @returns The RoomVisual object, for chaining.
     */
    circle(x: number, y: number, style?: CircleStyle): RoomVisual;

    /**
     * Draw a circle.
     * @param pos The position object of the center.
     * @param style An object describing the style.
     * @returns The RoomVisual object itself, so that you can chain calls.
     */
    circle(pos: RoomPosition, style?: CircleStyle): RoomVisual;

    /**
     * Draw a rectangle.
     * @param x The X coordinate of the top-left corner.
     * @param y The Y coordinate of the top-left corner.
     * @param w The width of the rectangle.
     * @param h The height of the rectangle.
     * @param style The (optional) style.
     * @returns The RoomVisual object, for chaining.
     */
    rect(x: number, y: number, w: number, h: number, style?: PolyStyle): RoomVisual;

    /**
     * Draw a line.
     * @param topLeftPos The position object of the top-left corner.
     * @param width The width of the rectangle.
     * @param height The height of the rectangle.
     * @param style An object describing the style.
     * @returns The RoomVisual object itself, so that you can chain calls.
     */
    rect(topLeftPos: RoomPosition, width: number, height: number, style?: PolyStyle): RoomVisual;
    /**
     * Draw a polygon.
     * @param points An array of points. Every array item should be either an array with 2 numbers (i.e. [10,15]), or a RoomPosition object.
     * @param style The (optional) style.
     * @returns The RoomVisual object, for chaining.
     */
    poly(points: Array<[number, number] | RoomPosition>, style?: PolyStyle): RoomVisual;

    /**
     * Draw a text label.
     * @param text The text message.
     * @param x The X coordinate of the label baseline center point.
     * @param y The Y coordinate of the label baseline center point.
     * @param style The (optional) text style.
     * @returns The RoomVisual object, for chaining.
     */
    text(text: string, x: number, y: number, style?: TextStyle): RoomVisual;

    /**
     * Draw a text label. You can use any valid Unicode characters, including emoji.
     * @param text The text message.
     * @param pos The position object of the center.
     * @param style An object describing the style.
     * @returns The RoomVisual object itself, so that you can chain calls.
     */
    text(text: string, pos: RoomPosition, style?: TextStyle): RoomVisual;

    /**
     * Remove all visuals from the room.
     * @returns The RoomVisual object, for chaining.
     */
    clear(): RoomVisual;

    /**
     * Get the stored size of all visuals added in the room in the current tick.
     * It must not exceed 512,000 (500 KB).
     * @returns The size of the visuals in bytes.
     */
    getSize(): number;
}

interface LineStyle {
    /**
     * Line width, default is 0.1.
     */
    width?: number;
    /**
     * Line color in any web format, default is #ffffff(white).
     */
    color?: string;
    /**
     * Opacity value, default is 0.5.
     */
    opacity?: number;
    /**
     * Either undefined (solid line), dashed, or dotted.Default is undefined.
     */
    lineStyle?: "dashed" | "dotted" | "solid";
}

interface PolyStyle {
    /**
     * Fill color in any web format, default is #ffffff(white).
     */
    fill?: string;
    /**
     * Opacity value, default is 0.5.
     */
    opacity?: number;
    /**
     * Stroke color in any web format, default is undefined (no stroke).
     */
    stroke?: string | undefined;
    /**
     * Stroke line width, default is 0.1.
     */
    strokeWidth?: number;
    /**
     * Either undefined (solid line), dashed, or dotted.Default is undefined.
     */
    lineStyle?: "dashed" | "dotted" | "solid";
}

interface CircleStyle extends PolyStyle {
    /**
     * Circle radius, default is 0.15.
     */
    radius?: number;
}

interface TextStyle {
    /**
     * Font color in any web format, default is #ffffff(white).
     */
    color?: string;
    /**
     * Either a number or a string in one of the following forms:
     * 0.7 - relative size in game coordinates
     * 20px - absolute size in pixels
     * 0.7 serif
     * bold italic 1.5 Times New Roman
     */
    font?: number | string;
    /**
     * Stroke color in any web format, default is undefined (no stroke).
     */
    stroke?: string;
    /**
     * Stroke width, default is 0.15.
     */
    strokeWidth?: number;
    /**
     * Background color in any web format, default is undefined (no background).When background is enabled, text vertical align is set to middle (default is baseline).
     */
    backgroundColor?: string;

    /**
     * Background rectangle padding, default is 0.3.
     */
    backgroundPadding?: number;
    align?: "center" | "left" | "right";
    /**
     * Opacity value, default is 1.0.
     */
    opacity?: number;
}
/**
 * An object representing the room in which your units and structures are in.
 *
 * It can be used to look around, find paths, etc.
 *
 * Every object in the room contains its linked Room instance in the room property.
 */
interface Room {
    readonly prototype: Room;

    /**
     * The Controller structure of this room, if present, otherwise undefined.
     */
    controller?: StructureController;
    /**
     * Total amount of energy available in all spawns and extensions in the room.
     */
    energyAvailable: number;
    /**
     * Total amount of energyCapacity of all spawns and extensions in the room.
     */
    energyCapacityAvailable: number;
    /**
     * Returns an array of events happened on the previous tick in this room.
     */
    getEventLog(raw?: boolean): EventItem[];
    /**
     * A shorthand to `Memory.rooms[room.name]`. You can use it for quick access the room’s specific memory data object.
     */
    memory: RoomMemory;
    /**
     * One of the `MODE_*` constants.
     */
    mode: string;
    /**
     * The name of the room.
     */
    name: string;
    /**
     * The Storage structure of this room, if present, otherwise undefined.
     */
    storage?: StructureStorage;
    /**
     * The Terminal structure of this room, if present, otherwise undefined.
     */
    terminal?: StructureTerminal;
    /**
     * A RoomVisual object for this room. You can use this object to draw simple shapes (lines, circles, text labels) in the room.
     */
    visual: RoomVisual;
    /**
     * Create new ConstructionSite at the specified location.
     * @param x The X position.
     * @param y The Y position.
     * @param structureType One of the following constants: STRUCTURE_EXTENSION, STRUCTURE_RAMPART, STRUCTURE_ROAD, STRUCTURE_SPAWN, STRUCTURE_WALL, STRUCTURE_LINK
     * @returns Result Code: OK, ERR_INVALID_TARGET, ERR_INVALID_ARGS, ERR_RCL_NOT_ENOUGH
     */
    createConstructionSite(x: number, y: number, structureType: BuildableStructureConstant): ScreepsReturnCode;
    /**
     * Create new ConstructionSite at the specified location.
     * @param pos Can be a RoomPosition object or any object containing RoomPosition.
     * @param structureType One of the following constants: STRUCTURE_EXTENSION, STRUCTURE_RAMPART, STRUCTURE_ROAD, STRUCTURE_SPAWN, STRUCTURE_WALL, STRUCTURE_LINK
     * @returns Result Code: OK, ERR_INVALID_TARGET, ERR_INVALID_ARGS, ERR_RCL_NOT_ENOUGH
     */
    createConstructionSite(pos: RoomPosition | _HasRoomPosition, structureType: StructureConstant): ScreepsReturnCode;
    /**
     * Create new ConstructionSite at the specified location.
     * @param x The X position.
     * @param y The Y position.
     * @param structureType One of the following constants: STRUCTURE_EXTENSION, STRUCTURE_RAMPART, STRUCTURE_ROAD, STRUCTURE_SPAWN, STRUCTURE_WALL, STRUCTURE_LINK
     * @param name The name of the structure, for structures that support it (currently only spawns).
     * @returns Result Code: OK, ERR_INVALID_TARGET, ERR_INVALID_ARGS, ERR_RCL_NOT_ENOUGH
     */
    createConstructionSite(x: number, y: number, structureType: STRUCTURE_SPAWN, name?: string): ScreepsReturnCode;
    /**
     * Create new ConstructionSite at the specified location.
     * @param pos Can be a RoomPosition object or any object containing RoomPosition.
     * @param structureType One of the following constants: STRUCTURE_EXTENSION, STRUCTURE_RAMPART, STRUCTURE_ROAD, STRUCTURE_SPAWN, STRUCTURE_WALL, STRUCTURE_LINK
     * @param name The name of the structure, for structures that support it (currently only spawns).
     * @returns Result Code: OK, ERR_INVALID_TARGET, ERR_INVALID_ARGS, ERR_RCL_NOT_ENOUGH
     */
    createConstructionSite(pos: RoomPosition | _HasRoomPosition, structureType: STRUCTURE_SPAWN, name?: string): ScreepsReturnCode;
    /**
     * Create new Flag at the specified location.
     * @param x The X position.
     * @param y The Y position.
     * @param name (optional) The name of a new flag.
     *
     * It should be unique, i.e. the Game.flags object should not contain another flag with the same name (hash key).
     *
     * If not defined, a random name will be generated.
     *
     * The maximum length is 60 characters.
     * @param color The color of a new flag. Should be one of the COLOR_* constants. The default value is COLOR_WHITE.
     * @param secondaryColor The secondary color of a new flag. Should be one of the COLOR_* constants. The default value is equal to color.
     * @returns The name of a new flag, or one of the following error codes: ERR_NAME_EXISTS, ERR_INVALID_ARGS
     */
    createFlag(
        x: number,
        y: number,
        name?: string,
        color?: ColorConstant,
        secondaryColor?: ColorConstant,
    ): ERR_NAME_EXISTS | ERR_INVALID_ARGS | string;
    /**
     * Create new Flag at the specified location.
     * @param pos Can be a RoomPosition object or any object containing RoomPosition.
     * @param name (optional) The name of a new flag.
     *
     * It should be unique, i.e. the Game.flags object should not contain another flag with the same name (hash key).
     *
     * If not defined, a random name will be generated.
     *
     * The maximum length is 60 characters.
     * @param color The color of a new flag. Should be one of the COLOR_* constants. The default value is COLOR_WHITE.
     * @param secondaryColor The secondary color of a new flag. Should be one of the COLOR_* constants. The default value is equal to color.
     * @returns The name of a new flag, or one of the following error codes: ERR_NAME_EXISTS, ERR_INVALID_ARGS
     */
    createFlag(
        pos: RoomPosition | { pos: RoomPosition },
        name?: string,
        color?: ColorConstant,
        secondaryColor?: ColorConstant,
    ): ERR_NAME_EXISTS | ERR_INVALID_ARGS | string;
    /**
     * Find all objects of the specified type in the room.
     * @param type One of the following constants:
     *  * FIND_CREEPS
     *  * FIND_MY_CREEPS
     *  * FIND_HOSTILE_CREEPS
     *  * FIND_MY_SPAWNS
     *  * FIND_HOSTILE_SPAWNS
     *  * FIND_SOURCES
     *  * FIND_SOURCES_ACTIVE
     *  * FIND_DROPPED_RESOURCES
     *  * FIND_DROPPED_ENERGY
     *  * FIND_STRUCTURES
     *  * FIND_MY_STRUCTURES
     *  * FIND_HOSTILE_STRUCTURES
     *  * FIND_FLAGS
     *  * FIND_CONSTRUCTION_SITES
     *  * FIND_EXIT_TOP
     *  * FIND_EXIT_RIGHT
     *  * FIND_EXIT_BOTTOM
     *  * FIND_EXIT_LEFT
     *  * FIND_EXIT
     * @param opts An object with additional options
     * @returns An array with the objects found.
     */
    find<K extends FindConstant>(type: K, opts?: FilterOptions<K>): Array<FindTypes[K]>;
    find<T extends Structure>(
        type: FIND_STRUCTURES | FIND_MY_STRUCTURES | FIND_HOSTILE_STRUCTURES,
        opts?: FilterOptions<FIND_STRUCTURES>,
    ): T[];
    /**
     * Find the exit direction en route to another room.
     * @param room Another room name or room object.
     * @returns The room direction constant, one of the following: FIND_EXIT_TOP, FIND_EXIT_RIGHT, FIND_EXIT_BOTTOM, FIND_EXIT_LEFT
     * Or one of the following error codes: ERR_NO_PATH, ERR_INVALID_ARGS
     */
    findExitTo(room: string | Room): ExitConstant | ERR_NO_PATH | ERR_INVALID_ARGS;
    /**
     * Find an optimal path inside the room between fromPos and toPos using A* search algorithm.
     * @param fromPos The start position.
     * @param toPos The end position.
     * @param opts (optional) An object containing additonal pathfinding flags
     * @returns An array with path steps
     */
    findPath(fromPos: RoomPosition, toPos: RoomPosition, opts?: FindPathOpts): PathStep[];
    /**
     * Creates a RoomPosition object at the specified location.
     * @param x The X position.
     * @param y The Y position.
     * @returns A RoomPosition object or null if it cannot be obtained.
     */
    getPositionAt(x: number, y: number): RoomPosition | null;
    /**
     * Get the list of objects at the specified room position.
     * @param x The X position.
     * @param y The Y position.
     * @returns An array with objects at the specified position
     */
    lookAt(x: number, y: number): LookAtResult[];
    /**
     * Get the list of objects at the specified room position.
     * @param target Can be a RoomPosition object or any object containing RoomPosition.
     * @returns An array with objects at the specified position
     */
    lookAt(target: RoomPosition | { pos: RoomPosition }): LookAtResult[];
    /**
     * Get the list of objects at the specified room area. This method is more CPU efficient in comparison to multiple lookAt calls.
     * @param top The top Y boundary of the area.
     * @param left The left X boundary of the area.
     * @param bottom The bottom Y boundary of the area.
     * @param right The right X boundary of the area.
     * @param asArray Set to true if you want to get the result as a plain array.
     * @returns An object with all the objects in the specified area
     */
    lookAtArea(top: number, left: number, bottom: number, right: number, asArray?: false): LookAtResultMatrix;
    /**
     * Get the list of objects at the specified room area. This method is more CPU efficient in comparison to multiple lookAt calls.
     * @param top The top Y boundary of the area.
     * @param left The left X boundary of the area.
     * @param bottom The bottom Y boundary of the area.
     * @param right The right X boundary of the area.
     * @param asArray Set to true if you want to get the result as a plain array.
     * @returns An object with all the objects in the specified area
     */
    lookAtArea(top: number, left: number, bottom: number, right: number, asArray: true): LookAtResultWithPos[];
    /**
     * Get the objects at the given position.
     * @param type One of the LOOK_* constants.
     * @param x The X position.
     * @param y The Y position.
     * @returns An array of Creep at the given position.
     */
    lookForAt<T extends keyof AllLookAtTypes>(type: T, x: number, y: number): Array<AllLookAtTypes[T]>;
    /**
     * Get the objects at the given RoomPosition.
     * @param type One of the LOOK_* constants.
     * @param target Can be a RoomPosition object or any object containing RoomPosition.
     * @returns An array of Creeps at the specified position if found.
     */
    lookForAt<T extends keyof AllLookAtTypes>(type: T, target: RoomPosition | _HasRoomPosition): Array<AllLookAtTypes[T]>;
    /**
     * Get the given objets in the supplied area.
     * @param type One of the LOOK_* constants
     * @param top The top (Y) boundry of the area.
     * @param left The left (X) boundry of the area.
     * @param bottom The bottom (Y) boundry of the area.
     * @param right The right(X) boundry of the area.
     * @param asArray Flatten the results into an array?
     * @returns An object with the sstructure object[X coord][y coord] as an array of found objects.
     */
    lookForAtArea<T extends keyof AllLookAtTypes>(
        type: T,
        top: number,
        left: number,
        bottom: number,
        right: number,
        asArray?: false,
    ): LookForAtAreaResultMatrix<AllLookAtTypes[T], T>;
    /**
     * Get the given objets in the supplied area.
     * @param type One of the LOOK_* constants
     * @param top The top (Y) boundry of the area.
     * @param left The left (X) boundry of the area.
     * @param bottom The bottom (Y) boundry of the area.
     * @param right The right(X) boundry of the area.
     * @param asArray Flatten the results into an array?
     * @returns An array of found objects with an x & y property for their position
     */
    lookForAtArea<T extends keyof AllLookAtTypes>(
        type: T,
        top: number,
        left: number,
        bottom: number,
        right: number,
        asArray: true,
    ): LookForAtAreaResultArray<AllLookAtTypes[T], T>;

    /**
     * Serialize a path array into a short string representation, which is suitable to store in memory.
     * @param path A path array retrieved from Room.findPath.
     * @returns A serialized string form of the given path.
     */

    /**
     * Deserialize a short string path representation into an array form.
     * @param path A serialized path string.
     * @returns A path array.
     */
}

interface RoomConstructor extends _Constructor<Room> {
    new (id: string): Room;
    /**
     * Serialize a path array into a short string representation, which is suitable to store in memory.
     * @param path A path array retrieved from `Room.findPath`.
     * @returns A serialized string form of the given path.
     */
    serializePath(path: PathStep[]): string;
    /**
     * Deserialize a short string path representation into an array form.
     * @param path A serialized path string.
     * @returns A path array.
     */
    deserializePath(path: string): PathStep[];
}

declare const Room: RoomConstructor;
/**
 * An energy source object. Can be harvested by creeps with a WORK body part.
 */
interface Source extends RoomObject {
    /**
     * The prototype is stored in the Source.prototype global object. You can use it to extend game objects behaviour globally:
     */
    readonly prototype: Source;
    /**
     * The remaining amount of energy.
     */
    energy: number;
    /**
     * The total amount of energy in the source. Equals to 3000 in most cases.
     */
    energyCapacity: number;
    /**
     * A unique object identifier. You can use Game.getObjectById method to retrieve an object instance by its id.
     */
    id: string;
    /**
     * If you can get an instance of Source, you can see it.
     * If you can see a Source, you can see the room it's in.
     */
    room: Room;
    /**
     * The remaining time after which the source will be refilled.
     */
    ticksToRegeneration: number;
}

interface SourceConstructor extends _Constructor<Source>, _ConstructorById<Source> {}

declare const Source: SourceConstructor;
/**
 * Spawns are your colony centers. This structure can create, renew, and recycle
 * creeps. All your spawns are accessible through `Game.spawns` hash list.
 * Spawns auto-regenerate a little amount of energy each tick, so that you can
 * easily recover even if all your creeps died.
 */
interface StructureSpawn extends OwnedStructure<STRUCTURE_SPAWN> {
    readonly prototype: StructureSpawn;
    /**
     * The amount of energy containing in the spawn.
     */
    energy: number;
    /**
     * The total amount of energy the spawn can contain
     */
    energyCapacity: number;
    /**
     * A shorthand to `Memory.spawns[spawn.name]`. You can use it for quick access
     * the spawn’s specific memory data object.
     *
     * @see http://docs.screeps.com/global-objects.html#Memory-object
     */
    memory: SpawnMemory;
    /**
     * Spawn's name. You choose the name upon creating a new spawn, and it cannot
     * be changed later. This name is a hash key to access the spawn via the
     * `Game.spawns` object.
     */
    name: string;
    /**
     * If the spawn is in process of spawning a new creep, this object will contain the new creep’s information, or null otherwise.
     */
    spawning: Spawning | null;

    /**
     * Check if a creep can be created.
     *
     * @deprecated This method is deprecated and will be removed soon. Please use `StructureSpawn.spawnCreep` with `dryRun` flag instead.
     * @param body An array describing the new creep’s body. Should contain 1 to 50 elements with one of these constants: WORK, MOVE, CARRY, ATTACK, RANGED_ATTACK, HEAL, TOUGH, CLAIM
     * @param name The name of a new creep.
     *
     * It should be unique creep name, i.e. the Game.creeps object should not contain another creep with the same name (hash key).
     *
     * If not defined, a random name will be generated.
     */
    canCreateCreep(body: BodyPartConstant[], name?: string): ScreepsReturnCode;
    /**
     * Start the creep spawning process.
     *
     * @deprecated This method is deprecated and will be removed soon. Please use `StructureSpawn.spawnCreep` instead.
     * @param body An array describing the new creep’s body. Should contain 1 to 50 elements with one of these constants: WORK, MOVE, CARRY, ATTACK, RANGED_ATTACK, HEAL, TOUGH, CLAIM
     * @param name The name of a new creep.
     *
     * It should be unique creep name, i.e. the Game.creeps object should not contain another creep with the same name (hash key).
     *
     * If not defined, a random name will be generated.
     * @param memory The memory of a new creep. If provided, it will be immediately stored into Memory.creeps[name].
     * @returns The name of a new creep or one of these error codes:
     * ```
     * ERR_NOT_OWNER            -1  You are not the owner of this spawn.
     * ERR_NAME_EXISTS          -3  There is a creep with the same name already.
     * ERR_BUSY                 -4  The spawn is already in process of spawning another creep.
     * ERR_NOT_ENOUGH_ENERGY    -6  The spawn and its extensions contain not enough energy to create a creep with the given body.
     * ERR_INVALID_ARGS         -10 Body is not properly described.
     * ERR_RCL_NOT_ENOUGH       -14 Your Room Controller level is not enough to use this spawn.
     * ```
     */
    createCreep(body: BodyPartConstant[], name?: string, memory?: CreepMemory): ScreepsReturnCode | string;

    /**
     * Start the creep spawning process. The required energy amount can be withdrawn from all spawns and extensions in the room.
     *
     * @param {BodyPartConstant[]} body An array describing the new creep’s body. Should contain 1 to 50 elements with one of these constants:
     *  * WORK
     *  * MOVE
     *  * CARRY
     *  * ATTACK
     *  * RANGED_ATTACK
     *  * HEAL
     *  * TOUGH
     *  * CLAIM
     * @param {string} name The name of a new creep. It must be a unique creep name, i.e. the Game.creeps object should not contain another creep with the same name (hash key).
     * @param {SpawnOptions} opts An object with additional options for the spawning process.
     * @returns {ScreepsReturnCode} One of the following codes:
     * ```
     * OK                       0   The operation has been scheduled successfully.
     * ERR_NOT_OWNER            -1  You are not the owner of this spawn.
     * ERR_NAME_EXISTS          -3  There is a creep with the same name already.
     * ERR_BUSY                 -4  The spawn is already in process of spawning another creep.
     * ERR_NOT_ENOUGH_ENERGY    -6  The spawn and its extensions contain not enough energy to create a creep with the given body.
     * ERR_INVALID_ARGS         -10 Body is not properly described or name was not provided.
     * ERR_RCL_NOT_ENOUGH       -14 Your Room Controller level is insufficient to use this spawn.
     * ```
     */
    spawnCreep(body: BodyPartConstant[], name: string, opts?: SpawnOptions): ScreepsReturnCode;

    /**
     * Destroy this spawn immediately.
     */
    destroy(): ScreepsReturnCode;
    /**
     * Check whether this structure can be used. If the room controller level is not enough, then this method will return false, and the structure will be highlighted with red in the game.
     */
    isActive(): boolean;
    /**
     * Toggle auto notification when the spawn is under attack. The notification will be sent to your account email. Turned on by default.
     * @param enabled Whether to enable notification or disable.
     */
    notifyWhenAttacked(enabled: boolean): ScreepsReturnCode;
    /**
     * Increase the remaining time to live of the target creep.
     *
     * The target should be at adjacent square.
     *
     * The spawn should not be busy with the spawning process.
     *
     * Each execution increases the creep's timer by amount of ticks according to this formula: floor(500/body_size).
     *
     * Energy required for each execution is determined using this formula: ceil(creep_cost/3/body_size).
     * @param target The target creep object.
     */
    renewCreep(target: Creep): ScreepsReturnCode;
    /**
     * Kill the creep and drop up to 100% of resources spent on its spawning and boosting depending on remaining life time. The target should be at adjacent square.
     * @param target The target creep object.
     */
    recycleCreep(target: Creep): ScreepsReturnCode;
}

interface StructureSpawnConstructor extends _Constructor<StructureSpawn>, _ConstructorById<StructureSpawn> {
    Spawning: SpawningConstructor;
}

declare const StructureSpawn: StructureSpawnConstructor;
declare const Spawn: StructureSpawnConstructor; // legacy alias
// declare type Spawn = StructureSpawn;

interface Spawning {
    readonly prototype: Spawning;

    /**
     * An array with the spawn directions
     * @see http://docs.screeps.com/api/#StructureSpawn.Spawning.setDirections
     */
    directions: DirectionConstant[];

    /**
     * The name of the creep
     */
    name: string;

    /**
     * Time needed in total to complete the spawning.
     */
    needTime: number;

    /**
     * Remaining time to go.
     */
    remainingTime: number;

    /**
     * A link to the spawn
     */
    spawn: StructureSpawn;

    /**
     * Cancel spawning immediately. Energy spent on spawning is not returned.
     */
    cancel(): ScreepsReturnCode & (OK | ERR_NOT_OWNER);

    /**
     * Set desired directions where the creep should move when spawned.
     * @param directions An array with the spawn directions
     */
    setDirections(directions: DirectionConstant[]): ScreepsReturnCode & (OK | ERR_NOT_OWNER | ERR_INVALID_ARGS);
}

/**
 * An object with additional options for the spawning process.
 */
interface SpawnOptions {
    /**
     * Memory of the new creep. If provided, it will be immediately stored into Memory.creeps[name].
     */
    memory?: CreepMemory;
    /**
     * Array of spawns/extensions from which to draw energy for the spawning process.
     * Structures will be used according to the array order.
     */
    energyStructures?: Array<StructureSpawn | StructureExtension>;
    /**
     * If dryRun is <code>true</code>, the operation will only check if it is possible to create a creep.
     */
    dryRun?: boolean;
    /**
     * Set desired directions where the creep should move when spawned.
     * An array with the direction constants.
     */
    directions?: DirectionConstant[];
}

interface SpawningConstructor extends _Constructor<Spawning>, _ConstructorById<Spawning> {}
/**
 * Parent object for structure classes
 */
interface Structure<T extends StructureConstant = StructureConstant> extends RoomObject {
    readonly prototype: Structure;

    /**
     * The current amount of hit points of the structure.
     */
    hits: number;
    /**
     * The total amount of hit points of the structure.
     */
    hitsMax: number;
    /**
     * A unique object identifier. You can use Game.getObjectById method to retrieve an object instance by its id.
     */
    id: string;
    /**
     * If you can get an instance of a Structure, you can see it.
     * If you can see the Structure, you can see the room it's in.
     */
    room: Room;
    /**
     * One of the STRUCTURE_* constants.
     */
    structureType: T;
    /**
     * Destroy this structure immediately.
     */
    destroy(): ScreepsReturnCode;
    /**
     * Check whether this structure can be used. If the room controller level is not enough, then this method will return false, and the structure will be highlighted with red in the game.
     */
    isActive(): boolean;
    /**
     * Toggle auto notification when the structure is under attack. The notification will be sent to your account email. Turned on by default.
     * @param enabled Whether to enable notification or disable.
     */
    notifyWhenAttacked(enabled: boolean): ScreepsReturnCode;
}

interface StructureConstructor extends _Constructor<Structure>, _ConstructorById<Structure> {}

declare const Structure: StructureConstructor;

/**
 * The base prototype for a structure that has an owner. Such structures can be
 * found using `FIND_MY_STRUCTURES` and `FIND_HOSTILE_STRUCTURES` constants.
 */
interface OwnedStructure<T extends StructureConstant = StructureConstant> extends Structure<T> {
    readonly prototype: OwnedStructure;

    /**
     * Whether this is your own structure. Walls and roads don't have this property as they are considered neutral structures.
     */
    my: boolean;
    /**
     * An object with the structure’s owner info (if present) containing the following properties: username
     */
    owner: Owner;
    /**
     * The link to the Room object. Is always present because owned structures give visibility.
     */
    room: Room;
}

interface OwnedStructureConstructor extends _Constructor<OwnedStructure>, _ConstructorById<OwnedStructure> {}

declare const OwnedStructure: OwnedStructureConstructor;

/**
 * Claim this structure to take control over the room. The controller structure
 * cannot be damaged or destroyed. It can be addressed by `Room.controller`
 * property.
 */
interface StructureController extends OwnedStructure<STRUCTURE_CONTROLLER> {
    readonly prototype: StructureController;

    /**
     * Current controller level, from 0 to 8.
     */
    level: number;
    /**
     * The current progress of upgrading the controller to the next level.
     */
    progress: number;
    /**
     * The progress needed to reach the next level.
     */
    progressTotal: number;
    /**
     * An object with the controller reservation info if present: username, ticksToEnd
     */
    reservation: ReservationDefinition | undefined;
    /**
     * How many ticks of safe mode are remaining, or undefined.
     */
    safeMode?: number;
    /**
     * Safe mode activations available to use.
     */
    safeModeAvailable: number;
    /**
     * During this period in ticks new safe mode activations will be blocked, undefined if cooldown is inactive.
     */
    safeModeCooldown?: number;
    /**
     * An object with the controller sign info if present
     */
    sign: SignDefinition | undefined;
    /**
     * The amount of game ticks when this controller will lose one level. This timer can be reset by using Creep.upgradeController.
     */
    ticksToDowngrade: number;
    /**
     * The amount of game ticks while this controller cannot be upgraded due to attack.
     */
    upgradeBlocked: number;
    /**
     * Activate safe mode if available.
     * @returns Result Code: OK, ERR_NOT_OWNER, ERR_BUSY, ERR_NOT_ENOUGH_RESOURCES, ERR_TIRED
     */
    activateSafeMode(): ScreepsReturnCode;
    /**
     * Make your claimed controller neutral again.
     */
    unclaim(): ScreepsReturnCode;
}

interface StructureControllerConstructor extends _Constructor<StructureController>, _ConstructorById<StructureController> {}

declare const StructureController: StructureControllerConstructor;

/**
 * Contains energy which can be spent on spawning bigger creeps. Extensions can
 * be placed anywhere in the room, any spawns will be able to use them regardless
 * of distance.
 */
interface StructureExtension extends OwnedStructure<STRUCTURE_EXTENSION> {
    readonly prototype: StructureExtension;

    /**
     * The amount of energy containing in the extension.
     */
    energy: number;
    /**
     * The total amount of energy the extension can contain.
     */
    energyCapacity: number;
}

interface StructureExtensionConstructor extends _Constructor<StructureExtension>, _ConstructorById<StructureExtension> {}

declare const StructureExtension: StructureExtensionConstructor;

/**
 * Remotely transfers energy to another Link in the same room.
 */
interface StructureLink extends OwnedStructure<STRUCTURE_LINK> {
    readonly prototype: StructureLink;

    /**
     * The amount of game ticks the link has to wait until the next transfer is possible.
     */
    cooldown: number;
    /**
     * The amount of energy containing in the link.
     */
    energy: number;
    /**
     * The total amount of energy the link can contain.
     */
    energyCapacity: number;
    /**
     * Transfer energy from the link to another link or a creep.
     *
     * If the target is a creep, it has to be at adjacent square to the link.
     *
     * If the target is a link, it can be at any location in the same room.
     *
     * Remote transfer process implies 3% energy loss and cooldown delay depending on the distance.
     * @param target The target object.
     * @param amount The amount of energy to be transferred. If omitted, all the available energy is used.
     */
    transferEnergy(target: Creep | StructureLink, amount?: number): ScreepsReturnCode;
}

interface StructureLinkConstructor extends _Constructor<StructureLink>, _ConstructorById<StructureLink> {}

declare const StructureLink: StructureLinkConstructor;

/**
 * Non-player structure. Spawns NPC Source Keepers that guards energy sources
 * and minerals in some rooms. This structure cannot be destroyed.
 */
interface StructureKeeperLair extends OwnedStructure<STRUCTURE_KEEPER_LAIR> {
    readonly prototype: StructureKeeperLair;

    /**
     * Time to spawning of the next Source Keeper.
     */
    ticksToSpawn?: number;
}

interface StructureKeeperLairConstructor extends _Constructor<StructureKeeperLair>, _ConstructorById<StructureKeeperLair> {}

declare const StructureKeeperLair: StructureKeeperLairConstructor;

/**
 * Provides visibility into a distant room from your script.
 */
interface StructureObserver extends OwnedStructure<STRUCTURE_OBSERVER> {
    readonly prototype: StructureObserver;

    /**
     * Provide visibility into a distant room from your script. The target room object will be available on the next tick. The maximum range is 5 rooms.
     * @param roomName
     */
    observeRoom(roomName: string): ScreepsReturnCode;
}

interface StructureObserverConstructor extends _Constructor<StructureObserver>, _ConstructorById<StructureObserver> {}

declare const StructureObserver: StructureObserverConstructor;

/**
 * Non-player structure. Contains power resource which can be obtained by destroying the structure. Hits the attacker creep back on each attack.
 */
interface StructurePowerBank extends OwnedStructure<STRUCTURE_POWER_BANK> {
    readonly prototype: StructurePowerBank;

    /**
     * The amount of power containing.
     */
    power: number;
    /**
     * The amount of game ticks when this structure will disappear.
     */
    ticksToDecay: number;
}

interface StructurePowerBankConstructor extends _Constructor<StructurePowerBank>, _ConstructorById<StructurePowerBank> {}

declare const StructurePowerBank: StructurePowerBankConstructor;

/**
 * Non-player structure. Contains power resource which can be obtained by
 * destroying the structure. Hits the attacker creep back on each attack.
 */
interface StructurePowerSpawn extends OwnedStructure<STRUCTURE_POWER_SPAWN> {
    readonly prototype: StructurePowerSpawn;
    /**
     * The amount of energy containing in this structure.
     */
    energy: number;
    /**
     * The total amount of energy this structure can contain.
     */
    energyCapacity: number;
    /**
     * The amount of power containing in this structure.
     */
    power: number;
    /**
     * The total amount of power this structure can contain.
     */
    powerCapacity: number;

    /**
     * Create a power creep. Currently in development
     * @param name The name of the power creep.
     */
    createPowerCreep(name: string): ScreepsReturnCode;
    /**
     * Register power resource units into your account. Registered power allows to develop power creeps skills. Consumes 1 power resource unit and 50 energy resource units.
     */
    processPower(): ScreepsReturnCode;
}

interface StructurePowerSpawnConstructor extends _Constructor<StructurePowerSpawn>, _ConstructorById<StructurePowerSpawn> {}

declare const StructurePowerSpawn: StructurePowerSpawnConstructor;

/**
 * Blocks movement of hostile creeps, and defends your creeps and structures on
 * the same tile. Can be used as a controllable gate.
 */
interface StructureRampart extends OwnedStructure<STRUCTURE_RAMPART> {
    readonly prototype: StructureRampart;

    /**
     * The amount of game ticks when this rampart will lose some hit points.
     */
    ticksToDecay: number;

    /**
     * If false (default), only your creeps can step on the same square. If true, any hostile creeps can pass through.
     */
    isPublic: boolean;

    /**
     * Make this rampart public to allow other players' creeps to pass through.
     * @param isPublic Whether this rampart should be public or non-public
     */
    setPublic(isPublic: boolean): undefined;
}

interface StructureRampartConstructor extends _Constructor<StructureRampart>, _ConstructorById<StructureRampart> {}

declare const StructureRampart: StructureRampartConstructor;

/**
 * Decreases movement cost to 1. Using roads allows creating creeps with less
 * `MOVE` body parts.
 */
interface StructureRoad extends Structure<STRUCTURE_ROAD> {
    readonly prototype: StructureRoad;

    /**
     * The amount of game ticks when this road will lose some hit points.
     */
    ticksToDecay: number;
}

interface StructureRoadConstructor extends _Constructor<StructureRoad>, _ConstructorById<StructureRoad> {}

declare const StructureRoad: StructureRoadConstructor;

/**
 * A structure that can store huge amount of resource units. Only one structure
 * per room is allowed that can be addressed by `Room.storage` property.
 */
interface StructureStorage extends OwnedStructure<STRUCTURE_STORAGE> {
    readonly prototype: StructureStorage;

    /**
     * An object with the storage contents.
     */
    store: StoreDefinition;
    /**
     * The total amount of resources the storage can contain.
     */
    storeCapacity: number;
}

interface StructureStorageConstructor extends _Constructor<StructureStorage>, _ConstructorById<StructureStorage> {}

declare const StructureStorage: StructureStorageConstructor;

/**
 * Remotely attacks or heals creeps, or repairs structures. Can be targeted to
 * any object in the room. However, its effectiveness highly depends on the
 * distance. Each action consumes energy.
 */
interface StructureTower extends OwnedStructure<STRUCTURE_TOWER> {
    readonly prototype: StructureTower;

    /**
     * The amount of energy containing in this structure.
     */
    energy: number;
    /**
     * The total amount of energy this structure can contain.
     */
    energyCapacity: number;

    /**
     * Remotely attack any creep in the room. Consumes 10 energy units per tick. Attack power depends on the distance to the target: from 600 hits at range 10 to 300 hits at range 40.
     * @param target The target creep.
     */
    attack(target: Creep): ScreepsReturnCode;
    /**
     * Remotely heal any creep in the room. Consumes 10 energy units per tick. Heal power depends on the distance to the target: from 400 hits at range 10 to 200 hits at range 40.
     * @param target The target creep.
     */
    heal(target: Creep): ScreepsReturnCode;
    /**
     * Remotely repair any structure in the room. Consumes 10 energy units per tick. Repair power depends on the distance to the target: from 600 hits at range 10 to 300 hits at range 40.
     * @param target The target structure.
     */
    repair(target: Structure): ScreepsReturnCode;
}

interface StructureTowerConstructor extends _Constructor<StructureTower>, _ConstructorById<StructureTower> {}

declare const StructureTower: StructureTowerConstructor;

/**
 * Blocks movement of all creeps.
 */
interface StructureWall extends Structure<STRUCTURE_WALL> {
    readonly prototype: StructureWall;
    /**
     * The amount of game ticks when the wall will disappear (only for automatically placed border walls at the start of the game).
     */
    ticksToLive: number;
}

interface StructureWallConstructor extends _Constructor<StructureWall>, _ConstructorById<StructureWall> {}

declare const StructureWall: StructureWallConstructor;

/**
 * Allows to harvest mineral deposits.
 */
interface StructureExtractor extends OwnedStructure<STRUCTURE_EXTRACTOR> {
    readonly prototype: StructureExtractor;
    /**
     * The amount of game ticks until the next harvest action is possible.
     */
    cooldown: number;
}

interface StructureExtractorConstructor extends _Constructor<StructureExtractor>, _ConstructorById<StructureExtractor> {}

declare const StructureExtractor: StructureExtractorConstructor;

/**
 * Produces mineral compounds from base minerals and boosts creeps.
 */
interface StructureLab extends OwnedStructure<STRUCTURE_LAB> {
    readonly prototype: StructureLab;
    /**
     * The amount of game ticks the lab has to wait until the next reaction is possible.
     */
    cooldown: number;
    /**
     * The amount of energy containing in the lab. Energy is used for boosting creeps.
     */
    energy: number;
    /**
     * The total amount of energy the lab can contain.
     */
    energyCapacity: number;
    /**
     * The amount of mineral resources containing in the lab.
     */
    mineralAmount: number;
    /**
     * The type of minerals containing in the lab. Labs can contain only one mineral type at the same time.
     * Null in case there is no mineral resource in the lab.
     */
    mineralType: _ResourceConstantSansEnergy | null;
    /**
     * The total amount of minerals the lab can contain.
     */
    mineralCapacity: number;
    /**
     * Boosts creep body part using the containing mineral compound. The creep has to be at adjacent square to the lab. Boosting one body part consumes 30 mineral units and 20 energy units.
     * @param creep The target creep.
     * @param bodyPartsCount The number of body parts of the corresponding type to be boosted.
     *
     * Body parts are always counted left-to-right for TOUGH, and right-to-left for other types.
     *
     * If undefined, all the eligible body parts are boosted.
     */
    boostCreep(creep: Creep, bodyPartsCount?: number): ScreepsReturnCode;
    /**
     * Produce mineral compounds using reagents from two another labs. Each lab has to be within 2 squares range. The same input labs can be used by many output labs
     * @param lab1 The first source lab.
     * @param lab2 The second source lab.
     */
    runReaction(lab1: StructureLab, lab2: StructureLab): ScreepsReturnCode;
}

interface StructureLabConstructor extends _Constructor<StructureLab>, _ConstructorById<StructureLab> {}

declare const StructureLab: StructureLabConstructor;

/**
 * Sends any resources to a Terminal in another room.
 */
interface StructureTerminal extends OwnedStructure<STRUCTURE_TERMINAL> {
    readonly prototype: StructureTerminal;
    /**
     * The remaining amount of ticks while this terminal cannot be used to make StructureTerminal.send or Game.market.deal calls.
     */
    cooldown: number;
    /**
     * An object with the storage contents. Each object key is one of the RESOURCE_* constants, values are resources amounts.
     */
    store: StoreDefinition;
    /**
     * The total amount of resources the storage can contain.
     */
    storeCapacity: number;
    /**
     * Sends resource to a Terminal in another room with the specified name.
     * @param resourceType One of the RESOURCE_* constants.
     * @param amount The amount of resources to be sent. The minimum amount is 100.
     * @param destination The name of the target room. You don't have to gain visibility in this room.
     * @param description The description of the transaction. It is visible to the recipient. The maximum length is 100 characters.
     */
    send(resourceType: ResourceConstant, amount: number, destination: string, description?: string): ScreepsReturnCode;
}

interface StructureTerminalConstructor extends _Constructor<StructureTerminal>, _ConstructorById<StructureTerminal> {}

declare const StructureTerminal: StructureTerminalConstructor;

/**
 * Contains up to 2,000 resource units. Can be constructed in neutral rooms. Decays for 5,000 hits per 100 ticks.
 */
interface StructureContainer extends Structure<STRUCTURE_CONTAINER> {
    readonly prototype: StructureContainer;
    /**
     * An object with the structure contents. Each object key is one of the RESOURCE_* constants, values are resources
     * amounts. Use _.sum(structure.store) to get the total amount of contents
     */
    store: StoreDefinition;
    /**
     * The total amount of resources the structure can contain.
     */
    storeCapacity: number;
    /**
     * The amount of game ticks when this container will lose some hit points.
     */
    ticksToDecay: number;
}

interface StructureContainerConstructor extends _Constructor<StructureContainer>, _ConstructorById<StructureContainer> {}

declare const StructureContainer: StructureContainerConstructor;

/**
 * Launches a nuke to another room dealing huge damage to the landing area.
 * Each launch has a cooldown and requires energy and ghodium resources. Launching
 * creates a Nuke object at the target room position which is visible to any player
 * until it is landed. Incoming nuke cannot be moved or cancelled. Nukes cannot
 * be launched from or to novice rooms.
 */
interface StructureNuker extends OwnedStructure<STRUCTURE_NUKER> {
    readonly prototype: StructureNuker;
    /**
     * The amount of energy contained in this structure.
     */
    energy: number;
    /**
     * The total amount of energy this structure can contain.
     */
    energyCapacity: number;
    /**
     * The amount of energy contained in this structure.
     */
    ghodium: number;
    /**
     * The total amount of energy this structure can contain.
     */
    ghodiumCapacity: number;
    /**
     * The amount of game ticks the link has to wait until the next transfer is possible.
     */
    cooldown: number;
    /**
     * Launch a nuke to the specified position.
     * @param pos The target room position.
     */
    launchNuke(pos: RoomPosition): ScreepsReturnCode;
}

interface StructureNukerConstructor extends _Constructor<StructureNuker>, _ConstructorById<StructureNuker> {}

declare const StructureNuker: StructureNukerConstructor;

/**
 * A non-player structure.
 * Instantly teleports your creeps to a distant room acting as a room exit tile.
 * Portals appear randomly in the central room of each sector.
 */
interface StructurePortal extends Structure<STRUCTURE_PORTAL> {
    readonly prototype: StructurePortal;
    /**
     * If this is an inter-room portal, then this property contains a RoomPosition object leading to the point in the destination room.
     * If this is an inter-shard portal, then this property contains an object with shard and room string properties.
     * Exact coordinates are undetermined, the creep will appear at any free spot in the destination room.
     */
    destination: RoomPosition | { shard: string; room: string };
    /**
     * The amount of game ticks when the portal disappears, or undefined when the portal is stable.
     */
    ticksToDecay: number | undefined;
}

interface StructurePortalConstructor extends _Constructor<StructurePortal>, _ConstructorById<StructurePortal> {}

declare const StructurePortal: StructurePortalConstructor;

/**
 * A discriminated union on Structure.type of all owned structure types
 */
type AnyOwnedStructure =
    | StructureController
    | StructureExtension
    | StructureExtractor
    | StructureKeeperLair
    | StructureLab
    | StructureLink
    | StructureNuker
    | StructureObserver
    | StructurePowerBank
    | StructurePowerSpawn
    | StructureRampart
    | StructureSpawn
    | StructureStorage
    | StructureTerminal
    | StructureTower;

/**
 * A discriminated union on Structure.type of all structure types
 */
type AnyStructure = AnyOwnedStructure | StructureContainer | StructurePortal | StructureRoad | StructureWall;
/**
 * A remnant of dead creeps. This is a walkable structure.
 * <ul>
 *     <li>Decay: 5 ticks per body part of the deceased creep</li>
 * </ul>
 */
interface Tombstone extends RoomObject {
    /**
     * A unique object identificator.
     * You can use {@link Game.getObjectById} method to retrieve an object instance by its id.
     */
    id: string;
    /**
     * Time of death.
     */
    deathTime: number;
    /**
     * An object with the tombstone contents.
     * Each object key is one of the RESOURCE_* constants, values are resources amounts.
     * RESOURCE_ENERGY is always defined and equals to 0 when empty,
     * other resources are undefined when empty.
     * You can use lodash.sum to get the total amount of contents.
     */
    store: StoreDefinition;
    /**
     * The amount of game ticks before this tombstone decays.
     */
    ticksToDecay: number;
    /**
     * An object containing the deceased creep.
     */
    creep: Creep;
}

interface TombstoneConstructor extends _Constructor<Tombstone>, _ConstructorById<Tombstone> {}

declare const Tombstone: TombstoneConstructor;
