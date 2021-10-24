  import * as Headers from './Header';
  import * as Blocks from './Blocks';
  import * as Entities from './Entities';
  import * as Tables from './Tables';
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
