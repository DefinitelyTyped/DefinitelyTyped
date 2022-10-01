import Color, { ColorObject } from './color';

export function getLuminance(color: Color | ColorObject): number;

export function setLuminance(color: Color | ColorObject): void;

export function register(color: typeof Color): void;
