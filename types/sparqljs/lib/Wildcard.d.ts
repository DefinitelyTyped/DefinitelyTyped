import * as RdfJs from "rdf-js";

declare class Wildcard {
    readonly termType: "Wildcard";
    readonly value: "*";
    equals(other: RdfJs.Term | null | undefined): boolean;
}

export = Wildcard;
