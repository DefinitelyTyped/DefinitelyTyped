export interface AnimationData {
    positions: vec2[];
    scales: vec3[];
    rotations: vec3[];
    duration: number;
    compHeight: number;
    compWidth: number;
    frameRate: number;
    layerHeight: number;
    layerWidth: number;
}

declare global {
    namespace SnapchatLensStudio {
        interface ScriptApi {
            animationData?: AnimationData;
        }
    }
}
