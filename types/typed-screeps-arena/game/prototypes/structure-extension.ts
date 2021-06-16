declare module "game/prototypes" {
  import { RESOURCE_ENERGY } from "game/constants";
  export type STRUCTURE_EXTENSION = "extension";
  /**
   * Contains energy which can be spent on spawning bigger creeps. Extensions can
   * be placed anywhere in the room, any spawns will be able to use them regardless
   * of distance.
   */
  interface StructureExtension extends OwnedStructure<STRUCTURE_EXTENSION> {
    readonly prototype: StructureExtension;

    /**
     * A Store object that contains cargo of this structure.
     */
    store: Store<typeof RESOURCE_ENERGY>;
  }

  interface StructureExtensionConstructor
    extends _Constructor<StructureExtension>,
      _ConstructorById<StructureExtension> {}

  export const StructureExtension: StructureExtensionConstructor;
}
