import Projection from './proj/Projection';
import { UrlFunction } from './Tile';
import { TileCoord } from './tilecoord';
import TileGrid from './tilegrid/TileGrid';

export function createFromTemplate(template: string, tileGrid: TileGrid): UrlFunction;
export function createFromTemplates(templates: string[], tileGrid: TileGrid): UrlFunction;
export function createFromTileUrlFunctions(tileUrlFunctions: UrlFunction[]): UrlFunction;
export function expandUrl(url: string): string[];
export function nullTileUrlFunction(tileCoord: TileCoord, pixelRatio: number, projection: Projection): string | undefined;
