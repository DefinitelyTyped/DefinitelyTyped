// Type definitions for vcf 2.0
// Project: https://github.com/jhermsmeier/node-vcf
// Definitions by: mcpar-land <https://github.com/mcpar-land>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

/// <reference types="node" />

// tslint:disable-next-line npm-naming
export default vCard;

declare class vCard {
    constructor();

    add(key: PropertyType, value: string, params?: jCardParameters): vCard;

    addProperty(prop: vCard.Property): vCard;

    get(key: PropertyType): vCard.Property | vCard.Property[];

    parse(value: string|Buffer): vCard;

    set(key: PropertyType, value: string, params?: jCardParameters): vCard;

    setProperty(prop: vCard.Property): vCard;

    toJCard(version?: CardVersion): jCard;

    toJSON(): jCard;

    toString(version?: CardVersion, charset?: string): string;

    static EOL: string;

    static extension: string;

    private static foldLine(input: string, maxLength?: number, hardWrap?: boolean): string;

    static format(card: vCard, version?: CardVersion): string;

    static fromJSON(jcard: jCard): vCard;

    static isSupported(version: CardVersion): boolean;

    static mimeType: string;

    static normalize(input: string): string;

    static parse(value: string|Buffer): vCard[];

    private static parseLines(lines: ReadonlyArray<string>): any;

    static versions: CardVersion[];
}

declare namespace vCard {
    class Property {
        constructor(field: PropertyType, value: string, params?: jCardParameters);

        clone(): Property;

        is(type: string): boolean;

        isEmpty(): boolean;

        toJSON(): jCard;

        toString(version?: CardVersion): string;

        valueOf(): string;

        static fromJSON(data: jCard): Property;
    }
}

export type PropertyType =
	"begin" |
	"end" |
	"source" |
	"kind" |
	"xml" |
	"fn" |
	"n" |
	"nickname" |
	"photo" |
	"bday" |
	"anniversary" |
	"gender" |
	"adr" |
	"tel" |
	"email" |
	"impp" |
	"lang" |
	"tz" |
	"geo" |
	"title" |
	"role" |
	"logo" |
	"org" |
	"member" |
	"related" |
	"categories" |
	"note" |
	"prodid" |
	"rev" |
	"sound" |
	"uid" |
	"clientpidmap" |
	"url" |
	"version" |
	"key" |
	"fburl" |
	"caladruri" |
	"caluri";

export type ParameterType =
	"language" |
	"value" |
	"pref" |
	"altid" |
	"pid" |
	"type" |
	"mediatype" |
	"calscale" |
	"sort-as" |
	"geo" |
	"tz" |
	"group";

export type ValueDataType =
	"text" |
	"uri" |
	"date" |
	"time" |
	"date-time" |
	"date-and-or-time" |
	"timestamp" |
	"boolean" |
	"integer" |
	"float" |
	"utc-offset" |
	"language-tag";

export type CardVersion =
	"2.1" | "3.0" | "4.0";

export type CardHeader = "vcard";

export interface jCardParameters { [member: string]: string | string[]; }

export type jCardProperty = [ PropertyType, jCardParameters, ValueDataType, string | string[] ];

export type jCard = [ CardHeader, jCardProperty[] ];
