// Primitives
export const DEFAULT_MAX_PARTICLES: number;
export const VECTOR_3_SIZE: number;
export const RGBA_SIZE: number;
export const FLOAT_BYTE_SIZE: number; // Byte sizes

export const POSITION_BYTE_SIZE: number;
export const SIZE_BYTE_SIZE: number;
export const RGBA_BYTE_SIZE: number;
export const ALL_BYTE_SIZES: number[];
export const PARTICLE_BYTE_SIZE: number;

export const POSITION_ATTRIBUTE_BUFFER_SIZE: number;
export const SIZE_ATTRIBUTE_BUFFER_SIZE: number;
export const RGBA_ATTRIBUTE_BUFFER_SIZE: number;
export const ALPHA_ATTRIBUTE_BUFFER_SIZE: number;
export const TEXID_ATTRIBUTE_BUFFER_SIZE: number;
export interface AttributeSizeMap {
    position: typeof POSITION_ATTRIBUTE_BUFFER_SIZE;
    size: typeof SIZE_ATTRIBUTE_BUFFER_SIZE;
    color: typeof RGBA_ATTRIBUTE_BUFFER_SIZE;
    alpha: typeof ALPHA_ATTRIBUTE_BUFFER_SIZE;
    texID: typeof TEXID_ATTRIBUTE_BUFFER_SIZE;
}
export const ATTRIBUTE_TO_SIZE_MAP: AttributeSizeMap;

export const PARTICLE_STRIDE: number[];
