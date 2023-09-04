import { Color } from "./common";
import { Hsl } from "./hsl/types";
import { Rgb } from "./rgb/types";

export function serializeHex(color: undefined): undefined;
export function serializeHex(color: Omit<Rgb, "alpha">): string;

export function serializeHex8(color: undefined): undefined;
export function serializeHex8(color: Omit<Rgb, "mode">): string;

export function serializeRgb(color: undefined): undefined;
export function serializeRgb(color: Partial<Rgb>): string | undefined;

export function serializeHsl(color: undefined): undefined;
export function serializeHsl(color: Partial<Hsl>): string | undefined;

export function formatCss(c: undefined): undefined;
export function formatCss(c: Color): string;
export function formatCss(c: undefined | string | Color): string | undefined;

export function formatHex(c: undefined): undefined;
export function formatHex(c: Color): string;
export function formatHex(c: undefined | string | Color): string | undefined;

export function formatHex8(c: undefined): undefined;
export function formatHex8(c: Color): string;
export function formatHex8(c: undefined | string | Color): string | undefined;

export function formatRgb(c: undefined): undefined;
export function formatRgb(c: Color): string;
export function formatRgb(c: undefined | string | Color): string | undefined;

export function formatHsl(c: undefined): undefined;
export function formatHsl(c: Color): string;
export function formatHsl(c: undefined | string | Color): string | undefined;
