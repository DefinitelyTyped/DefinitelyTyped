/// <reference types="node" />
import { XMLToStringOptions } from "xmlbuilder";

// plist
export as namespace plist;

// plist.parse()
export function parse(xml: string): PlistValue;
// plist.build()
export function build(obj: PlistValue, opts?: PlistBuildOptions): string;

// PlistValue
export type PlistValue = string | number | boolean | Date | Buffer | PlistObject | PlistArray;
export interface PlistObject {
    readonly [x: string]: PlistValue;
}
export interface PlistArray extends ReadonlyArray<PlistValue> {}

// PlistBuildOptions
// The instance of this type is passed to 'xmlbuilder' module as it is.
export type PlistBuildOptions = XMLToStringOptions;
