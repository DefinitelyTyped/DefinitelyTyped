import { Extent } from '../extent';
import Projection from './Projection';

export const EXTENT: Extent;
export const HALF_SIZE: number;
export const PROJECTIONS: Projection[];
export const RADIUS: number;
export const WORLD_EXTENT: Extent;
export function fromEPSG4326(input: number[], opt_output?: number[], opt_dimension?: number): number[];
export function toEPSG4326(input: number[], opt_output?: number[], opt_dimension?: number): number[];
