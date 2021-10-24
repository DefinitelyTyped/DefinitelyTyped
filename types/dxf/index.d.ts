// Type definitions for dxf 4.6
// Project: "https://github.com/bjnortier/dxf"
// Definitions by: Preston Smith <https://github.com/prestonii>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 4.1

import Helper from './Helper';
import * as Blocks from './Blocks';
import * as Common from './Common';
import * as Entities from './Entities';
import * as Header from './Header';
import * as Information from './Information';
import * as Layers from './Layers';
import * as Styles from './Styles';
import * as Tables from './Tables';
import * as Utils from './Utils';

export interface config {
  verbose: boolean;
}

export function parseString(string: string): Information.FileInfo;
export function denormalise(parsed: Information.FileInfo): Entities.Entity[];
export function groupEntitiesByLayer(entities: Entities.Entity[]): Entities.LayerGroupedEntities;
export function toPolylines(parsed: Information.FileInfo): Information.Polyline[];
export function toSVG(parsed: Information.FileInfo): Information.SVG;
export const colors: Common.ColorNumbers;
export default Helper;

export { Blocks, Common, Entities, Header, Information, Layers, Styles, Tables, Utils };
