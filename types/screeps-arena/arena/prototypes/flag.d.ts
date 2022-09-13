declare module "arena/prototypes" {
  import { GameObject, _Constructor, _ConstructorById } from "game/prototypes";
  export interface Flag extends GameObject {
    readonly prototype: Flag;
    /**
     * Equals to true or false if the flag is owned.
     * Returns undefined if it is neutral.
     */
    my: boolean | undefined;
  }

  interface FlagConstructor extends _Constructor<Flag>, _ConstructorById<Flag> {}
  export const Flag: FlagConstructor;
}
