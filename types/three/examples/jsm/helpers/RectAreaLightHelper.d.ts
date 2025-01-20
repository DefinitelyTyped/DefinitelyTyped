import { ColorRepresentation, Line, RectAreaLight } from "three";

export class RectAreaLightHelper extends Line {
    constructor(light: RectAreaLight, color?: ColorRepresentation);

    light: RectAreaLight;
    color: ColorRepresentation | undefined;

    dispose(): void;
}
