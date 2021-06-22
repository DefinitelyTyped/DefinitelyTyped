export type Size = number[];
export function buffer(size: Size, num: number, opt_size?: Size): Size;
export function hasArea(size: Size): boolean;
export function scale(size: Size, ratio: number, opt_size?: Size): Size;
export function toSize(size: number | Size, opt_size?: Size): Size;
