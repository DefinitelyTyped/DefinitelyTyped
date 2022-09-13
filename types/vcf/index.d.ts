// Type definitions for vcf 2.0
// Project: https://github.com/jhermsmeier/node-vcf
// Definitions by: mcpar-land <https://github.com/mcpar-land>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

/// <reference types="node" />

export = vCard;

declare class vCard {
    constructor();

    version: CardVersion;

    data: {[key: string]: vCard.Property | vCard.Property[] };

    /** Add a vCard property  */
    add(
        key: string,
        value: string,
        params?: { [key: string]: string | string[] }
    ): vCard;

    /** Add a vCard property  */
    addProperty(prop: vCard.Property): vCard;

    /** Get a vCard property */
    get(key: string): vCard.Property | vCard.Property[];

    /** Parse a vcf formatted vCard */
    parse(value: string|Buffer): vCard;

    /** Set a vCard property */
    set(
        key: string,
        value: string,
        params?: { [key: string]: string | string[] }
    ): vCard;

    /** Set a vCard property */
    setProperty(prop: vCard.Property): vCard;

    /** Returns a formatted jCard JSON object */
    toJCard(version?: CardVersion): jCard;

    /** Returns a formatted jCard JSON object */
    toJSON(): jCard;

    /** Returns a formatted vcf string */
    toString(version?: CardVersion, charset?: string): string;

    /** Is equal to `\r\n` */
    static EOL: '\r\n';

    /** is equal to `.vcf` */
    static extension: '.vcf';

    private static foldLine(
        input: string,
        maxLength?: number,
        hardWrap?: boolean
    ): string;

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

    static versions: ['2.1', '3.0', '4.0'];
}

declare namespace vCard {
    class Property {
        constructor(
            field: string,
            value: string,
            params?: { [key: string]: string | string[]; }
        );

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

type CardVersion =
    "2.1" | "3.0" | "4.0";

type jCardProperty = [
    string,
    { [key: string]: string | string[] },
    string, string | string[]
];

/** jCard standard format */
type jCard = [ 'vcard', jCardProperty[] ];
