declare namespace env {
    interface Mappings {
        [enviromentVariableName: string]: Mapping;
    }

    type Mapping = IntegerMapping | BooleanMapping | GenericMapping;

    interface GenericMapping {
        keypath: string;
        type?: string | undefined;
        [opt: string]: any;
    }

    interface IntegerMapping extends GenericMapping {
        type: "integer";
        radix: number;
    }

    interface BooleanMapping {
        type: "boolean";
        strict: boolean;
    }

    interface Parsers {
        [parserName: string]: (str: string, opts: any) => any;
    }

    interface Options {
        parsers: Parsers;
    }
}

declare function env(map: env.Mappings, options?: env.Options): any;
export = env;
