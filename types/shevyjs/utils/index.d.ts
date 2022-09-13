import { fontScalePresets } from '../constants';
import { Scale, Factor } from '../types';
import Shevy from '../index';

export function getFontValue(size: string): number;

export function getFontUnit(size: string): string;

export function trimArrayToMaxOf6<T>(array: ReadonlyArray<T>): T[];

export function getFontScale(fontScale: Scale | keyof typeof fontScalePresets): number[];

export function calcHeadingFontSize(thisArg: Shevy, factor: Factor): string;

export function calcHeadingLineHeight(thisArg: Shevy, factor: Factor): number;

export function calcHeadingMarginBottom(thisArg: Shevy, factor: Factor, addMarginBottom?: boolean): string | undefined;
