import * as RAPIER from "@dimforge/rapier3d-compat";
import { LineSegments } from "three";

declare class RapierHelper extends LineSegments {
    world: RAPIER.World;

    constructor(world: RAPIER.World);

    update(): void;
    dispose(): void;
}

export { RapierHelper };
