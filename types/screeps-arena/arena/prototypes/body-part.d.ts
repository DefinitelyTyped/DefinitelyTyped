declare module "arena/prototypes" {
  import { GameObject, _Constructor, _ConstructorById } from "game/prototypes";
  import { BodyPartConstant } from "game/constants";

  export interface BodyPart extends GameObject {
    readonly prototype: BodyPart;
    /**
     * The type of the body part.
     */
    type: BodyPartConstant;
    /**
     * The number of ticks until this item disappears.
     */
    ticksToDecay: number;
  }
  interface BodyPartConstructor extends _Constructor<BodyPart>, _ConstructorById<BodyPart> {}
  export const BodyPart: BodyPartConstructor;
}
