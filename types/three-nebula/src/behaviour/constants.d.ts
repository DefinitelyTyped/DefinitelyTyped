import { ease } from "../ease";
export interface Infinity extends Number {
    Infinity: true;
}
export type DEFAULT_LIFE = Infinity;

export const DEFAULT_ATTRACITON_RADIUS: number;
export const DEFAULT_ATTRACTION_FORCE_SCALAR: number;
export const DEFAULT_BEHAVIOUR_EASING: typeof ease.easeLinear;
export const DEFAULT_BEHAVIOUR_EASING_TYPE: string;
export const DEFAULT_RANDOM_DRIFT_DELAY: number;
export const PARTICLE_ALPHA_THRESHOLD: number;
export const PARTICLE_LENGTH_SQ_THRESHOLD: number;
export const DEFAULT_CROSS_TYPE: string;

export type EaseLinear = (n?: number) => number;
