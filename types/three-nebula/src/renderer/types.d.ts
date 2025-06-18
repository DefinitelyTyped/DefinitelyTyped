export const RENDERER_TYPE_BASE: "BaseRenderer";
export const RENDERER_TYPE_CUSTOM: "CustomRenderer";
export const RENDERER_TYPE_SPRITE: "SpriteRenderer";
export const RENDERER_TYPE_MESH: "MeshRenderer";
export const RENDERER_TYPE_GPU: "GPURenderer";
export const RENDERER_TYPE_GPU_MOBILE: "MobileGPURenderer";
export const RENDERER_TYPE_GPU_DESKTOP: "DesktopGPURenderer";

export type RENDERER_TYPES =
    | typeof RENDERER_TYPE_BASE
    | typeof RENDERER_TYPE_CUSTOM
    | typeof RENDERER_TYPE_SPRITE
    | typeof RENDERER_TYPE_MESH
    | typeof RENDERER_TYPE_GPU
    | typeof RENDERER_TYPE_GPU_MOBILE
    | typeof RENDERER_TYPE_GPU_DESKTOP;
