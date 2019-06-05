import Taglib from '../taglib-loader/Taglib';

export function find(dirname: string, registeredTaglibs: Taglib[]): Taglib[];

export function excludeDir(dir: string): void;

export function excludePackage(name: string): void;

export function reset(): void;

export function clearCache(): void;
