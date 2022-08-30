import * as Entities from "./handlers/entities";
import * as Information from "./Information";

export default class Helper {
  constructor(contents: string);
  private _contents: string;
  private _parsed: Information.FileInfo | null;
  private _denormalised: Entities.Entity[] | null;
  private _groups: Entities.LayerGroupedEntities | null;

  contents: string;
  parsed: Information.FileInfo | null;
  denormalised: Entities.Entity[] | null;
  groups: Entities.LayerGroupedEntities | null;

  parse(): Information.FileInfo | null;
  denormalise(): Entities.Entity[] | null;
  group(): Entities.LayerGroupedEntities | null;
  toSVG(): Information.SVG;
  toPolylines(): Information.Polyline[];
}

export function parseValue(type: number, value: any): number;
export function convertToTypesAndValues(contentLines: string): Information.Property[];
export function separateSections(sections: Information.Section[]): Information.Section[];
export function reduceSection(acc: Information.Section[], section: Information.Section): Information.Section[];
