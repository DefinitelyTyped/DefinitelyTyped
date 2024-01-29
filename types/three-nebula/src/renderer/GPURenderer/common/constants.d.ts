export interface DefaultRendererOptions {
    blending: string;
    baseColor: number;
    depthTest: boolean;
    depthWrite: boolean;
    transparent: boolean;
    maxParticles: number;
    shouldDebugTextureAtlas: boolean;
    shouldForceDesktopRenderer: boolean;
    shouldForceMobileRenderer: boolean;
}

export const DEFAULT_RENDERER_OPTIONS: DefaultRendererOptions;
