declare module "game/prototypes" {
    /** Contains energy that can be spent on spawning bigger creeps */
    export class StructureExtension extends OwnedStructure {
        /** A {@link Store} object that contains cargo of this structure. */
        store: Store;
    }
}
