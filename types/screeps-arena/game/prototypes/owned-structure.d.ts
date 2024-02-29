declare module "game/prototypes" {
    interface OwnedStructureJSON extends StructureJSON {
        my: boolean | undefined;
    }
    /**
     * The base prototype for a structure that has an owner.
     */
    export interface OwnedStructure<T extends StructureConstant = StructureConstant> extends Structure<T> {
        readonly prototype: OwnedStructure;

        /**
         * Whether this is your own structure. Walls and roads don't have this property as they are considered neutral structures.
         */
        my: boolean;

        toJSON(): OwnedStructureJSON;
    }
    export const OwnedStructure: _Constructor<OwnedStructure>;
}
