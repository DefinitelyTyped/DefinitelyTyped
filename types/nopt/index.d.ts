interface CommandData {
    [key: string]: string;
}

interface TypeDefs {
    [key: string]: TypeInfo;
}

interface TypeInfo {
    type: Object;
    validate: (data: CommandData, k: string, val: string) => boolean;
}

declare namespace nopt {
    export function clean(data: CommandData, types: FlagTypeMap, typeDefs?: TypeDefs): string;
    export var typeDefs: TypeDefs;
}

interface FlagTypeMap {
    [k: string]: Object;
}

interface ShortFlags {
    [k: string]: string[] | string;
}

declare function nopt(types: FlagTypeMap, shorthands?: ShortFlags, args?: string[], slice?: number): OptionsParsed;

interface OptionsParsed {
    [k: string]: any;
    argv: {
        remain: string[];
        cooked: string[];
        original: string[];
    };
}

export = nopt;
