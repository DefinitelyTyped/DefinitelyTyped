import Common = require("./Common");
import Blocks = require("./handlers/blocks");
import Entities = require("./handlers/entities");
import Headers = require("./handlers/header");
import Tables = require("./handlers/tables");
import Utils = require("./Utils");

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
