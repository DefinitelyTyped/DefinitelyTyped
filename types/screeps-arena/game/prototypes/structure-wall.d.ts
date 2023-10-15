declare module "game/prototypes" {
    export type STRUCTURE_WALL = "constructedWall";
    // export const STRUCTURE_WALL: STRUCTURE_WALL;
    export interface StructureWall extends Structure<STRUCTURE_WALL> {
        readonly prototype: StructureWall;
    }

    interface StructureWallConstructor extends _Constructor<StructureWall>, _ConstructorById<StructureWall> {}
    export const StructureWall: StructureWallConstructor;
}
