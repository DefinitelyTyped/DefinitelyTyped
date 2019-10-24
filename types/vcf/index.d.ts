// Type definitions for vcf 2.0
// Project: https://github.com/jhermsmeier/node-vcf
// Definitions by: mcpar-land <https://github.com/mcpar-land>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

/// <reference types="node" />

// tslint:disable-next-line npm-naming
export = vCard;

declare class vCard {
    constructor();

    /** Add a vCard property  */
    add(key: PropertyType, value: string, params?: jCardParameters): vCard;

    /** Add a vCard property  */
    addProperty(prop: vCard.Property): vCard;

    /** Get a vCard property */
    get(key: PropertyType): vCard.Property | vCard.Property[];

    /** Parse a vcf formatted vCard */
    parse(value: string|Buffer): vCard;

    /** Set a vCard property */
    set(key: PropertyType, value: string, params?: jCardParameters): vCard;

    /** Set a vCard property */
    setProperty(prop: vCard.Property): vCard;

    /** Returns a formatted jCard JSON object */
    toJCard(version?: CardVersion): jCard;

    /** Returns a formatted jCard JSON object */
    toJSON(): jCard;

    /** Returns a formatted vcf string */
    toString(version?: CardVersion, charset?: string): string;

    /** Is equal to `\r\n` */
    static EOL: string;

    /** is equal to `.vcf` */
    static extension: string;

    private static foldLine(input: string, maxLength?: number, hardWrap?: boolean): string;

    static format(card: vCard, version?: CardVersion): string;

    /** Returns a vCard object from a jCard JSON object */
    static fromJSON(jcard: jCard): vCard;

    static isSupported(version: CardVersion): boolean;

    /** Is equal to `text/vcard` */
    static mimeType: string;

    static normalize(input: string): string;

    /** Returns an *array* of vCard objects from a multiple-card string. */
    static parse(value: string|Buffer): vCard[];

    private static parseLines(lines: ReadonlyArray<string>): any;

    static versions: CardVersion[];
}

declare namespace vCard {
    class Property {
        constructor(field: PropertyType, value: string, params?: jCardParameters);

        /** Returns a deep-copied clone of the property */
        clone(): Property;

        /** Check if the property is of a given type */
        is(type: string): boolean;

        /** Check whether the property is empty */
        isEmpty(): boolean;

        /** Returns a jCard formatted JSON object of just this property */
        toJSON(): jCardProperty;

        /** Returns a vcf formatted string of just this property */
        toString(version?: CardVersion): string;

        /** returns the value of the property */
        valueOf(): string;

        /** Creates a property from a jCard formatted JSON object */
        static fromJSON(data: jCardProperty): Property;
    }
}

/** vCard properties as specified here: https://tools.ietf.org/html/rfc6350#section-6 */
type PropertyType =
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

/** vCard property parameters as specified here: https://tools.ietf.org/html/rfc6350#section-5 */
type ParameterType =
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

/** vCard property value data types as specified here: https://tools.ietf.org/html/rfc6350#section-4 */
type ValueDataType =
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

type CardVersion =
	"2.1" | "3.0" | "4.0";

type CardHeader = "vcard";

interface jCardParameters { [member: string]: string | string[]; }

type jCardProperty = [ PropertyType, jCardParameters, ValueDataType, string | string[] ];

/** jCard standard format */
type jCard = [ CardHeader, jCardProperty[] ];
