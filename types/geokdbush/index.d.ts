// Type definitions for geokdbush 1.1
// Project: https://github.com/mourner/geokdbush
// Definitions by: Denis Carriere <https://github.com/DenisCarriere>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.4
import KDBush from 'kdbush';

export function around<T>(
  index: KDBush<T>,
  longitude: number,
  latitude: number,
  maxResults?: number,
  maxDistance?: number,
  filterFn?: any): T[];

export function distance(
  longitude1: number,
  latitude1: number,
  longitude2: number,
  latitude2: number): number;
