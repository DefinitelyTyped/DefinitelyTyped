declare module "game/constants" {
  import {
    Creep,
    STRUCTURE_CONTAINER,
    STRUCTURE_EXTENSION,
    STRUCTURE_RAMPART,
    STRUCTURE_ROAD,
    STRUCTURE_SPAWN,
    STRUCTURE_TOWER,
    STRUCTURE_WALL,
    StructureContainer,
    StructureExtension,
    StructureRampart,
    StructureRoad,
    StructureSpawn,
    StructureTower,
    StructureWall
  } from "game/prototypes";
  export type BodyPartConstant = MOVE | WORK | CARRY | ATTACK | RANGED_ATTACK | TOUGH | HEAL | CLAIM;

  export type MOVE = "move";
  export type WORK = "work";
  export type CARRY = "carry";
  export type ATTACK = "attack";
  export type RANGED_ATTACK = "ranged_attack";
  export type TOUGH = "tough";
  export type HEAL = "heal";
  export type CLAIM = "claim";

  export const MOVE: MOVE;
  export const WORK: WORK;
  export const CARRY: CARRY;
  export const ATTACK: ATTACK;
  export const RANGED_ATTACK: RANGED_ATTACK;
  export const TOUGH: TOUGH;
  export const HEAL: HEAL;
  export const CLAIM: CLAIM;

  export type DirectionConstant = TOP | TOP_RIGHT | RIGHT | BOTTOM_RIGHT | BOTTOM | BOTTOM_LEFT | LEFT | TOP_LEFT;

  export type TOP = 1;
  export type TOP_RIGHT = 2;
  export type RIGHT = 3;
  export type BOTTOM_RIGHT = 4;
  export type BOTTOM = 5;
  export type BOTTOM_LEFT = 6;
  export type LEFT = 7;
  export type TOP_LEFT = 8;

  export const TOP: TOP;
  export const TOP_RIGHT: TOP_RIGHT;
  export const RIGHT: RIGHT;
  export const BOTTOM_RIGHT: BOTTOM_RIGHT;
  export const BOTTOM: BOTTOM;
  export const BOTTOM_LEFT: BOTTOM_LEFT;
  export const LEFT: LEFT;
  export const TOP_LEFT: TOP_LEFT;

  // Return Codes
  export type ScreepsReturnCode =
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

  export type OK = 0;
  export type ERR_NOT_OWNER = -1;
  export type ERR_NO_PATH = -2;
  export type ERR_NAME_EXISTS = -3;
  export type ERR_BUSY = -4;
  export type ERR_NOT_FOUND = -5;
  export type ERR_NOT_ENOUGH_RESOURCES = -6;
  export type ERR_NOT_ENOUGH_ENERGY = -6;
  export type ERR_INVALID_TARGET = -7;
  export type ERR_FULL = -8;
  export type ERR_NOT_IN_RANGE = -9;
  export type ERR_INVALID_ARGS = -10;
  export type ERR_TIRED = -11;
  export type ERR_NO_BODYPART = -12;
  export type ERR_NOT_ENOUGH_EXTENSIONS = -6;
  export type ERR_RCL_NOT_ENOUGH = -14;
  export type ERR_GCL_NOT_ENOUGH = -15;

  export type CreepActionReturnCode =
    | OK
    | ERR_NOT_OWNER
    | ERR_BUSY
    | ERR_INVALID_TARGET
    | ERR_NOT_IN_RANGE
    | ERR_NO_BODYPART
    | ERR_TIRED;

  export type CreepMoveReturnCode = OK | ERR_NOT_OWNER | ERR_BUSY | ERR_TIRED | ERR_NO_BODYPART;

  export const CARRY_CAPACITY: number;
  export const CREEP_SPAWN_TIME: number;

  export const ERR_BUSY: ERR_BUSY;
  export const ERR_FULL: ERR_FULL;
  export const ERR_INVALID_ARGS: ERR_INVALID_ARGS;
  export const ERR_INVALID_TARGET: ERR_INVALID_TARGET;
  export const ERR_NAME_EXISTS: ERR_NAME_EXISTS;
  export const ERR_NOT_ENOUGH_ENERGY: ERR_NOT_ENOUGH_ENERGY;
  export const ERR_NOT_ENOUGH_EXTENSIONS: ERR_NOT_ENOUGH_EXTENSIONS;
  export const ERR_NOT_ENOUGH_RESOURCES: ERR_NOT_ENOUGH_RESOURCES;
  export const ERR_NOT_FOUND: ERR_NOT_FOUND;
  export const ERR_NOT_IN_RANGE: ERR_NOT_IN_RANGE;
  export const ERR_NOT_OWNER: ERR_NOT_OWNER;
  export const ERR_NO_BODYPART: ERR_NO_BODYPART;
  export const ERR_NO_PATH: ERR_NO_PATH;
  export const ERR_TIRED: ERR_TIRED;
  export const OK: OK;

  export type OBSTACLE_OBJECT_TYPES =
    | AnyCreep
    | STRUCTURE_TOWER
    | STRUCTURE_WALL
    | STRUCTURE_SPAWN
    | STRUCTURE_EXTENSION;
  // | STRUCTURE_LINK

  export const OBSTACLE_OBJECT_TYPES: OBSTACLE_OBJECT_TYPES;
  export const RANGED_ATTACK_DISTANCE_RATE: any[];
  export const RANGED_ATTACK_POWER: number;
  export const HEAL_POWER: number;
  export const ATTACK_POWER: number;
  export const RANGED_HEAL_POWER: number;

  export const ROAD_WEAROUT: number;

  export type TERRAIN_SWAMP = 2;
  export type TERRAIN_WALL = 1;

  export const TERRAIN_SWAMP: TERRAIN_SWAMP;
  export const TERRAIN_WALL: TERRAIN_WALL;

  export const TOWER_CAPACITY: number;
  export const TOWER_ENERGY_COST: number;
  export const TOWER_FALLOFF: number;
  export const TOWER_FALLOFF_RANGE: number;
  export const TOWER_HITS: number;
  export const TOWER_OPTIMAL_RANGE: number;
  export const TOWER_POWER_ATTACK: number;
  export const TOWER_POWER_HEAL: number;
  export const TOWER_POWER_REPAIR: number;
  export const TOWER_RANGE: number;
  export const TOWER_COOLDOWN: number;

  export const RESOURCE_ENERGY: "energy";

  export type ResourceConstant = typeof RESOURCE_ENERGY;

  export type AnyCreep = Creep; /* | PowerCreep;*/

  export const BODYPART_COST: { [index in BodyPartConstant]: number };
  export const BODYPART_HITS: number;

  export const DISMANTLE_COST: number;
  export const DISMANTLE_POWER: number;
  export const HARVEST_POWER: number;
  export const MAX_CREEP_SIZE: number;

  export const REPAIR_COST: number;
  export const REPAIR_POWER: number;
  // export const RESOURCES_ALL = ["energy"];

  export const RESOURCE_DECAY: number;
  export const SOURCE_ENERGY_REGEN: number;

  export const BUILD_POWER: number;

  export const CONSTRUCTION_COST_ROAD_SWAMP_RATIO: number;
  export const CONSTRUCTION_COST_ROAD_WALL_RATIO: number;
  export const CONTAINER_CAPACITY: number;
  export const CONTAINER_HITS: number;

  export const EXTENSION_ENERGY_CAPACITY: number;
  export const EXTENSION_HITS: number;
  export const MAX_CONSTRUCTION_SITES: number;

  export const CONSTRUCTION_COST: {
    StructureTower: number;
    StructureExtension: number;
    StructureRoad: number;
    StructureContainer: number;
    StructureWall: number;
    StructureRampart: number;
    StructureSpawnt: number;
  };

  export type BuildableStructureConstant =
    | STRUCTURE_TOWER
    | STRUCTURE_EXTENSION
    | STRUCTURE_ROAD
    | STRUCTURE_CONTAINER
    | STRUCTURE_WALL
    | STRUCTURE_RAMPART
    | STRUCTURE_SPAWN;

  export type BuildableStructure =
    | StructureTower
    | StructureExtension
    | StructureRoad
    | StructureContainer
    | StructureWall
    | StructureRampart
    | StructureSpawn;

  export const RAMPART_HITS: number;
  export const RAMPART_HITS_MAX: number;
  export const ROAD_HITS: number;

  export const STRUCTURE_PROTOTYPES: {
    StructureTower: STRUCTURE_TOWER;
    StructureSpawn: STRUCTURE_SPAWN;
    StructureRoad: STRUCTURE_ROAD;
    StructureRampart: STRUCTURE_RAMPART;
    StructureExtension: STRUCTURE_EXTENSION;
    StructureWall: STRUCTURE_WALL;
    StructureContainer: STRUCTURE_CONTAINER;
  };

  export const WALL_HITS: number;
  export const WALL_HITS_MAX: number;
  export const SPAWN_ENERGY_CAPACITY: number;
  export const SPAWN_HITS: number;
}
