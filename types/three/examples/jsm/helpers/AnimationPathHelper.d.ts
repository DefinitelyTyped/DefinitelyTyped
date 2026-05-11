import {
    AnimationClip,
    BufferGeometry,
    ColorRepresentation,
    Line,
    LineBasicMaterial,
    Object3D,
    Points,
    PointsMaterial,
} from "three";

export interface AnimationPathHelperOptions {
    color?: ColorRepresentation | undefined;
    markerColor?: ColorRepresentation | undefined;
    divisions?: number | undefined;
    showMarkers?: boolean | undefined;
    markerSize?: number | undefined;
}

declare class AnimationPathHelper extends Object3D {
    readonly isAnimationPathHelper: boolean;

    root: Object3D;
    clip: AnimationClip;
    object: Object3D;
    divisions: number;

    line: Line<BufferGeometry, LineBasicMaterial>;
    points: Points<BufferGeometry, PointsMaterial> | null;

    constructor(root: Object3D, clip: AnimationClip, object: Object3D, options?: AnimationPathHelperOptions);

    setColor(color: ColorRepresentation): void;
    setMarkerColor(color: ColorRepresentation): void;
    dispose(): void;
}

export { AnimationPathHelper };
