import Color, { ColorObject } from './color';

export function uv(color: Color | ColorObject): [number, number];

export function xy(color: Color | ColorObject): [number, number];

export function register(color: typeof Color): void;
