import * as Headers from './handlers/header';
import * as Blocks from './handlers/blocks';
import * as Entities from './handlers/entities';
import * as Tables from './handlers/tables';
import * as Common from './Common';
import * as Utils from './Utils';

export interface FileInfo {
    header: Headers.Header;
    blocks: Blocks.Block[];
    entities: Entities.Entity[];
    tables: Tables.DXFTable;
}

export type SVG = string;
export interface Polyline {
    rgb: Common.ColorNumber;
    vertices: Utils.UtilVertex[];
}

export type Property = [number, number];
export type SectionType = string;
export type Section = [Property, SectionType];
