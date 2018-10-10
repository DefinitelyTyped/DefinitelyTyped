import Taglib from '../taglib-loader/Taglib';
import _TaglibLookup from './TaglibLookup';

export class TaglibLookup extends _TaglibLookup {}

export const registeredTaglibs: Taglib[];

export function registerTaglib(taglib: Taglib): void;

export function buildLookup(dirname: string): TaglibLookup;

export function clearCache(): void;
