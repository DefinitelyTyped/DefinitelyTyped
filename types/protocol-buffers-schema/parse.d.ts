import stringify from "./stringify";
interface Option {
    [key: string]: string | boolean
}
interface Options {
    [key: string]: string | boolean | Option | Option[]
}

interface Enum  {
    name: string;
    values: {[key: string]: {
            value: number;
            options: Options;
    }};
    options: Options;
}

interface FieldOptions {
    [key: string]: string
}

interface Field {
    name: string;
    type: string;
    tag: number;
    map: {
        from: string,
        to: string
    };
    oneof: null | string;
    required: boolean;
    repeated: boolean;
    options: FieldOptions;
}

interface Message {
    name: string;
    enums: Enum[];
    extends: Extend[];
    extensions: Extension[]
    messages: Message[];
    fields: Field[];
}

interface Extend {
    name: string
    message: Message
}

interface Extension {
    from: number
    to: number
}

interface Service {
    name: string;
    methods: Method[];
    options: Options;
}

interface Method {
    name: string;
    input_type: string;
    output_type: string;
    client_streaming: boolean;
    server_streaming: boolean;
    options: Options;
}

interface Schema {
    syntax: number;
    package: null | string;
    imports: string[];
    enums: Enum[];
    messages: Message[];
    options: Options;
    extends: Extend[];
    service?: Service[];
}

declare function parse(buffer: string | Buffer): Schema;

// declare namespace parse {
//     parse
//     stringify
// }
export = parse;