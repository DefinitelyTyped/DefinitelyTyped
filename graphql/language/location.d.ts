import { Source } from "graphql/language/source";


export interface SourceLocation {
    line: number;
    column: number;
}

export function getLocation(source: Source, position: number): SourceLocation;
