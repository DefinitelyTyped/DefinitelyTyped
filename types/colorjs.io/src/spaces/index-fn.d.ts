export type Spaces = keyof typeof import('./index-fn');

export { default as XYZ_D65 } from './xyz-d65';
export { default as XYZ_D50 } from './xyz-d50';
export { default as XYZ_ABS_D65 } from './xyz-abs-d65';
export { default as Lab } from './lab';
export { default as LCH } from './lch';
export { default as sRGB_Linear } from './srgb-linear';
export { default as sRGB } from './srgb';
export { default as HSL } from './hsl';
export { default as HWB } from './hwb';
export { default as HSV } from './hsv';
export { default as P3_Linear } from './p3-linear';
export { default as P3 } from './p3';
export { default as A98RGB_Linear } from './a98rgb-linear';
export { default as A98RGB } from './a98rgb';
export { default as ProPhoto_Linear } from './prophoto-linear';
export { default as ProPhoto } from './prophoto';
export { default as REC_2020_Linear } from './rec2020-linear';
export { default as REC_2020 } from './rec2020';
export { default as OKLab } from './oklab';
export { default as OKLCH } from './oklch';

export * from './index-fn-hdr';
